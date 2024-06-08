
```bash
# values generation 1 to 1000
for i in $(seq 1 1000); do echo $i >> ids.txt; done
```

```bash
# id value fuzzing
ffuf -w ids.txt:FUZZ -u http://admin.academy.htb:PORT/admin/admin.php -X POST -d 'id=FUZZ' -H 'Content-Type: application/x-www-form-urlencoded' -fs xxx
```
