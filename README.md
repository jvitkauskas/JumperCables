# JumperCables

A simple, business agnostic solution to jump start your project.

# Configuration

## API

### appsettings.json

Make sure you fill `DOMAIN` and `CLIENT_ID` from your Auth0 settings.

```
{
  "Logging": {
    "IncludeScopes": false,
    "LogLevel": {
      "Default": "Debug",
      "System": "Information",
      "Microsoft": "Information"
    }
  },
  "Auth0": {
    "Domain": "{DOMAIN}",
    "ClientId": "{CLIENT_ID}"
  }
}
```

## Single Page Application

### auth0-variables.js

Make sure you fill `DOMAIN` and `CLIENT_ID` from your Auth0 settings and add callback URL to your Auth0 settings under "Allowed Callback URLs".

```
var AUTH0_CLIENT_ID='{CLIENT_ID}';
var AUTH0_DOMAIN='{DOMAIN}';
var AUTH0_CALLBACK_URL=location.href;
```
