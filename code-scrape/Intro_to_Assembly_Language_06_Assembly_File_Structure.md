<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/874
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 874
// Section Title: Assembly File Structure
// Page Title: Intro to Assembly Language
// Page Number: 06
-->

# Assembly File Structure

**Module Name:** Intro to Assembly Language **Page Number:** 06

#### INTRO TO ASSEMBLY LANGUAGE

# Assembly File Structure

``` nasm
global  _start

         section .data
message: db      "Hello HTB Academy!"

         section .text
_start:
         mov     rax, 1
         mov     rdi, 1
         mov     rsi, message
         mov     rdx, 18
         syscall

         mov     rax, 60
         mov     rdi, 0
         syscall
```

## Assembly File Structure

![https://academy.hackthebox.com/storage/modules/85/nasm_structure.jpg](https://academy.hackthebox.com/storage/modules/85/nasm_structure.jpg)

## Directives

## Variables

``` nasm
section .data
    message db "Hello World!", 0x0a
    length  equ $-message
```

## Code

####