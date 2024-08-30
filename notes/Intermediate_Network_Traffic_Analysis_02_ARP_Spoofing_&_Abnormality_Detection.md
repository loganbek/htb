<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2446
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2446
// Section Title: ARP Spoofing & Abnormality Detection
// Page Title: Intermediate Network Traffic Analysis
// Page Number: 02
-->

# ARP Spoofing & Abnormality Detection

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 02

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# ARP Spoofing & Abnormality Detection

## How Address Resolution Protocol Works

![https://academy.hackthebox.com/storage/modules/229/ARP-protocol.png](https://academy.hackthebox.com/storage/modules/229/ARP-protocol.png)

## ARP Poisoning & Spoofing

![https://academy.hackthebox.com/storage/modules/229/ARP-spoofing-poisoning.png](https://academy.hackthebox.com/storage/modules/229/ARP-spoofing-poisoning.png)

## Installing & Starting TCPDump

#### TCPDump

``` shell-session
[!bash!]$ sudo apt install tcpdump -y
```

``` shell-session
[!bash!]$ sudo tcpdump -i eth0 -w filename.pcapng
```

## Finding ARP Spoofing

``` shell-session
[!bash!]$ wireshark ARP_Spoof.pcapng
```

![https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_1.png](https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_1.png)

![https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_2.png](https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_2.png)

![https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_3.png](https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_3.png)

#### ARP

``` shell-session
[!bash!]$ arp -a | grep 50:eb:f6:ec:0e:7f

? (192.168.10.4) at 50:eb:f6:ec:0e:7f [ether] on eth0
```

``` shell-session
[!bash!]$ arp -a | grep 08:00:27:53:0c:ba

? (192.168.10.4) at 08:00:27:53:0c:ba [ether] on eth0
```

## Identifying The Original IP Addresses

![https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_4.png](https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_4.png)

![https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_5.png](https://academy.hackthebox.com/storage/modules/229/ARP_Spoof_5.png)

# 

# 

#### Questions

####