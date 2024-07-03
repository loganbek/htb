<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/136/section/1288
// Platform Version: V1
// Module ID: 136
// Module Name: File Upload Attacks
// Module Difficulty: Medium
// Section ID: 1288
// Section Title: Blacklist Filters
// Page Title: Hack The Box - Academy
// Page Number: 5
-->

# Blacklist Filters

**Module Name:** File Upload Attacks **Page Number:** 5

#### 

#### FILE UPLOAD ATTACKS

# Blacklist Filters

## Blacklisting Extensions

![https://academy.hackthebox.com/storage/modules/136/file_uploads_disallowed_type.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_disallowed_type.jpg)

``` php
$fileName = basename($_FILES["uploadFile"]["name"]);
$extension = pathinfo($fileName, PATHINFO_EXTENSION);
$blacklist = array('php', 'php7', 'phps');

if (in_array($extension, $blacklist)) {
    echo "File type not allowed";
    die();
}
```

## Fuzzing Extensions

![https://academy.hackthebox.com/storage/modules/136/file_uploads_burp_fuzz_extension.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_burp_fuzz_extension.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_burp_intruder_result.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_burp_intruder_result.jpg)

## Non-Blacklisted Extensions

![https://academy.hackthebox.com/storage/modules/136/file_uploads_php5_web_shell.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_php5_web_shell.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg)

# 

# 

#### Questions

####