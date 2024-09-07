<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3134
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3134
// Section Title: Validating Findings
// Page Title: Hack The Box - Academy
// Page Number: 08
-->

# Validating Findings

**Module Name:** Web Fuzzing **Page Number:** 08

#### 

#### WEB FUZZING

# Validating Findings

## Why Validate?

## Manual Verification

## Example

### Using curl for validation

``` shell-session
lbek@htb[/htb]$ curl http://IP:PORT/backup/
```

``` html
<!DOCTYPE html>
<html>
<head>
<title>Index of /backup/</title>
<style type="text/css">
[...]
</style>
</head>
<body>
<h2>Index of /backup/</h2>
<div class="list">
<table summary="Directory Listing" cellpadding="0" cellspacing="0">
<thead><tr><th class="n">Name</th><th class="m">Last Modified</th><th class="s">Size</th><th class="t">Type</th></tr></thead>
<tbody>
<tr class="d"><td class="n"><a href="../">..</a>/</td><td class="m">&nbsp;</td><td class="s">- &nbsp;</td><td class="t">Directory</td></tr>
<tr><td class="n"><a href="backup.sql">backup.sql</a></td><td class="m">2024-Jun-12 14:00:46</td><td class="s">0.2K</td><td class="t">application/octet-stream</td></tr>
</tbody>
</table>
</div>
<div class="foot">lighttpd/1.4.76</div>

<script type="text/javascript">
[...]
</script>

</body>
</html>
```

``` shell-session
lbek@htb[/htb]$ curl -I http://IP:PORT/backup/password.txt

HTTP/1.1 200 OK
Content-Type: text/plain;charset=utf-8
ETag: "3406387762"
Last-Modified: Wed, 12 Jun 2024 14:08:46 GMT
Content-Length: 171
Accept-Ranges: bytes
Date: Wed, 12 Jun 2024 14:08:59 GMT
Server: lighttpd/1.4.76
```

# 

# 

#### Questions

####