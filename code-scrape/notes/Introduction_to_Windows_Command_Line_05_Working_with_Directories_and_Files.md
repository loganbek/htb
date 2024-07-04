<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/167/section/1610
// Platform Version: V1
// Module ID: 167
// Module Name: Introduction to Windows Command Line
// Module Difficulty: Easy
// Section ID: 1610
// Section Title: Working with Directories and Files
// Page Title: Hack The Box - Academy
// Page Number: 05
-->

# Working with Directories and Files

**Module Name:** Introduction to Windows Command Line **Page Number:** 05

#### 

#### INTRODUCTION TO WINDOWS COMMAND LINE

# Working with Directories and Files

## Directories

### Viewing & Listing Directories

![https://academy.hackthebox.com/storage/modules/167/three-cmd.png](https://academy.hackthebox.com/storage/modules/167/three-cmd.png)

### Create A New Directory

#### Using MD

``` cmd-session
C:\Users\htb\Desktop> dir

 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop

06/15/2021  09:28 PM    <DIR>          .
06/15/2021  09:28 PM    <DIR>          ..
06/14/2021  10:37 PM                19 file.txt
06/15/2021  09:32 PM    <DIR>          Git-Pulls
06/14/2021  10:59 PM                26 normal-file.txt
06/15/2021  09:29 PM    <DIR>          Notes
06/14/2021  10:28 PM                97 passwords.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
06/15/2021  09:29 PM    <DIR>          Work-Policies
               5 File(s)            353 bytes
               5 Dir(s)  38,644,342,784 bytes free

C:\Users\htb\Desktop>md new-directory

C:\Users\htb\Desktop>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop

06/15/2021  10:26 PM    <DIR>          .
06/15/2021  10:26 PM    <DIR>          ..
06/14/2021  10:37 PM                19 file.txt
06/15/2021  09:32 PM    <DIR>          Git-Pulls
06/15/2021  10:26 PM    <DIR>          new-directory
06/14/2021  10:59 PM                26 normal-file.txt
06/15/2021  09:29 PM    <DIR>          Notes
06/14/2021  10:28 PM                97 passwords.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
06/15/2021  09:29 PM    <DIR>          Work-Policies
               5 File(s)            353 bytes
               6 Dir(s)  38,644,277,248 bytes free
```

#### Using mkdir to Create Directories.

``` cmd-session
C:\Users\htb\Desktop> mkdir yet-another-dir

C:\Users\htb\Desktop>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop

06/15/2021  10:28 PM    <DIR>          .
06/15/2021  10:28 PM    <DIR>          ..
06/14/2021  10:37 PM                19 file.txt
06/15/2021  09:32 PM    <DIR>          Git-Pulls
06/15/2021  10:26 PM    <DIR>          new-directory
06/14/2021  10:59 PM                26 normal-file.txt
06/15/2021  09:29 PM    <DIR>          Notes
06/14/2021  10:28 PM                97 passwords.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
06/15/2021  09:29 PM    <DIR>          Work-Policies
06/15/2021  10:28 PM    <DIR>          yet-another-dir
               5 File(s)            353 bytes
               7 Dir(s)  38,644,056,064 bytes free
```

### Delete Directories

#### RD & RMDIR

``` cmd-session
C:\Users\htb\Desktop> dir

 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop

06/15/2021  10:28 PM    <DIR>          .
06/15/2021  10:28 PM    <DIR>          ..
06/14/2021  10:37 PM                19 file.txt
06/15/2021  09:32 PM    <DIR>          Git-Pulls
06/15/2021  10:26 PM    <DIR>          new-directory
06/14/2021  10:59 PM                26 normal-file.txt
06/15/2021  09:29 PM    <DIR>          Notes
06/14/2021  10:28 PM                97 passwords.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
06/15/2021  09:29 PM    <DIR>          Work-Policies
06/15/2021  10:28 PM    <DIR>          yet-another-dir
               5 File(s)            353 bytes
               7 Dir(s)  38,634,733,568 bytes free

C:\Users\htb\Desktop> rd Git-Pulls
The directory is not empty.
```

#### RD /S

``` cmd-session
C:\Users\htb\Desktop> rd /S Git-Pulls
Git-Pulls, Are you sure (Y/N)? Y

C:\Users\htb\Desktop>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop

06/16/2021  01:32 PM    <DIR>          .
06/16/2021  01:32 PM    <DIR>          ..
06/14/2021  10:37 PM                19 file.txt
06/15/2021  10:26 PM    <DIR>          new-directory
06/14/2021  10:59 PM                26 normal-file.txt
06/15/2021  09:29 PM    <DIR>          Notes
06/14/2021  10:28 PM                97 passwords.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
06/15/2021  09:29 PM    <DIR>          Work-Policies
06/15/2021  10:28 PM    <DIR>          yet-another-dir
               5 File(s)            353 bytes
               6 Dir(s)  38,634,733,568 bytes free
```

### Modifying

#### Move a Directory

``` cmd-session
C:\Users\htb\Desktop> tree example /F

Folder PATH listing
Volume serial number is 00000032 DAE9:5896
C:\USERS\HTB\DESKTOP\EXAMPLE
│   file-1 - Copy.txt
│   file-1.txt
│   file-2.txt
│   file-3.txt
│   file-5.txt
│   file-4.txt
│
└───more stuff

C:\Users\htb\Desktop> move example C:\Users\htb\Documents\example

        1 dir(s) moved.
```

#### Validate the Move

``` cmd-session
C:\Users\htb\Desktop> dir C:\Users\htb\Documents

Volume in drive C has no label.
 Volume Serial Number is DAE9-5896

 Directory of C:\Users\htb\Documents

06/17/2021  03:14 PM    <DIR>          .
06/17/2021  03:14 PM    <DIR>          ..
06/17/2021  02:23 PM    <DIR>          example
06/17/2021  02:01 PM    <DIR>          test
04/13/2021  12:21 PM    <DIR>          WindowsPowerShell
04/22/2021  01:11 PM           933,003 Wireshark-lab-2.pcap
               1 File(s)        933,003 bytes
               5 Dir(s)  36,644,110,336 bytes free
```

#### Using Xcopy

``` cmd-session
C:\Users\htb\Desktop> xcopy C:\Users\htb\Documents\example C:\Users\htb\Desktop\ /E

C:\Users\htb\Documents\example\file-1 - Copy.txt
C:\Users\htb\Documents\example\file-1.txt
C:\Users\htb\Documents\example\file-2.txt
C:\Users\htb\Documents\example\file-3.txt
C:\Users\htb\Documents\example\file-5.txt
C:\Users\htb\Documents\example\file-4.txt
6 File(s) copied
```

#### Robocopy Basic

``` cmd-session
C:\Users\htb\Desktop> robocopy C:\Users\htb\Desktop C:\Users\htb\Documents\

robocopy C:\Users\htb\Desktop C:\Users\htb\Documents

-------------------------------------------------------------------------------
   ROBOCOPY     ::     Robust File Copy for Windows
-------------------------------------------------------------------------------

  Started : Monday, June 21, 2021 11:05:46 AM
   Source : C:\Users\htb\Desktop\
     Dest : C:\Users\htb\Documents\

    Files : *.*

  Options : *.* /DCOPY:DA /COPY:DAT /R:1000000 /W:30

------------------------------------------------------------------------------

                           7    C:\Users\htb\Desktop\
        *EXTRA Dir        -1    C:\Users\htb\Documents\My Music\
        *EXTRA Dir        -1    C:\Users\htb\Documents\My Pictures\
        *EXTRA Dir        -1    C:\Users\htb\Documents\My Videos\
100%        Older                    282        desktop.ini
100%        New File                  19        file.txt
100%        New File                  26        normal-file.txt
100%        New File                  97        passwords.txt
100%        New File                  97        Project plans.txt
100%        New File                 114        secrets.txt
100%        New File               38380        Windows Startup.wav

------------------------------------------------------------------------------

               Total    Copied   Skipped  Mismatch    FAILED    Extras
    Dirs :         1         0         1         0         0         3
   Files :         7         7         0         0         0         0
   Bytes :    38.1 k    38.1 k         0         0         0         0
   Times :   0:00:00   0:00:00                       0:00:00   0:00:00


   Speed :              619285 Bytes/sec.
   Speed :              35.435 MegaBytes/min.
   Ended : Monday, June 21, 2021 11:05:46 AM


C:\Users\htb\Desktop>dir C:\Users\htb\Documents
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Documents

06/21/2021  11:05 AM    <DIR>          .
06/21/2021  11:05 AM    <DIR>          ..
06/14/2021  10:37 PM                19 file.txt
06/14/2021  10:59 PM                26 normal-file.txt
06/14/2021  10:28 PM                97 passwords.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
12/07/2019  05:08 AM            38,380 Windows Startup.wav
               6 File(s)         38,733 bytes
               2 Dir(s)  38,285,684,736 bytes free
```

#### Robocopy Backup Mode Fail

``` cmd-session
C:\Users\htb\Desktop> robocopy /E /B /L C:\Users\htb\Desktop\example C:\Users\htb\Documents\Backup\

-------------------------------------------------------------------------------
   ROBOCOPY     ::     Robust File Copy for Windows                    
-------------------------------------------------------------------------------

  Started : Monday, June 21, 2021 10:03:56 PM
   Source : C:\Users\htb\Desktop\example\
     Dest : C:\Users\htb\Documents\Backup\

    Files : *.*

  Options : *.* /L /S /E /DCOPY:DA /COPY:DAT /B /R:1000000 /W:30

------------------------------------------------------------------------------

ERROR : You do not have the Backup and Restore Files user rights.
*****  You need these to perform Backup copies (/B or /ZB).

ERROR : Robocopy ran out of memory, exiting.
ERROR : Invalid Parameter #%d : "%s"

ERROR : Invalid Job File, Line #%d :"%s"


  Started : %s %s

   Source %c

     Dest %c
       Simple Usage :: ROBOCOPY source destination /MIR

             source :: Source Directory (drive:\path or \\server\share\path).
        destination :: Destination Dir  (drive:\path or \\server\share\path).
               /MIR :: Mirror a complete directory tree.

    For more usage information run ROBOCOPY /?


****  /MIR can DELETE files as well as copy them !
```

#### Robocopy /MIR

``` cmd-session
C:\Users\htb\Desktop> robocopy /E /MIR /A-:SH C:\Users\htb\Desktop\notes\ C:\Users\htb\Documents\Backup\Files-to-exfil\

-------------------------------------------------------------------------------
   ROBOCOPY     ::     Robust File Copy for Windows                    
-------------------------------------------------------------------------------

  Started : Monday, June 21, 2021 10:45:46 PM
   Source : C:\Users\htb\Desktop\notes\
     Dest : C:\Users\htb\Documents\Backup\Files-to-exfil\

    Files : *.*

  Options : *.* /S /E /DCOPY:DA /COPY:DAT /PURGE /MIR /A-:SH /R:1000000 /W:30

------------------------------------------------------------------------------

                           2    C:\Users\htb\Desktop\notes\
100%        New File                  16        python-notes
100%        New File                  13        vscode

------------------------------------------------------------------------------

               Total    Copied   Skipped  Mismatch    FAILED    Extras
    Dirs :         1         0         1         0         0         0
   Files :         2         2         0         0         0         0
   Bytes :        29        29         0         0         0         0
   Times :   0:00:00   0:00:00                       0:00:00   0:00:00
   Ended : Monday, June 21, 2021 10:45:46 PM


C:\Users\htb\Documents\Backup\Files-to-exfil>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Documents\Backup\Files-to-exfil

06/21/2021  10:45 PM    <DIR>          .
06/21/2021  10:45 PM    <DIR>          ..
06/15/2021  09:29 PM                16 python-notes
06/15/2021  09:28 PM                13 vscode
               2 File(s)             29 bytes
               2 Dir(s)  38,285,676,544 bytes free
```

## Files

### List Files & View Their Contents

#### More

``` cmd-session
C:\Users\htb\Documents\Backup> more secrets.txt

The TVA has several copies of the Infinity Stones..


Bucky is a good guy. TWS is a Bo$$


The sky isn't blue..


-- More (6%) --
```

#### More /S

``` cmd-session
C:\Users\htb\Documents\Backup> more /S secrets.txt

The TVA has several copies of the Infinity Stones..

Bucky is a good guy. TWS is a Bo$$

The sky isn't blue..

Windows IP Configuration

   Host Name . . . . . . . . . . . . : DESKTOP-LSM3BSF
   Primary Dns Suffix  . . . . . . . :
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No
   DNS Suffix Search List. . . . . . : lan

Ethernet adapter Ethernet0:

   Connection-specific DNS Suffix  . : lan
   Description . . . . . . . . . . . : Intel(R) 82574L Gigabit Network Connection
   Physical Address. . . . . . . . . : 00-0C-29-D7-67-BF
-- More (27%) --
```

#### Sending a Command Output to More

``` cmd-session
C:\Users\htb\> ipconfig /all | more

Windows IP Configuration

   Host Name . . . . . . . . . . . . : DESKTOP-LSM3BSF
   Primary Dns Suffix  . . . . . . . :
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No
   DNS Suffix Search List. . . . . . : lan

Ethernet adapter Ethernet0:

   Connection-specific DNS Suffix  . : lan
   Description . . . . . . . . . . . : Intel(R) 82574L Gigabit Network Connection
   Physical Address. . . . . . . . . : 00-0C-29-D7-67-BF
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes
   Link-local IPv6 Address . . . . . : fe80::59fe:9ed2:fea6:1371%5(Preferred)
   IPv4 Address. . . . . . . . . . . : 172.16.146.5(Preferred)
-- More  --
```

#### Type

``` cmd-session
C:\Users\htb\Desktop>type bio.txt

James Buchanan "Bucky" Barnes Jr. is a fictional character appearing in American comic books published by Marvel Comics. Originally introduced as a sidekick to Captain America, the character was created by Joe Simon and Jack Kirby and first appeared in Captain America Comics #1 (cover-dated March 1941) (which was published by Marvel's predecessor, Timely Comics). Barnes' original costume (or one based on it) and the Bucky nickname have been used by other superheroes in the Marvel Universe over the years.[1] The character is brought back from supposed death as the brainwashed assassin cyborg called Winter Soldier (Russian: ╨ù╨╕╨╝╨╜╨╕╨╣ ╨í╨╛╨╗╨┤╨░╤é, translit. Zimniy Sold├ít). The character's memories and personality are later restored, leading him to become a dark hero in search of redemption. He temporarily assumes the role of "Captain America" when Steve Rogers was presumed to be dead. During the 2011 crossover Fear Itself, Barnes is injected with the Infinity Formula, which increases his natural vitality and physical traits in a way that is similar to (but less powerful than) the super-soldier serum used on Captain America.[2]
```

### Redirect With Type

``` cmd-session
C:\Users\htb\Desktop>type passwords.txt >> secrets.txt

C:\Users\htb\Desktop>type secrets.txt

The TVA has several copies of the Infinity Stones..
Bucky is a good guy. TWS is a Bo$$
The sky isn't blue..
" so many passwords in the file.. "
Password P@ssw0rd Super$ecr3t Admin @dmin123 Summer2021!
```

### Create And Modify A File

#### Echo to Create and Append Files

``` cmd-session
C:\Users\htb\Desktop>echo Check out this text > demo.txt

C:\Users\htb\Desktop>type demo.txt
Check out this text

C:\Users\htb\Desktop>echo More text for our demo file >> demo.txt

C:\Users\htb\Desktop>type demo.txt
Check out this text
More text for our demo file
```

#### Fsutil to Create a file

``` cmd-session
C:\Users\htb\Desktop>fsutil file createNew for-sure.txt 222
File C:\Users\htb\Desktop\for-sure.txt is created

C:\Users\htb\Desktop>echo " my super cool text file from fsutil "> for-sure.txt

C:\Users\htb\Desktop>type for-sure.txt
" my super cool text file from fsutil "
```

#### Ren(ame) A file

``` cmd-session
C:\Users\htb\Desktop> ren demo.txt superdemo.txt

C:\Users\htb\Desktop>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop

06/22/2021  04:25 PM    <DIR>          .
06/22/2021  04:25 PM    <DIR>          ..
06/22/2021  03:21 PM             1,140 bio.txt
06/16/2021  02:36 PM    <DIR>          example
06/14/2021  10:37 PM                19 file.txt
06/22/2021  04:12 PM                41 for-sure.txt
06/22/2021  03:59 PM                12 maybe.txt
06/15/2021  10:26 PM    <DIR>          new-directory
06/22/2021  03:48 PM                 9 nono.txt
06/14/2021  10:59 PM                26 normal-file.txt
06/15/2021  09:29 PM    <DIR>          Notes
06/14/2021  10:28 PM                97 passwords.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/22/2021  03:24 PM               211 secrets.txt
06/22/2021  04:14 PM                52 superdemo.txt
06/22/2021  03:18 PM             2,534 type.txt
06/21/2021  11:33 AM                 0 why-tho.txt
12/07/2019  05:08 AM            38,380 Windows Startup.wav
06/15/2021  09:29 PM    <DIR>          Work-Policies
06/15/2021  10:28 PM    <DIR>          yet-another-dir
              13 File(s)         42,618 bytes
               7 Dir(s)  39,091,531,776 bytes free
```

### Input / Output

#### Output To A File

``` cmd-session
C:\Users\htb\Documents>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Documents

06/23/2021  02:44 PM    <DIR>          .
06/23/2021  02:44 PM    <DIR>          ..
06/21/2021  10:38 PM    <DIR>          Backup
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
               2 File(s)            211 bytes
               3 Dir(s)  39,028,850,688 bytes free

C:\Users\htb\Documents>ipconfig /all > details.txt

C:\Users\htb\Documents>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Documents

06/23/2021  02:44 PM    <DIR>          .
06/23/2021  02:44 PM    <DIR>          ..
06/21/2021  10:38 PM    <DIR>          Backup
06/23/2021  02:44 PM             1,813 details.txt
06/14/2021  10:34 PM                97 Project plans.txt
06/14/2021  08:38 PM               114 secrets.txt
               3 File(s)          2,024 bytes
               3 Dir(s)  39,028,760,576 bytes free

C:\Users\htb\Documents>type details.txt

Windows IP Configuration

   Host Name . . . . . . . . . . . . : DESKTOP-LSM3BSF
   Primary Dns Suffix  . . . . . . . :
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No
   DNS Suffix Search List. . . . . . : greenhorn.corp

Ethernet adapter Ethernet0:

   Connection-specific DNS Suffix  . : greenhorn.corp
   Description . . . . . . . . . . . : Intel(R) 82574L Gigabit Network Connection
   Physical Address. . . . . . . . . : 00-0C-29-D7-67-BF
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes
   Link-local IPv6 Address . . . . . : fe80::59fe:9ed2:fea6:1371%8(Preferred)
   IPv4 Address. . . . . . . . . . . : 172.16.146.5(Preferred)
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Lease Obtained. . . . . . . . . . : Wednesday, June 23, 2021 2:42:19 PM
   Lease Expires . . . . . . . . . . : Thursday, June 24, 2021 2:27:59 PM
   Default Gateway . . . . . . . . . : 172.16.146.1
```

#### Append to a File

``` cmd-session
C:\Users\htb\Documents> echo a b c d e > test.txt

C:\Users\htb\Documents>type test.txt
a b c d e

C:\Users\htb\Documents>echo f g h i j k see how this works now? >> test.txt

C:\Users\htb\Documents>type test.txt
a b c d e
f g h i j k see how this works now?
```

#### Pass in a Text File to a Command

``` cmd-session
C:\Users\htb\Documents>find /i "see" < test.txt

f g h i j k see how this works now?
```

#### Pipe Output Between Commands

``` cmd-session
C:\Users\htb\Documents>ipconfig /all | find /i "IPV4"

   IPv4 Address. . . . . . . . . . . : 172.16.146.5(Preferred)
```

#### Run A Then B

``` cmd-session
C:\Users\htb\Documents>ping 8.8.8.8 & type test.txt

Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=22ms TTL=114
Reply from 8.8.8.8: bytes=32 time=19ms TTL=114
Reply from 8.8.8.8: bytes=32 time=17ms TTL=114
Reply from 8.8.8.8: bytes=32 time=16ms TTL=114

Ping statistics for 8.8.8.8:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 16ms, Maximum = 22ms, Average = 18ms
a b c d e
f g h i j k see how this works now?
```

#### State Dependent &&

``` cmd-session
C:\Users\student\Documents>cd C:\Users\student\Documents\Backup && echo 'did this work' > yes.txt

C:\Users\student\Documents\Backup>type yes.txt
'did this work'
```

### Deleting Files

#### Dynamic Del And Erase

``` cmd-session
C:\Users\htb\Desktop\example> dir

 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:00 PM    <DIR>          .
06/16/2021  02:00 PM    <DIR>          ..
06/16/2021  02:00 PM                 5 file-1
06/16/2021  02:00 PM                 5 file-2
06/16/2021  02:00 PM                 5 file-3
06/16/2021  02:00 PM                 5 file-4
06/16/2021  02:00 PM                 5 file-5
06/16/2021  02:00 PM                 5 file-6
06/16/2021  02:00 PM                 5 file-66
               7 File(s)             35 bytes
               2 Dir(s)  38,633,730,048 bytes free

C:\Users\htb\Desktop\example>del file-1

C:\Users\htb\Desktop\example>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:03 PM    <DIR>          .
06/16/2021  02:03 PM    <DIR>          ..
06/16/2021  02:00 PM                 5 file-2
06/16/2021  02:00 PM                 5 file-3
06/16/2021  02:00 PM                 5 file-4
06/16/2021  02:00 PM                 5 file-5
06/16/2021  02:00 PM                 5 file-6
06/16/2021  02:00 PM                 5 file-66
               6 File(s)             30 bytes
               2 Dir(s)  38,633,730,048 bytes free
```

#### Using Del And Erase to remove a list of files

``` cmd-session
C:\Users\htb\Desktop\example> erase file-3 file-5

dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:06 PM    <DIR>          .
06/16/2021  02:06 PM    <DIR>          ..
06/16/2021  02:00 PM                 5 file-2
06/16/2021  02:00 PM                 5 file-4
06/16/2021  02:00 PM                 5 file-6
06/16/2021  02:00 PM                 5 file-66
               4 File(s)             20 bytes
               2 Dir(s)  38,633,218,048 bytes free
```

### Del Help Documentation

``` cmd-session
C:\Users\htb\Desktop\example> help del

Deletes one or more files.

DEL [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names
ERASE [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names

  names         Specifies a list of one or more files or directories.
                Wildcards may be used to delete multiple files. If a
                directory is specified, all files within the directory
                will be deleted.

  /P            Prompts for confirmation before deleting each file.
  /F            Force deleting of read-only files.
  /S            Delete specified files from all subdirectories.
  /Q            Quiet mode, do not ask if ok to delete on global wildcard
  /A            Selects files to delete based on attributes
  attributes    R  Read-only files            S  System files
                H  Hidden files               A  Files ready for archiving
                I  Not content indexed Files  L  Reparse Points
                O  Offline files              -  Prefix meaning not
```

#### View Files With the Read-only Attribute

``` cmd-session
C:\Users\htb\Desktop\example> dir /A:R
 
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:00 PM                 5 file-66
               1 File(s)              5 bytes
               0 Dir(s)  38,632,652,800 bytes free
```

#### Delete a Read-only File

``` cmd-session
C:\Users\htb\Desktop\example > del /A:R *

C:\Users\htb\Desktop\example\*, Are you sure (Y/N)? Y

C:\Users\htb\Desktop\example>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:22 PM    <DIR>          .
06/16/2021  02:22 PM    <DIR>          ..
06/16/2021  02:00 PM                 5 file-2
06/16/2021  02:00 PM                 5 file-4
06/16/2021  02:00 PM                 5 file-6
               3 File(s)             15 bytes
               2 Dir(s)  38,632,529,920 bytes free
```

#### Viewing Hidden Files

``` cmd-session
C:\Users\htb\Desktop\example> dir /A:H
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:00 PM                 5 file-99
               1 File(s)              5 bytes
               0 Dir(s)  38,632,202,240 bytes free
```

#### Removing Hidden Files

``` cmd-session
C:\Users\htb\Desktop\example>dir /A:H
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:00 PM                 5 file-99
               1 File(s)              5 bytes
               0 Dir(s)  38,632,202,240 bytes free

C:\Users\htb\Desktop\example>del /A:H *
C:\Users\htb\Desktop\example\*, Are you sure (Y/N)? Y

C:\Users\htb\Desktop\example>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

06/16/2021  02:28 PM    <DIR>          .
06/16/2021  02:28 PM    <DIR>          ..
06/16/2021  02:00 PM                 5 file-2
06/16/2021  02:00 PM                 5 file-4
06/16/2021  02:00 PM                 5 file-6
               3 File(s)             15 bytes
               2 Dir(s)  38,631,997,440 bytes free

C:\Users\htb\Desktop\example>dir /A:H
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\htb\Desktop\example

File Not Found
```

### Copying and Moving Files

#### copy

``` cmd-session
C:\Users\student\Documents\Backup>copy secrets.txt C:\Users\student\Downloads\not-secrets.txt
        
        1 file(s) copied.
C:\Users\student\Downloads>dir
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\student\Downloads

06/23/2021  10:35 PM    <DIR>          .
06/23/2021  10:35 PM    <DIR>          ..
06/21/2021  11:58 PM             2,418 not-secrets.txt
               1 File(s)          2,418 bytes
               2 Dir(s)  39,021,146,112 bytes free
```

#### Copy Validation

``` cmd-session
C:\Windows\System32> copy calc.exe C:\Users\student\Downloads\copied-calc.exe /V
Overwrite C:\Users\student\Downloads\copied-calc.exe? (Yes/No/All): A
        1 file(s) copied.
```

#### move

``` cmd-session
C:\Users\student\Desktop>move C:\Users\student\Desktop\bio.txt C:\Users\student\Downloads
        
        1 file(s) moved.

C:\Users\student\Desktop>dir C:\Users\student\Downloads
 Volume in drive C has no label.
 Volume Serial Number is 26E7-9EE4

 Directory of C:\Users\student\Downloads

06/24/2021  11:10 AM    <DIR>          .
06/24/2021  11:10 AM    <DIR>          ..
06/22/2021  03:21 PM             1,140 bio.txt
12/07/2019  05:09 AM            27,648 copied-calc.exe
06/21/2021  11:58 PM             2,418 not-secrets.txt
               3 File(s)         31,206 bytes
               2 Dir(s)  39,122,550,784 bytes free
```

# 

# 

#### Questions

####