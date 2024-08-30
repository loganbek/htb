<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/237/section/2612
// Platform Version: V1
// Module ID: 237
// Module Name: Introduction to Digital Forensics
// Module Difficulty: Medium
// Section ID: 2612
// Section Title: Rapid Triage Examination & Analysis Tools
// Page Title: Introduction to Digital Forensics
// Page Number: 06
-->

# Rapid Triage Examination & Analysis Tools

**Module Name:** Introduction to Digital Forensics **Page Number:** 06

#### INTRODUCTION TO DIGITAL FORENSICS

# Rapid Triage Examination & Analysis Tools

![https://academy.hackthebox.com/storage/modules/237/win_dfir_eztools.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_eztools.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools> .\Get-ZimmermanTools.ps1

This script will discover and download all available programs
from https://ericzimmerman.github.io and download them to C:\htb\dfir_module\tools

A file will also be created in C:\Users\johndoe\Desktop\Get-ZimmermanTools that tracks the SHA-1 of each file,
so rerunning the script will only download new versions.

To redownload, remove lines from or delete the CSV file created under C:\htb\dfir_module\tools and rerun. Enjoy!

Use -NetVersion to control which version of the software you get (4 or 6). Default is 6. Use 0 to get both

* Getting available programs...
* Files to download: 27
* Downloaded Get-ZimmermanTools.zip (Size: 10,396)
* C:\htb\dfir_module\tools\net6 does not exist. Creating...
* Downloaded AmcacheParser.zip (Size: 23,60,293) (net 6)
* Downloaded AppCompatCacheParser.zip (Size: 22,62,497) (net 6)
* Downloaded bstrings.zip (Size: 14,73,298) (net 6)
* Downloaded EvtxECmd.zip (Size: 40,36,022) (net 6)
* Downloaded EZViewer.zip (Size: 8,25,80,608) (net 6)
* Downloaded JLECmd.zip (Size: 27,79,229) (net 6)
* Downloaded JumpListExplorer.zip (Size: 8,66,96,361) (net 6)
* Downloaded LECmd.zip (Size: 32,38,911) (net 6)
* Downloaded MFTECmd.zip (Size: 22,26,605) (net 6)
* Downloaded MFTExplorer.zip (Size: 8,27,54,162) (net 6)
* Downloaded PECmd.zip (Size: 20,13,672) (net 6)
* Downloaded RBCmd.zip (Size: 18,19,172) (net 6)
* Downloaded RecentFileCacheParser.zip (Size: 17,22,133) (net 6)
* Downloaded RECmd.zip (Size: 36,89,345) (net 6)
* Downloaded RegistryExplorer.zip (Size: 9,66,96,169) (net 6)
* Downloaded rla.zip (Size: 21,55,515) (net 6)
* Downloaded SDBExplorer.zip (Size: 8,24,54,727) (net 6)
* Downloaded SBECmd.zip (Size: 21,90,158) (net 6)
* Downloaded ShellBagsExplorer.zip (Size: 8,80,06,168) (net 6)
* Downloaded SQLECmd.zip (Size: 52,83,482) (net 6)
* Downloaded SrumECmd.zip (Size: 24,00,622) (net 6)
* Downloaded SumECmd.zip (Size: 20,23,009) (net 6)
* Downloaded TimelineExplorer.zip (Size: 8,77,50,507) (net 6)
* Downloaded VSCMount.zip (Size: 15,46,539) (net 6)
* Downloaded WxTCmd.zip (Size: 36,98,112) (net 6)
* Downloaded iisGeolocate.zip (Size: 3,66,76,319) (net 6)

* Saving downloaded version information to C:\Users\johndoe\Desktop\Get-ZimmermanTools\!!!RemoteFileDetails.csv
```

#### MAC(b) Times in NTFS

#### General Rules for Timestamps in the Windows NTFS File System

#### Timestomping Investigation

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_time3.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_time3.png)

![https://academy.hackthebox.com/storage/modules/237/img1.png](https://academy.hackthebox.com/storage/modules/237/img1.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\MFTECmd.exe -f 'C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT' --de 0x16169
MFTECmd version 1.2.2.1

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/MFTECmd

Command line: -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT --de 0x16169

Warning: Administrator privileges not found!

File type: Mft

Processed C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT in 3.4924 seconds

C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT: FILE records found: 93,615 (Free records: 287) File size: 91.8MB


Dumping details for file record with key 00016169-00000004

Entry-seq #: 0x16169-0x4, Offset: 0x585A400, Flags: InUse, Log seq #: 0xCC5FB25, Base Record entry-seq: 0x0-0x0
Reference count: 0x2, FixUp Data Expected: 04-00, FixUp Data Actual: 00-00 | 00-00 (FixUp OK: True)

**** STANDARD INFO ****
  Attribute #: 0x0, Size: 0x60, Content size: 0x48, Name size: 0x0, ContentOffset 0x18. Resident: True
  Flags: Archive, Max Version: 0x0, Flags 2: None, Class Id: 0x0, Owner Id: 0x0, Security Id: 0x557, Quota charged: 0x0, Update sequence #: 0x8B71F8

  Created On:         2022-01-03 16:54:25.2726453
  Modified On:        2023-09-07 08:30:12.4258743
  Record Modified On: 2023-09-07 08:30:12.4565632
  Last Accessed On:   2023-09-07 08:30:12.4258743

**** FILE NAME ****
  Attribute #: 0x3, Size: 0x78, Content size: 0x5A, Name size: 0x0, ContentOffset 0x18. Resident: True

  File name: CHANGE~1.TXT
  Flags: Archive, Name Type: Dos, Reparse Value: 0x0, Physical Size: 0x0, Logical Size: 0x0
  Parent Entry-seq #: 0x16947-0x2

  Created On:         2023-09-07 08:30:12.4258743
  Modified On:        2023-09-07 08:30:12.4258743
  Record Modified On: 2023-09-07 08:30:12.4258743
  Last Accessed On:   2023-09-07 08:30:12.4258743

**** FILE NAME ****
  Attribute #: 0x2, Size: 0x80, Content size: 0x68, Name size: 0x0, ContentOffset 0x18. Resident: True

  File name: ChangedFileTime.txt
  Flags: Archive, Name Type: Windows, Reparse Value: 0x0, Physical Size: 0x0, Logical Size: 0x0
  Parent Entry-seq #: 0x16947-0x2

  Created On:         2023-09-07 08:30:12.4258743
  Modified On:        2023-09-07 08:30:12.4258743
  Record Modified On: 2023-09-07 08:30:12.4258743
  Last Accessed On:   2023-09-07 08:30:12.4258743

**** DATA ****
  Attribute #: 0x1, Size: 0x18, Content size: 0x0, Name size: 0x0, ContentOffset 0x18. Resident: True

  Resident Data

  Data:

    ASCII:
    UNICODE:
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_time5.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_time5.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_time6.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_time6.png)

#### MFT File

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_exp1_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_exp1_.png)

#### Structure of MFT File Record

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str1.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str1.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str2.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str2.png)

#### File Record Header

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str3.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str3.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\MFTECmd.exe -f 'C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT' --de 27142
MFTECmd version 1.2.2.1

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/MFTECmd

Command line: -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT --de 27142

Warning: Administrator privileges not found!

File type: Mft

Processed C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT in 3.2444 seconds

C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT: FILE records found: 93,615 (Free records: 287) File size: 91.8MB


Dumping details for file record with key 00006A06-00000005

Entry-seq #: 0x6A06-0x5, Offset: 0x1A81800, Flags: InUse, Log seq #: 0xCC64595, Base Record entry-seq: 0x0-0x0
Reference count: 0x1, FixUp Data Expected: 03-00, FixUp Data Actual: 6F-65 | 00-00 (FixUp OK: True)

**** STANDARD INFO ****
  Attribute #: 0x0, Size: 0x60, Content size: 0x48, Name size: 0x0, ContentOffset 0x18. Resident: True
  Flags: Archive, Max Version: 0x0, Flags 2: None, Class Id: 0x0, Owner Id: 0x0, Security Id: 0x557, Quota charged: 0x0, Update sequence #: 0x8B8778

  Created On:         2023-09-07 08:30:26.8316176
  Modified On:        2023-09-07 08:30:26.9097759
  Record Modified On: 2023-09-07 08:30:26.9097759
  Last Accessed On:   2023-09-07 08:30:26.9097759

**** FILE NAME ****
  Attribute #: 0x2, Size: 0x70, Content size: 0x54, Name size: 0x0, ContentOffset 0x18. Resident: True

  File name: users.txt
  Flags: Archive, Name Type: DosWindows, Reparse Value: 0x0, Physical Size: 0x0, Logical Size: 0x0
  Parent Entry-seq #: 0x16947-0x2

  Created On:         2023-09-07 08:30:26.8316176
  Modified On:        2023-09-07 08:30:26.8316176
  Record Modified On: 2023-09-07 08:30:26.8316176
  Last Accessed On:   2023-09-07 08:30:26.8316176

**** DATA ****
  Attribute #: 0x1, Size: 0x150, Content size: 0x133, Name size: 0x0, ContentOffset 0x18. Resident: True

  Resident Data

  Data: 0D-0A-55-73-65-72-20-61-63-63-6F-75-6E-74-73-20-66-6F-72-20-5C-5C-48-54-42-56-4D-30-31-0D-0A-0D-0A-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-2D-0D-0A-41-64-6D-69-6E-69-73-74-72-61-74-6F-72-20-20-20-20-20-20-20-20-20-20-20-20-62-61-63-6B-67-72-6F-75-6E-64-54-61-73-6B-20-20-20-20-20-20-20-20-20-20-20-44-65-66-61-75-6C-74-41-63-63-6F-75-6E-74-20-20-20-20-20-20-20-20-20-20-20-0D-0A-47-75-65-73-74-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-4A-6F-68-6E-20-44-6F-65-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-20-57-44-41-47-55-74-69-6C-69-74-79-41-63-63-6F-75-6E-74-20-20-20-20-20-20-20-0D-0A-54-68-65-20-63-6F-6D-6D-61-6E-64-20-63-6F-6D-70-6C-65-74-65-64-20-73-75-63-63-65-73-73-66-75-6C-6C-79-2E-0D-0A-0D-0A

    ASCII:
User accounts for \\HTBVM01

-------------------------------------------------------------------------------
Administrator            backgroundTask           DefaultAccount
Guest                    John Doe                 WDAGUtilityAccount
The command completed successfully.


    UNICODE: ????????????????????????????????????????????????????????????????+++++????????+++++???????+++++????++++++++++????++++++++?????????4+++?????????????????????
```

![https://academy.hackthebox.com/storage/modules/237/img2.png](https://academy.hackthebox.com/storage/modules/237/img2.png)

![https://academy.hackthebox.com/storage/modules/237/img3.png](https://academy.hackthebox.com/storage/modules/237/img3.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str4.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str4.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_ecmd2_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_ecmd2_.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str5.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_str5.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_ecmd3.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_ecmd3.png)

#### Zone.Identifier data in MFT File Record

``` powershell-session
PS C:\Users\johndoe\Downloads> Get-Item * -Stream Zone.Identifier -ErrorAction SilentlyContinue


PSPath        : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads\Autoruns.zip:Zone.Identifier
PSParentPath  : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads
PSChildName   : Autoruns.zip:Zone.Identifier
PSDrive       : C
PSProvider    : Microsoft.PowerShell.Core\FileSystem
PSIsContainer : False
FileName      : C:\Users\johndoe\Downloads\Autoruns.zip
Stream        : Zone.Identifier
Length        : 130

PSPath        : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads\chainsaw_all_platforms+rules+examples.
                zip:Zone.Identifier
PSParentPath  : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads
PSChildName   : chainsaw_all_platforms+rules+examples.zip:Zone.Identifier
PSDrive       : C
PSProvider    : Microsoft.PowerShell.Core\FileSystem
PSIsContainer : False
FileName      : C:\Users\johndoe\Downloads\chainsaw_all_platforms+rules+examples.zip
Stream        : Zone.Identifier
Length        : 679

PSPath        : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads\disable-defender.ps1:Zone.Identifier
PSParentPath  : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads
PSChildName   : disable-defender.ps1:Zone.Identifier
PSDrive       : C
PSProvider    : Microsoft.PowerShell.Core\FileSystem
PSIsContainer : False
FileName      : C:\Users\johndoe\Downloads\disable-defender.ps1
Stream        : Zone.Identifier
Length        : 55

PSPath        : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads\USN-Journal-Parser-master.zip:Zone.Ide
                ntifier
PSParentPath  : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads
PSChildName   : USN-Journal-Parser-master.zip:Zone.Identifier
PSDrive       : C
PSProvider    : Microsoft.PowerShell.Core\FileSystem
PSIsContainer : False
FileName      : C:\Users\johndoe\Downloads\USN-Journal-Parser-master.zip
Stream        : Zone.Identifier
Length        : 187

PSPath        : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads\volatility3-develop.zip:Zone.Identifie
                r
PSParentPath  : Microsoft.PowerShell.Core\FileSystem::C:\Users\johndoe\Downloads
PSChildName   : volatility3-develop.zip:Zone.Identifier
PSDrive       : C
PSProvider    : Microsoft.PowerShell.Core\FileSystem
PSIsContainer : False
FileName      : C:\Users\johndoe\Downloads\volatility3-develop.zip
Stream        : Zone.Identifier
Length        : 184
```

``` powershell-session
PS C:\Users\johndoe\Downloads> Get-Content * -Stream Zone.Identifier -ErrorAction SilentlyContinue
[ZoneTransfer]
ZoneId=3
ReferrerUrl=https://learn.microsoft.com/
HostUrl=https://download.sysinternals.com/files/Autoruns.zip
[ZoneTransfer]
ZoneId=3
ReferrerUrl=https://github.com/WithSecureLabs/chainsaw/releases
HostUrl=https://objects.githubusercontent.com/github-production-release-asset-2e65be/395658506/222c726c-0fe8-4a13-82c4-a4c9a45875c6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230813%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230813T181953Z&X-Amz-Expires=300&X-Amz-Signature=0968cc87b63f171b60eb525362c11cb6463ac5681db50dbb7807cc5384fcb771&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=395658506&response-content-disposition=attachment%3B%20filename%3Dchainsaw_all_platforms%2Brules%2Bexamples.zip&response-content-type=application%2Foctet-stream
[ZoneTransfer]
ZoneId=3
HostUrl=https://github.com/
[ZoneTransfer]
ZoneId=3
ReferrerUrl=https://github.com/PoorBillionaire/USN-Journal-Parser
HostUrl=https://codeload.github.com/PoorBillionaire/USN-Journal-Parser/zip/refs/heads/master
[ZoneTransfer]
ZoneId=3
ReferrerUrl=https://github.com/volatilityfoundation/volatility3
HostUrl=https://codeload.github.com/volatilityfoundation/volatility3/zip/refs/heads/develop
```

![https://academy.hackthebox.com/storage/modules/237/img4.png](https://academy.hackthebox.com/storage/modules/237/img4.png)

#### Analyzing with Timeline Explorer

![https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt8.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt8.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt9.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt9.png)

#### USN Journal

![https://academy.hackthebox.com/storage/modules/237/img5.png](https://academy.hackthebox.com/storage/modules/237/img5.png)

#### Analyzing the USN Journal Using MFTECmd

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\MFTECmd.exe -f 'C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$Extend\$J' --csv C:\Users\johndoe\Desktop\forensic_data\mft_analysis\ --csvf MFT-J.csv
MFTECmd version 1.2.2.1

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/MFTECmd

Command line: -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$Extend\$J --csv C:\Users\johndoe\Desktop\forensic_data\mft_analysis\ --csvf MFT-J.csv

Warning: Administrator privileges not found!

File type: UsnJournal


Processed C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$Extend\$J in 0.1675 seconds

Usn entries found in C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$Extend\$J: 89,704
        CSV output will be saved to C:\Users\johndoe\Desktop\forensic_data\mft_analysis\MFT-J.csv
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_usn2.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_usn2.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_usn3.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_usn3.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\MFTECmd.exe -f 'C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT' --csv C:\Users\johndoe\Desktop\forensic_data\mft_analysis\ --csvf MFT.csv
MFTECmd version 1.2.2.1

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/MFTECmd

Command line: -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT --csv C:\Users\johndoe\Desktop\forensic_data\mft_analysis\ --csvf MFT.csv

Warning: Administrator privileges not found!

File type: Mft

Processed C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT in 3.5882 seconds

C:\Users\johndoe\Desktop\forensic_data\kape_output\D\$MFT: FILE records found: 93,615 (Free records: 287) File size: 91.8MB
        CSV output will be saved to C:\Users\johndoe\Desktop\forensic_data\mft_analysis\MFT.csv
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_ecmd5_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mft_ecmd5_.png)

#### Windows Event Logs Investigation

![https://academy.hackthebox.com/storage/modules/237/img6.png](https://academy.hackthebox.com/storage/modules/237/img6.png)

#### Windows Event Logs Parsing Using EvtxECmd (EZ-Tool)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6\EvtxeCmd> .\EvtxECmd.exe -h
Description:
  EvtxECmd version 1.5.0.0

  Author: Eric Zimmerman (saericzimmerman@gmail.com)
  https://github.com/EricZimmerman/evtx

  Examples: EvtxECmd.exe -f "C:\Temp\Application.evtx" --csv "c:\temp\out" --csvf MyOutputFile.csv
            EvtxECmd.exe -f "C:\Temp\Application.evtx" --csv "c:\temp\out"
            EvtxECmd.exe -f "C:\Temp\Application.evtx" --json "c:\temp\jsonout"

            Short options (single letter) are prefixed with a single dash. Long commands are prefixed with two dashes

Usage:
  EvtxECmd [options]

Options:
  -f <f>           File to process. This or -d is required
  -d <d>           Directory to process that contains evtx files. This or -f is required
  --csv <csv>      Directory to save CSV formatted results to
  --csvf <csvf>    File name to save CSV formatted results to. When present, overrides default name
  --json <json>    Directory to save JSON formatted results to
  --jsonf <jsonf>  File name to save JSON formatted results to. When present, overrides default name
  --xml <xml>      Directory to save XML formatted results to
  --xmlf <xmlf>    File name to save XML formatted results to. When present, overrides default name
  --dt <dt>        The custom date/time format to use when displaying time stamps [default: yyyy-MM-dd HH:mm:ss.fffffff]
  --inc <inc>      List of Event IDs to process. All others are ignored. Overrides --exc Format is 4624,4625,5410
  --exc <exc>      List of Event IDs to IGNORE. All others are included. Format is 4624,4625,5410
  --sd <sd>        Start date for including events (UTC). Anything OLDER than this is dropped. Format should match --dt
  --ed <ed>        End date for including events (UTC). Anything NEWER than this is dropped. Format should match --dt
  --fj             When true, export all available data when using --json [default: False]
  --tdt <tdt>      The number of seconds to use for time discrepancy detection [default: 1]
  --met            When true, show metrics about processed event log [default: True]
  --maps <maps>    The path where event maps are located. Defaults to 'Maps' folder where program was executed
                   [default: C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6\EvtxeCmd\Maps]
  --vss            Process all Volume Shadow Copies that exist on drive specified by -f or -d [default: False]
  --dedupe         Deduplicate -f or -d & VSCs based on SHA-1. First file found wins [default: True]
  --sync           If true, the latest maps from https://github.com/EricZimmerman/evtx/tree/master/evtx/Maps are
                   downloaded and local maps updated [default: False]
  --debug          Show debug information during processing [default: False]
  --trace          Show trace information during processing [default: False]
  --version        Show version information
  -?, -h, --help   Show help and usage information
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt4_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt4_.png)

#### Maps in EvtxECmd

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6\EvtxeCmd> .\EvtxECmd.exe --sync
EvtxECmd version 1.5.0.0

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/evtx

Checking for updated maps at https://github.com/EricZimmerman/evtx/tree/master/evtx/Maps...

Updates found!

New maps
Application_ESENT_216
CiscoSecureEndpoint-Events_CiscoSecureEndpoint_100
CiscoSecureEndpoint-Events_CiscoSecureEndpoint_1300
CiscoSecureEndpoint-Events_CiscoSecureEndpoint_1310
Kaspersky-Security_OnDemandScan_3023
Kaspersky-Security_Real-Time_File_Protection_3023
Microsoft-Windows-Hyper-V-VMMS-Admin_Microsoft-Windows-Hyper-V-VMMS_13002
Microsoft-Windows-Hyper-V-VMMS-Admin_Microsoft-Windows-Hyper-V-VMMS_18304
Microsoft-Windows-Hyper-V-VMMS-Admin_Microsoft-Windows-Hyper-V-Worker_13003
Microsoft-Windows-Hyper-V-Worker-Admin_Microsoft-Windows-Hyper-V-Worker_18303
Microsoft-Windows-Hyper-V-Worker-Admin_Microsoft-Windows-Hyper-V-Worker_18504
Microsoft-Windows-Hyper-V-Worker-Admin_Microsoft-Windows-Hyper-V-Worker_18512
Microsoft-Windows-Windows-Defender-Operational_Microsoft-Windows-Windows-Defender_2050
PowerShellCore-Operational_PowerShellCore_4104
Security_Microsoft-Windows-Security-Auditing_6272
Security_Microsoft-Windows-Security-Auditing_6273

Updated maps
Microsoft-Windows-Hyper-V-Worker-Admin_Microsoft-Windows-Hyper-V-Worker_18500
Microsoft-Windows-Hyper-V-Worker-Admin_Microsoft-Windows-Hyper-V-Worker_18502
Microsoft-Windows-Hyper-V-Worker-Admin_Microsoft-Windows-Hyper-V-Worker_18508
Microsoft-Windows-Hyper-V-Worker-Admin_Microsoft-Windows-Hyper-V-Worker_18514
Microsoft-Windows-SMBServer-Security_Microsoft-Windows-SMBServer_551
Security_Microsoft-Windows-Security-Auditing_4616
```

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6\EvtxeCmd> .\EvtxECmd.exe -f "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\winevt\logs\Microsoft-Windows-Sysmon%4Operational.evtx" --csv "C:\Users\johndoe\Desktop\forensic_data\event_logs\csv_timeline" --csvf kape_event_log.csv
EvtxECmd version 1.5.0.0

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/evtx

Command line: -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\winevt\logs\Microsoft-Windows-Sysmon%4Operational.evtx --csv C:\Users\johndoe\Desktop\forensic_data\event_logs\csv_timeline --csvf kape_event_log.csv

Warning: Administrator privileges not found!

CSV output will be saved to C:\Users\johndoe\Desktop\forensic_data\event_logs\csv_timeline\kape_event_log.csv

Processing C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\winevt\logs\Microsoft-Windows-Sysmon%4Operational.evtx...

Event log details
Flags: None
Chunk count: 28
Stored/Calculated CRC: 3EF9F1C/3EF9F1C
Earliest timestamp: 2023-09-07 08:23:18.4430130
Latest timestamp:   2023-09-07 08:33:00.0069805
Total event log records found: 1,920

Records included: 1,920 Errors: 0 Events dropped: 0

Metrics (including dropped events)
Event ID        Count
1               95
2               76
3               346
4               1
8               44
10              6
11              321
12              674
13              356
16              1

Processed 1 file in 8.7664 seconds
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt6.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt6.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt7.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt7.png)

#### Investigating Windows Event Logs with EQL

``` cmd-session
C:\Users\johndoe>pip install eql
```

``` cmd-session
C:\Users\johndoe>eql --version
eql 0.9.18
```

``` powershell-session
PS C:\Users\johndoe\Desktop\eqllib-master\utils> import-module .\scrape-events.ps1
```

``` powershell-session
PS C:\Users\johndoe\Desktop\eqllib-master\utils> Get-WinEvent -Path C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\winevt\logs\Microsoft-Windows-Sysmon%4Operational.evtx -Oldest | Get-EventProps | ConvertTo-Json | Out-File -Encoding ASCII -FilePath C:\Users\johndoe\Desktop\forensic_data\event_logs\eql_format_json\eql-sysmon-data-kape.json
```

``` cmd-session
C:\Users\johndoe>eql query -f C:\Users\johndoe\Desktop\forensic_data\event_logs\eql_format_json\eql-sysmon-data-kape.json "EventId=1 and (Image='*net.exe' and (wildcard(CommandLine, '* user*', '*localgroup *', '*group *')))"
{"CommandLine": "net  localgroup \"Remote Desktop Users\" backgroundTask /add", "Company": "Microsoft Corporation", "CurrentDirectory": "C:\\Temp\\", "Description": "Net Command", "EventId": 1, "FileVersion": "10.0.19041.1 (WinBuild.160101.0800)", "Hashes": "MD5=0BD94A338EEA5A4E1F2830AE326E6D19,SHA256=9F376759BCBCD705F726460FC4A7E2B07F310F52BAA73CAAAAA124FDDBDF993E,IMPHASH=57F0C47AE2A1A2C06C8B987372AB0B07", "Image": "C:\\Windows\\System32\\net.exe", "IntegrityLevel": "High", "LogonGuid": "{b5ae2bdd-9f94-64ec-0000-002087490200}", "LogonId": "0x24987", "ParentCommandLine": "C:\\Windows\\system32\\cmd.exe /c install.bat", "ParentImage": "C:\\Windows\\System32\\cmd.exe", "ParentProcessGuid": "{b5ae2bdd-8a0f-64f9-0000-00104cfc4700}", "ParentProcessId": "6540", "ProcessGuid": "{b5ae2bdd-8a14-64f9-0000-0010e8804800}", "ProcessId": "3808", "Product": "Microsoft? Windows? Operating System", "RuleName": null, "TerminalSessionId": "1", "User": "HTBVM01\\John Doe", "UtcTime": "2023-09-07 08:30:12.178"}
{"CommandLine": "net  users  ", "Company": "Microsoft Corporation", "CurrentDirectory": "C:\\Temp\\", "Description": "Net Command", "EventId": 1, "FileVersion": "10.0.19041.1 (WinBuild.160101.0800)", "Hashes": "MD5=0BD94A338EEA5A4E1F2830AE326E6D19,SHA256=9F376759BCBCD705F726460FC4A7E2B07F310F52BAA73CAAAAA124FDDBDF993E,IMPHASH=57F0C47AE2A1A2C06C8B987372AB0B07", "Image": "C:\\Windows\\System32\\net.exe", "IntegrityLevel": "High", "LogonGuid": "{b5ae2bdd-9f94-64ec-0000-002087490200}", "LogonId": "0x24987", "ParentCommandLine": "cmd.exe /c ping -n 10 127.0.0.1 > nul && net users > users.txt && net localgroup > groups.txt && ipconfig >ipinfo.txt && netstat -an >networkinfo.txt && del /F /Q C:\\Temp\\discord.exe", "ParentImage": "C:\\Windows\\System32\\cmd.exe", "ParentProcessGuid": "{b5ae2bdd-8a19-64f9-0000-0010c5914800}", "ParentProcessId": "4040", "ProcessGuid": "{b5ae2bdd-8a22-64f9-0000-0010c59f4800}", "ProcessId": "5364", "Product": "Microsoft? Windows? Operating System", "RuleName": null, "TerminalSessionId": "1", "User": "HTBVM01\\John Doe", "UtcTime": "2023-09-07 08:30:26.851"}
{"CommandLine": "net  localgroup  ", "Company": "Microsoft Corporation", "CurrentDirectory": "C:\\Temp\\", "Description": "Net Command", "EventId": 1, "FileVersion": "10.0.19041.1 (WinBuild.160101.0800)", "Hashes": "MD5=0BD94A338EEA5A4E1F2830AE326E6D19,SHA256=9F376759BCBCD705F726460FC4A7E2B07F310F52BAA73CAAAAA124FDDBDF993E,IMPHASH=57F0C47AE2A1A2C06C8B987372AB0B07", "Image": "C:\\Windows\\System32\\net.exe", "IntegrityLevel": "High", "LogonGuid": "{b5ae2bdd-9f94-64ec-0000-002087490200}", "LogonId": "0x24987", "ParentCommandLine": "cmd.exe /c ping -n 10 127.0.0.1 > nul && net users > users.txt && net localgroup > groups.txt && ipconfig >ipinfo.txt && netstat -an >networkinfo.txt && del /F /Q C:\\Temp\\discord.exe", "ParentImage": "C:\\Windows\\System32\\cmd.exe", "ParentProcessGuid": "{b5ae2bdd-8a19-64f9-0000-0010c5914800}", "ParentProcessId": "4040", "ProcessGuid": "{b5ae2bdd-8a22-64f9-0000-001057a24800}", "ProcessId": "4832", "Product": "Microsoft? Windows? Operating System", "RuleName": null, "TerminalSessionId": "1", "User": "HTBVM01\\John Doe", "UtcTime": "2023-09-07 08:30:26.925"}
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt11.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_winevt11.png)

#### Windows Registry

![https://academy.hackthebox.com/storage/modules/237/img10.png](https://academy.hackthebox.com/storage/modules/237/img10.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_registry1_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_registry1_.png)

![https://academy.hackthebox.com/storage/modules/237/img11.png](https://academy.hackthebox.com/storage/modules/237/img11.png)

![https://academy.hackthebox.com/storage/modules/237/img12.png](https://academy.hackthebox.com/storage/modules/237/img12.png)

#### RegRipper

``` powershell-session
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -h
Rip v.3.0 - CLI RegRipper tool
Rip [-r Reg hive file] [-f profile] [-p plugin] [options]
Parse Windows Registry files, using either a single module, or a profile.

NOTE: This tool does NOT automatically process Registry transaction logs! The tool
does check to see if the hive is dirty, but does not automatically process the
transaction logs.  If you need to incorporate transaction logs, please consider
using yarp + registryFlush.py, or rla.exe from Eric Zimmerman.

  -r [hive] .........Registry hive file to parse
  -d ................Check to see if the hive is dirty
  -g ................Guess the hive file type
  -a ................Automatically run hive-specific plugins
  -aT ...............Automatically run hive-specific TLN plugins
  -f [profile].......use the profile
  -p [plugin]........use the plugin
  -l ................list all plugins
  -c ................Output plugin list in CSV format (use with -l)
  -s systemname......system name (TLN support)
  -u username........User name (TLN support)
  -uP ...............Update default profiles
  -h.................Help (print this information)

Ex: C:\>rip -r c:\case\system -f system
    C:\>rip -r c:\case\ntuser.dat -p userassist
    C:\>rip -r c:\case\ntuser.dat -a
    C:\>rip -l -c

All output goes to STDOUT; use redirection (ie, > or >>) to output to a file.

copyright 2020 Quantum Analytics Research, LLC
```

``` powershell-session
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -l -c > rip_plugins.csv
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_regripper_5.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_regripper_5.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -r "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\config\SYSTEM" -p compname
Launching compname v.20090727
compname v.20090727
(System) Gets ComputerName and Hostname values from System hive

ComputerName    = HTBVM01
TCP/IP Hostname = HTBVM01
```

``` powershell-session
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -r "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\config\SYSTEM" -p timezone
Launching timezone v.20200518
timezone v.20200518
(System) Get TimeZoneInformation key contents

TimeZoneInformation key
ControlSet001\Control\TimeZoneInformation
LastWrite Time 2023-08-28 23:03:03Z
  DaylightName   -> @tzres.dll,-211
  StandardName   -> @tzres.dll,-212
  Bias           -> 480 (8 hours)
  ActiveTimeBias -> 420 (7 hours)
  TimeZoneKeyName-> Pacific Standard Time
```

``` powershell-session
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -r "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\config\SYSTEM" -p nic2
Launching nic2 v.20200525
nic2 v.20200525
(System) Gets NIC info from System hive

Adapter: {50c7b4ab-b059-43f4-8b0f-919502abc934}
LastWrite Time: 2023-09-07 08:01:06Z
  EnableDHCP                   0
  Domain
  NameServer                   10.10.10.100
  DhcpServer                   255.255.255.255
  Lease                        1800
  LeaseObtainedTime            2023-09-07 07:58:03Z
  T1                           2023-09-07 08:13:03Z
  T2                           2023-09-07 08:24:18Z
  LeaseTerminatesTime          2023-09-07 08:28:03Z
  AddressType                  0
  IsServerNapAware             0
  DhcpConnForceBroadcastFlag   0
  DhcpInterfaceOptions         ├╝               ├Ä☻  w               ├Ä☻  /               ├Ä☻  .               ├Ä☻  ,               ├Ä☻  +               ├Ä☻  !               ├Ä☻  ▼               ├Ä☻  ♥               ├Ä☻  ☼               ├Ä☻  ♠               ├Ä☻  ☺               ├Ä☻  3               ├Ä☻  6               ├Ä☻  5               ├Ä☻
  DhcpGatewayHardware          ├Ç┬¿┬╢☻♠    PV├Ñ┬ó┬¥
  DhcpGatewayHardwareCount     1
  RegistrationEnabled          1
  RegisterAdapterName          0
  IPAddress                    10.10.10.11
  SubnetMask                   255.0.0.0
  DefaultGateway               10.10.10.100
  DefaultGatewayMetric         0

ControlSet001\Services\Tcpip\Parameters\Interfaces has no subkeys.
Adapter: {6c733e3b-de84-487a-a0bd-48b9d9ec7616}
LastWrite Time: 2023-09-07 08:01:06Z
  EnableDHCP                   1
  Domain
  NameServer
  RegistrationEnabled          1
  RegisterAdapterName          0
```

``` powershell-session
Microsoft\Windows\CurrentVersion\Installer\UserData not found.
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -r "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\System32\config\SOFTWARE" -p installer
Launching installer v.20200517
Launching installer v.20200517
(Software) Determines product install information

Installer
Microsoft\Windows\CurrentVersion\Installer\UserData

User SID: S-1-5-18
Key      : 01DCD275E2FC1D341815B89DCA09680D
LastWrite: 2023-08-28 09:39:56Z
20230828 - Microsoft Visual C++ 2019 X86 Additional Runtime - 14.28.29913 14.28.29913 (Microsoft Corporation)

Key      : 3367A02690A78A24580870A644384C0B
LastWrite: 2023-08-28 09:39:59Z
20230828 - Microsoft Visual C++ 2019 X64 Additional Runtime - 14.28.29913 14.28.29913 (Microsoft Corporation)

Key      : 426D5FF15155343438A75EC40151376E
LastWrite: 2023-08-28 09:40:29Z
20230828 - VMware Tools 11.3.5.18557794 (VMware, Inc.)

Key      : 731DDCEEAD31DE64DA0ADB7F8FEB568B
LastWrite: 2023-08-28 09:39:58Z
20230828 - Microsoft Visual C++ 2019 X64 Minimum Runtime - 14.28.29913 14.28.29913 (Microsoft Corporation)

Key      : DBBE6326F05F3B048B91D80B6C8003C8
LastWrite: 2023-08-28 09:39:55Z
20230828 - Microsoft Visual C++ 2019 X86 Minimum Runtime - 14.28.29913 14.28.29913 (Microsoft Corporation)
```

``` powershell-session
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -r "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Users\John Doe\NTUSER.DAT" -p recentdocs
Launching recentdocs v.20200427
recentdocs v.20200427
(NTUSER.DAT) Gets contents of user's RecentDocs key

RecentDocs
**All values printed in MRUList\MRUListEx order.
Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs
LastWrite Time: 2023-09-07 08:28:20Z
  2 = The Internet
  7 = threat/
  0 = system32
  6 = This PC
  5 = C:\
  4 = Local Disk (C:)
  3 = Temp
  1 = redirect

Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs\Folder
LastWrite Time 2023-09-07 08:28:20Z
MRUListEx = 1,0,3,2
  1 = The Internet
  0 = system32
  3 = This PC
  2 = Local Disk (C:)
```

``` powershell-session
PS C:\Users\johndoe\Desktop\RegRipper3.0-master> .\rip.exe -r "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Users\John Doe\NTUSER.DAT" -p run
Launching run v.20200511
run v.20200511
(Software, NTUSER.DAT) [Autostart] Get autostart key contents from Software hive

Software\Microsoft\Windows\CurrentVersion\Run
LastWrite Time 2023-09-07 08:30:07Z
  MicrosoftEdgeAutoLaunch_0562217A6A32A7E92C68940F512715D9 - "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --no-startup-window --win-session-start /prefetch:5
  DiscordUpdate - C:\Windows\Tasks\update.exe

Software\Microsoft\Windows\CurrentVersion\Run has no subkeys.

Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Run not found.

Software\Microsoft\Windows\CurrentVersion\RunOnce not found.

Software\Microsoft\Windows\CurrentVersion\RunServices not found.

Software\Microsoft\Windows\CurrentVersion\RunServicesOnce not found.

Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Install\Software\Microsoft\Windows\CurrentVersion\Run not found.

Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Install\Software\Microsoft\Windows\CurrentVersion\RunOnce not found.

Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run not found.

Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run not found.

Software\Microsoft\Windows\CurrentVersion\StartupApproved\Run not found.

Software\Microsoft\Windows\CurrentVersion\StartupApproved\Run32 not found.

Software\Microsoft\Windows\CurrentVersion\StartupApproved\StartupFolder not found.
```

#### Program Execution Artifacts

#### Investigation of Prefetch

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch_.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\PECmd.exe -h
Description:
  PECmd version 1.5.0.0

  Author: Eric Zimmerman (saericzimmerman@gmail.com)
  https://github.com/EricZimmerman/PECmd

  Examples: PECmd.exe -f "C:\Temp\CALC.EXE-3FBEF7FD.pf"
            PECmd.exe -f "C:\Temp\CALC.EXE-3FBEF7FD.pf" --json "D:\jsonOutput" --jsonpretty
            PECmd.exe -d "C:\Temp" -k "system32, fonts"
            PECmd.exe -d "C:\Temp" --csv "c:\temp" --csvf foo.csv --json c:\temp\json
            PECmd.exe -d "C:\Windows\Prefetch"

            Short options (single letter) are prefixed with a single dash. Long commands are prefixed with two dashes

Usage:
  PECmd [options]

Options:
  -f <f>           File to process. Either this or -d is required
  -d <d>           Directory to recursively process. Either this or -f is required
  -k <k>           Comma separated list of keywords to highlight in output. By default, 'temp' and 'tmp' are
                   highlighted. Any additional keywords will be added to these
  -o <o>           When specified, save prefetch file bytes to the given path. Useful to look at decompressed Win10
                   files
  -q               Do not dump full details about each file processed. Speeds up processing when using --json or --csv 
                   [default: False]
  --json <json>    Directory to save JSON formatted results to. Be sure to include the full path in double quotes
  --jsonf <jsonf>  File name to save JSON formatted results to. When present, overrides default name
  --csv <csv>      Directory to save CSV formatted results to. Be sure to include the full path in double quotes
  --csvf <csvf>    File name to save CSV formatted results to. When present, overrides default name
  --html <html>    Directory to save xhtml formatted results to. Be sure to include the full path in double quotes
  --dt <dt>        The custom date/time format to use when displaying time stamps. See https://goo.gl/CNVq0k for
                   options [default: yyyy-MM-dd HH:mm:ss]
  --mp             When true, display higher precision for timestamps [default: False]
  --vss            Process all Volume Shadow Copies that exist on drive specified by -f or -d [default: False]
  --dedupe         Deduplicate -f or -d & VSCs based on SHA-1. First file found wins [default: False]
  --debug          Show debug information during processing [default: False]
  --trace          Show trace information during processing [default: False]
  --version        Show version information
  -?, -h, --help   Show help and usage information
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch1_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch1_.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\PECmd.exe -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch\DISCORD.EXE-7191FAD6.pf
PECmd version 1.5.0.0

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/PECmd

Command line: -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch\DISCORD.EXE-7191FAD6.pf

Warning: Administrator privileges not found!

Keywords: temp, tmp

Processing C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch\DISCORD.EXE-7191FAD6.pf

Created on: 2023-09-07 08:30:16
Modified on: 2023-09-07 08:30:16
Last accessed on: 2023-09-17 15:55:01

Executable name: DISCORD.EXE
Hash: 7191FAD6
File size (bytes): 51,104
Version: Windows 10 or Windows 11

Run count: 1
Last run: 2023-09-07 08:30:06

Volume information:

#0: Name: \VOLUME{01d9da035d4d8f00-285d5e74} Serial: 285D5E74 Created: 2023-08-28 22:59:56 Directories: 23 File references: 106

Directories referenced: 23

00: \VOLUME{01d9da035d4d8f00-285d5e74}\$EXTEND
01: \VOLUME{01d9da035d4d8f00-285d5e74}\TEMP (Keyword True)
02: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS
03: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE
04: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA
05: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL
06: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT
07: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS
08: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS\CACHES
09: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS\INETCACHE
10: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS\INETCACHE\IE
11: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS\INETCACHE\IE\8O7R2XTQ
12: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\TEMP (Keyword True)
13: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\DOWNLOADS
14: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS
15: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\APPPATCH
16: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\GLOBALIZATION
17: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\GLOBALIZATION\SORTING
18: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\REGISTRATION
19: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32
20: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DRIVERS
21: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\EN-US
22: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\TASKS

Files referenced: 76

00: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\NTDLL.DLL
01: \VOLUME{01d9da035d4d8f00-285d5e74}\TEMP\DISCORD.EXE (Executable: True)
02: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\KERNEL32.DLL
03: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\KERNELBASE.DLL
04: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\LOCALE.NLS
05: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\APPHELP.DLL
06: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\APPPATCH\SYSMAIN.SDB
07: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\ADVAPI32.DLL
08: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\MSVCRT.DLL
09: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SECHOST.DLL
10: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\RPCRT4.DLL
11: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SHELL32.DLL
12: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\MSVCP_WIN.DLL
13: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\UCRTBASE.DLL
14: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\USER32.DLL
15: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\NETAPI32.DLL
16: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WIN32U.DLL
17: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\GDI32.DLL
18: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\GDI32FULL.DLL
19: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WS2_32.DLL
20: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WININET.DLL
21: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\NETUTILS.DLL
22: \VOLUME{01d9da035d4d8f00-285d5e74}\$MFT
23: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SAMCLI.DLL
24: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\IMM32.DLL
25: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DRIVERS\CONDRV.SYS
26: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\NTMARTA.DLL
27: \VOLUME{01d9da035d4d8f00-285d5e74}\TEMP\UNINSTALL.EXE (Keyword: True)
28: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\TASKS\MICROSOFT.WINDOWSKITS.FEEDBACK.EXE
29: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\DOWNLOADS\UNINSTALL.EXE:ZONE.IDENTIFIER
30: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\TASKS\MICROSOFT.WINDOWSKITS.FEEDBACK.EXE:ZONE.IDENTIFIER
31: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\IERTUTIL.DLL
32: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\COMBASE.DLL
33: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SHCORE.DLL
34: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\GLOBALIZATION\SORTING\SORTDEFAULT.NLS
35: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SSPICLI.DLL
36: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINDOWS.STORAGE.DLL
37: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WLDP.DLL
38: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SHLWAPI.DLL
39: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\PROFAPI.DLL
40: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\ONDEMANDCONNROUTEHELPER.DLL
41: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINHTTP.DLL
42: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\KERNEL.APPCORE.DLL
43: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\MSWSOCK.DLL
44: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\IPHLPAPI.DLL
45: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINNSI.DLL
46: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\NSI.DLL
47: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\URLMON.DLL
48: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SRVCLI.DLL
49: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\OLEAUT32.DLL
50: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\OLE32.DLL
51: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DNSAPI.DLL
52: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\RASADHLP.DLL
53: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\FWPUCLNT.DLL
54: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\BCRYPT.DLL
55: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\EN-US\MSWSOCK.DLL.MUI
56: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WSHQOS.DLL
57: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\EN-US\WSHQOS.DLL.MUI
58: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\C_20127.NLS
59: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS\INETCACHE\IE\8O7R2XTQ\DISCORDSETUP[1].EXE
60: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\TEMP\DISCORDSETUP.EXE (Keyword: True)
61: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\TASKS\UPDATE.EXE
62: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\BCRYPTPRIMITIVES.DLL
63: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\RPCSS.DLL
64: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\UXTHEME.DLL
65: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\PROPSYS.DLL
66: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\CFGMGR32.DLL
67: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\CLBCATQ.DLL
68: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\REGISTRATION\R000000000006.CLB
69: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS\CACHES\CVERSIONS.1.DB
70: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\JOHN DOE\APPDATA\LOCAL\MICROSOFT\WINDOWS\CACHES\{AFBF9F1A-8EE8-4C77-AF34-C647E37CA0D9}.1.VER0X0000000000000003.DB
71: \VOLUME{01d9da035d4d8f00-285d5e74}\USERS\DESKTOP.INI
72: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SAMLIB.DLL
73: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\CRYPTBASE.DLL
74: \VOLUME{01d9da035d4d8f00-285d5e74}\TEMP\INSTALL.BAT (Keyword: True)
75: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\CMD.EXE


---------- Processed C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch\DISCORD.EXE-7191FAD6.pf in 0.29670430 seconds ----------
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch3.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch3.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch4.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch4.png)

#### Suspicious Activity in Referenced Files

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch5_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch5_.png)

#### Convert Prefetch Files to CSV

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\PECmd.exe -d C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch --csv C:\Users\johndoe\Desktop\forensic_data\prefetch_analysis
PECmd version 1.5.0.0

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/PECmd

Command line: -d C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch --csv C:\Users\johndoe\Desktop\forensic_data\prefetch_analysis

Warning: Administrator privileges not found!

Keywords: temp, tmp

Looking for prefetch files in C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch


Found 161 Prefetch files

Processing C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch\APPLICATIONFRAMEHOST.EXE-8CE9A1EE.pf

Created on: 2023-08-28 09:39:12
Modified on: 2023-09-07 08:28:29
Last accessed on: 2023-09-17 16:02:51

Executable name: APPLICATIONFRAMEHOST.EXE
Hash: 8CE9A1EE
File size (bytes): 61,616
Version: Windows 10 or Windows 11

Run count: 2
Last run: 2023-09-07 08:28:18
Other run times: 2023-08-28 09:39:02

Volume information:

#0: Name: \VOLUME{01d9da035d4d8f00-285d5e74} Serial: 285D5E74 Created: 2023-08-28 22:59:56 Directories: 8 File references: 74

Directories referenced: 8

00: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS
01: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\FONTS
02: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\GLOBALIZATION
03: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\GLOBALIZATION\SORTING
04: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32
05: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\EN-US
06: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEMAPPS
07: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEMAPPS\MICROSOFT.WINDOWS.SECHEALTHUI_CW5N1H2TXYEWY

Files referenced: 84

00: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\NTDLL.DLL
01: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\APPLICATIONFRAMEHOST.EXE (Executable: True)
02: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\KERNEL32.DLL
03: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\KERNELBASE.DLL
04: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\LOCALE.NLS
05: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\MSVCRT.DLL
06: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\COMBASE.DLL
07: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\UCRTBASE.DLL
08: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\RPCRT4.DLL
09: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DXGI.DLL
10: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WIN32U.DLL
11: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\GDI32.DLL
12: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\GDI32FULL.DLL
13: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\MSVCP_WIN.DLL
14: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\USER32.DLL
15: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\IMM32.DLL
16: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\RPCSS.DLL
17: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\KERNEL.APPCORE.DLL
18: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\BCRYPTPRIMITIVES.DLL
19: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\CLBCATQ.DLL
20: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\REGISTRATION\R000000000006.CLB
21: \VOLUME{01d9da035d4d8f00-285d5e74}\$MFT
22: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\APPLICATIONFRAME.DLL
23: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SHCORE.DLL
24: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SHLWAPI.DLL
25: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\OLEAUT32.DLL
26: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\TWINAPI.APPCORE.DLL
27: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\UXTHEME.DLL
28: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\PROPSYS.DLL
29: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DEVOBJ.DLL
30: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\CFGMGR32.DLL
31: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\TWINAPI.DLL
32: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SECHOST.DLL
33: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\BCP47MRM.DLL
34: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\D3D11.DLL
35: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DWMAPI.DLL
36: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\D2D1.DLL
37: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\OLE32.DLL
38: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\ONECOREUAPCOMMONPROXYSTUB.DLL
39: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WIN32KBASE.SYS
40: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\MSCTF.DLL
41: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\D3D10WARP.DLL
42: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\ADVAPI32.DLL
43: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\RESOURCEPOLICYCLIENT.DLL
44: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DRIVERS\DXGMMS2.SYS
45: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DRIVERS\DXGKRNL.SYS
46: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DXCORE.DLL
47: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\DCOMP.DLL
48: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\COREMESSAGING.DLL
49: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WS2_32.DLL
50: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WIN32KFULL.SYS
51: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\EN-US\APPLICATIONFRAME.DLL.MUI
52: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\UIAUTOMATIONCORE.DLL
53: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\GLOBALIZATION\SORTING\SORTDEFAULT.NLS
54: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\SHELL32.DLL
55: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINDOWS.STORAGE.DLL
56: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WLDP.DLL
57: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\PROFAPI.DLL
58: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINDOWS.STATEREPOSITORYCORE.DLL
59: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINDOWS.STATEREPOSITORYPS.DLL
60: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINDOWSCODECS.DLL
61: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\BCRYPT.DLL
62: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEMAPPS\MICROSOFT.WINDOWS.SECHE
---SNIP---
60: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\UMPDC.DLL
61: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SERVICING\CBSAPI.DLL
62: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SOFTWAREDISTRIBUTION\DOWNLOAD\A766D9CA8E03365B463454014B3585CB\CBSHANDLER\STATE
63: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WINDOWS.STORAGE.DLL
64: \VOLUME{01d9da035d4d8f00-285d5e74}\WINDOWS\SYSTEM32\WLDP.DLL


---------- Processed C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\prefetch\WUAUCLT.EXE-5D573F0E.pf in 0.05522470 seconds ----------
Processed 161 out of 161 files in 14.3289 seconds

CSV output will be saved to C:\Users\johndoe\Desktop\forensic_data\prefetch_analysis\20230917160113_PECmd_Output.csv
CSV time line output will be saved to C:\Users\johndoe\Desktop\forensic_data\prefetch_analysis\20230917160113_PECmd_Output_Timeline.csv
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch7_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch7_.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch9.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch9.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch8.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_prefetch8.png)

#### Investigation of ShimCache (Application Compatibility Cache)

![https://academy.hackthebox.com/storage/modules/237/img13.png](https://academy.hackthebox.com/storage/modules/237/img13.png)

#### Investigation of Amcache

![https://academy.hackthebox.com/storage/modules/237/img14.png](https://academy.hackthebox.com/storage/modules/237/img14.png)

``` powershell-session
PS C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6> .\AmcacheParser.exe -f "C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\AppCompat\Programs\AmCache.hve" --csv C:\Users\johndoe\Desktop\forensic_data\amcache-analysis
AmcacheParser version 1.5.1.0

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/AmcacheParser

Command line: -f C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\AppCompat\Programs\AmCache.hve --csv C:\Users\johndoe\Desktop\forensic_data\amcache-analysis

Warning: Administrator privileges not found!


C:\Users\johndoe\Desktop\forensic_data\kape_output\D\Windows\AppCompat\Programs\AmCache.hve is in new format!

Total file entries found: 93
Total shortcuts found: 49
Total device containers found: 15
Total device PnPs found: 183
Total drive binaries found: 372
Total driver packages found: 4

Found 36 unassociated file entry

Results saved to: C:\Users\johndoe\Desktop\forensic_data\amcache-analysis

Total parsing time: 0.539 seconds
```

#### Investigation of Windows BAM (Background Activity Moderator)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_bamdrv.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_bamdrv.png)

![https://academy.hackthebox.com/storage/modules/237/img15.png](https://academy.hackthebox.com/storage/modules/237/img15.png)

#### Analyzing Captured API Call Data (.apmx64)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon1.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon1.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon2.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon2.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon3_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon3_.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon4.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon4.png)

``` shell-session
char *getenv(
   const char *varname
);
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon6.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon6.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon7.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon7.png)

``` shell-session
LSTATUS RegSetValueExA(
  [in]           HKEY       hKey,
  [in, optional] LPCSTR     lpValueName,
                 DWORD      Reserved,
  [in]           DWORD      dwType,
  [in]           const BYTE *lpData,
  [in]           DWORD      cbData
);
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon9.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon9.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon5_.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_apimon5_.png)

``` shell-session
BOOL CreateProcessA(
  [in, optional]      LPCSTR                lpApplicationName,
  [in, out, optional] LPSTR                 lpCommandLine,
  [in, optional]      LPSECURITY_ATTRIBUTES lpProcessAttributes,
  [in, optional]      LPSECURITY_ATTRIBUTES lpThreadAttributes,
  [in]                BOOL                  bInheritHandles,
  [in]                DWORD                 dwCreationFlags,
  [in, optional]      LPVOID                lpEnvironment,
  [in, optional]      LPCSTR                lpCurrentDirectory,
  [in]                LPSTARTUPINFOA        lpStartupInfo,
  [out]               LPPROCESS_INFORMATION lpProcessInformation
);
```

![https://academy.hackthebox.com/storage/modules/237/disc_inj.png](https://academy.hackthebox.com/storage/modules/237/disc_inj.png)

#### PowerShell Activity

![https://academy.hackthebox.com/storage/modules/237/win_dfir_accessdata_ps1.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_accessdata_ps1.png)

# 

# 

#### Questions

####