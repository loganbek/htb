<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/144/section/3078
// Platform Version: V1
// Module ID: 144
// Module Name: Information Gathering - Web Edition
// Module Difficulty: Easy
// Section ID: 3078
// Section Title: .Well-Known URIs
// Page Title: Information Gathering - Web Edition
// Page Number: 14
-->

# .Well-Known URIs

**Module Name:** Information Gathering - Web Edition **Page Number:** 14

#### INFORMATION GATHERING - WEB EDITION

# Well-Known URIs

## Web Recon and .well-known

``` json
{
  "issuer": "https://example.com",
  "authorization_endpoint": "https://example.com/oauth2/authorize",
  "token_endpoint": "https://example.com/oauth2/token",
  "userinfo_endpoint": "https://example.com/oauth2/userinfo",
  "jwks_uri": "https://example.com/oauth2/jwks",
  "response_types_supported": ["code", "token", "id_token"],
  "subject_types_supported": ["public"],
  "id_token_signing_alg_values_supported": ["RS256"],
  "scopes_supported": ["openid", "profile", "email"]
}
```

####