<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/28/section/750
// Platform Version: V1
// Module ID: 28
// Module Name: OSINT: Corporate Recon
// Module Difficulty: Hard
// Section ID: 750
// Section Title: OSINT Methodology
// Page Title: OSINT: Corporate Recon
// Page Number: 02
-->

# OSINT Methodology

**Module Name:** OSINT: Corporate Recon **Page Number:** 02

#### OSINT: CORPORATE RECON

# OSINT Methodology

![https://academy.hackthebox.com/storage/modules/28/osint-structure4.png](https://academy.hackthebox.com/storage/modules/28/osint-structure4.png)

![https://academy.hackthebox.com/storage/modules/28/osint-cycle.png](https://academy.hackthebox.com/storage/modules/28/osint-cycle.png)

## Workflow

#### 1. Research Browser

#### 2. Resource Browser

![https://academy.hackthebox.com/storage/modules/28/infra-emails.png](https://academy.hackthebox.com/storage/modules/28/infra-emails.png)

## Logging

![https://academy.hackthebox.com/storage/modules/28/history-master1.png](https://academy.hackthebox.com/storage/modules/28/history-master1.png)

#### History CSV

``` shell-session
ndefstathiou@htb[/htb]$ head history.csv

visit-time,title,visit-count,typed-count,id,url
1607535086780,Contact – Inlanefreight,1,,tgIKscfGm4PL,https://www.inlanefreight.com/index.php/contact/
1607535085390,News – Inlanefreight,1,,6S_PX7_woFpV,https://www.inlanefreight.com/index.php/news/
1607535084030,Offices – Inlanefreight,1,,UNWCj5EDwP2e,https://www.inlanefreight.com/index.php/offices/
1607535081962,Career – Inlanefreight,1,,6r25bcvsVT21,https://www.inlanefreight.com/index.php/career/
1607535044507,Inlanefreight,2,,6bhPbKqKh9He,https://www.inlanefreight.com/
1607535044304,https://inlanefreight.com/,2,,Od54NGgg3cyS,https://inlanefreight.com/
1607535043995,http://inlanefreight.com/,2,,sfBT401xyE7c,http://inlanefreight.com/
```

#### Install NPM, JQ, and Csvtojson

``` shell-session
ndefstathiou@htb[/htb]$ sudo apt install npm jq -y && sudo npm install -g csvtojson
```

#### Sorted History View

``` shell-session
ndefstathiou@htb[/htb]$ csvtojson < history.csv | jq . 

[                                                       
  { 
    "visit-time": "1607535086780",
    "title": "Contact – Inlanefreight",
    "visit-count": "1",                                 
    "typed-count": "", 
    "id": "tgIKscfGm4PL",
    "url": "https://www.inlanefreight.com/index.php/contact/"
  },                                                    
  { 
    "visit-time": "1607535085390",
    "title": "News – Inlanefreight",
    "visit-count": "1",                                 
    "typed-count": "", 
    "id": "6S_PX7_woFpV",
    "url": "https://www.inlanefreight.com/index.php/news/"
  },                                                    
  {
    "visit-time": "1607535084030",
    "title": "Offices – Inlanefreight",
    "visit-count": "1",
    "typed-count": "",
    "id": "UNWCj5EDwP2e",
    "url": "https://www.inlanefreight.com/index.php/offices/"
  }, 
  <...SNIP...>
]
```

#### SingleFile

![https://academy.hackthebox.com/storage/modules/28/singlefile.png](https://academy.hackthebox.com/storage/modules/28/singlefile.png)

``` shell-session
ndefstathiou@htb[/htb]$ cat *.html | html2text | grep "Emma Williams"

Emma Williams  emma.williams@inlanefreight.com
```

####