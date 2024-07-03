# https://academy.hackthebox.com/module/18/section/2093

# What is the type of the service of the "syslog.service"?

systemctl show -p Type syslog.service # works - type is notify
## OR
systemctl list-unit-files | grep syslog
## OR
systemctl status rsyslog.service # doesn't work
## OR
systemctl status systemd-journald.service # doesn't work


