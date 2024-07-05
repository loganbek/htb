<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/24/section/681
// Platform Version: V1
// Module ID: 24
// Module Name: File Transfers
// Module Difficulty: Medium
// Section ID: 681
// Section Title: Catching Files over HTTP/S
// Page Title: File Transfers
// Page Number: 07
-->

# Catching Files over HTTP/S

**Module Name:** File Transfers **Page Number:** 07

#### FILE TRANSFERS

# Catching Files over HTTP/S

## HTTP/S

## Nginx - Enabling PUT

#### Create a Directory to Handle Uploaded Files

``` shell-session
[!bash!]$ sudo mkdir -p /var/www/uploads/SecretUploadDirectory
```

#### Change the Owner to www-data

``` shell-session
[!bash!]$ sudo chown -R www-data:www-data /var/www/uploads/SecretUploadDirectory
```

#### Create Nginx Configuration File

``` shell-session
server {
    listen 9001;
    
    location /SecretUploadDirectory/ {
        root    /var/www/uploads;
        dav_methods PUT;
    }
}
```

#### Symlink our Site to the sites-enabled Directory

``` shell-session
[!bash!]$ sudo ln -s /etc/nginx/sites-available/upload.conf /etc/nginx/sites-enabled/
```

#### Start Nginx

``` shell-session
[!bash!]$ sudo systemctl restart nginx.service
```

#### Verifying Errors

``` shell-session
[!bash!]$ tail -2 /var/log/nginx/error.log

2020/11/17 16:11:56 [emerg] 5679#5679: bind() to 0.0.0.0:`80` failed (98: A`ddress already in use`)
2020/11/17 16:11:56 [emerg] 5679#5679: still could not bind()
```

``` shell-session
[!bash!]$ ss -lnpt | grep 80

LISTEN 0      100          0.0.0.0:80        0.0.0.0:*    users:(("python",pid=`2811`,fd=3),("python",pid=2070,fd=3),("python",pid=1968,fd=3),("python",pid=1856,fd=3))
```

``` shell-session
[!bash!]$ ps -ef | grep 2811

user65      2811    1856  0 16:05 ?        00:00:04 `python -m websockify 80 localhost:5901 -D`
root        6720    2226  0 16:14 pts/0    00:00:00 grep --color=auto 2811
```

#### Remove NginxDefault Configuration

``` shell-session
[!bash!]$ sudo rm /etc/nginx/sites-enabled/default
```

#### Upload File Using cURL

``` shell-session
[!bash!]$ curl -T /etc/passwd http://localhost:9001/SecretUploadDirectory/users.txt
```

``` shell-session
[!bash!]$ sudo tail -1 /var/www/uploads/SecretUploadDirectory/users.txt 

user65:x:1000:1000:,,,:/home/user65:/bin/bash
```

## Using Built-in Tools

####