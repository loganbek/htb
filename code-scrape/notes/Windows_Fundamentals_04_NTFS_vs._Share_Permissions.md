<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/49/section/1017
// Platform Version: V1
// Module ID: 49
// Module Name: Windows Fundamentals
// Module Difficulty: Fundamental
// Section ID: 1017
// Section Title: NTFS vs. Share Permissions
// Page Title: Windows Fundamentals
// Page Number: 04
-->

# NTFS vs. Share Permissions

**Module Name:** Windows Fundamentals **Page Number:** 04

#### WINDOWS FUNDAMENTALS

# NTFS vs. Share Permissions

![https://academy.hackthebox.com/storage/modules/49/smb_diagram.png](https://academy.hackthebox.com/storage/modules/49/smb_diagram.png)

#### Share permissions

#### NTFS Basic permissions

#### NTFS special permissions

## Creating a Network Share

#### Creating the Folder

![https://academy.hackthebox.com/storage/modules/49/creating_directory.png](https://academy.hackthebox.com/storage/modules/49/creating_directory.png)

#### Making the Folder a Share

![https://academy.hackthebox.com/storage/modules/49/configuring_share.png](https://academy.hackthebox.com/storage/modules/49/configuring_share.png)

#### Share Permissions ACL (Sharing Tab)

![https://academy.hackthebox.com/storage/modules/49/share_permissions.png](https://academy.hackthebox.com/storage/modules/49/share_permissions.png)

#### Using smbclient to list avaliable Shares

``` shell-session
[!bash!]$ smbclient -L SERVER_IP -U htb-student
Enter WORKGROUP\htb-student's password: 

	Sharename       Type      Comment
	---------       ----      -------
	ADMIN$          Disk      Remote Admin
	C$              Disk      Default share
	Company Data    Disk      
	IPC$            IPC       Remote IPC
```

#### Connecting to the Company Data share

``` shell-session
[!bash!]$ smbclient '\\SERVER_IP\Company Data' -U htb-student
Password for [WORKGROUP\htb-student]:
Try "help" to get a list of possible commands.

smb: \>
```

## Windows Defender Firewall Considerations

#### NTFS Permissions ACL (Security Tab)

![https://academy.hackthebox.com/storage/modules/49/ntfs.png](https://academy.hackthebox.com/storage/modules/49/ntfs.png)

#### Mounting to the Share

``` shell-session
[!bash!]$ sudo mount -t cifs -o username=htb-student,password=Academy_WinFun! //ipaddoftarget/"Company Data" /home/user/Desktop/
```

#### Installing CIFS Utilities

``` shell-session
[!bash!]$ sudo apt-get install cifs-utils
```

#### Displaying Shares using net share

``` cmd-session
C:\Users\htb-student> net share

Share name   Resource                        Remark

-------------------------------------------------------------------------------
C$           C:\                             Default share
IPC$                                         Remote IPC
ADMIN$       C:\WINDOWS                      Remote Admin
Company Data C:\Users\htb-student\Desktop\Company Data

The command completed successfully.
```

#### Monitoring Shares from Computer Management

![https://academy.hackthebox.com/storage/modules/49/computer_management.png](https://academy.hackthebox.com/storage/modules/49/computer_management.png)

#### Viewing Share access logs in Event Viewer

![https://academy.hackthebox.com/storage/modules/49/event_viewer.png](https://academy.hackthebox.com/storage/modules/49/event_viewer.png)

# 

# 

#### Questions

####