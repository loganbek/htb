<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/112/section/1062
// Platform Version: V1
// Module ID: 112
// Module Name: Footprinting
// Module Difficulty: Medium
// Section ID: 1062
// Section Title: Cloud Resources
// Page Title: Footprinting
// Page Number: 4
-->

# Cloud Resources

**Module Name:** Footprinting **Page Number:** 4

#### FOOTPRINTING

# Cloud Resources

#### Company Hosted Servers

``` shell-session
[!bash!]$ for i in $(cat subdomainlist);do host $i | grep "has address" | grep inlanefreight.com | cut -d" " -f1,4;done

blog.inlanefreight.com 10.129.24.93
inlanefreight.com 10.129.27.33
matomo.inlanefreight.com 10.129.127.22
www.inlanefreight.com 10.129.127.33
s3-website-us-west-2.amazonaws.com 10.129.95.250
```

#### Google Search for AWS

![https://academy.hackthebox.com/storage/modules/112/gsearch1.png](https://academy.hackthebox.com/storage/modules/112/gsearch1.png)

#### Google Search for Azure

![https://academy.hackthebox.com/storage/modules/112/gsearch2.png](https://academy.hackthebox.com/storage/modules/112/gsearch2.png)

#### Target Website - Source Code

![https://academy.hackthebox.com/storage/modules/112/cloud3.png](https://academy.hackthebox.com/storage/modules/112/cloud3.png)

#### Domain.Glass Results

![https://academy.hackthebox.com/storage/modules/112/cloud1.png](https://academy.hackthebox.com/storage/modules/112/cloud1.png)

#### GrayHatWarfare Results

![https://academy.hackthebox.com/storage/modules/112/cloud2.png](https://academy.hackthebox.com/storage/modules/112/cloud2.png)

#### Private and Public SSH Keys Leaked

![https://academy.hackthebox.com/storage/modules/112/ghw1.png](https://academy.hackthebox.com/storage/modules/112/ghw1.png)

#### SSH Private Key

![https://academy.hackthebox.com/storage/modules/112/ghw2.png](https://academy.hackthebox.com/storage/modules/112/ghw2.png)

####