<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2525
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2525
// Section Title: Detecting Responder-like Attacks
// Page Title: Detecting Windows Attacks with Splunk
// Page Number: 03
-->

# Detecting Responder-like Attacks

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 03

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Responder-like Attacks

## LLMNR/NBT-NS/mDNS Poisoning

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image68.png](https://academy.hackthebox.com/storage/modules/233/image68.png)

#### Responder Detection Opportunities

![https://academy.hackthebox.com/storage/modules/233/image22.png](https://academy.hackthebox.com/storage/modules/233/image22.png)

``` powershell-session
PS C:\Users\Administrator> New-EventLog -LogName Application -Source LLMNRDetection
```

``` powershell-session
PS C:\Users\Administrator> Write-EventLog -LogName Application -Source LLMNRDetection -EventId 19001 -Message $msg -EntryType Warning
```

## Detecting Responder-like Attacks With Splunk

``` shell-session
index=main earliest=1690290078 latest=1690291207 SourceName=LLMNRDetection
| table _time, ComputerName, SourceName, Message
```

![https://academy.hackthebox.com/storage/modules/233/4.png](https://academy.hackthebox.com/storage/modules/233/4.png)

``` shell-session
index=main earliest=1690290078 latest=1690291207 EventCode=22 
| table _time, Computer, user, Image, QueryName, QueryResults
```

![https://academy.hackthebox.com/storage/modules/233/89.png](https://academy.hackthebox.com/storage/modules/233/89.png)

``` shell-session
index=main earliest=1690290814 latest=1690291207 EventCode IN (4648) 
| table _time, EventCode, source, name, user, Target_Server_Name, Message
| sort 0 _time
```

![https://academy.hackthebox.com/storage/modules/233/6.png](https://academy.hackthebox.com/storage/modules/233/6.png)

# 

# 

#### Questions

####