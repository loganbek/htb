<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/892
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 892
// Section Title: Unconditional Branching
// Page Title: Intro to Assembly Language
// Page Number: 14
-->

# Unconditional Branching

**Module Name:** Intro to Assembly Language **Page Number:** 14

#### INTRO TO ASSEMBLY LANGUAGE

# Unconditional Branching

## JMP loopFib

``` nasm
global  _start

section .text
_start:
    xor rax, rax    ; initialize rax to 0
    xor rbx, rbx    ; initialize rbx to 0
    inc rbx         ; increment rbx to 1
    mov rcx, 10
loopFib:
    add rax, rbx    ; get the next number
    xchg rax, rbx   ; swap values
    jmp loopFib
```

```undefined
$ ./assembler.sh fib.s -g
gef➤  b loopFib
Breakpoint 1 at 0x40100e
gef➤  r
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rbx   : 0x1               
$rcx   : 0xa               
$rcx   : 0xa               
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rbx   : 0x1               
$rcx   : 0xa               
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rbx   : 0x2               
$rcx   : 0xa               
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x2               
$rbx   : 0x3               
$rcx   : 0xa               
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x3               
$rbx   : 0x5               
$rcx   : 0xa               
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x5               
$rbx   : 0x8               
$rcx   : 0xa
```

```undefined
gef➤  info break
Num     Type           Disp Enb Address            What
1       breakpoint     keep y   0x000000000040100e <loopFib>
	breakpoint already hit 6 times
gef➤  del 1
gef➤  c
Continuing.

Program received signal SIGINT, Interrupt.
0x000000000040100e in loopFib ()
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x2e02a93188557fa9
$rbx   : 0x903b4b15ce8cedf0
$rcx   : 0xa
```

# 

# 

#### Questions

####