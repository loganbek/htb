<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/875
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 875
// Section Title: Assembling & Disassembling
// Page Title: Intro to Assembly Language
// Page Number: 07
-->

# Assembling & Disassembling

**Module Name:** Intro to Assembly Language **Page Number:** 07

#### INTRO TO ASSEMBLY LANGUAGE

# Assembling & Disassembling

## Assembling

``` nasm
global _start

section .data
    message db "Hello HTB Academy!"
    length equ $-message

section .text
_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, message
    mov rdx, length
    syscall

    mov rax, 60
    mov rdi, 0
    syscall
```

``` shell-session
[!bash!]$ nasm -f elf64 helloWorld.s
```

## Linking

``` shell-session
[!bash!]$ ld -o helloWorld helloWorld.o
```

``` shell-session
[!bash!]$ ./helloWorld
Hello HTB Academy!
```

``` bash
#!/bin/bash

fileName="${1%%.*}" # remove .s extension

nasm -f elf64 ${fileName}".s"
ld ${fileName}".o" -o ${fileName}
[ "$2" == "-g" ] && gdb -q ${fileName} || ./${fileName}
```

``` shell-session
[!bash!]$ ./assembler.sh helloWorld.s
Hello HTB Academy!
```

## Disassembling

``` shell-session
[!bash!]$ objdump -M intel -d helloWorld

helloWorld:     file format elf64-x86-64

Disassembly of section .text:

0000000000401000 <_start>:
  401000:	b8 01 00 00 00       	mov    eax,0x1
  401005:	bf 01 00 00 00       	mov    edi,0x1
  40100a:	48 be 00 20 40 00 00 	movabs rsi,0x402000
  401011:	00 00 00
  401014:	ba 12 00 00 00       	mov    edx,0x12
  401019:	0f 05                	syscall
  40101b:	b8 3c 00 00 00       	mov    eax,0x3c
  401020:	bf 00 00 00 00       	mov    edi,0x0
  401025:	0f 05                	syscall
```

``` shell-session
[!bash!]$ objdump -M intel --no-show-raw-insn --no-addresses -d helloWorld

helloWorld:     file format elf64-x86-64

Disassembly of section .text:

<_start>:
        mov    eax,0x1
        mov    edi,0x1
        movabs rsi,0x402000
        mov    edx,0x12
        syscall 
        mov    eax,0x3c
        mov    edi,0x0
        syscall
```

``` shell-session
[!bash!]$ objdump -sj .data helloWorld

helloWorld:     file format elf64-x86-64

Contents of section .data:
 402000 48656c6c 6f204854 42204163 6164656d  Hello HTB Academ
 402010 7921                                 y!
```

# 

# 

#### Questions

####