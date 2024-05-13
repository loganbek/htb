# https://academy.hackthebox.com/module/18/section/81

# What is the name of the config file that has been created after 2020-03-03 and is smaller than 28k but larger than 25k?
find / -type f -name "*.config" -size +25k -size -28k -newermt 2020-03-03
## OR
find / -type f -name "*.config" -size +25k -size -28k -newermt 2030-03-03 | grep -v "Permission denied:"

#  How many files exist on the system that have the ".bak" extension?
find / -type f -name "*.bak"

# Submit the full path of the "xxd" binary.
which xxd
