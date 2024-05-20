# https://academy.hackthebox.com/module/24/section/160

# Download the file flag.txt from the web root using wget from the Pwnbox. Submit the contents of the file as your answer.

'''bash
wget http://<TARGETIP>/flag.txt
'''

#  Upload the attached file named upload_win.zip to the target using the method of your choice. Once uploaded, RDP to the box, unzip the archive, and run "hasher upload_win.txt" from the command line. Submit the generated hash as your answer.



'''bash
wget https://academy.hackthebox.com/storage/modules/24/upload_win.zip
'''

'''bash
# install rdp

rdp htb-student@10.129.14.143
wget https://academy.hackthebox.com/storage/modules/24/upload_win.zip
unzip upload_win.zip
./hasher upload_win.txt
'''


