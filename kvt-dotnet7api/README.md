# DOT NET 7 API

Sample is used for Youtube Video: [**Secure your Config with Key Vault for .NET Core API**](https://youtu.be/hg6STxdHsAw)

For PPT [Click Here](https://www.slideshare.net/LakshmanS10/secure-your-config-with-key-vault-for-net-core-api)

## To create Api:
dotnet new webapi -n DOTNET7KVTApi

## Package need for Keyvault:
dotnet add package Azure.Security.KeyVault.Secrets
dotnet add package Azure.Identity
dotnet add package Azure.Extensions.AspNetCore.Configuration.Secrets --version 1.2.2

## Reference:

To use User-Secrets on Local like Keyvault use the below url,
https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-7.0&tabs=windows