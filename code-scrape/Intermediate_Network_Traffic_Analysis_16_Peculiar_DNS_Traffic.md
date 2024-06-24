<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/229/section/2467
// Platform Version: V1
// Module ID: 229
// Module Name: Intermediate Network Traffic Analysis
// Module Difficulty: Easy
// Section ID: 2467
// Section Title: Peculiar DNS Traffic
// Page Title: Hack The Box - Academy
// Page Number: 16
-->

# Peculiar DNS Traffic

**Module Name:** Intermediate Network Traffic Analysis **Page Number:** 16

#### 

#### INTERMEDIATE NETWORK TRAFFIC ANALYSIS

# Peculiar DNS Traffic

## DNS Queries

#### DNS Reverse Lookups/Queries

## DNS Record Types

## Finding DNS Enumeration Attempts

## Finding DNS Tunneling

``` shell-session
ndefstathiou@htb[/htb]$ echo 'VTBaU1EyVXhaSFprVjNocldETnNkbVJXT1cxaU0wb3pXVmhLYTFneU1XeFlNMUp2WVZoT1ptTklTbXhrU0ZJMVdETkNjMXBYUm5wYQpXREJMQ2c9PQo=' | base64 -d 

U0ZSQ2UxZHZkV3hrWDNsdmRWOW1iM0ozWVhKa1gyMWxYM1JvYVhOZmNISmxkSFI1WDNCc1pXRnpaWDBLCg==
```

``` shell-session
ndefstathiou@htb[/htb]$ echo 'VTBaU1EyVXhaSFprVjNocldETnNkbVJXT1cxaU0wb3pXVmhLYTFneU1XeFlNMUp2WVZoT1ptTklTbXhrU0ZJMVdETkNjMXBYUm5wYQpXREJMQ2c9PQo=' | base64 -d | base64 -d | base64 -d
```

## The Interplanetary File System and DNS Tunneling

# 

# 

#### Questions

####