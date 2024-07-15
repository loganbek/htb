<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/98
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 98
// Section Title: Linux Security
// Page Title: Linux Fundamentals
// Page Number: 26
-->

# Linux Security

**Module Name:** Linux Fundamentals **Page Number:** 26

#### LINUX FUNDAMENTALS

# Linux Security

``` shell-session
[!bash!]$ apt update && apt dist-upgrade
```

## TCP Wrappers

#### /etc/hosts.allow

``` shell-session
[!bash!]$ cat /etc/hosts.allow

# Allow access to SSH from the local network
sshd : 10.129.14.0/24

# Allow access to FTP from a specific host
ftpd : 10.129.14.10

# Allow access to Telnet from any host in the inlanefreight.local domain
telnetd : .inlanefreight.local
```

#### /etc/hosts.deny

``` shell-session
[!bash!]$ cat /etc/hosts.deny

# Deny access to all services from any host in the inlanefreight.com domain
ALL : .inlanefreight.com

# Deny access to SSH from a specific host
sshd : 10.129.22.22

# Deny access to FTP from hosts with IP addresses in the range of 10.129.22.0 to 10.129.22.255
ftpd : 10.129.22.0/24
```

####