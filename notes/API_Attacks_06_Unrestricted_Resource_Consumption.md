<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/268/section/3064
// Platform Version: V1
// Module ID: 268
// Module Name: API Attacks
// Module Difficulty: Medium
// Section ID: 3064
// Section Title: Unrestricted Resource Consumption
// Page Title: API Attacks
// Page Number: 06
-->

# Unrestricted Resource Consumption

**Module Name:** API Attacks **Page Number:** 06

#### API ATTACKS

# Unrestricted Resource Consumption

## Uncontrolled Resource Consumption

### Scenario

![https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_1.png](https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_1.png)

![https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_3.png](https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_3.png)

![https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_2.png](https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_2.png)

``` shell-session
[!bash!]$ dd if=/dev/urandom of=certificateOfIncorporation.pdf bs=1M count=30

30+0 records in
30+0 records out
31457280 bytes (31 MB, 30 MiB) copied, 0.139503 s, 225 MB/s
```

![https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_4.png](https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_4.png)

![https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_5.png](https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_5.png)

``` shell-session
[!bash!]$ dd if=/dev/urandom of=reverse-shell.exe bs=1M count=10

10+0 records in
10+0 records out
10485760 bytes (10 MB, 10 MiB) copied, 0.0398348 s, 263 MB/s
```

![https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_7.png](https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_7.png)

![https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_8.png](https://academy.hackthebox.com/storage/modules/268/API4_2023_Unrestricted_Resource_Consumption_Image_8.png)

### Abusing Default Behaviors

``` shell-session
[!bash!]$ curl -O http://94.237.51.179:51135/SupplierCompaniesCertificatesOfIncorporations/reverse-shell.exe

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 10.0M  100 10.0M    0     0  11.4M      0 --:--:-- --:--:-- --:--:-- 11.4M
```

### Prevention

# 

# 

#### Questions

####