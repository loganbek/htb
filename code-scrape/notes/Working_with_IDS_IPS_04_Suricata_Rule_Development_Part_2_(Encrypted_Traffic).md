<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/226/section/2451
// Platform Version: V1
// Module ID: 226
// Module Name: Working with IDS/IPS
// Module Difficulty: Medium
// Section ID: 2451
// Section Title: Suricata Rule Development Part 2 (Encrypted Traffic)
// Page Title: Hack The Box - Academy
// Page Number: 04
-->

# Suricata Rule Development Part 2 (Encrypted Traffic)

**Module Name:** Working with IDS/IPS **Page Number:** 04

#### 

#### WORKING WITH IDS/IPS

# Suricata Rule Development Part 2 (Encrypted Traffic)

## Suricata Rule Development Example 5: Detecting Dridex (TLS Encrypted)

``` shell-session
alert tls $EXTERNAL_NET any -> $HOME_NET any (msg:"ET MALWARE ABUSE.CH SSL Blacklist Malicious SSL certificate detected (Dridex)"; flow:established,from_server; content:"|16|"; content:"|0b|"; within:8; byte_test:3,<,1200,0,relative; content:"|03 02 01 02 02 09 00|"; fast_pattern; content:"|30 09 06 03 55 04 06 13 02|"; distance:0; pcre:"/^[A-Z]{2}/R"; content:"|55 04 07|"; distance:0; content:"|55 04 0a|"; distance:0; pcre:"/^.{2}[A-Z][a-z]{3,}\s(?:[A-Z][a-z]{3,}\s)?(?:[A-Z](?:[A-Za-z]{0,4}?[A-Z]|(?:\.[A-Za-z]){1,3})|[A-Z]?[a-z]+|[a-z](?:\.[A-Za-z]){1,3})\.?[01]/Rs"; content:"|55 04 03|"; distance:0; byte_test:1,>,13,1,relative; content:!"www."; distance:2; within:4; pcre:"/^.{2}(?P<CN>(?:(?:\d?[A-Z]?|[A-Z]?\d?)(?:[a-z]{3,20}|[a-z]{3,6}[0-9_][a-z]{3,6})\.){0,2}?(?:\d?[A-Z]?|[A-Z]?\d?)[a-z]{3,}(?:[0-9_-][a-z]{3,})?\.(?!com|org|net|tv)[a-z]{2,9})[01].*?(?P=CN)[01]/Rs"; content:!"|2a 86 48 86 f7 0d 01 09 01|"; content:!"GoDaddy"; sid:2023476; rev:5;)
```

``` shell-session
[!bash!]$ sudo suricata -r /home/htb-student/pcaps/dridex.pcap -l . -k none
15/7/2023 -- 20:34:11 - <Notice> - This is Suricata version 6.0.13 RELEASE running in USER mode
15/7/2023 -- 20:34:11 - <Notice> - all 3 packet processing threads, 4 management threads initialized, engine started.
15/7/2023 -- 20:34:11 - <Notice> - Signal Received.  Stopping engine.
15/7/2023 -- 20:34:11 - <Notice> - Pcap-file module read 1 files, 3683 packets, 3276706 bytes
```

``` shell-session
[!bash!]$ cat fast.log
07/09/2019-18:26:31.480302  [**] [1:2023476:5] ET MALWARE ABUSE.CH SSL Blacklist Malicious SSL certificate detected (Dridex) [**] [Classification: (null)] [P             riority: 3] {TCP} 188.166.156.241:443 -> 10.7.9.101:49206
07/09/2019-18:26:33.937036  [**] [1:2023476:5] ET MALWARE ABUSE.CH SSL Blacklist Malicious SSL certificate detected (Dridex) [**] [Classification: (null)] [P             riority: 3] {TCP} 188.166.156.241:443 -> 10.7.9.101:49207
07/09/2019-18:26:39.373287  [**] [1:2023476:5] ET MALWARE ABUSE.CH SSL Blacklist Malicious SSL certificate detected (Dridex) [**] [Classification: (null)] [P             riority: 3] {TCP} 188.166.156.241:443 -> 10.7.9.101:49208
07/09/2019-18:26:29.628847  [**] [1:2023476:5] ET MALWARE ABUSE.CH SSL Blacklist Malicious SSL certificate detected (Dridex) [**] [Classification: (null)] [P             riority: 3] {TCP} 188.166.156.241:443 -> 10.7.9.101:49205
07/09/2019-18:30:08.787378  [**] [1:2023476:5] ET MALWARE ABUSE.CH SSL Blacklist Malicious SSL certificate detected (Dridex) [**] [Classification: (null)] [P             riority: 3] {TCP} 72.205.170.179:443 -> 10.7.9.101:49212
---SNIP---
```

