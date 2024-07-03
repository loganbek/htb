<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/891
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 891
// Section Title: Loops
// Page Title: Intro to Assembly Language
// Page Number: 13
-->

# Loops

**Module Name:** Intro to Assembly Language **Page Number:** 13

#### INTRO TO ASSEMBLY LANGUAGE

# Loops

## Loop Structure

``` nasm
exampleLoop:
    instruction 1
    instruction 2
    instruction 3
    instruction 4
    instruction 5
    loop exampleLoop
```

## loopFib

``` nasm
global  _start

section .text
_start:
    xor rax, rax
    xor rbx, rbx
    inc rbx
    add rax, rbx
```

``` nasm
_start:
    xor rax, rax    ; initialize rax to 0
    xor rbx, rbx    ; initialize rbx to 0
    inc rbx         ; increment rbx to 1
    mov rcx, 10
```

``` nasm
loopFib:
    add rax, rbx    ; get the next number
    xchg rax, rbx   ; swap values
    loop loopFib
```

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
    loop loopFib
```

## Loop loopFib

```undefined
$ ./assembler.sh fib.s -g
gef➤  b loopFib
Breakpoint 1 at 0x40100e
gef➤  r
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0
$rbx   : 0x1
$rcx   : 0xa
```

```undefined
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1
$rbx   : 0x1
$rcx   : 0x9
```

```undefined
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1
$rbx   : 0x2
$rcx   : 0x8
```

```undefined
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x2
$rbx   : 0x3
$rcx   : 0x7
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x3
$rbx   : 0x5
$rcx   : 0x6
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x5
$rbx   : 0x8
$rcx   : 0x5
```

```undefined
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x22
$rbx   : 0x37
$rcx   : 0x1
```

``` shell-session
gef➤  p/d $rbx

$3 = 55
```

# 

# 

#### Questions

####