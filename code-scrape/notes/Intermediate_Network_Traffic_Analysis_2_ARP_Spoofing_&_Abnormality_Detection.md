<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2446
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2446
// Section Title: ARP Spoofing & Abnormality Detection
// Page Title: Hack The Box - Academy
// Page Number: 2
-->

# ARP Spoofing & Abnormality Detection

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 2

#### 

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# ARP Spoofing & Abnormality Detection

## How Address Resolution Protocol Works

## ARP Poisoning & Spoofing

## Installing & Starting TCPDump

#### TCPDump

``` shell-session
ndefstathiou@htb[/htb]$ sudo apt install tcpdump -y
```

``` shell-session
ndefstathiou@htb[/htb]$ sudo tcpdump -i eth0 -w filename.pcapng
```

## Finding ARP Spoofing

``` shell-session
ndefstathiou@htb[/htb]$ wireshark ARP_Spoof.pcapng
```

#### ARP

``` shell-session
ndefstathiou@htb[/htb]$ arp -a | grep 50:eb:f6:ec:0e:7f

? (192.168.10.4) at 50:eb:f6:ec:0e:7f [ether] on eth0
```

``` shell-session
ndefstathiou@htb[/htb]$ arp -a | grep 08:00:27:53:0c:ba

? (192.168.10.4) at 08:00:27:53:0c:ba [ether] on eth0
```

## Identifying The Original IP Addresses

# 

# 

#### Questions

####