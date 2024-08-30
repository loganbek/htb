<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/49/section/457
// Platform Version: V1
// Module ID: 49
// Module Name: Windows Fundamentals
// Module Difficulty: Fundamental
// Section ID: 457
// Section Title: Windows Services & Processes
// Page Title: Windows Fundamentals
// Page Number: 05
-->

# Windows Services & Processes

**Module Name:** Windows Fundamentals **Page Number:** 05

#### WINDOWS FUNDAMENTALS

# Windows Services & Processes

## Windows Services

``` powershell-session
PS C:\htb> Get-Service | ? {$_.Status -eq "Running"} | select -First 2 |fl


Name                : AdobeARMservice
DisplayName         : Adobe Acrobat Update Service
Status              : Running
DependentServices   : {}
ServicesDependedOn  : {}
CanPauseAndContinue : False
CanShutdown         : False
CanStop             : True
ServiceType         : Win32OwnProcess

Name                : Appinfo
DisplayName         : Application Information
Status              : Running
DependentServices   : {}
ServicesDependedOn  : {RpcSs, ProfSvc}
CanPauseAndContinue : False
CanShutdown         : False
CanStop             : True
ServiceType         : Win32OwnProcess, Win32ShareProcess
```

## Processes

## Local Security Authority Subsystem Service (LSASS)

## Sysinternals Tools

``` cmd-session
C:\htb> \\live.sysinternals.com\tools\procdump.exe -accepteula

ProcDump v9.0 - Sysinternals process dump utility
Copyright (C) 2009-2017 Mark Russinovich and Andrew Richards
Sysinternals - www.sysinternals.com

Monitors a process and writes a dump file when the process exceeds the
specified criteria or has an exception.

Capture Usage:
   procdump.exe [-mm] [-ma] [-mp] [-mc Mask] [-md Callback_DLL] [-mk]
                [-n Count]
                [-s Seconds]
                [-c|-cl CPU_Usage [-u]]
                [-m|-ml Commit_Usage]
                [-p|-pl Counter_Threshold]
                [-h]
                [-e [1 [-g] [-b]]]
                [-l]
                [-t]
                [-f  Include_Filter, ...]
                [-fx Exclude_Filter, ...]
                [-o]
                [-r [1..5] [-a]]
                [-wer]
                [-64]
                {
                 {{[-w] Process_Name | Service_Name | PID} [Dump_File | Dump_Folder]}
                |
                 {-x Dump_Folder Image_File [Argument, ...]}
                }
				
<SNIP>
```

## Task Manager

![https://academy.hackthebox.com/storage/modules/49/taskmgr.png](https://academy.hackthebox.com/storage/modules/49/taskmgr.png)

![https://academy.hackthebox.com/storage/modules/49/resource_monitor.png](https://academy.hackthebox.com/storage/modules/49/resource_monitor.png)

## Process Explorer

# 

# 

#### Questions

####