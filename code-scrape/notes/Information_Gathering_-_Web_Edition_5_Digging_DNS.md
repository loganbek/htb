<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/144/section/1251
// Platform Version: V1
// Module ID: 144
// Module Name: Information Gathering - Web Edition
// Module Difficulty: Easy
// Section ID: 1251
// Section Title: Digging DNS
// Page Title: Hack The Box - Academy
// Page Number: 5
-->

# Digging DNS

**Module Name:** Information Gathering - Web Edition **Page Number:** 5

#### 

#### INFORMATION GATHERING - WEB EDITION

# Digging DNS

## DNS Tools

## The Domain Information Groper

### Common dig Commands

## Groping DNS

``` shell-session
ndefstathiou@htb[/htb]$ dig google.com

; <<>> DiG 9.18.24-0ubuntu0.22.04.1-Ubuntu <<>> google.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 16449
;; flags: qr rd ad; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;google.com.                    IN      A

;; ANSWER SECTION:
google.com.             0       IN      A       142.251.47.142

;; Query time: 0 msec
;; SERVER: 172.23.176.1#53(172.23.176.1) (UDP)
;; WHEN: Thu Jun 13 10:45:58 SAST 2024
;; MSG SIZE  rcvd: 54
```

``` shell-session
ndefstathiou@htb[/htb]$ dig +short hackthebox.com

104.18.20.126
104.18.21.126
```

# 

# 

#### Questions

####