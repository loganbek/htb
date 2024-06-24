<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1201
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1201
// Section Title: IDOR in Insecure APIs
// Page Title: Hack The Box - Academy
// Page Number: 10
-->

# IDOR in Insecure APIs

**Module Name:** Web Attacks **Page Number:** 10

#### 

#### WEB ATTACKS

# IDOR in Insecure APIs

## Identifying Insecure APIs

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_employee_manager.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_employee_manager.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_edit_profile.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_edit_profile.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_update_request.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_update_request.jpg)

``` json
{
    "uid": 1,
    "uuid": "40f5888b67c748df7efba008e7c2f9d2",
    "role": "employee",
    "full_name": "Amy Lindon",
    "email": "a_lindon@employees.htb",
    "about": "A Release is like a boat. 80% of the holes plugged is not good enough."
}
```

## Exploiting Insecure APIs

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_uid_mismatch.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_uid_mismatch.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_uuid_mismatch.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_uuid_mismatch.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_create_new_user_1.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_create_new_user_1.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_invalid_role.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_invalid_role.jpg)

# 

# 

#### Questions

####