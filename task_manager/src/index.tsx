import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes'; // Ensure correct import
import reportWebVitals from './reportWebVitals';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

const container = document.getElementById('root');
const root = createRoot(container!); // Create a root.

root.render(
  <React.StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <AppRoutes />
    </FluentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
