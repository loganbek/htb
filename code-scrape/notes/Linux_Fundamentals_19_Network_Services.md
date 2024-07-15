<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/2094
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 2094
// Section Title: Network Services
// Page Title: Linux Fundamentals
// Page Number: 19
-->

# Network Services

**Module Name:** Linux Fundamentals **Page Number:** 19

#### LINUX FUNDAMENTALS

# Network Services

## SSH

#### Install OpenSSH

``` shell-session
[!bash!]$ sudo apt install openssh-server -y
```

#### Server Status

``` shell-session
[!bash!]$ systemctl status ssh

● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/system/system/ssh.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2023-02-12 21:15:27 GMT; 1min 22s ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 7740 (sshd)
      Tasks: 1 (limit: 9458)
     Memory: 2.5M
        CPU: 236ms
     CGroup: /system.slice/ssh.service
             └─7740 sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups
```

#### SSH - Logging In

``` shell-session
[!bash!]$ ssh cry0l1t3@10.129.17.122

The authenticity of host '10.129.17.122 (10.129.17.122)' can't be established.
ECDSA key fingerprint is SHA256:bKzhv+n2pYqr2r...Egf8LfqaHNxk.

Are you sure you want to continue connecting (yes/no/[fingerprint])? yes

Warning: Permanently added '10.129.17.122' (ECDSA) to the list of known hosts.

cry0l1t3@10.129.17.122's password: ***********
```

## NFS

#### Install NFS

``` shell-session
[!bash!]$ sudo apt install nfs-kernel-server -y
```

#### Server Status

``` shell-session
[!bash!]$ systemctl status nfs-kernel-server

● nfs-server.service - NFS server and services
     Loaded: loaded (/lib/system/system/nfs-server.service; enabled; vendor preset: enabled)
     Active: active (exited) since Sun 2023-02-12 21:35:17 GMT; 13s ago
    Process: 9234 ExecStartPre=/usr/sbin/exportfs -r (code=exited, status=0/SUCCESS)
    Process: 9235 ExecStart=/usr/sbin/rpc.nfsd $RPCNFSDARGS (code=exited, status=0/SUCCESS)
   Main PID: 9235 (code=exited, status=0/SUCCESS)
        CPU: 10ms
```

#### Create NFS Share

``` shell-session
cry0l1t3@htb:~$ mkdir nfs_sharing
cry0l1t3@htb:~$ echo '/home/cry0l1t3/nfs_sharing hostname(rw,sync,no_root_squash)' >> /etc/exports
cry0l1t3@htb:~$ cat /etc/exports | grep -v "#"

/home/cry0l1t3/nfs_sharing hostname(rw,sync,no_root_squash)
```

#### Mount NFS Share

``` shell-session
cry0l1t3@htb:~$ mkdir ~/target_nfs
cry0l1t3@htb:~$ mount 10.129.12.17:/home/john/dev_scripts ~/target_nfs
cry0l1t3@htb:~$ tree ~/target_nfs

target_nfs/
├── css.css
├── html.html
├── javascript.js
├── php.php
└── xml.xml

0 directories, 5 files
```

## Web Server

#### Install Apache Web Server

``` shell-session
[!bash!]$ sudo apt install apache2 -y
```

#### Apache Configuration

``` txt
<Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</directory>
```

#### Install Python & Web Server

``` shell-session
[!bash!]$ sudo apt install python3 -y
[!bash!]$ python3 -m http.server
```

``` shell-session
[!bash!]$ python3 -m http.server --directory /home/cry0l1t3/target_files
```

``` shell-session
[!bash!]$ python3 -m http.server 443
```

## VPN

#### Install OpenVPN

``` shell-session
[!bash!]$ sudo apt install openvpn -y
```

#### Connect to VPN

``` shell-session
[!bash!]$ sudo openvpn --config internal.ovpn
```

# 

# 

####