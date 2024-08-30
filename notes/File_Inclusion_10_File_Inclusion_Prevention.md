<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/622
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 622
// Section Title: File Inclusion Prevention
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# File Inclusion Prevention

**Module Name:** File Inclusion **Page Number:** 10

#### 

#### FILE INCLUSION

# File Inclusion Prevention

## File Inclusion Prevention

## Preventing Directory Traversal

``` php
while(substr_count($input, '../', 0)) {
    $input = str_replace('../', '', $input);
};
```

## Web Server Configuration

## Web Application Firewall (WAF)

# 

# 

#### Questions

####