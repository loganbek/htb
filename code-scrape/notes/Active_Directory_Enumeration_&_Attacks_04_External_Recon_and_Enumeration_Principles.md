<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/143/section/1264
// Platform Version: V1
// Module ID: 143
// Module Name: Active Directory Enumeration & Attacks
// Module Difficulty: Medium
// Section ID: 1264
// Section Title: External Recon and Enumeration Principles
// Page Title: Active Directory Enumeration & Attacks
// Page Number: 04
-->

# External Recon and Enumeration Principles

**Module Name:** Active Directory Enumeration & Attacks **Page Number:** 04

#### ACTIVE DIRECTORY ENUMERATION & ATTACKS

# External Recon and Enumeration Principles

## What Are We Looking For?

## Where Are We Looking?

### Finding Address Spaces

![https://academy.hackthebox.com/storage/modules/143/bgp-toolkit.png](https://academy.hackthebox.com/storage/modules/143/bgp-toolkit.png)

### DNS

#### Viewdns.info

![https://academy.hackthebox.com/storage/modules/143/viewdnsinfo.png](https://academy.hackthebox.com/storage/modules/143/viewdnsinfo.png)

### Public Data

### Sharepoint Admin Job Listing

![https://academy.hackthebox.com/storage/modules/143/spjob2.png](https://academy.hackthebox.com/storage/modules/143/spjob2.png)

## Overarching Enumeration Principles

## Example Enumeration Process

#### Check for ASN/IP & Domain Data

![https://academy.hackthebox.com/storage/modules/143/BGPhe-inlane.png](https://academy.hackthebox.com/storage/modules/143/BGPhe-inlane.png)

#### Viewdns Results

![https://academy.hackthebox.com/storage/modules/143/viewdns-results.png](https://academy.hackthebox.com/storage/modules/143/viewdns-results.png)

``` shell-session
[!bash!]$ nslookup ns1.inlanefreight.com

Server:		192.168.186.1
Address:	192.168.186.1#53

Non-authoritative answer:
Name:	ns1.inlanefreight.com
Address: 178.128.39.165

nslookup ns2.inlanefreight.com
Server:		192.168.86.1
Address:	192.168.86.1#53

Non-authoritative answer:
Name:	ns2.inlanefreight.com
Address: 206.189.119.186
```

#### Hunting For Files

![https://academy.hackthebox.com/storage/modules/143/google-dorks.png](https://academy.hackthebox.com/storage/modules/143/google-dorks.png)

#### Hunting E-mail Addresses

![https://academy.hackthebox.com/storage/modules/143/intext-dork.png](https://academy.hackthebox.com/storage/modules/143/intext-dork.png)

#### E-mail Dork Results

![https://academy.hackthebox.com/storage/modules/143/ilfreightemails.png](https://academy.hackthebox.com/storage/modules/143/ilfreightemails.png)

#### Username Harvesting

#### Credential Hunting

``` shell-session
[!bash!]$ sudo python3 dehashed.py -q inlanefreight.local -p

id : 5996447501
email : roger.grimes@inlanefreight.local
username : rgrimes
password : Ilovefishing!
hashed_password : 
name : Roger Grimes
vin : 
address : 
phone : 
database_name : ModBSolutions

id : 7344467234
email : jane.yu@inlanefreight.local
username : jyu
password : Starlight1982_!
hashed_password : 
name : Jane Yu
vin : 
address : 
phone : 
database_name : MyFitnessPal

<SNIP>
```

# 

# 

#### Questions

####