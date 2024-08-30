<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/74/section/701
// Platform Version: V1
// Module ID: 74
// Module Name: Introduction to Active Directory
// Module Difficulty: Fundamental
// Section ID: 701
// Section Title: Kerberos, DNS, LDAP, MSRPC
// Page Title: Introduction to Active Directory
// Page Number: 07
-->

# Kerberos, DNS, LDAP, MSRPC

**Module Name:** Introduction to Active Directory **Page Number:** 07

#### INTRODUCTION TO ACTIVE DIRECTORY

# Kerberos, DNS, LDAP, MSRPC

## Kerberos

#### Kerberos Authentication Process

![https://academy.hackthebox.com/storage/modules/74/Kerb_auth.png](https://academy.hackthebox.com/storage/modules/74/Kerb_auth.png)

## DNS

![https://academy.hackthebox.com/storage/modules/74/dns_highlevel.png](https://academy.hackthebox.com/storage/modules/74/dns_highlevel.png)

#### Forward DNS Lookup

``` powershell-session
PS C:\htb> nslookup INLANEFREIGHT.LOCAL

Server:  172.16.6.5
Address:  172.16.6.5

Name:    INLANEFREIGHT.LOCAL
Address:  172.16.6.5
```

#### Reverse DNS Lookup

``` powershell-session
PS C:\htb> nslookup 172.16.6.5

Server:  172.16.6.5
Address:  172.16.6.5

Name:    ACADEMY-EA-DC01.INLANEFREIGHT.LOCAL
Address:  172.16.6.5
```

#### Finding IP Address of a Host

``` powershell-session
PS C:\htb> nslookup ACADEMY-EA-DC01

Server:   172.16.6.5
Address:  172.16.6.5

Name:    ACADEMY-EA-DC01.INLANEFREIGHT.LOCAL
Address:  172.16.6.5
```

## LDAP

![https://academy.hackthebox.com/storage/modules/74/LDAP_auth.png](https://academy.hackthebox.com/storage/modules/74/LDAP_auth.png)

#### AD LDAP Authentication

## MSRPC

#### Questions

####