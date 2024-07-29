<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/28/section/747
// Platform Version: V1
// Module ID: 28
// Module Name: OSINT: Corporate Recon
// Module Difficulty: Hard
// Section ID: 747
// Section Title: Email Addresses
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# Email Addresses

**Module Name:** OSINT: Corporate Recon **Page Number:** 15

#### 

#### OSINT: CORPORATE RECON

# Email Addresses

![https://academy.hackthebox.com/storage/modules/28/infra-emails.png](https://academy.hackthebox.com/storage/modules/28/infra-emails.png)

## Home Page

![https://academy.hackthebox.com/storage/modules/28/infra-domain-emails-contact.png](https://academy.hackthebox.com/storage/modules/28/infra-domain-emails-contact.png)

## Social Networks

![https://academy.hackthebox.com/storage/modules/28/infra-emails-social.png](https://academy.hackthebox.com/storage/modules/28/infra-emails-social.png)

#### Email Reputation - Emailrep.io

``` shell-session
ndefstathiou@htb[/htb]$ curl -s emailrep.io/info@target-company.com

{
  "email": "info@target-company.com",
  "reputation": "low",
  "suspicious": false,
  "references": 1,
  "details": {
    "blacklisted": false,
    "malicious_activity": false,
    "malicious_activity_recent": false,
    "credentials_leaked": false,
    "credentials_leaked_recent": false,
    "data_breach": false,
    "first_seen": "never",
    "last_seen": "never",
    "domain_exists": true,
    "domain_reputation": "low",
    "new_domain": false,
    "days_since_domain_creation": null,
    "suspicious_tld": false,
    "spam": false,
    "free_provider": false,
    "disposable": false,
    "deliverable": true,
    "accept_all": true,
    "valid_mx": true,
    "primary_mx": "mx-4.mailprovider.com",
    "spoofable": true,
    "spf_strict": true,
    "dmarc_enforced": false,
    "profiles": [
      "twitter"
    ]
  }
}
```

## Search Engines

![https://academy.hackthebox.com/storage/modules/28/infra-emails-google.png](https://academy.hackthebox.com/storage/modules/28/infra-emails-google.png)

#### TheHarvester

``` shell-session
ndefstathiou@htb[/htb]$ python3 theHarvester.py -d inlanefreight.com -b google,hunter,netcraft,spyse,twitter,dnsdumpster

*******************************************************************
*  _   _                                            _             *
* | |_| |__   ___    /\  /\__ _ _ ____   _____  ___| |_ ___ _ __  *
* | __|  _ \ / _ \  / /_/ / _` | '__\ \ / / _ \/ __| __/ _ \ '__| *
* | |_| | | |  __/ / __  / (_| | |   \ V /  __/\__ \ ||  __/ |    *
*  \__|_| |_|\___| \/ /_/ \__,_|_|    \_/ \___||___/\__\___|_|    *
*                                                                 *
* theHarvester 3.2.0dev3                                          *
* Coded by Christian Martorella                                   *
* Edge-Security Research                                          *
* cmartorella@edge-security.com                                   *
*                                                                 *
******************************************************************* 

[*] Target: inlanefreight.com 

[*] Searching Dnsdumpster. 
[*] Searching Netcraft. 
Google is blocking your ip and the workaround, returning
	Searching 0 results.
	Searching 100 results.
	Searching 200 results.
[*] Searching Google. 
	Searching 0 results.
	Searching 100 results.
	Searching 200 results.
	
[*] No IPs found.

[*] Emails found: 9
---------------------
hlwire@inlanefreight.com
hru@inlanefreight.com
info@inlanefreight.com
ir@inlanefreight.com
joe.spring@inlanefreight.com
johan.troe@inlanefreight.com
john.mcleen@inlanefreight.com
last@inlanefreight.com
jack.daniels@inlanefreight.com

[*] Hosts found: 78
---------------------
autodiscover-add.inlanefreight.com:X.X.145.35
autodiscover.ext.inlanefreight.com:X.X.145.35
autodiscover.inlanefreight.com:X.X.145.34
certupd.inlanefreight.com:X.X.48.117
citrix-dev.inlanefreight.com:X.X.48.160
citrix.inlanefreight.com:X.X.48.207
crmtest.inlanefreight.com:X.X.48.128
customs.inlanefreight.com:X.X.141.19
dme.inlanefreight.com:X.X.48.148
<SNIP>
```

## Development Platforms

![https://academy.hackthebox.com/storage/modules/28/infra-emails-google-dev.png](https://academy.hackthebox.com/storage/modules/28/infra-emails-google-dev.png)

![https://academy.hackthebox.com/storage/modules/28/infra-emails-google-graphics.png](https://academy.hackthebox.com/storage/modules/28/infra-emails-google-graphics.png)

## Leak Resources

![https://academy.hackthebox.com/storage/modules/28/infra-emails-gitlab.png](https://academy.hackthebox.com/storage/modules/28/infra-emails-gitlab.png)

#### H8mail - Usage

``` shell-session
ndefstathiou@htb[/htb]$ h8mail -c h8mail_config.ini -t first.lastname@target-company.com

                  Official h8mail posts:
                  https://khast3x.club/tags/h8mail/

          Version 2.5.5 - "ROCKSMASSON.5"

        ._____. ._____.     ;____________;
        | ._. | | ._. |     ;   h8mail   ;
        | !_| |_|_|_! |     ;------------;
        !___| |_______!  Heartfelt Email OSINT
        .___|_|_| |___.    Use responsibly
        | ._____| |_. | ;____________________;
        | !_! | | !_! | ; github.com/khast3x ;
        !_____! !_____! ;--------------------;

[>] h8mail is up to date
[~] Removing duplicates
[>] Targets:
[>] first.lastname@target-company.com
[~] scylla.so is down, skipping
[~] Target factory started for first.lastname@target-company.com
[~] [first.lastname@target-company.com]>[hunter.io public]
[>] Found 0 related emails for first.lastname@target-company.com using hunter.io (public)
[~] [first.lastname@target-company.com]>[hunter.io private]
[>] Found 0 related emails for first.lastname@target-company.com using hunter.io (private)
[~] [first.lastname@target-company.com]>[leaklookup public]
[>] Found 7 entries for first.lastname@target-company.com using LeakLookup (public)

 __________________________________________________________________________________________

[>] Showing results for first.lastname@target-company.com
LEAKLOOKUP_PUB |     first.lastname@target-company.com > antipublic-combo
LEAKLOOKUP_PUB |     first.lastname@target-company.com > collection-4-eu
LEAKLOOKUP_PUB |     first.lastname@target-company.com > collection-4-u
LEAKLOOKUP_PUB |     first.lastname@target-company.com > exploit.in
LEAKLOOKUP_PUB |     first.lastname@target-company.com > imesh.com
LEAKLOOKUP_PUB |     first.lastname@target-company.com > myspace.com
LEAKLOOKUP_PUB |     first.lastname@target-company.com > onlinerspambot
__________________________________________________________________________________________


                                   Session Recap:
                 Target                  |                   Status
__________________________________________________________________________________________

   first.lastname@target-company.com     |          Breach Found (7 elements)
__________________________________________________________________________________________

Execution time (seconds):   17.408742904663086
```

![https://academy.hackthebox.com/storage/modules/28/haveibeenpwned.png](https://academy.hackthebox.com/storage/modules/28/haveibeenpwned.png)

# 

# 

#### Questions

####