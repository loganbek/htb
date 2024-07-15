<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/71
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 71
// Section Title: User Management
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# User Management

**Module Name:** Linux Fundamentals **Page Number:** 15

#### 

#### LINUX FUNDAMENTALS

# User Management

#### Execution as a user

``` shell-session
ndefstathiou@htb[/htb]$ cat /etc/shadow

cat: /etc/shadow: Permission denied
```

#### Execution as root

``` shell-session
ndefstathiou@htb[/htb]$ sudo cat /etc/shadow

root:<SNIP>:18395:0:99999:7:::
daemon:*:17737:0:99999:7:::
bin:*:17737:0:99999:7:::
<SNIP>
```

# 

# 

#### Questions

####