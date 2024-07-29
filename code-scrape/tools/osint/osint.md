# OSINT METHODOLOGY

## 1. **Gather Information**

| Organization        | Domain Information         | Archives       |
| ------------------- | -------------------------- | -------------- |
| Locations           | Public Domain Records      | Internal Leaks |
| Staff               | Domain Structure           | Breaches       |
| Contact Information | Cloud Storage              |                |
| Business Records    | Email Addresses            |                |
| Services            | Third-Parties              |                |
| Social Networks     | Compounded Social Networks |                |
| Technologies in Use |                            |                |

## 2. ** Browsers**

| Research                                          | Resource                                                                                                                                       |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [1History](https://github.com/1History/1History)  | [SingleFile](https://addons.mozilla.org/en-US/firefox/addon/single-file/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) |
| [HTML2Text](https://github.com/aaronsw/html2text) | [Wayback Machine](https://archive.org/web/)                                                                                                    |

## 3.**Direct Sources**

Xing Monster Indeed Glassdoor TrustPilot Reddit Quora StackOverflow LinkedIn AngelList

## 4. OSINT Frameworks

| Tool                | Main Features                                                             | Ease of Use      | Customization           | Data Sources                              |
| ------------------- | ------------------------------------------------------------------------- | ---------------- | ----------------------- | ----------------------------------------- |
| **OSINT Framework** | Collection of various OSINT tools                                         | Easy (Web-based) | Depends on chosen tools | Various categorized OSINT tools           |
| **Recon-ng**        | Modular framework for web reconnaissance                                  | Moderate         | Highly customizable     | Multiple modules for different data types |
| **SpiderFoot**      | Automation for gathering OSINT, supports many data sources, visualization | Moderate         | Moderate                | IPs, domains, emails, etc.                |

### Installation
```bash

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

```