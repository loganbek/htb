<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/234/section/2572
// Platform Version: V1
// Module ID: 234
// Module Name: YARA & Sigma for SOC Analysts
// Module Difficulty: Easy
// Section ID: 2572
// Section Title: Hunting Evil with Sigma (Chainsaw Edition)
// Page Title: YARA & Sigma for SOC Analysts
// Page Number: 09
-->

# Hunting Evil with Sigma (Chainsaw Edition)

**Module Name:** YARA & Sigma for SOC Analysts **Page Number:** 09

#### YARA & SIGMA FOR SOC ANALYSTS

# Hunting Evil with Sigma (Chainsaw Edition)

## Scanning Windows Event Logs With Chainsaw

``` powershell-session
PS C:\Tools\chainsaw> .\chainsaw_x86_64-pc-windows-msvc.exe -h
Rapidly work with Forensic Artefacts

Usage: chainsaw_x86_64-pc-windows-msvc.exe [OPTIONS] <COMMAND>

Commands:
  dump     Dump an artefact into a different format
  hunt     Hunt through artefacts using detection rules for threat detection
  lint     Lint provided rules to ensure that they load correctly
  search   Search through forensic artefacts for keywords
  analyse  Perform various analyses on artifacts
  help     Print this message or the help of the given subcommand(s)

Options:
      --no-banner                  Hide Chainsaw's banner
      --num-threads <NUM_THREADS>  Limit the thread number (default: num of CPUs)
  -h, --help                       Print help
  -V, --version                    Print version

Examples:

    Hunt with Sigma and Chainsaw Rules:
        ./chainsaw hunt evtx_attack_samples/ -s sigma/ --mapping mappings/sigma-event-logs-all.yml -r rules/

    Hunt with Sigma rules and output in JSON:
        ./chainsaw hunt evtx_attack_samples/ -s sigma/ --mapping mappings/sigma-event-logs-all.yml --json

    Search for the case-insensitive word 'mimikatz':
        ./chainsaw search mimikatz -i evtx_attack_samples/

    Search for Powershell Script Block Events (EventID 4014):
        ./chainsaw search -t 'Event.System.EventID: =4104' evtx_attack_samples/
```

#### Example 1: Hunting for Multiple Failed Logins From Single Source With Sigma

``` powershell-session
PS C:\Tools\chainsaw> .\chainsaw_x86_64-pc-windows-msvc.exe hunt C:\Events\YARASigma\lab_events_2.evtx -s C:\Rules\sigma\win_security_susp_failed_logons_single_source2.yml --mapping .\mappings\sigma-event-logs-all.yml

 ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗███████╗ █████╗ ██╗    ██╗
██╔════╝██║  ██║██╔══██╗██║████╗  ██║██╔════╝██╔══██╗██║    ██║
██║     ███████║███████║██║██╔██╗ ██║███████╗███████║██║ █╗ ██║
██║     ██╔══██║██╔══██║██║██║╚██╗██║╚════██║██╔══██║██║███╗██║
╚██████╗██║  ██║██║  ██║██║██║ ╚████║███████║██║  ██║╚███╔███╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
    By Countercept (@FranticTyping, @AlexKornitzer)

[+] Loading detection rules from: C:\Rules\sigma\win_security_susp_failed_logons_single_source2.yml
[+] Loaded 1 detection rules
[+] Loading forensic artefacts from: C:\Events\YARASigma\lab_events_2.evtx (extensions: .evt, .evtx)
[+] Loaded 1 forensic artefacts (69.6 KB)
[+] Hunting: [========================================] 1/1 -
[+] Group: Sigma
┌─────────────────────┬───────────────────────────┬───────┬────────────────────────────────┬──────────┬───────────┬─────────────────┬────────────────────────────────┐
│      timestamp      │        detections         │ count │     Event.System.Provider      │ Event ID │ Record ID │    Computer     │           Event Data           │
├─────────────────────┼───────────────────────────┼───────┼────────────────────────────────┼──────────┼───────────┼─────────────────┼────────────────────────────────┤
│ 2021-05-20 12:49:52 │ + Failed NTLM Logins with │ 5     │ Microsoft-Windows-Security-Aud │ 4776     │ 1861986   │ fs01.offsec.lan │ PackageName: MICROSOFT_AUTHENT │
│                     │ Different Accounts from   │       │ iting                          │          │           │                 │ ICATION_PACKAGE_V1_0           │
│                     │ Single Source System      │       │                                │          │           │                 │ Status: '0xc0000064'           │
│                     │                           │       │                                │          │           │                 │ TargetUserName: NOUSER         │
│                     │                           │       │                                │          │           │                 │ Workstation: FS01              │
└─────────────────────┴───────────────────────────┴───────┴────────────────────────────────┴──────────┴───────────┴─────────────────┴────────────────────────────────┘

[+] 1 Detections found on 1 documents
PS C:\Tools\chainsaw>
```

