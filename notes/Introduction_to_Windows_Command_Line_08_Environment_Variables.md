<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/167/section/1611
// Platform Version: V1
// Module ID: 167
// Module Name: Introduction to Windows Command Line
// Module Difficulty: Easy
// Section ID: 1611
// Section Title: Environment Variables
// Page Title: Hack The Box - Academy
// Page Number: 08
-->

# Environment Variables

**Module Name:** Introduction to Windows Command Line **Page Number:** 08

#### 

#### INTRODUCTION TO WINDOWS COMMAND LINE

# Environment Variables

## What an Environment Variable Is

``` cmd-session
%SUPER_IMPORTANT_VARIABLE%
```

#### Variable Scope

#### Showcasing Global Variables

#### Example 1:

``` cmd-session
C:\Users\alice> echo %WINDIR%

C:\Windows
```

#### Example 2:

``` cmd-session
C:\Users\bob> echo %WINDIR%

C:\Windows
```

#### Showcasing Local Variables

#### Example 1:

``` cmd-session
C:\Users\alice> set SECRET=HTB{5UP3r_53Cr37_V4r14813}

C:\Users\alice> echo %SECRET%
HTB{5UP3r_53Cr37_V4r14813}
```

#### Example 2:

``` cmd-session
C:\Users\bob> echo %SECRET%
%SECRET%

C:\Users\bob> set %SECRET%
Environment variable %SECRET% not defined
```

## Using Set and Echo to View Variables

#### Display with Set

``` cmd-session
C:\Users\htb\Desktop>set %SYSTEMROOT%

Environment variable C:\Windows not defined
```

#### Display with Echo

``` cmd-session
C:\Users\htb\>echo %PATH%

C:\Users\htb\Desktop
```

## Managing Environment Variables

#### When to Use set Vs. setx

#### Creating Variables

#### Using set

``` cmd-session
C:\htb> set DCIP=172.16.5.2
```

#### Validating the Change

``` cmd-session
C:\htb> echo %DCIP%

172.16.5.2
```

#### Using setx

``` cmd-session
C:\htb> setx DCIP 172.16.5.2

SUCCESS: Specified value was saved.
```

#### Editing Variables

#### Using setx

``` cmd-session
C:\htb> setx DCIP 172.16.5.5

SUCCESS: Specified value was saved.
```

#### Validating the edit

``` cmd-session
C:\htb> echo %DCIP%

172.16.5.5
```

#### Removing Variables

#### Using setx

``` cmd-session
C:\htb> setx DCIP ""


SUCCESS: Specified value was saved.
```

#### Verifying the Variable has Been Removed

``` cmd-session
C:\htb> set DCIP
Environment variable DCIP not defined

C:\htb> echo %DCIP%
%DCIP%
```

## Important Environment Variables

## Moving On

# 

# 

#### Questions

####