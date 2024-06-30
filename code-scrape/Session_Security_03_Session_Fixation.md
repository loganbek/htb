<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1444
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1444
// Section Title: Session Fixation
// Page Title: Session Security
// Page Number: 03
-->

# Session Fixation

**Module Name:** Session Security **Page Number:** 03

#### SESSION SECURITY

# Session Fixation

## Session Fixation Example

![https://academy.hackthebox.com/storage/modules/153/18.png](https://academy.hackthebox.com/storage/modules/153/18.png)

![https://academy.hackthebox.com/storage/modules/153/19.png](https://academy.hackthebox.com/storage/modules/153/19.png)

``` php
<?php
    if (!isset($_GET["token"])) {
        session_start();
        header("Location: /?redirect_uri=/complete.html&token=" . session_id());
    } else {
        setcookie("PHPSESSID", $_GET["token"]);
    }
?>
```

``` php
if (!isset($_GET["token"])) {
     session_start();
```

``` php
header("Location: /?redirect_uri=/complete.html&token=" . session_id());
```

``` php
} else {
        setcookie("PHPSESSID", $_GET["token"]);
    }
```

#### Questions

####