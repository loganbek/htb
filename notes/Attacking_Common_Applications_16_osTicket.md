<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1214
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1214
// Section Title: osTicket
// Page Title: Hack The Box - Academy
// Page Number: 16
-->

# osTicket

**Module Name:** Attacking Common Applications **Page Number:** 16

#### 

#### ATTACKING COMMON APPLICATIONS

# osTicket

## Footprinting/Discovery/Enumeration

![https://academy.hackthebox.com/storage/modules/113/osticket_eyewitness.png](https://academy.hackthebox.com/storage/modules/113/osticket_eyewitness.png)

![https://academy.hackthebox.com/storage/modules/113/osticket_main.png](https://academy.hackthebox.com/storage/modules/113/osticket_main.png)

#### User Input

#### Processing

#### Solution

## Attacking osTicket

![https://academy.hackthebox.com/storage/modules/113/new_ticket.png](https://academy.hackthebox.com/storage/modules/113/new_ticket.png)

![https://academy.hackthebox.com/storage/modules/113/ticket_email.png](https://academy.hackthebox.com/storage/modules/113/ticket_email.png)

![https://academy.hackthebox.com/storage/modules/113/ost_tickets.png](https://academy.hackthebox.com/storage/modules/113/ost_tickets.png)

## osTicket - Sensitive Data Exposure

``` shell-session
[!bash!]$ sudo python3 dehashed.py -q inlanefreight.local -p

id : 5996447501
email : julie.clayton@inlanefreight.local
username : jclayton
password : JulieC8765!
hashed_password : 
name : Julie Clayton
vin : 
address : 
phone : 
database_name : ModBSolutions


id : 7344467234
email : kevin@inlanefreight.local
username : kgrimes
password : Fish1ng_s3ason!
hashed_password : 
name : Kevin Grimes
vin : 
address : 
phone : 
database_name : MyFitnessPal

<SNIP>
```

``` shell-session
[!bash!]$ cat ilfreight_subdomains

vpn.inlanefreight.local
support.inlanefreight.local
ns1.inlanefreight.local
mail.inlanefreight.local
apps.inlanefreight.local
ftp.inlanefreight.local
dev.inlanefreight.local
ir.inlanefreight.local
auth.inlanefreight.local
careers.inlanefreight.local
portal-stage.inlanefreight.local
dns1.inlanefreight.local
dns2.inlanefreight.local
meet.inlanefreight.local
portal-test.inlanefreight.local
home.inlanefreight.local
legacy.inlanefreight.local
```

![https://academy.hackthebox.com/storage/modules/113/osticket_admin.png](https://academy.hackthebox.com/storage/modules/113/osticket_admin.png)

![https://academy.hackthebox.com/storage/modules/113/osticket_kevin.png](https://academy.hackthebox.com/storage/modules/113/osticket_kevin.png)

![https://academy.hackthebox.com/storage/modules/113/osticket_ticket.png](https://academy.hackthebox.com/storage/modules/113/osticket_ticket.png)

## Closing Thoughts

# 

# 

#### Questions

####