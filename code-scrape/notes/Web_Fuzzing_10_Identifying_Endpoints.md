<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3136
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3136
// Section Title: Identifying Endpoints
// Page Title: Web Fuzzing
// Page Number: 10
-->

# Identifying Endpoints

**Module Name:** Web Fuzzing **Page Number:** 10

#### WEB FUZZING

# Identifying Endpoints

## REST

### Discovering REST Endpoints and Parameters

## SOAP

``` xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:lib="http://example.com/library">
   <soapenv:Header/>
   <soapenv:Body>
      <lib:SearchBooks>
         <lib:keywords>cybersecurity</lib:keywords>
         <lib:author>Dan Kaminsky</lib:author>
      </lib:SearchBooks>
   </soapenv:Body>
</soapenv:Envelope>
```

### Discovering SOAP Endpoints and Parameters

## Identifying GraphQL API Endpoints and Parameters

### GraphQL Queries

``` graphql
query {
  user(id: 123) {
    name
    email
    posts(limit: 5) {
      title
      body
    }
  }
}
```

### GraphQL Mutations

``` graphql
mutation {
  createPost(title: "New Post", body: "This is the content of the new post") {
    id
    title
  }
}
```

### Discovering Queries and Mutations

####