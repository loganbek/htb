<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2445
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2445
// Section Title: Intermediate Network Traffic Analysis Overview
// Page Title: Intermediate Network Traffic Analysis
// Page Number: 1
-->

# Intermediate Network Traffic Analysis Overview

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 1

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# Intermediate Network Traffic Analysis Overview

``` shell-session
ndefstathiou@htb[/htb]$ wget -O file.zip 'https://academy.hackthebox.com/storage/resources/pcap_files.zip' && mkdir tempdir && unzip file.zip -d tempdir && mkdir -p pcaps && mv tempdir/Intermediate_Network_Traffic_Analysis/* pcaps/ && rm -r tempdir file.zip
--2023-08-08 14:09:14--  https://academy.hackthebox.com/storage/resources/pcap_files.zip
Resolving academy.hackthebox.com (academy.hackthebox.com)... 104.18.20.126, 104.18.21.126, 2606:4700::6812:147e, ...
Connecting to academy.hackthebox.com (academy.hackthebox.com)|104.18.20.126|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 19078200 (18M) [application/zip]
Saving to: ‘file.zip’

file.zip           100%[===============>]  18.19M  71.4MB/s    in 0.3s    

2023-08-08 14:09:14 (71.4 MB/s) - ‘file.zip’ saved [19078200/19078200]

Archive:  file.zip
   creating: tempdir/Intermediate_Network_Traffic_Analysis/
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/ARP_Poison.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/ARP_Scan.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/ARP_Spoof.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/basic_fuzzing.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/CRLF_and_host_header_manipulation.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/deauthandbadauth.cap  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/decoy_scanning_nmap.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/dns_enum_detection.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/dns_tunneling.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/funky_dns.pcap  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/funky_icmp.pcap  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/icmp_frag.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/ICMP_rand_source.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/ICMP_rand_source_larg_data.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/ICMP_smurf.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/icmp_tunneling.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/ip_ttl.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/LAND-DoS.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/nmap_ack_scan.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/nmap_fin_scan.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/nmap_frag_fw_bypass.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/nmap_null_scan.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/nmap_syn_scan.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/nmap_xmas_scan.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/number_fuzzing.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/rogueap.cap  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/RST_Attack.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/SSL_renegotiation_edited.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/SSL_renegotiation_original.pcap  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/TCP-hijacking.pcap  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/TCP_rand_source_attacks.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/telnet_tunneling_23.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/telnet_tunneling_9999.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/telnet_tunneling_ipv6.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/udp_tunneling.pcapng  
  inflating: tempdir/Intermediate_Network_Traffic_Analysis/XSS_Simple.pcapng
```

####