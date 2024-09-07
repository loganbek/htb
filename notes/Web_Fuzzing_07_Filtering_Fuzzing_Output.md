<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3133
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3133
// Section Title: Filtering Fuzzing Output
// Page Title: Hack The Box - Academy
// Page Number: 07
-->

# Filtering Fuzzing Output

**Module Name:** Web Fuzzing **Page Number:** 07

#### 

#### WEB FUZZING

# Filtering Fuzzing Output

### Gobuster

``` shell-session
# Find directories with status codes 200 or 301, but exclude responses with a size of 0 (empty responses)
lbek@htb[/htb]$ gobuster dir -u http://example.com/ -w wordlist.txt -s 200,301 --exclude-length 0
```

## FFUF

``` shell-session
# Find directories with status code 200, based on the amount of words, and a response size greater than 500 bytes
lbek@htb[/htb]$ ffuf -u http://example.com/FUZZ -w wordlist.txt -mc 200 -fw 427 -ms >500

# Filter out responses with status codes 404, 401, and 302
lbek@htb[/htb]$ ffuf -u http://example.com/FUZZ -w wordlist.txt -fc 404,401,302

# Find backup files with the .bak extension and size between 10KB and 100KB
lbek@htb[/htb]$ ffuf -u http://example.com/FUZZ.bak -w wordlist.txt -fs 0-10239 -ms 10240-102400

# Discover endpoints that take longer than 500ms to respond
lbek@htb[/htb]$ ffuf -u http://example.com/FUZZ -w wordlist.txt -mt >500
```

### wenum

``` shell-session
# Show only successful requests and redirects:
lbek@htb[/htb]$ wenum -w wordlist.txt --sc 200,301,302 -u https://example.com/FUZZ

# Hide responses with common error codes:
lbek@htb[/htb]$ wenu -w wordlist.txt --hc 404,400,500 -u https://example.com/FUZZ

# Show only short error messages (responses with 5-10 words):
lbek@htb[/htb]$ wenum -w wordlist.txt --sw 5-10 -u https://example.com/FUZZ

# Hide large files and focus on smaller responses:
lbek@htb[/htb]$ wenum -w wordlist.txt --hs 10000 -u https://example.com/FUZZ

# Filter for responses containing specific information:
lbek@htb[/htb]$ wenum -w wordlist.txt --sr "admin\|password" -u https://example.com/FUZZ
```

## Feroxbuster

``` shell-session
# Find directories with status code 200, excluding responses larger than 10KB or containing the word "error"
lbek@htb[/htb]$ feroxbuster --url http://example.com -w wordlist.txt -s 200 -S 10240 -X "error"
```

## A Quick Demonstration

``` shell-session
lbek@htb[/htb]$ ffuf -u http://IP:PORT/post.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "y=FUZZ" -w /usr/share/seclists/Discovery/Web-Content/common.txt -v

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : POST
 :: URL              : http://IP:PORT/post.php
 :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/Web-Content/common.txt
 :: Header           : Content-Type: application/x-www-form-urlencoded
 :: Data             : y=FUZZ
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
________________________________________________
```

``` shell-session
lbek@htb[/htb]$ ffuf -u http://IP:PORT/post.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "y=FUZZ" -w /usr/share/seclists/Discovery/Web-Content/common.txt -v -mc all 


        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : POST
 :: URL              : http://IP:PORT/post.php
 :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/Web-Content/common.txt
 :: Header           : Content-Type: application/x-www-form-urlencoded
 :: Data             : y=FUZZ
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: all
________________________________________________

[Status: 404, Size: 36, Words: 4, Lines: 3, Duration: 1ms]
| URL | http://IP:PORT/post.php
    * FUZZ: .cache

[Status: 404, Size: 43, Words: 4, Lines: 3, Duration: 2ms]
| URL | http://IP:PORT/post.php
    * FUZZ: .bash_history

[Status: 404, Size: 34, Words: 4, Lines: 3, Duration: 2ms]
| URL | http://IP:PORT/post.php
    * FUZZ: .cvs

[Status: 404, Size: 42, Words: 4, Lines: 3, Duration: 2ms]
| URL | http://IP:PORT/post.php
    * FUZZ: .git-rewrite

[Status: 404, Size: 40, Words: 4, Lines: 3, Duration: 2ms]
| URL | http://IP:PORT/post.php
    * FUZZ: .cvsignore

[Status: 404, Size: 39, Words: 4, Lines: 3, Duration: 3ms]
| URL | http://IP:PORT/post.php
    * FUZZ: .git/HEAD
...
```

# 

# 

#### Optional Exercises

####