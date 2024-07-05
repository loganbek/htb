<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2559
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2559
// Section Title: Detecting Kerberoasting
// Page Title: Hack The Box - Academy
// Page Number: 16
-->

# Detecting Kerberoasting

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 16

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Kerberoasting

#### How Kerberoasting Traffic Looks Like

![https://academy.hackthebox.com/storage/modules/233/109.png](https://academy.hackthebox.com/storage/modules/233/109.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting Kerberoasting With Splunk & Zeek Logs

``` shell-session
index="kerberoast"  sourcetype="bro:kerberos:json"
request_type=TGS cipher="rc4-hmac" 
forwardable="true" renewable="true"
| table _time, id.orig_h, id.resp_h, request_type, cipher, forwardable, renewable, client, service
```

![https://academy.hackthebox.com/storage/modules/233/110.png](https://academy.hackthebox.com/storage/modules/233/110.png)

# 

# 

#### Questions

####