<-- // Platform: Academy
// Platform Version: V1
// Module ID: 35
// Module Name: Web Requests
// Module Difficulty: Fundamental
// Section ID: 219
// Section Title: HyperText Transfer Protocol (HTTP)
// Page Title: Hack The Box - Academy
// Page Number: 

--># Hack The Box - Academy

**Module Name:** Web Requests **Page Number:** 

#### 

#### WEB REQUESTS

# HyperText Transfer Protocol (HTTP)

## URL

## HTTP Flow

## cURL

``` shell-session
ndefstathiou@htb[/htb]$ curl inlanefreight.com

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
...SNIP...
```

``` shell-session
ndefstathiou@htb[/htb]$ curl -O inlanefreight.com/index.html
ndefstathiou@htb[/htb]$ ls
index.html
```

``` shell-session
ndefstathiou@htb[/htb]$ curl -s -O inlanefreight.com/index.html
```

``` shell-session
ndefstathiou@htb[/htb]$ curl -h
Usage: curl [options...] <url>
 -d, --data <data>   HTTP POST data
 -h, --help <category> Get help for commands
 -i, --include       Include protocol response headers in the output
 -o, --output <file> Write to file instead of stdout
 -O, --remote-name   Write output to a file named as the remote file
 -s, --silent        Silent mode
 -u, --user <user:password> Server user and password
 -A, --user-agent <name> Send User-Agent <name> to server
 -v, --verbose       Make the operation more talkative

This is not the full help, this menu is stripped into categories.
Use "--help category" to get an overview of all categories.
Use the user manual `man curl` or the "--help all" flag for all options.
```

# 

# 

#### Questions

####