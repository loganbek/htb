<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/89/section/933
// Platform Version: V1
// Module ID: 89
// Module Name: Stack-Based Buffer Overflows on Windows x86
// Module Difficulty: Medium
// Section ID: 933
// Section Title: Fuzzing Parameters
// Page Title: Hack The Box - Academy
// Page Number: 3
-->

# Fuzzing Parameters

**Module Name:** Stack-Based Buffer Overflows on Windows x86 **Page Number:** 3

#### 

#### STACK-BASED BUFFER OVERFLOWS ON WINDOWS X86

# Fuzzing Parameters

## Identifying Input Fields

## Fuzzing Text Fields

``` powershell-session
PS C:\Users\htb-student\Desktop> python -c "print('A'*10000)"

AAAAA...SNIP....AAAA
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_registration_fuzz.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_registration_fuzz.jpg)

## Fuzzing Opened File

``` powershell-session
PS C:\Users\htb-student\Desktop> python -c "print('A'*10000, file=open('fuzz.wav', 'w'))"
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_converter_open_wav.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_converter_open_wav.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_x32dbg_pause.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_x32dbg_pause.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_x32dbg_run.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_x32dbg_run.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_crash_1.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_crash_1.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_crash_registers.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_crash_registers.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_crash_stack.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_crash_stack.jpg)

# 

# 

#### Questions

####