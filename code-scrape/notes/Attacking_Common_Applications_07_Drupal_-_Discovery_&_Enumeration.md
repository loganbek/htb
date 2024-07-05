<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1089
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1089
// Section Title: Drupal - Discovery & Enumeration
// Page Title: Hack The Box - Academy
// Page Number: 07
-->

# Drupal - Discovery & Enumeration

**Module Name:** Attacking Common Applications **Page Number:** 07

#### 

#### ATTACKING COMMON APPLICATIONS

# Drupal - Discovery & Enumeration

## Discovery/Footprinting

``` shell-session
[!bash!]$ curl -s http://drupal.inlanefreight.local | grep Drupal

<meta name="Generator" content="Drupal 8 (https://www.drupal.org)" />
      <span>Powered by <a href="https://www.drupal.org">Drupal</a></span>
```

![https://academy.hackthebox.com/storage/modules/113/drupal_node.png](https://academy.hackthebox.com/storage/modules/113/drupal_node.png)

## Enumeration

``` shell-session
[!bash!]$ curl -s http://drupal-acc.inlanefreight.local/CHANGELOG.txt | grep -m2 ""

Drupal 7.57, 2018-02-21
```

``` shell-session
[!bash!]$ curl -s http://drupal.inlanefreight.local/CHANGELOG.txt

<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL "http://drupal.inlanefreight.local/CHANGELOG.txt" was not found on this server.</p></body></html>
```

``` shell-session
[!bash!]$ droopescan scan drupal -u http://drupal.inlanefreight.local

[+] Plugins found:                                                              
    php http://drupal.inlanefreight.local/modules/php/
        http://drupal.inlanefreight.local/modules/php/LICENSE.txt

[+] No themes found.

[+] Possible version(s):
    8.9.0
    8.9.1

[+] Possible interesting urls found:
    Default admin - http://drupal.inlanefreight.local/user/login

[+] Scan finished (0:03:19.199526 elapsed)
```

# 

# 

#### Questions

####