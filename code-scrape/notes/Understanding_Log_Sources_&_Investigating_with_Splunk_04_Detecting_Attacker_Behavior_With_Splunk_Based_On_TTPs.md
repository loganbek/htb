<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/218/section/2388
// Platform Version: V1
// Module ID: 218
// Module Name: Understanding Log Sources & Investigating with Splunk
// Module Difficulty: Medium
// Section ID: 2388
// Section Title: Detecting Attacker Behavior With Splunk Based On TTPs
// Page Title: Hack The Box - Academy
// Page Number: 04
-->

# Detecting Attacker Behavior With Splunk Based On TTPs

**Module Name:** Understanding Log Sources & Investigating with Splunk **Page Number:** 04

#### 

#### UNDERSTANDING LOG SOURCES & INVESTIGATING WITH SPLUNK Mini-Module

# Detecting Attacker Behavior With Splunk Based On TTPs

## Crafting SPL Searches Based On Known TTPs

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 Image=*\\ipconfig.exe OR Image=*\\net.exe OR Image=*\\whoami.exe OR Image=*\\netstat.exe OR Image=*\\nbtstat.exe OR Image=*\\hostname.exe OR Image=*\\tasklist.exe | stats count by Image,CommandLine | sort - count
```

![https://academy.hackthebox.com/storage/modules/218/156.png](https://academy.hackthebox.com/storage/modules/218/156.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=22  QueryName="*github*" | stats count by Image, QueryName
```

![https://academy.hackthebox.com/storage/modules/218/141.png](https://academy.hackthebox.com/storage/modules/218/141.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=13 Image="C:\\Windows\\system32\\services.exe" TargetObject="HKLM\\System\\CurrentControlSet\\Services\\*\\ImagePath" | rex field=Details "(?<reg_file_name>[^\\\]+)$" | eval reg_file_name = lower(reg_file_name), file_name = if(isnull(file_name),reg_file_name,lower(file_name)) | stats values(Image) AS Image, values(Details) AS RegistryDetails, values(_time) AS EventTimes, count by file_name, ComputerName
```

![https://academy.hackthebox.com/storage/modules/218/142.png](https://academy.hackthebox.com/storage/modules/218/142.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=11 Image=System | stats count by TargetFilename
```

![https://academy.hackthebox.com/storage/modules/218/143.png](https://academy.hackthebox.com/storage/modules/218/143.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=18 Image=System | stats count by PipeName
```

![https://academy.hackthebox.com/storage/modules/218/144.png](https://academy.hackthebox.com/storage/modules/218/144.png)

``` shell-session
index="main" EventCode=11 (TargetFilename="*.zip" OR TargetFilename="*.rar" OR TargetFilename="*.7z") | stats count by ComputerName, User, TargetFilename | sort - count
```

![https://academy.hackthebox.com/storage/modules/218/145.png](https://academy.hackthebox.com/storage/modules/218/145.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=11 Image="*powershell.exe*" |  stats count by Image, TargetFilename |  sort + count
```

![https://academy.hackthebox.com/storage/modules/218/155.png](https://academy.hackthebox.com/storage/modules/218/155.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=11 Image="*msedge.exe" TargetFilename=*"Zone.Identifier" |  stats count by TargetFilename |  sort + count
```

![https://academy.hackthebox.com/storage/modules/218/147.png](https://academy.hackthebox.com/storage/modules/218/147.png)

``` shell-session
index="main" EventCode=1 | regex Image="C:\\\\Users\\\\.*\\\\Downloads\\\\.*" |  stats count by Image
```

![https://academy.hackthebox.com/storage/modules/218/148.png](https://academy.hackthebox.com/storage/modules/218/148.png)

``` shell-session
index="main" EventCode=11 (TargetFilename="*.exe" OR TargetFilename="*.dll") TargetFilename!="*\\windows\\*" | stats count by User, TargetFilename | sort + count
```

![https://academy.hackthebox.com/storage/modules/218/149.png](https://academy.hackthebox.com/storage/modules/218/149.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 (CommandLine="*psexe*.exe" NOT (CommandLine="*PSEXESVC.exe" OR CommandLine="*PsExec64.exe")) OR (ParentCommandLine="*psexe*.exe" NOT (ParentCommandLine="*PSEXESVC.exe" OR ParentCommandLine="*PsExec64.exe")) OR (ParentImage="*psexe*.exe" NOT (ParentImage="*PSEXESVC.exe" OR ParentImage="*PsExec64.exe")) OR (Image="*psexe*.exe" NOT (Image="*PSEXESVC.exe" OR Image="*PsExec64.exe")) |  table Image, CommandLine, ParentImage, ParentCommandLine
```

![https://academy.hackthebox.com/storage/modules/218/150.png](https://academy.hackthebox.com/storage/modules/218/150.png)

``` shell-session
index="main" EventCode=3 NOT (DestinationPort=80 OR DestinationPort=443 OR DestinationPort=22 OR DestinationPort=21) | stats count by SourceIp, DestinationIp, DestinationPort | sort - count
```

![https://academy.hackthebox.com/storage/modules/218/151.png](https://academy.hackthebox.com/storage/modules/218/151.png)

## Practical Exercises

# 

# 

#### Questions

####