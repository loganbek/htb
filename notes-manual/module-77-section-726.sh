# https://academy.hackthebox.com/module/77/section/726

# Perform a Nmap scan of the target. What is the version of the service from the Nmap scan running on port 8080?
# Execute sudo nmap -sV {target IP} and check the result under Version
nmap -sV -p 8080 <TARGET_IP>
# Apache Tomcat

# Perform an Nmap scan of the target and identify the non-default port that the telnet service is running on.
# Perform a full port scan using -p-
nmap -p- <TARGET_IP>
# 2323

# List the SMB shares available on the target host. Connect to the available share as the bob user. Once connected, access the folder called 'flag' and submit the contents of the flag.txt file.
# Bob likes to use weak passwords.
# smbclient -N -L \\\\<TARGET_IP> # list available shares and suppress password
# smbclient //<TARGET_IP>/share_name -U bob

# list smb shares
smbclient -N -L \\\\<TARGET_IP>

# connect to a specific share
smbclient //<TARGET_IP>/flag -U bob

smbclient -N -L ////10.129.5.230
snmpwalk -v 2c -c public 10.129.5.230

curl https://github.com/trailofbits/onesixtyone/blob/master/dict.txt
onesixtyone -c /usr/share/doc/onesixtyone/dict.txt 10.129.200.222

smbclient ////<TARGET_IP>//users -U bob
# password Welcome1
# smbclient ////10.129.5.230//user -U bob
cd flag
get flag.txt
more flag.txt

# dceece590f3284c3866305eb2473d099

