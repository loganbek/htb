<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/216/section/2301
// Platform Version: V1
// Module ID: 216
// Module Name: Windows Event Logs & Finding Evil
// Module Difficulty: Medium
// Section ID: 2301
// Section Title: Analyzing Evil With Sysmon & Event Logs
// Page Title: Hack The Box - Academy
// Page Number: 02
-->

# Analyzing Evil With Sysmon & Event Logs

**Module Name:** Windows Event Logs & Finding Evil **Page Number:** 02

#### 

#### WINDOWS EVENT LOGS & FINDING EVIL Mini-Module

# Analyzing Evil With Sysmon & Event Logs

## Sysmon Basics

``` shell-session
C:\Tools\Sysmon> sysmon.exe -i -accepteula -h md5,sha256,imphash -l -n
```

![https://academy.hackthebox.com/storage/modules/216/image13.png](https://academy.hackthebox.com/storage/modules/216/image13.png)

``` shell-session
C:\Tools\Sysmon> sysmon.exe -c filename.xml
```

## Detection Example 1: Detecting DLL Hijacking

![https://academy.hackthebox.com/storage/modules/216/image14.png](https://academy.hackthebox.com/storage/modules/216/image14.png)

![https://academy.hackthebox.com/storage/modules/216/image15.png](https://academy.hackthebox.com/storage/modules/216/image15.png)

``` shell-session
C:\Tools\Sysmon> sysmon.exe -c sysmonconfig-export.xml
```

![https://academy.hackthebox.com/storage/modules/216/image16.png](https://academy.hackthebox.com/storage/modules/216/image16.png)

![https://academy.hackthebox.com/storage/modules/216/image17.png](https://academy.hackthebox.com/storage/modules/216/image17.png)

![https://academy.hackthebox.com/storage/modules/216/image18.png](https://academy.hackthebox.com/storage/modules/216/image18.png)

![https://academy.hackthebox.com/storage/modules/216/image19.png](https://academy.hackthebox.com/storage/modules/216/image19.png)

![https://academy.hackthebox.com/storage/modules/216/image20.png](https://academy.hackthebox.com/storage/modules/216/image20.png)

![https://academy.hackthebox.com/storage/modules/216/image21.png](https://academy.hackthebox.com/storage/modules/216/image21.png)

![https://academy.hackthebox.com/storage/modules/216/image43.png](https://academy.hackthebox.com/storage/modules/216/image43.png)

![https://academy.hackthebox.com/storage/modules/216/image23.png](https://academy.hackthebox.com/storage/modules/216/image23.png)

## Detection Example 2: Detecting Unmanaged PowerShell/C-Sharp Injection

![https://academy.hackthebox.com/storage/modules/216/image24.png](https://academy.hackthebox.com/storage/modules/216/image24.png)

![https://academy.hackthebox.com/storage/modules/216/image25.png](https://academy.hackthebox.com/storage/modules/216/image25.png)

![https://academy.hackthebox.com/storage/modules/216/image26.png](https://academy.hackthebox.com/storage/modules/216/image26.png)

``` powershell-session
powershell -ep bypass
 Import-Module .\Invoke-PSInject.ps1
 Invoke-PSInject -ProcId [Process ID of spoolsv.exe] -PoshCode "V3JpdGUtSG9zdCAiSGVsbG8sIEd1cnU5OSEi"
```

![https://academy.hackthebox.com/storage/modules/216/image27.png](https://academy.hackthebox.com/storage/modules/216/image27.png)

![https://academy.hackthebox.com/storage/modules/216/image28.png](https://academy.hackthebox.com/storage/modules/216/image28.png)

![https://academy.hackthebox.com/storage/modules/216/image29.png](https://academy.hackthebox.com/storage/modules/216/image29.png)

![https://academy.hackthebox.com/storage/modules/216/image30.png](https://academy.hackthebox.com/storage/modules/216/image30.png)

## Detection Example 3: Detecting Credential Dumping

``` cmd-session
C:\Tools\Mimikatz> mimikatz.exe

  .#####.   mimikatz 2.2.0 (x64) #18362 Feb 29 2020 11:13:36
 .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       > http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        > http://pingcastle.com / http://mysmartlogon.com   ***/

mimikatz # privilege::debug
Privilege '20' OK

mimikatz # sekurlsa::logonpasswords

Authentication Id : 0 ; 1128191 (00000000:001136ff)
Session           : RemoteInteractive from 2
User Name         : Administrator
Domain            : DESKTOP-NU10MTO
Logon Server      : DESKTOP-NU10MTO
Logon Time        : 5/31/2023 4:14:41 PM
SID               : S-1-5-21-2712802632-2324259492-1677155984-500
        msv :
         [00000003] Primary
         * Username : Administrator
         * Domain   : DESKTOP-NU10MTO
         * NTLM     : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
         * SHA1     : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX0812156b
        tspkg :
        wdigest :
         * Username : Administrator
         * Domain   : DESKTOP-NU10MTO
         * Password : (null)
        kerberos :
         * Username : Administrator
         * Domain   : DESKTOP-NU10MTO
         * Password : (null)
        ssp :   KO
        credman :
```

![https://academy.hackthebox.com/storage/modules/216/image32.png](https://academy.hackthebox.com/storage/modules/216/image32.png)

![https://academy.hackthebox.com/storage/modules/216/image33.png](https://academy.hackthebox.com/storage/modules/216/image33.png)

## Practical Exercises

``` shell-session
ndefstathiou@htb[/htb]$ xfreerdp /u:Administrator /p:'HTB_@cad3my_lab_W1n10_r00t!@0' /v:[Target IP] /dynamic-resolution
```

# 

# 

#### Questions

####