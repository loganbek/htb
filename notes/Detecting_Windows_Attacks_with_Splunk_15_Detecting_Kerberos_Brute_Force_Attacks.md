<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2558
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2558
// Section Title: Detecting Kerberos Brute Force Attacks
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# Detecting Kerberos Brute Force Attacks

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 15

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Kerberos Brute Force Attacks

#### How Kerberos Brute Force Attacks Look Like On The Wire

![https://academy.hackthebox.com/storage/modules/233/107.png](https://academy.hackthebox.com/storage/modules/233/107.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting Kerberos Brute Force Attacks With Splunk & Zeek Logs

``` shell-session
index="kerberos_bruteforce" sourcetype="bro:kerberos:json"
error_msg!=KDC_ERR_PREAUTH_REQUIRED
success="false" request_type=AS
| bin _time span=5m
| stats count dc(client) as "Unique users" values(error_msg) as "Error messages" by _time, id.orig_h, id.resp_h
| where count>30
```

![https://academy.hackthebox.com/storage/modules/233/108.png](https://academy.hackthebox.com/storage/modules/233/108.png)

# 

# 

#### Questions

####