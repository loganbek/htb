<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/216/section/2325
// Platform Version: V1
// Module ID: 216
// Module Name: Windows Event Logs & Finding Evil
// Module Difficulty: Medium
// Section ID: 2325
// Section Title: Tapping Into ETW
// Page Title: Windows Event Logs & Finding Evil
// Page Number: 04
-->

# Tapping Into ETW

**Module Name:** Windows Event Logs & Finding Evil **Page Number:** 04

#### WINDOWS EVENT LOGS & FINDING EVIL Mini-Module

# Tapping Into ETW

## Detection Example 1: Detecting Strange Parent-Child Relationships

![https://academy.hackthebox.com/storage/modules/216/image34.png](https://academy.hackthebox.com/storage/modules/216/image34.png)

![https://academy.hackthebox.com/storage/modules/216/image35.png](https://academy.hackthebox.com/storage/modules/216/image35.png)

``` powershell-session
PS C:\Tools\psgetsystem> powershell -ep bypass
PS C:\Tools\psgetsystem> Import-Module .\psgetsys.ps1 
PS C:\Tools\psgetsystem> [MyProcess]::CreateProcessFromParent([Process ID of spoolsv.exe],"C:\Windows\System32\cmd.exe","")
```

![https://academy.hackthebox.com/storage/modules/216/image47.png](https://academy.hackthebox.com/storage/modules/216/image47.png)

``` cmd-session
c:\Tools\SilkETW_SilkService_v8\v8\SilkETW>SilkETW.exe -t user -pn Microsoft-Windows-Kernel-Process -ot file -p C:\windows\temp\etw.json
```

![https://academy.hackthebox.com/storage/modules/216/image48.png](https://academy.hackthebox.com/storage/modules/216/image48.png)

![https://academy.hackthebox.com/storage/modules/216/image49.png](https://academy.hackthebox.com/storage/modules/216/image49.png)

## Detection Example 2: Detecting Malicious .NET Assembly Loading

``` powershell-session
PS C:\Tools\GhostPack Compiled Binaries>.\Seatbelt.exe TokenPrivileges

                        %&&@@@&&
                        &&&&&&&%%%,                       #&&@@@@@@%%%%%%###############%
                        &%&   %&%%                        &////(((&%%%%%#%################//((((###%%%%%%%%%%%%%%%
%%%%%%%%%%%######%%%#%%####%  &%%**#                      @////(((&%%%%%%######################(((((((((((((((((((
#%#%%%%%%%#######%#%%#######  %&%,,,,,,,,,,,,,,,,         @////(((&%%%%%#%#####################(((((((((((((((((((
#%#%%%%%%#####%%#%#%%#######  %%%,,,,,,  ,,.   ,,         @////(((&%%%%%%%######################(#(((#(#((((((((((
#####%%%####################  &%%......  ...   ..         @////(((&%%%%%%%###############%######((#(#(####((((((((
#######%##########%#########  %%%......  ...   ..         @////(((&%%%%%#########################(#(#######((#####
###%##%%####################  &%%...............          @////(((&%%%%%%%%##############%#######(#########((#####
#####%######################  %%%..                       @////(((&%%%%%%%################
                        &%&   %%%%%      Seatbelt         %////(((&%%%%%%%%#############*
                        &%%&&&%%%%%        v1.2.1         ,(((&%%%%%%%%%%%%%%%%%,
                         #%%%%##,


====== TokenPrivileges ======

Current Token's Privileges

                     SeIncreaseQuotaPrivilege:  DISABLED
                          SeSecurityPrivilege:  DISABLED
                     SeTakeOwnershipPrivilege:  DISABLED
                        SeLoadDriverPrivilege:  DISABLED
                     SeSystemProfilePrivilege:  DISABLED
                        SeSystemtimePrivilege:  DISABLED
              SeProfileSingleProcessPrivilege:  DISABLED
              SeIncreaseBasePriorityPrivilege:  DISABLED
                    SeCreatePagefilePrivilege:  DISABLED
                            SeBackupPrivilege:  DISABLED
                           SeRestorePrivilege:  DISABLED
                          SeShutdownPrivilege:  DISABLED
                             SeDebugPrivilege:  SE_PRIVILEGE_ENABLED
                 SeSystemEnvironmentPrivilege:  DISABLED
                      SeChangeNotifyPrivilege:  SE_PRIVILEGE_ENABLED_BY_DEFAULT, SE_PRIVILEGE_ENABLED
                    SeRemoteShutdownPrivilege:  DISABLED
                            SeUndockPrivilege:  DISABLED
                      SeManageVolumePrivilege:  DISABLED
                       SeImpersonatePrivilege:  SE_PRIVILEGE_ENABLED_BY_DEFAULT, SE_PRIVILEGE_ENABLED
                      SeCreateGlobalPrivilege:  SE_PRIVILEGE_ENABLED_BY_DEFAULT, SE_PRIVILEGE_ENABLED
                SeIncreaseWorkingSetPrivilege:  DISABLED
                          SeTimeZonePrivilege:  DISABLED
                SeCreateSymbolicLinkPrivilege:  DISABLED
    SeDelegateSessionUserImpersonatePrivilege:  DISABLED
```

![https://academy.hackthebox.com/storage/modules/216/image77.png](https://academy.hackthebox.com/storage/modules/216/image77.png)

![https://academy.hackthebox.com/storage/modules/216/image78.png](https://academy.hackthebox.com/storage/modules/216/image78.png)

``` cmd-session
c:\Tools\SilkETW_SilkService_v8\v8\SilkETW>SilkETW.exe -t user -pn Microsoft-Windows-DotNETRuntime -uk 0x2038 -ot file -p C:\windows\temp\etw.json
```

![https://academy.hackthebox.com/storage/modules/216/image79.png](https://academy.hackthebox.com/storage/modules/216/image79.png)

## Practical Exercise

``` shell-session
[!bash!]$ xfreerdp /u:Administrator /p:'HTB_@cad3my_lab_W1n10_r00t!@0' /v:[Target IP] /dynamic-resolution
```

# 

# 

#### Questions

####