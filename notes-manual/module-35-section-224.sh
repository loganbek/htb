# https://academy.hackthebox.com/module/35/section/224

# Obtain a session cookie through a valid login, and then use the cookie with cURL to search for the flag through a JSON POST request to '/search.php'
curl -X POST -b "PHPSESSID=dir5aqppt66dmfdgqjnrcnvah7" -H "Content-Type: application/json" -d '{"search": "flag"}' http://example.com/search.php
