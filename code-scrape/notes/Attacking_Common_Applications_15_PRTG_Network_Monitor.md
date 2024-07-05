<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1094
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1094
// Section Title: PRTG Network Monitor
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# PRTG Network Monitor

**Module Name:** Attacking Common Applications **Page Number:** 15

#### 

#### ATTACKING COMMON APPLICATIONS

# PRTG Network Monitor

## Discovery/Footprinting/Enumeration

``` shell-session
[!bash!]$ sudo nmap -sV -p- --open -T4 10.129.201.50

Starting Nmap 7.80 ( https://nmap.org ) at 2021-09-22 15:41 EDT
Stats: 0:00:00 elapsed; 0 hosts completed (1 up), 1 undergoing SYN Stealth Scan
SYN Stealth Scan Timing: About 0.06% done
Nmap scan report for 10.129.201.50
Host is up (0.11s latency).
Not shown: 65492 closed ports, 24 filtered ports
Some closed ports may be reported as filtered due to --defeat-rst-ratelimit
PORT      STATE SERVICE       VERSION
80/tcp    open  http          Microsoft IIS httpd 10.0
135/tcp   open  msrpc         Microsoft Windows RPC
139/tcp   open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds?
3389/tcp  open  ms-wbt-server Microsoft Terminal Services
5357/tcp  open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
5985/tcp  open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
8000/tcp  open  ssl/http      Splunkd httpd
8080/tcp  open  http          Indy httpd 17.3.33.2830 (Paessler PRTG bandwidth monitor)
8089/tcp  open  ssl/http      Splunkd httpd
47001/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
49664/tcp open  msrpc         Microsoft Windows RPC
49665/tcp open  msrpc         Microsoft Windows RPC
49666/tcp open  msrpc         Microsoft Windows RPC
49667/tcp open  msrpc         Microsoft Windows RPC
49668/tcp open  msrpc         Microsoft Windows RPC
49669/tcp open  msrpc         Microsoft Windows RPC
49676/tcp open  msrpc         Microsoft Windows RPC
49677/tcp open  msrpc         Microsoft Windows RPC
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 97.17 seconds
```

![https://academy.hackthebox.com/storage/modules/113/prtg_eyewitness.png](https://academy.hackthebox.com/storage/modules/113/prtg_eyewitness.png)

![https://academy.hackthebox.com/storage/modules/113/prtg_login.png](https://academy.hackthebox.com/storage/modules/113/prtg_login.png)

``` shell-session
[!bash!]$ curl -s http://10.129.201.50:8080/index.htm -A "Mozilla/5.0 (compatible;  MSIE 7.01; Windows NT 5.0)" | grep version

  <link rel="stylesheet" type="text/css" href="/css/prtgmini.css?prtgversion=17.3.33.2830__" media="print,screen,projection" />
<div><h3><a target="_blank" href="https://blog.paessler.com/new-prtg-release-21.3.70-with-new-azure-hpe-and-redfish-sensors">New PRTG release 21.3.70 with new Azure, HPE, and Redfish sensors</a></h3><p>Just a short while ago, I introduced you to PRTG Release 21.3.69, with a load of new sensors, and now the next version is ready for installation. And this version also comes with brand new stuff!</p></div>
    <span class="prtgversion">&nbsp;PRTG Network Monitor 17.3.33.2830 </span>
```

![https://academy.hackthebox.com/storage/modules/113/prtg_logged_in.png](https://academy.hackthebox.com/storage/modules/113/prtg_logged_in.png)

## Leveraging Known Vulnerabilities

![https://academy.hackthebox.com/storage/modules/113/prtg_notifications.png](https://academy.hackthebox.com/storage/modules/113/prtg_notifications.png)

![https://academy.hackthebox.com/storage/modules/113/prtg_add.png](https://academy.hackthebox.com/storage/modules/113/prtg_add.png)

![https://academy.hackthebox.com/storage/modules/113/prtg_execute.png](https://academy.hackthebox.com/storage/modules/113/prtg_execute.png)

![https://academy.hackthebox.com/storage/modules/113/prtg_pwn.png](https://academy.hackthebox.com/storage/modules/113/prtg_pwn.png)

``` shell-session
[!bash!]$ sudo crackmapexec smb 10.129.201.50 -u prtgadm1 -p Pwn3d_by_PRTG! 

SMB         10.129.201.50   445    APP03            [*] Windows 10.0 Build 17763 (name:APP03) (domain:APP03) (signing:False) (SMBv1:False)
SMB         10.129.201.50   445    APP03            [+] APP03\prtgadm1:Pwn3d_by_PRTG! (Pwn3d!)
```

## Onwards

# 

# 

#### Questions

####