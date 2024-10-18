<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/271/section/3127
// Platform Version: V1
// Module ID: 271
// Module Name: Attacking GraphQL
// Module Difficulty: Medium
// Section ID: 3127
// Section Title: Introduction to GraphQL
// Page Title: Attacking GraphQL
// Page Number: 01
-->

# Introduction to GraphQL

**Module Name:** Attacking GraphQL **Page Number:** 01

#### ATTACKING GRAPHQL Mini-Module

# Introduction to GraphQL

## Basic Overview

``` graphql
{
  users {
    id
    username
    role
  }
}
```

``` graphql
{
  "data": {
    "users": [
      {
        "id": 1,
        "username": "htb-stdnt",
        "role": "user"
      },
      {
        "id": 2,
        "username": "admin",
        "role": "admin"
      }
    ]
  }
}
```

``` graphql
{
  users(username: "admin") {
    id
    username
    role
  }
}
```

``` graphql
{
  users(username: "admin") {
    id
    username
    password
  }
}
```

``` graphql
{
  posts {
    title
    author {
      username
      role
    }
  }
}
```

``` graphql
{
  "data": {
    "posts": [
      {
        "title": "Hello World!",
        "author": {
          "username": "htb-stdnt",
          "role": "user"
        }
      },
      {
        "title": "Test",
        "author": {
          "username": "test",
          "role": "user"
        }
      }
    ]
  }
}
```

####