<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/234/section/2575
// Platform Version: V1
// Module ID: 234
// Module Name: YARA & Sigma for SOC Analysts
// Module Difficulty: Easy
// Section ID: 2575
// Section Title: Hunting Evil with YARA (Web Edition)
// Page Title: YARA & Sigma for SOC Analysts
// Page Number: 06
-->

# Hunting Evil with YARA (Web Edition)

**Module Name:** YARA & Sigma for SOC Analysts **Page Number:** 06

#### YARA & SIGMA FOR SOC ANALYSTS

# Hunting Evil with YARA (Web Edition)

## Hunting for Evil Within Online Datasets with YARA

``` yara
rule ransomware_dharma {

    meta:
        author = "Madhukar Raina"
        version = "1.0"
        description = "Simple rule to detect strings from Dharma ransomware"
        reference = "https://www.virustotal.com/gui/file/bff6a1000a86f8edf3673d576786ec75b80bed0c458a8ca0bd52d12b74099071/behavior" 
    
    strings:
        $string_pdb = {  433A5C6372797369735C52656C656173655C5044425C7061796C6F61642E706462 }
	$string_ssss = { 73 73 73 73 73 62 73 73 73 }

        condition: all of them
}
```

![https://academy.hackthebox.com/storage/modules/234/unpac1.png](https://academy.hackthebox.com/storage/modules/234/unpac1.png)

![https://academy.hackthebox.com/storage/modules/234/unpac33.png](https://academy.hackthebox.com/storage/modules/234/unpac33.png)

![https://academy.hackthebox.com/storage/modules/234/unpac44.png](https://academy.hackthebox.com/storage/modules/234/unpac44.png)

![https://academy.hackthebox.com/storage/modules/234/unpac55.png](https://academy.hackthebox.com/storage/modules/234/unpac55.png)

####