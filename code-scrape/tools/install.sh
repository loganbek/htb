#!/bin/bash

# Function to check if a tool is installed using multiple methods
check_tool() {
    local tool="$1"

    # Check using command -v
    if command -v "$tool" >/dev/null 2>&1; then
        echo "$tool is installed (found by command -v)."
        return
    fi

    # Check using which
    if which "$tool" >/dev/null 2>&1; then
        echo "$tool is installed (found by which)."
        return
    fi

    # Check using locate
    if locate "$tool" >/dev/null 2>&1; then
        echo "$tool is installed (found by locate)."
        return
    fi

    # If none of the methods found the tool
    echo "$tool is not installed."
}

#!/bin/bash

# apt setup
sudo apt update
sudo apt upgrade

# install and configure git
tool="git"

# Check if Git is installed
echo "Checking for $tool..."
if check_tool "$tool"; then
    echo "$tool is already installed."
else
    echo "$tool is not installed. Installing..."
    
    # Update the package list
    echo "Updating package list..."
    sudo apt update
    
    # Install Git
    echo "Installing Git..."
    sudo apt install -y git
    
    # Verify installation
    echo "Verifying Git installation..."
    git --version
    
    echo "$tool installation completed."
fi

# Set Git configuration settings
echo "Setting Git configuration..."
git config --global user.name "LB"
git config --global user.email "loganbek@gmail.com"
git config --global core.editor "vim"
git config --global color.ui auto

# Optionally, create or update a global .gitignore file
GITIGNORE_FILE="$HOME/.gitignore_global"
echo "Creating/updating global .gitignore file..."
echo "*.log" > "$GITIGNORE_FILE"
echo "node_modules/" >> "$GITIGNORE_FILE"
echo ".DS_Store" >> "$GITIGNORE_FILE"
git config --global core.excludesfile "$GITIGNORE_FILE"

echo "Git configuration completed."

# Define URLs and paths
EXTENSION_URL="https://addons.mozilla.org/firefox/downloads/file/4259396/single_file-1.0.24-an+fx.xpi"
DOWNLOAD_PATH="/tmp/single_file.xpi"
EXTENSION_DIR="/tmp/single_file_extension"
PROFILE_DIR=$(find ~/.mozilla/firefox/ -name "*.default-release" -type d | head -n 1)

# Download the SingleFile extension
echo "Downloading SingleFile Firefox extension..."
wget -O "$DOWNLOAD_PATH" "$EXTENSION_URL"

# Create a temporary directory for the extension files
mkdir -p "$EXTENSION_DIR"

# Extract the extension
echo "Extracting the extension..."
unzip -o "$DOWNLOAD_PATH" -d "$EXTENSION_DIR"

# Check if the profile directory was found
if [ -z "$PROFILE_DIR" ]; then
    echo "Firefox profile directory not found. Please ensure Firefox is set up properly."
    rm -rf "$DOWNLOAD_PATH" "$EXTENSION_DIR"
    exit 1
fi

# Install the extension by copying files to the profile directory
echo "Installing the extension..."
mkdir -p "$PROFILE_DIR/extensions"
cp -r "$EXTENSION_DIR"/* "$PROFILE_DIR/extensions/"

# TODO: install 1history extension

# Clean up temporary files
echo "Cleaning up..."
rm -rf "$DOWNLOAD_PATH" "$EXTENSION_DIR"

echo "Installation completed. Please restart Firefox for the changes to take effect."

# vim
tool="vim"

# Check if Vim is installed
echo "Checking for $tool..."
if check_tool "$tool"; then
    echo "$tool is already installed."
else
    echo "$tool is not installed. Installing..."
    
    # Update the package list
    echo "Updating package list..."
    sudo apt update
    
    # Install Vim
    echo "Installing Vim..."
    sudo apt install -y vim
    
    # Verify installation
    echo "Verifying Vim installation..."
    vim --version
    
    echo "$tool installation completed."
fi

# TODO install termux

# Recon-ng
sudo apt update
sudo apt install git python3-pip
git clone https://github.com/lanmaster53/recon-ng.git
cd recon-ng
pip3 install -r REQUIREMENTS
./recon-ng


# SpiderFoot
sudo apt update
sudo apt install git python3-pip
git clone https://github.com/smicallef/spiderfoot.git
cd spiderfoot
pip3 install -r requirements.txt
python3 sf.py -l 127.0.0.1:5001


# theHarvester
sudo apt update
sudo apt install theharvester
theharvester -d example.com -b all


# Photon
sudo apt update
sudo apt install git python3-pip
git clone https://github.com/s0md3v/Photon.git
cd Photon
pip3 install -r requirements.txt
python3 photon.py -u https://example.com -l 3


# Datasploit
sudo apt update
sudo apt install git python3-pip
git clone https://github.com/DataSploit/datasploit.git
cd datasploit
pip3 install -r requirements.txt
python3 datasploit.py -d example.com

# Open CTI

## Update your package list and install necessary dependencies
sudo apt update
sudo apt install -y git python3 python3-pip build-essential redis-server

## Install and set up MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

## Install and set up Neo4j
wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
echo 'deb https://debian.neo4j.com stable 4.3' | sudo tee /etc/apt/sources.list.d/neo4j.list
sudo apt update
sudo apt install -y neo4j=1:4.3.3
sudo systemctl start neo4j
sudo systemctl enable neo4j

## Set up RabbitMQ
echo "deb https://dl.bintray.com/rabbitmq-erlang/debian bionic erlang" | sudo tee /etc/apt/sources.list.d/bintray.rabbitmq.list
curl -fsSL https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
sudo apt update
sudo apt install -y rabbitmq-server
sudo systemctl start rabbitmq-server
sudo systemctl enable rabbitmq-server

## Install and set up Elasticsearch
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt update
sudo apt install -y elasticsearch
sudo systemctl start elasticsearch
sudo systemctl enable elasticsearch

## Clone the OpenCTI repository
git clone https://github.com/OpenCTI-Platform/opencti.git
cd opencti

## Install Python dependencies
pip3 install -r requirements.txt

## Set up environment variables
cp .env.example .env
nano .env # Edit .env file to configure your environment variables

## Run migrations and start the platform
python3 manage.py db upgrade
python3 manage.py runserver

# TODO: Install bash config

# TODO: Set env vars

# TODO: install metasploit framework

# TODO: install wp-scan

# TODO: install responder

# TODO: install linx + windows priv escalation scripts

# TODO install mongodb

# TODO install npm

tool="npm"

if check_tool "$tool";
then 
    echo "$tool is already installed."
else 
    echo "$tool is not installed.
    Installing..."

    sudo apt install npm -y

    echo "$tool installation completed."
fi

# jq
tool="jq"

# Check if jq  is installed
echo "Checking for $tool..."
if check_tool "$tool"; then
    echo "$tool is already installed."
else
    echo "$tool is not installed. Installing..."
    
    sudo apt install jq -y
    
    echo "$tool installation completed."
fi

tool="csvtojson"

# Check if csvtojson  is installed
echo "Checking for $tool..."
if check_tool "$tool"; then
    echo "$tool is already installed."
else
    echo "$tool is not installed. Installing..."
    
    sudo npm install -g csvtojson 
    
    echo "$tool installation completed."
fi