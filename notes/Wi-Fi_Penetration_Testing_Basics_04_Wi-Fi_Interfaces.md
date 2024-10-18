<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/222/section/2401
// Platform Version: V1
// Module ID: 222
// Module Name: Wi-Fi Penetration Testing Basics
// Module Difficulty: Medium
// Section ID: 2401
// Section Title: Wi-Fi Interfaces
// Page Title: Wi-Fi Penetration Testing Basics
// Page Number: 04
-->

# Wi-Fi Interfaces

**Module Name:** Wi-Fi Penetration Testing Basics **Page Number:** 04

#### WI-FI PENETRATION TESTING BASICS

# Wi-Fi Interfaces

#### How to Choose the Right Interface for the Job

#### Interface Strength

``` shell-session
[!bash!]$ iwconfig

wlan0     IEEE 802.11  ESSID:off/any  
          Mode:Managed  Access Point: Not-Associated   Tx-Power=20 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

``` shell-session
[!bash!]$ iw reg get

global
country 00: DFS-UNSET
        (2402 - 2472 @ 40), (6, 20), (N/A)
        (2457 - 2482 @ 20), (6, 20), (N/A), AUTO-BW, PASSIVE-SCAN
        (2474 - 2494 @ 20), (6, 20), (N/A), NO-OFDM, PASSIVE-SCAN
        (5170 - 5250 @ 80), (6, 20), (N/A), AUTO-BW, PASSIVE-SCAN
        (5250 - 5330 @ 80), (6, 20), (0 ms), DFS, AUTO-BW, PASSIVE-SCAN
        (5490 - 5730 @ 160), (6, 20), (0 ms), DFS, PASSIVE-SCAN
        (5735 - 5835 @ 80), (6, 20), (N/A), PASSIVE-SCAN
        (57240 - 63720 @ 2160), (N/A, 0), (N/A)
```

#### Changing the Region Settings for our Interface

``` shell-session
[!bash!]$ sudo iw reg set US
```

``` shell-session
[!bash!]$ iw reg get

global
country US: DFS-FCC
        (902 - 904 @ 2), (N/A, 30), (N/A)
        (904 - 920 @ 16), (N/A, 30), (N/A)
        (920 - 928 @ 8), (N/A, 30), (N/A)
        (2400 - 2472 @ 40), (N/A, 30), (N/A)
        (5150 - 5250 @ 80), (N/A, 23), (N/A), AUTO-BW
        (5250 - 5350 @ 80), (N/A, 24), (0 ms), DFS, AUTO-BW
        (5470 - 5730 @ 160), (N/A, 24), (0 ms), DFS
        (5730 - 5850 @ 80), (N/A, 30), (N/A), AUTO-BW
        (5850 - 5895 @ 40), (N/A, 27), (N/A), NO-OUTDOOR, AUTO-BW, PASSIVE-SCAN
        (5925 - 7125 @ 320), (N/A, 12), (N/A), NO-OUTDOOR, PASSIVE-SCAN
        (57240 - 71000 @ 2160), (N/A, 40), (N/A)
```

``` shell-session
[!bash!]$ iwconfig

wlan0     IEEE 802.11  ESSID:off/any  
          Mode:Managed  Access Point: Not-Associated   Tx-Power=20 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

``` shell-session
[!bash!]$ sudo ifconfig wlan0 down
```

``` shell-session
[!bash!]$ sudo iwconfig wlan0 txpower 30
```

``` shell-session
[!bash!]$ sudo ifconfig wlan0 up
```

``` shell-session
[!bash!]$ iwconfig

wlan0     IEEE 802.11  ESSID:off/any  
          Mode:Managed  Access Point: Not-Associated   Tx-Power=30 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off
```

#### Checking Driver Capabilities for our Interface

