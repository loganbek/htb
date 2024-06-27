<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/80/section/780
// Platform Version: V1
// Module ID: 80
// Module Name: Broken Authentication
// Module Difficulty: Medium
// Section ID: 780
// Section Title: Authentication Bypass via Direct Access
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# Authentication Bypass via Direct Access

**Module Name:** Broken Authentication **Page Number:** 10

#### 

#### BROKEN AUTHENTICATION

# Authentication Bypass via Direct Access

## Direct Access

``` php
if(!$_SESSION['active']) {
	header("Location: index.php");
}
```

![https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_1.png](https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_1.png)

![https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_2_2.png](https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_2_2.png)

![https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_3.png](https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_3.png)

![https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_4.png](https://academy.hackthebox.com/storage/modules/269/bypass/bypass_directaccess_4.png)

``` php
if(!$_SESSION['active']) {
	header("Location: index.php");
	exit;
}
```

# 

# 

#### Questions

####