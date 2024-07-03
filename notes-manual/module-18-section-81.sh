# https://academy.hackthebox.com/module/18/section/81

# What is the name of the config file that has been created after 2020-03-03 and is smaller than 28k but larger than 25k?

find / -type f -name *.conf -size +25k -size -28k -newermt 2020-03-03 -exec basename {} \; 2>/dev/null

#  How many files exist on the system that have the ".bak" extension?
find / -type f -name "*.bak" | grep -v "Permission denied:" | wc -l

# Submit the full path of the "xxd" binary.
which xxd
