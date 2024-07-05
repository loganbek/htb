<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2565
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2565
// Section Title: Detecting Exfiltration (DNS)
// Page Title: Hack The Box - Academy
// Page Number: 21
-->

# Detecting Exfiltration (DNS)

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 21

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Exfiltration (DNS)

#### How DNS Exfiltration Works:

#### How DNS Exfiltration Traffic Looks Like

![https://academy.hackthebox.com/storage/modules/233/119.png](https://academy.hackthebox.com/storage/modules/233/119.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting DNS Exfiltration With Splunk & Zeek Logs

``` shell-session
index=dns_exf sourcetype="bro:dns:json"
| eval len_query=len(query)
| search len_query>=40 AND query!="*.ip6.arpa*" AND query!="*amazonaws.com*" AND query!="*._googlecast.*" AND query!="_ldap.*"
| bin _time span=24h
| stats count(query) as req_by_day by _time, id.orig_h, id.resp_h
| where req_by_day>60
| table _time, id.orig_h, id.resp_h, req_by_day
```

![https://academy.hackthebox.com/storage/modules/233/120.png](https://academy.hackthebox.com/storage/modules/233/120.png)

# 

# 

#### Questions

####