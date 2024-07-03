<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/899
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 899
// Section Title: Syscalls
// Page Title: Hack The Box - Academy
// Page Number: 17
-->

# Syscalls

**Module Name:** Intro to Assembly Language **Page Number:** 17

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# Syscalls

## Linux Syscall

``` shell-session
ndefstathiou@htb[/htb]$ cat /usr/include/x86_64-linux-gnu/asm/unistd_64.h
#ifndef _ASM_X86_UNISTD_64_H
#define _ASM_X86_UNISTD_64_H 1

#define __NR_read 0
#define __NR_write 1
#define __NR_open 2
#define __NR_close 3
#define __NR_stat 4
#define __NR_fstat 5
```

## Syscall Function Arguments

``` shell-session
ndefstathiou@htb[/htb]$ man -s 2 write
...SNIP...
       ssize_t write(int fd, const void *buf, size_t count);
```

``` c
ssize_t write(int fd, const void *buf, size_t count);
```

## Syscall Calling Convention

#### Syscall Number

``` nasm
mov rax, 1
```

#### Syscall Arguments

``` nasm
global  _start

section .data
    message db "Fibonacci Sequence:", 0x0a
```

``` nasm
mov rax, 1       ; rax: syscall number 1
mov rdi, 1      ; rdi: fd 1 for stdout
mov rsi,message ; rsi: pointer to message
mov rdx, 20      ; rdx: print length of 20 bytes
```

## Calling Syscall

``` nasm
global  _start

section .data
    message db "Fibonacci Sequence:", 0x0a

section .text
_start:
    mov rax, 1       ; rax: syscall number 1
    mov rdi, 1      ; rdi: fd 1 for stdout
    mov rsi,message ; rsi: pointer to message
    mov rdx, 20      ; rdx: print length of 20 bytes
    syscall         ; call write syscall to the intro message
    xor rax, rax    ; initialize rax to 0
    xor rbx, rbx    ; initialize rbx to 0
    inc rbx         ; increment rbx to 1
loopFib:
    add rax, rbx    ; get the next number
    xchg rax, rbx   ; swap values
    cmp rbx, 10		; do rbx - 10
    js loopFib		; jump if result is <0
```

``` shell-session
ndefstathiou@htb[/htb]$ ./assembler.sh fib.s

Fibonacci Sequence:
[1]    107348 segmentation fault  ./fib
```

```undefined
$ gdb -q ./fib
gef➤  disas _start
Dump of assembler code for function _start:
..SNIP...
0x0000000000401011 <+17>:	syscall 
gef➤  b *_start+17
Breakpoint 1 at 0x401011
gef➤  r
───────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rbx   : 0x0               
$rcx   : 0x0               
$rdx   : 0x14              
$rsp   : 0x00007fffffffe410  →  0x0000000000000001
$rbp   : 0x0               
$rsi   : 0x0000000000402000  →  "Fibonacci Sequence:\n"
$rdi   : 0x1 
              
gef➤  si
              
Fibonacci Sequence:
```

## Exit Syscall

``` shell-session
ndefstathiou@htb[/htb]$ grep exit /usr/include/x86_64-linux-gnu/asm/unistd_64.h

#define __NR_exit 60
#define __NR_exit_group 231
```

``` shell-session
ndefstathiou@htb[/htb]$ man -s 2 exit

...SNIP...
void _exit(int status);
```

``` nasm
mov rax, 60
    mov rdi, 0
    syscall
```

``` nasm
global  _start

section .data
    message db "Fibonacci Sequence:", 0x0a

section .text
_start:
    mov rax, 1       ; rax: syscall number 1
    mov rdi, 1      ; rdi: fd 1 for stdout
    mov rsi,message ; rsi: pointer to message
    mov rdx, 20      ; rdx: print length of 20 bytes
    syscall         ; call write syscall to the intro message
    xor rax, rax    ; initialize rax to 0
    xor rbx, rbx    ; initialize rbx to 0
    inc rbx         ; increment rbx to 1
loopFib:
    add rax, rbx    ; get the next number
    xchg rax, rbx   ; swap values
    cmp rbx, 10		; do rbx - 10
    js loopFib		; jump if result is <0
    mov rax, 60
    mov rdi, 0
    syscall
```

``` shell-session
ndefstathiou@htb[/htb]$ ./assembler.sh fib.s

Fibonacci Sequence:
```

``` shell-session
ndefstathiou@htb[/htb]$ echo $?

0
```

# 

# 

#### Optional Exercises

####