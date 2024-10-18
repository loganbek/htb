<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/222/section/2927
// Platform Version: V1
// Module ID: 222
// Module Name: Wi-Fi Penetration Testing Basics
// Module Difficulty: Medium
// Section ID: 2927
// Section Title: Airdecap-ng
// Page Title: Hack The Box - Academy
// Page Number: 11
-->

# Airdecap-ng

**Module Name:** Wi-Fi Penetration Testing Basics **Page Number:** 11

#### 

#### WI-FI PENETRATION TESTING BASICS

# Airdecap-ng

### Using Airdecap-ng

``` usage
airdecap-ng [options] <pcap file>
```

![https://academy.hackthebox.com/storage/modules/222/airdecap-ng/Wireshark_1.JPG](https://academy.hackthebox.com/storage/modules/222/airdecap-ng/Wireshark_1.JPG)

![https://academy.hackthebox.com/storage/modules/222/airdecap-ng/Wireshark_2.JPG](https://academy.hackthebox.com/storage/modules/222/airdecap-ng/Wireshark_2.JPG)

### Removing Wireless Headers from Unencrypted Capture file

``` usage
airdecap-ng -b <bssid> <capture-file>
```

``` shell-session
[!bash!]$ sudo airdecap-ng -b 00:14:6C:7A:41:81 opencapture.cap

Total number of stations seen            0
Total number of packets read           251
Total number of WEP data packets         0
Total number of WPA data packets         0
Number of plaintext data packets         0
Number of decrypted WEP  packets         0
Number of corrupted WEP  packets         0
Number of decrypted WPA  packets         0
Number of bad TKIP (WPA) packets         0
Number of bad CCMP (WPA) packets         0
```

### Decrypting WEP-encrypted captures

``` usage
airdecap-ng -w <WEP-key> <capture-file>
```

``` shell-session
[!bash!]$ sudo airdecap-ng -w 1234567890ABCDEF HTB-01.cap

Total number of stations seen            6
Total number of packets read           356
Total number of WEP data packets       235
Total number of WPA data packets       121
Number of plaintext data packets         0
Number of decrypted WEP  packets         0
Number of corrupted WEP  packets         0
Number of decrypted WPA  packets       235
Number of bad TKIP (WPA) packets         0
Number of bad CCMP (WPA) packets         0
```

### Decrypting WPA-encrypted captures

``` usage
airdecap-ng -p <passphrase> <capture-file> -e <essid>
```

``` shell-session
[!bash!]$ sudo airdecap-ng -p 'abdefg' HTB-01.cap -e "Wireless Lab"

Total number of stations seen            6
Total number of packets read           356
Total number of WEP data packets       235
Total number of WPA data packets       121
Number of plaintext data packets         0
Number of decrypted WEP  packets         0
Number of corrupted WEP  packets         0
Number of decrypted WPA  packets       121
Number of bad TKIP (WPA) packets         0
Number of bad CCMP (WPA) packets         0
```

## Moving On

# 

# 

#### Questions

####