<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/271/section/3152
// Platform Version: V1
// Module ID: 271
// Module Name: Attacking GraphQL
// Module Difficulty: Medium
// Section ID: 3152
// Section Title: Information Disclosure
// Page Title: Hack The Box - Academy
// Page Number: 02
-->

# Information Disclosure

**Module Name:** Attacking GraphQL **Page Number:** 02

#### 

#### ATTACKING GRAPHQL Mini-Module

# Information Disclosure

## Identifying the GraphQL Engine

![https://academy.hackthebox.com/storage/modules/271/info_1.png](https://academy.hackthebox.com/storage/modules/271/info_1.png)

``` shell-session
lbek@htb[/htb]$ python3 main.py -d -f -t http://172.17.0.2

                +-------------------+
                |     graphw00f     |
                +-------------------+
                  ***            ***
                **                  **
              **                      **
    +--------------+              +--------------+
    |    Node X    |              |    Node Y    |
    +--------------+              +--------------+
                  ***            ***
                     **        **
                       **    **
                    +------------+
                    |   Node Z   |
                    +------------+

                graphw00f - v1.1.17
          The fingerprinting tool for GraphQL
           Dolev Farhi <dolev@lethalbit.com>
  
[*] Checking http://172.17.0.2/
[*] Checking http://172.17.0.2/graphql
[!] Found GraphQL at http://172.17.0.2/graphql
[*] Attempting to fingerprint...
[*] Discovered GraphQL Engine: (Graphene)
[!] Attack Surface Matrix: https://github.com/nicholasaleks/graphql-threat-matrix/blob/master/implementations/graphene.md
[!] Technologies: Python
[!] Homepage: https://graphene-python.org
[*] Completed.
```

![https://academy.hackthebox.com/storage/modules/271/info_2.png](https://academy.hackthebox.com/storage/modules/271/info_2.png)

## Introspection

``` graphql
{
  __schema {
    types {
      name
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/info_3.png](https://academy.hackthebox.com/storage/modules/271/info_3.png)

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

![https://academy.hackthebox.com/storage/modules/271/info_4.png](https://academy.hackthebox.com/storage/modules/271/info_4.png)

``` graphql
{
  __schema {
    queryType {
      fields {
        name
        description
      }
    }
  }
}
```

``` graphql
query IntrospectionQuery {
      __schema {
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          description
          
          locations
          args {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      description
      
      fields(includeDeprecated: true) {
        name
        description
        args {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      description
      type { ...TypeRef }
      defaultValue
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

![https://academy.hackthebox.com/storage/modules/271/info_5.png](https://academy.hackthebox.com/storage/modules/271/info_5.png)

# 

# 

#### Questions

####