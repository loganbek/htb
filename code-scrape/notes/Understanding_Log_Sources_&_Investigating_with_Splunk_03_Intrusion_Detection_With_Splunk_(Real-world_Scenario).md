<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/218/section/2357
// Platform Version: V1
// Module ID: 218
// Module Name: Understanding Log Sources & Investigating with Splunk
// Module Difficulty: Medium
// Section ID: 2357
// Section Title: Intrusion Detection With Splunk (Real-world Scenario)
// Page Title: Understanding Log Sources & Investigating with Splunk
// Page Number: 03
-->

# Intrusion Detection With Splunk (Real-world Scenario)

**Module Name:** Understanding Log Sources & Investigating with Splunk **Page Number:** 03

#### UNDERSTANDING LOG SOURCES & INVESTIGATING WITH SPLUNK Mini-Module

# Intrusion Detection With Splunk (Real-world Scenario)

## Introduction

## Ingesting Data Sources

``` shell-session
index="main" earliest=0
```

![https://academy.hackthebox.com/storage/modules/218/1.png](https://academy.hackthebox.com/storage/modules/218/1.png)

## Searching Effectively

``` shell-session
index="main" | stats count by sourcetype
```

![https://academy.hackthebox.com/storage/modules/218/2.png](https://academy.hackthebox.com/storage/modules/218/2.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon"
```

![https://academy.hackthebox.com/storage/modules/218/3.png](https://academy.hackthebox.com/storage/modules/218/3.png)

![https://academy.hackthebox.com/storage/modules/218/4.png](https://academy.hackthebox.com/storage/modules/218/4.png)

``` shell-session
index="main" uniwaldo.local
```

![https://academy.hackthebox.com/storage/modules/218/5.png](https://academy.hackthebox.com/storage/modules/218/5.png)

``` shell-session
index="main" *uniwaldo.local*
```

![https://academy.hackthebox.com/storage/modules/218/6.png](https://academy.hackthebox.com/storage/modules/218/6.png)

``` shell-session
index="main" ComputerName="*uniwaldo.local"
```

![https://academy.hackthebox.com/storage/modules/218/7.png](https://academy.hackthebox.com/storage/modules/218/7.png)

## Embracing The Mindset Of Analysts, Threat Hunters, & Detection Engineers

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" | stats count by EventCode
```

![https://academy.hackthebox.com/storage/modules/218/8.png](https://academy.hackthebox.com/storage/modules/218/8.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | stats count by ParentImage, Image
```

![https://academy.hackthebox.com/storage/modules/218/9.png](https://academy.hackthebox.com/storage/modules/218/9.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 (Image="*cmd.exe" OR Image="*powershell.exe") | stats count by ParentImage, Image
```

![https://academy.hackthebox.com/storage/modules/218/10.png](https://academy.hackthebox.com/storage/modules/218/10.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 (Image="*cmd.exe" OR Image="*powershell.exe") ParentImage="C:\\Windows\\System32\\notepad.exe"
```

![https://academy.hackthebox.com/storage/modules/218/11.png](https://academy.hackthebox.com/storage/modules/218/11.png)

![https://academy.hackthebox.com/storage/modules/218/12.png](https://academy.hackthebox.com/storage/modules/218/12.png)

``` shell-session
index="main" 10.0.0.229 | stats count by sourcetype
```

![https://academy.hackthebox.com/storage/modules/218/13.png](https://academy.hackthebox.com/storage/modules/218/13.png)

``` shell-session
index="main" 10.0.0.229 sourcetype="linux:syslog"
```

![https://academy.hackthebox.com/storage/modules/218/14.png](https://academy.hackthebox.com/storage/modules/218/14.png)

![https://academy.hackthebox.com/storage/modules/218/15.png](https://academy.hackthebox.com/storage/modules/218/15.png)

``` shell-session
index="main" 10.0.0.229 sourcetype="WinEventLog:sysmon" | stats count by CommandLine
```

![https://academy.hackthebox.com/storage/modules/218/16.png](https://academy.hackthebox.com/storage/modules/218/16.png)

``` shell-session
index="main" 10.0.0.229 sourcetype="WinEventLog:sysmon" | stats count by CommandLine, host
```

![https://academy.hackthebox.com/storage/modules/218/17.png](https://academy.hackthebox.com/storage/modules/218/17.png)

``` shell-session
index="main" EventCode=4662 Access_Mask=0x100 Account_Name!=*$
```

![https://academy.hackthebox.com/storage/modules/218/18.png](https://academy.hackthebox.com/storage/modules/218/18.png)

![https://academy.hackthebox.com/storage/modules/218/19.png](https://academy.hackthebox.com/storage/modules/218/19.png)

![https://academy.hackthebox.com/storage/modules/218/20.png](https://academy.hackthebox.com/storage/modules/218/20.png)

![https://academy.hackthebox.com/storage/modules/218/21.png](https://academy.hackthebox.com/storage/modules/218/21.png)

![https://academy.hackthebox.com/storage/modules/218/22.png](https://academy.hackthebox.com/storage/modules/218/22.png)

``` shell-session
index="main" EventCode=10 lsass | stats count by SourceImage
```

![https://academy.hackthebox.com/storage/modules/218/23.png](https://academy.hackthebox.com/storage/modules/218/23.png)

``` shell-session
index="main" EventCode=10 lsass SourceImage="C:\\Windows\\System32\\notepad.exe"
```

![https://academy.hackthebox.com/storage/modules/218/24.png](https://academy.hackthebox.com/storage/modules/218/24.png)

![https://academy.hackthebox.com/storage/modules/218/25.png](https://academy.hackthebox.com/storage/modules/218/25.png)

## Creating Meaningful Alerts

``` shell-session
index="main" CallTrace="*UNKNOWN*" | stats count by EventCode
```

![https://academy.hackthebox.com/storage/modules/218/26.png](https://academy.hackthebox.com/storage/modules/218/26.png)

``` shell-session
index="main" CallTrace="*UNKNOWN*" | stats count by SourceImage
```

![https://academy.hackthebox.com/storage/modules/218/27.png](https://academy.hackthebox.com/storage/modules/218/27.png)

``` shell-session
index="main" CallTrace="*UNKNOWN*" | where SourceImage!=TargetImage | stats count by SourceImage
```

![https://academy.hackthebox.com/storage/modules/218/28.png](https://academy.hackthebox.com/storage/modules/218/28.png)

``` shell-session
index="main" CallTrace="*UNKNOWN*" SourceImage!="*Microsoft.NET*" CallTrace!=*ni.dll* CallTrace!=*clr.dll* | where SourceImage!=TargetImage | stats count by SourceImage
```

![https://academy.hackthebox.com/storage/modules/218/29.png](https://academy.hackthebox.com/storage/modules/218/29.png)

``` shell-session
index="main" CallTrace="*UNKNOWN*" SourceImage!="*Microsoft.NET*" CallTrace!=*ni.dll* CallTrace!=*clr.dll* CallTrace!=*wow64* | where SourceImage!=TargetImage | stats count by SourceImage
```

![https://academy.hackthebox.com/storage/modules/218/30.png](https://academy.hackthebox.com/storage/modules/218/30.png)

``` shell-session
index="main" CallTrace="*UNKNOWN*" SourceImage!="*Microsoft.NET*" CallTrace!=*ni.dll* CallTrace!=*clr.dll* CallTrace!=*wow64* SourceImage!="C:\\Windows\\Explorer.EXE" | where SourceImage!=TargetImage | stats count by SourceImage
```

![https://academy.hackthebox.com/storage/modules/218/browser.png](https://academy.hackthebox.com/storage/modules/218/browser.png)

``` shell-session
index="main" CallTrace="*UNKNOWN*" SourceImage!="*Microsoft.NET*" CallTrace!=*ni.dll* CallTrace!=*clr.dll* CallTrace!=*wow64* SourceImage!="C:\\Windows\\Explorer.EXE" | where SourceImage!=TargetImage | stats count by SourceImage, TargetImage, CallTrace
```

![https://academy.hackthebox.com/storage/modules/218/31.png](https://academy.hackthebox.com/storage/modules/218/31.png)

## Practical Exercises

# 

# 

#### Questions

####