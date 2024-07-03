# https://academy.hackthebox.com/module/18/section/80

# How many services are listening on the target system on all interfaces? (Not on localhost and IPv4 only)

## linux
netstat -ln4 | grep LISTEN | grep -v 127 | wc -l # correct answer
ss -tuln4 | grep -v '127.0.0.1' | wc -l
### OR
netstat -tuln4 | grep LISTEN | grep -v '127.0.0.1' | wc -l

## windows
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalAddress -ne '127.0.0.1' } | Measure-Object

# Determine what user the ProFTPd server is running under. Submit the username as the answer.
# Correct answer
ps aux | grep proftpd | grep -v grep | awk '{print $1}'

### ps aux | grep proftpd
### OR
### systemctl status proftpd | grep -i user

# Use cURL from your Pwnbox (not the target machine) to obtain the source code of the "https://www.inlanefreight.com" website and filter all unique paths of that domain. Submit the number of these paths as the answer.
curl -s https://www.inlanefreight.com/ | grep -Po "https://www.inlanefreight.com/[^'\"]*" | sort -u | wc -l # best answer

curl https://www.inlanefreight.com/ | grep -Po "https://www.inlanefreight.com/[^'\"]*" | sort -u | wc -l # correct answer
# curl -s https://www.inlanefreight.com | echo "-----curl output-----"
# grep -oP 'href="\K(https?:\/\/)?(www\.)?inlanefreight\.com\/?[^\s"\?]*(?=\s|$)' | echo "-----grep output-----"
# sed 's/[?#].*//' | echo "-----sed output-----"
# sort -u | echo "-----sort output-----"
# wc -l
# curl -s https://www.inlanefreight.com | echo | grep -oP 'href="\K(https?:\/\/)?(www\.)?inlanefreight\.com\/?[^\s"\?]*(?=\s|$)' | echo | sed 's/[?#].*//' | sort -u | wc -l
# curl -s https://www.inlanefreight.com | jq -r 'links[] | select(startswith("https://www.inlanefreight.com")) | .[1:]' | sort -u | wc -l
# curl -s https://www.inlanefreight.com | grep -oP 'href="\K(https://www.inlanefreight.com[^"]*)' | sed 's/[?#].*//' | sort -u | wc -l
# powershell "(New-Object Net.WebClient).DownloadString('https://www.inlanefreight.com/')" | Select-String -Pattern "https://www.inlanefreight.com/[^'\"]*" | Sort-Object -Unique | Measure-Object
# curl https://www.inlanefreight.com > htb.txt && cat htb.txt | tr " " “\n” | cut -d"'" -f2 | cut -d'"' -f2 | grep “www.inlanefreight.com” | sort -u | wc -l 2>/dev/nul
# curl https://www.inlanefreight.com | tr " " “\n” | cut -d"‘" -f2 | cut -d’"’ -f2 | grep www.inlanefreight.com | sort -u | wc -l

# curl https://www.inlanefreight.com