<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/176/section/1754
// Platform Version: V1
// Module ID: 176
// Module Name: Windows Attacks & Defense
// Module Difficulty: Medium
// Section ID: 1754
// Section Title: Overview and Lab Environment
// Page Title: Windows Attacks & Defense
// Page Number: 02
-->

# Overview and Lab Environment

**Module Name:** Windows Attacks & Defense **Page Number:** 02

#### WINDOWS ATTACKS & DEFENSE

# Overview

## Lab Environment

## Connecting to the lab environment

## Connect to WS001 via RDP

``` shell-session
[!bash!]$ xfreerdp /u:eagle\\bob /p:Slavi123 /v:TARGET_IP /dynamic-resolution
```

![https://academy.hackthebox.com/storage/modules/176/Lab/RDPWindows.png](https://academy.hackthebox.com/storage/modules/176/Lab/RDPWindows.png)

![https://academy.hackthebox.com/storage/modules/176/Lab/RDPWindows2.png](https://academy.hackthebox.com/storage/modules/176/Lab/RDPWindows2.png)

## Connect to Kali via SSH

``` shell-session
[!bash!]$ ssh kali@TARGET_IP
```

![https://academy.hackthebox.com/storage/modules/176/Lab/SSHKali.png](https://academy.hackthebox.com/storage/modules/176/Lab/SSHKali.png)

``` shell-session
[!bash!]$ xfreerdp /v:TARGET_IP /u:kali /p:kali /dynamic-resolution
```

## Moving files between WS001 and your Linux attacking machine

![https://academy.hackthebox.com/storage/modules/176/Lab/share1.png](https://academy.hackthebox.com/storage/modules/176/Lab/share1.png)

``` shell-session
[!bash!]$ smbclient \\\\TARGET_IP\\Share -U eagle/administrator%Slavi123
```

![https://academy.hackthebox.com/storage/modules/176/Lab/share2.png](https://academy.hackthebox.com/storage/modules/176/Lab/share2.png)

####