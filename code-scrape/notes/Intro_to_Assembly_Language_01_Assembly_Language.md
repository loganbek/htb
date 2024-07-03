<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/839
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 839
// Section Title: Assembly Language
// Page Title: Intro to Assembly Language
// Page Number: 01
-->

# Assembly Language

**Module Name:** Intro to Assembly Language **Page Number:** 01

#### INTRO TO ASSEMBLY LANGUAGE

# Assembly Language

## High-level vs. Low-level

## Compilation Stages

![https://academy.hackthebox.com/storage/modules/85/assembly_Compilation_Stages_1.jpg](https://academy.hackthebox.com/storage/modules/85/assembly_Compilation_Stages_1.jpg)

``` python
print("Hello World!")
```

``` c
#include <unistd.h>

int main()
{
    write(1, "Hello World!", 12);
    _exit(0);
}
```

``` nasm
mov rax, 1
mov rdi, 1
mov rsi, message
mov rdx, 12
syscall

mov rax, 60
mov rdi, 0
syscall
```

``` shellcode
48 c7 c0 01
48 c7 c7 01
48 8b 34 25
48 c7 c2 0d
0f 05

48 c7 c0 3c
48 c7 c7 00
0f 05
```

``` binary
01001000 11000111 11000000 00000001
01001000 11000111 11000111 00000001
01001000 10001011 00110100 00100101
01001000 11000111 11000010 00001101 
00001111 00000101

01001000 11000111 11000000 00111100 
01001000 11000111 11000111 00000000 
00001111 00000101
```

## Value for Pentesters

#### Optional Exercises

####