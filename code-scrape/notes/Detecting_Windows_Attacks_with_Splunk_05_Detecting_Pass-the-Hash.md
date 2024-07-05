<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2527
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2527
// Section Title: Detecting Pass-the-Hash
// Page Title: Hack The Box - Academy
// Page Number: 05
-->

# Detecting Pass-the-Hash

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 05

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Pass-the-Hash

## Pass-the-Hash

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image65.png](https://academy.hackthebox.com/storage/modules/233/image65.png)

![https://academy.hackthebox.com/storage/modules/233/image52.png](https://academy.hackthebox.com/storage/modules/233/image52.png)

![https://academy.hackthebox.com/storage/modules/233/image62.png](https://academy.hackthebox.com/storage/modules/233/image62.png)

#### Windows Access Tokens & Alternate Credentials

![https://academy.hackthebox.com/storage/modules/233/image15.png](https://academy.hackthebox.com/storage/modules/233/image15.png)

![https://academy.hackthebox.com/storage/modules/233/image5.png](https://academy.hackthebox.com/storage/modules/233/image5.png)

![https://academy.hackthebox.com/storage/modules/233/image34.png](https://academy.hackthebox.com/storage/modules/233/image34.png)

#### Pass-the-Hash Detection Opportunities

![https://academy.hackthebox.com/storage/modules/233/image38.png](https://academy.hackthebox.com/storage/modules/233/image38.png)

![https://academy.hackthebox.com/storage/modules/233/image32.png](https://academy.hackthebox.com/storage/modules/233/image32.png)

## Detecting Pass-the-Hash With Splunk

``` shell-session
index=main earliest=1690450708 latest=1690451116 source="WinEventLog:Security" EventCode=4624 Logon_Type=9 Logon_Process=seclogo
| table _time, ComputerName, EventCode, user, Network_Account_Domain, Network_Account_Name, Logon_Type, Logon_Process
```

![https://academy.hackthebox.com/storage/modules/233/13.png](https://academy.hackthebox.com/storage/modules/233/13.png)

``` shell-session
index=main earliest=1690450689 latest=1690451116 (source="XmlWinEventLog:Microsoft-Windows-Sysmon/Operational" EventCode=10 TargetImage="C:\\Windows\\system32\\lsass.exe" SourceImage!="C:\\ProgramData\\Microsoft\\Windows Defender\\platform\\*\\MsMpEng.exe") OR (source="WinEventLog:Security" EventCode=4624 Logon_Type=9 Logon_Process=seclogo)
| sort _time, RecordNumber
| transaction host maxspan=1m endswith=(EventCode=4624) startswith=(EventCode=10)
| stats count by _time, Computer, SourceImage, SourceProcessId, Network_Account_Domain, Network_Account_Name, Logon_Type, Logon_Process
| fields - count
```

![https://academy.hackthebox.com/storage/modules/233/14.png](https://academy.hackthebox.com/storage/modules/233/14.png)

# 

# 

#### Questions

####