# https://academy.hackthebox.com/module/35/section/247

# The exercise above seems to be broken, as it returns incorrect results. Use the browser devtools to see what is the request it is sending when we search, and use cURL to search for 'flag' and obtain the flag.
curl -X POST -u admin:admin -d "search=flag" http://94.237.49.216:32821/search.php?search=flag
HTB{curl_g3773r}