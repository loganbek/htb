#### 

#### File Upload Attacks

### Type Filters

# Content-Type

```php
$type = $_FILES['uploadFile']['type'];

if (!in_array($type, array('image/jpg', 'image/jpeg', 'image/png', 'image/gif'))) {
    echo "Only images are allowed";
    die();
}
```

```bash
ndefstathiou@htb[/htb]$ wget https://raw.githubusercontent.com/danielmiessler/SecLists/master/Miscellaneous/web/content-type.txt
ndefstathiou@htb[/htb]$ cat content-type.txt | grep 'image/' > image-content-types.txt
```

## MIME-Type

```bash
ndefstathiou@htb[/htb]$ echo "this is a text file" > text.jpg 
ndefstathiou@htb[/htb]$ file text.jpg 
text.jpg: ASCII text
```

```bash
ndefstathiou@htb[/htb]$ echo "GIF8" > text.jpg 
ndefstathiou@htb[/htb]$file text.jpg
text.jpg: GIF image data
```

```php
$type = mime_content_type($_FILES['uploadFile']['tmp_name']);

if (!in_array($type, array('image/jpg', 'image/jpeg', 'image/png', 'image/gif'))) {
    echo "Only images are allowed";
    die();
}
```

# 

# 

### Questions

