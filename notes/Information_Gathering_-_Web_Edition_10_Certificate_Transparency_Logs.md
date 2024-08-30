<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/144/section/1258
// Platform Version: V1
// Module ID: 144
// Module Name: Information Gathering - Web Edition
// Module Difficulty: Easy
// Section ID: 1258
// Section Title: Certificate Transparency Logs
// Page Title: Information Gathering - Web Edition
// Page Number: 10
-->

# Certificate Transparency Logs

**Module Name:** Information Gathering - Web Edition **Page Number:** 10

#### INFORMATION GATHERING - WEB EDITION

# Certificate Transparency Logs

## What are Certificate Transparency Logs?

## How Certificate Transparency Logs Work

### The Merkle Tree Structure

## CT Logs and Web Recon

## Searching CT Logs

### crt.sh lookup

``` shell-session
ndefstathiou@htb[/htb]$ curl -s "https://crt.sh/?q=facebook.com&output=json" | jq -r '.[]
 | select(.name_value | contains("dev")) | .name_value' | sort -u
 
*.dev.facebook.com
*.newdev.facebook.com
*.secure.dev.facebook.com
dev.facebook.com
devvm1958.ftw3.facebook.com
facebook-amex-dev.facebook.com
facebook-amex-sign-enc-dev.facebook.com
newdev.facebook.com
secure.dev.facebook.com
```

####