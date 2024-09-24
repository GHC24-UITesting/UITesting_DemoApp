import { Configuration, LogLevel } from "@azure/msal-browser";

if (!process.env.GHC_APP_CLIENT_ID || !process.env.GHC_APP_TENANT_ID || !process.env.GHC_APP_REDIRECT_URI) {
  throw new Error("Environment variables are not loaded correctly");
}

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.GHC_APP_CLIENT_ID || "", // Read from environment variables
    authority: `https://login.microsoftonline.com/${process.env.GHC_APP_TENANT_ID}`, // Read from environment variables
    redirectUri: process.env.GHC_APP_REDIRECT_URI || "http://localhost:3000", // Read from environment variables
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