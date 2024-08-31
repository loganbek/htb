#!/bin/bash

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
RESET='\033[0m'

# Function to perform quick scan
quick_scan() {
    for target in "$@"; do
        echo -e "${BLUE}Running Quick Scan on $target${RESET}"
        nmap -T4 -F -oA quick_scan_$target $target
        echo -e "${GREEN}Quick Scan completed for $target${RESET}"
    done
}

# Function to perform stealth scan
stealth_scan() {
    for target in "$@"; do
        echo -e "${BLUE}Running Stealth Scan on $target${RESET}"
        nmap -sS -T2 -p- -f -n -Pn -oA stealth_scan_$target $target
        echo -e "${GREEN}Stealth Scan completed for $target${RESET}"
    done
}

# Function to perform balanced scan
balanced_scan() {
    for target in "$@"; do
        echo -e "${BLUE}Running Balanced Scan on $target${RESET}"
        nmap -sS -sV -O -T3 -p- -oA balanced_scan_$target $target
        echo -e "${GREEN}Balanced Scan completed for $target${RESET}"
    done
}

# Function to perform max scan
max_scan() {
    for target in "$@"; do
        echo -e "${BLUE}Running Maximum Scan on $target${RESET}"
        nmap -sS -sU -p- -sV -O -A --script=all -T4 --min-rate=1000 -oA max_scan_$target $target
        echo -e "${GREEN}Maximum Scan completed for $target${RESET}"
    done
}

# Function to perform all scans in sequence
all_scan() {
    for target in "$@"; do
        echo -e "${BLUE}Running All Scans on $target${RESET}"

        echo -e "${YELLOW}Running Quick Scan...${RESET}"
        quick_scan $target

        echo -e "${YELLOW}Running Balanced Scan...${RESET}"
        balanced_scan $target

        echo -e "${YELLOW}Running Stealth Scan...${RESET}"
        stealth_scan $target

        echo -e "${YELLOW}Running Maximum Scan...${RESET}"
        max_scan $target
    done
}

# Check for at least two arguments
if [ "$#" -lt 2 ]; then
    echo -e "${RED}Usage: $0 <scan_type> <target1|hosts.txt> [<target2> ...]${RESET}"
    echo -e "${RED}Scan Types: quick:0, stealth:1, balanced:2, max:3, all-4:4${RESET}"
    exit 1
fi

# Read the scan type
scan_type=$1
shift # Shift arguments to leave only the target(s)

# Check if the first argument (after scan_type) is a file
if [ -f "$1" ]; then
    echo -e "${YELLOW}Reading targets from $1${RESET}"
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
    4)
        all_scan $targets
        ;;
    *)
        echo -e "${RED}Invalid scan type. Please use 0 (quick), 1 (stealth), 2 (balanced), 3 (max), or 4 (all).${RESET}"
        exit 1
        ;;
esac

echo -e "${GREEN}Nmap scan(s) completed.${RESET}"
