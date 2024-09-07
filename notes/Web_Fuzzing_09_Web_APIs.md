<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3135
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3135
// Section Title: Web APIs
// Page Title: Web Fuzzing
// Page Number: 09
-->

# Web APIs

**Module Name:** Web Fuzzing **Page Number:** 09

#### WEB FUZZING

# Web APIs

## Representational State Transfer (REST)

``` http
GET /users/123
```

## Simple Object Access Protocol (SOAP)

``` xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:GetStockPrice>
         <tem:StockName>AAPL</tem:StockName>
      </tem:GetStockPrice>
   </soapenv:Body>
</soapenv:Envelope>
```

## GraphQL

``` graphql
query {
  user(id: 123) {
    name
    email
  }
}
```

## Advantages of Web APIs

## How APIs are different from a web server

####