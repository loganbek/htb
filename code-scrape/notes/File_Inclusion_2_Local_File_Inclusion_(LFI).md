<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/251
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 251
// Section Title: Local File Inclusion (LFI)
// Page Title: Hack The Box - Academy
// Page Number: 2
-->

# Local File Inclusion (LFI)

**Module Name:** File Inclusion **Page Number:** 2

#### 

#### FILE INCLUSION

# Local File Inclusion (LFI)

## Basic LFI

![https://academy.hackthebox.com/storage/modules/23/basic_lfi_lang.png](https://academy.hackthebox.com/storage/modules/23/basic_lfi_lang.png)

![https://academy.hackthebox.com/storage/modules/23/basic_lfi_es.png](https://academy.hackthebox.com/storage/modules/23/basic_lfi_es.png)

![https://academy.hackthebox.com/storage/modules/23/basic_lfi_lang_passwd.png](https://academy.hackthebox.com/storage/modules/23/basic_lfi_lang_passwd.png)

## Path Traversal

``` php
include($_GET['language']);
```

``` php
include("./languages/" . $_GET['language']);
```

![https://academy.hackthebox.com/storage/modules/23/traversal_passwd_failed.png](https://academy.hackthebox.com/storage/modules/23/traversal_passwd_failed.png)

![https://academy.hackthebox.com/storage/modules/23/traversal_passwd.png](https://academy.hackthebox.com/storage/modules/23/traversal_passwd.png)

## Filename Prefix

``` php
include("lang_" . $_GET['language']);
```

![https://academy.hackthebox.com/storage/modules/23/lfi_another_example1.png](https://academy.hackthebox.com/storage/modules/23/lfi_another_example1.png)

![https://academy.hackthebox.com/storage/modules/23/lfi_another_example_passwd1.png](https://academy.hackthebox.com/storage/modules/23/lfi_another_example_passwd1.png)

## Appended Extensions

``` php
include($_GET['language'] . ".php");
```

![https://academy.hackthebox.com/storage/modules/23/lfi_extension_failed.png](https://academy.hackthebox.com/storage/modules/23/lfi_extension_failed.png)

## Second-Order Attacks

# 

# 

#### Questions

####