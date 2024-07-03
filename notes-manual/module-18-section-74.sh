# https://academy.hackthebox.com/module/18/section/74

# Find a way to start a simple HTTP server inside Pwnbox or your local VM using "npm". Submit the command that starts the web server on port 8080 (use the short argument to specify the port number).
npm install -g http-server
http-server -p 8080

# Find a way to start a simple HTTP server inside Pwnbox or your local VM using "php". Submit the command that starts the web server on the localhost (127.0.0.1) on port 8080.

## installation

### Ubuntu/Debian
sudo apt update
sudo apt install php

### CentOS/RHEL
sudo yum install php

### Fedora
sudo dnf install php

### Arch Linux
sudo pacman -S php

## run
php -S 127.0.0.1:8080