#### Example 2: Hunting for Abnormal PowerShell Command Line Size With Sigma (Based on Event ID 4688)

``` yaml
title: Unusually Long PowerShell CommandLine
id: d0d28567-4b9a-45e2-8bbc-fb1b66a1f7f6
status: test
description: Detects unusually long PowerShell command lines with a length of 1000 characters or more
references:
    - https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse
author: oscd.community, Natalia Shornikova / HTB Academy, Dimitrios Bougioukas
date: 2020/10/06
modified: 2023/04/14
tags:
    - attack.execution
    - attack.t1059.001
    - detection.threat_hunting
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        EventID: 4688
        NewProcessName|endswith:
            - '\powershell.exe'
            - '\pwsh.exe'
            - '\cmd.exe'
    selection_powershell:
        CommandLine|contains:
            - 'powershell.exe'
            - 'pwsh.exe'
    selection_length:        
        CommandLine|re: '.{1000,}'
    condition: selection and selection_powershell and selection_length
falsepositives:
    - Unknown
level: low
```

``` yaml
logsource:
    category: process_creation
    product: windows
```

``` yaml
detection:
    selection:
        EventID: 4688
        NewProcessName|endswith:
            - '\powershell.exe'
            - '\pwsh.exe'
            - '\cmd.exe'
    selection_powershell:
        CommandLine|contains:
            - 'powershell.exe'
            - 'pwsh.exe'
    selection_length:        
        CommandLine|re: '.{1000,}'
    condition: selection and selection_powershell and selection_length
```

