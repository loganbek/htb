<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/144/section/3074
// Platform Version: V1
// Module ID: 144
// Module Name: Information Gathering - Web Edition
// Module Difficulty: Easy
// Section ID: 3074
// Section Title: DNS
// Page Title: Information Gathering - Web Edition
// Page Number: 4
-->

# DNS

**Module Name:** Information Gathering - Web Edition **Page Number:** 4

#### INFORMATION GATHERING - WEB EDITION

# DNS

## How DNS Works

### The Hosts File

``` txt
<IP Address>    <Hostname> [<Alias> ...]
```

``` txt
127.0.0.1       localhost
192.168.1.10    devserver.local
```

``` txt
127.0.0.1       myapp.local
```

``` txt
192.168.1.20    testserver.local
```

``` txt
0.0.0.0       unwanted-site.com
```

### It's Like a Relay Race

### Key DNS Concepts

``` dns-zone
$TTL 3600 ; Default Time-To-Live (1 hour)
@       IN SOA   ns1.example.com. admin.example.com. (
                2024060401 ; Serial number (YYYYMMDDNN)
                3600       ; Refresh interval
                900        ; Retry interval
                604800     ; Expire time
                86400 )    ; Minimum TTL

@       IN NS    ns1.example.com.
@       IN NS    ns2.example.com.
@       IN MX 10 mail.example.com.
www     IN A     192.0.2.1
mail    IN A     198.51.100.1
ftp     IN CNAME www.example.com.
```

## Why DNS Matters for Web Recon

####