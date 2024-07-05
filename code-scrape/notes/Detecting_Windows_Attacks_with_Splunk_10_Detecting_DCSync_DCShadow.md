<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2531
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2531
// Section Title: Detecting DCSync/DCShadow
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# Detecting DCSync/DCShadow

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 10

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting DCSync/DCShadow

## DCSync

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image73.png](https://academy.hackthebox.com/storage/modules/233/image73.png)

#### DCSync Detection Opportunities

![https://academy.hackthebox.com/storage/modules/233/image72.png](https://academy.hackthebox.com/storage/modules/233/image72.png)

## Detecting DCSync With Splunk

``` shell-session
index=main earliest=1690544278 latest=1690544280 EventCode=4662 Message="*Replicating Directory Changes*"
| rex field=Message "(?P<property>Replicating Directory Changes.*)"
| table _time, user, object_file_name, Object_Server, property
```

![https://academy.hackthebox.com/storage/modules/233/23.png](https://academy.hackthebox.com/storage/modules/233/23.png)

## DCShadow

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image43.png](https://academy.hackthebox.com/storage/modules/233/image43.png)

![https://academy.hackthebox.com/storage/modules/233/image42.png](https://academy.hackthebox.com/storage/modules/233/image42.png)

#### DCShadow Detection Opportunities

## Detecting DCShadow With Splunk

``` shell-session
index=main earliest=1690623888 latest=1690623890 EventCode=4742 
| rex field=Message "(?P<gcspn>XX\/[a-zA-Z0-9\.\-\/]+)" 
| table _time, ComputerName, Security_ID, Account_Name, user, gcspn 
| search gcspn=*
```

![https://academy.hackthebox.com/storage/modules/233/24_.png](https://academy.hackthebox.com/storage/modules/233/24_.png)

# 

# 

#### Questions

####