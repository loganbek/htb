<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/2093
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 2093
// Section Title: Task Scheduling
// Page Title: Hack The Box - Academy
// Page Number: 18
-->

# Task Scheduling

**Module Name:** Linux Fundamentals **Page Number:** 18

#### 

#### LINUX FUNDAMENTALS

# Task Scheduling

## Systemd

#### Create a Timer

``` shell-session
ndefstathiou@htb[/htb]$ sudo mkdir /etc/systemd/system/mytimer.timer.d
ndefstathiou@htb[/htb]$ sudo vim /etc/systemd/system/mytimer.timer
```

#### Mytimer.timer

``` txt
[Unit]
Description=My Timer

[Timer]
OnBootSec=3min
OnUnitActiveSec=1hour

[Install]
WantedBy=timers.target
```

#### Create a Service

``` shell-session
ndefstathiou@htb[/htb]$ sudo vim /etc/systemd/system/mytimer.service
```

``` txt
[Unit]
Description=My Service

[Service]
ExecStart=/full/path/to/my/script.sh

[Install]
WantedBy=multi-user.target
```

#### Reload Systemd

``` shell-session
ndefstathiou@htb[/htb]$ sudo systemctl daemon-reload
```

#### Start the Timer & Service

``` shell-session
ndefstathiou@htb[/htb]$ sudo systemctl start mytimer.service
ndefstathiou@htb[/htb]$ sudo systemctl enable mytimer.service
```

## Cron

``` txt
# System Update
* */6 * * /path/to/update_software.sh

# Execute scripts
0 0 1 * * /path/to/scripts/run_scripts.sh

# Cleanup DB
0 0 * * 0 /path/to/scripts/clean_database.sh

# Backups
0 0 * * 7 /path/to/scripts/backup.sh
```

## Systemd vs. Cron

# 

# 

#### Questions

####