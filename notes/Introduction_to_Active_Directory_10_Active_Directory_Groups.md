<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/74/section/702
// Platform Version: V1
// Module ID: 74
// Module Name: Introduction to Active Directory
// Module Difficulty: Fundamental
// Section ID: 702
// Section Title: Active Directory Groups
// Page Title: Introduction to Active Directory
// Page Number: 10
-->

# Active Directory Groups

**Module Name:** Introduction to Active Directory **Page Number:** 10

#### INTRODUCTION TO ACTIVE DIRECTORY

# Active Directory Groups

## Types of Groups

#### Group Type And Scope

![https://academy.hackthebox.com/storage/modules/74/group-options2.png](https://academy.hackthebox.com/storage/modules/74/group-options2.png)

## Group Scopes

#### Domain Local Group

#### Global Group

#### Universal Group

#### AD Group Scope Examples

``` powershell-session
PS C:\htb> Get-ADGroup  -Filter * |select samaccountname,groupscope

samaccountname                           groupscope
--------------                           ----------
Administrators                          DomainLocal
Users                                   DomainLocal
Guests                                  DomainLocal
Print Operators                         DomainLocal
Backup Operators                        DomainLocal
Replicator                              DomainLocal
Remote Desktop Users                    DomainLocal
Network Configuration Operators         DomainLocal
Distributed COM Users                   DomainLocal
IIS_IUSRS                               DomainLocal
Cryptographic Operators                 DomainLocal
Event Log Readers                       DomainLocal
Certificate Service DCOM Access         DomainLocal
RDS Remote Access Servers               DomainLocal
RDS Endpoint Servers                    DomainLocal
RDS Management Servers                  DomainLocal
Hyper-V Administrators                  DomainLocal
Access Control Assistance Operators     DomainLocal
Remote Management Users                 DomainLocal
Storage Replica Administrators          DomainLocal
Domain Computers                             Global
Domain Controllers                           Global
Schema Admins                             Universal
Enterprise Admins                         Universal
Cert Publishers                         DomainLocal
Domain Admins                                Global
Domain Users                                 Global
Domain Guests                                Global

<SNIP>
```

## Built-in vs. Custom Groups

## Nested Group Membership

#### Examining Nested Groups via BloodHound

![https://academy.hackthebox.com/storage/modules/74/bh_nested_groups.png](https://academy.hackthebox.com/storage/modules/74/bh_nested_groups.png)

## Important Group Attributes

#### Questions

####