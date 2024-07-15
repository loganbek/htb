<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/2095
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 2095
// Section Title: Backup and Restore
// Page Title: Linux Fundamentals
// Page Number: 21
-->

# Backup and Restore

**Module Name:** Linux Fundamentals **Page Number:** 21

#### LINUX FUNDAMENTALS

# Backup and Restore

#### Install Rsync

``` shell-session
[!bash!]$ sudo apt install rsync -y
```

#### Rsync - Backup a local Directory to our Backup-Server

``` shell-session
[!bash!]$ rsync -av /path/to/mydirectory user@backup_server:/path/to/backup/directory
```

``` shell-session
[!bash!]$ rsync -avz --backup --backup-dir=/path/to/backup/folder --delete /path/to/mydirectory user@backup_server:/path/to/backup/directory
```

#### Rsync - Restore our Backup

``` shell-session
[!bash!]$ rsync -av user@remote_host:/path/to/backup/directory /path/to/mydirectory
```

## Encrypted Rsync

#### Secure Transfer of our Backup

``` shell-session
[!bash!]$ rsync -avz -e ssh /path/to/mydirectory user@backup_server:/path/to/backup/directory
```

## Auto-Synchronization

#### RSYNC_Backup.sh

``` bash
#!/bin/bash

rsync -avz -e ssh /path/to/mydirectory user@backup_server:/path/to/backup/directory
```

``` shell-session
[!bash!]$ chmod +x RSYNC_Backup.sh
```

#### Auto-Sync - Crontab

``` shell-session
0 * * * * /path/to/RSYNC_Backup.sh
```

# 

# 

####