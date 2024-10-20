<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2449
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2449
// Section Title: Rogue Access Point & Evil-Twin Attacks
// Page Title: Hack The Box - Academy
// Page Number: 05
-->

# Rogue Access Point & Evil-Twin Attacks

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 05

#### 

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# Rogue Access Point & Evil-Twin Attacks

![https://academy.hackthebox.com/storage/modules/229/rogueap.png](https://academy.hackthebox.com/storage/modules/229/rogueap.png)

## Evil-Twin

![https://academy.hackthebox.com/storage/modules/229/evil-twin.png](https://academy.hackthebox.com/storage/modules/229/evil-twin.png)

## Airodump-ng Detection

``` shell-session
[!bash!]$ sudo airodump-ng -c 4 --essid HTB-Wireless wlan0 -w raw

 CH  4 ][ Elapsed: 1 min ][ 2023-07-13 16:06    
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID
 F8:14:FE:4D:E6:F2   -7 100      470      155    0   4   54   OPN              HTB-Wireless
 F8:14:FE:4D:E6:F1   -5  96      682        0    0   4  324   WPA2 CCMP   PSK  HTB-Wireless
```

![https://academy.hackthebox.com/storage/modules/229/1-evil-twin.png](https://academy.hackthebox.com/storage/modules/229/1-evil-twin.png)

![https://academy.hackthebox.com/storage/modules/229/2-evil-twin.png](https://academy.hackthebox.com/storage/modules/229/2-evil-twin.png)

![https://academy.hackthebox.com/storage/modules/229/3-evil-twin.png](https://academy.hackthebox.com/storage/modules/229/3-evil-twin.png)

## Finding a Fallen User

![https://academy.hackthebox.com/storage/modules/229/4-evil-twin.png](https://academy.hackthebox.com/storage/modules/229/4-evil-twin.png)

## Finding Rogue Access Points

# 

# 

#### Questions

####