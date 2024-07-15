<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/18/section/78
// Platform Version: V1
// Module ID: 18
// Module Name: Linux Fundamentals
// Module Difficulty: Fundamental
// Section ID: 78
// Section Title: Working with Files and Directories
// Page Title: Linux Fundamentals
// Page Number: 08
-->

# Working with Files and Directories

**Module Name:** Linux Fundamentals **Page Number:** 08

#### LINUX FUNDAMENTALS

# Working with Files and Directories

## Create, Move, and Copy

#### Syntax - touch

``` shell-session
[!bash!]$ touch <name>
```

#### Syntax - mkdir

``` shell-session
[!bash!]$ mkdir <name>
```

#### Create an Empty File

``` shell-session
[!bash!]$ touch info.txt
```

#### Create a Directory

``` shell-session
[!bash!]$ mkdir Storage
```

``` shell-session
[!bash!]$ mkdir -p Storage/local/user/documents
```

``` shell-session
[!bash!]$ tree .

.
├── info.txt
└── Storage
    └── local
        └── user
            └── documents

4 directories, 1 file
```

#### Create userinfo.txt

``` shell-session
[!bash!]$ touch ./Storage/local/user/userinfo.txt
```

``` shell-session
[!bash!]$ tree .

.
├── info.txt
└── Storage
    └── local
        └── user
            ├── documents
            └── userinfo.txt

4 directories, 2 files
```

#### Syntax - mv

``` shell-session
[!bash!]$ mv <file/directory> <renamed file/directory>
```

#### Rename File

``` shell-session
[!bash!]$ mv info.txt information.txt
```

#### Create readme.txt

``` shell-session
[!bash!]$ touch readme.txt
```

#### Move Files to Specific Directory

``` shell-session
[!bash!]$ mv information.txt readme.txt Storage/
```

``` shell-session
[!bash!]$ tree .

.
└── Storage
    ├── information.txt
    ├── local
    │   └── user
    │       ├── documents
    │       └── userinfo.txt
    └── readme.txt

4 directories, 3 files
```

#### Copy readme.txt

``` shell-session
[!bash!]$ cp Storage/readme.txt Storage/local/
```

``` shell-session
[!bash!]$ tree .

.
└── Storage
    ├── information.txt
    ├── local
    │   ├── readme.txt
    │   └── user
    │       ├── documents
    │       └── userinfo.txt
    └── readme.txt

4 directories, 4 files
```

##### Optional Exercise:

# 

# 

#### Questions

####