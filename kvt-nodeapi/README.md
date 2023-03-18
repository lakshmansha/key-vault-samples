# Node.JS Express API

Sample is used for Youtube Video: [**Secure your Config with Key Vault for Node.JS**](https://youtu.be/BLyVeZFrZS4)

For PPT [Click Here](https://www.slideshare.net/LakshmanS10/secure-your-config-with-key-vault-for-net-core-api)

## To create Api:
```sh
npm init -y
npm install express
npm install dotenv
npm install --save-dev nodemon
```

## Package need for Keyvault:
```sh
npm install @azure/keyvault-secrets
npm install @azure/identity
```

### Add on .env
```.env
KEY_VAULT_NAME=youtubekvt
```

## Grant access to your key vault:
az keyvault set-policy --name <your-key-vault-name> --upn user@domain.com --secret-permissions delete get list set purge update