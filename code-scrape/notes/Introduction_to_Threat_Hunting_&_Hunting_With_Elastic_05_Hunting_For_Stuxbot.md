<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/214/section/2285
// Platform Version: V1
// Module ID: 214
// Module Name: Introduction to Threat Hunting & Hunting With Elastic
// Module Difficulty: Medium
// Section ID: 2285
// Section Title: Hunting For Stuxbot
// Page Title: Hack The Box - Academy
// Page Number: 05
-->

# Hunting For Stuxbot

**Module Name:** Introduction to Threat Hunting & Hunting With Elastic **Page Number:** 05

#### 

#### INTRODUCTION TO THREAT HUNTING & HUNTING WITH ELASTIC Mini-Module

# Hunting For Stuxbot

## Threat Intelligence Report: Stuxbot

![https://academy.hackthebox.com/storage/modules/214/lifecycle.png](https://academy.hackthebox.com/storage/modules/214/lifecycle.png)

![https://academy.hackthebox.com/storage/modules/214/email.png](https://academy.hackthebox.com/storage/modules/214/email.png)

## Hunting For Stuxbot With The Elastic Stack

![https://academy.hackthebox.com/storage/modules/214/hunt22.png](https://academy.hackthebox.com/storage/modules/214/hunt22.png)

``` shell-session
event.code:15 AND file.name:*invoice.one
```

![https://academy.hackthebox.com/storage/modules/214/hunt1.png](https://academy.hackthebox.com/storage/modules/214/hunt1.png)

``` shell-session
event.code:11 AND file.name:invoice.one*
```

![https://academy.hackthebox.com/storage/modules/214/hunt2.png](https://academy.hackthebox.com/storage/modules/214/hunt2.png)

``` shell-session
source.ip:192.168.28.130 AND dns.question.name:*
```

![https://academy.hackthebox.com/storage/modules/214/hunt3.png](https://academy.hackthebox.com/storage/modules/214/hunt3.png)

![https://academy.hackthebox.com/storage/modules/214/hunt23.png](https://academy.hackthebox.com/storage/modules/214/hunt23.png)

![https://academy.hackthebox.com/storage/modules/214/hunt24.png](https://academy.hackthebox.com/storage/modules/214/hunt24.png)

![https://academy.hackthebox.com/storage/modules/214/hunt4.png](https://academy.hackthebox.com/storage/modules/214/hunt4.png)

![https://academy.hackthebox.com/storage/modules/214/hunt5.png](https://academy.hackthebox.com/storage/modules/214/hunt5.png)

![https://academy.hackthebox.com/storage/modules/214/hunt6.png](https://academy.hackthebox.com/storage/modules/214/hunt6.png)

![https://academy.hackthebox.com/storage/modules/214/hunt25.png](https://academy.hackthebox.com/storage/modules/214/hunt25.png)

``` shell-session
event.code:1 AND process.command_line:*invoice.one*
```

![https://academy.hackthebox.com/storage/modules/214/hunt7.png](https://academy.hackthebox.com/storage/modules/214/hunt7.png)

``` shell-session
event.code:1 AND process.parent.name:"ONENOTE.EXE"
```

![https://academy.hackthebox.com/storage/modules/214/hunt8.png](https://academy.hackthebox.com/storage/modules/214/hunt8.png)

![https://academy.hackthebox.com/storage/modules/214/hunt9.png](https://academy.hackthebox.com/storage/modules/214/hunt9.png)

``` shell-session
event.code:1 AND process.parent.command_line:*invoice.bat*
```

![https://academy.hackthebox.com/storage/modules/214/hunt10.png](https://academy.hackthebox.com/storage/modules/214/hunt10.png)

![https://academy.hackthebox.com/storage/modules/214/hunt28.png](https://academy.hackthebox.com/storage/modules/214/hunt28.png)

``` shell-session
process.pid:"9944" and process.name:"powershell.exe"
```

![https://academy.hackthebox.com/storage/modules/214/hunt12.png](https://academy.hackthebox.com/storage/modules/214/hunt12.png)

![https://academy.hackthebox.com/storage/modules/214/hunt13.png](https://academy.hackthebox.com/storage/modules/214/hunt13.png)

![https://academy.hackthebox.com/storage/modules/214/hunt14.png](https://academy.hackthebox.com/storage/modules/214/hunt14.png)

![https://academy.hackthebox.com/storage/modules/214/hunt15.png](https://academy.hackthebox.com/storage/modules/214/hunt15.png)

![https://academy.hackthebox.com/storage/modules/214/hunt16.png](https://academy.hackthebox.com/storage/modules/214/hunt16.png)

``` shell-session
process.name:"default.exe"
```

![https://academy.hackthebox.com/storage/modules/214/hunt17.png](https://academy.hackthebox.com/storage/modules/214/hunt17.png)

``` shell-session
process.name:"SharpHound.exe"
```

![https://academy.hackthebox.com/storage/modules/214/hunt18.png](https://academy.hackthebox.com/storage/modules/214/hunt18.png)

``` shell-session
process.hash.sha256:018d37cbd3878258c29db3bc3f2988b6ae688843801b9abc28e6151141ab66d4
```

![https://academy.hackthebox.com/storage/modules/214/hunt29.png](https://academy.hackthebox.com/storage/modules/214/hunt29.png)

![https://academy.hackthebox.com/storage/modules/214/hunt20.png](https://academy.hackthebox.com/storage/modules/214/hunt20.png)

``` shell-session
(event.code:4624 OR event.code:4625) AND winlog.event_data.LogonType:3 AND source.ip:192.168.28.130
```

![https://academy.hackthebox.com/storage/modules/214/hunt21.png](https://academy.hackthebox.com/storage/modules/214/hunt21.png)

# 

# 

#### Questions

####