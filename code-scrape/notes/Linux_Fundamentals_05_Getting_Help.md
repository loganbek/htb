<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/67
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 67
// Section Title: Getting Help
// Page Title: Linux Fundamentals
// Page Number: 05
-->

# Getting Help

**Module Name:** Linux Fundamentals **Page Number:** 05

#### LINUX FUNDAMENTALS

# Getting Help

#### Syntax:

``` shell-session
ndefstathiou@htb[/htb]$ man <tool>
```

#### Example:

``` shell-session
ndefstathiou@htb[/htb]$ man curl
```

``` shell-session
curl(1)                                                             Curl Manual                                                            curl(1)

NAME
       curl - transfer a URL

SYNOPSIS
       curl [options] [URL...]

DESCRIPTION
       curl  is  a tool to transfer data from or to a server, using one of the supported protocols (DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS,  
       IMAP, IMAPS,  LDAP,  LDAPS,  POP3,  POP3S,  RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, and TFTP). The command is designed to work without user interaction.

       curl offers a busload of useful tricks like proxy support, user authentication, FTP upload, HTTP post, SSL connections, cookies, file transfer resume, Metalink,  and more. As we will see below, the number of features will make our head spin!

       curl is powered by libcurl for all transfer-related features.  See libcurl(3) for details.

Manual page curl(1) line 1 (press h for help or q to quit)
```

#### Syntax:

``` shell-session
ndefstathiou@htb[/htb]$ <tool> --help
```

#### Example:

``` shell-session
ndefstathiou@htb[/htb]$ curl --help

Usage: curl [options...] <url>
     --abstract-unix-socket <path> Connect via abstract Unix domain socket
     --anyauth       Pick any authentication method
 -a, --append        Append to target file when uploading
     --basic         Use HTTP Basic Authentication
     --cacert <file> CA certificate to verify peer against
     --capath <dir>  CA directory to verify peer against
 -E, --cert <certificate[:password]> Client certificate file and password
<SNIP>
```

#### Syntax:

``` shell-session
ndefstathiou@htb[/htb]$ <tool> -h
```

#### Example:

``` shell-session
ndefstathiou@htb[/htb]$ curl -h

Usage: curl [options...] <url>
     --abstract-unix-socket <path> Connect via abstract Unix domain socket
     --anyauth       Pick any authentication method
 -a, --append        Append to target file when uploading
     --basic         Use HTTP Basic Authentication
     --cacert <file> CA certificate to verify peer against
     --capath <dir>  CA directory to verify peer against
 -E, --cert <certificate[:password]> Client certificate file and password
<SNIP>
```

#### Syntax:

``` shell-session
ndefstathiou@htb[/htb]$ apropos <keyword>
```

#### Example:

``` shell-session
ndefstathiou@htb[/htb]$ apropos sudo

sudo (8)             - execute a command as another user
sudo.conf (5)        - configuration for sudo front end
sudo_plugin (8)      - Sudo Plugin API
sudo_root (8)        - How to run administrative commands
sudoedit (8)         - execute a command as another user
sudoers (5)          - default sudo security policy plugin
sudoreplay (8)       - replay sudo session logs
visudo (8)           - edit the sudoers file
```

####