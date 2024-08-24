<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3131
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3131
// Section Title: Parameter and Value Fuzzing
// Page Title: Hack The Box - Academy
// Page Number: 05
-->

# Parameter and Value Fuzzing

**Module Name:** Web Fuzzing **Page Number:** 05

#### 

#### WEB FUZZING

# Parameter and Value Fuzzing

## GET Parameters: Openly Sharing Information

``` http
https://example.com/search?query=fuzzing&category=security
```

## POST Parameters: Behind-the-Scenes Communication

``` http
POST /login HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

username=your_username&password=your_password
```

## Why Parameters Matter for Fuzzing

## wenum

``` shell-session
[!bash!]$ pipx install git+https://github.com/WebFuzzForge/wenum
[!bash!]$ pipx runpip wenum install setuptools
```

``` shell-session
[!bash!]$ curl http://IP:PORT/get.php

Invalid parameter value
x:
```

``` shell-session
[!bash!]$ curl http://IP:PORT/get.php?x=1

Invalid parameter value
x: 1
```

``` shell-session
[!bash!]$ wenum -w /usr/share/secLists/Discovery/Web-Content/common.txt --hc 404 -u "http://IP:PORT/get.php?x=FUZZ"

...
 Code    Lines     Words        Size  Method   URL 
...
 200       1 L       1 W        25 B  GET      http://IP:PORT/get.php?x=OA... 

Total time: 0:00:02
Processed Requests: 4731
Filtered Requests: 4730
Requests/s: 1681
```

``` bash
200       1 L       1 W        25 B  GET      http://IP:PORT/get.php?x=OA...
```

``` shell-session
[!bash!]$ curl http://IP:PORT/get.php?x=OA...

HTB{...}
```

### POST

``` shell-session
[!bash!]$ curl -d "" http://IP:PORT/post.php

Invalid parameter value
y:
```

``` shell-session
[!bash!]$ ffuf -u http://IP:PORT/post.php -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "y=FUZZ" -w /usr/share/seclists/Discovery/Web-Content/common.txt -mc 200 -v

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
 :: Matcher          : Response status: 200
________________________________________________

[Status: 200, Size: 26, Words: 1, Lines: 2, Duration: 7ms]
| URL | http://IP:PORT/post.php
    * FUZZ: SU...

:: Progress: [4730/4730] :: Job [1/1] :: 5555 req/sec :: Duration: [0:00:01] :: Errors: 0 ::
```

``` bash
000000326:  200     1 L      1 W     26 Ch     "SU..."
```

``` shell-session
[!bash!]$ curl -d "y=SU..." http://IP:PORT/post.php

HTB{...}
```

# 

# 

#### Questions

####