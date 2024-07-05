<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2530
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2530
// Section Title: Detecting Unconstrained Delegation/Constrained Delegation Attacks
// Page Title: Hack The Box - Academy
// Page Number: 09
-->

# Detecting Unconstrained Delegation/Constrained Delegation Attacks

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 09

#### 

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Unconstrained Delegation/Constrained Delegation Attacks

## Unconstrained Delegation

![https://academy.hackthebox.com/storage/modules/233/image49.png](https://academy.hackthebox.com/storage/modules/233/image49.png)

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image19.png](https://academy.hackthebox.com/storage/modules/233/image19.png)

![https://academy.hackthebox.com/storage/modules/233/image3.png](https://academy.hackthebox.com/storage/modules/233/image3.png)

#### Kerberos Authentication With Unconstrained Delegation

![https://academy.hackthebox.com/storage/modules/233/image51.png](https://academy.hackthebox.com/storage/modules/233/image51.png)

#### Unconstrained Delegation Attack Detection Opportunities

## Detecting Unconstrained Delegation Attacks With Splunk

``` shell-session
index=main earliest=1690544538 latest=1690544540 source="WinEventLog:Microsoft-Windows-PowerShell/Operational" EventCode=4104 Message="*TrustedForDelegation*" OR Message="*userAccountControl:1.2.840.113556.1.4.803:=524288*" 
| table _time, ComputerName, EventCode, Message
```

![https://academy.hackthebox.com/storage/modules/233/20.png](https://academy.hackthebox.com/storage/modules/233/20.png)

## Constrained Delegation

![https://academy.hackthebox.com/storage/modules/233/image26.png](https://academy.hackthebox.com/storage/modules/233/image26.png)

#### Attack Steps:

![https://academy.hackthebox.com/storage/modules/233/image35.png](https://academy.hackthebox.com/storage/modules/233/image35.png)

![https://academy.hackthebox.com/storage/modules/233/image64.png](https://academy.hackthebox.com/storage/modules/233/image64.png)

![https://academy.hackthebox.com/storage/modules/233/image48.png](https://academy.hackthebox.com/storage/modules/233/image48.png)

![https://academy.hackthebox.com/storage/modules/233/image60.png](https://academy.hackthebox.com/storage/modules/233/image60.png)

#### Kerberos Protocol Extensions - Service For User

![https://academy.hackthebox.com/storage/modules/233/image29.png](https://academy.hackthebox.com/storage/modules/233/image29.png)

#### Constrained Delegation Attack Detection Opportunities

## Detecting Constrained Delegation Attacks With Splunk

#### Detecting Constrained Delegation Attacks - Leveraging PowerShell Logs

``` shell-session
index=main earliest=1690544553 latest=1690562556 source="WinEventLog:Microsoft-Windows-PowerShell/Operational" EventCode=4104 Message="*msDS-AllowedToDelegateTo*" 
| table _time, ComputerName, EventCode, Message
```

![https://academy.hackthebox.com/storage/modules/233/21.png](https://academy.hackthebox.com/storage/modules/233/21.png)

#### Detecting Constrained Delegation Attacks - Leveraging Sysmon Logs

``` shell-session
index=main earliest=1690562367 latest=1690562556 source="XmlWinEventLog:Microsoft-Windows-Sysmon/Operational" 
| eventstats values(process) as process by process_id
| where EventCode=3 AND dest_port=88
| table _time, Computer, dest_ip, dest_port, Image, process
```

![https://academy.hackthebox.com/storage/modules/233/22.png](https://academy.hackthebox.com/storage/modules/233/22.png)

# 

# 

#### Questions

####