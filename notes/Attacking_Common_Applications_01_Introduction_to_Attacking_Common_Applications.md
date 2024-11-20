<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1087
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1087
// Section Title: Introduction to Attacking Common Applications
// Page Title: Attacking Common Applications
// Page Number: 01
-->

# Introduction to Attacking Common Applications

**Module Name:** Attacking Common Applications **Page Number:** 01

#### ATTACKING COMMON APPLICATIONS

# Introduction to Attacking Common Applications

## Application Data

## A Quick Story

## Common Applications

## Module Targets

``` shell-session
ndefstathiou@htb[/htb]$ IP=10.129.42.195
ndefstathiou@htb[/htb]$ printf "%s\t%s\n\n" "$IP" "app.inlanefreight.local dev.inlanefreight.local blog.inlanefreight.local" | sudo tee -a /etc/hosts
```

``` shell-session
ndefstathiou@htb[/htb]$ cat /etc/hosts

# Your system has configured 'manage_etc_hosts' as True.
# As a result, if you wish for changes to this file to persist
# then you will need to either
# a.) make changes to the master file in /etc/cloud/templates/hosts.debian.tmpl
# b.) change or remove the value of 'manage_etc_hosts' in
#     /etc/cloud/cloud.cfg or cloud-config from user-data
#
127.0.1.1 htb-9zftpkslke.htb-cloud.com htb-9zftpkslke
127.0.0.1 localhost

# The following lines are desirable for IPv6 capable hosts
::1 ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
ff02::3 ip6-allhosts

10.129.42.195	app.inlanefreight.local dev.inlanefreight.local blog.inlanefreight.local
```

####