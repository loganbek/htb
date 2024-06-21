#### 

#### File Upload Attacks

### Client-Side Validation

# Client-Side Validation

## Back-end Request Modification

## Disabling Front-end Validation

```html
<input type="file" name="uploadFile" id="uploadFile" onchange="checkFile(this)" accept=".jpg,.jpeg,.png">
```

```javascript
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

```html
<img src="/profile_images/shell.php" class="profile-image" id="profile-image">
```

# 

# 

### Questions

