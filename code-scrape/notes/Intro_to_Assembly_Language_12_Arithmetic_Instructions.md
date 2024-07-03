<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/890
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 890
// Section Title: Arithmetic Instructions
// Page Title: Intro to Assembly Language
// Page Number: 12
-->

# Arithmetic Instructions

**Module Name:** Intro to Assembly Language **Page Number:** 12

#### INTRO TO ASSEMBLY LANGUAGE

# Arithmetic Instructions

## Unary Instructions

``` nasm
global  _start
section .text
_start:
    mov al, 0
    mov bl, 0
    inc bl
```

```undefined
$ ./assembler.sh fib.s -g
...SNIP...

─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x401005 <_start+5>      mov    al, 0x0
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rbx   : 0x0

...SNIP...

─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x40100a <_start+10>      inc    bl
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rbx   : 0x1
```

## Binary Instructions

``` nasm
global  _start

section .text
_start:
   mov al, 0
   mov bl, 0
   inc bl
   add rax, rbx
```

```undefined
$ ./assembler.sh fib.s -g
gef➤  b _start
Breakpoint 1 at 0x401000
gef➤  r
...SNIP...

─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x401004 <_start+4>       inc    bl
 →   0x401006 <_start+6>       add    rax, rbx
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1
$rbx   : 0x1
```

## Bitwise Instructions

``` nasm
global  _start

section .text
_start:
    xor rax, rax
    xor rbx, rbx
    inc rbx
    add rax, rbx
```

```undefined
$ ./assembler.sh fib.s -g
gef➤  b _start
Breakpoint 1 at 0x401000
gef➤  r
...SNIP...

─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x401001 <_start+1>       xor    eax, eax
     0x401003 <_start+3>       xor    ebx, ebx
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0
$rbx   : 0x0

...SNIP...

─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x40100c                  add    BYTE PTR [rax], al
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1
$rbx   : 0x1
```

# 

# 

#### Questions

####