![https://academy.hackthebox.com/storage/modules/234/4688.png](https://academy.hackthebox.com/storage/modules/234/4688.png)

``` powershell-session
PS C:\Tools\chainsaw> .\chainsaw_x86_64-pc-windows-msvc.exe hunt C:\Events\YARASigma\lab_events_3.evtx -s C:\Rules\sigma\proc_creation_win_powershell_abnormal_commandline_size.yml --mapping .\mappings\sigma-event-logs-all.yml

 ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗███████╗ █████╗ ██╗    ██╗
██╔════╝██║  ██║██╔══██╗██║████╗  ██║██╔════╝██╔══██╗██║    ██║
██║     ███████║███████║██║██╔██╗ ██║███████╗███████║██║ █╗ ██║
██║     ██╔══██║██╔══██║██║██║╚██╗██║╚════██║██╔══██║██║███╗██║
╚██████╗██║  ██║██║  ██║██║██║ ╚████║███████║██║  ██║╚███╔███╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
    By Countercept (@FranticTyping, @AlexKornitzer)

[+] Loading detection rules from: C:\Rules\sigma\proc_creation_win_powershell_abnormal_commandline_size.yml
[+] Loaded 1 detection rules
[+] Loading forensic artefacts from: C:\Events\YARASigma\lab_events_3.evtx (extensions: .evt, .evtx)
[+] Loaded 1 forensic artefacts (69.6 KB)
[+] Hunting: [========================================] 1/1 -
[+] 0 Detections found on 0 documents
```

``` powershell-session
PS C:\Tools\chainsaw> .\chainsaw_x86_64-pc-windows-msvc.exe hunt C:\Events\YARASigma\lab_events_3.evtx -s C:\Rules\sigma\proc_creation_win_powershell_abnormal_commandline_size.yml --mapping .\mappings\sigma-event-logs-all-new.yml

 ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗███████╗ █████╗ ██╗    ██╗
██╔════╝██║  ██║██╔══██╗██║████╗  ██║██╔════╝██╔══██╗██║    ██║
██║     ███████║███████║██║██╔██╗ ██║███████╗███████║██║ █╗ ██║
██║     ██╔══██║██╔══██║██║██║╚██╗██║╚════██║██╔══██║██║███╗██║
╚██████╗██║  ██║██║  ██║██║██║ ╚████║███████║██║  ██║╚███╔███╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
    By Countercept (@FranticTyping, @AlexKornitzer)

[+] Loading detection rules from: C:\Rules\sigma\proc_creation_win_powershell_abnormal_commandline_size.yml
[+] Loaded 1 detection rules
[+] Loading forensic artefacts from: C:\Events\YARASigma\lab_events_3.evtx (extensions: .evtx, .evt)
[+] Loaded 1 forensic artefacts (69.6 KB)
[+] Hunting: [========================================] 1/1 -
[+] Group: Sigma
┌─────────────────────┬─────────────────────────────┬───────┬────────────────────────────────┬──────────┬───────────┬─────────────────────┬──────────────────────────────────┐
│      timestamp      │         detections          │ count │     Event.System.Provider      │ Event ID │ Record ID │      Computer       │            Event Data            │
├─────────────────────┼─────────────────────────────┼───────┼────────────────────────────────┼──────────┼───────────┼─────────────────────┼──────────────────────────────────┤
│ 2021-04-22 08:51:04 │ + Unusually Long PowerShell │ 1     │ Microsoft-Windows-Security-Aud │ 4688     │ 435121    │ fs03vuln.offsec.lan │ CommandLine: powershell.exe -n   │
│                     │ CommandLine                 │       │ iting                          │          │           │                     │ op -w hidden -noni -c "if([Int   │
│                     │                             │       │                                │          │           │                     │ Ptr]::Size -eq 4){$b='powershe   │
│                     │                             │       │                                │          │           │                     │ ll.exe'}else{$b=$env:windir+'\   │
│                     │                             │       │                                │          │           │                     │ syswow64\WindowsPowerShell\v1.   │
│                     │                             │       │                                │          │           │                     │ 0\powershell.exe'};$s=New-Obje   │
│                     │                             │       │                                │          │           │                     │ ct System.Diagnostics.ProcessS   │
│                     │                             │       │                                │          │           │                     │ tartInfo;$s.FileName=$b;$s.Arg   │
│                     │                             │       │                                │          │           │                     │ uments='-noni -nop -w hidden -   │
│                     │                             │       │                                │          │           │                     │ c &([scriptblock]::create((New   │
│                     │                             │       │                                │          │           │                     │ -Object System.IO.StreamReader   │
│                     │                             │       │                                │          │           │                     │ (New-Object System.IO.Compress   │
│                     │                             │       │                                │          │           │                     │ ion.GzipStream((New-Object Sys   │
│                     │                             │       │                                │          │           │                     │ tem.IO.MemoryStream(,[System.C   │
│                     │                             │       │                                │          │           │                     │ onvert]::FromBase64String(''H4   │
│                     │                             │       │                                │          │           │                     │ sIAPg2gWACA7VWbW+bSBD+nEj5D6iy   │
│                     │                             │       │                                │          │           │                     │ ...                              │
│                     │                             │       │                                │          │           │                     │ (use --full to show all content) │
│                     │                             │       │                                │          │           │                     │ NewProcessId: '0x7f0'            │
│                     │                             │       │                                │          │           │                     │ NewProcessName: C:\Windows\Sys   │
│                     │                             │       │                                │          │           │                     │ tem32\WindowsPowerShell\v1.0\p   │
│                     │                             │       │                                │          │           │                     │ owershell.exe                    │
│                     │                             │       │                                │          │           │                     │ ProcessId: '0x6e8'               │
│                     │                             │       │                                │          │           │                     │ SubjectDomainName: OFFSEC        │
│                     │                             │       │                                │          │           │                     │ SubjectLogonId: '0x3e7'          │
│                     │                             │       │                                │          │           │                     │ SubjectUserName: FS03VULN$       │
│                     │                             │       │                                │          │           │                     │ SubjectUserSid: S-1-5-18         │
│                     │                             │       │                                │          │           │                     │ TokenElevationType: '%%1936'     │
├─────────────────────┼─────────────────────────────┼───────┼────────────────────────────────┼──────────┼───────────┼─────────────────────┼──────────────────────────────────┤
│ 2021-04-22 08:51:04 │ + Unusually Long PowerShell │ 1     │ Microsoft-Windows-Security-Aud │ 4688     │ 435120    │ fs03vuln.offsec.lan │ CommandLine: C:\Windows\system   │
│                     │ CommandLine                 │       │ iting                          │          │           │                     │ 32\cmd.exe /b /c start /b /min   │
│                     │                             │       │                                │          │           │                     │  powershell.exe -nop -w hidden   │
│                     │                             │       │                                │          │           │                     │  -noni -c "if([IntPtr]::Size -   │
│                     │                             │       │                                │          │           │                     │ eq 4){$b='powershell.exe'}else   │
│                     │                             │       │                                │          │           │                     │ {$b=$env:windir+'\syswow64\Win   │
│                     │                             │       │                                │          │           │                     │ dowsPowerShell\v1.0\powershell   │
│                     │                             │       │                                │          │           │                     │ .exe'};$s=New-Object System.Di   │
│                     │                             │       │                                │          │           │                     │ agnostics.ProcessStartInfo;$s.   │
│                     │                             │       │                                │          │           │                     │ FileName=$b;$s.Arguments='-non   │
│                     │                             │       │                                │          │           │                     │ i -nop -w hidden -c &([scriptb   │
│                     │                             │       │                                │          │           │                     │ lock]::create((New-Object Syst   │
│                     │                             │       │                                │          │           │                     │ em.IO.StreamReader(New-Object    │
│                     │                             │       │                                │          │           │                     │ System.IO.Compression.GzipStre   │
│                     │                             │       │                                │          │           │                     │ am((New-Object System.IO.Memor   │
│                     │                             │       │                                │          │           │                     │ yStream(,[System.Convert]::Fro   │
│                     │                             │       │                                │          │           │                     │ ...                              │
│                     │                             │       │                                │          │           │                     │ (use --full to show all content) │
│                     │                             │       │                                │          │           │                     │ NewProcessId: '0x6e8'            │
│                     │                             │       │                                │          │           │                     │ NewProcessName: C:\Windows\Sys   │
│                     │                             │       │                                │          │           │                     │ tem32\cmd.exe                    │
│                     │                             │       │                                │          │           │                     │ ProcessId: '0x1d0'               │
│                     │                             │       │                                │          │           │                     │ SubjectDomainName: OFFSEC        │
│                     │                             │       │                                │          │           │                     │ SubjectLogonId: '0x3e7'          │
│                     │                             │       │                                │          │           │                     │ SubjectUserName: FS03VULN$       │
│                     │                             │       │                                │          │           │                     │ SubjectUserSid: S-1-5-18         │
│                     │                             │       │                                │          │           │                     │ TokenElevationType: '%%1936'     │
├─────────────────────┼─────────────────────────────┼───────┼────────────────────────────────┼──────────┼───────────┼─────────────────────┼──────────────────────────────────┤
│ 2021-04-22 08:51:05 │ + Unusually Long PowerShell │ 1     │ Microsoft-Windows-Security-Aud │ 4688     │ 435124    │ fs03vuln.offsec.lan │ CommandLine: '"C:\Windows\sysw   │
│                     │ CommandLine                 │       │ iting                          │          │           │                     │ ow64\WindowsPowerShell\v1.0\po   │
│                     │                             │       │                                │          │           │                     │ wershell.exe" -noni -nop -w hi   │
│                     │                             │       │                                │          │           │                     │ dden -c &([scriptblock]::creat   │
│                     │                             │       │                                │          │           │                     │ e((New-Object System.IO.Stream   │
│                     │                             │       │                                │          │           │                     │ Reader(New-Object System.IO.Co   │
│                     │                             │       │                                │          │           │                     │ mpression.GzipStream((New-Obje   │
│                     │                             │       │                                │          │           │                     │ ct System.IO.MemoryStream(,[Sy   │
│                     │                             │       │                                │          │           │                     │ stem.Convert]::FromBase64Strin   │
│                     │                             │       │                                │          │           │                     │ g(''H4sIAPg2gWACA7VWbW+bSBD+nE   │
│                     │                             │       │                                │          │           │                     │ j5D6iyBKiOIbbbvEiVbgFju4kdbBI7   │
│                     │                             │       │                                │          │           │                     │ sWud1rCGbRbWgSWO0/a/32CgTa/pXX   │
│                     │                             │       │                                │          │           │                     │ vSIb/sy8zszDPPzrDKYk9QHku+w91M   │
│                     │                             │       │                                │          │           │                     │ +nSwv+fgBEeSUouy9fqkLtXSsaPu7c   │
│                     │                             │       │                                │          │           │                     │ FGjXd7+K30TlLmaL22eIRpvDg7M7Mk   │
│                     │                             │       │                                │          │           │                     │ IbEo5o0uEShNSbRklKSKKn2WpiFJyO   │
│                     │                             │       │                                │          │           │                     │ ...                              │
│                     │                             │       │                                │          │           │                     │ (use --full to show all content) │
│                     │                             │       │                                │          │           │                     │ NewProcessId: '0x8f0'            │
│                     │                             │       │                                │          │           │                     │ NewProcessName: C:\Windows\Sys   │
│                     │                             │       │                                │          │           │                     │ WOW64\WindowsPowerShell\v1.0\p   │
│                     │                             │       │                                │          │           │                     │ owershell.exe                    │
│                     │                             │       │                                │          │           │                     │ ProcessId: '0x7f0'               │
│                     │                             │       │                                │          │           │                     │ SubjectDomainName: OFFSEC        │
│                     │                             │       │                                │          │           │                     │ SubjectLogonId: '0x3e7'          │
│                     │                             │       │                                │          │           │                     │ SubjectUserName: FS03VULN$       │
│                     │                             │       │                                │          │           │                     │ SubjectUserSid: S-1-5-18         │
│                     │                             │       │                                │          │           │                     │ TokenElevationType: '%%1936'     │
└─────────────────────┴─────────────────────────────┴───────┴────────────────────────────────┴──────────┴───────────┴─────────────────────┴──────────────────────────────────┘

[+] 3 Detections found on 3 documents
```

# 

# 

#### Questions

####