<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/
// Platform Version: V1
// Module ID: 167
// Module Name: Introduction to Windows Command Line
// Module Difficulty: Easy
// Section ID: 1607
// Section Title: Getting Help
// Page Title: Introduction to Windows Command Line
// Page Number: 03
-->

# Getting Help

**Module Name:** Introduction to Windows Command Line **Page Number:** 03

#### INTRODUCTION TO WINDOWS COMMAND LINE

# Getting Help

## How to Get Help

#### Default Help Usage

``` cmd-session
C:\htb> help

For more information on a specific command, type HELP command-name
ASSOC          Displays or modifies file extension associations.
ATTRIB         Displays or changes file attributes.
BREAK          Sets or clears extended CTRL+C checking.
BCDEDIT        Sets properties in boot database to control boot loading.
CACLS          Displays or modifies access control lists (ACLs) of files.
CALL           Calls one batch program from another.
CD             Displays the name of or changes the current directory.
CHCP           Displays or sets the active code page number.
CHDIR          Displays the name of or changes the current directory.
CHKDSK         Checks a disk and displays a status report.

<snip>
```

#### Help with Commands

``` cmd-session
C:\htb> help time

Displays or sets the system time.

TIME [/T | time]

Type TIME with no parameters to display the current time setting and a prompt
for a new one. Press ENTER to keep the same time.

If Command Extensions are enabled, the TIME command supports
the /T switch which tells the command to just output the
current time, without prompting for a new time.
```

#### Detailed Output

``` cmd-session
C:\htb> help ipconfig

This command is not supported by the help utility. Try "ipconfig /?".
```

## Why Do We Need the Help Utility?

## Where Can You Find Additional Help?

## Basic Tips & Tricks

#### Clear Your Screen

![https://academy.hackthebox.com/storage/modules/167/clear_screen.gif](https://academy.hackthebox.com/storage/modules/167/clear_screen.gif)

#### History

#### doskey /history

``` cmd-session
C:\htb> doskey /history

systeminfo
ipconfig /all
cls
ipconfig /all
systeminfo
cls
history
help
doskey /history
ping 8.8.8.8
doskey /history
```

#### Useful Keys & Commands for Terminal History

#### Exit a Running Process

``` cmd-session
C:\htb> ping 8.8.8.8

Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=22ms TTL=114
Reply from 8.8.8.8: bytes=32 time=25ms TTL=114

Ping statistics for 8.8.8.8:
    Packets: Sent = 2, Received = 2, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
Control-C
^C
```

# 

# 

#### Questions

####