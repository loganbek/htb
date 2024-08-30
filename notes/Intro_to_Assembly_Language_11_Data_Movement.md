<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/889
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 889
// Section Title: Data Movement
// Page Title: Hack The Box - Academy
// Page Number: 11
-->

# Data Movement

**Module Name:** Intro to Assembly Language **Page Number:** 11

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# Data Movement

## Moving Data

``` nasm
global  _start

section .text
_start:
    mov rax, 0
    mov rbx, 1
```

```undefined
$ ./assembler.sh fib.s -g
gef➤  b _start
Breakpoint 1 at 0x401000
gef➤  r
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x401000 <_start+0>       mov    eax, 0x0
     0x401005 <_start+5>       mov    ebx, 0x1
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0
$rbx   : 0x0

...SNIP...

─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x401000 <_start+0>       mov    eax, 0x0
 →   0x401005 <_start+5>       mov    ebx, 0x1
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0
$rbx   : 0x1
```

## Loading Data

``` nasm
global  _start

section .text
_start:
    mov rax, 0
	mov rbx, 1
    mov bl, 1
```

``` shell-session
ndefstathiou@htb[/htb]$ nasm -f elf64 fib.s && objdump -M intel -d fib.o
...SNIP...
0000000000000000 <_start>:
   0:	b8 00 00 00 00       	mov    eax,0x0
   5:	bb 01 00 00 00       	mov    ebx,0x1
   a:	b3 01                	mov    bl,0x1
```

``` nasm
global  _start

section .text
_start:
    mov al, 0
    mov bl, 1
```

## Address Pointers

```undefined
gdb -q ./fib
gef➤  b _start
Breakpoint 1 at 0x401000
gef➤  r
...SNIP...
$rsp   : 0x00007fffffffe490  →  0x0000000000000001
$rip   : 0x0000000000401000  →  <_start+0> mov eax, 0x0
```

#### Moving Pointer Values

``` nasm
global  _start

section .text
_start:
    mov rax, rsp
    mov rax, [rsp]
```

```undefined
$ ./assembler.sh rsp.s -g
gef➤  b _start
Breakpoint 1 at 0x401000
gef➤  r
...SNIP...
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x401000 <_start+0>       mov    rax, rsp
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x00007fffffffe490  →  0x0000000000000001
$rsp   : 0x00007fffffffe490  →  0x0000000000000001
```

```undefined
$ ./assembler.sh rsp.s -g
gef➤  b _start
Breakpoint 1 at 0x401000
gef➤  r
...SNIP...
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x401003 <_start+3>       mov    rax, QWORD PTR [rsp]
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rsp   : 0x00007fffffffe490  →  0x0000000000000001
```

#### Loading Value Pointers

``` nasm
global  _start

section .text
_start:
    lea rax, [rsp+10]
    mov rax, [rsp+10]
```

```undefined
$ ./assembler.sh lea.s -g
gef➤  b _start
Breakpoint 1 at 0x401000
gef➤  r
...SNIP...
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x401003 <_start+0>       lea    rax, [rsp+0xa]
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x00007fffffffe49a  →  0x000000007fffffff
$rsp   : 0x00007fffffffe490  →  0x0000000000000001
```

```undefined
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x401008 <_start+8>       mov    rax, QWORD PTR [rsp+0xa]
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x7fffffff        
$rsp   : 0x00007fffffffe490  →  0x0000000000000001
```

# 

# 

#### Questions

####