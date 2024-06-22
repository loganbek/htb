<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/136/section/1309
// Platform Version: V1
// Module ID: 136
// Module Name: File Upload Attacks
// Module Difficulty: Medium
// Section ID: 1309
// Section Title: Preventing File Upload Vulnerabilities
// Page Title: File Upload Attacks
// Page Number: 10
-->

# Preventing File Upload Vulnerabilities

**Module Name:** File Upload Attacks **Page Number:** 10

#### FILE UPLOAD ATTACKS

# Preventing File Upload Vulnerabilities

## Extension Validation

``` php
$fileName = basename($_FILES["uploadFile"]["name"]);

// blacklist test
if (preg_match('/^.+\.ph(p|ps|ar|tml)/', $fileName)) {
    echo "Only images are allowed";
    die();
}

// whitelist test
if (!preg_match('/^.*\.(jpg|jpeg|png|gif)$/', $fileName)) {
    echo "Only images are allowed";
    die();
}
```

## Content Validation

``` php
$fileName = basename($_FILES["uploadFile"]["name"]);
$contentType = $_FILES['uploadFile']['type'];
$MIMEtype = mime_content_type($_FILES['uploadFile']['tmp_name']);

// whitelist test
if (!preg_match('/^.*\.png$/', $fileName)) {
    echo "Only PNG images are allowed";
    die();
}

// content test
foreach (array($contentType, $MIMEtype) as $type) {
    if (!in_array($type, array('image/png'))) {
        echo "Only PNG images are allowed";
        die();
    }
}
```

## Upload Disclosure

## Further Security

####