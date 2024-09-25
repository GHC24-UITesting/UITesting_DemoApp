import { Configuration, LogLevel } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "1c319167-e0aa-4d38-8ead-4920e602f6f7", 
    authority: "https://login.microsoftonline.com/6e24e638-465f-4896-9463-7a99f8a9191d", 
    redirectUri: "http://localhost:3000", 
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false,
    },
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
};