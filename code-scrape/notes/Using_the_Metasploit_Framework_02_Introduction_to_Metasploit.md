<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/39/section/383
// Platform Version: V1
// Module ID: 39
// Module Name: Using the Metasploit Framework
// Module Difficulty: Easy
// Section ID: 383
// Section Title: Introduction to Metasploit
// Page Title: Using the Metasploit Framework
// Page Number: 02
-->

# Introduction to Metasploit

**Module Name:** Using the Metasploit Framework **Page Number:** 02

#### USING THE METASPLOIT FRAMEWORK

# Introduction to Metasploit

![https://academy.hackthebox.com/storage/modules/39/S02_SS01.png](https://academy.hackthebox.com/storage/modules/39/S02_SS01.png)

## Metasploit Pro

## Metasploit Framework Console

## Understanding the Architecture

#### Data, Documentation, Lib

#### Modules

``` shell-session
ndefstathiou@htb[/htb]$ ls /usr/share/metasploit-framework/modules

auxiliary  encoders  evasion  exploits  nops  payloads  post
```

#### Plugins

``` shell-session
ndefstathiou@htb[/htb]$ ls /usr/share/metasploit-framework/plugins/

aggregator.rb      ips_filter.rb  openvas.rb           sounds.rb
alias.rb           komand.rb      pcap_log.rb          sqlmap.rb
auto_add_route.rb  lab.rb         request.rb           thread.rb
beholder.rb        libnotify.rb   rssfeed.rb           token_adduser.rb
db_credcollect.rb  msfd.rb        sample.rb            token_hunter.rb
db_tracker.rb      msgrpc.rb      session_notifier.rb  wiki.rb
event_tester.rb    nessus.rb      session_tagger.rb    wmap.rb
ffautoregen.rb     nexpose.rb     socket_logger.rb
```

#### Scripts

``` shell-session
ndefstathiou@htb[/htb]$ ls /usr/share/metasploit-framework/scripts/

meterpreter  ps  resource  shell
```

#### Tools

``` shell-session
ndefstathiou@htb[/htb]$ ls /usr/share/metasploit-framework/tools/

context  docs     hardware  modules   payloads
dev      exploit  memdump   password  recon
```

#### Questions

####