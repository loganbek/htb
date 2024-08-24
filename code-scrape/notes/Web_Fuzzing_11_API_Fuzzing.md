<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3137
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3137
// Section Title: API Fuzzing
// Page Title: Hack The Box - Academy
// Page Number: 11
-->

# API Fuzzing

**Module Name:** Web Fuzzing **Page Number:** 11

#### 

#### WEB FUZZING

# API Fuzzing

## Why Fuzz APIs?

## Types of API Fuzzing

## Exploring the API

![https://academy.hackthebox.com/storage/modules/280/apispec.png](https://academy.hackthebox.com/storage/modules/280/apispec.png)

## Fuzzing the API

``` shell-session
[!bash!]$ git clone https://github.com/PandaSt0rm/webfuzz_api.git
[!bash!]$ cd webfuzz_api
[!bash!]$ pip3 install -r requirements.txt
```

``` shell-session
[!bash!]$ python3 api_fuzzer.py http://IP:PORT

[-] Invalid endpoint: http://localhost:8000/~webmaster (Status code: 404)
[-] Invalid endpoint: http://localhost:8000/~www (Status code: 404)

Fuzzing completed.
Total requests: 4730
Failed requests: 0
Retries: 0
Status code counts:
404: 4727
200: 2
405: 1
Found valid endpoints:
- http://localhost:8000/cz...
- http://localhost:8000/docs
Unusual status codes:
405: http://localhost:8000/items
```

``` shell-session
[!bash!]$ curl http://localhost:8000/cz...

{"flag":"<snip>"}
```

# 

# 

#### Questions

####