<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2561
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2561
// Section Title: Detecting Cobalt Strike's PSExec
// Page Title: Hack The Box - Academy
// Page Number: 18
-->

# Detecting Cobalt Strike's PSExec

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 18

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Cobalt Strike's PSExec

#### How Cobalt Strike PSExec Traffic Looks Like

![https://academy.hackthebox.com/storage/modules/233/113.png](https://academy.hackthebox.com/storage/modules/233/113.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting Cobalt Strike's PSExec With Splunk & Zeek Logs

``` shell-session
index="cobalt_strike_psexec"
sourcetype="bro:smb_files:json"
action="SMB::FILE_OPEN" 
name IN ("*.exe", "*.dll", "*.bat")
path IN ("*\\c$", "*\\ADMIN$")
size>0
```

![https://academy.hackthebox.com/storage/modules/233/114.png](https://academy.hackthebox.com/storage/modules/233/114.png)

# 

# 

#### Questions

####