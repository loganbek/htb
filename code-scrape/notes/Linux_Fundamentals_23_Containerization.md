<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/2097
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 2097
// Section Title: Containerization
// Page Title: Hack The Box - Academy
// Page Number: 23
-->

# Containerization

**Module Name:** Linux Fundamentals **Page Number:** 23

#### 

#### LINUX FUNDAMENTALS

# Containerization

## Dockers

#### Install Docker-Engine

``` bash
#!/bin/bash

# Preparation
sudo apt update -y
sudo apt install ca-certificates curl gnupg lsb-release -y
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update -y
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# Add user htb-student to the Docker group
sudo usermod -aG docker htb-student
echo '[!] You need to log out and log back in for the group changes to take effect.'

# Test Docker installation
docker run hello-world
```

#### Dockerfile

``` bash
# Use the latest Ubuntu 22.04 LTS as the base image
FROM ubuntu:22.04

# Update the package repository and install the required packages
RUN apt-get update && \
    apt-get install -y \
        apache2 \
        openssh-server \
        && \
    rm -rf /var/lib/apt/lists/*

# Create a new user called "student"
RUN useradd -m docker-user && \
    echo "docker-user:password" | chpasswd

# Give the htb-student user full access to the Apache and SSH services
RUN chown -R docker-user:docker-user /var/www/html && \
    chown -R docker-user:docker-user /var/run/apache2 && \
    chown -R docker-user:docker-user /var/log/apache2 && \
    chown -R docker-user:docker-user /var/lock/apache2 && \
    usermod -aG sudo docker-user && \
    echo "docker-user ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# Expose the required ports
EXPOSE 22 80

# Start the SSH and Apache services
CMD service ssh start && /usr/sbin/apache2ctl -D FOREGROUND
```

#### Docker Build

``` shell-session
ndefstathiou@htb[/htb]$ docker build -t FS_docker .
```

#### Docker Run - Syntax

``` shell-session
ndefstathiou@htb[/htb]$ docker run -p <host port>:<docker port> -d <docker container name>
```

#### Docker Run

``` shell-session
ndefstathiou@htb[/htb]$ docker run -p 8022:22 -p 8080:80 -d FS_docker
```

#### Docker Management

## Linux Containers

#### Install LXC

``` shell-session
ndefstathiou@htb[/htb]$ sudo apt-get install lxc lxc-utils -y
```

#### Creating an LXC Container

``` shell-session
ndefstathiou@htb[/htb]$ sudo lxc-create -n linuxcontainer -t ubuntu
```

#### Managing LXC Containers

#### Securing LXC

``` shell-session
ndefstathiou@htb[/htb]$ sudo vim /usr/share/lxc/config/linuxcontainer.conf
```

``` txt
lxc.cgroup.cpu.shares = 512
lxc.cgroup.memory.limit_in_bytes = 512M
```

``` shell-session
ndefstathiou@htb[/htb]$ sudo systemctl restart lxc.service
```

# 

# 

####