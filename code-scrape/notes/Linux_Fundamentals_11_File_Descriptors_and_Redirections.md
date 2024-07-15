<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/79
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 79
// Section Title: File Descriptors and Redirections
// Page Title: Hack The Box - Academy
// Page Number: 11
-->

# File Descriptors and Redirections

**Module Name:** Linux Fundamentals **Page Number:** 11

#### 

#### LINUX FUNDAMENTALS

# File Descriptors and Redirections

## File Descriptors

#### STDIN and STDOUT

![https://academy.hackthebox.com/storage/modules/18/find0.png](https://academy.hackthebox.com/storage/modules/18/find0.png)

#### STDOUT and STDERR

``` shell-session
ndefstathiou@htb[/htb]$ find /etc/ -name shadow
```

![https://academy.hackthebox.com/storage/modules/18/find1.png](https://academy.hackthebox.com/storage/modules/18/find1.png)

``` shell-session
ndefstathiou@htb[/htb]$ find /etc/ -name shadow 2>/dev/null
```

![https://academy.hackthebox.com/storage/modules/18/find2.png](https://academy.hackthebox.com/storage/modules/18/find2.png)

#### Redirect STDOUT to a File

``` shell-session
ndefstathiou@htb[/htb]$ find /etc/ -name shadow 2>/dev/null > results.txt
```

![https://academy.hackthebox.com/storage/modules/18/find3.png](https://academy.hackthebox.com/storage/modules/18/find3.png)

#### Redirect STDOUT and STDERR to Separate Files

``` shell-session
ndefstathiou@htb[/htb]$ find /etc/ -name shadow 2> stderr.txt 1> stdout.txt
```

![https://academy.hackthebox.com/storage/modules/18/find4.png](https://academy.hackthebox.com/storage/modules/18/find4.png)

#### Redirect STDIN

``` shell-session
ndefstathiou@htb[/htb]$ cat < stdout.txt
```

![https://academy.hackthebox.com/storage/modules/18/find5.png](https://academy.hackthebox.com/storage/modules/18/find5.png)

#### Redirect STDOUT and Append to a File

``` shell-session
ndefstathiou@htb[/htb]$ find /etc/ -name passwd >> stdout.txt 2>/dev/null
```

![https://academy.hackthebox.com/storage/modules/18/find9.png](https://academy.hackthebox.com/storage/modules/18/find9.png)

#### Redirect STDIN Stream to a File

``` shell-session
ndefstathiou@htb[/htb]$ cat << EOF > stream.txt
```

![https://academy.hackthebox.com/storage/modules/18/find6.png](https://academy.hackthebox.com/storage/modules/18/find6.png)

#### Pipes

``` shell-session
ndefstathiou@htb[/htb]$ find /etc/ -name *.conf 2>/dev/null | grep systemd
```

![https://academy.hackthebox.com/storage/modules/18/find7.png](https://academy.hackthebox.com/storage/modules/18/find7.png)

``` shell-session
ndefstathiou@htb[/htb]$ find /etc/ -name *.conf 2>/dev/null | grep systemd | wc -l
```

![https://academy.hackthebox.com/storage/modules/18/find8.png](https://academy.hackthebox.com/storage/modules/18/find8.png)

# 

# 

#### Questions

####