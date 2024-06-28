<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/134/section/1180
// Platform Version: V1
// Module ID: 134
// Module Name: Web Attacks
// Module Difficulty: Medium
// Section ID: 1180
// Section Title: Identifying IDORs
// Page Title: Web Attacks
// Page Number: 7
-->

# Identifying IDORs

**Module Name:** Web Attacks **Page Number:** 7

#### WEB ATTACKS

# Identifying IDORs

## URL Parameters & APIs

## AJAX Calls

``` javascript
function changeUserPassword() {
    $.ajax({
        url:"change_password.php",
        type: "post",
        dataType: "json",
        data: {uid: user.uid, password: user.password, is_admin: is_admin},
        success:function(result){
            //
        }
    });
}
```

## Understand Hashing/Encoding

``` javascript
$.ajax({
    url:"download.php",
    type: "post",
    dataType: "json",
    data: {filename: CryptoJS.MD5('file_1.pdf').toString()},
    success:function(result){
        //
    }
});
```

## Compare User Roles

``` json
{
  "attributes" : 
    {
      "type" : "salary",
      "url" : "/services/data/salaries/users/1"
    },
  "Id" : "1",
  "Name" : "User1"

}
```

####