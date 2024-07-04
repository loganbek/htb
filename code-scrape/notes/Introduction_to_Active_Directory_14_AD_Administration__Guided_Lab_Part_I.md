<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/74/section/708
// Platform Version: V1
// Module ID: 74
// Module Name: Introduction to Active Directory
// Module Difficulty: Fundamental
// Section ID: 708
// Section Title: AD Administration: Guided Lab Part I
// Page Title: Introduction to Active Directory
// Page Number: 14
-->

# AD Administration: Guided Lab Part I

**Module Name:** Introduction to Active Directory **Page Number:** 14

#### INTRODUCTION TO ACTIVE DIRECTORY

# AD Administration: Guided Lab Part I

![https://academy.hackthebox.com/storage/modules/74/helping-out.png](https://academy.hackthebox.com/storage/modules/74/helping-out.png)

## Connection Instructions

## Tasks:

#### Task 1: Manage Users

#### Users to Add:

#### Users to Remove

![https://academy.hackthebox.com/storage/modules/74/troubleticket.png](https://academy.hackthebox.com/storage/modules/74/troubleticket.png)

#### PowerShell Terminal Output for Adding a User

``` powershell-session
PS C:\htb> New-ADUser -Name "Orion Starchaser" -Accountpassword (ConvertTo-SecureString -AsPlainText (Read-Host "Enter a secure password") -Force ) -Enabled $true -OtherAttributes @{'title'="Analyst";'mail'="o.starchaser@inlanefreight.local"}
```

#### Adding a User from the MMC Snap-in

#### Adding an AD User via the GUI

![https://academy.hackthebox.com/storage/modules/74/add-user1.png](https://academy.hackthebox.com/storage/modules/74/add-user1.png)

![https://academy.hackthebox.com/storage/modules/74/add-user2.png](https://academy.hackthebox.com/storage/modules/74/add-user2.png)

![https://academy.hackthebox.com/storage/modules/74/add-user3.png](https://academy.hackthebox.com/storage/modules/74/add-user3.png)

![https://academy.hackthebox.com/storage/modules/74/add-user4.png](https://academy.hackthebox.com/storage/modules/74/add-user4.png)

![https://academy.hackthebox.com/storage/modules/74/add-user5.png](https://academy.hackthebox.com/storage/modules/74/add-user5.png)

#### Add A User

#### PowerShell to Remove a User

``` powershell-session
PS C:\htb> Remove-ADUser -Identity pvalencia
```

#### Remove a User from the MMC Snap-in

#### Deleting a User via the GUI

![https://academy.hackthebox.com/storage/modules/74/del-user1.png](https://academy.hackthebox.com/storage/modules/74/del-user1.png)

![https://academy.hackthebox.com/storage/modules/74/del-user2.png](https://academy.hackthebox.com/storage/modules/74/del-user2.png)

![https://academy.hackthebox.com/storage/modules/74/del-user3.png](https://academy.hackthebox.com/storage/modules/74/del-user3.png)

![https://academy.hackthebox.com/storage/modules/74/del-user4.png](https://academy.hackthebox.com/storage/modules/74/del-user4.png)

#### PowerShell To Unlock a User

``` powershell-session
PS C:\htb> Unlock-ADAccount -Identity amasters
```

#### Reset User Password (Set-ADAccountPassword)

``` powershell-session
PS C:\htb> Set-ADAccountPassword -Identity 'amasters' -Reset -NewPassword (ConvertTo-SecureString -AsPlainText "NewP@ssw0rdReset!" -Force)
```

#### Force Password Change (Set-ADUser)

``` powershell-session
PS C:\htb> Set-ADUser -Identity amasters -ChangePasswordAtLogon $true
```

#### Unlock from Snap-in

#### Unlock Users Account From GUI

![https://academy.hackthebox.com/storage/modules/74/unlock-1.png](https://academy.hackthebox.com/storage/modules/74/unlock-1.png)

![https://academy.hackthebox.com/storage/modules/74/unlock-2.png](https://academy.hackthebox.com/storage/modules/74/unlock-2.png)

## Task 2: Manage Groups and Other Organizational Units

#### Create a New AD OU and Security Group from PowerShell

``` powershell-session
PS C:\htb> New-ADOrganizationalUnit -Name "Security Analysts" -Path "OU=IT,OU=HQ-NYC,OU=Employees,OU=CORP,DC=INLANEFREIGHT,DC=LOCAL"
```

``` powershell-session
PS C:\htb> New-ADGroup -Name "Security Analysts" -SamAccountName analysts -GroupCategory Security -GroupScope Global -DisplayName "Security Analysts" -Path "OU=Security Analysts,OU=IT,OU=HQ-NYC,OU=Employees,OU=Corp,DC=INLANEFREIGHT,DC=LOCAL" -Description "Members of this group are Security Analysts under the IT OU"
```

#### From MMC Snap-in

#### Create A New OU Under I.T.

![https://academy.hackthebox.com/storage/modules/74/new-ou1.png](https://academy.hackthebox.com/storage/modules/74/new-ou1.png)

![https://academy.hackthebox.com/storage/modules/74/new-ou2.png](https://academy.hackthebox.com/storage/modules/74/new-ou2.png)

#### Creating A Security Group

![https://academy.hackthebox.com/storage/modules/74/new-group1.png](https://academy.hackthebox.com/storage/modules/74/new-group1.png)

![https://academy.hackthebox.com/storage/modules/74/new-group2.png](https://academy.hackthebox.com/storage/modules/74/new-group2.png)

#### Add User to Group via PowerShell

``` powershell-session
PS C:\htb> Add-ADGroupMember -Identity analysts -Members ACepheus,OStarchaser,ACallisto
```

#### From MMC Snap-in

#### Add A User To A Security Group

![https://academy.hackthebox.com/storage/modules/74/user-group1.png](https://academy.hackthebox.com/storage/modules/74/user-group1.png)

![https://academy.hackthebox.com/storage/modules/74/user-group2.png](https://academy.hackthebox.com/storage/modules/74/user-group2.png)

![https://academy.hackthebox.com/storage/modules/74/user-group3.png](https://academy.hackthebox.com/storage/modules/74/user-group3.png)

## Task 3: Manage Group Policy Objects

#### Duplicate the Object via PowerShell

``` powershell-session
PS C:\htb> Copy-GPO -SourceName "Logon Banner" -TargetName "Security Analysts Control"
```

#### Link the New GPO to an OU

``` powershell-session
PS C:\htb> New-GPLink -Name "Security Analysts Control" -Target "ou=Security Analysts,ou=IT,OU=HQ-NYC,OU=Employees,OU=Corp,dc=INLANEFREIGHT,dc=LOCAL" -LinkEnabled Yes
```

#### Modify a GPO via GPMC

#### User Configuration Group Policies

![https://academy.hackthebox.com/storage/modules/74/edit-policy.png](https://academy.hackthebox.com/storage/modules/74/edit-policy.png)

![https://academy.hackthebox.com/storage/modules/74/storage-1.png](https://academy.hackthebox.com/storage/modules/74/storage-1.png)

![https://academy.hackthebox.com/storage/modules/74/storage-2.png](https://academy.hackthebox.com/storage/modules/74/storage-2.png)

![https://academy.hackthebox.com/storage/modules/74/storage-3.png](https://academy.hackthebox.com/storage/modules/74/storage-3.png)

![https://academy.hackthebox.com/storage/modules/74/storage-4.png](https://academy.hackthebox.com/storage/modules/74/storage-4.png)

![https://academy.hackthebox.com/storage/modules/74/cmd-1.png](https://academy.hackthebox.com/storage/modules/74/cmd-1.png)

![https://academy.hackthebox.com/storage/modules/74/cmd-2.png](https://academy.hackthebox.com/storage/modules/74/cmd-2.png)

![https://academy.hackthebox.com/storage/modules/74/cmd-3.png](https://academy.hackthebox.com/storage/modules/74/cmd-3.png)

![https://academy.hackthebox.com/storage/modules/74/cmd-4.png](https://academy.hackthebox.com/storage/modules/74/cmd-4.png)

#### Computer Configuration Group Policies

![https://academy.hackthebox.com/storage/modules/74/banner-1.png](https://academy.hackthebox.com/storage/modules/74/banner-1.png)

![https://academy.hackthebox.com/storage/modules/74/banner-2.png](https://academy.hackthebox.com/storage/modules/74/banner-2.png)

![https://academy.hackthebox.com/storage/modules/74/banner-3.png](https://academy.hackthebox.com/storage/modules/74/banner-3.png)

![https://academy.hackthebox.com/storage/modules/74/password-1.png](https://academy.hackthebox.com/storage/modules/74/password-1.png)

![https://academy.hackthebox.com/storage/modules/74/password-2.png](https://academy.hackthebox.com/storage/modules/74/password-2.png)

![https://academy.hackthebox.com/storage/modules/74/password-3.png](https://academy.hackthebox.com/storage/modules/74/password-3.png)

![https://academy.hackthebox.com/storage/modules/74/password-4.png](https://academy.hackthebox.com/storage/modules/74/password-4.png)

![https://academy.hackthebox.com/storage/modules/74/password-5.png](https://academy.hackthebox.com/storage/modules/74/password-5.png)

![https://academy.hackthebox.com/storage/modules/74/password-6.png](https://academy.hackthebox.com/storage/modules/74/password-6.png)

## Summary

# 

# 

#### Questions

####