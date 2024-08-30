<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/176/section/1783
// Platform Version: V1
// Module ID: 176
// Module Name: Windows Attacks & Defense
// Module Difficulty: Medium
// Section ID: 1783
// Section Title: Credentials in Object Properties
// Page Title: Hack The Box - Academy
// Page Number: 08
-->

# Credentials in Object Properties

**Module Name:** Windows Attacks & Defense **Page Number:** 08

#### 

#### WINDOWS ATTACKS & DEFENSE

# Credentials in Object Properties

## Description

## Attack

``` powershell
Function SearchUserClearTextInformation
{
    Param (
        [Parameter(Mandatory=$true)]
        [Array] $Terms,

        [Parameter(Mandatory=$false)]
        [String] $Domain
    )

    if ([string]::IsNullOrEmpty($Domain)) {
        $dc = (Get-ADDomain).RIDMaster
    } else {
        $dc = (Get-ADDomain $Domain).RIDMaster
    }

    $list = @()

    foreach ($t in $Terms)
    {
        $list += "(`$_.Description -like `"*$t*`")"
        $list += "(`$_.Info -like `"*$t*`")"
    }

    Get-ADUser -Filter * -Server $dc -Properties Enabled,Description,Info,PasswordNeverExpires,PasswordLastSet |
        Where { Invoke-Expression ($list -join ' -OR ') } | 
        Select SamAccountName,Enabled,Description,Info,PasswordNeverExpires,PasswordLastSet | 
        fl
}
```

``` powershell-session
PS C:\Users\bob\Downloads> SearchUserClearTextInformation -Terms "pass"

SamAccountName       : bonni
Enabled              : True
Description          : pass: Slavi123
Info                 : 
PasswordNeverExpires : True
PasswordLastSet      : 05/12/2022 15.18.05
```

![https://academy.hackthebox.com/storage/modules/176/A6/A6creds.png](https://academy.hackthebox.com/storage/modules/176/A6/A6creds.png)

## Prevention

## Detection

![https://academy.hackthebox.com/storage/modules/176/A6/Detect1.png](https://academy.hackthebox.com/storage/modules/176/A6/Detect1.png)

## Honeypot

![https://academy.hackthebox.com/storage/modules/176/A6/honeypot4dot3.png](https://academy.hackthebox.com/storage/modules/176/A6/honeypot4dot3.png)

![https://academy.hackthebox.com/storage/modules/176/A6/honeypot4.png](https://academy.hackthebox.com/storage/modules/176/A6/honeypot4.png)

![https://academy.hackthebox.com/storage/modules/176/A6/honeypot4dot2.png](https://academy.hackthebox.com/storage/modules/176/A6/honeypot4dot2.png)

# 

# 

#### Questions

####