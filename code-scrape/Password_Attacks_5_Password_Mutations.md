<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/147/section/1391
// Platform Version: V1
// Module ID: 147
// Module Name: Password Attacks
// Module Difficulty: Medium
// Section ID: 1391
// Section Title: Password Mutations
// Page Title: Hack The Box - Academy
// Page Number: 5
-->

# Password Mutations

**Module Name:** Password Attacks **Page Number:** 5

#### 

#### PASSWORD ATTACKS

# Password Mutations

#### Password List

``` shell-session
ndefstathiou@htb[/htb]$ cat password.list

password
```

#### Hashcat Rule File

``` shell-session
ndefstathiou@htb[/htb]$ cat custom.rule

:
c
so0
c so0
sa@
c sa@
c sa@ so0
$!
$! c
$! so0
$! sa@
$! c so0
$! c sa@
$! so0 sa@
$! c so0 sa@
```

#### Generating Rule-based Wordlist

``` shell-session
ndefstathiou@htb[/htb]$ hashcat --force password.list -r custom.rule --stdout | sort -u > mut_password.list
ndefstathiou@htb[/htb]$ cat mut_password.list

password
Password
passw0rd
Passw0rd
p@ssword
P@ssword
P@ssw0rd
password!
Password!
passw0rd!
p@ssword!
Passw0rd!
P@ssword!
p@ssw0rd!
P@ssw0rd!
```

#### Hashcat Existing Rules

``` shell-session
ndefstathiou@htb[/htb]$ ls /usr/share/hashcat/rules/

best64.rule                  specific.rule
combinator.rule              T0XlC-insert_00-99_1950-2050_toprules_0_F.rule
d3ad0ne.rule                 T0XlC-insert_space_and_special_0_F.rule
dive.rule                    T0XlC-insert_top_100_passwords_1_G.rule
generated2.rule              T0XlC.rule
generated.rule               T0XlCv1.rule
hybrid                       toggles1.rule
Incisive-leetspeak.rule      toggles2.rule
InsidePro-HashManager.rule   toggles3.rule
InsidePro-PasswordsPro.rule  toggles4.rule
leetspeak.rule               toggles5.rule
oscommerce.rule              unix-ninja-leetspeak.rule
rockyou-30000.rule
```

#### Generating Wordlists Using CeWL

``` shell-session
ndefstathiou@htb[/htb]$ cewl https://www.inlanefreight.com -d 4 -m 6 --lowercase -w inlane.wordlist
ndefstathiou@htb[/htb]$ wc -l inlane.wordlist

326
```

# 

# 

#### Questions

####