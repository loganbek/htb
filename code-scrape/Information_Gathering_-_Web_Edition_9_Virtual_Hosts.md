<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/144/section/1257
// Platform Version: V1
// Module ID: 144
// Module Name: Information Gathering - Web Edition
// Module Difficulty: Easy
// Section ID: 1257
// Section Title: Virtual Hosts
// Page Title: Hack The Box - Academy
// Page Number: 9
-->

# Virtual Hosts

**Module Name:** Information Gathering - Web Edition **Page Number:** 9

#### 

#### INFORMATION GATHERING - WEB EDITION

# Virtual Hosts

## How Virtual Hosts Work: Understanding VHosts and Subdomains

``` apacheconf
# Example of name-based virtual host configuration in Apache
<VirtualHost *:80>
    ServerName www.example1.com
    DocumentRoot /var/www/example1
</VirtualHost>

<VirtualHost *:80>
    ServerName www.example2.org
    DocumentRoot /var/www/example2
</VirtualHost>

<VirtualHost *:80>
    ServerName www.another-example.net
    DocumentRoot /var/www/another-example
</VirtualHost>
```

### Server VHost Lookup

### Types of Virtual Hosting

## Virtual Host Discovery Tools

### gobuster

``` shell-session
ndefstathiou@htb[/htb]$ gobuster vhost -u http://<target_IP_address> -w <wordlist_file> --append-domain
```

``` shell-session
ndefstathiou@htb[/htb]$ gobuster vhost -u http://inlanefreight.htb:81 -w /usr/share/SecLists/Discovery/DNS/subdomains-top1million-110000.txt --append-domain
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:             http://inlanefreight.htb:81
[+] Method:          GET
[+] Threads:         10
[+] Wordlist:        /usr/share/SecLists/Discovery/DNS/subdomains-top1million-110000.txt
[+] User Agent:      gobuster/3.6
[+] Timeout:         10s
[+] Append Domain:   true
===============================================================
Starting gobuster in VHOST enumeration mode
===============================================================
Found: forum.inlanefreight.htb:81 Status: 200 [Size: 100]
[...]
Progress: 114441 / 114442 (100.00%)
===============================================================
Finished
===============================================================
```

# 

# 

#### Questions

####