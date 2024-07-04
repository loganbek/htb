<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/167/section/1623
// Platform Version: V1
// Module ID: 167
// Module Name: Introduction to Windows Command Line
// Module Difficulty: Easy
// Section ID: 1623
// Section Title: Working with the Registry
// Page Title: Hack The Box - Academy
// Page Number: 17
-->

# Working with the Registry

**Module Name:** Introduction to Windows Command Line **Page Number:** 17

#### 

#### INTRODUCTION TO WINDOWS COMMAND LINE

# Working with the Registry

## What Is The Windows Registry?

### What are Keys

#### Keys (Green)

![https://academy.hackthebox.com/storage/modules/167/registry.png](https://academy.hackthebox.com/storage/modules/167/registry.png)

### Registry Key Files

#### Root Registry Keys

``` powershell-session
PS C:\htb> Get-ChildItem C:\Windows\System32\config\

    Directory: C:\Windows\System32\config

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----           12/7/2019  4:14 AM                Journal
d----           12/7/2019  4:14 AM                RegBack
d----           4/28/2021 11:43 AM                systemprofile
d----           9/18/2021 12:22 AM                TxR
-a---          10/12/2022 10:06 AM         786432 BBI
-a---           1/20/2021  5:13 PM          28672 BCD-Template
-a---          10/18/2022 11:14 AM       38273024 COMPONENTS
-a---          10/12/2022 10:06 AM        1048576 DEFAULT
-a---          10/15/2022  9:33 PM       13463552 DRIVERS
-a---           1/27/2021  2:54 PM          32768 ELAM
-a---          10/12/2022 10:06 AM         131072 SAM
-a---          10/12/2022 10:06 AM          65536 SECURITY
-a---          10/12/2022 10:06 AM      168034304 SOFTWARE
-a---          10/12/2022 10:06 AM       29884416 SYSTEM
-a---          10/12/2022 10:06 AM           1623 VSMIDK
```

### What Are Values

#### Values

![https://academy.hackthebox.com/storage/modules/167/registry-values.png](https://academy.hackthebox.com/storage/modules/167/registry-values.png)

### Registry Hives

#### Hive Breakdown

### Why Is The Information Stored Within The Registry Important?

## How Do We Access the Information?

### Querying Registry Entries

#### Get-Item

``` powershell-session
PS C:\htb> Get-Item -Path Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run | Select-Object -ExpandProperty Property  

SecurityHealth
RtkAudUService
WavesSvc
DisplayLinkTrayApp
LogiOptions
Acrobat Assistant 8.0
(default)
Focusrite Notifier
AdobeGCInvoker-1.0
```

#### Recursive Search

``` powershell-session
PS C:\htb> Get-ChildItem -Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion -Recurse

Hive: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths
<SNIP>
Name                           Property
----                           --------
7zFM.exe                       (default) : C:\Program Files\7-Zip\7zFM.exe
                               Path      : C:\Program Files\7-Zip\
Acrobat.exe                    (default) : C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe
                               Path      : C:\Program Files\Adobe\Acrobat DC\Acrobat\
AcrobatInfo.exe                (default) : C:\Program Files\Adobe\Acrobat DC\Acrobat\AcrobatInfo.exe
                               Path      : C:\Program Files\Adobe\Acrobat DC\Acrobat\
AcroDist.exe                   Path      : C:\Program Files\Adobe\Acrobat DC\Acrobat\
                               (default) : C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrodist.exe
Ahk2Exe.exe                    (default) : C:\Program Files\AutoHotkey\Compiler\Ahk2Exe.exe
AutoHotkey.exe                 (default) : C:\Program Files\AutoHotkey\AutoHotkey.exe
chrome.exe                     (default) : C:\Program Files\Google\Chrome\Application\chrome.exe
                               Path      : C:\Program Files\Google\Chrome\Application
cmmgr32.exe                    CmNative          : 2
                               CmstpExtensionDll : C:\Windows\System32\cmcfg32.dll
CNMNSST.exe                    (default) : C:\Program Files (x86)\Canon\IJ Network Scanner Selector EX\CNMNSST.exe
                               Path      : C:\Program Files (x86)\Canon\IJ Network Scanner Selector EX
devenv.exe                     (default) : "C:\Program Files\Microsoft Visual
                               Studio\2022\Community\common7\ide\devenv.exe"
dfshim.dll                     UseURL : 1
excel.exe                      (default) : C:\Program Files\Microsoft Office\Root\Office16\EXCEL.EXE
                               Path      : C:\Program Files\Microsoft Office\Root\Office16\
                               UseURL    : 1
                               SaveURL   : 1
fsquirt.exe                    DropTarget : {047ea9a0-93bb-415f-a1c3-d7aeb3dd5087}
IEDIAG.EXE                     (default) : C:\Program Files\Internet Explorer\IEDIAGCMD.EXE
                               Path      : C:\Program Files\Internet Explorer;
IEDIAGCMD.EXE                  (default) : C:\Program Files\Internet Explorer\IEDIAGCMD.EXE
                               Path      : C:\Program Files\Internet Explorer;
IEXPLORE.EXE                   (default) : C:\Program Files\Internet Explorer\IEXPLORE.EXE
                               Path      : C:\Program Files\Internet Explorer;
install.exe                    BlockOnTSNonInstallMode : 1
javaws.exe                     (default) : C:\Program Files\Java\jre1.8.0_341\bin\javaws.exe
                               Path      : C:\Program Files\Java\jre1.8.0_341\bin
licensemanagershellext.exe     (default) : C:\Windows\System32\licensemanagershellext.exe
mip.exe                        (default) : C:\Program Files\Common Files\Microsoft Shared\Ink\mip.exe
mpc-hc64.exe                   (default) : C:\Program Files (x86)\K-Lite Codec Pack\MPC-HC64\mpc-hc64.exe
                               Path      : C:\Program Files (x86)\K-Lite Codec Pack\MPC-HC64
mplayer2.exe                   (default) : "C:\Program Files\Windows Media Player\wmplayer.exe"
                               Path      : C:\Program Files\Windows Media Player
MSACCESS.EXE                   (default) : C:\Program Files\Microsoft Office\Root\Office16\MSACCESS.EXE
                               Path      : C:\Program Files\Microsoft Office\Root\Office16\
                               UseURL    : 1
msedge.exe                     (default) : C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
                               Path      : C:\Program Files (x86)\Microsoft\Edge\Application

    Hive: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe

Name                           Property
----                           --------
SupportedProtocols             http  :
                               https :
<SNIP>
```

#### Get-ItemProperty

``` powershell-session
PS C:\htb> Get-ItemProperty -Path Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run

SecurityHealth        : C:\Windows\system32\SecurityHealthSystray.exe
RtkAudUService        : "C:\Windows\System32\DriverStore\FileRepository\realtekservice.inf_amd64_85cff5320735903
                        d\RtkAudUService64.exe" -background
WavesSvc              : "C:\Windows\System32\DriverStore\FileRepository\wavesapo9de.inf_amd64_d350b8504310bbf5\W
                        avesSvc64.exe" -Jack
DisplayLinkTrayApp    : "C:\Program Files\DisplayLink Core Software\DisplayLinkTrayApp.exe" -basicMode
LogiOptions           : C:\Program Files\Logitech\LogiOptions\LogiOptions.exe /noui
Acrobat Assistant 8.0 : "C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrotray.exe"
(default)             :
Focusrite Notifier    : "C:\Program Files\Focusriteusb\Focusrite Notifier.exe"
AdobeGCInvoker-1.0    : "C:\Program Files (x86)\Common Files\Adobe\AdobeGCClient\AGCInvokerUtility.exe"
PSPath                : Microsoft.PowerShell.Core\Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Curren
                        tVersion\Run
PSParentPath          : Microsoft.PowerShell.Core\Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Curren
                        tVersion
PSChildName           : Run
PSProvider            : Microsoft.PowerShell.Core\Registry
```

#### Reg.exe

``` powershell-session
PS C:\htb> reg query HKEY_LOCAL_MACHINE\SOFTWARE\7-Zip

HKEY_LOCAL_MACHINE\SOFTWARE\7-Zip
    Path64    REG_SZ    C:\Program Files\7-Zip\
    Path    REG_SZ    C:\Program Files\7-Zip\
```

## Finding Info In The Registry

#### Searching With Reg Query

``` powershell-session
PS C:\htb>  REG QUERY HKCU /F "Password" /t REG_SZ /S /K

HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\Winlogon\PasswordExpiryNotification
    NotShownErrorTime    REG_SZ    08::23::24, 2022/10/19
    NotShownErrorReason    REG_SZ    GetPwdResetInfoFailed

End of search: 2 match(es) found.
```

### Creating and Modifying Registry Keys and Values

#### New Registry Key

``` powershell-session
PS C:\htb> New-Item -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\ -Name TestKey

    Hive: HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce

Name                           Property
----                           --------
TestKey
```

#### Set New Registry Item Property

``` powershell-session
PS C:\htb>  New-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\TestKey -Name  "access" -PropertyType String -Value "C:\Users\htb-student\Downloads\payload.exe"

access       : C:\Users\htb-student\Downloads\payload.exe
PSPath       : Microsoft.PowerShell.Core\Registry::HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\
               TestKey
PSParentPath : Microsoft.PowerShell.Core\Registry::HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce
PSChildName  : TestKey
PSDrive      : HKCU
PSProvider   : Microsoft.PowerShell.Core\Registry
```

#### TestKey Creation

![https://academy.hackthebox.com/storage/modules/167/testkeys.png](https://academy.hackthebox.com/storage/modules/167/testkeys.png)

``` powershell
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce\TestKey" /v access /t REG_SZ /d "C:\Users\htb-student\Downloads\payload.exe"
```

#### Delete Reg properties

``` powershell-session
PS C:\htb> Remove-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\TestKey -Name  "access"

PS C:\htb> Get-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\TestKey
```

## Onwards

# 

# 

#### Questions

####