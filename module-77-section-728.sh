# https://academy.hackthebox.com/module/77/section/728

# Try running some of the web enumeration techniques you learned in this section on the server above, and use the info you get to get the flag.
# Target: 83.136.255.180:53712

gobuster dir -u http://83.136.255.180:53712 -w /usr/share/wordlists/dirb/common.txt
# http://83.136.255.180:53712/admin-login-page.php
# HTB{w3b_3num3r4710n_r3v34l5_53cr375}
gobuster dir -u http://<TARGET_IP>:8080 -w /usr/share/wordlists/dirb/common.txt
curl http://<TARGET_IP>:8080/discovered_directory
curl http://<TARGET_IP>:8080/discovered_directory/flag.txt
curl http://target_ip:8080/flag/flag.txt
