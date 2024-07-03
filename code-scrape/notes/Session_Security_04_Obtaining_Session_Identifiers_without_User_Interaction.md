<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1445
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1445
// Section Title: Obtaining Session Identifiers without User Interaction
// Page Title: Session Security
// Page Number: 04
-->

# Obtaining Session Identifiers without User Interaction

**Module Name:** Session Security **Page Number:** 04

#### SESSION SECURITY

# Obtaining Session Identifiers without User Interaction

## Obtaining Session Identifiers via Traffic Sniffing

``` shell-session
ndefstathiou@htb[/htb]$ IP=ENTER SPAWNED TARGET IP HERE
ndefstathiou@htb[/htb]$ printf "%s\t%s\n\n" "$IP" "xss.htb.net csrf.htb.net oredirect.htb.net minilab.htb.net" | sudo tee -a /etc/hosts
```

![https://academy.hackthebox.com/storage/modules/153/3.png](https://academy.hackthebox.com/storage/modules/153/3.png)

``` shell-session
ndefstathiou@htb[/htb]$ sudo -E wireshark
```

![https://academy.hackthebox.com/storage/modules/153/1.png](https://academy.hackthebox.com/storage/modules/153/1.png)

![https://academy.hackthebox.com/storage/modules/153/2.png](https://academy.hackthebox.com/storage/modules/153/2.png)

![https://academy.hackthebox.com/storage/modules/153/4.png](https://academy.hackthebox.com/storage/modules/153/4.png)

![https://academy.hackthebox.com/storage/modules/153/5.png](https://academy.hackthebox.com/storage/modules/153/5.png)

![https://academy.hackthebox.com/storage/modules/153/6.png](https://academy.hackthebox.com/storage/modules/153/6.png)

![https://academy.hackthebox.com/storage/modules/153/8.png](https://academy.hackthebox.com/storage/modules/153/8.png)

![https://academy.hackthebox.com/storage/modules/153/9.png](https://academy.hackthebox.com/storage/modules/153/9.png)

![https://academy.hackthebox.com/storage/modules/153/10.png](https://academy.hackthebox.com/storage/modules/153/10.png)

## Obtaining Session Identifiers Post-Exploitation (Web Server Access)

### PHP

``` shell-session
ndefstathiou@htb[/htb]$ locate php.ini
ndefstathiou@htb[/htb]$ cat /etc/php/7.4/cli/php.ini | grep 'session.save_path'
ndefstathiou@htb[/htb]$ cat /etc/php/7.4/apache2/php.ini | grep 'session.save_path'
```

![https://academy.hackthebox.com/storage/modules/153/11.png](https://academy.hackthebox.com/storage/modules/153/11.png)

![https://academy.hackthebox.com/storage/modules/153/12.png](https://academy.hackthebox.com/storage/modules/153/12.png)

``` shell-session
ndefstathiou@htb[/htb]$ ls /var/lib/php/sessions
ndefstathiou@htb[/htb]$ cat //var/lib/php/sessions/sess_s6kitq8d3071rmlvbfitpim9mm
```

![https://academy.hackthebox.com/storage/modules/153/13.png](https://academy.hackthebox.com/storage/modules/153/13.png)

### Java

### .NET

## Obtaining Session Identifiers Post-Exploitation (Database Access)

``` sql
show databases;
use project;
show tables;
select * from users;
```

![https://academy.hackthebox.com/storage/modules/153/14.png](https://academy.hackthebox.com/storage/modules/153/14.png)

``` sql
select * from all_sessions;
select * from all_sessions where id=3;
```

![https://academy.hackthebox.com/storage/modules/153/15.png](https://academy.hackthebox.com/storage/modules/153/15.png)

#### Questions

####