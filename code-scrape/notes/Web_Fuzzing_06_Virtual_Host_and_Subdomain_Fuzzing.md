<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3132
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3132
// Section Title: Virtual Host and Subdomain Fuzzing
// Page Title: Hack The Box - Academy
// Page Number: 06
-->

# Virtual Host and Subdomain Fuzzing

**Module Name:** Web Fuzzing **Page Number:** 06

#### 

#### WEB FUZZING

# Virtual Host and Subdomain Fuzzing

## Gobuster

### Gobuster VHost Fuzzing

``` shell-session
[!bash!]$ echo "IP inlanefreight.htb" | sudo tee -a /etc/hosts
```

``` shell-session
[!bash!]$ gobuster vhost -u http://inlanefreight.htb:81 -w /usr/share/SecLists/Discovery/Web-Content/common.txt --append-domain
```

``` shell-session
[!bash!]$ gobuster vhost -u http://inlanefreight.htb:81 -w /usr/share/SecLists/Discovery/Web-Content/common.txt --append-domain

===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:             http://inlanefreight.htb:81
[+] Method:          GET
[+] Threads:         10
[+] Wordlist:        /usr/share/SecLists/Discovery/Web-Content/common.txt
[+] User Agent:      gobuster/3.6
[+] Timeout:         10s
[+] Append Domain:   true
===============================================================
Starting gobuster in VHOST enumeration mode
===============================================================
Found: .git/logs/.inlanefreight.htb:81 Status: 400 [Size: 157]
...
Found: admin.inlanefreight.htb:81 Status: 200 [Size: 100]
Found: android/config.inlanefreight.htb:81 Status: 400 [Size: 157]
...
Progress: 4730 / 4730 (100.00%)
===============================================================
Finished
===============================================================
```

### Gobuster Subdomain Fuzzing

``` shell-session
[!bash!]$ gobuster dns -d inlanefreight.com -w /usr/share/SecLists/Discovery/DNS/subdomains-top1million-5000.txt
```

``` shell-session
[!bash!]$ gobuster dns -d inlanefreight.com -w /usr/share/SecLists/Discovery/DNS/subdomains-top1million-5000.txt 

===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Domain:     inlanefreight.com
[+] Threads:    10
[+] Timeout:    1s
[+] Wordlist:   /usr/share/SecLists/Discovery/DNS/subdomains-top1million-5000.txt
===============================================================
Starting gobuster in DNS enumeration mode
===============================================================
Found: www.inlanefreight.com

Found: blog.inlanefreight.com

...

Progress: 4989 / 4990 (99.98%)
===============================================================
Finished
===============================================================
```

# 

# 

#### Questions

####