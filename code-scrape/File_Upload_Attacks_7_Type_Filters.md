<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/136/section/1290
// Platform Version: V1
// Module ID: 136
// Module Name: File Upload Attacks
// Module Difficulty: Medium
// Section ID: 1290
// Section Title: Type Filters
// Page Title: Hack The Box - Academy
// Page Number: 7
-->

# Type Filters

**Module Name:** File Upload Attacks **Page Number:** 7

#### 

#### FILE UPLOAD ATTACKS

# Type Filters

## Content-Type

![https://academy.hackthebox.com/storage/modules/136/file_uploads_content_type_upload.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_content_type_upload.jpg)

``` php
$type = $_FILES['uploadFile']['type'];

if (!in_array($type, array('image/jpg', 'image/jpeg', 'image/png', 'image/gif'))) {
    echo "Only images are allowed";
    die();
}
```

``` shell-session
ndefstathiou@htb[/htb]$ wget https://raw.githubusercontent.com/danielmiessler/SecLists/master/Miscellaneous/web/content-type.txt
ndefstathiou@htb[/htb]$ cat content-type.txt | grep 'image/' > image-content-types.txt
```

![https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_content_type_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_content_type_request.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg)

## MIME-Type

``` shell-session
ndefstathiou@htb[/htb]$ echo "this is a text file" > text.jpg 
ndefstathiou@htb[/htb]$ file text.jpg 
text.jpg: ASCII text
```

``` shell-session
ndefstathiou@htb[/htb]$ echo "GIF8" > text.jpg 
ndefstathiou@htb[/htb]$file text.jpg
text.jpg: GIF image data
```

``` php
$type = mime_content_type($_FILES['uploadFile']['tmp_name']);

if (!in_array($type, array('image/jpg', 'image/jpeg', 'image/png', 'image/gif'))) {
    echo "Only images are allowed";
    die();
}
```

![https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_content_type_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_content_type_request.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_mime_type_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_mime_type_request.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_mime_type.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_bypass_mime_type.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell_gif.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell_gif.jpg)

# 

# 

#### Questions

####