<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/74/section/704
// Platform Version: V1
// Module ID: 74
// Module Name: Introduction to Active Directory
// Module Difficulty: Fundamental
// Section ID: 704
// Section Title: User and Machine Accounts
// Page Title: Introduction to Active Directory
// Page Number: 09
-->

# User and Machine Accounts

**Module Name:** Introduction to Active Directory **Page Number:** 09

#### INTRODUCTION TO ACTIVE DIRECTORY

# User and Machine Accounts

![https://academy.hackthebox.com/storage/modules/74/all_users.png](https://academy.hackthebox.com/storage/modules/74/all_users.png)

## Local Accounts

## Domain Users

## User Naming Attributes

#### Common User Attributes

``` powershell-session
PS C:\htb Get-ADUser -Identity htb-student

DistinguishedName : CN=htb student,CN=Users,DC=INLANEFREIGHT,DC=LOCAL
Enabled           : True
GivenName         : htb
Name              : htb student
ObjectClass       : user
ObjectGUID        : aa799587-c641-4c23-a2f7-75850b4dd7e3
SamAccountName    : htb-student
SID               : S-1-5-21-3842939050-3880317879-2865463114-1111
Surname           : student
UserPrincipalName : htb-student@INLANEFREIGHT.LOCAL
```

## Domain-joined vs. Non-Domain-joined Machines

#### Domain joined

#### Non-domain joined

#### Questions

####