<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/1776
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 1776
// Section Title: Remote Desktop Protocols in Linux
// Page Title: Linux Fundamentals
// Page Number: 25
-->

# Remote Desktop Protocols in Linux

**Module Name:** Linux Fundamentals **Page Number:** 25

#### LINUX FUNDAMENTALS

# Remote Desktop Protocols in Linux

## XServer

#### X11Forwarding

```shell-session
[!bash!]$ cat /etc/ssh/sshd_config | grep X11Forwarding

X11Forwarding yes
```

```shell-session
[!bash!]$ ssh -X htb-student@10.129.23.11 /usr/bin/firefox

htb-student@10.129.14.130's password: ********
<SKIP>
```

![https://academy.hackthebox.com/storage/modules/18/xserver.png](https://academy.hackthebox.com/storage/modules/18/xserver.png)

#### X11 Security

## XDMCP

## VNC

#### TigerVNC Installation

```shell-session
htb-student@ubuntu:~$ sudo apt install xfce4 xfce4-goodies tigervnc-standalone-server -y
htb-student@ubuntu:~$ vncpasswd 

Password: ******
Verify: ******
Would you like to enter a view-only password (y/n)? n
```

#### Configuration

```shell-session
htb-student@ubuntu:~$ touch ~/.vnc/xstartup ~/.vnc/config
htb-student@ubuntu:~$ cat <<EOT >> ~/.vnc/xstartup

#!/bin/bash
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
/usr/bin/startxfce4
[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
x-window-manager &
EOT
```

```shell-session
htb-student@ubuntu:~$ cat <<EOT >> ~/.vnc/config

geometry=1920x1080
dpi=96
EOT
```

```shell-session
htb-student@ubuntu:~$ chmod +x ~/.vnc/xstartup
```

#### Start the VNC server

```shell-session
htb-student@ubuntu:~$ vncserver

New 'linux:1 (htb-student)' desktop at :1 on machine linux

Starting applications specified in /home/htb-student/.vnc/xstartup
Log file is /home/htb-student/.vnc/linux:1.log

Use xtigervncviewer -SecurityTypes VncAuth -passwd /home/htb-student/.vnc/passwd :1 to connect to the VNC server.
```

#### List Sessions

```shell-session
htb-student@ubuntu:~$ vncserver -list

TigerVNC server sessions:

X DISPLAY #     RFB PORT #      PROCESS ID
:1              5901            79746
```

#### Setting Up an SSH Tunnel

```shell-session
[!bash!]$ ssh -L 5901:127.0.0.1:5901 -N -f -l htb-student 10.129.14.130

htb-student@10.129.14.130's password: *******
```

#### Connecting to the VNC Server

```shell-session
[!bash!]$ xtightvncviewer localhost:5901

Connected to RFB server, using protocol version 3.8
Performing standard VNC authentication

Password: ******

Authentication successful
Desktop name "linux:1 (htb-student)"
VNC server default format:
  32 bits per pixel.
  Least significant byte first in each pixel.
  True colour: max red 255 green 255 blue 255, shift red 16 green 8 blue 0
Using default colormap which is TrueColor.  Pixel format:
  32 bits per pixel.
  Least significant byte first in each pixel.
  True colour: max red 255 green 255 blue 255, shift red 16 green 8 blue 0
Same machine: preferring raw encoding
```

![https://academy.hackthebox.com/storage/modules/18/vncviewer.png](https://academy.hackthebox.com/storage/modules/18/vncviewer.png)

####