<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/233/section/2566
// Platform Version: V1
// Module ID: 233
// Module Name: Detecting Windows Attacks with Splunk
// Module Difficulty: Medium
// Section ID: 2566
// Section Title: Detecting Ransomware
// Page Title: Detecting Windows Attacks with Splunk
// Page Number: 22
-->

# Detecting Ransomware

**Module Name:** Detecting Windows Attacks with Splunk **Page Number:** 22

#### DETECTING WINDOWS ATTACKS WITH SPLUNK

# Detecting Ransomware

![https://academy.hackthebox.com/storage/modules/233/121.png](https://academy.hackthebox.com/storage/modules/233/121.png)

![https://academy.hackthebox.com/storage/modules/233/122.png](https://academy.hackthebox.com/storage/modules/233/122.png)

``` shell-session
[!bash!]$ xfreerdp /u:htb-student /p:'HTB_@cademy_stdnt!' /v:[Target IP] /dynamic-resolution
```

#### Related Evidence

## Detecting Ransomware With Splunk & Zeek Logs (Excessive Overwriting)

``` shell-session
index="ransomware_open_rename_sodinokibi" sourcetype="bro:smb_files:json" 
| where action IN ("SMB::FILE_OPEN", "SMB::FILE_RENAME")
| bin _time span=5m
| stats count by _time, source, action
| where count>30 
| stats sum(count) as count values(action) dc(action) as uniq_actions by _time, source
| where uniq_actions==2 AND count>100
```

![https://academy.hackthebox.com/storage/modules/233/123.png](https://academy.hackthebox.com/storage/modules/233/123.png)

## Detecting Ransomware With Splunk & Zeek Logs (Excessive Renaming With The Same Extension)

``` shell-session
index="ransomware_new_file_extension_ctbl_ocker" sourcetype="bro:smb_files:json" action="SMB::FILE_RENAME" 
| bin _time span=5m
| rex field="name" "\.(?<new_file_name_extension>[^\.]*$)"
| rex field="prev_name" "\.(?<old_file_name_extension>[^\.]*$)"
| stats count by _time, id.orig_h, id.resp_p, name, source, old_file_name_extension, new_file_name_extension,
| where new_file_name_extension!=old_file_name_extension
| stats count by _time, id.orig_h, id.resp_p, source, new_file_name_extension
| where count>20
| sort -count
```

![https://academy.hackthebox.com/storage/modules/233/124.png](https://academy.hackthebox.com/storage/modules/233/124.png)

# 

# 

#### Questions

####