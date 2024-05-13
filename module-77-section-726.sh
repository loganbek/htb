# https://academy.hackthebox.com/module/77/section/726

# Perform a Nmap scan of the target. What is the version of the service from the Nmap scan running on port 8080?
nmap -sV -p 8080 <TARGET_IP>

# Perform an Nmap scan of the target and identify the non-default port that the telnet service is running on.
nmap -p- -sV <TARGET_IP>

# List the SMB shares available on the target host. Connect to the available share as the bob user. Once connected, access the folder called 'flag' and submit the contents of the flag.txt file.
