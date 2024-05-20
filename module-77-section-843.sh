# https://academy.hackthebox.com/module/77/section/843

# Try to identify the services running on the server above, and then try to search to find public exploits to exploit them. Once you do, try to get the content of the '/flag.txt' file. (note: the web server may take a few seconds to start)
# target 94.237.60.187:48747

nmap -sV -A <TARGET_IP>
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
cat /flag.txt


