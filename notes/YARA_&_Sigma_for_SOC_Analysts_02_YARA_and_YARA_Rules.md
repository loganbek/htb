<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/234/section/2513
// Platform Version: V1
// Module ID: 234
// Module Name: YARA & Sigma for SOC Analysts
// Module Difficulty: Easy
// Section ID: 2513
// Section Title: YARA and YARA Rules
// Page Title: YARA & Sigma for SOC Analysts
// Page Number: 02
-->

# YARA and YARA Rules

**Module Name:** YARA & Sigma for SOC Analysts **Page Number:** 02

#### YARA & SIGMA FOR SOC ANALYSTS

# YARA and YARA Rules

![https://academy.hackthebox.com/storage/modules/234/yara_intro.png](https://academy.hackthebox.com/storage/modules/234/yara_intro.png)

## Usages of Yara

## How Does YARA Work?

![https://academy.hackthebox.com/storage/modules/234/yara_working.png](https://academy.hackthebox.com/storage/modules/234/yara_working.png)

## YARA Rule Structure

``` yara
rule my_rule {

    meta:
        author = "Author Name"
        description = "example rule"
        hash = ""
    
    strings: 
        $string1 = "test"
        $string2 = "rule"
        $string3 = "htb"

    condition: 
        all of them
}
```

![https://academy.hackthebox.com/storage/modules/234/yara_keywords.png](https://academy.hackthebox.com/storage/modules/234/yara_keywords.png)

``` yara
rule Ransomware_WannaCry {

    meta:
        author = "Madhukar Raina"
        version = "1.0"
        description = "Simple rule to detect strings from WannaCry ransomware"
        reference = "https://www.virustotal.com/gui/file/ed01ebfbc9eb5bbea545af4d01bf5f1071661840480439c6e5babe8e080e41aa/behavior" 
    
    strings:
        $wannacry_payload_str1 = "tasksche.exe" fullword ascii
        $wannacry_payload_str2 = "www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com" ascii
        $wannacry_payload_str3 = "mssecsvc.exe" fullword ascii
    
    condition:
        all of them
}
```

``` yara
rule Ransomware_WannaCry {
    meta:
  ...
}
```

``` yara
rule Ransomware_WannaCry {
    meta:
        author = "Madhukar Raina"
        version = "1.0"
        description = "Simple rule to detect strings from WannaCry ransomware"
        reference = 	"https://www.virustotal.com/gui/file/ed01ebfbc9eb5bbea545af4d01bf5f1071661840480439c6e5babe8e080e41aa/behavior" 
    ...
}
```

``` yara
rule Ransomware_WannaCry {

    ...    

    strings:
        $wannacry_payload_str1 = "tasksche.exe" fullword ascii
        $wannacry_payload_str2 = "www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com" ascii
        $wannacry_payload_str3 = "mssecsvc.exe" fullword ascii

    ...

}
```

``` yara
rule Ransomware_WannaCry {
    ...

    condition:
        all of them
}
```

``` yara
condition:
        filesize < 100KB and (uint16(0) == 0x5A4D or uint16(0) == 0x4D5A)
```

``` yara
uint16(offset)
```

####