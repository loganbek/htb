<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/222/section/3202
// Platform Version: V1
// Module ID: 222
// Module Name: Wi-Fi Penetration Testing Basics
// Module Difficulty: Medium
// Section ID: 3202
// Section Title: Connecting to Wi-Fi Networks
// Page Title: Wi-Fi Penetration Testing Basics
// Page Number: 13
-->

# Connecting to Wi-Fi Networks

**Module Name:** Wi-Fi Penetration Testing Basics **Page Number:** 13

#### WI-FI PENETRATION TESTING BASICS

# Connecting to Wi-Fi Networks

## Using GUI

![https://academy.hackthebox.com/storage/modules/222/wifi_connect.png](https://academy.hackthebox.com/storage/modules/222/wifi_connect.png)

![https://academy.hackthebox.com/storage/modules/222/bypass_mac/bypass_mac_2.png](https://academy.hackthebox.com/storage/modules/222/bypass_mac/bypass_mac_2.png)

![https://academy.hackthebox.com/storage/modules/222/bypass_mac/bypass_mac_3.png](https://academy.hackthebox.com/storage/modules/222/bypass_mac/bypass_mac_3.png)

## Using CLI

```shell-session
[!bash!]$ sudo iwlist wlan0 s | grep 'Cell\|Quality\|ESSID\|IEEE'

          Cell 01 - Address: D8:D6:3D:EB:29:D5
                    Quality=61/70  Signal level=-49 dBm  
                    ESSID:"HackMe"
                    IE: IEEE 802.11i/WPA2 Version 1
          Cell 02 - Address: 3E:C1:D0:F2:5D:6A
                    Quality=70/70  Signal level=-30 dBm  
                    ESSID:"HackTheBox"
          Cell 03 - Address: 9C:9A:03:39:BD:71
                    Quality=70/70  Signal level=-30 dBm  
                    ESSID:"HTB-Corp"
                    IE: IEEE 802.11i/WPA2 Version 1
```

#### Connecting to WEP Networks

```config
network={
	ssid="HackTheBox"
    key_mgmt=NONE
    wep_key0=3C1C3A3BAB
    wep_tx_keyidx=0
}
```

```shell-session
[!bash!]$ sudo wpa_supplicant -c wep.conf -i wlan0

Successfully initialized wpa_supplicant
wlan0: SME: Trying to authenticate with 3e:c1:d0:f2:5d:6a (SSID='HackTheBox' freq=2412 MHz)
wlan0: Trying to associate with 3e:c1:d0:f2:5d:6a (SSID='HackTheBox' freq=2412 MHz)
wlan0: Associated with 3e:c1:d0:f2:5d:6a
wlan0: CTRL-EVENT-CONNECTED - Connection to 3e:c1:d0:f2:5d:6a completed [id=0 id_str=]
wlan0: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
```

```shell-session
[!bash!]$ sudo dhclient wlan0
```

```shell-session
[!bash!]$ ifconfig wlan0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.2.7  netmask 255.255.255.0  broadcast 192.168.2.255
        ether f6:65:bc:77:c9:21  txqueuelen 1000  (Ethernet)
        RX packets 7  bytes 1217 (1.2 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 14  bytes 3186 (3.1 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

#### Connecting to WPA Personal Networks

```config
network={
	ssid="HackMe"
    psk="password123"
}
```

```shell-session
[!bash!]$ sudo wpa_supplicant -c wpa.conf -i wlan0

Successfully initialized wpa_supplicant
wlan0: SME: Trying to authenticate with d8:d6:3d:eb:29:d5 (SSID='HackMe' freq=2412 MHz)
wlan0: Trying to associate with d8:d6:3d:eb:29:d5 (SSID='HackMe' freq=2412 MHz)
wlan0: Associated with d8:d6:3d:eb:29:d5
wlan0: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
wlan0: WPA: Key negotiation completed with d8:d6:3d:eb:29:d5 [PTK=CCMP GTK=CCMP]
wlan0: CTRL-EVENT-CONNECTED - Connection to d8:d6:3d:eb:29:d5 completed [id=0 id_str=]
```

```shell-session
[!bash!]$ sudo dhclient wlan0 -r

Killed old client process
```

```shell-session
[!bash!]$ sudo dhclient wlan0
```

```shell-session
[!bash!]$ ifconfig wlan0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.7  netmask 255.255.255.0  broadcast 192.168.1.255
        ether f6:65:bc:77:c9:21  txqueuelen 1000  (Ethernet)
        RX packets 37  bytes 6266 (6.2 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 41  bytes 6967 (6.9 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

#### Connecting to WPA Enterprise

```config
network={
  ssid="HTB-Corp"
  key_mgmt=WPA-EAP
  identity="HTB\Administrator"
  password="Admin@123"
}
```

```shell-session
[!bash!]$ sudo wpa_supplicant -c wpa_enterprsie.conf -i wlan0

Successfully initialized wpa_supplicant
wlan0: SME: Trying to authenticate with 9c:9a:03:39:bd:71 (SSID='HTB-Corp' freq=2412 MHz)
wlan0: Trying to associate with 9c:9a:03:39:bd:71 (SSID='HTB-Corp' freq=2412 MHz)
wlan0: Associated with 9c:9a:03:39:bd:71
wlan0: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
wlan0: CTRL-EVENT-EAP-STARTED EAP authentication started
wlan0: CTRL-EVENT-EAP-PROPOSED-METHOD vendor=0 method=25
wlan0: CTRL-EVENT-EAP-METHOD EAP vendor 0 method 25 (PEAP) selected
wlan0: CTRL-EVENT-EAP-PEER-CERT depth=0 subject='/C=US/ST=California/L=San Fransisco/O=HTB/CN=htb.com' hash=46b80ecdee1a588b1fed111307a618b8e4429d7cb9e639fe976741e1a1e2b7ae
wlan0: CTRL-EVENT-EAP-PEER-CERT depth=0 subject='/C=US/ST=California/L=San Fransisco/O=HTB/CN=htb.com' hash=46b80ecdee1a588b1fed111307a618b8e4429d7cb9e639fe976741e1a1e2b7ae
EAP-MSCHAPV2: Authentication succeeded
wlan0: CTRL-EVENT-EAP-SUCCESS EAP authentication completed successfully
wlan0: PMKSA-CACHE-ADDED 9c:9a:03:39:bd:71 0
wlan0: WPA: Key negotiation completed with 9c:9a:03:39:bd:71 [PTK=CCMP GTK=CCMP]
wlan0: CTRL-EVENT-CONNECTED - Connection to 9c:9a:03:39:bd:71 completed [id=0 id_str=]
```

```shell-session
[!bash!]$ sudo dhclient wlan0 -r

Killed old client process
```

```shell-session
[!bash!]$ sudo dhclient wlan0
```

```shell-session
[!bash!]$ ifconfig wlan0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.3.7  netmask 255.255.255.0  broadcast 192.168.3.255
        ether f6:65:bc:77:c9:21  txqueuelen 1000  (Ethernet)
        RX packets 66  bytes 10226 (10.2 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 77  bytes 11532 (11.5 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

#### Connecting with Network Manager Utilities

```shell-session
[!bash!]$ sudo nmtui
```

![https://academy.hackthebox.com/storage/modules/222/1-connect.png](https://academy.hackthebox.com/storage/modules/222/1-connect.png)

![https://academy.hackthebox.com/storage/modules/222/2-connect.png](https://academy.hackthebox.com/storage/modules/222/2-connect.png)

## Moving On

# 

# 

#### Questions

####