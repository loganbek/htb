<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/136/section/1280
// Platform Version: V1
// Module ID: 136
// Module Name: File Upload Attacks
// Module Difficulty: Medium
// Section ID: 1280
// Section Title: Client-Side Validation
// Page Title: Hack The Box - Academy
// Page Number: 4
-->

# Client-Side Validation

**Module Name:** File Upload Attacks **Page Number:** 4

#### 

#### FILE UPLOAD ATTACKS

# Client-Side Validation

## Client-Side Validation

## Back-end Request Modification

## Disabling Front-end Validation

``` html
<input type="file" name="uploadFile" id="uploadFile" onchange="checkFile(this)" accept=".jpg,.jpeg,.png">
```

``` javascript
function checkFile(File) {
...SNIP...
    if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
        $('#error_message').text("Only images are allowed!");
        File.form.reset();
        $("#submit").attr("disabled", true);
    ...SNIP...
    }
}
```

``` html
<img src="/profile_images/shell.php" class="profile-image" id="profile-image">
```

# 

# 

#### Questions

####