``` shell-session
[!bash!]$ iw list

Wiphy phy5
	wiphy index: 5
	max # scan SSIDs: 4
	max scan IEs length: 2186 bytes
	max # sched scan SSIDs: 0
	max # match sets: 0
	max # scan plans: 1
	max scan plan interval: -1
	max scan plan iterations: 0
	Retry short limit: 7
	Retry long limit: 4
	Coverage class: 0 (up to 0m)
	Device supports RSN-IBSS.
	Device supports AP-side u-APSD.
	Device supports T-DLS.
	Supported Ciphers:
			* WEP40 (00-0f-ac:1)
			* WEP104 (00-0f-ac:5)
			<SNIP>
			* GMAC-256 (00-0f-ac:12)
	Available Antennas: TX 0 RX 0
	Supported interface modes:
			 * IBSS
			 * managed
			 * AP
			 * AP/VLAN
			 * monitor
			 * mesh point
			 * P2P-client
			 * P2P-GO
			 * P2P-device
	Band 1:
		<SNIP>
		Frequencies:
				* 2412 MHz [1] (20.0 dBm)
				* 2417 MHz [2] (20.0 dBm)
				<SNIP>
				* 2472 MHz [13] (disabled)
				* 2484 MHz [14] (disabled)
	Band 2:
		<SNIP>
		Frequencies:
				* 5180 MHz [36] (20.0 dBm)
				<SNIP>
				* 5260 MHz [52] (20.0 dBm) (radar detection)
				<SNIP>
				* 5700 MHz [140] (20.0 dBm) (radar detection)
				<SNIP>
				* 5825 MHz [165] (20.0 dBm)
				* 5845 MHz [169] (disabled)
	<SNIP>
		Device supports TX status socket option.
		Device supports HT-IBSS.
		Device supports SAE with AUTHENTICATE command
		Device supports low priority scan.
	<SNIP>
```

#### Scanning Available WiFi Networks

``` shell-session
[!bash!]$ iwlist wlan0 scan |  grep 'Cell\|Quality\|ESSID\|IEEE'

          Cell 01 - Address: f0:28:c8:d9:9c:6e
                    Quality=61/70  Signal level=-49 dBm  
                    ESSID:"HTB-Wireless"
                    IE: IEEE 802.11i/WPA2 Version 1
          Cell 02 - Address: 3a:c4:6e:40:09:76
                    Quality=70/70  Signal level=-30 dBm  
                    ESSID:"CyberCorp"
                    IE: IEEE 802.11i/WPA2 Version 1
          Cell 03 - Address: 48:32:c7:a0:aa:6d
                    Quality=70/70  Signal level=-30 dBm  
                    ESSID:"HackTheBox"
                    IE: IEEE 802.11i/WPA2 Version 1
```

#### Changing Channel & Frequency of Interface

``` shell-session
[!bash!]$ iwlist wlan0 channel

wlan0     32 channels in total; available frequencies :
          Channel 01 : 2.412 GHz
          Channel 02 : 2.417 GHz
          Channel 03 : 2.422 GHz
          Channel 04 : 2.427 GHz
          <SNIP>
          Channel 140 : 5.7 GHz
          Channel 149 : 5.745 GHz
          Channel 153 : 5.765 GHz
```

``` shell-session
[!bash!]$ sudo ifconfig wlan0 down
[!bash!]$ sudo iwconfig wlan0 channel 64
[!bash!]$ sudo ifconfig wlan0 up
[!bash!]$ iwlist wlan0 channel

wlan0     32 channels in total; available frequencies :
          Channel 01 : 2.412 GHz
          Channel 02 : 2.417 GHz
          Channel 03 : 2.422 GHz
          Channel 04 : 2.427 GHz
          <SNIP>
          Channel 140 : 5.7 GHz
          Channel 149 : 5.745 GHz
          Channel 153 : 5.765 GHz
          Current Frequency:5.32 GHz (Channel 64)
```

``` shell-session
[!bash!]$ iwlist wlan0 frequency | grep Current

          Current Frequency:5.32 GHz (Channel 64)
```

``` shell-session
[!bash!]$ sudo ifconfig wlan0 down
[!bash!]$ sudo iwconfig wlan0 freq "5.52G"
[!bash!]$ sudo ifconfig wlan0 up
```

``` shell-session
[!bash!]$ iwlist wlan0 frequency | grep Current

          Current Frequency:5.52 GHz (Channel 104)
```

## Moving On

# 

# 

#### Questions

####