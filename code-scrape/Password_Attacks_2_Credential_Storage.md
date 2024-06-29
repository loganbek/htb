<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/147/section/1313
// Platform Version: V1
// Module ID: 147
// Module Name: Password Attacks
// Module Difficulty: Medium
// Section ID: 1313
// Section Title: Credential Storage
// Page Title: Password Attacks
// Page Number: 2
-->

# Credential Storage

**Module Name:** Password Attacks **Page Number:** 2

#### PASSWORD ATTACKS

# Credential Storage

## Linux

#### Shadow File

``` shell-session
root@htb:~# cat /etc/shadow

...SNIP...
htb-student:$y$j9T$3QSBB6CbHEu...SNIP...f8Ms:18955:0:99999:7:::
```

#### Passwd File

``` shell-session
ndefstathiou@htb[/htb]$ cat /etc/passwd

...SNIP...
htb-student:x:1000:1000:,,,:/home/htb-student:/bin/bash
```

## Windows Authentication Process

#### Windows Authentication Process Diagram

![https://academy.hackthebox.com/storage/modules/147/Auth_process1.png](https://academy.hackthebox.com/storage/modules/147/Auth_process1.png)

#### LSASS

#### SAM Database

#### Credential Manager

![https://academy.hackthebox.com/storage/modules/147/authn_credman_credprov.png](https://academy.hackthebox.com/storage/modules/147/authn_credman_credprov.png)

``` powershell-session
PS C:\Users\[Username]\AppData\Local\Microsoft\[Vault/Credentials]\
```

#### NTDS

####