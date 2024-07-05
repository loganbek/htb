<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/218/section/2390
// Platform Version: V1
// Module ID: 218
// Module Name: Understanding Log Sources & Investigating with Splunk
// Module Difficulty: Medium
// Section ID: 2390
// Section Title: Detecting Attacker Behavior With Splunk Based On Analytics
// Page Title: Understanding Log Sources & Investigating with Splunk
// Page Number: 05
-->

# Detecting Attacker Behavior With Splunk Based On Analytics

**Module Name:** Understanding Log Sources & Investigating with Splunk **Page Number:** 05

#### UNDERSTANDING LOG SOURCES & INVESTIGATING WITH SPLUNK Mini-Module

# Detecting Attacker Behavior With Splunk Based On Analytics

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=3 | bin _time span=1h | stats count as NetworkConnections by _time, Image | streamstats time_window=24h avg(NetworkConnections) as avg stdev(NetworkConnections) as stdev by Image | eval isOutlier=if(NetworkConnections > (avg + (0.5*stdev)), 1, 0) | search isOutlier=1
```

![https://academy.hackthebox.com/storage/modules/218/159.png](https://academy.hackthebox.com/storage/modules/218/159.png)

## Crafting SPL Searches Based On Analytics

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" Image=*cmd.exe | eval len=len(CommandLine) | table User, len, CommandLine | sort - len
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" Image=*cmd.exe ParentImage!="*msiexec.exe" ParentImage!="*explorer.exe" | eval len=len(CommandLine) | table User, len, CommandLine | sort - len
```

![https://academy.hackthebox.com/storage/modules/218/160.png](https://academy.hackthebox.com/storage/modules/218/160.png)

``` shell-session
index="main" EventCode=1 (CommandLine="*cmd.exe*") | bucket _time span=1h | stats count as cmdCount by _time User CommandLine | eventstats avg(cmdCount) as avg stdev(cmdCount) as stdev | eval isOutlier=if(cmdCount > avg+1.5*stdev, 1, 0) | search isOutlier=1
```

![https://academy.hackthebox.com/storage/modules/218/161.png](https://academy.hackthebox.com/storage/modules/218/161.png)

``` shell-session
index="main" EventCode=7 | bucket _time span=1h | stats dc(ImageLoaded) as unique_dlls_loaded by _time, Image | where unique_dlls_loaded > 3 | stats count by Image, unique_dlls_loaded
```

``` shell-session
index="main" EventCode=7 NOT (Image="C:\\Windows\\System32*") NOT (Image="C:\\Program Files (x86)*") NOT (Image="C:\\Program Files*") NOT (Image="C:\\ProgramData*") NOT (Image="C:\\Users\\waldo\\AppData*")| bucket _time span=1h | stats dc(ImageLoaded) as unique_dlls_loaded by _time, Image | where unique_dlls_loaded > 3 | stats count by Image, unique_dlls_loaded | sort - unique_dlls_loaded
```

![https://academy.hackthebox.com/storage/modules/218/162.png](https://academy.hackthebox.com/storage/modules/218/162.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | transaction ComputerName, Image | where mvcount(ProcessGuid) > 1 | stats count by Image, ParentImage
```

![https://academy.hackthebox.com/storage/modules/218/163.png](https://academy.hackthebox.com/storage/modules/218/163.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1  | transaction ComputerName, Image  | where mvcount(ProcessGuid) > 1 | search Image="C:\\Windows\\System32\\rundll32.exe" ParentImage="C:\\Windows\\System32\\svchost.exe" | table CommandLine, ParentCommandLine
```

![https://academy.hackthebox.com/storage/modules/218/164.png](https://academy.hackthebox.com/storage/modules/218/164.png)

## Practical Exercises

# 

# 

#### Questions

####