<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/49/section/454
// Platform Version: V1
// Module ID: 49
// Module Name: Windows Fundamentals
// Module Difficulty: Fundamental
// Section ID: 454
// Section Title: Introduction to Windows
// Page Title: Hack The Box - Academy
// Page Number: 01
-->

# Introduction to Windows

**Module Name:** Windows Fundamentals **Page Number:** 01

#### 

#### WINDOWS FUNDAMENTALS

# Introduction to Windows

## The Windows Operating System

## Windows Versions

``` powershell-session
PS C:\htb> Get-WmiObject -Class win32_OperatingSystem | select Version,BuildNumber

Version    BuildNumber
-------    -----------
10.0.19041 19041
```

## Accessing Windows

#### Local Access Concepts

#### Remote Access Concepts

#### Remote Desktop Protocol (RDP)

![https://academy.hackthebox.com/storage/modules/49/UsingRemoteDesktopConnection.gif](https://academy.hackthebox.com/storage/modules/49/UsingRemoteDesktopConnection.gif)

![https://academy.hackthebox.com/storage/modules/49/SavingRDPConnections.gif](https://academy.hackthebox.com/storage/modules/49/SavingRDPConnections.gif)

#### Using xfreerdp

![https://academy.hackthebox.com/storage/modules/49/ConnectingwithXfreerdp.gif](https://academy.hackthebox.com/storage/modules/49/ConnectingwithXfreerdp.gif)

## Connecting to the Windows Target

``` shell-session
ndefstathiou@htb[/htb]$ xfreerdp /v:<targetIp> /u:htb-student /p:Password
```

# 

# 

#### Questions

####