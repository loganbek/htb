<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/28/section/748
// Platform Version: V1
// Module ID: 28
// Module Name: OSINT: Corporate Recon
// Module Difficulty: Hard
// Section ID: 748
// Section Title: Technologies in Use
// Page Title: OSINT: Corporate Recon
// Page Number: 18
-->

# Technologies in Use

**Module Name:** OSINT: Corporate Recon **Page Number:** 18

#### OSINT: CORPORATE RECON

# Technologies in Use

![https://academy.hackthebox.com/storage/modules/28/infra-techs.png](https://academy.hackthebox.com/storage/modules/28/infra-techs.png)

## Home Page

#### BuiltWith

![https://academy.hackthebox.com/storage/modules/28/builtwith.png](https://academy.hackthebox.com/storage/modules/28/builtwith.png)

## Search Engines

#### Shodan - Domain Information

``` shell-session
ndefstathiou@htb[/htb]$ shodan domain target-company.com

TARGET-COMPANY.COM

                         A      10.19.14.43
campaigns                CNAME  isp-id077411.com
ecard                    A      10.19.14.134
pages                    CNAME  target-company.isp.com
solutions                CNAME  unbouncepages.com
staging                  A      10.19.14.217
www                      CNAME  www-en.tar-comp.com
www-mig                  A      10.19.14.45
www-rel                  A      10.19.14.68
www2                     CNAME  www2.tar-comp.com
```

#### Shodan - Additional Domain Information

``` shell-session
ndefstathiou@htb[/htb]$ shodan domain tar-comp.com

TAR-COMP.COM

                         A      10.19.14.53
                         MX     mx3.mailprovider.com
                         MX     mx4.mailprovider.com
                         NS     ns1.ns-provider.net
                         NS     ns6.ns-provider.net
                         NS     ns2.ns-provider.net
                         NS     ns5.ns-provider.net
                         SOA    ns1.ns-provider.net
prod                     A      10.19.14.37
prod                     AAAA   d34d:b33f:4:3::37
prod-mig                 A      10.19.14.38
prod-rel                 A      10.19.14.72
prod-rel                 AAAA   2a04:1447:4:3::72
training                 A      10.19.14.50
hip                      A      10.7.148.165
hleforms                 A      10.7.148.167
hod                      A      10.7.148.130
hody81                   CNAME  hody.tar-comp.com
kf123t01-1               A      10.7.148.233
kf123t01-1               A      10.7.148.231
mail-archive             A      10.7.148.134
sap                      A      10.7.148.161
www                      CNAME  www-en.hlcl.com
www-de                   A      10.19.14.49
www-de                   AAAA   d34d:b33f:4:3::49
www-en                   A      10.19.14.43
www-en                   AAAA   d34d:b33f:4:3::43
www2                     A      10.19.14.44
www2                     AAAA   d34d:b33f:4:3::44
```

#### Shodan - Search the Database

``` shell-session
ndefstathiou@htb[/htb]$ shodan search target-company | cut -d" " -f1-3

10.29.26.251    8500    ec2-10-29-46-251.us-east-2.compute.amazonaws.com      HTTP/1.1 302 Found\r\nServer:
10.65.126.101   25      target-company.de 220 target-company.de ESMTP
10.62.241.109   8081    3ef15ea9.ip4.static.isp-provider.com    HTTP/1.1 200 OK\r\nCache-Control:
10.120.232.207  80      target-company-test.tracker.com    HTTP/1.1 302 Found\r\nDate:
10.54.2.133     23              C i s c o  S y s t e m s\r\n     ROUTER INTERNET\r\n
10.11.184.41    80              HTTP/1.1 301 Moved
10.11.184.41    443             HTTP/1.1 200 OK\r\nServer:
```

#### Additional Attack Vector - Login

![https://academy.hackthebox.com/storage/modules/28/tech_login.png](https://academy.hackthebox.com/storage/modules/28/tech_login.png)

# 

# 

#### Questions

####