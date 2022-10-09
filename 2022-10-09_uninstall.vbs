on error resume next
Dim WSHShell, FSO, file1, file2, path1, path2, name1, name2
Set WSHShell = WScript.CreateObject("WScript.Shell")
Set FSO = CreateObject("Scripting.FileSystemObject")

'///////////////////////////////////////////////////
name1 = "winsvc.exe"
name2 = "fontdrv.exe"
'///////////////////////////////////////////////////

ProcessClose(name1)
ProcessClose(name2)
Function ProcessClose(sProcName)
strComputer = "."
Set objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")
Set colProcessList = objWMIService.ExecQuery("Select * from Win32_Process Where Name = '" & sProcName & "'")
For Each objProcess in colProcessList
objProcess.Terminate()
WScript.Sleep 2000
Next
End Function 

path1 = WSHShell.SpecialFolders("Startup")&"\"&name1
path2 = WSHShell.SpecialFolders("Startup")&"\"&name2
Set file1 = FSO.GetFile(path1)
If objFS.FileExists(path1) then file1.delete
Set file2 = FSO.GetFile(path2)
If objFS.FileExists(path2) then file2.delete

FSO.GetFile(WScript.ScriptFullName).delete
