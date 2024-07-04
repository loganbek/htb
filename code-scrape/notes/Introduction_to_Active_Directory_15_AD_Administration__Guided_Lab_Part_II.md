<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/74/section/1393
// Platform Version: V1
// Module ID: 74
// Module Name: Introduction to Active Directory
// Module Difficulty: Fundamental
// Section ID: 1393
// Section Title: AD Administration: Guided Lab Part II
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# AD Administration: Guided Lab Part II

**Module Name:** Introduction to Active Directory **Page Number:** 15

#### 

#### INTRODUCTION TO ACTIVE DIRECTORY

# AD Administration: Guided Lab Part II

## Connection Instructions

## Task 4 Add and Remove Computers To The Domain

#### PowerShell Join a Domain

``` powershell-session
PS C:\htb> Add-Computer -DomainName INLANEFREIGHT.LOCAL -Credential INLANEFREIGHT\HTB-student_adm -Restart
```

#### Add via the GUI

## Add A Computer To The Domain

![https://academy.hackthebox.com/storage/modules/74/join-domain1.png](https://academy.hackthebox.com/storage/modules/74/join-domain1.png)

![https://academy.hackthebox.com/storage/modules/74/join-domain2.png](https://academy.hackthebox.com/storage/modules/74/join-domain2.png)

![https://academy.hackthebox.com/storage/modules/74/join-domain3.png](https://academy.hackthebox.com/storage/modules/74/join-domain3.png)

![https://academy.hackthebox.com/storage/modules/74/join-domain4.png](https://academy.hackthebox.com/storage/modules/74/join-domain4.png)

![https://academy.hackthebox.com/storage/modules/74/join-domain5.png](https://academy.hackthebox.com/storage/modules/74/join-domain5.png)

#### Add a Remote Computer to a Domain

``` powershell-session
PS C:\htb> Add-Computer -ComputerName ACADEMY-IAD-W10 -LocalCredential ACADEMY-IAD-W10\image -DomainName INLANEFREIGHT.LOCAL -Credential INLANEFREIGHT\htb-student_adm -Restart
```

#### Check OU Membership of a Host

``` powershell-session
PS C:\htb> Get-ADComputer -Identity "ACADEMY-IAD-W10" -Properties * | select CN,CanonicalName,IPv4Address
```

#### Add to a New OU

## Move A Computer Object To A New OU

![https://academy.hackthebox.com/storage/modules/74/moveou1.png](https://academy.hackthebox.com/storage/modules/74/moveou1.png)

![https://academy.hackthebox.com/storage/modules/74/moveou2.png](https://academy.hackthebox.com/storage/modules/74/moveou2.png)

![https://academy.hackthebox.com/storage/modules/74/moveou3.png](https://academy.hackthebox.com/storage/modules/74/moveou3.png)

![https://academy.hackthebox.com/storage/modules/74/moveou4.png](https://academy.hackthebox.com/storage/modules/74/moveou4.png)

## Summary

# 

# 

#### Questions

####