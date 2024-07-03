<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/145/section/1295
// Platform Version: V1
// Module ID: 145
// Module Name: Server-side Attacks
// Module Difficulty: Medium
// Section ID: 1295
// Section Title: Nginx Reverse Proxy & AJP
// Page Title: Hack The Box - Academy
// Page Number: 3
-->

# Nginx Reverse Proxy & AJP

**Module Name:** Server-side Attacks **Page Number:** 3

#### 

#### SERVER-SIDE ATTACKS

# Nginx Reverse Proxy & AJP

#### Download Nginx Source Code

``` shell-session
ndefstathiou@htb[/htb]$ wget https://nginx.org/download/nginx-1.21.3.tar.gz
ndefstathiou@htb[/htb]$ tar -xzvf nginx-1.21.3.tar.gz
```

#### Compile Nginx source code with the ajp module

``` shell-session
ndefstathiou@htb[/htb]$ git clone https://github.com/dvershinin/nginx_ajp_module.git
ndefstathiou@htb[/htb]$ cd nginx-1.21.3
ndefstathiou@htb[/htb]$ sudo apt install libpcre3-dev
ndefstathiou@htb[/htb]$ ./configure --add-module=`pwd`/../nginx_ajp_module --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib/nginx/modules
ndefstathiou@htb[/htb]$ make
ndefstathiou@htb[/htb]$ sudo make install
ndefstathiou@htb[/htb]$ nginx -V

nginx version: nginx/1.21.3
built by gcc 10.2.1 20210110 (Debian 10.2.1-6)
configure arguments: --add-module=../nginx_ajp_module --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib/nginx/modules
```

#### Pointing to the AJP Port

``` shell-session
upstream tomcats {
	server <TARGET_SERVER>:8009;
	keepalive 10;
	}
server {
	listen 80;
	location / {
		ajp_keep_conn on;
		ajp_pass tomcats;
	}
}
```

``` shell-session
ndefstathiou@htb[/htb]$ sudo nginx
ndefstathiou@htb[/htb]$ curl http://127.0.0.1:80

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Apache Tomcat/X.X.XX</title>
        <link href="favicon.ico" rel="icon" type="image/x-icon" />
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="tomcat.css" rel="stylesheet" type="text/css" />
    </head>

    <body>
        <div id="wrapper">
            <div id="navigation" class="curved container">
                <span id="nav-home"><a href="https://tomcat.apache.org/">Home</a></span>
                <span id="nav-hosts"><a href="/docs/">Documentation</a></span>
                <span id="nav-config"><a href="/docs/config/">Configuration</a></span>
                <span id="nav-examples"><a href="/examples/">Examples</a></span>
                <span id="nav-wiki"><a href="https://wiki.apache.org/tomcat/FrontPage">Wiki</a></span>
                <span id="nav-lists"><a href="https://tomcat.apache.org/lists.html">Mailing Lists</a></span>
                <span id="nav-help"><a href="https://tomcat.apache.org/findhelp.html">Find Help</a></span>
                <br class="separator" />
            </div>
            <div id="asf-box">
                <h1>Apache Tomcat/X.X.XX</h1>
            </div>
            <div id="upper" class="curved container">
                <div id="congrats" class="curved container">
                    <h2>If you're seeing this, you've successfully installed Tomcat. Congratulations!</h2>
<SNIP>
```

# 

# 

#### Questions

####