<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2556
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2556
// Section Title: Detecting Nmap Port Scanning
// Page Title: Hack The Box - Academy
// Page Number: 14
-->

# Detecting Nmap Port Scanning

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 14

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Nmap Port Scanning

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting Nmap Port Scanning With Splunk & Zeek Logs

``` shell-session
index="cobaltstrike_beacon" sourcetype="bro:conn:json" orig_bytes=0 dest_ip IN (192.168.0.0/16, 172.16.0.0/12, 10.0.0.0/8) 
| bin span=5m _time 
| stats dc(dest_port) as num_dest_port by _time, src_ip, dest_ip 
| where num_dest_port >= 3
```

![https://academy.hackthebox.com/storage/modules/233/104.png](https://academy.hackthebox.com/storage/modules/233/104.png)

# 

# 

#### Questions

####