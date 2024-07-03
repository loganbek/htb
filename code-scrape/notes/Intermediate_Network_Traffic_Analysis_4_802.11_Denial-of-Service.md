<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2448
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2448
// Section Title: 802.11 Denial-of-Service
// Page Title: Hack The Box - Academy
// Page Number: 4
-->

# 802.11 Denial-of-Service

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 4

#### 

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# 802.11 Denial of Service

## Capturing 802.11 Traffic

#### Wireless Interfaces

``` shell-session
ndefstathiou@htb[/htb]$ iwconfig

wlan0     IEEE 802.11  ESSID:off/any  
          Mode:Managed  Access Point: Not-Associated   Tx-Power=20 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

#### Airmon-NG

``` shell-session
ndefstathiou@htb[/htb]$ sudo airmon-ng start wlan0

Found 2 processes that could cause trouble.
Kill them using 'airmon-ng check kill' before putting
the card in monitor mode, they will interfere by changing channels
and sometimes putting the interface back in managed mode

    PID Name
    820 NetworkManager
   1389 wpa_supplicant

PHY     Interface       Driver          Chipset

phy0    wlan0           rt2800usb       Ralink Technology, Corp. RT2870/RT3070
                (mac80211 monitor mode vif enabled for [phy0]wlan0 on [phy0]wlan0mon)
                (mac80211 station mode vif disabled for [phy0]wlan0)
```

#### Monitor Mode

``` shell-session
ndefstathiou@htb[/htb]$ sudo ifconfig wlan0 down
ndefstathiou@htb[/htb]$ sudo iwconfig wlan0 mode monitor
ndefstathiou@htb[/htb]$ sudo ifconfig wlan0 up
```

``` shell-session
ndefstathiou@htb[/htb]$ iwconfig

wlan0mon  IEEE 802.11  Mode:Monitor  Frequency:2.457 GHz  Tx-Power=20 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

``` shell-session
ndefstathiou@htb[/htb]$ iwconfig

wlan0     IEEE 802.11  Mode:Monitor  Frequency:2.457 GHz  Tx-Power=20 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

``` shell-session
ndefstathiou@htb[/htb]$ sudo airodump-ng -c 4 --bssid F8:14:FE:4D:E6:F1 wlan0 -w raw

BSSID              PWR RXQ  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID
F8:14:FE:4D:E6:F1  -23  64      115        6    0   4  130   WPA2 CCMP   PSK  HTB-Wireless
```

## How Deauthentication Attacks Work

## Finding Deauthentication Attacks

#### Wireshark

``` shell-session
ndefstathiou@htb[/htb]$ sudo wireshark deauthandbadauth.cap
```

## Revolving Reason Codes

#### Finding Failed Authentication Attempts

# 

# 

#### Questions

####