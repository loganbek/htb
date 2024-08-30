<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/158/section/1439
// Platform Version: V1
// Module ID: 158
// Module Name: Pivoting, Tunneling, and Port Forwarding
// Module Difficulty: Medium
// Section ID: 1439
// Section Title: RDP and SOCKS Tunneling with SocksOverRDP
// Page Title: Pivoting, Tunneling, and Port Forwarding
// Page Number: 15
-->

# RDP and SOCKS Tunneling with SocksOverRDP

**Module Name:** Pivoting, Tunneling, and Port Forwarding **Page Number:** 15

#### PIVOTING, TUNNELING, AND PORT FORWARDING

# RDP and SOCKS Tunneling with SocksOverRDP

#### Loading SocksOverRDP.dll using regsvr32.exe

```cmd-session
C:\Users\htb-student\Desktop\SocksOverRDP-x64> regsvr32.exe SocksOverRDP-Plugin.dll
```

![https://academy.hackthebox.com/storage/modules/158/socksoverrdpdll.png](https://academy.hackthebox.com/storage/modules/158/socksoverrdpdll.png)

![https://academy.hackthebox.com/storage/modules/158/pivotingtoDC.png](https://academy.hackthebox.com/storage/modules/158/pivotingtoDC.png)

![https://academy.hackthebox.com/storage/modules/158/executingsocksoverrdpserver.png](https://academy.hackthebox.com/storage/modules/158/executingsocksoverrdpserver.png)

#### Confirming the SOCKS Listener is Started

```cmd-session
C:\Users\htb-student\Desktop\SocksOverRDP-x64> netstat -antb | findstr 1080

  TCP    127.0.0.1:1080         0.0.0.0:0              LISTENING
```

#### Configuring Proxifier

![https://academy.hackthebox.com/storage/modules/158/configuringproxifier.gif](https://academy.hackthebox.com/storage/modules/158/configuringproxifier.gif)

![https://academy.hackthebox.com/storage/modules/158/rdpsockspivot.png](https://academy.hackthebox.com/storage/modules/158/rdpsockspivot.png)

#### RDP Performance Considerations

![https://academy.hackthebox.com/storage/modules/158/rdpexpen.png](https://academy.hackthebox.com/storage/modules/158/rdpexpen.png)

# 

# 

#### Questions

####