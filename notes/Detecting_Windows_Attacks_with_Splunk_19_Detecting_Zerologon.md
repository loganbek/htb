<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2562
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2562
// Section Title: Detecting Zerologon
// Page Title: Detecting Windows Attacks with Splunk
// Page Number: 19
-->

# Detecting Zerologon

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 19

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Zerologon

#### How Zerologon Looks Like From A Network Perspective

![https://academy.hackthebox.com/storage/modules/233/116.png](https://academy.hackthebox.com/storage/modules/233/116.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting Zerologon With Splunk & Zeek Logs

``` shell-session
index="zerologon" endpoint="netlogon" sourcetype="bro:dce_rpc:json"
| bin _time span=1m
| where operation == "NetrServerReqChallenge" OR operation == "NetrServerAuthenticate3" OR operation == "NetrServerPasswordSet2"
| stats count values(operation) as operation_values dc(operation) as unique_operations by _time, id.orig_h, id.resp_h
| where unique_operations >= 2 AND count>100
```

![https://academy.hackthebox.com/storage/modules/233/117.png](https://academy.hackthebox.com/storage/modules/233/117.png)

# 

# 

#### Questions

####