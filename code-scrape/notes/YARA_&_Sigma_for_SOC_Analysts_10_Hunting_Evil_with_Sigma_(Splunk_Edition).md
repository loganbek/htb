<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/234/section/2516
// Platform Version: V1
// Module ID: 234
// Module Name: YARA & Sigma for SOC Analysts
// Module Difficulty: Easy
// Section ID: 2516
// Section Title: Hunting Evil with Sigma (Splunk Edition)
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# Hunting Evil with Sigma (Splunk Edition)

**Module Name:** YARA & Sigma for SOC Analysts **Page Number:** 10

#### 

#### YARA & SIGMA FOR SOC ANALYSTS

# Hunting Evil with Sigma (Splunk Edition)

#### Example 1: Hunting for MiniDump Function Abuse to Dump LSASS's Memory (comsvcs.dll via rundll32)

``` powershell-session
PS C:\Tools\sigma-0.21\tools> python sigmac -t splunk C:\Tools\chainsaw\sigma\rules\windows\process_access\proc_access_win_lsass_dump_comsvcs_dll.yml -c .\config\splunk-windows.yml
(TargetImage="*\\lsass.exe" SourceImage="C:\\Windows\\System32\\rundll32.exe" CallTrace="*comsvcs.dll*")
```

![https://academy.hackthebox.com/storage/modules/234/splunk_1.png](https://academy.hackthebox.com/storage/modules/234/splunk_1.png)

#### Example 2: Hunting for Notepad Spawning Suspicious Child Process

``` powershell-session
PS C:\Tools\sigma-0.21\tools> python sigmac -t splunk C:\Rules\sigma\proc_creation_win_notepad_susp_child.yml -c .\config\splunk-windows.yml
(ParentImage="*\\notepad.exe" (Image="*\\powershell.exe" OR Image="*\\pwsh.exe" OR Image="*\\cmd.exe" OR Image="*\\mshta.exe" OR Image="*\\cscript.exe" OR Image="*\\wscript.exe" OR Image="*\\taskkill.exe" OR Image="*\\regsvr32.exe" OR Image="*\\rundll32.exe" OR Image="*\\calc.exe"))
```

![https://academy.hackthebox.com/storage/modules/234/splunk_2.png](https://academy.hackthebox.com/storage/modules/234/splunk_2.png)

# 

# 

#### Questions

####