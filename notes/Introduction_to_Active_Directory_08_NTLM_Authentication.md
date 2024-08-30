<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/74/section/1350
// Platform Version: V1
// Module ID: 74
// Module Name: Introduction to Active Directory
// Module Difficulty: Fundamental
// Section ID: 1350
// Section Title: NTLM Authentication
// Page Title: Introduction to Active Directory
// Page Number: 08
-->

# NTLM Authentication

**Module Name:** Introduction to Active Directory **Page Number:** 08

#### INTRODUCTION TO ACTIVE DIRECTORY

# NTLM Authentication

#### Hash Protocol Comparison

## LM

## NTHash (NTLM)

#### NTLM Authentication Request

![https://academy.hackthebox.com/storage/modules/74/ntlm_auth.png](https://academy.hackthebox.com/storage/modules/74/ntlm_auth.png)

``` shell-session
Rachel:500:aad3c435b514a4eeaad3b935b51304fe:e46b9e548fa0d122de7f59fb6d48eaa2:::
```

``` shell-session
[!bash!]$ crackmapexec smb 10.129.41.19 -u rachel -H e46b9e548fa0d122de7f59fb6d48eaa2

SMB         10.129.43.9     445    DC01      [*] Windows 10.0 Build 17763 (name:DC01) (domain:INLANEFREIGHT.LOCAL) (signing:True) (SMBv1:False)
SMB         10.129.43.9     445    DC01      [+] INLANEFREIGHT.LOCAL\rachel:e46b9e548fa0d122de7f59fb6d48eaa2 (Pwn3d!)
```

## NTLMv1 (Net-NTLMv1)

#### V1 Challenge & Response Algorithm

``` shell-session
C = 8-byte server challenge, random
K1 | K2 | K3 = LM/NT-hash | 5-bytes-0
response = DES(K1,C) | DES(K2,C) | DES(K3,C)
```

#### NTLMv1 Hash Example

``` shell-session
u4-netntlm::kNS:338d08f8e26de93300000000000000000000000000000000:9526fb8c23a90751cdd619b6cea564742e1e4bf33006ba41:cb8086049ec4736c
```

## NTLMv2 (Net-NTLMv2)

#### V2 Challenge & Response Algorithm

``` shell-session
SC = 8-byte server challenge, random
CC = 8-byte client challenge, random
CC* = (X, time, CC2, domain name)
v2-Hash = HMAC-MD5(NT-Hash, user name, domain name)
LMv2 = HMAC-MD5(v2-Hash, SC, CC)
NTv2 = HMAC-MD5(v2-Hash, SC, CC*)
response = LMv2 | CC | NTv2 | CC*
```

#### NTLMv2 Hash Example

``` shell-session
admin::N46iSNekpT:08ca45b7d7ea58ee:88dcbe4446168966a153a0064958dac6:5c7830315c7830310000000000000b45c67103d07d7b95acd12ffa11230e0000000052920b85f78d013c31cdb3b92f5d765c783030
```

## Domain Cached Credentials (MSCache2)

## Moving On

#### Questions

####