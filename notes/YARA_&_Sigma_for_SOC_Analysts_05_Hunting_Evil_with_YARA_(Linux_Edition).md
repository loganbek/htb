<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/234/section/2574
// Platform Version: V1
// Module ID: 234
// Module Name: YARA & Sigma for SOC Analysts
// Module Difficulty: Easy
// Section ID: 2574
// Section Title: Hunting Evil with YARA (Linux Edition)
// Page Title: YARA & Sigma for SOC Analysts
// Page Number: 05
-->

# Hunting Evil with YARA (Linux Edition)

**Module Name:** YARA & Sigma for SOC Analysts **Page Number:** 05

#### YARA & SIGMA FOR SOC ANALYSTS

# Hunting Evil with YARA (Linux Edition)

## Hunting for Evil Within Memory Images with YARA

``` shell-session
[!bash!]$ yara /home/htb-student/Rules/yara/wannacry_artifacts_memory.yar /home/htb-student/MemoryDumps/compromised_system.raw --print-strings
Ransomware_WannaCry /home/htb-student/MemoryDumps/compromised_system.raw
0x4e140:$wannacry_payload_str1: tasksche.exe
0x1cb9b24:$wannacry_payload_str1: tasksche.exe
0xdb564d8:$wannacry_payload_str1: tasksche.exe
0x13bac36c:$wannacry_payload_str1: tasksche.exe
0x16a2ae44:$wannacry_payload_str1: tasksche.exe
0x16ce55d8:$wannacry_payload_str1: tasksche.exe
0x17bf1fe6:$wannacry_payload_str1: tasksche.exe
0x17cb8002:$wannacry_payload_str1: tasksche.exe
0x17cb80d0:$wannacry_payload_str1: tasksche.exe
0x17cb80f8:$wannacry_payload_str1: tasksche.exe
0x18a68f50:$wannacry_payload_str1: tasksche.exe
0x18a9b4b8:$wannacry_payload_str1: tasksche.exe
0x18dc15a8:$wannacry_payload_str1: tasksche.exe
0x18df37d0:$wannacry_payload_str1: tasksche.exe
0x19a4b522:$wannacry_payload_str1: tasksche.exe
0x1aac0600:$wannacry_payload_str1: tasksche.exe
0x1c07ed9a:$wannacry_payload_str1: tasksche.exe
0x1c59cd32:$wannacry_payload_str1: tasksche.exe
0x1d1593f0:$wannacry_payload_str1: tasksche.exe
0x1d1c6fe2:$wannacry_payload_str1: tasksche.exe
0x1d92632a:$wannacry_payload_str1: tasksche.exe
0x1dd65c34:$wannacry_payload_str1: tasksche.exe
0x1e607a1e:$wannacry_payload_str1: tasksche.exe
0x1e607dca:$wannacry_payload_str1: tasksche.exe
0x13bac3d7:$wannacry_payload_str2: www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
0x197ba5e0:$wannacry_payload_str2: www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
0x1a07cedf:$wannacry_payload_str2: www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
0x1a2cb300:$wannacry_payload_str2: www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
0x1b644cd8:$wannacry_payload_str2: www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
0x1d15945b:$wannacry_payload_str2: www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
0x1dd65c9f:$wannacry_payload_str2: www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
0x450b048:$wannacry_payload_str3: mssecsvc.exe
0x5a7f3d4:$wannacry_payload_str3: mssecsvc.exe
0xda1c350:$wannacry_payload_str3: mssecsvc.exe
0x12481048:$wannacry_payload_str3: mssecsvc.exe
0x17027910:$wannacry_payload_str3: mssecsvc.exe
0x17f0dc18:$wannacry_payload_str3: mssecsvc.exe
0x18c360cc:$wannacry_payload_str3: mssecsvc.exe
0x1a2a02f0:$wannacry_payload_str3: mssecsvc.exe
0x13945408:$wannacry_payload_str4: diskpart.exe
0x19a28480:$wannacry_payload_str4: diskpart.exe
```

#### Single Pattern YARA Scanning Against a Memory Image

``` shell-session
[!bash!]$ vol.py -f /home/htb-student/MemoryDumps/compromised_system.raw yarascan -U "www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com"
Volatility Foundation Volatility Framework 2.6.1
/usr/local/lib/python2.7/dist-packages/volatility/plugins/community/YingLi/ssh_agent_key.py:12: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.
  from cryptography.hazmat.backends.openssl import backend
Rule: r1
Owner: Process svchost.exe Pid 1576
0x004313d7  77 77 77 2e 69 75 71 65 72 66 73 6f 64 70 39 69   www.iuqerfsodp9i
0x004313e7  66 6a 61 70 6f 73 64 66 6a 68 67 6f 73 75 72 69   fjaposdfjhgosuri
0x004313f7  6a 66 61 65 77 72 77 65 72 67 77 65 61 2e 63 6f   jfaewrwergwea.co
0x00431407  6d 00 00 00 00 00 00 00 00 01 00 00 00 00 00 00   m...............
0x00431417  00 f0 5d 17 00 ff ff ff ff 00 00 00 00 00 00 00   ..].............
0x00431427  00 00 00 00 00 00 00 00 00 20 00 00 00 04 00 00   ................
0x00431437  00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431447  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431457  00 00 00 00 00 50 51 17 00 00 00 00 00 00 00 00   .....PQ.........
0x00431467  00 13 00 00 00 b8 43 03 00 00 00 00 00 00 00 00   ......C.........
0x00431477  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431487  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431497  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x004314a7  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x004314b7  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x004314c7  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
Rule: r1
Owner: Process svchost.exe Pid 1576
0x0013dcd8  77 77 77 2e 69 75 71 65 72 66 73 6f 64 70 39 69   www.iuqerfsodp9i
0x0013dce8  66 6a 61 70 6f 73 64 66 6a 68 67 6f 73 75 72 69   fjaposdfjhgosuri
0x0013dcf8  6a 66 61 65 77 72 77 65 72 67 77 65 61 2e 63 6f   jfaewrwergwea.co
0x0013dd08  6d 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   m...............
---SNIP---
```

