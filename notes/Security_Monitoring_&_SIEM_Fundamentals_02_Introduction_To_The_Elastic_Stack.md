<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/211/section/2273
// Platform Version: V1
// Module ID: 211
// Module Name: Security Monitoring & SIEM Fundamentals
// Module Difficulty: Easy
// Section ID: 2273
// Section Title: Introduction To The Elastic Stack
// Page Title: Hack The Box - Academy
// Page Number: 02
-->

# Introduction To The Elastic Stack

**Module Name:** Security Monitoring & SIEM Fundamentals **Page Number:** 02

#### 

#### SECURITY MONITORING & SIEM FUNDAMENTALS

# Introduction To The Elastic Stack

## What Is The Elastic Stack?

![https://academy.hackthebox.com/storage/modules/211/elastic.png](https://academy.hackthebox.com/storage/modules/211/elastic.png)

![https://academy.hackthebox.com/storage/modules/211/elastic1.png](https://academy.hackthebox.com/storage/modules/211/elastic1.png)

![https://academy.hackthebox.com/storage/modules/211/beats1.png](https://academy.hackthebox.com/storage/modules/211/beats1.png)

![https://academy.hackthebox.com/storage/modules/211/beats2.png](https://academy.hackthebox.com/storage/modules/211/beats2.png)

## The Elastic Stack As A SIEM Solution

![https://academy.hackthebox.com/storage/modules/211/discover.png](https://academy.hackthebox.com/storage/modules/211/discover.png)

``` shell-session
event.code:4625
```

``` shell-session
"svc-sql1"
```

``` shell-session
event.code:4625 AND winlog.event_data.SubStatus:0xC0000072
```

``` shell-session
event.code:4625 AND winlog.event_data.SubStatus:0xC0000072 AND @timestamp >= "2023-03-03T00:00:00.000Z" AND @timestamp <= "2023-03-06T23:59:59.999Z"
```

``` shell-session
event.code:4625 AND user.name: admin*
```

## How To Identify The Available Data

``` shell-session
event.code:4625 AND winlog.event_data.SubStatus:0xC0000072 AND @timestamp >= "2023-03-03T00:00:00.000Z" AND @timestamp <= "2023-03-06T23:59:59.999Z"
```

![https://academy.hackthebox.com/storage/modules/211/discover1.png](https://academy.hackthebox.com/storage/modules/211/discover1.png)

![https://academy.hackthebox.com/storage/modules/211/discover2.png](https://academy.hackthebox.com/storage/modules/211/discover2.png)

## The Elastic Common Schema (ECS)

# 

# 

#### Questions

####