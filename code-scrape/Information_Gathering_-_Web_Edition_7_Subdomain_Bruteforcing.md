<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/144/section/1253
// Platform Version: V1
// Module ID: 144
// Module Name: Information Gathering - Web Edition
// Module Difficulty: Easy
// Section ID: 1253
// Section Title: Subdomain Bruteforcing
// Page Title: Hack The Box - Academy
// Page Number: 7
-->

# Subdomain Bruteforcing

**Module Name:** Information Gathering - Web Edition **Page Number:** 7

#### 

#### INFORMATION GATHERING - WEB EDITION

# Subdomain Bruteforcing

### DNSEnum

``` bash
dnsenum --enum inlanefreight.com -f /usr/share/SecLists/Discovery/DNS/subdomains-top1million-110000.txt -r
```

``` shell-session
ndefstathiou@htb[/htb]$ dnsenum --enum inlanefreight.com -f  /usr/share/SecLists/Discovery/DNS/subdomains-top1million-20000.txt 

dnsenum VERSION:1.2.6

-----   inlanefreight.com   -----


Host's addresses:
__________________

inlanefreight.com.                       300      IN    A        134.209.24.248

[...]

Brute forcing with /usr/share/SecLists/Discovery/DNS/subdomains-top1million-20000.txt:
_______________________________________________________________________________________

www.inlanefreight.com.                   300      IN    A        134.209.24.248
support.inlanefreight.com.               300      IN    A        134.209.24.248
[...]


done.
```

# 

# 

#### Questions

####