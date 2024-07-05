<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/147/section/1328
// Platform Version: V1
// Module ID: 147
// Module Name: Password Attacks
// Module Difficulty: Medium
// Section ID: 1328
// Section Title: Password Reuse / Default Passwords
// Page Title: Hack The Box - Academy
// Page Number: 06
-->

# Password Reuse / Default Passwords

**Module Name:** Password Attacks **Page Number:** 06

#### 

#### PASSWORD ATTACKS

# Password Reuse / Default Passwords

## Credential Stuffing

#### Credential Stuffing - Hydra Syntax

``` shell-session
[!bash!]$ hydra -C <user_pass.list> <protocol>://<IP>
```

#### Credential Stuffing - Hydra

``` shell-session
[!bash!]$ hydra -C user_pass.list ssh://10.129.42.197

...
```

#### Google Search - Default Credentials

![https://academy.hackthebox.com/storage/modules/147/Google-default-creds.png](https://academy.hackthebox.com/storage/modules/147/Google-default-creds.png)

# 

# 

#### Questions

####