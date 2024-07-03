<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/145/section/1294
// Platform Version: V1
// Module ID: 145
// Module Name: Server-side Attacks
// Module Difficulty: Medium
// Section ID: 1294
// Section Title: AJP Proxy
// Page Title: Server-side Attacks
// Page Number: 2
-->

# AJP Proxy

**Module Name:** Server-side Attacks **Page Number:** 2

#### SERVER-SIDE ATTACKS

# AJP Proxy

#### tomcat-users.xml

``` shell-session
<tomcat-users>
  <role rolename="manager-gui"/>
  <role rolename="manager-script"/>
  <user username="tomcat" password="s3cret" roles="manager-gui,manager-script"/>
</tomcat-users>
```

#### Docker Installation

``` shell-session
ndefstathiou@htb[/htb]$ sudo apt install docker.io
ndefstathiou@htb[/htb]$ sudo docker run -it --rm -p 8009:8009 -v `pwd`/tomcat-users.xml:/usr/local/tomcat/conf/tomcat-users.xml --name tomcat "tomcat:8.0"
```

####