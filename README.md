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

### Web\app\providers\settings\appSettings.ts

Some configurable values in 'settings' object and Auth0 settings in `auth0` object
Make sure you fill `clientId` and `domain` from your Auth0 settings and add callback URL to your Auth0 settings under "Allowed Callback URLs".

```
    auth0: any = {
        "clientId": "{clientId}",
        "domain": "{domain}"
    }
```

## Single page app build

1. `npm install`
2. Build ng2 bundles
  * `npm run build:dev` - build app using dev config (all errors, no minification, "fast")
  * `npm run build` - build app using production config (minified, enabled prod mode and etc. Takes longer than `npm run build:dev`)
  * `npm run tsc` - run typescript compiler **try** https://www.npmjs.com/package/ntypescript
  * `npm run tsc:w` - run typscript compiler in watch mode **try** https://www.npmjs.com/package/ntypescript
  * `npm run watch` - build app using dev config in watch mode 
3. **Create something awesome!**
  

