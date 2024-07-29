<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/28/section/204
// Platform Version: V1
// Module ID: 28
// Module Name: OSINT: Corporate Recon
// Module Difficulty: Hard
// Section ID: 204
// Section Title: Domain Structure
// Page Title: Hack The Box - Academy
// Page Number: 13
-->

# Domain Structure

**Module Name:** OSINT: Corporate Recon **Page Number:** 13

#### 

#### OSINT: CORPORATE RECON

# Domain Structure

![https://academy.hackthebox.com/storage/modules/28/infra-domain-structure.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-structure.png)

## Home Page

![https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-homepage.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-homepage.png)

#### Subdomains

## Search Engines

``` shell-session
[!bash!]$ ./ctfr.py -d inlanefreight.com | grep -v "[-]"

          ____ _____ _____ ____  
         / ___|_   _|  ___|  _ \ 
        | |     | | | |_  | |_) |
        | |___  | | |  _| |  _ < 
         \____| |_| |_|   |_| \_\
    Made by Sheila A. Berta (UnaPibaGeek)

inlanefreight.com
vc.inlanefreight.com
afdc0002.inlanefreight.com
afdc0101.inlanefreight.com
afdc0102.inlanefreight.com
wlan.inlanefreight.com
afdc0102.inlanefreight.com
wlan.inlanefreight.com
autodiscover.inlanefreight.com
kfdcex07.inlanefreight.com
kfdcex08.inlanefreight.com
videoconf.inlanefreight.com

[!]  Done. Have a nice day! ;).
```

``` shell-session
[!bash!]$ for sub in $(cat subdomains);do host $sub | grep "has" | cut -d" " -f1,4;done

inlanefreight.com X.X.149.43
vc.inlanefreight.com X.X.164.24
autodiscover.inlanefreight.com X.X.145.34
kfdccv04.inlanefreight.com X.X.48.249
ftp.inlanefreight.com X.X.48.249
rbpoint.inlanefreight.com X.X.48.249
<SNIP>
```

#### IP Addresses

#### Shodan

``` shell-session
[!bash!]$ shodan domain <TARGET-DOMAIN> | grep -w "A" | cut -d"A" -f2 | cut -d" " -f7 | sort -u > IPv4s.txt
```

``` shell-session
[!bash!]$ cat IPv4s.txt | wc -l

36
```

``` shell-session
[!bash!]$ for ip in $(cat IPv4s.txt);do shodan host $ip;done

X.X.164.24
Hostnames:               vc.inlanefreight.com
Country:                 United Kingdom
Organization:            Inlanefreight
Updated:                 2020-07-23T15:26:40.055514
Number of open ports:    7

Ports:
    443/tcp  
   2222/tcp  
   5060/udp TANDBERG/4137 (X12.5.1) 
   5222/tcp  
   7001/tcp  
   7443/tcp  
   8443/tcp  

X.X.48.186
Hostnames:               mail.inlanefreight.com
Country:                 United Kingdom
Organization:            Inlanefreight
Updated:                 2020-07-08T08:36:17.845819
Number of open ports:    2

Ports:
    443/tcp  
   8888/tcp  

<SNIP>
```

#### VirusTotal

![https://academy.hackthebox.com/storage/modules/28/infra-domain-info-virustotal.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-info-virustotal.png)

![https://academy.hackthebox.com/storage/modules/28/infra-domain-c99nl.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-c99nl.png)

## Virtual Hosts

#### Hacker-Target - vHosts

![https://academy.hackthebox.com/storage/modules/28/hacker-target.png](https://academy.hackthebox.com/storage/modules/28/hacker-target.png)

#### Manual vHosts Discovery

``` shell-session
kfdccv04.inlanefreight.com X.X.48.249
ftp.inlanefreight.com X.X.48.249
rbpoint.inlanefreight.com X.X.48.249
```

## Development Platforms

![https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-devplat.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-devplat.png)

![https://academy.hackthebox.com/storage/modules/28/infra-domain-seo.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-seo.png)

## Leak Resources

``` shell-session
[!bash!]$ pigz -dc rapid7-fdns-db.json.gz | grep "target-company"

{"timestamp":"...","name":"autodiscover.swp-target-company.de","type":"a","value":"10.125.65.10"}
{"timestamp":"...","name":"booking.target-company-reisebuero.de","type":"a","value":"10.64.96.118"}
{"timestamp":"...","name":"campaigns.target-company.com","type":"cname","value":"mnto-lon0000000.com"}
{"timestamp":"...","name":"danzas-mig.target-company.com","type":"a","value":"10.9.149.36"}
{"timestamp":"...","name":"danzas-rel.target-company.com","type":"a","value":"10.9.149.73"}
{"timestamp":"...","name":"dev.target-company.foreverdigital.org","type":"a","value":"10.10.202.10"}
{"timestamp":"...","name":"ecard.target-company.com","type":"a","value":"10.26.61.134"}
{"timestamp":"...","name":"target-company-llc.at","type":"a","value":"10.9.149.49"}
{"timestamp":"...","name":"target-company-llc.biz","type":"a","value":"10.9.149.53"}
{"timestamp":"...","name":"target-company-buchen.de","type":"a","value":"10.237.138.44"}
{"timestamp":"...","name":"target-company-christmas.de","type":"a","value":"10.160.13.20"}
{"timestamp":"...","name":"target-company-christmas.de","type":"a","value":"10.160.15.20"}
{"timestamp":"...","name":"target-company-container.com","type":"a","value":"10.9.149.53"}
{"timestamp":"...","name":"target-company-cruises.com","type":"a","value":"10.10.64.166"}
<SNIP>
```

# 

# 

#### Questions

####