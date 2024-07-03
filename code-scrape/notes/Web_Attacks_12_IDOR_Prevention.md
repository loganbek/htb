<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1202
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1202
// Section Title: IDOR Prevention
// Page Title: Web Attacks
// Page Number: 12
-->

# IDOR Prevention

**Module Name:** Web Attacks **Page Number:** 12

#### WEB ATTACKS

# IDOR Prevention

## Object-Level Access Control

``` javascript
match /api/profile/{userId} {
    allow read, write: if user.isAuth == true
    && (user.uid == userId || user.roles == 'admin');
}
```

## Object Referencing

``` php
$uid = intval($_REQUEST['uid']);
$query = "SELECT url FROM documents where uid=" . $uid;
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_array($result));
echo "<a href='" . $row['url'] . "' target='_blank'></a>";
```

####