<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/145/section/1302
// Platform Version: V1
// Module ID: 145
// Module Name: Server-side Attacks
// Module Difficulty: Medium
// Section ID: 1302
// Section Title: Server-Side Includes Overview
// Page Title: Server-side Attacks
// Page Number: 10
-->

# Server-Side Includes Overview

**Module Name:** Server-side Attacks **Page Number:** 10

#### SERVER-SIDE ATTACKS

# Server-Side Includes Overview

``` html
// Date
<!--#echo var="DATE_LOCAL" -->

// Modification date of a file
<!--#flastmod file="index.html" -->

// CGI Program results
<!--#include virtual="/cgi-bin/counter.pl" -->

// Including a footer
<!--#include virtual="/footer.html" -->

// Executing commands
<!--#exec cmd="ls" -->

// Setting variables
<!--#set var="name" value="Rich" -->

// Including virtual files (same directory)
<!--#include virtual="file_to_include.html" -->

// Including files (same directory)
<!--#include file="file_to_include.html" -->

// Print all variables
<!--#printenv -->
```

####