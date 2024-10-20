<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/158/section/1435
// Platform Version: V1
// Module ID: 158
// Module Name: Pivoting, Tunneling, and Port Forwarding
// Module Difficulty: Medium
// Section ID: 1435
// Section Title: Port Forwarding with Windows: Netsh
// Page Title: Hack The Box - Academy
// Page Number: 11
-->

# Port Forwarding with Windows: Netsh

**Module Name:** Pivoting, Tunneling, and Port Forwarding **Page Number:** 11

#### 

#### PIVOTING, TUNNELING, AND PORT FORWARDING

# Port Forwarding with Windows Netsh

![https://academy.hackthebox.com/storage/modules/158/88.png](https://academy.hackthebox.com/storage/modules/158/88.png)

#### Using Netsh.exe to Port Forward

``` cmd-session
C:\Windows\system32> netsh.exe interface portproxy add v4tov4 listenport=8080 listenaddress=10.129.15.150 connectport=3389 connectaddress=172.16.5.25
```

#### Verifying Port Forward

``` cmd-session
C:\Windows\system32> netsh.exe interface portproxy show v4tov4

Listen on ipv4:             Connect to ipv4:

Address         Port        Address         Port
--------------- ----------  --------------- ----------
10.129.42.198   8080        172.16.5.25     3389
```

#### Connecting to the Internal Host through the Port Forward

![https://academy.hackthebox.com/storage/modules/158/netsh_pivot.png](https://academy.hackthebox.com/storage/modules/158/netsh_pivot.png)

# 

# 

#### Questions

####