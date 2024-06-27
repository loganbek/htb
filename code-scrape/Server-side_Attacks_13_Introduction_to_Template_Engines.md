<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/145/section/1305
// Platform Version: V1
// Module ID: 145
// Module Name: Server-side Attacks
// Module Difficulty: Medium
// Section ID: 1305
// Section Title: Introduction to Template Engines
// Page Title: Server-side Attacks
// Page Number: 13
-->

# Introduction to Template Engines

**Module Name:** Server-side Attacks **Page Number:** 13

#### SERVER-SIDE ATTACKS

# Introduction to Template Engines

#### app.py

``` python
#/usr/bin/python3
from flask import *

app = Flask(__name__, template_folder="./")

@app.route("/")
def index():
	title = "Index Page"
	content = "Some content"
	return render_template("index.html", title=title, content=content)

if __name__ == "__main__":
	app.run(host="127.0.0.1", port=5000)
```

#### index.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
</body>
</html>
```

#### app.py

``` python
#/usr/bin/python3
from flask import *

app = Flask(__name__, template_folder="./")

@app.route("/")
def index():
	title = "Index Page"
	content = "Some content"
	return render_template("index.html", title=title, content=content)

@app.route("/hello", methods=['GET'])
def hello():
	name = request.args.get("name")
	if name == None:
		return redirect(f'{url_for("hello")}?name=guest')
	htmldoc = f"""
	<html>
	<body>
	<h1>Hello</h1>
	<a>Nice to see you {name}</a>
	</body>
	</html>
	"""
	return render_template_string(htmldoc)

if __name__ == "__main__":
	app.run(host="127.0.0.1", port=5000)
```

#### cURL - Interacting with the Target

``` shell-session
ndefstathiou@htb[/htb]$ curl -gis 'http://127.0.0.1:5000/hello?name={{7*7}}'

HTTP/1.0 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 79
Server: Werkzeug/2.0.2 Python/3.9.7
Date: Mon, 25 Oct 2021 00:12:40 GMT


	<html>
	<body>
	<h1>Hello</h1>
	<a>Nice to see you 49</a> # <-- Expresion evaluated
	</body>
	</html>
```

####