<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2560
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2560
// Section Title: Detecting Golden Tickets
// Page Title: Detecting Windows Attacks with Splunk
// Page Number: 17
-->

# Detecting Golden Tickets

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 17

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Golden Tickets

#### How Golden Ticket Traffic Looks Like

![https://academy.hackthebox.com/storage/modules/233/111.png](https://academy.hackthebox.com/storage/modules/233/111.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting Golden Tickets With Splunk & Zeek Logs

``` shell-session
index="golden_ticket_attack" sourcetype="bro:kerberos:json"
| where client!="-"
| bin _time span=1m 
| stats values(client), values(request_type) as request_types, dc(request_type) as unique_request_types by _time, id.orig_h, id.resp_h
| where request_types=="TGS" AND unique_request_types==1
```

![https://academy.hackthebox.com/storage/modules/233/112.png](https://academy.hackthebox.com/storage/modules/233/112.png)

# 

# 

#### Questions

####