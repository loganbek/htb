<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2526
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2526
// Section Title: Detecting Kerberoasting/AS-REProasting
// Page Title: Detecting Windows Attacks with Splunk
// Page Number: 04
-->

# Detecting Kerberoasting/AS-REProasting

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 04

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Kerberoasting/AS-REProasting

## Kerberoasting

![https://academy.hackthebox.com/storage/modules/233/image76.png](https://academy.hackthebox.com/storage/modules/233/image76.png)

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image2.png](https://academy.hackthebox.com/storage/modules/233/image2.png)

![https://academy.hackthebox.com/storage/modules/233/image87.png](https://academy.hackthebox.com/storage/modules/233/image87.png)

#### Benign Service Access Process & Related Events

![https://academy.hackthebox.com/storage/modules/233/image25.png](https://academy.hackthebox.com/storage/modules/233/image25.png)

![https://academy.hackthebox.com/storage/modules/233/image8.png](https://academy.hackthebox.com/storage/modules/233/image8.png)

![https://academy.hackthebox.com/storage/modules/233/image66.png](https://academy.hackthebox.com/storage/modules/233/image66.png)

#### Kerberoasting Detection Opportunities

![https://academy.hackthebox.com/storage/modules/233/image18.png](https://academy.hackthebox.com/storage/modules/233/image18.png)

## Detecting Kerberoasting With Splunk

#### Benign TGS Requests

``` shell-session
index=main earliest=1690388417 latest=1690388630 EventCode=4648 OR (EventCode=4769 AND service_name=iis_svc) 
| dedup RecordNumber 
| rex field=user "(?<username>[^@]+)"
| table _time, ComputerName, EventCode, name, username, Account_Name, Account_Domain, src_ip, service_name, Ticket_Options, Ticket_Encryption_Type, Target_Server_Name, Additional_Information
```

![https://academy.hackthebox.com/storage/modules/233/7.png](https://academy.hackthebox.com/storage/modules/233/7.png)

#### Detecting Kerberoasting - SPN Querying

``` shell-session
index=main earliest=1690448444 latest=1690454437 source="WinEventLog:SilkService-Log" 
| spath input=Message 
| rename XmlEventData.* as * 
| table _time, ComputerName, ProcessName, DistinguishedName, SearchFilter 
| search SearchFilter="*(&(samAccountType=805306368)(servicePrincipalName=*)*"
```

![https://academy.hackthebox.com/storage/modules/233/8.png](https://academy.hackthebox.com/storage/modules/233/8.png)

#### Detecting Kerberoasting - TGS Requests

``` shell-session
index=main earliest=1690450374 latest=1690450483 EventCode=4648 OR (EventCode=4769 AND service_name=iis_svc)
| dedup RecordNumber
| rex field=user "(?<username>[^@]+)"
| bin span=2m _time 
| search username!=*$ 
| stats values(EventCode) as Events, values(service_name) as service_name, values(Additional_Information) as Additional_Information, values(Target_Server_Name) as Target_Server_Name by _time, username
| where !match(Events,"4648")
```

![https://academy.hackthebox.com/storage/modules/233/9.png](https://academy.hackthebox.com/storage/modules/233/9.png)

#### Detecting Kerberoasting Using Transactions - TGS Requests

``` shell-session
index=main earliest=1690450374 latest=1690450483 EventCode=4648 OR (EventCode=4769 AND service_name=iis_svc)
| dedup RecordNumber
| rex field=user "(?<username>[^@]+)"
| search username!=*$ 
| transaction username keepevicted=true maxspan=5s endswith=(EventCode=4648) startswith=(EventCode=4769) 
| where closed_txn=0 AND EventCode = 4769
| table _time, EventCode, service_name, username
```

![https://academy.hackthebox.com/storage/modules/233/10.png](https://academy.hackthebox.com/storage/modules/233/10.png)

## AS-REPRoasting

![https://academy.hackthebox.com/storage/modules/233/image40.png](https://academy.hackthebox.com/storage/modules/233/image40.png)

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image13.png](https://academy.hackthebox.com/storage/modules/233/image13.png)

![https://academy.hackthebox.com/storage/modules/233/image24.png](https://academy.hackthebox.com/storage/modules/233/image24.png)

#### Kerberos Pre-Authentication

![https://academy.hackthebox.com/storage/modules/233/image79.png](https://academy.hackthebox.com/storage/modules/233/image79.png)

![https://academy.hackthebox.com/storage/modules/233/image78.png](https://academy.hackthebox.com/storage/modules/233/image78.png)

#### AS-REPRoasting Detection Opportunities

## Detecting AS-REPRoasting With Splunk

#### Detecting AS-REPRoasting - Querying Accounts With Pre-Auth Disabled

``` shell-session
index=main earliest=1690392745 latest=1690393283 source="WinEventLog:SilkService-Log" 
| spath input=Message 
| rename XmlEventData.* as * 
| table _time, ComputerName, ProcessName, DistinguishedName, SearchFilter 
| search SearchFilter="*(samAccountType=805306368)(userAccountControl:1.2.840.113556.1.4.803:=4194304)*"
```

![https://academy.hackthebox.com/storage/modules/233/11.png](https://academy.hackthebox.com/storage/modules/233/11.png)

#### Detecting AS-REPRoasting - TGT Requests For Accounts With Pre-Auth Disabled

``` shell-session
index=main earliest=1690392745 latest=1690393283 source="WinEventLog:Security" EventCode=4768 Pre_Authentication_Type=0
| rex field=src_ip "(\:\:ffff\:)?(?<src_ip>[0-9\.]+)"
| table _time, src_ip, user, Pre_Authentication_Type, Ticket_Options, Ticket_Encryption_Type
```

![https://academy.hackthebox.com/storage/modules/233/12.png](https://academy.hackthebox.com/storage/modules/233/12.png)

# 

# 

#### Questions

####