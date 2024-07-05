<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/218/section/2356
// Platform Version: V1
// Module ID: 218
// Module Name: Understanding Log Sources & Investigating with Splunk
// Module Difficulty: Medium
// Section ID: 2356
// Section Title: Introduction To Splunk & SPL
// Page Title: Hack The Box - Academy
// Page Number: 01
-->

# Introduction To Splunk & SPL

**Module Name:** Understanding Log Sources & Investigating with Splunk **Page Number:** 01

#### 

#### UNDERSTANDING LOG SOURCES & INVESTIGATING WITH SPLUNK Mini-Module

# Introduction To Splunk & SPL

## What Is Splunk?

![https://academy.hackthebox.com/storage/modules/218/101.png](https://academy.hackthebox.com/storage/modules/218/101.png)

![https://academy.hackthebox.com/storage/modules/218/102.png](https://academy.hackthebox.com/storage/modules/218/102.png)

## Splunk As A SIEM Solution

``` shell-session
search index="main" "UNKNOWN"
```

``` shell-session
index="main" "*UNKNOWN*"
```

``` shell-session
index="main" EventCode!=1
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | fields - User
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | table _time, host, Image
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | rename Image as Process
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | dedup Image
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | sort - _time
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=3 | stats count by _time, Image
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=3 | chart count by _time, Image
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | eval Process_Path=lower(Image)
```

``` shell-session
index="main" EventCode=4662 | rex max_match=0 "[^%](?<guid>{.*})" | table guid
```

``` shell-session
filename, is_malware
notepad.exe, false
cmd.exe, false
powershell.exe, false
sharphound.exe, true
randomfile.exe, true
```

![https://academy.hackthebox.com/storage/modules/218/107.png](https://academy.hackthebox.com/storage/modules/218/107.png)

![https://academy.hackthebox.com/storage/modules/218/108.png](https://academy.hackthebox.com/storage/modules/218/108.png)

![https://academy.hackthebox.com/storage/modules/218/109.png](https://academy.hackthebox.com/storage/modules/218/109.png)

![https://academy.hackthebox.com/storage/modules/218/110.png](https://academy.hackthebox.com/storage/modules/218/110.png)

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | rex field=Image "(?P<filename>[^\\\]+)$" | eval filename=lower(filename) | lookup malware_lookup.csv filename OUTPUTNEW is_malware | table filename, is_malware
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | eval filename=mvdedup(split(Image, "\\")) | eval filename=mvindex(filename, -1) | eval filename=lower(filename) | lookup malware_lookup.csv filename OUTPUTNEW is_malware | table filename, is_malware | dedup filename, is_malware
```

``` shell-session
| inputlookup malware_lookup.csv
```

``` shell-session
index="main" earliest=-7d EventCode!=1
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" (EventCode=1 OR EventCode=3) | transaction Image startswith=eval(EventCode=1) endswith=eval(EventCode=3) maxspan=1m | table Image |  dedup Image
```

``` shell-session
index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 NOT [ search index="main" sourcetype="WinEventLog:Sysmon" EventCode=1 | top limit=100 Image | fields Image ] | table _time, Image, CommandLine, User, ComputerName
```

## How To Identify The Available Data

``` shell-session
| eventcount summarize=false index=* | table index
```

``` shell-session
| metadata type=sourcetypes
```

``` shell-session
| metadata type=sourcetypes index=* | table sourcetype
```

``` shell-session
| metadata type=sources index=* | table source
```

``` shell-session
sourcetype="WinEventLog:Security" | table _raw
```

``` shell-session
sourcetype="WinEventLog:Security" | table *
```

``` shell-session
sourcetype="WinEventLog:Security" | fields Account_Name, EventCode | table Account_Name, EventCode
```

``` shell-session
sourcetype="WinEventLog:Security" | fieldsummary
```

``` shell-session
index=* sourcetype=* | bucket _time span=1d | stats count by _time, index, sourcetype | sort - _time
```

``` shell-session
index=* sourcetype=* | rare limit=10 index, sourcetype
```

``` shell-session
index="main" | rare limit=20 useother=f ParentImage
```

``` shell-session
index=* sourcetype=* | fieldsummary | where count < 100 | table field, count, distinct_count
```

``` shell-session
index=* | sistats count by index, sourcetype, source, host
```

``` shell-session
index=* sourcetype=* | rare limit=10 field1, field2, field3
```

![https://academy.hackthebox.com/storage/modules/218/111.png](https://academy.hackthebox.com/storage/modules/218/111.png)

![https://academy.hackthebox.com/storage/modules/218/fields1.png](https://academy.hackthebox.com/storage/modules/218/fields1.png)

![https://academy.hackthebox.com/storage/modules/218/fields.png](https://academy.hackthebox.com/storage/modules/218/fields.png)

![https://academy.hackthebox.com/storage/modules/218/112.png](https://academy.hackthebox.com/storage/modules/218/112.png)

![https://academy.hackthebox.com/storage/modules/218/115.png](https://academy.hackthebox.com/storage/modules/218/115.png)

![https://academy.hackthebox.com/storage/modules/218/pivot.png](https://academy.hackthebox.com/storage/modules/218/pivot.png)

## Practical Exercises

# 

# 

#### Questions

####