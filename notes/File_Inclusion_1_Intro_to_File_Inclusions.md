<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/23/section/250
// Platform Version: V1
// Module ID: 23
// Module Name: File Inclusion
// Module Difficulty: Medium
// Section ID: 250
// Section Title: Intro to File Inclusions
// Page Title: File Inclusion
// Page Number: 1
-->

# Intro to File Inclusions

**Module Name:** File Inclusion **Page Number:** 1

#### FILE INCLUSION

# Intro to File Inclusions

## Local File Inclusion (LFI)

## Examples of Vulnerable Code

#### PHP

``` php
if (isset($_GET['language'])) {
    include($_GET['language']);
}
```

#### NodeJS

``` javascript
if(req.query.language) {
    fs.readFile(path.join(__dirname, req.query.language), function (err, data) {
        res.write(data);
    });
}
```

``` js
app.get("/about/:language", function(req, res) {
    res.render(`/${req.params.language}/about.html`);
});
```

#### Java

``` jsp
<c:if test="${not empty param.language}">
    <jsp:include file="<%= request.getParameter('language') %>" />
</c:if>
```

``` jsp
<c:import url= "<%= request.getParameter('language') %>"/>
```

#### .NET

``` cs
@if (!string.IsNullOrEmpty(HttpContext.Request.Query['language'])) {
    <% Response.WriteFile("<% HttpContext.Request.Query['language'] %>"); %> 
}
```

``` cs
@Html.Partial(HttpContext.Request.Query['language'])
```

``` cs
<!--#include file="<% HttpContext.Request.Query['language'] %>"-->
```

## Read vs Execute

####