<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/28/section/202
// Platform Version: V1
// Module ID: 28
// Module Name: OSINT: Corporate Recon
// Module Difficulty: Hard
// Section ID: 202
// Section Title: Public Domain Records
// Page Title: Hack The Box - Academy
// Page Number: 12
-->

# Public Domain Records

**Module Name:** OSINT: Corporate Recon **Page Number:** 12

#### 

#### OSINT: CORPORATE RECON

# Public Domain Records

![https://academy.hackthebox.com/storage/modules/28/infra-pub-records.png](https://academy.hackthebox.com/storage/modules/28/infra-pub-records.png)

## Search Engines

#### 1. Netblocks / CIDR

#### Host

``` shell-session
ndefstathiou@htb[/htb]$ host www.inlanefreight.com

www.inlanefreight.com has address 134.209.24.248
www.inlanefreight.com has IPv6 address 2a03:b0c0:1:e0::32c:b001
```

#### Whois

``` shell-session
ndefstathiou@htb[/htb]$ whois 134.209.24.248

% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.arin.net

inetnum:      134.0.0.0 - 134.255.255.255
organisation: Administered by ARIN
status:       LEGACY

whois:        whois.arin.net

changed:      1993-05
source:       IANA

# whois.arin.net

NetRange:       134.209.0.0 - 134.209.255.255
CIDR:           134.209.0.0/16
NetName:        DIGITALOCEAN-134-209-0-0
NetHandle:      NET-134-209-0-0-1
Parent:         NET134 (NET-134-0-0-0-0)
NetType:        Direct Allocation                                               
OriginAS:       AS14061
```

#### WHOIS - MNT-REF

``` shell-session
ndefstathiou@htb[/htb]$ whois -B --sources RIPE,ARIN target-company


% Information related to 'ORG-ZZ000-RIPE'

organisation:   ORG-ZZ000-RIPE
org-name:       Target-Company LLC
country:        CO
org-type:       XXX
address:        Street 00
address:        00000
address:        City
address:        COUNTRY
phone:          +00000000000
fax-no:         +00000000000
mnt-ref:        EU-IBM-XXX-0000
mnt-ref:        HN0000-MNT
mnt-ref:        AS0000-MNT
mnt-ref:        RIPE-XXX-ZZ-MNT
mnt-by:         RIPE-XXX-ZZ-MNT
mnt-by:         HL0000-MNT
abuse-c:        AHA000-RIPE
created:        2010-01-12T13:57:44Z
last-modified:  2021-10-14T12:14:22Z
source:         RIPE
e-mail:         full.name@target-company.com

% Information related to 'AHA000-RIPE'

role:           ABUSE Target-Company LLC
address:        Street 00, 00000 City, Country
e-mail:         dns.admin@target-company.com
abuse-mailbox:  dns.admin@target-company.com
nic-hdl:        AHA000-RIPE
mnt-by:         RK00000-MNT
created:        2014-11-15T11:54:10Z
last-modified:  2014-11-15T11:54:10Z
source:         RIPE

% Information related to 'HN0000-RIPE'

role:           Target-Company NOC
address:        Street 00, 00000 City, Country
e-mail:         dns.admin@target-company.com
nic-hdl:        HN0000-RIPE
mnt-by:         AA00000-MNT
created:        2019-04-07T06:44:22Z
last-modified:  2019-04-07T06:44:22Z
source:         RIPE
```

#### WHOIS - Netblocks

``` shell-session
ndefstathiou@htb[/htb]$ whois -h whois.arin.net target-company | grep -v "#" | sed -r '/^\s*$/d'

Target-Company (C00000) 10-10-60-68 (NET-10-10-60-68-1) 10.10.60.68 - 10.10.60.69
Target-Company (C00000) 10-10-60-70 (NET-10-10-60-70-1) 10.10.60.70 - 10.10.60.71
```

#### 2. ASN

![https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-asn.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-asn.png)

![https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-icann.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-icann.png)

#### 3. DNS Servers

#### DNS Records - Inlanefreight.com

``` shell-session
ndefstathiou@htb[/htb]$ dig any inlanefreight.com

<SNIP>
;; ANSWER SECTION:
inlanefreight.com.	7191	IN	A	X.X.149.43
inlanefreight.com.	7191	IN	MX	10 cluster-j.inlanefreight.com.
inlanefreight.com.	7191	IN	MX	10 cluster-e.inlanefreight.com.
inlanefreight.com.	7191	IN	TXT	"v=spf1 include:inlanefreight.com ?all"
inlanefreight.com.	7191	IN	TXT	"nFM+YEvc/npla0It+GWBy9tZgud2Z3Q2i/bFxrHRfbzv1G09Mx7pB9=="
inlanefreight.com.	7191	IN	TXT	"MS=ms80134"
inlanefreight.com.	7191	IN	SOA	ns1.inlanefreight.com. abuse.infreight.com. 2012110855 21600 3600 604800 600
inlanefreight.com.	7190	IN	NS	ns1.inlanefreight.com.
inlanefreight.com.	7190	IN	NS	ns2.inlanefreight.com.
<SNIP>
```

#### DNS Records - Infreight.com

``` shell-session
ndefstathiou@htb[/htb]$ dig any infreight.com

<SNIP>
;; ANSWER SECTION:
inlanefreight.com.		7200	IN	A	134.209.24.248
inlanefreight.com.		7200	IN	SOA	ns1.infreight.com. adm.infreight.com. 2012111147 21600 3600 604800 600
inlanefreight.com.		7200	IN	MX	10 cluster-e.inlanefreight.com.
inlanefreight.com.		7200	IN	MX	10 cluster-j.inlanefreight.com.
inlanefreight.com.		7200	IN	TXT	"MS=ms90101"
inlanefreight.com.		7200	IN	TXT	"v=spf1 include:mailcontrol.inlanefreight.com include:mailing.inlanefreight.com ?all"
inlanefreight.com.		7200	IN	TXT	Here is the [ARIN list](https://www.arin.net/resources/registry/whois/rws/cli/) of other flags we can use to get more information from the maintainer objects:"8MdY05nra9NlO2voN5icWjuhq0za+5JvpM3xAgt/gg=="
inlanefreight.com.		7200	IN	NS	ns3.inlanefreight.com.
inlanefreight.com.		7200	IN	NS	ns1.inlanefreight.com.
inlanefreight.com.		7200	IN	NS	ns2.inlanefreight.com.
<SNIP>
```

#### DNSdumpster - Records

![https://academy.hackthebox.com/storage/modules/28/dnsdumpster_records.png](https://academy.hackthebox.com/storage/modules/28/dnsdumpster_records.png)

#### DNSdumpster - Locations

![https://academy.hackthebox.com/storage/modules/28/dnsdumpster2.png](https://academy.hackthebox.com/storage/modules/28/dnsdumpster2.png)

#### DNSdumpster - Hosts

![https://academy.hackthebox.com/storage/modules/28/dnsdumpster_hosts.png](https://academy.hackthebox.com/storage/modules/28/dnsdumpster_hosts.png)

#### DNSdumpster - Domain Map

![https://academy.hackthebox.com/storage/modules/28/dnsdumpster.png](https://academy.hackthebox.com/storage/modules/28/dnsdumpster.png)

#### 4. Mail Servers

#### MXtoolbox - Open Relay Check

![https://academy.hackthebox.com/storage/modules/28/mxtools.png](https://academy.hackthebox.com/storage/modules/28/mxtools.png)

## Development Platforms

![https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-devplat.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-structure-devplat.png)

# 

# 

#### Questions

####