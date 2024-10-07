94.237.63.26:37017

# Disassemble 'loaded_shellcode' and modify its assembly code to decode the shellcode, by adding a loop to 'xor' each 8-bytes on the stack with the key in 'rbx'.

## To loop over the stack, try storing "rsp" in "rdx" and then doing "add rdx, 8" to move to the next 8-bytes on the stack. 




# The above server simulates a vulnerable server that we can run our shellcodes on. Optimize 'flag.s' for shellcoding and get it under 50 bytes, then send the shellcode to get the flag. (Feel free to find/create a custom shellcode) 

## Do we really care about a nice exit?!
