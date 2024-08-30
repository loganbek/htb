<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/77/section/730
// Platform Version: V1
// Module ID: 77
// Module Name: Getting Started
// Module Difficulty: Fundamental
// Section ID: 730
// Section Title: Common Pitfalls
// Page Title: Getting Started
// Page Number: 20
-->

# Common Pitfalls

**Module Name:** Getting Started **Page Number:** 20

#### GETTING STARTED

# Common Pitfalls

## VPN Issues

#### Still Connected to VPN

``` shell-session
[!bash!]$ sudo openvpn ./htb.ovpn

...SNIP...

Initialization Sequence Completed
```

#### Getting VPN Address

``` shell-session
[!bash!]$ ip -4 a show tun0

6: tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 500
    inet 10.10.10.1/23 scope global tun0
       valid_lft forever preferred_lft forever
```

#### Checking Routing Table

``` shell-session
[!bash!]$ sudo netstat -rn

[sudo] password for user: 

Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         192.168.195.2   0.0.0.0         UG        0 0          0 eth0
10.10.14.0      0.0.0.0         255.255.254.0   U         0 0          0 tun0
10.129.0.0      10.10.14.1      255.255.0.0     UG        0 0          0 tun0
192.168.1.0   0.0.0.0         255.255.255.0   U         0 0          0 eth0
```

#### Pinging Gateway

``` shell-session
[!bash!]$ ping -c 4 10.10.14.1
PING 10.10.14.1 (10.10.14.1) 56(84) bytes of data.
64 bytes from 10.10.14.1: icmp_seq=1 ttl=64 time=111 ms
64 bytes from 10.10.14.1: icmp_seq=2 ttl=64 time=111 ms
64 bytes from 10.10.14.1: icmp_seq=3 ttl=64 time=111 ms
64 bytes from 10.10.14.1: icmp_seq=4 ttl=64 time=111 ms

--- 10.10.14.1 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3012ms
rtt min/avg/max/mdev = 110.574/110.793/111.056/0.174 ms
```

#### Working on Two Devices

#### Checking Region

![https://academy.hackthebox.com/storage/modules/77/htb_vpn.jpg](https://academy.hackthebox.com/storage/modules/77/htb_vpn.jpg)

#### VPN Troubleshooting

## Burp Suite Proxy Issues

#### Not Disabling Proxy

![https://academy.hackthebox.com/storage/modules/30/foxyproxy_options.jpg](https://academy.hackthebox.com/storage/modules/30/foxyproxy_options.jpg)

## Changing SSH Key and Password

``` shell-session
[!bash!]$ ssh-keygen

Generating public/private rsa key pair.
Enter file in which to save the key (/home/parrot/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

Your identification has been saved in /home/parrot/.ssh/id_rsa
Our public key has been saved in /home/parrot/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:...SNIP... parrot@parrot
The key's randomart image is:
+---[RSA 3072]----+
|            o..  |
|     ...SNIP     |
|     ...SNIP     |
|     ...SNIP     |
|     ...SNIP     |
|     ...SNIP     |
|     ...SNIP     |
|       + +oo+o   |
+----[SHA256]-----+
```

####