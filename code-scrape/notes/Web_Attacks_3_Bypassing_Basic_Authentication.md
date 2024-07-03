<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1175
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1175
// Section Title: Bypassing Basic Authentication
// Page Title: Hack The Box - Academy
// Page Number: 3
-->

# Bypassing Basic Authentication

**Module Name:** Web Attacks **Page Number:** 3

#### 

#### WEB ATTACKS

# Bypassing Basic Authentication

## Identify

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_add.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_add.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_reset.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_reset.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_unauthorized.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_unauthorized.jpg)

## Exploit

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_unauthorized_request.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_unauthorized_request.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_change_request.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_change_request.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_reset.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_reset.jpg)

``` shell-session
[!bash!]$ curl -i -X OPTIONS http://SERVER_IP:PORT/

HTTP/1.1 200 OK
Date: 
Server: Apache/2.4.41 (Ubuntu)
Allow: POST,OPTIONS,HEAD,GET
Content-Length: 0
Content-Type: httpd/unix-directory
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_HEAD_request.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_HEAD_request.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_after_reset.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_verb_tampering_after_reset.jpg)

# 

# 

#### Questions

####