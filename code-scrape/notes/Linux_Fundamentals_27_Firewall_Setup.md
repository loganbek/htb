<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/2099
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 2099
// Section Title: Firewall Setup
// Page Title: Linux Fundamentals
// Page Number: 27
-->

# Firewall Setup

**Module Name:** Linux Fundamentals **Page Number:** 27

#### LINUX FUNDAMENTALS

# Firewall Setup

## Iptables

#### Tables

#### Chains

#### Rules and Targets

``` shell-session
[!bash!]$ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

#### Matches

``` shell-session
[!bash!]$ sudo iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT
```

# 

# 

####