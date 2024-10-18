<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/222/section/2402
// Platform Version: V1
// Module ID: 222
// Module Name: Wi-Fi Penetration Testing Basics
// Module Difficulty: Medium
// Section ID: 2402
// Section Title: Interface Modes
// Page Title: Wi-Fi Penetration Testing Basics
// Page Number: 05
-->

# Interface Modes

**Module Name:** Wi-Fi Penetration Testing Basics **Page Number:** 05

#### WI-FI PENETRATION TESTING BASICS

# Interface Modes

#### Managed Mode

``` shell-session
[!bash!]$ sudo ifconfig wlan0 down
[!bash!]$ sudo iwconfig wlan0 mode managed
```

``` shell-session
[!bash!]$ sudo iwconfig wlan0 essid HTB-Wifi
```

``` shell-session
[!bash!]$ sudo iwconfig

wlan0     IEEE 802.11  ESSID:"HTB-Wifi"  
          Mode:Managed  Access Point: Not-Associated   Tx-Power=30 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

#### Ad-hoc Mode

``` shell-session
[!bash!]$ sudo iwconfig wlan0 mode ad-hoc
[!bash!]$ sudo iwconfig wlan0 essid HTB-Mesh
```

``` shell-session
[!bash!]$ sudo iwconfig

wlan0     IEEE 802.11  ESSID:"HTB-Mesh"  
          Mode:Ad-Hoc  Frequency:2.412 GHz  Cell: Not-Associated   
          Tx-Power=30 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

#### Master Mode

``` shell-session
[!bash!]$ nano open.conf

interface=wlan0
driver=nl80211
ssid=HTB-Hello-World
channel=2
hw_mode=g
```

``` shell-session
[!bash!]$ sudo hostapd open.conf

wlan0: interface state UNINITIALIZED->ENABLED
wlan0: AP-ENABLED 
wlan0: STA 2c:6d:c1:af:eb:91 IEEE 802.11: authenticated
wlan0: STA 2c:6d:c1:af:eb:91 IEEE 802.11: associated (aid 1)
wlan0: AP-STA-CONNECTED 2c:6d:c1:af:eb:91
wlan0: STA 2c:6d:c1:af:eb:91 RADIUS: starting accounting session D249D3336F052567
```

#### Mesh Mode

``` shell-session
[!bash!]$ sudo iw dev wlan0 set type mesh
```

``` shell-session
[!bash!]$ sudo iwconfig

wlan0     IEEE 802.11  Mode:Auto  Tx-Power=30 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

#### Monitor Mode

``` shell-session
[!bash!]$ sudo ifconfig wlan0 down
```

``` shell-session
[!bash!]$ sudo iw wlan0 set monitor control
```

``` shell-session
[!bash!]$ sudo ifconfig wlan0 up
```

``` shell-session
[!bash!]$ iwconfig

wlan0     IEEE 802.11  Mode:Monitor  Frequency:2.457 GHz  Tx-Power=30 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

# 

# 

#### Questions

####