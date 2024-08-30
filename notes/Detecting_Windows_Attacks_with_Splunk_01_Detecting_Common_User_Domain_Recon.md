<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2523
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2523
// Section Title: Detecting Common User/Domain Recon
// Page Title: Hack The Box - Academy
// Page Number: 01
-->

# Detecting Common User/Domain Recon

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 01

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Common User/Domain Recon

## Domain Reconnaissance

#### User/Domain Reconnaissance Using Native Windows Executables

![https://academy.hackthebox.com/storage/modules/233/image63.png](https://academy.hackthebox.com/storage/modules/233/image63.png)

#### User/Domain Reconnaissance Using BloodHound/SharpHound

![https://academy.hackthebox.com/storage/modules/233/image1.png](https://academy.hackthebox.com/storage/modules/233/image1.png)

![https://academy.hackthebox.com/storage/modules/233/image56.png](https://academy.hackthebox.com/storage/modules/233/image56.png)

#### BloodHound Detection Opportunities

![https://academy.hackthebox.com/storage/modules/233/image45.png](https://academy.hackthebox.com/storage/modules/233/image45.png)

![https://academy.hackthebox.com/storage/modules/233/image81.png](https://academy.hackthebox.com/storage/modules/233/image81.png)

![https://academy.hackthebox.com/storage/modules/233/image57.png](https://academy.hackthebox.com/storage/modules/233/image57.png)

![https://academy.hackthebox.com/storage/modules/233/image59.png](https://academy.hackthebox.com/storage/modules/233/image59.png)

## Detecting User/Domain Recon With Splunk

#### Detecting Recon By Targeting Native Windows Executables

``` shell-session
index=main source="XmlWinEventLog:Microsoft-Windows-Sysmon/Operational" EventID=1 earliest=1690447949 latest=1690450687
| search process_name IN (arp.exe,chcp.com,ipconfig.exe,net.exe,net1.exe,nltest.exe,ping.exe,systeminfo.exe,whoami.exe) OR (process_name IN (cmd.exe,powershell.exe) AND process IN (*arp*,*chcp*,*ipconfig*,*net*,*net1*,*nltest*,*ping*,*systeminfo*,*whoami*))
| stats values(process) as process, min(_time) as _time by parent_process, parent_process_id, dest, user
| where mvcount(process) > 3
```

![https://academy.hackthebox.com/storage/modules/233/2.png](https://academy.hackthebox.com/storage/modules/233/2.png)

#### Detecting Recon By Targeting BloodHound

``` shell-session
index=main earliest=1690195896 latest=1690285475 source="WinEventLog:SilkService-Log"
| spath input=Message 
| rename XmlEventData.* as * 
| table _time, ComputerName, ProcessName, ProcessId, DistinguishedName, SearchFilter
| sort 0 _time
| search SearchFilter="*(samAccountType=805306368)*"
| stats min(_time) as _time, max(_time) as maxTime, count, values(SearchFilter) as SearchFilter by ComputerName, ProcessName, ProcessId
| where count > 10
| convert ctime(maxTime)
```

![https://academy.hackthebox.com/storage/modules/233/1.png](https://academy.hackthebox.com/storage/modules/233/1.png)

# 

# 

#### Questions

####