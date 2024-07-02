<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/893
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 893
// Section Title: Conditional Branching
// Page Title: Hack The Box - Academy
// Page Number: 15
-->

# Conditional Branching

**Module Name:** Intro to Assembly Language **Page Number:** 15

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# Conditional Branching

## RFLAGS Register

## JNZ loopFib

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
    dec rcx			; decrement rcx counter
    jnz loopFib		; jump to loopFib until rcx is 0
```

```undefined
$ ./assembler.sh fib.s -g
gef➤  b loopFib
Breakpoint 1 at 0x40100e
gef➤  r
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0               
$rbx   : 0x1               
$rcx   : 0xa               
$eflags: [zero carry parity adjust sign trap INTERRUPT direction overflow resume virtualx86 identification]
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rbx   : 0x1               
$rcx   : 0x9               
$eflags: [zero carry PARITY adjust sign trap INTERRUPT direction overflow resume virtualx86 identification]
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rbx   : 0x2               
$rcx   : 0x8               
$eflags: [zero carry parity adjust sign trap INTERRUPT direction overflow resume virtualx86 identification]
```

```undefined
gef➤  
Continuing.
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x37              
$rbx   : 0x59              
$rcx   : 0x0               
$eflags: [ZERO carry PARITY adjust sign trap INTERRUPT direction overflow RESUME virtualx86 identification]
```

## CMP

``` nasm
global  _start

section .text
_start:
    xor rax, rax    ; initialize rax to 0
    xor rbx, rbx    ; initialize rbx to 0
    inc rbx         ; increment rbx to 1
loopFib:
    add rax, rbx    ; get the next number
    xchg rax, rbx   ; swap values
    cmp rbx, 10		; do rbx - 10
    js loopFib		; jump if result is <0
```

```undefined
$ ./assembler.sh fib.s -g
gef➤  b loopFib
Breakpoint 1 at 0x401009
gef➤  r
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rbx   : 0x1               
$eflags: [zero CARRY parity ADJUST SIGN trap INTERRUPT direction overflow resume virtualx86 identification]
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x401009 <loopFib+0>      add    rax, rbx
     0x40100c <loopFib+3>      xchg   rbx, rax
     0x40100e <loopFib+5>      cmp    rbx, 0xa
 →   0x401012 <loopFib+9>      js     0x401009 <loopFib>	TAKEN [Reason: S]
```

```undefined
gef➤  del 1
gef➤  disas loopFib
Dump of assembler code for function loopFib:
..SNIP...
0x0000000000401012 <+9>:	js     0x401009  
gef➤  b *loopFib+9 if $rbx > 10
Breakpoint 2 at 0x401012
gef➤  c
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x8               
$rbx   : 0xd               
$eflags: [zero carry PARITY adjust sign trap INTERRUPT direction overflow resume virtualx86 identification]
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x401009 <loopFib+0>      add    rax, rbx
     0x40100c <loopFib+3>      xchg   rbx, rax
     0x40100e <loopFib+5>      cmp    rbx, 0xa
 →   0x401012 <loopFib+9>      js     0x401009 <loopFib>	NOT taken [Reason: !(S)]
```

# 

# 

#### Questions

####