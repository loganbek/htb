<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/144/section/3079
// Platform Version: V1
// Module ID: 144
// Module Name: Information Gathering - Web Edition
// Module Difficulty: Easy
// Section ID: 3079
// Section Title: Creepy Crawlies
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# Creepy Crawlies

**Module Name:** Information Gathering - Web Edition **Page Number:** 15

#### 

#### INFORMATION GATHERING - WEB EDITION

# Creepy Crawlies

## Popular Web Crawlers

## Scrapy

### Installing Scrapy

``` shell-session
ndefstathiou@htb[/htb]$ pip3 install scrapy
```

### ReconSpider

``` shell-session
ndefstathiou@htb[/htb]$ wget https://academy.hackthebox.com/storage/modules/279/ReconSpider.zip
ndefstathiou@htb[/htb]$ unzip ReconSpider.zip
```

``` shell-session
ndefstathiou@htb[/htb]$ python3 ReconSpider.py http://inlanefreight.com
```

### results.json

``` json
{
    "emails": [
        "lily.floid@inlanefreight.com",
        "cvs@inlanefreight.com",
        ...
    ],
    "links": [
        "https://www.themeansar.com",
        "https://www.inlanefreight.com/index.php/offices/",
        ...
    ],
    "external_files": [
        "https://www.inlanefreight.com/wp-content/uploads/2020/09/goals.pdf",
        ...
    ],
    "js_files": [
        "https://www.inlanefreight.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2",
        ...
    ],
    "form_fields": [],
    "images": [
        "https://www.inlanefreight.com/wp-content/uploads/2021/03/AboutUs_01-1024x810.png",
        ...
    ],
    "videos": [],
    "audio": [],
    "comments": [
        "<!-- #masthead -->",
        ...
    ]
}
```

# 

# 

#### Questions

####