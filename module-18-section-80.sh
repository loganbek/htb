# https://academy.hackthebox.com/module/18/section/80

# How many services are listening on the target system on all interfaces? (Not on localhost and IPv4 only)

## linux
ss -tuln4 | grep -v '127.0.0.1' | wc -l
### OR
netstat -tuln4 | grep LISTEN | grep -v '127.0.0.1' | wc -l


## windows
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalAddress -ne '127.0.0.1' } | Measure-Object

# Determine what user the ProFTPd server is running under. Submit the username as the answer.
ps aux | grep proftpd
### OR
systemctl status proftpd | grep -i user

# Use cURL from your Pwnbox (not the target machine) to obtain the source code of the "https://www.inlanefreight.com" website and filter all unique paths of that domain. Submit the number of these paths as the answer.
curl -s https://www.inlanefreight.com | grep -oP 'href="\K(https://www.inlanefreight.com[^"]*)' | sed 's/[?#].*//' | sort -u | wc -l
