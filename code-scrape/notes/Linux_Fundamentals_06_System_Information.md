<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/70
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 70
// Section Title: System Information
// Page Title: Linux Fundamentals
// Page Number: 06
-->

# System Information

**Module Name:** Linux Fundamentals **Page Number:** 06

#### LINUX FUNDAMENTALS

# System Information

#### Hostname

``` shell-session
[!bash!]$ hostname

nixfund
```

#### Whoami

``` shell-session
cry0l1t3@htb[/htb]$ whoami

cry0l1t3
```

#### Id

``` shell-session
cry0l1t3@htb[/htb]$ id

uid=1000(cry0l1t3) gid=1000(cry0l1t3) groups=1000(cry0l1t3),1337(hackthebox),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),116(lpadmin),126(sambashare)
```

#### Uname

``` shell-session
UNAME(1)                                    User Commands                                   UNAME(1)

NAME
       uname - print system information

SYNOPSIS
       uname [OPTION]...

DESCRIPTION
       Print certain system information.  With no OPTION, same as -s.

       -a, --all
              print all information, in the following order, except omit -p and -i if unknown:

       -s, --kernel-name
              print the kernel name

       -n, --nodename
              print the network node hostname

       -r, --kernel-release
              print the kernel release

       -v, --kernel-version
              print the kernel version

       -m, --machine
              print the machine hardware name

       -p, --processor
              print the processor type (non-portable)

       -i, --hardware-platform
              print the hardware platform (non-portable)

       -o, --operating-system
```

``` shell-session
cry0l1t3@htb[/htb]$ uname -a

Linux box 4.15.0-99-generic #100-Ubuntu SMP Wed Apr 22 20:32:56 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

#### Uname to Obtain Kernel Release

``` shell-session
cry0l1t3@htb[/htb]$ uname -r

4.15.0-99-generic
```

## Logging In via SSH

#### SSH Login

``` shell-session
[!bash!]$ ssh [username]@[IP address]
```

# 

# 

#### Questions

####