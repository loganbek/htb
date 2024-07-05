<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2564
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2564
// Section Title: Detecting Exfiltration (HTTP)
// Page Title: Hack The Box - Academy
// Page Number: 20
-->

# Detecting Exfiltration (HTTP)

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 20

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Exfiltration (HTTP)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting HTTP Exfiltration With Splunk & Zeek Logs

``` shell-session
index="cobaltstrike_exfiltration_http" sourcetype="bro:http:json" method=POST
| stats sum(request_body_len) as TotalBytes by src, dest, dest_port
| eval TotalBytes = TotalBytes/1024/1024
```

![https://academy.hackthebox.com/storage/modules/233/118.png](https://academy.hackthebox.com/storage/modules/233/118.png)

# 

# 

#### Questions

####