# https://academy.hackthebox.com/module/18/section/79

# How many files exist on the system that have the ".log" file extension?
find / -type f -name "*.log" | wc -l 

# How many total packages are installed on the target system?

# Windows
Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName | Measure-Object

# Linux 
## APT (like Ubuntu):
dpkg -l | wc -l

## RPM (like Fedora):
rpm -qa | wc -l

## pacman (like Arch Linux):
pacman -Q | wc -l

## mac OS X
ls /Applications | wc -l


