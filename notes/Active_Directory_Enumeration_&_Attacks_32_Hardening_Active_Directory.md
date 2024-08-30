<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/143/section/1277
// Platform Version: V1
// Module ID: 143
// Module Name: Active Directory Enumeration & Attacks
// Module Difficulty: Medium
// Section ID: 1277
// Section Title: Hardening Active Directory
// Page Title: Active Directory Enumeration & Attacks
// Page Number: 32
-->

# Hardening Active Directory

**Module Name:** Active Directory Enumeration & Attacks **Page Number:** 32

#### ACTIVE DIRECTORY ENUMERATION & ATTACKS

# Hardening Active Directory

## Step One: Document and Audit

#### Things To Document and Track

## People, Processes, and Technology

### People

### Protected Users Group

#### Viewing the Protected Users Group with Get-ADGroup

``` powershell-session
PS C:\Users\htb-student> Get-ADGroup -Identity "Protected Users" -Properties Name,Description,Members


Description       : Members of this group are afforded additional protections against authentication security threats.
                    See http://go.microsoft.com/fwlink/?LinkId=298939 for more information.
DistinguishedName : CN=Protected Users,CN=Users,DC=INLANEFREIGHT,DC=LOCAL
GroupCategory     : Security
GroupScope        : Global
Members           : {CN=sqlprod,OU=Service Accounts,OU=IT,OU=Employees,DC=INLANEFREIGHT,DC=LOCAL, CN=sqldev,OU=Service
                    Accounts,OU=IT,OU=Employees,DC=INLANEFREIGHT,DC=LOCAL}
Name              : Protected Users
ObjectClass       : group
ObjectGUID        : e4e19353-d08f-4790-95bc-c544a38cd534
SamAccountName    : Protected Users
SID               : S-1-5-21-2974783224-3764228556-2640795941-525
```

### Processes

### Technology

## Protections By Section

#### MITRE ATT&CK Breakdown

![https://academy.hackthebox.com/storage/modules/143/mitre.gif](https://academy.hackthebox.com/storage/modules/143/mitre.gif)

####