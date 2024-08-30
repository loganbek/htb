<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2524
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2524
// Section Title: Detecting Password Spraying
// Page Title: Detecting Windows Attacks with Splunk
// Page Number: 02
-->

# Detecting Password Spraying

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 02

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Password Spraying

## Password Spraying

![https://academy.hackthebox.com/storage/modules/233/image47.png](https://academy.hackthebox.com/storage/modules/233/image47.png)

#### Password Spraying Detection Opportunities

## Detecting Password Spraying With Splunk

``` shell-session
index=main earliest=1690280680 latest=1690289489 source="WinEventLog:Security" EventCode=4625
| bin span=15m _time
| stats values(user) as Users, dc(user) as dc_user by src, Source_Network_Address, dest, EventCode, Failure_Reason
```

![https://academy.hackthebox.com/storage/modules/233/3.png](https://academy.hackthebox.com/storage/modules/233/3.png)

# 

# 

#### Questions

####