<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2529
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2529
// Section Title: Detecting Golden Tickets/Silver Tickets
// Page Title: Hack The Box - Academy
// Page Number: 08
-->

# Detecting Golden Tickets/Silver Tickets

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 08

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Golden Tickets/Silver Tickets

## Golden Ticket

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image74.png](https://academy.hackthebox.com/storage/modules/233/image74.png)

![https://academy.hackthebox.com/storage/modules/233/image17.png](https://academy.hackthebox.com/storage/modules/233/image17.png)

#### Golden Ticket Detection Opportunities

## Detecting Golden Tickets With Splunk (Yet Another Ticket To Be Passed Approach)

``` shell-session
index=main earliest=1690451977 latest=1690452262 source="WinEventLog:Security" user!=*$ EventCode IN (4768,4769,4770) 
| rex field=user "(?<username>[^@]+)"
| rex field=src_ip "(\:\:ffff\:)?(?<src_ip_4>[0-9\.]+)"
| transaction username, src_ip_4 maxspan=10h keepevicted=true startswith=(EventCode=4768)
| where closed_txn=0
| search NOT user="*$@*"
| table _time, ComputerName, username, src_ip_4, service_name, category
```

![https://academy.hackthebox.com/storage/modules/233/17.png](https://academy.hackthebox.com/storage/modules/233/17.png)

## Silver Ticket

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image37.png](https://academy.hackthebox.com/storage/modules/233/image37.png)

![https://academy.hackthebox.com/storage/modules/233/image77.png](https://academy.hackthebox.com/storage/modules/233/image77.png)

#### Silver Ticket Detection Opportunities

## Detecting Silver Tickets With Splunk

#### Detecting Silver Tickets With Splunk Through User Correlation

``` shell-session
index=main latest=1690448444 EventCode=4720
| stats min(_time) as _time, values(EventCode) as EventCode by user
| outputlookup users.csv
```

``` shell-session
index=main latest=1690545656 EventCode=4624
| stats min(_time) as firstTime, values(ComputerName) as ComputerName, values(EventCode) as EventCode by user
| eval last24h = 1690451977
| where firstTime > last24h
```| eval last24h=relative_time(now(),"-24h@h")```
| convert ctime(firstTime)
| convert ctime(last24h)
| lookup users.csv user as user OUTPUT EventCode as Events
| where isnull(Events)
```

![https://academy.hackthebox.com/storage/modules/233/18.png](https://academy.hackthebox.com/storage/modules/233/18.png)

#### Detecting Silver Tickets With Splunk By Targeting Special Privileges Assigned To New Logon

``` shell-session
index=main latest=1690545656 EventCode=4672
| stats min(_time) as firstTime, values(ComputerName) as ComputerName by Account_Name
| eval last24h = 1690451977 
```| eval last24h=relative_time(now(),"-24h@h") ```
| where firstTime > last24h 
| table firstTime, ComputerName, Account_Name 
| convert ctime(firstTime)
```

![https://academy.hackthebox.com/storage/modules/233/19.png](https://academy.hackthebox.com/storage/modules/233/19.png)

# 

# 

#### Questions

####