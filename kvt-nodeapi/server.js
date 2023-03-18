const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const credential = new DefaultAzureCredential();

const keyVaultName = process.env["KEY_VAULT_NAME"];
if (!keyVaultName) throw new Error("KEY_VAULT_NAME is empty");
const url = "https://" + keyVaultName + ".vault.azure.net";

const client = new SecretClient(url, credential);

// Add your routes here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/example", (req, res) => {
  res.send("This is an example route.");
});

app.get("/keyvault", async (req, res) => {
  const secret = await client.getSecret("KVT-MESSAGE");
  res.send(`${secret.value}, ${process.env.ENV_MESSAGE}`);
});
