<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/2092
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 2092
// Section Title: Regular Expressions
// Page Title: Linux Fundamentals
// Page Number: 13
-->

# Regular Expressions

**Module Name:** Linux Fundamentals **Page Number:** 13

#### LINUX FUNDAMENTALS

# Regular Expressions

## Grouping

### Grouping Operators

#### OR operator

``` shell-session
cry0l1t3@htb:~$ grep -E "(my|false)" /etc/passwd

lxd:x:105:65534::/var/lib/lxd/:/bin/false
pollinate:x:109:1::/var/cache/pollinate:/bin/false
mysql:x:116:120:MySQL Server,,:/nonexistent:/bin/false
```

#### AND operator

``` shell-session
cry0l1t3@htb:~$ grep -E "(my.*false)" /etc/passwd

mysql:x:116:120:MySQL Server,,:/nonexistent:/bin/false
```

``` shell-session
cry0l1t3@htb:~$ grep -E "my" /etc/passwd | grep -E "false"

mysql:x:116:120:MySQL Server,,:/nonexistent:/bin/false
```

# 

# 

####