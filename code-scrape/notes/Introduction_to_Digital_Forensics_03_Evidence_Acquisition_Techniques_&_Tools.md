<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/237/section/2609
// Platform Version: V1
// Module ID: 237
// Module Name: Introduction to Digital Forensics
// Module Difficulty: Medium
// Section ID: 2609
// Section Title: Evidence Acquisition Techniques & Tools
// Page Title: Introduction to Digital Forensics
// Page Number: 03
-->

# Evidence Acquisition Techniques & Tools

**Module Name:** Introduction to Digital Forensics **Page Number:** 03

#### INTRODUCTION TO DIGITAL FORENSICS

# Evidence Acquisition Techniques & Tools

## Forensic Imaging

![https://academy.hackthebox.com/storage/modules/237/image11.png](https://academy.hackthebox.com/storage/modules/237/image11.png)

![https://academy.hackthebox.com/storage/modules/237/image1.png](https://academy.hackthebox.com/storage/modules/237/image1.png)

![https://academy.hackthebox.com/storage/modules/237/image3.png](https://academy.hackthebox.com/storage/modules/237/image3.png)

![https://academy.hackthebox.com/storage/modules/237/image7.png](https://academy.hackthebox.com/storage/modules/237/image7.png)

![https://academy.hackthebox.com/storage/modules/237/image4.png](https://academy.hackthebox.com/storage/modules/237/image4.png)

![https://academy.hackthebox.com/storage/modules/237/image10.png](https://academy.hackthebox.com/storage/modules/237/image10.png)

![https://academy.hackthebox.com/storage/modules/237/image8.png](https://academy.hackthebox.com/storage/modules/237/image8.png)

![https://academy.hackthebox.com/storage/modules/237/image2.png](https://academy.hackthebox.com/storage/modules/237/image2.png)

![https://academy.hackthebox.com/storage/modules/237/image12.png](https://academy.hackthebox.com/storage/modules/237/image12.png)

![https://academy.hackthebox.com/storage/modules/237/image6.png](https://academy.hackthebox.com/storage/modules/237/image6.png)

![https://academy.hackthebox.com/storage/modules/237/image9.png](https://academy.hackthebox.com/storage/modules/237/image9.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_mount.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_mount.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_drive.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_drive.png)

## Extracting Host-based Evidence & Rapid Triage

#### Host-based Evidence

``` cmd-session
C:\Users\X\Downloads> winpmem_mini_x64_rc2.exe memdump.raw
```

![https://academy.hackthebox.com/storage/modules/237/image13.png](https://academy.hackthebox.com/storage/modules/237/image13.png)

![https://academy.hackthebox.com/storage/modules/237/suspend-vm.png](https://academy.hackthebox.com/storage/modules/237/suspend-vm.png)

![https://academy.hackthebox.com/storage/modules/237/suspend-vmem.png](https://academy.hackthebox.com/storage/modules/237/suspend-vmem.png)

#### Rapid Triage

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_working.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_working.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_modes.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_modes.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_window.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_window.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_target.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_target.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_tkape.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_tkape.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_compound.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_compound.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_gui.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_gui.png)

``` shell-session
KAPE version 1.3.0.2, Author: Eric Zimmerman, Contact: https://www.kroll.com/kape (kape@kroll.com)

KAPE directory: C:\htb\dfir_module\data\kape\KAPE
Command line:   --tsource D: --tdest C:\htb\dfir_module\data\investigation\image --target !SANS_Triage --gui

System info: Machine name: REDACTED, 64-bit: True, User: REDACTED OS: Windows10 (10.0.22621)

Using Target operations
Found 18 targets. Expanding targets to file list...
Target ApplicationEvents with Id 2da16dbf-ea47-448e-a00f-fc442c3109ba already processed. Skipping!
Target ApplicationEvents with Id 2da16dbf-ea47-448e-a00f-fc442c3109ba already processed. Skipping!
Target ApplicationEvents with Id 2da16dbf-ea47-448e-a00f-fc442c3109ba already processed. Skipping!
Target ApplicationEvents with Id 2da16dbf-ea47-448e-a00f-fc442c3109ba already processed. Skipping!
Target ApplicationEvents with Id 2da16dbf-ea47-448e-a00f-fc442c3109ba already processed. Skipping!
Found 639 files in 4.032 seconds. Beginning copy...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDefenderApiLogger.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDefenderAuditLogger.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDiagLog.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDiagtrack-Listener.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTEventLog-Application.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTEventlog-Security.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTEventLog-System.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTSgrmEtwSession.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTUBPM.etl due to UnauthorizedAccessException...
  Deferring D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTWFP-IPsec Diagnostics.etl due to UnauthorizedAccessException...
  Deferring D:\$MFT due to UnauthorizedAccessException...
  Deferring D:\$LogFile due to UnauthorizedAccessException...
  Deferring D:\$Extend\$UsnJrnl:$J due to NotSupportedException...
  Deferring D:\$Extend\$UsnJrnl:$Max due to NotSupportedException...
  Deferring D:\$Secure:$SDS due to NotSupportedException...
  Deferring D:\$Boot due to UnauthorizedAccessException...
  Deferring D:\$Extend\$RmMetadata\$TxfLog\$Tops:$T due to NotSupportedException...
Deferred file count: 17. Copying locked files...
  Copied deferred file D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDefenderApiLogger.etl to C:\htb\dfir_module\data\investigation\image\D\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDefenderApiLogger.etl. Hashing source file...
  Copied deferred file D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDiagLog.etl to C:\htb\dfir_module\data\investigation\image\D\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDiagLog.etl. Hashing source file...
  Copied deferred file D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDiagtrack-Listener.etl to C:\htb\dfir_module\data\investigation\image\D\Windows\System32\LogFiles\WMI\RtBackup\EtwRTDiagtrack-Listener.etl. Hashing source file...
  Copied deferred file D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTEventLog-Application.etl to C:\htb\dfir_module\data\investigation\image\D\Windows\System32\LogFiles\WMI\RtBackup\EtwRTEventLog-Application.etl. Hashing source file...
  Copied deferred file D:\Windows\System32\LogFiles\WMI\RtBackup\EtwRTEventLog-System.etl to C:\htb\dfir_module\data\investigation\image\D\Windows\System32\LogFiles\WMI\RtBackup\EtwRTEventLog-System.etl. Hashing source file...
  Copied deferred file D:\$MFT to C:\htb\dfir_module\data\investigation\image\D\$MFT. Hashing source file...
  Copied deferred file D:\$LogFile to C:\htb\dfir_module\data\investigation\image\D\$LogFile. Hashing source file...
  Copied deferred file D:\$Extend\$UsnJrnl:$J to C:\htb\dfir_module\data\investigation\image\D\$Extend\$J. Hashing source file...
  Copied deferred file D:\$Extend\$UsnJrnl:$Max to C:\htb\dfir_module\data\investigation\image\D\$Extend\$Max. Hashing source file...
  Copied deferred file D:\$Secure:$SDS to C:\htb\dfir_module\data\investigation\image\D\$Secure_$SDS. Hashing source file...
  Copied deferred file D:\$Boot to C:\htb\dfir_module\data\investigation\image\D\$Boot. Hashing source file...
```

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_output.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_output.png)

![https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_winevt.png](https://academy.hackthebox.com/storage/modules/237/win_dfir_kape_winevt.png)

![https://academy.hackthebox.com/storage/modules/237/vel0.png](https://academy.hackthebox.com/storage/modules/237/vel0.png)

![https://academy.hackthebox.com/storage/modules/237/image33.png](https://academy.hackthebox.com/storage/modules/237/image33.png)

![https://academy.hackthebox.com/storage/modules/237/image64.png](https://academy.hackthebox.com/storage/modules/237/image64.png)

![https://academy.hackthebox.com/storage/modules/237/vel1.png](https://academy.hackthebox.com/storage/modules/237/vel1.png)

![https://academy.hackthebox.com/storage/modules/237/image19.png](https://academy.hackthebox.com/storage/modules/237/image19.png)

![https://academy.hackthebox.com/storage/modules/237/image27.png](https://academy.hackthebox.com/storage/modules/237/image27.png)

![https://academy.hackthebox.com/storage/modules/237/image90.png](https://academy.hackthebox.com/storage/modules/237/image90.png)

![https://academy.hackthebox.com/storage/modules/237/image12_.png](https://academy.hackthebox.com/storage/modules/237/image12_.png)

![https://academy.hackthebox.com/storage/modules/237/image37.png](https://academy.hackthebox.com/storage/modules/237/image37.png)

![https://academy.hackthebox.com/storage/modules/237/image92.png](https://academy.hackthebox.com/storage/modules/237/image92.png)

![https://academy.hackthebox.com/storage/modules/237/image45.png](https://academy.hackthebox.com/storage/modules/237/image45.png)

## Extracting Network Evidence

# 

# 

#### Questions

####