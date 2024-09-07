<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/280/section/3139
// Platform Version: V1
// Module ID: 280
// Module Name: Web Fuzzing
// Module Difficulty: Easy
// Section ID: 3139
// Section Title: Tooling
// Page Title: Web Fuzzing
// Page Number: 02
-->

# Tooling

**Module Name:** Web Fuzzing **Page Number:** 02

#### WEB FUZZING

# Tooling

### Installing Go, Python and PIPX

``` shell-session
[!bash!]$ sudo apt update
```

``` shell-session
[!bash!]$ sudo apt install -y golang
```

``` shell-session
[!bash!]$ sudo apt install -y python3 python3-pip
```

``` shell-session
[!bash!]$ sudo apt install pipx
[!bash!]$ pipx ensurepath
[!bash!]$ sudo pipx ensurepath --global
```

``` shell-session
[!bash!]$ go version
[!bash!]$ python3 --version
```

## FFUF

``` shell-session
[!bash!]$ go install github.com/ffuf/ffuf/v2@latest
```

### Use Cases

## Gobuster

``` shell-session
[!bash!]$ go install github.com/OJ/gobuster/v3@latest
```

### Use Cases

## FeroxBuster

``` shell-session
[!bash!]$ curl -sL https://raw.githubusercontent.com/epi052/feroxbuster/main/install-nix.sh | sudo bash -s $HOME/.local/bin
```

### Use Cases

## wfuzz/wenum

``` shell-session
[!bash!]$ pipx install git+https://github.com/WebFuzzForge/wenum
[!bash!]$ pipx runpip wenum install setuptools
```

### Use Cases

####