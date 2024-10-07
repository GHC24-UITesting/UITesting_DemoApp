import { Configuration, LogLevel } from "@azure/msal-browser";

const clientId = ""; // replace with your own app registration client ID
const tenantId = ""; // replace with your own app registration tenant ID

export const msalConfig: Configuration = {
  auth: {
    clientId, 
    authority: `https://login.microsoftonline.com/${tenantId}`, 
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
