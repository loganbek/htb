<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/234/section/2512
// Platform Version: V1
// Module ID: 234
// Module Name: YARA & Sigma for SOC Analysts
// Module Difficulty: Easy
// Section ID: 2512
// Section Title: Sigma and Sigma Rules
// Page Title: YARA & Sigma for SOC Analysts
// Page Number: 07
-->

# Sigma and Sigma Rules

**Module Name:** YARA & Sigma for SOC Analysts **Page Number:** 07

#### YARA & SIGMA FOR SOC ANALYSTS

# Sigma and Sigma Rules

![https://academy.hackthebox.com/storage/modules/234/sigma_intro.png](https://academy.hackthebox.com/storage/modules/234/sigma_intro.png)

#### Usages of Sigma

## How Does Sigma Work?

## Sigma Rule Structure

![https://academy.hackthebox.com/storage/modules/234/sigma_structure.png](https://academy.hackthebox.com/storage/modules/234/sigma_structure.png)

``` yaml
title: Potential LethalHTA Technique Execution 
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471 
status: test 
description: Detects potential LethalHTA technique where "mshta.exe" is spawned by an "svchost.exe" process
references:
    - https://codewhitesec.blogspot.com/2018/07/lethalhta.html
author: Markus Neis 
date: 2018/06/07 
tags: 
    - attack.defense_evasion 
    - attack.t1218.005 
logsource: 
    category: process_creation  
    product: windows
detection:
    selection: 
        ParentImage|endswith: '\svchost.exe'
        Image|endswith: '\mshta.exe'
    condition: selection
falsepositives: 
    - Unknown
level: high
```

![https://academy.hackthebox.com/storage/modules/234/sigma_structure_example.png](https://academy.hackthebox.com/storage/modules/234/sigma_structure_example.png)

``` yaml
title: Potential LethalHTA Technique Execution
...
```

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
...
```

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
status: test
...
```

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
status: test
description: Detects potential LethalHTA technique where "mshta.exe" is spawned by an "svchost.exe" process
...
```

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
status: test
description: Detects potential LethalHTA technique where "mshta.exe" is spawned by an "svchost.exe" process
references:
    - https://codewhitesec.blogspot.com/2018/07/lethalhta.html
...
```

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
status: test
description: Detects potential LethalHTA technique where "mshta.exe" is spawned by an "svchost.exe" process
references:
    - https://codewhitesec.blogspot.com/2018/07/lethalhta.html
author: Markus Neis
...
```

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
status: test
description: Detects potential LethalHTA technique where "mshta.exe" is spawned by an "svchost.exe" process
references:
    - https://codewhitesec.blogspot.com/2018/07/lethalhta.html
author: Markus Neis
date: 2018/06/07
...
```

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
status: test
description: Detects potential LethalHTA technique where "mshta.exe" is spawned by an "svchost.exe" process
references:
    - https://codewhitesec.blogspot.com/2018/07/lethalhta.html
author: Markus Neis
date: 2018/06/07
logsource:
	category: process_creation
	product: windows
...
```

![https://academy.hackthebox.com/storage/modules/234/001.jpg](https://academy.hackthebox.com/storage/modules/234/001.jpg)

``` yaml
title: Potential LethalHTA Technique Execution
id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
status: test
description: Detects potential LethalHTA technique where "mshta.exe" is spawned by an "svchost.exe" process
references:
    - https://codewhitesec.blogspot.com/2018/07/lethalhta.html
author: Markus Neis
date: 2018/06/07
logsource:
	category: process_creation
	product: windows
detection:
	selection:
		ParentImage|endswith: '\svchost.exe'
        Image|endswith: '\mshta.exe'
    condition: selection
...
```

![https://academy.hackthebox.com/storage/modules/234/002.jpg](https://academy.hackthebox.com/storage/modules/234/002.jpg)

``` yaml
detection:
 	keywords:
		- evilservice
 		- svchost.exe -n evil
```

``` yaml
detection:
	selection:
 		- Image|endswith: '\example.exe'
		- Description|contains: 'Test executable'
```

``` yaml
detection:
    selection:
  	    EventLog: Security
  	    EventID:
  	      - 517
     	  - 1102
	condition: selection
```

``` yaml
detection:
	selection:
		EventLog: Security
		EventID: 4769
		TicketOptions: '0x40810000'
		TicketEncryption: '0x17'
	condition: selection
```

``` yaml
condition: selection1 or selection2 or selection3
```

## Sigma Rule Development Best Practices

####