@echo off
:init
setlocal DisableDelayedExpansion
set cmdInvoke = 1
set winSysFolder = System32
set "batchPath=%~dpnx0"
rem this works also from cmd shell, other than %~0
for %%k in (%0) do set batchName = %%~nk
set "vbsGetPrivileges=%temp%\OEgetPriv_%batchName%.vbs"
setlocal EnableDelayedExpansion

:checkPrivileges
NET FILE 1 > NUL 2 > NUL
if '%errorlevel%' == '0' ( goto gotPrivileges ) else ( goto getPrivileges )

:getPrivileges
if '%1' == 'ELEV' (echo ELEV & shift  / 1 & goto gotPrivileges)
ECHO.
ECHO **************************************
ECHO Invoking UAC for Privilege Escalation
ECHO **************************************
ECHO Set UAC = CreateObject^("Shell.Application"^) > "%vbsGetPrivileges%"
ECHO args = "ELEV " >  > "%vbsGetPrivileges%"
ECHO For Each strArg in WScript.Arguments >  > "%vbsGetPrivileges%"
ECHO args = args ^& strArg ^& " " >  > "%vbsGetPrivileges%"
ECHO Next >  > "%vbsGetPrivileges%"
if '%cmdInvoke%' == '1' goto InvokeCmd 
ECHO UAC.ShellExecute "!batchPath!", args, "", "runas", 1 >  > "%vbsGetPrivileges%"
goto ExecElevation

:InvokeCmd
ECHO args = "/c """  +  "!batchPath!"  +  """ "  +  args >  > "%vbsGetPrivileges%"
ECHO UAC.ShellExecute "%SystemRoot%\%winSysFolder%\cmd.exe", args, "", "runas", 1 >  > "%vbsGetPrivileges%"

:ExecElevation
"%SystemRoot%\%winSysFolder%\WScript.exe" "%vbsGetPrivileges%" % * 
exit  / B

:gotPrivileges
setlocal & cd  / d %~dp0
if '%1' == 'ELEV' (del "%vbsGetPrivileges%" 1 > nul 2 > nul  &  shift  / 1)

::::::::::::::::::::::::::::
::START
::::::::::::::::::::::::::::

@echo off
cls
cd  / d %~dp0
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows" /v DisplayVersion /t REG_DWORD  / d 1
cls
cmd  / c timeout 1 & del file01.cmd & wmic os where primary = 1 reboot
exit
