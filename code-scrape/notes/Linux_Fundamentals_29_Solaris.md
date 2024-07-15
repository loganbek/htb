<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/2101
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 2101
// Section Title: Solaris
// Page Title: Linux Fundamentals
// Page Number: 29
-->

# Solaris

**Module Name:** Linux Fundamentals **Page Number:** 29

#### LINUX FUNDAMENTALS

# Solaris

## Linux Distributions vs Solaris

## Differences

#### System Information

``` shell-session
[!bash!]$ uname -a

Linux ubuntu 5.4.0-1045 #48-Ubuntu SMP Fri Jan 15 10:47:29 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
```

``` shell-session
$ showrev -a

Hostname: solaris
Kernel architecture: sun4u
OS version: Solaris 10 8/07 s10s_u4wos_12b SPARC
Application architecture: sparc
Hardware provider: Sun_Microsystems
Domain: sun.com
Kernel version: SunOS 5.10 Generic_139555-08
```

#### Installing Packages

``` shell-session
[!bash!]$ sudo apt-get install apache2
```

``` shell-session
$ pkgadd -d SUNWapchr
```

#### Permission Management

``` shell-session
[!bash!]$ chmod 700 filename
```

``` shell-session
[!bash!]$ find / -perm 4000
```

``` shell-session
$ find / -perm -4000
```

#### NFS in Solaris

``` shell-session
$ share -F nfs -o rw /export/home
```

``` shell-session
[!bash!]$ mount -F nfs 10.129.15.122:/nfs_share /mnt/local
```

``` shell-session
# cat /etc/dfs/dfstab

share -F nfs -o rw /export/home
```

#### Process Mapping

``` shell-session
[!bash!]$ sudo lsof -c apache2
```

``` shell-session
$ pfiles `pgrep httpd`
```

#### Executable Access

``` shell-session
[!bash!]$ sudo strace -p `pgrep apache2`
```

``` shell-session
$ truss ls

execve("/usr/bin/ls", 0xFFBFFDC4, 0xFFBFFDC8)  argc = 1
...SNIP...
```

####