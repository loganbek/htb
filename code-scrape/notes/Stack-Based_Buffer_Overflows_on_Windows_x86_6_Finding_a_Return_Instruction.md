<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/89/section/948
// Platform Version: V1
// Module ID: 89
// Module Name: Stack-Based Buffer Overflows on Windows x86
// Module Difficulty: Medium
// Section ID: 948
// Section Title: Finding a Return Instruction
// Page Title: Stack-Based Buffer Overflows on Windows x86
// Page Number: 6
-->

# Finding a Return Instruction

**Module Name:** Stack-Based Buffer Overflows on Windows x86 **Page Number:** 6

#### STACK-BASED BUFFER OVERFLOWS ON WINDOWS X86

# Finding a Return Instruction

## Subverting Program Flow

## Jumping to Stack

![https://academy.hackthebox.com/storage/modules/89/win32bof_stack_meme.png](https://academy.hackthebox.com/storage/modules/89/win32bof_stack_meme.png)

## Using ESP Address

![https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_eip.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_eip.jpg)

## Using JMP ESP

#### Locating Modules

![https://academy.hackthebox.com/storage/modules/89/win32bof_module_info.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_module_info.jpg)

```cmd-session
------------------------------------------------------------------------------------------------------------------------ 
 Base          | Entry point   | Size      | Rebase   | SafeSEH  | ASLR    | NXCompat | OS DLL  | Version, Name, and Path 
------------------------------------------------------------------------------------------------------------------------ 
0x400000        0xd88fc         0x11c000    False      False      False      False      False      C:\Program Files\CD to MP3 Freeware\cdextract.exe 
0x672c0000      0x1000          0x13000     False      False      False      False      False      1.0rc1;AKRip32;C:\Program Files\CD to MP3 Freeware\akrip32.dll 
0x10000000      0xa3e0          0xc000      False      False      False      False      False      C:\Program Files\CD to MP3 Freeware\ogg.dll
```

#### Searching for JMP ESP

![https://academy.hackthebox.com/storage/modules/89/win32bof_module_symbols.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_module_symbols.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_find_command.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_find_command.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_find_jmp_esp.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_find_jmp_esp.jpg)

```cmd-shell
Address  Disassembly
00419D0B jmp esp
00463B91 jmp esp
00477A8B jmp esp
0047E58B jmp esp
004979F4 jmp esp
```

#### Searching for Patterns

![https://academy.hackthebox.com/storage/modules/89/win32bof_find_pattern.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_find_pattern.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_find_pattern_push_esp.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_find_pattern_push_esp.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_push_esp.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_push_esp.jpg)

## Summary

# 

# 

#### Questions

####