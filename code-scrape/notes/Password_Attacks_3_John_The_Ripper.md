<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/147/section/1985
// Platform Version: V1
// Module ID: 147
// Module Name: Password Attacks
// Module Difficulty: Medium
// Section ID: 1985
// Section Title: John The Ripper
// Page Title: Password Attacks
// Page Number: 3
-->

# John The Ripper

**Module Name:** Password Attacks **Page Number:** 3

#### PASSWORD ATTACKS

# John The Ripper

## Encryption Technologies

## Attack Methods

#### Dictionary Attacks

#### Brute Force Attacks

#### Rainbow Table Attacks

## Cracking Modes

#### Single Crack Mode

``` shell-session
ndefstathiou@htb[/htb]$ john --format=<hash_type> <hash or hash_file>
```

``` shell-session
ndefstathiou@htb[/htb]$ john --format=sha256 hashes_to_crack.txt
```

#### Cracking with John

#### Wordlist Mode

``` shell-session
ndefstathiou@htb[/htb]$ john --wordlist=<wordlist_file> --rules <hash_file>
```

#### Incremental Mode

#### Incremental Mode in John

``` shell-session
ndefstathiou@htb[/htb]$ john --incremental <hash_file>
```

## Cracking Files

#### Cracking Files with John

``` shell-session
cry0l1t3@htb:~$ <tool> <file_to_crack> > file.hash
cry0l1t3@htb:~$ pdf2john server_doc.pdf > server_doc.hash
cry0l1t3@htb:~$ john server_doc.hash
                # OR
cry0l1t3@htb:~$ john --wordlist=<wordlist.txt> server_doc.hash
```

``` shell-session
ndefstathiou@htb[/htb]$ locate *2john*

/usr/bin/bitlocker2john
/usr/bin/dmg2john
/usr/bin/gpg2john
/usr/bin/hccap2john
/usr/bin/keepass2john
/usr/bin/putty2john
/usr/bin/racf2john
/usr/bin/rar2john
/usr/bin/uaf2john
/usr/bin/vncpcap2john
/usr/bin/wlanhcx2john
/usr/bin/wpapcap2john
/usr/bin/zip2john
/usr/share/john/1password2john.py
/usr/share/john/7z2john.pl
/usr/share/john/DPAPImk2john.py
/usr/share/john/adxcsouf2john.py
/usr/share/john/aem2john.py
/usr/share/john/aix2john.pl
/usr/share/john/aix2john.py
/usr/share/john/andotp2john.py
/usr/share/john/androidbackup2john.py
...SNIP...
```

####