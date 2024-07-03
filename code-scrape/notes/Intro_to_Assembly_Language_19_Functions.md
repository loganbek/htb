<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/902
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 902
// Section Title: Functions
// Page Title: Hack The Box - Academy
// Page Number: 19
-->

# Functions

**Module Name:** Intro to Assembly Language **Page Number:** 19

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# Functions

## Functions Calling Convention

#### Writing Functions

## Using External Functions

## Importing libc Functions

``` nasm
global  _start
extern  printf
```

## Saving Registers

``` nasm
printFib:
    push rax        ; push registers to stack
    push rbx
    ; function call
    pop rbx         ; restore registers from stack
    pop rax
    ret
```

## Function Arguments

``` shell-session
[!bash!]$ man -s 3 printf

...SNIP...
       int printf(const char *format, ...);
```

``` nasm
global  _start
extern  printf

section .data
    message db "Fibonacci Sequence:", 0x0a
    outFormat db  "%d", 0x0a, 0x00
```

``` nasm
printFib:
    push rax            ; push registers to stack
    push rbx
    mov rdi, outFormat  ; set 1st argument (Print Format)
    mov rsi, rbx        ; set 2nd argument (Fib Number)
    pop rbx             ; restore registers from stack
    pop rax
    ret
```

## Stack Alignment

```undefined
───────────────────────────────────────────────────────────────────────────────────────── stack ────
0x00007fffffffe3a0│+0x0000: 0x0000000000000001	 ← $rsp
0x00007fffffffe3a8│+0x0008: 0x0000000000000000
0x00007fffffffe3b0│+0x0010: 0x00000000004010ad  →  <loopFib+5> add rax, rbx
0x00007fffffffe3b8│+0x0018: 0x0000000000401044  →  <_start+20> call 0x4010bd <Exit>
0x00007fffffffe3c0│+0x0020: 0x0000000000000001	 ← $r13
─────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
     0x401090 <initFib+9>      ret    
     0x401091 <printFib+0>     push   rax
     0x401092 <printFib+1>     push   rbx
 →   0x40100e <printFib+2>     movabs rdi, 0x403039
```

``` nasm
sub rsp, 16
    call function
    add rsp, 16
```

## Function Call

``` nasm
printFib:
    push rax            ; push registers to stack
    push rbx
    mov rdi, outFormat  ; set 1st argument (Print Format)
    mov rsi, rbx        ; set 2nd argument (Fib Number)
    call printf         ; printf(outFormat, rbx)
    pop rbx             ; restore registers from stack
    pop rax
    ret
```

``` nasm
loopFib:
    call printFib   ; print current Fib number
    add rax, rbx    ; get the next number
    xchg rax, rbx   ; swap values
    cmp rbx, 10		; do rbx - 10
    js loopFib		; jump if result is <0
    ret
```

``` nasm
global  _start
extern  printf

section .data
    message db "Fibonacci Sequence:", 0x0a
    outFormat db  "%d", 0x0a, 0x00

section .text
_start:
    call printMessage   ; print intro message
    call initFib        ; set initial Fib values
    call loopFib        ; calculate Fib numbers
    call Exit           ; Exit the program

printMessage:
    mov rax, 1           ; rax: syscall number 1
    mov rdi, 1          ; rdi: fd 1 for stdout
    mov rsi, message    ; rsi: pointer to message
    mov rdx, 20          ; rdx: print length of 20 bytes
    syscall             ; call write syscall to the intro message
    ret

initFib:
    xor rax, rax        ; initialize rax to 0
    xor rbx, rbx        ; initialize rbx to 0
    inc rbx             ; increment rbx to 1
    ret

printFib:
    push rax            ; push registers to stack
    push rbx
    mov rdi, outFormat  ; set 1st argument (Print Format)
    mov rsi, rbx        ; set 2nd argument (Fib Number)
    call printf         ; printf(outFormat, rbx)
    pop rbx             ; restore registers from stack
    pop rax
    ret

loopFib:
    call printFib       ; print current Fib number
    add rax, rbx        ; get the next number
    xchg rax, rbx       ; swap values
    cmp rbx, 10		    ; do rbx - 10
    js loopFib		    ; jump if result is <0
    ret

Exit:
    mov rax, 60
    mov rdi, 0
    syscall
```

## Dynamic Linker

``` shell-session
[!bash!]$ nasm -f elf64 fib.s &&  ld fib.o -o fib -lc --dynamic-linker /lib64/ld-linux-x86-64.so.2 && ./fib

1
1
2
3
5
8
```

# 

# 

#### Questions

####