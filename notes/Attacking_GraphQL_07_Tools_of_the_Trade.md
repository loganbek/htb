<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/271/section/3157
// Platform Version: V1
// Module ID: 271
// Module Name: Attacking GraphQL
// Module Difficulty: Medium
// Section ID: 3157
// Section Title: Tools of the Trade
// Page Title: Attacking GraphQL
// Page Number: 07
-->

# Tools of the Trade

**Module Name:** Attacking GraphQL **Page Number:** 07

#### ATTACKING GRAPHQL Mini-Module

# Tools of the Trade

## GraphQL-Cop

``` shell-session
[!bash!]$ python3 graphql-cop.py  -v

version: 1.13
```

``` shell-session
[!bash!]$ python3 graphql-cop/graphql-cop.py -t http://172.17.0.2/graphql

[HIGH] Alias Overloading - Alias Overloading with 100+ aliases is allowed (Denial of Service - /graphql)
[HIGH] Array-based Query Batching - Batch queries allowed with 10+ simultaneous queries (Denial of Service - /graphql)
[HIGH] Directive Overloading - Multiple duplicated directives allowed in a query (Denial of Service - /graphql)
[HIGH] Field Duplication - Queries are allowed with 500 of the same repeated field (Denial of Service - /graphql)
[LOW] Field Suggestions - Field Suggestions are Enabled (Information Leakage - /graphql)
[MEDIUM] GET Method Query Support - GraphQL queries allowed using the GET method (Possible Cross Site Request Forgery (CSRF) - /graphql)
[LOW] GraphQL IDE - GraphiQL Explorer/Playground Enabled (Information Leakage - /graphql)
[HIGH] Introspection - Introspection Query Enabled (Information Leakage - /graphql)
[MEDIUM] POST based url-encoded query (possible CSRF) - GraphQL accepts non-JSON queries over POST (Possible Cross Site Request Forgery - /graphql)
```

## InQL

![https://academy.hackthebox.com/storage/modules/271/inql_1.png](https://academy.hackthebox.com/storage/modules/271/inql_1.png)

![https://academy.hackthebox.com/storage/modules/271/inql_2.png](https://academy.hackthebox.com/storage/modules/271/inql_2.png)

![https://academy.hackthebox.com/storage/modules/271/inql_3.png](https://academy.hackthebox.com/storage/modules/271/inql_3.png)

####