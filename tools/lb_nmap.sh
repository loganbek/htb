#!/bin/bash

# Function to perform quick scan
quick_scan() {
    for target in "$@"; do
        echo "Running Quick Scan on $target"
        nmap -T4 -F -oA quick_scan_$target $target
    done
}

# Function to perform stealth scan
stealth_scan() {
    for target in "$@"; do
        echo "Running Stealth Scan on $target"
        nmap -sS -T2 -p- -f -n -Pn -oA stealth_scan_$target $target
    done
}

# Function to perform balanced scan
balanced_scan() {
    for target in "$@"; do
        echo "Running Balanced Scan on $target"
        nmap -sS -sV -O -T3 -p- -oA balanced_scan_$target $target
    done
}

# Function to perform max scan
max_scan() {
    for target in "$@"; do
        echo "Running Maximum Scan on $target"
        nmap -sS -sU -p- -sV -O -A --script=all -T4 --min-rate=1000 -oA max_scan_$target $target
    done
}

# Check for at least two arguments
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <scan_type> <target1|hosts.txt> [<target2> ...]"
    echo "Scan Types: quick:0, stealth:1, balanced:2, max:3"
    exit 1
fi

# Read the scan type
scan_type=$1
shift # Shift arguments to leave only the target(s)

# Check if the first argument (after scan_type) is a file
if [ -f "$1" ]; then
    echo "Reading targets from $1"
    targets=$(cat "$1")
else
    targets="$@"
fi

# Run the appropriate scan based on the type
case $scan_type in
    0)
        quick_scan $targets
        ;;
    1)
        stealth_scan $targets
        ;;
    2)
        balanced_scan $targets
        ;;
    3)
        max_scan $targets
        ;;
    *)
        echo "Invalid scan type. Please use 0 (quick), 1 (stealth), 2 (balanced), or 3 (max)."
        exit 1
        ;;
esac

echo "Nmap scan(s) completed."

