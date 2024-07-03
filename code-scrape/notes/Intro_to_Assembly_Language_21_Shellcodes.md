<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/905
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 905
// Section Title: Shellcodes
// Page Title: Intro to Assembly Language
// Page Number: 21
-->

# Shellcodes

**Module Name:** Intro to Assembly Language **Page Number:** 21

#### INTRO TO ASSEMBLY LANGUAGE

# Shellcodes

## What is a Shellcode

``` nasm
global _start

section .data
    message db "Hello HTB Academy!"

section .text
_start:
    mov rsi, message
    mov rdi, 1
    mov rdx, 18
    mov rax, 1
    syscall

    mov rax, 60
    mov rdi, 0
    syscall
```

``` shellcode
48be0020400000000000bf01000000ba12000000b8010000000f05b83c000000bf000000000f05
```

## Use in Pentesting

## Assembly to Machine Code

``` shell-session
[!bash!]$ sudo pip3 install pwntools
```

``` shell-session
[!bash!]$ pwn asm 'push rax'  -c 'amd64'
   0:    50                       push   eax
```

``` shell-session
[!bash!]$ pwn disasm '50' -c 'amd64'
   0:    50                       push   eax
```

## Extract Shellcode

``` shell-session
[!bash!]$ python3

>>> from pwn import *
>>> file = ELF('helloworld')
```

``` shell-session
>>> file.section(".text").hex()
'48be0020400000000000bf01000000ba12000000b8010000000f05b83c000000bf000000000f05'
```

``` python
#!/usr/bin/python3

import sys
from pwn import *

context(os="linux", arch="amd64", log_level="error")

file = ELF(sys.argv[1])
shellcode = file.section(".text")
print(shellcode.hex())
```

``` shell-session
[!bash!]$ python3 shellcoder.py helloworld

48be0020400000000000bf01000000ba12000000b8010000000f05b83c000000bf000000000f05
```

``` bash
#!/bin/bash

for i in $(objdump -d $1 |grep "^ " |cut -f2); do echo -n $i; done; echo;
```

``` shell-session
[!bash!]$ ./shellcoder.sh helloworld

48be0020400000000000bf01000000ba12000000b8010000000f05b83c000000bf000000000f05
```

## Loading Shellcode

``` shellcode
4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05
```

``` shell-session
[!bash!]$ python3

>>> from pwn import *
>>> context(os="linux", arch="amd64", log_level="error")
>>> run_shellcode(unhex('4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05')).interactive()

Hello HTB Academy!
```

``` shell-session
>>> run_shellcode(unhex('b801000000bf0100000048be0020400000000000ba120000000f05b83c000000bf000000000f05')).interactive()
```

``` python
#!/usr/bin/python3

import sys
from pwn import *

context(os="linux", arch="amd64", log_level="error")

run_shellcode(unhex(sys.argv[1])).interactive()
```

``` shell-session
[!bash!]$ python3 loader.py '4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05'

Hello HTB Academy!
```

## Debugging Shellcode

#### Pwntools

``` python
ELF.from_bytes(unhex('4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05')).save('helloworld')
```

``` python
#!/usr/bin/python3

import sys, os, stat
from pwn import *

context(os="linux", arch="amd64", log_level="error")

ELF.from_bytes(unhex(sys.argv[1])).save(sys.argv[2])
os.chmod(sys.argv[2], stat.S_IEXEC)
```

``` shell-session
[!bash!]$ python assembler.py '4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05' 'helloworld'
```

``` shell-session
[!bash!]$ ./helloworld

Hello HTB Academy!
```

```undefined
$ gdb -q helloworld
gef➤  b *0x401000
gef➤  r
Breakpoint 1, 0x0000000000401000 in ?? ()
...SNIP...
─────────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
●→   0x401000                  xor    rbx, rbx
     0x401003                  mov    bx, 0x2179
     0x401007                  push   rbx
```

#### GCC

``` c
#include <stdio.h>

int main()
{
    int (*ret)() = (int (*)()) "\x48\x31\xdb\x66\xbb\...SNIP...\x3c\x40\x30\xff\x0f\x05";
    ret();
}
```

``` shell-session
[!bash!]$ gcc helloworld.c -o helloworld
[!bash!]$ gdb -q helloworld
```

``` shell-session
[!bash!]$ gcc helloworld.c -o helloworld -fno-stack-protector -z execstack -Wl,--omagic -g --static
[!bash!]$ ./helloworld

Hello HTB Academy!
```

## Exercise Shellcode

# 

# 

#### Questions

####