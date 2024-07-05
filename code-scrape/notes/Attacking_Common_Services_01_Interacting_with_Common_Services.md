<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/116/section/1140
// Platform Version: V1
// Module ID: 116
// Module Name: Attacking Common Services
// Module Difficulty: Medium
// Section ID: 1140
// Section Title: Interacting with Common Services
// Page Title: Attacking Common Services
// Page Number: 01
-->

# Interacting with Common Services

**Module Name:** Attacking Common Services **Page Number:** 01

#### ATTACKING COMMON SERVICES

# Interacting with Common Services

## File Share Services

## Server Message Block (SMB)

#### Windows

![https://academy.hackthebox.com/storage/modules/116/windows_run_sharefolder2.jpg](https://academy.hackthebox.com/storage/modules/116/windows_run_sharefolder2.jpg)

![https://academy.hackthebox.com/storage/modules/116/finance_share_folder2.jpg](https://academy.hackthebox.com/storage/modules/116/finance_share_folder2.jpg)

![https://academy.hackthebox.com/storage/modules/116/auth_request_share_folder2.jpg](https://academy.hackthebox.com/storage/modules/116/auth_request_share_folder2.jpg)

#### Windows CMD - DIR

``` cmd-session
C:\htb> dir \\192.168.220.129\Finance\

Volume in drive \\192.168.220.129\Finance has no label.
Volume Serial Number is ABCD-EFAA

Directory of \\192.168.220.129\Finance

02/23/2022  11:35 AM    <DIR>          Contracts
               0 File(s)          4,096 bytes
               1 Dir(s)  15,207,469,056 bytes free
```

#### Windows CMD - Net Use

``` cmd-session
C:\htb> net use n: \\192.168.220.129\Finance

The command completed successfully.
```

``` cmd-session
C:\htb> net use n: \\192.168.220.129\Finance /user:plaintext Password123

The command completed successfully.
```

#### Windows CMD - DIR

``` cmd-session
C:\htb> dir n: /a-d /s /b | find /c ":\"

29302
```

``` shell-session
dir n: /a-d /s /b | find /c ":\"
```

``` cmd-session
C:\htb>dir n:\*cred* /s /b

n:\Contracts\private\credentials.txt


C:\htb>dir n:\*secret* /s /b

n:\Contracts\private\secret.txt
```

#### Windows CMD - Findstr

``` cmd-session
c:\htb>findstr /s /i cred n:\*.*

n:\Contracts\private\secret.txt:file with all credentials
n:\Contracts\private\credentials.txt:admin:SecureCredentials!
```

#### Windows PowerShell

#### Windows PowerShell

``` powershell-session
PS C:\htb> Get-ChildItem \\192.168.220.129\Finance\

    Directory: \\192.168.220.129\Finance

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2/23/2022   3:27 PM                Contracts
```

``` powershell-session
PS C:\htb> New-PSDrive -Name "N" -Root "\\192.168.220.129\Finance" -PSProvider "FileSystem"

Name           Used (GB)     Free (GB) Provider      Root                                               CurrentLocation
----           ---------     --------- --------      ----                                               ---------------
N                                      FileSystem    \\192.168.220.129\Finance
```

#### Windows PowerShell - PSCredential Object

``` powershell-session
PS C:\htb> $username = 'plaintext'
PS C:\htb> $password = 'Password123'
PS C:\htb> $secpassword = ConvertTo-SecureString $password -AsPlainText -Force
PS C:\htb> $cred = New-Object System.Management.Automation.PSCredential $username, $secpassword
PS C:\htb> New-PSDrive -Name "N" -Root "\\192.168.220.129\Finance" -PSProvider "FileSystem" -Credential $cred

Name           Used (GB)     Free (GB) Provider      Root                                                              CurrentLocation
----           ---------     --------- --------      ----                                                              ---------------
N                                      FileSystem    \\192.168.220.129\Finance
```

#### Windows PowerShell - GCI

``` powershell-session
PS C:\htb> N:
PS N:\> (Get-ChildItem -File -Recurse | Measure-Object).Count

29302
```

``` powershell-session
PS C:\htb> Get-ChildItem -Recurse -Path N:\ -Include *cred* -File

    Directory: N:\Contracts\private

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2/23/2022   4:36 PM             25 credentials.txt
```

#### Windows PowerShell - Select-String

``` powershell-session
PS C:\htb> Get-ChildItem -Recurse -Path N:\ | Select-String "cred" -List

N:\Contracts\private\secret.txt:1:file with all credentials
N:\Contracts\private\credentials.txt:1:admin:SecureCredentials!
```

#### Linux

#### Linux - Mount

``` shell-session
ndefstathiou@htb[/htb]$ sudo mkdir /mnt/Finance
ndefstathiou@htb[/htb]$ sudo mount -t cifs -o username=plaintext,password=Password123,domain=. //192.168.220.129/Finance /mnt/Finance
```

``` shell-session
ndefstathiou@htb[/htb]$ mount -t cifs //192.168.220.129/Finance /mnt/Finance -o credentials=/path/credentialfile
```

#### CredentialFile

``` txt
username=plaintext
password=Password123
domain=.
```

#### Linux - Find

``` shell-session
ndefstathiou@htb[/htb]$ find /mnt/Finance/ -name *cred*

/mnt/Finance/Contracts/private/credentials.txt
```

``` shell-session
ndefstathiou@htb[/htb]$ grep -rn /mnt/Finance/ -ie cred

/mnt/Finance/Contracts/private/credentials.txt:1:admin:SecureCredentials!
/mnt/Finance/Contracts/private/secret.txt:1:file with all credentials
```

## Other Services

#### Email

#### Linux - Install Evolution

``` shell-session
ndefstathiou@htb[/htb]$ sudo apt-get install evolution
...SNIP...
```

#### Video - Connecting to IMAP and SMTP using Evolution

![https://academy.hackthebox.com/storage/modules/116/ConnectToIMAPandSMTP.jpg](https://academy.hackthebox.com/storage/modules/116/ConnectToIMAPandSMTP.jpg)

#### Databases

#### MySQL example

![https://academy.hackthebox.com/storage/modules/116/3_way_to_interact_with_MySQL.png](https://academy.hackthebox.com/storage/modules/116/3_way_to_interact_with_MySQL.png)

## Command Line Utilities

#### MSSQL

#### Linux - SQSH

``` shell-session
ndefstathiou@htb[/htb]$ sqsh -S 10.129.20.13 -U username -P Password123
```

#### Windows - SQLCMD

``` cmd-session
C:\htb> sqlcmd -S 10.129.20.13 -U username -P Password123
```

#### MySQL

#### Linux - MySQL

``` shell-session
ndefstathiou@htb[/htb]$ mysql -u username -pPassword123 -h 10.129.20.13
```

#### Windows - MySQL

``` cmd-session
C:\htb> mysql.exe -u username -pPassword123 -h 10.129.20.13
```

#### GUI Application

#### Install dbeaver

``` shell-session
ndefstathiou@htb[/htb]$ sudo dpkg -i dbeaver-<version>.deb
```

#### Run dbeaver

``` shell-session
ndefstathiou@htb[/htb]$ dbeaver &
```

#### Video - Connecting to MSSQL DB using dbeaver

![https://academy.hackthebox.com/storage/modules/116/ConnectToMSSQL.jpg](https://academy.hackthebox.com/storage/modules/116/ConnectToMSSQL.jpg)

#### Video - Connecting to MySQL DB using dbeaver

![https://academy.hackthebox.com/storage/modules/116/ConnectToMYSQL.jpg](https://academy.hackthebox.com/storage/modules/116/ConnectToMYSQL.jpg)

#### Tools

#### Tools to Interact with Common Services

## General Troubleshooting

####