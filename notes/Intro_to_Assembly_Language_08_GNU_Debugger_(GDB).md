<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/876
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 876
// Section Title: GNU Debugger (GDB)
// Page Title: Hack The Box - Academy
// Page Number: 08
-->

# GNU Debugger (GDB)

**Module Name:** Intro to Assembly Language **Page Number:** 08

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# GNU Debugger (GDB)

## Installation

``` shell-session
ndefstathiou@htb[/htb]$ sudo apt-get update
ndefstathiou@htb[/htb]$ sudo apt-get install gdb
```

``` shell-session
ndefstathiou@htb[/htb]$ wget -O ~/.gdbinit-gef.py -q https://gef.blah.cat/py
ndefstathiou@htb[/htb]$ echo source ~/.gdbinit-gef.py >> ~/.gdbinit
```

## Getting Started

``` shell-session
ndefstathiou@htb[/htb]$ gdb -q ./helloWorld
...SNIP...
gef➤
```

``` shell-session
ndefstathiou@htb[/htb]$ ./assembler.sh helloWorld.s -g
...SNIP...
gef➤
```

## Info

#### Functions

``` shell-session
gef➤  info functions

All defined functions:

Non-debugging symbols:
0x0000000000401000  _start
```

#### Variables

``` shell-session
gef➤  info variables

All defined variables:

Non-debugging symbols:
0x0000000000402000  message
0x0000000000402012  __bss_start
0x0000000000402012  _edata
0x0000000000402018  _end
```

## Disassemble

``` shell-session
gef➤  disas _start

Dump of assembler code for function _start:
   0x0000000000401000 <+0>:	mov    eax,0x1
   0x0000000000401005 <+5>:	mov    edi,0x1
   0x000000000040100a <+10>:	movabs rsi,0x402000
   0x0000000000401014 <+20>:	mov    edx,0x12
   0x0000000000401019 <+25>:	syscall
   0x000000000040101b <+27>:	mov    eax,0x3c
   0x0000000000401020 <+32>:	mov    edi,0x0
   0x0000000000401025 <+37>:	syscall
End of assembler dump.
```

# 

# 

####