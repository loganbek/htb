<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/143/section/1460
// Platform Version: V1
// Module ID: 143
// Module Name: Active Directory Enumeration & Attacks
// Module Difficulty: Medium
// Section ID: 1460
// Section Title: Additional AD Auditing Techniques
// Page Title: Hack The Box - Academy
// Page Number: 33
-->

# Additional AD Auditing Techniques

**Module Name:** Active Directory Enumeration & Attacks **Page Number:** 33

#### 

#### ACTIVE DIRECTORY ENUMERATION & ATTACKS

# Additional AD Auditing Techniques

## Creating an AD Snapshot with Active Directory Explorer

#### Logging in with AD Explorer

![https://academy.hackthebox.com/storage/modules/47/AD_explorer1.png](https://academy.hackthebox.com/storage/modules/47/AD_explorer1.png)

#### Browsing AD with AD Explorer

![https://academy.hackthebox.com/storage/modules/47/AD_explorer_logged_in.png](https://academy.hackthebox.com/storage/modules/47/AD_explorer_logged_in.png)

#### Creating a Snapshot of AD with AD Explorer

![https://academy.hackthebox.com/storage/modules/47/AD_explorer_snapshot.png](https://academy.hackthebox.com/storage/modules/47/AD_explorer_snapshot.png)

## PingCastle

#### Viewing the PingCastle Help Menu

``` cmd-session
C:\htb> PingCastle.exe --help

switch:
  --help              : display this message
  --interactive       : force the interactive mode
  --log               : generate a log file
  --log-console       : add log to the console
  --log-samba <option>: enable samba login (example: 10)

Common options when connecting to the AD
  --server <server>   : use this server (default: current domain controller)
                        the special value * or *.forest do the healthcheck for all domains
  --port <port>       : the port to use for ADWS or LDAP (default: 9389 or 389)
  --user <user>       : use this user (default: integrated authentication)
  --password <pass>   : use this password (default: asked on a secure prompt)
  --protocol <proto>  : selection the protocol to use among LDAP or ADWS (fastest)
                      : ADWSThenLDAP (default), ADWSOnly, LDAPOnly, LDAPThenADWS

<SNIP>
```

#### Running PingCastle

#### PingCastle Interactive TUI

``` cmd-session
|:.      PingCastle (Version 2.10.1.0     1/19/2022 8:12:02 AM)
|  #:.   Get Active Directory Security at 80% in 20% of the time
# @@  >  End of support: 7/31/2023
| @@@:
: .#                                 Vincent LE TOUX (contact@pingcastle.com)
  .:       twitter: @mysmartlogon                    https://www.pingcastle.com
What do you want to do?
=======================
Using interactive mode.
Do not forget that there are other command line switches like --help that you can use
  1-healthcheck-Score the risk of a domain
  2-conso      -Aggregate multiple reports into a single one
  3-carto      -Build a map of all interconnected domains
  4-scanner    -Perform specific security checks on workstations
  5-export     -Export users or computers
  6-advanced   -Open the advanced menu
  0-Exit
==============================
This is the main functionnality of PingCastle. In a matter of minutes, it produces a report which will give you an overview of your Active Directory security. This report can be generated on other domains by using the existing trust links.
```

#### Scanner Options

``` cmd-session
|:.      PingCastle (Version 2.10.1.0     1/19/2022 8:12:02 AM)
|  #:.   Get Active Directory Security at 80% in 20% of the time
# @@  >  End of support: 7/31/2023
| @@@:
: .#                                 Vincent LE TOUX (contact@pingcastle.com)
  .:       twitter: @mysmartlogon                    https://www.pingcastle.com
Select a scanner
================
What scanner whould you like to run ?
WARNING: Checking a lot of workstations may raise security alerts.
  1-aclcheck                                                  9-oxidbindings
  2-antivirus                                                 a-remote
  3-computerversion                                           b-share
  4-foreignusers                                              c-smb
  5-laps_bitlocker                                            d-smb3querynetwork
  6-localadmin                                                e-spooler
  7-nullsession                                               f-startup
  8-nullsession-trust                                         g-zerologon
  0-Exit
==============================
Check authorization related to users or groups. Default to everyone, authenticated users and domain users
```

#### Viewing The Report

![https://academy.hackthebox.com/storage/modules/143/report-example.png](https://academy.hackthebox.com/storage/modules/143/report-example.png)

#### Group Policy

## Group3r

#### Group3r Basic Usage

``` cmd-session
C:\htb> group3r.exe -f <filepath-name.log>
```

#### Reading Output

![https://academy.hackthebox.com/storage/modules/143/grouper-output.png](https://academy.hackthebox.com/storage/modules/143/grouper-output.png)

#### Group3r Finding

![https://academy.hackthebox.com/storage/modules/143/grouper-finding.png](https://academy.hackthebox.com/storage/modules/143/grouper-finding.png)

## ADRecon

#### Running ADRecon

``` powershell-session
PS C:\htb> .\ADRecon.ps1

[*] ADRecon v1.1 by Prashant Mahajan (@prashant3535)
[*] Running on INLANEFREIGHT.LOCAL\MS01 - Member Server
[*] Commencing - 03/28/2022 09:24:58
[-] Domain
[-] Forest
[-] Trusts
[-] Sites
[-] Subnets
[-] SchemaHistory - May take some time
[-] Default Password Policy
[-] Fine Grained Password Policy - May need a Privileged Account
[-] Domain Controllers
[-] Users and SPNs - May take some time
[-] PasswordAttributes - Experimental
[-] Groups and Membership Changes - May take some time
[-] Group Memberships - May take some time
[-] OrganizationalUnits (OUs)
[-] GPOs
[-] gPLinks - Scope of Management (SOM)
[-] DNS Zones and Records
[-] Printers
[-] Computers and SPNs - May take some time
[-] LAPS - Needs Privileged Account
[-] BitLocker Recovery Keys - Needs Privileged Account
[-] GPOReport - May take some time
[*] Total Execution Time (mins): 11.05
[*] Output Directory: C:\Tools\ADRecon-Report-20220328092458
```

#### Reporting

``` powershell-session
PS C:\htb> ls

    Directory: C:\Tools\ADRecon-Report-20220328092458

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----         3/28/2022  12:42 PM                CSV-Files
-a----         3/28/2022  12:42 PM        2758736 GPO-Report.html
-a----         3/28/2022  12:42 PM         392780 GPO-Report.xml
```

# 

# 

#### Questions

####