<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2452
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2452
// Section Title: Fragmentation Attacks
// Page Title: Intermediate Network Traffic Analysis
// Page Number: 06
-->

# Fragmentation Attacks

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 06

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# Fragmentation Attacks

![https://academy.hackthebox.com/storage/modules/229/IPheader.jpg](https://academy.hackthebox.com/storage/modules/229/IPheader.jpg)

## Commonly Abused Fields

## Abuse of Fragmentation

## Finding Irregularities in Fragment Offsets

``` shell-session
[!bash!]$ wireshark nmap_frag_fw_bypass.pcapng
```

#### Attacker's Enumeration

``` shell-session
[!bash!]$ nmap <host ip>
```

![https://academy.hackthebox.com/storage/modules/229/1-frag.png](https://academy.hackthebox.com/storage/modules/229/1-frag.png)

``` shell-session
[!bash!]$ nmap -f 10 <host ip>
```

![https://academy.hackthebox.com/storage/modules/229/2-frag.png](https://academy.hackthebox.com/storage/modules/229/2-frag.png)

![https://academy.hackthebox.com/storage/modules/229/3-frag.png](https://academy.hackthebox.com/storage/modules/229/3-frag.png)

![https://academy.hackthebox.com/storage/modules/229/4-frag.png](https://academy.hackthebox.com/storage/modules/229/4-frag.png)

# 

# 

#### Questions

####