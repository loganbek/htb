# https://academy.hackthebox.com/module/35/section/220

# What is the HTTP method used while intercepting the request? (case-sensitive)
GET

# Send a GET request to the above server, and read the response headers to find the version of Apache running on the server, then submit it as the answer. (answer format: X.Y.ZZ)
curl -X GET 94.237.55.183:49908 -i
#2.4.41