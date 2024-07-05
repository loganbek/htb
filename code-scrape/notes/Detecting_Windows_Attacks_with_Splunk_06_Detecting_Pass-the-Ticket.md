<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2528
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2528
// Section Title: Detecting Pass-the-Ticket
// Page Title: Hack The Box - Academy
// Page Number: 06
-->

# Detecting Pass-the-Ticket

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 06

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Pass-the-Ticket

## Pass-the-Ticket

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image9.png](https://academy.hackthebox.com/storage/modules/233/image9.png)

![https://academy.hackthebox.com/storage/modules/233/image41.png](https://academy.hackthebox.com/storage/modules/233/image41.png)

![https://academy.hackthebox.com/storage/modules/233/image10.png](https://academy.hackthebox.com/storage/modules/233/image10.png)

#### Kerberos Authentication Process

![https://academy.hackthebox.com/storage/modules/233/image25.png](https://academy.hackthebox.com/storage/modules/233/image25.png)

#### Related Windows Security Events

![https://academy.hackthebox.com/storage/modules/233/image14.png](https://academy.hackthebox.com/storage/modules/233/image14.png)

#### Pass-the-Ticket Detection Opportunities

![https://academy.hackthebox.com/storage/modules/233/image61.png](https://academy.hackthebox.com/storage/modules/233/image61.png)

## Detecting Pass-the-Ticket With Splunk

``` shell-session
index=main earliest=1690392405 latest=1690451745 source="WinEventLog:Security" user!=*$ EventCode IN (4768,4769,4770) 
| rex field=user "(?<username>[^@]+)"
| rex field=src_ip "(\:\:ffff\:)?(?<src_ip_4>[0-9\.]+)"
| transaction username, src_ip_4 maxspan=10h keepevicted=true startswith=(EventCode=4768)
| where closed_txn=0
| search NOT user="*$@*"
| table _time, ComputerName, username, src_ip_4, service_name, category
```

![https://academy.hackthebox.com/storage/modules/233/15_.png](https://academy.hackthebox.com/storage/modules/233/15_.png)

# 

# 

#### Questions

####