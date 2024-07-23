<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/19/section/105
// Platform Version: V1
// Module ID: 19
// Module Name: Network Enumeration with Nmap
// Module Difficulty: Easy
// Section ID: 105
// Section Title: Performance
// Page Title: Network Enumeration with Nmap
// Page Number: 08
-->

# Performance

**Module Name:** Network Enumeration with Nmap **Page Number:** 08

#### NETWORK ENUMERATION WITH NMAP

# Performance

## Timeouts

#### Default Scan

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F

<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 39.44 seconds
```

#### Optimized RTT

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F --initial-rtt-timeout 50ms --max-rtt-timeout 100ms

<SNIP>
Nmap done: 256 IP addresses (8 hosts up) scanned in 12.29 seconds
```

## Max Retries

#### Default Scan

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F | grep "/tcp" | wc -l

23
```

#### Reduced Retries

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F --max-retries 0 | grep "/tcp" | wc -l

21
```

## Rates

#### Default Scan

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F -oN tnet.default

<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 29.83 seconds
```

#### Optimized Scan

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F -oN tnet.minrate300 --min-rate 300

<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 8.67 seconds
```

#### Default Scan - Found Open Ports

``` shell-session
ndefstathiou@htb[/htb]$ cat tnet.default | grep "/tcp" | wc -l

23
```

#### Optimized Scan - Found Open Ports

``` shell-session
ndefstathiou@htb[/htb]$ cat tnet.minrate300 | grep "/tcp" | wc -l

23
```

## Timing

#### Default Scan

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F -oN tnet.default 

<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 32.44 seconds
```

#### Insane Scan

``` shell-session
ndefstathiou@htb[/htb]$ sudo nmap 10.129.2.0/24 -F -oN tnet.T5 -T 5

<SNIP>
Nmap done: 256 IP addresses (10 hosts up) scanned in 18.07 seconds
```

#### Default Scan - Found Open Ports

``` shell-session
ndefstathiou@htb[/htb]$ cat tnet.default | grep "/tcp" | wc -l

23
```

#### Insane Scan - Found Open Ports

``` shell-session
ndefstathiou@htb[/htb]$ cat tnet.T5 | grep "/tcp" | wc -l

23
```

####