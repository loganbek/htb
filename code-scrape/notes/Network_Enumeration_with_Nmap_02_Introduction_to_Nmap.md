<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/19/section/100
// Platform Version: V1
// Module ID: 19
// Module Name: Network Enumeration with Nmap
// Module Difficulty: Easy
// Section ID: 100
// Section Title: Introduction to Nmap
// Page Title: Network Enumeration with Nmap
// Page Number: 02
-->

# Introduction to Nmap

**Module Name:** Network Enumeration with Nmap **Page Number:** 02

#### NETWORK ENUMERATION WITH NMAP

# Introduction to Nmap

## Use Cases

## Nmap Architecture

## Syntax

``` shell-session
ndefstathiou@htb[/htb]$ nmap <scan types> <options> <target>
```

## Scan Techniques

``` shell-session
ndefstathiou@htb[/htb]$ nmap --help

<SNIP>
SCAN TECHNIQUES:
  -sS/sT/sA/sW/sM: TCP SYN/Connect()/ACK/Window/Maimon scans
  -sU: UDP Scan
  -sN/sF/sX: TCP Null, FIN, and Xmas scans
  --scanflags <flags>: Customize TCP scan flags
  -sI <zombie host[:probeport]>: Idle scan
  -sY/sZ: SCTP INIT/COOKIE-ECHO scans
  -sO: IP protocol scan
  -b <FTP relay host>: FTP bounce scan
<SNIP>
```

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap -sS localhost

Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-11 22:50 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.000010s latency).
Not shown: 996 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
5432/tcp open  postgresql
5901/tcp open  vnc-1

Nmap done: 1 IP address (1 host up) scanned in 0.18 seconds
```

####