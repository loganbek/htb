<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2554
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2554
// Section Title: Detecting RDP Brute Force Attacks
// Page Title: Hack The Box - Academy
// Page Number: 12
-->

# Detecting RDP Brute Force Attacks

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 12

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting RDP Brute Force Attacks

#### How RDP Traffic Looks Like

![https://academy.hackthebox.com/storage/modules/233/100.png](https://academy.hackthebox.com/storage/modules/233/100.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting RDP Brute Force Attacks With Splunk & Zeek Logs

``` shell-session
index="rdp_bruteforce" sourcetype="bro:rdp:json"
| bin _time span=5m
| stats count values(cookie) by _time, id.orig_h, id.resp_h
| where count>30
```

![https://academy.hackthebox.com/storage/modules/233/101.png](https://academy.hackthebox.com/storage/modules/233/101.png)

# 

# 

#### Questions

####