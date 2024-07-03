<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/115/section/1117
// Platform Version: V1
// Module ID: 115
// Module Name: Shells & Payloads
// Module Difficulty: Medium
// Section ID: 1117
// Section Title: Spawning Interactive Shells
// Page Title: Shells & Payloads
// Page Number: 11
-->

# Spawning Interactive Shells

**Module Name:** Shells & Payloads **Page Number:** 11

#### SHELLS & PAYLOADS

# Spawning Interactive Shells

## /bin/sh -i

#### Interactive

```shell-session
/bin/sh -i
sh: no job control in this shell
sh-4.2$
```

## Perl

#### Perl To Shell

```shell-session
perl —e 'exec "/bin/sh";'
```

```shell-session
perl: exec "/bin/sh";
```

## Ruby

#### Ruby To Shell

```shell-session
ruby: exec "/bin/sh"
```

## Lua

#### Lua To Shell

```shell-session
lua: os.execute('/bin/sh')
```

## AWK

#### AWK To Shell

```shell-session
awk 'BEGIN {system("/bin/sh")}'
```

## Find

#### Using Find For A Shell

```shell-session
find / -name nameoffile -exec /bin/awk 'BEGIN {system("/bin/sh")}' \;
```

## Using Exec To Launch A Shell

```shell-session
find . -exec /bin/sh \; -quit
```

## VIM

#### Vim To Shell

```shell-session
vim -c ':!/bin/sh'
```

#### Vim Escape

```shell-session
vim
:set shell=/bin/sh
:shell
```

## Execution Permissions Considerations

#### Permissions

```shell-session
ls -la <path/to/fileorbinary>
```

#### Sudo -l

```shell-session
sudo -l
Matching Defaults entries for apache on ILF-WebSrv:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin

User apache may run the following commands on ILF-WebSrv:
    (ALL : ALL) NOPASSWD: ALL
```

####