## Suricata Rule Development Example 6: Detecting Sliver (TLS Encrypted)

``` shell-session
alert tls any any -> any any (msg:"Sliver C2 SSL"; ja3.hash; content:"473cd7cb9faa642487833865d516e578"; sid:1002; rev:1;)
```

``` shell-session
[!bash!]$ ja3 -a --json /home/htb-student/pcaps/sliverenc.pcap
[
    {
        "destination_ip": "23.152.0.91",
        "destination_port": 443,
        "ja3": "771,49195-49199-49196-49200-52393-52392-49161-49171-49162-49172-156-157-47-53-49170-10-4865-4866-4867,0-5-10-11-13-65281-18-43-51,29-23-24-25,0",
        "ja3_digest": "473cd7cb9faa642487833865d516e578",
        "source_ip": "10.10.20.101",
        "source_port": 53222,
        "timestamp": 1634749464.600896
    },
    {
        "destination_ip": "23.152.0.91",
        "destination_port": 443,
        "ja3": "771,49195-49199-49196-49200-52393-52392-49161-49171-49162-49172-156-157-47-53-49170-10-4865-4866-4867,0-5-10-11-13-65281-18-43-51,29-23-24-25,0",
        "ja3_digest": "473cd7cb9faa642487833865d516e578",
        "source_ip": "10.10.20.101",
        "source_port": 53225,
        "timestamp": 1634749465.069819
    },
    {
        "destination_ip": "23.152.0.91",
        "destination_port": 443,
        "ja3": "771,49195-49199-49196-49200-52393-52392-49161-49171-49162-49172-156-157-47-53-49170-10-4865-4866-4867,0-5-10-11-13-65281-18-43-51,29-23-24-25,0",
        "ja3_digest": "473cd7cb9faa642487833865d516e578",
        "source_ip": "10.10.20.101",
        "source_port": 53229,
        "timestamp": 1634749585.240773
    },
---SNIP---
```

``` shell-session
[!bash!]$ sudo suricata -r /home/htb-student/pcaps/sliverenc.pcap -l . -k none
15/7/2023 -- 22:30:37 - <Notice> - This is Suricata version 6.0.13 RELEASE running in USER mode
15/7/2023 -- 22:30:37 - <Notice> - all 3 packet processing threads, 4 management threads initialized, engine started.
15/7/2023 -- 22:30:37 - <Notice> - Signal Received.  Stopping engine.
15/7/2023 -- 22:30:37 - <Notice> - Pcap-file module read 1 files, 15547 packets, 11904606 bytes
```

``` shell-session
[!bash!]$ cat fast.log
10/20/2021-17:04:25.166658  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53225 -> 23.152.0.91:443
10/20/2021-17:07:25.315183  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53231 -> 23.152.0.91:443
10/20/2021-17:04:24.700690  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53222 -> 23.152.0.91:443
10/20/2021-17:06:25.328173  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53229 -> 23.152.0.91:443
10/20/2021-17:10:25.311929  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53234 -> 23.152.0.91:443
10/20/2021-17:08:25.312485  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53232 -> 23.152.0.91:443
10/20/2021-17:09:25.210256  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53233 -> 23.152.0.91:443
10/20/2021-17:14:25.235711  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53243 -> 23.152.0.91:443
10/20/2021-17:11:25.213759  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53240 -> 23.152.0.91:443
10/20/2021-17:12:25.302237  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53241 -> 23.152.0.91:443
10/20/2021-17:13:25.236776  [**] [1:1002:1] Sliver C2 SSL [**] [Classification: (null)] [Priority: 3] {TCP} 10.10.20.101:53242 -> 23.152.0.91:443
---SNIP---
```

# 

# 

#### Questions

####