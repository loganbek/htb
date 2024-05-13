# https://academy.hackthebox.com/module/77/section/728

# Try running some of the web enumeration techniques you learned in this section on the server above, and use the info you get to get the flag.
gobuster dir -u http://<TARGET_IP>:8080 -w /usr/share/wordlists/dirb/common.txt
curl http://<TARGET_IP>:8080/discovered_directory
curl http://<TARGET_IP>:8080/discovered_directory/flag.txt
