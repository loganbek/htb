<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1092
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1092
// Section Title: Splunk - Discovery & Enumeration
// Page Title: Attacking Common Applications
// Page Number: 13
-->

# Splunk - Discovery & Enumeration

**Module Name:** Attacking Common Applications **Page Number:** 13

#### ATTACKING COMMON APPLICATIONS

# Splunk - Discovery & Enumeration

## Discovery/Footprinting

![https://academy.hackthebox.com/storage/modules/113/changme.png](https://academy.hackthebox.com/storage/modules/113/changme.png)

![https://academy.hackthebox.com/storage/modules/113/splunk_login.png](https://academy.hackthebox.com/storage/modules/113/splunk_login.png)

``` shell-session
[!bash!]$ sudo nmap -sV 10.129.201.50

Starting Nmap 7.80 ( https://nmap.org ) at 2021-09-22 08:43 EDT
Nmap scan report for 10.129.201.50
Host is up (0.11s latency).
Not shown: 991 closed ports
PORT     STATE SERVICE       VERSION
80/tcp   open  http          Microsoft IIS httpd 10.0
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds?
3389/tcp open  ms-wbt-server Microsoft Terminal Services
5357/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
8000/tcp open  ssl/http      Splunkd httpd
8080/tcp open  http          Indy httpd 17.3.33.2830 (Paessler PRTG bandwidth monitor)
8089/tcp open  ssl/http      Splunkd httpd
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 39.22 seconds
```

## Enumeration

![https://academy.hackthebox.com/storage/modules/113/license_group.png](https://academy.hackthebox.com/storage/modules/113/license_group.png)

![https://academy.hackthebox.com/storage/modules/113/splunk_home.png](https://academy.hackthebox.com/storage/modules/113/splunk_home.png)

# 

# 

#### Questions

####