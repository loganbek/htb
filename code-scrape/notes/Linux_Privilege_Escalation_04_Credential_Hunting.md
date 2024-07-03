<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/51/section/474
// Platform Version: V1
// Module ID: 51
// Module Name: Linux Privilege Escalation
// Module Difficulty: Easy
// Section ID: 474
// Section Title: Credential Hunting
// Page Title: Linux Privilege Escalation
// Page Number: 04
-->

# Credential Hunting

**Module Name:** Linux Privilege Escalation **Page Number:** 04

#### LINUX PRIVILEGE ESCALATION

# Credential Hunting

```shell-session
htb_student@NIX02:~$ cat wp-config.php | grep 'DB_USER\|DB_PASSWORD'

define( 'DB_USER', 'wordpressuser' );
define( 'DB_PASSWORD', 'WPadmin123!' );
```

```shell-session
htb_student@NIX02:~$  find / ! -path "*/proc/*" -iname "*config*" -type f 2>/dev/null

/etc/ssh/ssh_config
/etc/ssh/sshd_config
/etc/python3/debian_config
/etc/kbd/config
/etc/manpath.config
/boot/config-4.4.0-116-generic
/boot/grub/i386-pc/configfile.mod
/sys/devices/pci0000:00/0000:00:00.0/config
/sys/devices/pci0000:00/0000:00:01.0/config
<SNIP>
```

## SSH Keys

```shell-session
htb_student@NIX02:~$  ls ~/.ssh

id_rsa  id_rsa.pub  known_hosts
```

# 

# 

#### Questions

####