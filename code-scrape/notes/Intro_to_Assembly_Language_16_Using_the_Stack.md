<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/898
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 898
// Section Title: Using the Stack
// Page Title: Hack The Box - Academy
// Page Number: 16
-->

# Using the Stack

**Module Name:** Intro to Assembly Language **Page Number:** 16

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# Using the Stack

## The Stack

## Usage With Functions/Syscalls

## PUSH/POP

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

``` nasm
global  _start

section .text
_start:
    xor rax, rax    ; initialize rax to 0
    xor rbx, rbx    ; initialize rbx to 0
    inc rbx         ; increment rbx to 1
    push rax        ; push registers to stack
    push rbx
    ; call function
    pop rbx         ; restore registers from stack
    pop rax
...SNIP...
```

```undefined
$ ./assembler.sh fib.s -g
gef➤  b _start
gef➤  r
...SNIP...
gef➤  si
gef➤  si
gef➤  si
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0               
$rbx   : 0x1               
───────────────────────────────────────────────────────────────────────────────────────── stack ────
0x00007fffffffe410│+0x0000: 0x0000000000000001	 ← $rsp
0x00007fffffffe418│+0x0008: 0x0000000000000000
0x00007fffffffe420│+0x0010: 0x0000000000000000
0x00007fffffffe428│+0x0018: 0x0000000000000000
0x00007fffffffe430│+0x0020: 0x0000000000000000
0x00007fffffffe438│+0x0028: 0x0000000000000000
0x00007fffffffe440│+0x0030: 0x0000000000000000
0x00007fffffffe448│+0x0038: 0x0000000000000000
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
 →   0x40100e <_start+9>      push   rax
     0x40100f <_start+10>      push   rbx
     0x401010 <_start+11>      pop    rbx
     0x401011 <_start+12>      pop    rax
────────────────────────────────────────────────────────────────────────────────────────────────────
```

```undefined
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0               
$rbx   : 0x1               
───────────────────────────────────────────────────────────────────────────────────────── stack ────
0x00007fffffffe408│+0x0000: 0x0000000000000000	 ← $rsp
0x00007fffffffe410│+0x0008: 0x0000000000000001
0x00007fffffffe418│+0x0010: 0x0000000000000000
0x00007fffffffe420│+0x0018: 0x0000000000000000
0x00007fffffffe428│+0x0020: 0x0000000000000000
0x00007fffffffe430│+0x0028: 0x0000000000000000
0x00007fffffffe438│+0x0030: 0x0000000000000000
0x00007fffffffe440│+0x0038: 0x0000000000000000
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x40100e <loopFib+9>      push   rax
 →   0x40100f <_start+10>      push   rbx
     0x401010 <_start+11>      pop    rbx
     0x401011 <_start+12>      pop    rax
────────────────────────────────────────────────────────────────────────────────────────────────────
...SNIP...
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0               
$rbx   : 0x1               
───────────────────────────────────────────────────────────────────────────────────────── stack ────
0x00007fffffffe400│+0x0000: 0x0000000000000001	 ← $rsp
0x00007fffffffe408│+0x0008: 0x0000000000000000
0x00007fffffffe410│+0x0010: 0x0000000000000001
0x00007fffffffe418│+0x0018: 0x0000000000000000
0x00007fffffffe420│+0x0020: 0x0000000000000000
0x00007fffffffe428│+0x0028: 0x0000000000000000
0x00007fffffffe430│+0x0030: 0x0000000000000000
0x00007fffffffe438│+0x0038: 0x0000000000000000
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x40100e <_start+9>      push   rax
     0x40100f <_start+10>      push   rbx
 →   0x401010 <_start+11>      pop    rbx
     0x401011 <_start+12>      pop    rax
────────────────────────────────────────────────────────────────────────────────────────────────────
```

``` shell-session
0x00007fffffffe408│+0x0000: 0x0000000000000001	 ← $rsp
0x00007fffffffe410│+0x0008: 0x0000000000000000
```

```undefined
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0               
$rbx   : 0x1               
───────────────────────────────────────────────────────────────────────────────────────── stack ────
0x00007fffffffe408│+0x0000: 0x0000000000000000	 ← $rsp
0x00007fffffffe410│+0x0008: 0x0000000000000001
0x00007fffffffe418│+0x0010: 0x0000000000000000
0x00007fffffffe420│+0x0018: 0x0000000000000000
0x00007fffffffe428│+0x0020: 0x0000000000000000
0x00007fffffffe430│+0x0028: 0x0000000000000000
0x00007fffffffe438│+0x0030: 0x0000000000000000
0x00007fffffffe440│+0x0038: 0x0000000000000000
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x40100e <_start+9>      push   rax
     0x40100f <_start+10>      push   rbx
     0x401010 <_start+11>      pop    rbx
 →   0x401011 <_start+12>      pop    rax
────────────────────────────────────────────────────────────────────────────────────────────────────
...SNIP...
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x0               
$rbx   : 0x1               
───────────────────────────────────────────────────────────────────────────────────────── stack ────
0x00007fffffffe410│+0x0000: 0x0000000000000001	 ← $rsp
0x00007fffffffe418│+0x0008: 0x0000000000000000
0x00007fffffffe420│+0x0010: 0x0000000000000000
0x00007fffffffe428│+0x0018: 0x0000000000000000
0x00007fffffffe430│+0x0020: 0x0000000000000000
0x00007fffffffe438│+0x0028: 0x0000000000000000
0x00007fffffffe440│+0x0030: 0x0000000000000000
0x00007fffffffe448│+0x0038: 0x0000000000000000
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x40100f <_start+9>      push   rax
     0x40100f <_start+10>      push   rbx
     0x401010 <_start+11>      pop    rbx
     0x401011 <_start+12>      pop    rax
 →   0x401011 <loopFib+0>      add rax, rbx
────────────────────────────────────────────────────────────────────────────────────────────────────
```

# 

# 

#### Questions

####