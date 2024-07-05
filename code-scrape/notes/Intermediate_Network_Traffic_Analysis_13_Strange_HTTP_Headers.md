<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2464
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2464
// Section Title: Strange HTTP Headers
// Page Title: Intermediate Network Traffic Analysis
// Page Number: 13
-->

# Strange HTTP Headers

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 13

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# Strange HTTP Headers

## Finding Strange Host Headers

![https://academy.hackthebox.com/storage/modules/229/1-http-headers.png](https://academy.hackthebox.com/storage/modules/229/1-http-headers.png)

![https://academy.hackthebox.com/storage/modules/229/2-http-headers.png](https://academy.hackthebox.com/storage/modules/229/2-http-headers.png)

![https://academy.hackthebox.com/storage/modules/229/3-http-headers.png](https://academy.hackthebox.com/storage/modules/229/3-http-headers.png)

![https://academy.hackthebox.com/storage/modules/229/4-http-headers.png](https://academy.hackthebox.com/storage/modules/229/4-http-headers.png)

## Analyzing Code 400s and Request Smuggling

![https://academy.hackthebox.com/storage/modules/229/6-http-headers.png](https://academy.hackthebox.com/storage/modules/229/6-http-headers.png)

![https://academy.hackthebox.com/storage/modules/229/5-http-headers.png](https://academy.hackthebox.com/storage/modules/229/5-http-headers.png)

``` url-decoded
GET /login.php?id=1 HTTP/1.1
Host: 192.168.10.5

GET /uploads/cmd2.php HTTP/1.1
Host: 127.0.0.1:8080

 HTTP/1.1
Host: 192.168.10.5
```

## Apache Configuration

``` txt
<VirtualHost *:80>

    RewriteEngine on
    RewriteRule "^/categories/(.*)" "http://192.168.10.100:8080/categories.php?id=$1" [P]
    ProxyPassReverse "/categories/" "http://192.168.10.100:8080/"

</VirtualHost>
```

# 

# 

#### Questions

####