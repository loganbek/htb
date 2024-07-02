<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/85/section/907
// Platform Version: V1
// Module ID: 85
// Module Name: Intro to Assembly Language
// Module Difficulty: Medium
// Section ID: 907
// Section Title: Shellcoding Techniques
// Page Title: Hack The Box - Academy
// Page Number: 22
-->

# Shellcoding Techniques

**Module Name:** Intro to Assembly Language **Page Number:** 22

#### 

#### INTRO TO ASSEMBLY LANGUAGE

# Shellcoding Techniques

## Shellcoding Requirements

```undefined
$ pwn disasm '48be0020400000000000bf01000000ba12000000b8010000000f05b83c000000bf000000000f05' -c 'amd64'
   0:    48 be 00 20 40 00 00     movabs rsi,  0x402000
   7:    00 00 00
   a:    bf 01 00 00 00           mov    edi,  0x1
   f:    ba 12 00 00 00           mov    edx,  0x12
  14:    b8 01 00 00 00           mov    eax,  0x1
  19:    0f 05                    syscall
  1b:    b8 3c 00 00 00           mov    eax,  0x3c
  20:    bf 00 00 00 00           mov    edi,  0x0
  25:    0f 05                    syscall
```

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

## Remove Variables

``` nasm
mov rsi, 'Academy!'
```

``` nasm
push 'y!'
    push 'B Academ'
    push 'Hello HT'
    mov rsi, rsp
```

``` nasm
mov rbx, 'y!'
    push rbx
    mov rbx, 'B Academ'
    push rbx
    mov rbx, 'Hello HT'
    push rbx
    mov rsi, rsp
```

``` shell-session
[!bash!]$ ./assembler.sh helloworld.s

Hello HTB Academy!
```

```undefined
$ gdb -q ./helloworld
─────────────────────────────────────────────────────────────────────────────────────── registers ────
$rax   : 0x1               
$rbx   : 0x5448206f6c6c6548 ("Hello HT"?)
$rcx   : 0x0               
$rdx   : 0x12              
$rsp   : 0x00007fffffffe3b8  →  "Hello HTB Academy!"
$rbp   : 0x0               
$rsi   : 0x00007fffffffe3b8  →  "Hello HTB Academy!"
$rdi   : 0x1               
─────────────────────────────────────────────────────────────────────────────────────────── stack ────
0x00007fffffffe3b8│+0x0000: "Hello HTB Academy!"	 ← $rsp, $rsi
0x00007fffffffe3c0│+0x0008: "B Academy!"
0x00007fffffffe3c8│+0x0010: 0x0000000000002179 ("y!"?)
───────────────────────────────────────────────────────────────────────────────────── code:x86:64 ────
→   0x40102e <_start+46>      syscall 
──────────────────────────────────────────────────────────────────────────────────────────────────────
```

## Remove Addresses

## Remove NULL

```undefined
$ pwn disasm '48be0020400000000000bf01000000ba12000000b8010000000f05b83c000000bf000000000f05' -c 'amd64'
   0:    48 be 00 20 40 00 00     movabs rsi,  0x402000
   7:    00 00 00
   a:    bf 01 00 00 00           mov    edi,  0x1
   f:    ba 12 00 00 00           mov    edx,  0x12
  14:    b8 01 00 00 00           mov    eax,  0x1
  19:    0f 05                    syscall
  1b:    b8 3c 00 00 00           mov    eax,  0x3c
  20:    bf 00 00 00 00           mov    edi,  0x0
  25:    0f 05                    syscall
```

``` shell-session
[!bash!]$ pwn asm 'mov rax, 1' -c 'amd64'

48c7c001000000
```

``` shell-session
[!bash!]$ pwn asm 'xor rax, rax' -c 'amd64'

4831c0
$ pwn asm 'mov al, 1' -c 'amd64'

b001
```

``` nasm
xor rbx, rbx
    mov bx, 'y!'
```

``` nasm
xor rax, rax
    mov al, 1
    xor rdi, rdi
    mov dil, 1
    xor rdx, rdx
    mov dl, 18
    syscall

    xor rax, rax
    add al, 60
    xor dil, dil
    syscall
```

``` nasm
global _start

section .text
_start:
    xor rbx, rbx
    mov bx, 'y!'
    push rbx
    mov rbx, 'B Academ'
    push rbx
    mov rbx, 'Hello HT'
    push rbx
    mov rsi, rsp
    xor rax, rax
    mov al, 1
    xor rdi, rdi
    mov dil, 1
    xor rdx, rdx
    mov dl, 18
    syscall

    xor rax, rax
    add al, 60
    xor dil, dil
    syscall
```

``` shell-session
[!bash!]$ ./assembler.sh helloworld.s

Hello HTB Academy!
```

## Shellcoding

``` shell-session
[!bash!]$ python3 shellcoder.py helloworld

4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05
```

``` python
print("%d bytes - Found NULL byte" % len(shellcode)) if [i for i in shellcode if i == 0] else print("%d bytes - No NULL bytes" % len(shellcode))
```

``` shell-session
[!bash!]$ python3 shellcoder.py helloworld

4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05
61 bytes - No NULL bytes
```

``` shell-session
[!bash!]$ python3 loader.py '4831db66bb79215348bb422041636164656d5348bb48656c6c6f204854534889e64831c0b0014831ff40b7014831d2b2120f054831c0043c4030ff0f05'

Hello HTB Academy!
```

# 

# 

####