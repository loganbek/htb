<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/176/section/1789
// Platform Version: V1
// Module ID: 176
// Module Name: Windows Attacks & Defense
// Module Difficulty: Medium
// Section ID: 1789
// Section Title: Object ACLs
// Page Title: Windows Attacks & Defense
// Page Number: 14
-->

# Object ACLs

**Module Name:** Windows Attacks & Defense **Page Number:** 14

#### WINDOWS ATTACKS & DEFENSE

# Object ACLs

## Description

## Attack

``` powershell-session
PS C:\Users\bob\Downloads> .\SharpHound.exe -c All

2022-12-19T14:16:39.1749601+01:00|INFORMATION|This version of SharpHound is compatible with the 4.2 Release of BloodHound
2022-12-19T14:16:39.3312221+01:00|INFORMATION|Resolved Collection Methods: Group, LocalAdmin, GPOLocalGroup, Session, LoggedOn, Trusts, ACL, Container, RDP, ObjectProps, DCOM, SPNTargets, PSRemote
2022-12-19T14:16:39.3468314+01:00|INFORMATION|Initializing SharpHound at 14.16 on 19/12/2022
2022-12-19T14:16:39.5187113+01:00|INFORMATION|Flags: Group, LocalAdmin, GPOLocalGroup, Session, LoggedOn, Trusts, ACL, Container, RDP, ObjectProps, DCOM, SPNTargets, PSRemote
2022-12-19T14:16:39.7530826+01:00|INFORMATION|Beginning LDAP search for eagle.local
2022-12-19T14:16:39.7999574+01:00|INFORMATION|Producer has finished, closing LDAP channel
2022-12-19T14:16:39.7999574+01:00|INFORMATION|LDAP channel closed, waiting for consumers
2022-12-19T14:17:09.8937530+01:00|INFORMATION|Status: 0 objects finished (+0 0)/s -- Using 36 MB RAM
2022-12-19T14:17:28.4874698+01:00|INFORMATION|Consumers finished, closing output channel
2022-12-19T14:17:28.5343302+01:00|INFORMATION|Output channel closed, waiting for output task to complete
Closing writers
2022-12-19T14:17:28.6124768+01:00|INFORMATION|Status: 114 objects finished (+114 2.375)/s -- Using 46 MB RAM
2022-12-19T14:17:28.6124768+01:00|INFORMATION|Enumeration finished in 00:00:48.8638030
2022-12-19T14:17:28.6905842+01:00|INFORMATION|Saving cache with stats: 74 ID to type mappings.
 76 name to SID mappings.
 1 machine sid mappings.
 2 sid to domain mappings.
 0 global catalog mappings.
2022-12-19T14:17:28.6905842+01:00|INFORMATION|SharpHound Enumeration Completed at 14.17 on 19/12/2022! Happy Graphing!
```

![https://academy.hackthebox.com/storage/modules/176/A12/Sharphound.png](https://academy.hackthebox.com/storage/modules/176/A12/Sharphound.png)

![https://academy.hackthebox.com/storage/modules/176/A12/bloodhound.png](https://academy.hackthebox.com/storage/modules/176/A12/bloodhound.png)

## Prevention

## Detection

![https://academy.hackthebox.com/storage/modules/176/A12/detect1.png](https://academy.hackthebox.com/storage/modules/176/A12/detect1.png)

![https://academy.hackthebox.com/storage/modules/176/A12/detect2.png](https://academy.hackthebox.com/storage/modules/176/A12/detect2.png)

## Honeypot

![https://academy.hackthebox.com/storage/modules/176/A12/detect1.png](https://academy.hackthebox.com/storage/modules/176/A12/detect1.png)

# 

# 

#### Questions

####