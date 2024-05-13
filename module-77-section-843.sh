# https://academy.hackthebox.com/module/77/section/843

# Try to identify the services running on the server above, and then try to search to find public exploits to exploit them. Once you do, try to get the content of the '/flag.txt' file. (note: the web server may take a few seconds to start)
nmap -sV -A <TARGET_IP>
searchsploit service_name version
## EXAMPLE
nmap -sV -A 192.168.1.10
searchsploit tomcat 9.0.16
cat /flag.txt


