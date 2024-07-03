<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/136/section/1289
// Platform Version: V1
// Module ID: 136
// Module Name: File Upload Attacks
// Module Difficulty: Medium
// Section ID: 1289
// Section Title: Whitelist Filters
// Page Title: Hack The Box - Academy
// Page Number: 6
-->

# Whitelist Filters

**Module Name:** File Upload Attacks **Page Number:** 6

#### 

#### FILE UPLOAD ATTACKS

# Whitelist Filters

## Whitelisting Extensions

![https://academy.hackthebox.com/storage/modules/136/file_uploads_whitelist_message.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_whitelist_message.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_whitelist_fuzz.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_whitelist_fuzz.jpg)

``` php
$fileName = basename($_FILES["uploadFile"]["name"]);

if (!preg_match('^.*\.(jpg|jpeg|png|gif)', $fileName)) {
    echo "Only images are allowed";
    die();
}
```

## Double Extensions

![https://academy.hackthebox.com/storage/modules/136/file_uploads_double_ext_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_double_ext_request.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg)

``` php
if (!preg_match('/^.*\.(jpg|jpeg|png|gif)$/', $fileName)) { ...SNIP... }
```

## Reverse Double Extension

``` xml
<FilesMatch ".+\.ph(ar|p|tml)">
    SetHandler application/x-httpd-php
</FilesMatch>
```

![https://academy.hackthebox.com/storage/modules/136/file_uploads_reverse_double_ext_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_reverse_double_ext_request.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg)

## Character Injection

``` bash
for char in '%20' '%0a' '%00' '%0d0a' '/' '.\\' '.' '…' ':'; do
    for ext in '.php' '.phps'; do
        echo "shell$char$ext.jpg" >> wordlist.txt
        echo "shell$ext$char.jpg" >> wordlist.txt
        echo "shell.jpg$char$ext" >> wordlist.txt
        echo "shell.jpg$ext$char" >> wordlist.txt
    done
done
```

# 

# 

#### Questions

####