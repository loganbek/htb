<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1200
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1200
// Section Title: Chaining IDOR Vulnerabilities
// Page Title: Web Attacks
// Page Number: 11
-->

# Chaining IDOR Vulnerabilities

**Module Name:** Web Attacks **Page Number:** 11

#### WEB ATTACKS

# Chaining IDOR Vulnerabilities

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_get_api.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_get_api.jpg)

## Information Disclosure

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_get_another_user.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_get_another_user.jpg)

``` json
{
    "uid": "2",
    "uuid": "4a9bd19b3b8676199592a346051f950c",
    "role": "employee",
    "full_name": "Iona Franklyn",
    "email": "i_franklyn@employees.htb",
    "about": "It takes 20 years to build a reputation and few minutes of cyber-incident to ruin it."
}
```

## Modifying Other Users' Details

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_modify_another_user.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_modify_another_user.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_new_another_user_details.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_new_another_user_details.jpg)

## Chaining Two IDOR Vulnerabilities

``` json
{
    "uid": "X",
    "uuid": "a36fa9e66e85f2dd6f5e13cad45248ae",
    "role": "web_admin",
    "full_name": "administrator",
    "email": "webadmin@employees.htb",
    "about": "HTB{FLAG}"
}
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_modify_our_role.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_modify_our_role.jpg)

``` json
{
    "uid": "1",
    "uuid": "40f5888b67c748df7efba008e7c2f9d2",
    "role": "web_admin",
    "full_name": "Amy Lindon",
    "email": "a_lindon@employees.htb",
    "about": "A Release is like a boat. 80% of the holes plugged is not good enough."
}
```

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_create_new_user_2.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_create_new_user_2.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_get_new_user.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_get_new_user.jpg)

# 

# 

#### Questions

####