<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/2134
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 2134
// Section Title: ColdFusion - Discovery & Enumeration
// Page Title: Hack The Box - Academy
// Page Number: 23
-->

# ColdFusion - Discovery & Enumeration

**Module Name:** Attacking Common Applications **Page Number:** 23

#### 

#### ATTACKING COMMON APPLICATIONS

# ColdFusion - Discovery & Enumeration

``` html
<cfquery name="myQuery" datasource="myDataSource">
  SELECT *
  FROM myTable
</cfquery>
```

``` html
<cfloop query="myQuery">
  <p>#myQuery.firstName# #myQuery.lastName#</p>
</cfloop>
```

## Enumeration

#### NMap ports and service scan results

``` shell-session
[!bash!]$ nmap -p- -sC -Pn 10.129.247.30 --open

Starting Nmap 7.92 ( https://nmap.org ) at 2023-03-13 11:45 GMT
Nmap scan report for 10.129.247.30
Host is up (0.028s latency).
Not shown: 65532 filtered tcp ports (no-response)
Some closed ports may be reported as filtered due to --defeat-rst-ratelimit
PORT      STATE SERVICE
135/tcp   open  msrpc
8500/tcp  open  fmtp
49154/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 350.38 seconds
```

![https://academy.hackthebox.com/storage/modules/113/coldfusion/cfindex.png](https://academy.hackthebox.com/storage/modules/113/coldfusion/cfindex.png)

![https://academy.hackthebox.com/storage/modules/113/coldfusion/CFIDE.png](https://academy.hackthebox.com/storage/modules/113/coldfusion/CFIDE.png)

![https://academy.hackthebox.com/storage/modules/113/coldfusion/CFError.png](https://academy.hackthebox.com/storage/modules/113/coldfusion/CFError.png)

![https://academy.hackthebox.com/storage/modules/113/coldfusion/CF8.png](https://academy.hackthebox.com/storage/modules/113/coldfusion/CF8.png)

# 

# 

#### Questions

####