# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

1. Follow the instructions in the [Microsoft AAD Authentication](https://learn.microsoft.com/en-us/azure/app-service/scenario-secure-app-authentication-app-service?tabs=workforce-configuration) to add app authentication to your web app running on Azure App Service.
2. Once you have obtained the client ID and tenant ID, replace the placeholders in the `auth-config.ts` file with your own values.
3. Obtain API keys for the following services:
   - Go to [AviationStack](http://api.aviationstack.com) and sign up to get your API key.
   - Go to [RapidAPI Real-Time Events Search](https://real-time-events-search.p.rapidapi.com) and sign up to get your API key.
   - Go to [WeatherStack](http://api.weatherstack.com) and sign up to get your API key.
   - Go to [NewsAPI](https://newsapi.org) and sign up to get your API key.
4. Replace the placeholders for the API keys in the codebase with your own values.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run e2e`

This function is responsible for executing the complete suite of E2E tests to ensure that the application behaves as expected from the user's perspective. It simulates real user interactions and verifies that all components of the application work together correctly.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
