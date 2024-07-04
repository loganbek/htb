<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/167/section/1609
// Platform Version: V1
// Module ID: 167
// Module Name: Introduction to Windows Command Line
// Module Difficulty: Easy
// Section ID: 1609
// Section Title: System Navigation
// Page Title: Hack The Box - Academy
// Page Number: 04
-->

# System Navigation

**Module Name:** Introduction to Windows Command Line **Page Number:** 04

#### 

#### INTRODUCTION TO WINDOWS COMMAND LINE

# System Navigation

## Listing A Directory

``` cmd-session
C:\Users\htb\Desktop> dir
  
 Volume in drive C has no label.
 Volume Serial Number is DAE9-5896

 Directory of C:\Users\htb\Desktop

06/11/2021  11:59 PM    <DIR>          .
06/11/2021  11:59 PM    <DIR>          ..
06/11/2021  11:57 PM                 0 file1.txt
06/11/2021  11:57 PM                 0 file2.txt
06/11/2021  11:57 PM                 0 file3.txt
04/13/2021  11:24 AM             2,391 Microsoft Teams.lnk
06/11/2021  11:57 PM                 0 super-secret-sauce.txt
06/11/2021  11:59 PM                 0 write-secrets.ps1
               6 File(s)          2,391 bytes
               2 Dir(s)  35,102,117,888 bytes free
```

## Finding Our Place

``` cmd-session
C:\htb> cd 

C:\htb
```

## Moving Around Using CD/CHDIR

#### Current Working Directory

``` cmd-session
C:\htb> cd 

C:\htb
```

#### Absolute Path

``` cmd-session
C:\htb> cd C:\Users\htb\Pictures

C:\Users\htb\Pictures>
```

#### Relative Path

``` cmd-session
C:\htb> cd .\Pictures

C:\Users\htb\Pictures>
```

``` cmd-session
C:\Users\htb\Pictures>  cd ..\..\..\

C:\>
```

## Exploring the File System

#### Listing the Contents of the File System

``` cmd-session
C:\htb\student\> tree

Folder PATH listing
Volume serial number is 26E7-9EE4
C:.
├───3D Objects
├───Contacts
├───Desktop
├───Documents
├───Downloads
├───Favorites
│   └───Links
├───Links
├───Music
├───OneDrive
├───Pictures
│   ├───Camera Roll
│   └───Saved Pictures
├───Saved Games
├───Searches
└───Videos
    └───Captures
```

#### Tree /F

``` cmd-session
C:\htb\student\> tree /F

Folder PATH listing
Volume serial number is 26E7-9EE4
C:.
├───3D Objects
├───Contacts
├───Desktop
│       passwords.txt.txt
│       Project plans.txt
│       secrets.txt
│
├───Documents
├───Downloads
├───Favorites
│   │   Bing.URL
│   │
│   └───Links
├───Links
│       Desktop.lnk
│       Downloads.lnk
│
├───Music
├───OneDrive
├───Pictures
│   ├───Camera Roll
│   └───Saved Pictures
├───Saved Games
├───Searches
│       winrt--{S-1-5-21-1588464669-3682530959-1994202445-1000}-.searchconnector-ms
│
└───Videos
    └───Captures

    <SNIP>
```

## Interesting Directories

# 

# 

#### Questions

####