#### Multiple YARA Rule Scanning Against a Memory Image

``` shell-session
[!bash!]$ cat /home/htb-student/Rules/yara/wannacry_artifacts_memory.yar
rule Ransomware_WannaCry {

    meta:
        author = "Madhukar Raina"
        version = "1.1"
        description = "Simple rule to detect strings from WannaCry ransomware"
        reference = "https://www.virustotal.com/gui/file/ed01ebfbc9eb5bbea545af4d01bf5f1071661840480439c6e5babe8e080e41aa/behavior"


    strings:
        $wannacry_payload_str1 = "tasksche.exe" fullword ascii
        $wannacry_payload_str2 = "www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com" ascii
        $wannacry_payload_str3 = "mssecsvc.exe" fullword ascii
        $wannacry_payload_str4 = "diskpart.exe" fullword ascii
        $wannacry_payload_str5 = "lhdfrgui.exe" fullword ascii

    condition:
        3 of them
```

``` shell-session
[!bash!]$ vol.py -f /home/htb-student/MemoryDumps/compromised_system.raw yarascan -y /home/htb-student/Rules/yara/wannacry_artifacts_memory.yar
Volatility Foundation Volatility Framework 2.6.1
/usr/local/lib/python2.7/dist-packages/volatility/plugins/community/YingLi/ssh_agent_key.py:12: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.
  from cryptography.hazmat.backends.openssl import backend
Rule: Ransomware_WannaCry
Owner: Process svchost.exe Pid 1576
0x0043136c  74 61 73 6b 73 63 68 65 2e 65 78 65 00 00 00 00   tasksche.exe....
0x0043137c  52 00 00 00 43 6c 6f 73 65 48 61 6e 64 6c 65 00   R...CloseHandle.
0x0043138c  57 72 69 74 65 46 69 6c 65 00 00 00 43 72 65 61   WriteFile...Crea
0x0043139c  74 65 46 69 6c 65 41 00 43 72 65 61 74 65 50 72   teFileA.CreatePr
0x004313ac  6f 63 65 73 73 41 00 00 6b 00 65 00 72 00 6e 00   ocessA..k.e.r.n.
0x004313bc  65 00 6c 00 33 00 32 00 2e 00 64 00 6c 00 6c 00   e.l.3.2...d.l.l.
0x004313cc  00 00 00 00 68 74 74 70 3a 2f 2f 77 77 77 2e 69   ....http://www.i
0x004313dc  75 71 65 72 66 73 6f 64 70 39 69 66 6a 61 70 6f   uqerfsodp9ifjapo
0x004313ec  73 64 66 6a 68 67 6f 73 75 72 69 6a 66 61 65 77   sdfjhgosurijfaew
0x004313fc  72 77 65 72 67 77 65 61 2e 63 6f 6d 00 00 00 00   rwergwea.com....
0x0043140c  00 00 00 00 01 00 00 00 00 00 00 00 f0 5d 17 00   .............]..
0x0043141c  ff ff ff ff 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0043142c  00 00 00 00 20 00 00 00 04 00 00 00 01 00 00 00   ................
0x0043143c  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0043144c  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0043145c  50 51 17 00 00 00 00 00 00 00 00 00 13 00 00 00   PQ..............
Rule: Ransomware_WannaCry
Owner: Process svchost.exe Pid 1576
0x004313d7  77 77 77 2e 69 75 71 65 72 66 73 6f 64 70 39 69   www.iuqerfsodp9i
0x004313e7  66 6a 61 70 6f 73 64 66 6a 68 67 6f 73 75 72 69   fjaposdfjhgosuri
0x004313f7  6a 66 61 65 77 72 77 65 72 67 77 65 61 2e 63 6f   jfaewrwergwea.co
0x00431407  6d 00 00 00 00 00 00 00 00 01 00 00 00 00 00 00   m...............
0x00431417  00 f0 5d 17 00 ff ff ff ff 00 00 00 00 00 00 00   ..].............
0x00431427  00 00 00 00 00 00 00 00 00 20 00 00 00 04 00 00   ................
0x00431437  00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431447  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431457  00 00 00 00 00 50 51 17 00 00 00 00 00 00 00 00   .....PQ.........
0x00431467  00 13 00 00 00 b8 43 03 00 00 00 00 00 00 00 00   ......C.........
0x00431477  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431487  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x00431497  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x004314a7  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x004314b7  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x004314c7  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
Rule: Ransomware_WannaCry
Owner: Process svchost.exe Pid 1576
0x0040e048  6d 73 73 65 63 73 76 63 2e 65 78 65 00 00 00 00   mssecsvc.exe....
0x0040e058  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e068  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e078  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e088  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e098  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e0a8  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e0b8  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e0c8  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e0d8  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e0e8  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e0f8  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e108  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e118  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e128  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
0x0040e138  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................
Rule: Ransomware_WannaCry
Owner: Process svchost.exe Pid 1576
---SNIP---
```

# 

# 

#### Questions

####