<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1453
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1453
// Section Title: Open Redirect
// Page Title: Hack The Box - Academy
// Page Number: 12
-->

# Open Redirect

**Module Name:** Session Security **Page Number:** 12

#### 

#### SESSION SECURITY

# Open Redirect

``` php
$red = $_GET['url'];
header("Location: " . $red);
```

``` php
$red = $_GET['url'];
```

``` php
header("Location: " . $red);
```

## Open Redirect Example

![https://academy.hackthebox.com/storage/modules/153/72.png](https://academy.hackthebox.com/storage/modules/153/72.png)

``` shell-session
[!bash!]$ nc -lvnp 1337
```

![https://academy.hackthebox.com/storage/modules/153/71.png](https://academy.hackthebox.com/storage/modules/153/71.png)

# 

# 

#### Questions

####