<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1454
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1454
// Section Title: Remediation Advice
// Page Title: Session Security
// Page Number: 13
-->

# Remediation Advice

**Module Name:** Session Security **Page Number:** 13

#### SESSION SECURITY

# Remediation Advice

## Remediating Session Hijacking

## Remediating Session Fixation

### PHP

``` php
session_regenerate_id(bool $delete_old_session = false): bool
```

### Java

``` java
...
session.invalidate();
session = request.getSession(true);
...
```

### .NET

``` asp
...
Session.Abandon();
...
```

## Remediating XSS

## Remediating CSRF

## Remediating Open Redirect

####