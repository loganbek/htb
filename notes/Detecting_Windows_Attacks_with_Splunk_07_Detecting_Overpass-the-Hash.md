<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2532
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2532
// Section Title: Detecting Overpass-the-Hash
// Page Title: Hack The Box - Academy
// Page Number: 07
-->

# Detecting Overpass-the-Hash

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 07

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Overpass-the-Hash

## Overpass-the-Hash

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image65.png](https://academy.hackthebox.com/storage/modules/233/image65.png)

![https://academy.hackthebox.com/storage/modules/233/image3.png](https://academy.hackthebox.com/storage/modules/233/image3.png)

#### Overpass-the-Hash Detection Opportunities

## Detecting Overpass-the-Hash With Splunk (Targeting Rubeus)

``` shell-session
index=main earliest=1690443407 latest=1690443544 source="XmlWinEventLog:Microsoft-Windows-Sysmon/Operational" (EventCode=3 dest_port=88 Image!=*lsass.exe) OR EventCode=1
| eventstats values(process) as process by process_id
| where EventCode=3
| stats count by _time, Computer, dest_ip, dest_port, Image, process
| fields - count
```

![https://academy.hackthebox.com/storage/modules/233/16.png](https://academy.hackthebox.com/storage/modules/233/16.png)

# 

# 

#### Questions

####