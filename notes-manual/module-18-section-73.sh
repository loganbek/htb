# https://academy.hackthebox.com/module/18/section/73

# Use the "systemctl" command to list all units of services and submit the unit name with the description "Load AppArmor profiles managed internally by snapd" as the answer.
ssh htb-student@10.129.205.169 systemctl list-units --type=service --all | grep "Load AppArmor profiles managed internally by snapd"
ssh htb-student@<TARGET_SYSTEM_IP> systemctl list-units --type=service --all | grep "Load AppArmor profiles managed internally by snapd"
