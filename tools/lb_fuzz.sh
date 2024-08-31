#!/bin/bash

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo -e "${RED}Usage: $0 <type> <target_or_target_list>${NC}"
    exit 1
fi

TYPE=$1
TARGET_OR_LIST=$2

# Common wordlists in Parrot OS
VHOST_WORDLIST="/usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt"
DIR_WORDLIST="/usr/share/seclists/Discovery/Web-Content/common.txt"

# Check if the type is valid
if [ "$TYPE" -ne 0 ] && [ "$TYPE" -ne 1 ]; then
    echo -e "${RED}Invalid type. Use 0 for vhost fuzzing or 1 for directory/files fuzzing.${NC}"
    exit 1
fi

# Function to sanitize target for use in filenames
sanitize_target() {
    local target=$1
    # Remove leading http(s) and trailing slashes, replace non-alphanumeric characters with underscores
    local sanitized=$(echo "$target" | sed -e 's/^https\?:\/\///' -e 's/\/$//' -e 's/[^a-zA-Z0-9]/_/g')
    echo "$sanitized"
}

# Function for vhost fuzzing
fuzz_vhost() {
    local target=$1
    local output_file=$(generate_output_filename 0 "$target")
    echo -e "${BLUE}Starting vhost fuzzing on $target...${NC}"
    while IFS= read -r target; do
        local sanitized_target=$(sanitize_target "$target")
        echo -e "${YELLOW}Fuzzing $target...${NC}"
        # Using ffuf for vhost fuzzing
        ffuf -u "$target" -H "Host: FUZZ.$sanitized_target" -w "$VHOST_WORDLIST" -o "$output_file" -of csv
    done < "$TARGET_OR_LIST"
}

# Function for directory/files fuzzing
fuzz_dir_files() {
    local target=$1
    local output_file=$(generate_output_filename 1 "$target")
    echo -e "${BLUE}Starting directory/files fuzzing on $target...${NC}"
    while IFS= read -r target; do
        local sanitized_target=$(sanitize_target "$target")
        echo -e "${YELLOW}Fuzzing $target...${NC}"
        # Using ffuf for directory/files fuzzing
        ffuf -u "$target/FUZZ" -w "$DIR_WORDLIST" -o "$output_file" -of csv
    done < "$TARGET_OR_LIST"
}

# Function to generate output filename based on type and sanitized target
generate_output_filename() {
    local type=$1
    local target=$2
    local sanitized_target=$(sanitize_target "$target")
    if [ "$type" -eq 0 ]; then
        echo "vhost_fuzz_${sanitized_target}.csv"
    elif [ "$type" -eq 1 ]; then
        echo "dir_files_${sanitized_target}.csv"
    fi
}

# Check if the input is a file or single target
if [ -f "$TARGET_OR_LIST" ]; then
    # Target list file
    if [ "$TYPE" -eq 0 ]; then
        fuzz_vhost "$TARGET_OR_LIST"
    elif [ "$TYPE" -eq 1 ]; then
        fuzz_dir_files "$TARGET_OR_LIST"
    fi
elif [[ "$TARGET_OR_LIST" =~ ^http ]]; then
    # Single target URL
    if [ "$TYPE" -eq 0 ]; then
        echo "$TARGET_OR_LIST" > /tmp/single_target.txt
        fuzz_vhost "/tmp/single_target.txt"
    elif [ "$TYPE" -eq 1 ]; then
        echo "$TARGET_OR_LIST" > /tmp/single_target.txt
        fuzz_dir_files "/tmp/single_target.txt"
    fi
else
    echo -e "${RED}Target or target list file not found.${NC}"
    exit 1
fi

echo -e "${GREEN}Fuzzing complete. Results saved to $(generate_output_filename $TYPE $TARGET_OR_LIST).${NC}"
