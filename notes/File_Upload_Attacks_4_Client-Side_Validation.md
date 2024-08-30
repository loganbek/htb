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

![https://academy.hackthebox.com/storage/modules/136/file_uploads_profile_image_upload.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_profile_image_upload.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_select_file_types.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_select_file_types.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_select_denied.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_select_denied.jpg)

## Back-end Request Modification

![https://academy.hackthebox.com/storage/modules/136/file_uploads_normal_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_normal_request.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_image_upload_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_image_upload_request.jpg)

![https://academy.hackthebox.com/storage/modules/136/file_uploads_modified_upload_request.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_modified_upload_request.jpg)

## Disabling Front-end Validation

![https://academy.hackthebox.com/storage/modules/136/file_uploads_element_inspector.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_element_inspector.jpg)

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

![https://academy.hackthebox.com/storage/modules/136/file_uploads_removed_js_function.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_removed_js_function.jpg)

``` html
<img src="/profile_images/shell.php" class="profile-image" id="profile-image">
```

![https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg](https://academy.hackthebox.com/storage/modules/136/file_uploads_php_manual_shell.jpg)

# 

# 

#### Questions

####