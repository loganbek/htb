#### 

#### File Upload Attacks

### Blacklist Filters

# Blacklisting Extensions

```php
$fileName = basename($_FILES["uploadFile"]["name"]);
$extension = pathinfo($fileName, PATHINFO_EXTENSION);
$blacklist = array('php', 'php7', 'phps');

if (in_array($extension, $blacklist)) {
    echo "File type not allowed";
    die();
}
```

## Fuzzing Extensions

## Non-Blacklisted Extensions

# 

# 

### Questions

