#### Command Injections

### Intro to Command Injections

# What are Injections

## OS Command Injections

## PHP Example

```php
<?php
if (isset($_GET['filename'])) {
    system("touch /tmp/" . $_GET['filename'] . ".pdf");
}
?>
```

#### NodeJS Example

```javascript
app.get("/createfile", function(req, res){
    child_process.exec(`touch /tmp/${req.query.filename}.txt`);
})
```

