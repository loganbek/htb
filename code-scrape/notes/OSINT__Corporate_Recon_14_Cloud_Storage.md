<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/28/section/746
// Platform Version: V1
// Module ID: 28
// Module Name: OSINT: Corporate Recon
// Module Difficulty: Hard
// Section ID: 746
// Section Title: Cloud Storage
// Page Title: Hack The Box - Academy
// Page Number: 14
-->

# Cloud Storage

**Module Name:** OSINT: Corporate Recon **Page Number:** 14

#### 

#### OSINT: CORPORATE RECON

# Cloud Storage

![https://academy.hackthebox.com/storage/modules/28/infra-cloud.png](https://academy.hackthebox.com/storage/modules/28/infra-cloud.png)

#### IP2Provider.py - Installation

``` shell-session
[!bash!]$ git clone https://github.com/oldrho/ip2provider.git
[!bash!]$ cd ip2provider
[!bash!]$ pip3 install -r requirements.txt
```

#### IP2Provider.py - Usage

``` shell-session
[!bash!]$ cat Target_Company.IPv4s | ./ip2provider.py

X.X.X.20 digitalocean unknown unknown
X.X.X.66 aws AMAZON us-east-1
X.X.X.16 aws AMAZON eu-central-1
X.X.X.24 aws AMAZON eu-central-1
X.X.X.27 aws AMAZON eu-west-1
X.X.X.17 aws AMAZON eu-central-1
<SNIP>
```

## Home Page

![https://academy.hackthebox.com/storage/modules/28/infra-cloud-homepage-link.png](https://academy.hackthebox.com/storage/modules/28/infra-cloud-homepage-link.png)

![https://academy.hackthebox.com/storage/modules/28/infra-cloud-searchcode-homepage.png](https://academy.hackthebox.com/storage/modules/28/infra-cloud-searchcode-homepage.png)

## Search Engines

![https://academy.hackthebox.com/storage/modules/28/infra-cloud-google.png](https://academy.hackthebox.com/storage/modules/28/infra-cloud-google.png)

![https://academy.hackthebox.com/storage/modules/28/infra-cloud-greyhatwarfare.png](https://academy.hackthebox.com/storage/modules/28/infra-cloud-greyhatwarfare.png)

## Development Platforms

![https://academy.hackthebox.com/storage/modules/28/infra-cloud-devplat.png](https://academy.hackthebox.com/storage/modules/28/infra-cloud-devplat.png)

![https://academy.hackthebox.com/storage/modules/28/infra-cloud-github.png](https://academy.hackthebox.com/storage/modules/28/infra-cloud-github.png)

## Leak Resources

``` shell-session
[!bash!]$ pigz -dc rapid7-fdns-db.json.gz | grep "target-company" | grep "core.microsoft.net\|s3.amazonaws.com\|s3-*.amazonaws.com\|googleapis.com/storage/v1/b/"

{"timestamp":"...","name":"target-company.s3.amazonaws.com","type":"cname","value":"s3-1-w.amazonaws.com"}
{"timestamp":"...","name":"target-company.s3.amazonaws.com","type":"cname","value":"s3-1-w.amazonaws.com"}
{"timestamp":"...","name":"cn-api.target-company.s3.amazonaws.com","type":"cname","value":"s3-1-w.amazonaws.com"}
{"timestamp":"...","name":"com-target-company.s3.amazonaws.com","type":"cname","value":"s3-1-w.amazonaws.com"}
{"timestamp":"...","name":"dev.target-company.core.microsoft.net","type":"a","value":"X.X.X.127"}
<SNIP>
```

## Possible Protections

# 

# 

#### Questions

####