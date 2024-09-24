import React from "react";
import { createRoot } from "react-dom/client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import AppRoutes from "./routes";
import { msalConfig } from "./auth-config";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

document.addEventListener("DOMContentLoaded", () => {
  const msalInstance = new PublicClientApplication(msalConfig);

  const container = document.getElementById("root");

  const root = createRoot(container!); // Create a root.

  if (container) {
    root.render(
      <React.StrictMode>
        <MsalProvider instance={msalInstance}>
          <FluentProvider theme={teamsLightTheme}>
            <AppRoutes />
          </FluentProvider>
        </MsalProvider>
      </React.StrictMode>
    );
  } else {
    console.error("Root container not found");
  }
});