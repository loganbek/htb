<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1159
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1159
// Section Title: Intro to HTTP Verb Tampering
// Page Title: Web Attacks
// Page Number: 2
-->

# Intro to HTTP Verb Tampering

**Module Name:** Web Attacks **Page Number:** 2

#### WEB ATTACKS

# Intro to HTTP Verb Tampering

## HTTP Verb Tampering

## Insecure Configurations

``` xml
<Limit GET POST>
    Require valid-user
</Limit>
```

## Insecure Coding

``` php
$pattern = "/^[A-Za-z\s]+$/";

if(preg_match($pattern, $_GET["code"])) {
    $query = "Select * from ports where port_code like '%" . $_REQUEST["code"] . "%'";
    ...SNIP...
}
```

####