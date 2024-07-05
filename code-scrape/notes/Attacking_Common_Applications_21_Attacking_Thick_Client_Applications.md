<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/2139
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 2139
// Section Title: Attacking Thick Client Applications
// Page Title: Hack The Box - Academy
// Page Number: 21
-->

# Attacking Thick Client Applications

**Module Name:** Attacking Common Applications **Page Number:** 21

#### 

#### ATTACKING COMMON APPLICATIONS

# Attacking Thick Client Applications

![https://academy.hackthebox.com/storage/modules/113/thick_clients/arch_tiers.png](https://academy.hackthebox.com/storage/modules/113/thick_clients/arch_tiers.png)

## Penetration Testing Steps

#### Information Gathering

#### Client Side attacks

#### Network Side Attacks

#### Server Side Attacks

## Retrieving hardcoded Credentials from Thick-Client Applications

``` cmd-session
C:\Apps>.\Restart-OracleService.exe
C:\Apps>
```

![https://academy.hackthebox.com/storage/modules/113/thick_clients/procmon.png](https://academy.hackthebox.com/storage/modules/113/thick_clients/procmon.png)

![https://academy.hackthebox.com/storage/modules/113/thick_clients/change-perms.png](https://academy.hackthebox.com/storage/modules/113/thick_clients/change-perms.png)

``` cmd-session
C:\Apps>dir C:\Users\cybervaca\AppData\Local\Temp\2

...SNIP...
04/03/2023  02:09 PM         1,730,212 6F39.bat
04/03/2023  02:09 PM                 0 6F39.tmp
```

``` batch
@shift /0
@echo off

if %username% == matt goto correcto
if %username% == frankytech goto correcto
if %username% == ev4si0n goto correcto
goto error

:correcto
echo TVqQAAMAAAAEAAAA//8AALgAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA > c:\programdata\oracle.txt
echo AAAAAAAAAAgAAAAA4fug4AtAnNIbgBTM0hVGhpcyBwcm9ncmFtIGNhbm5vdCBiZSBydW4g >> c:\programdata\oracle.txt
<SNIP>
echo AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA >> c:\programdata\oracle.txt

echo $salida = $null; $fichero = (Get-Content C:\ProgramData\oracle.txt) ; foreach ($linea in $fichero) {$salida += $linea }; $salida = $salida.Replace(" ",""); [System.IO.File]::WriteAllBytes("c:\programdata\restart-service.exe", [System.Convert]::FromBase64String($salida)) > c:\programdata\monta.ps1
powershell.exe -exec bypass -file c:\programdata\monta.ps1
del c:\programdata\monta.ps1
del c:\programdata\oracle.txt
c:\programdata\restart-service.exe
del c:\programdata\restart-service.exe
```

``` batch
@shift /0
@echo off

echo TVqQAAMAAAAEAAAA//8AALgAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA > c:\programdata\oracle.txt
echo AAAAAAAAAAgAAAAA4fug4AtAnNIbgBTM0hVGhpcyBwcm9ncmFtIGNhbm5vdCBiZSBydW4g >> c:\programdata\oracle.txt
<SNIP>
echo AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA >> c:\programdata\oracle.txt

echo $salida = $null; $fichero = (Get-Content C:\ProgramData\oracle.txt) ; foreach ($linea in $fichero) {$salida += $linea }; $salida = $salida.Replace(" ",""); [System.IO.File]::WriteAllBytes("c:\programdata\restart-service.exe", [System.Convert]::FromBase64String($salida)) > c:\programdata\monta.ps1
```

``` powershell-session
C:\>  cat C:\programdata\monta.ps1

$salida = $null; $fichero = (Get-Content C:\ProgramData\oracle.txt) ; foreach ($linea in $fichero) {$salida += $linea }; $salida = $salida.Replace(" ",""); [System.IO.File]::WriteAllBytes("c:\programdata\restart-service.exe", [System.Convert]::FromBase64String($salida))
```

``` powershell-session
C:\>  ls C:\programdata\

Mode                LastWriteTime         Length Name
<SNIP>
-a----        3/24/2023   1:01 PM            273 monta.ps1
-a----        3/24/2023   1:01 PM         601066 oracle.txt
-a----        3/24/2023   1:17 PM         432273 restart-service.exe
```

``` powershell-session
C:\>  .\restart-service.exe

    ____            __             __     ____                  __
   / __ \___  _____/ /_____ ______/ /_   / __ \_________ ______/ /__
  / /_/ / _ \/ ___/ __/ __ `/ ___/ __/  / / / / ___/ __ `/ ___/ / _ \
 / _, _/  __(__  ) /_/ /_/ / /  / /_   / /_/ / /  / /_/ / /__/ /  __/
/_/ |_|\___/____/\__/\__,_/_/   \__/   \____/_/   \__,_/\___/_/\___/

                                                by @HelpDesk 2010


PS C:\ProgramData>
```

![https://academy.hackthebox.com/storage/modules/113/thick_clients/proc-restart.png](https://academy.hackthebox.com/storage/modules/113/thick_clients/proc-restart.png)

![https://academy.hackthebox.com/storage/modules/113/Exit_Breakpoint_1.png](https://academy.hackthebox.com/storage/modules/113/Exit_Breakpoint_1.png)

![https://academy.hackthebox.com/storage/modules/113/Follow-In-Memory-Map.png](https://academy.hackthebox.com/storage/modules/113/Follow-In-Memory-Map.png)

![https://academy.hackthebox.com/storage/modules/113/Identify-Memory-Map.png](https://academy.hackthebox.com/storage/modules/113/Identify-Memory-Map.png)

![https://academy.hackthebox.com/storage/modules/113/thick_clients/magic_bytes_3.png](https://academy.hackthebox.com/storage/modules/113/thick_clients/magic_bytes_3.png)

``` powershell-session
C:\> C:\TOOLS\Strings\strings64.exe .\restart-service_00000000001E0000.bin

<SNIP>
"#M
z\V
).NETFramework,Version=v4.0,Profile=Client
FrameworkDisplayName
.NET Framework 4 Client Profile
<SNIP>
```

``` cmd-session
de4dot v3.1.41592.3405

Detected Unknown Obfuscator (C:\Users\cybervaca\Desktop\restart-service_00000000001E0000.bin)
Cleaning C:\Users\cybervaca\Desktop\restart-service_00000000001E0000.bin
Renaming all obfuscated symbols
Saving C:\Users\cybervaca\Desktop\restart-service_00000000001E0000-cleaned.bin


Press any key to exit...
```

![https://academy.hackthebox.com/storage/modules/113/thick_clients/souce-code_hidden.png](https://academy.hackthebox.com/storage/modules/113/thick_clients/souce-code_hidden.png)

# 

# 

#### Questions

####