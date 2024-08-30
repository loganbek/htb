<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/903
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 903
// Section Title: Libc Functions
// Page Title: Hack The Box - Academy
// Page Number: 20
-->

# Libc Functions

**Module Name:** Intro to Assembly Language **Page Number:** 20

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# Libc Functions

## Importing libc Functions

``` nasm
global  _start
extern  printf, scanf
```

``` nasm
getInput:
    ; call scanf
```

## Saving Registers

## Function Arguments

``` shell-session
[!bash!]$ man -s 3 scanf

...SNIP...
int scanf(const char *format, ...);
```

``` nasm
section .data
    message db "Please input max Fn", 0x0a
    outFormat db  "%d", 0x0a, 0x00
    inFormat db  "%d", 0x00
```

``` nasm
section .bss
    userInput resb 1
```

``` nasm
getInput:
    mov rdi, inFormat   ; set 1st parameter (inFormat)
    mov rsi, userInput  ; set 2nd parameter (userInput)
```

## Stack Alignment

``` nasm
getInput:
    sub rsp, 8
    ; call scanf
    add rsp, 8
```

## Function Call

``` nasm
getInput:
    sub rsp, 8          ; align stack to 16-bytes
    mov rdi, inFormat   ; set 1st parameter (inFormat)
    mov rsi, userInput  ; set 2nd parameter (userInput)
    call scanf          ; scanf(inFormat, userInput)
    add rsp, 8          ; restore stack alignment
    ret
```

``` nasm
section .text
_start:
    call printMessage   ; print intro message
    call getInput       ; get max number
    call initFib        ; set initial Fib values
    call loopFib        ; calculate Fib numbers
    call Exit           ; Exit the program
```

``` nasm
loopFib:
    ...SNIP...
    cmp rbx,[userInput] ; do rbx - userInput
    js loopFib		    ; jump if result is <0
    ret
```

``` nasm
global  _start
extern  printf, scanf

section .data
    message db "Please input max Fn", 0x0a
    outFormat db  "%d", 0x0a, 0x00
    inFormat db  "%d", 0x00

section .bss
    userInput resb 1

section .text
_start:
    call printMessage   ; print intro message
    call getInput       ; get max number
    call initFib        ; set initial Fib values
    call loopFib        ; calculate Fib numbers
    call Exit           ; Exit the program

printMessage:
    ...SNIP...

getInput:
    sub rsp, 8          ; align stack to 16-bytes
    mov rdi, inFormat   ; set 1st parameter (inFormat)
    mov rsi, userInput  ; set 2nd parameter (userInput)
    call scanf          ; scanf(inFormat, userInput)
    add rsp, 8          ; restore stack alignment
    ret

initFib:
    ...SNIP...

printFib:
    ...SNIP...

loopFib:
    ...SNIP...
    cmp rbx,[userInput] ; do rbx - userInput
    js loopFib		    ; jump if result is <0
    ret

Exit:
    ...SNIP...
```

## Dynamic Linker

``` shell-session
[!bash!]$ nasm -f elf64 fib.s &&  ld fib.o -o fib -lc --dynamic-linker /lib64/ld-linux-x86-64.so.2 && ./fib

Please input max Fn:
100
1
1
2
3
5
8
13
21
34
55
89
```

# 

# 

#### Optional Exercises

####