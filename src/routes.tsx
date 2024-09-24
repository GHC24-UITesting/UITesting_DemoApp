import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { getServices } from "./utils";
import Landing from "./apps/landing";
import WeatherApp from "./apps/weather";
import TaskPage from "./apps/task-page";
import FlightsApp from "./apps/flights";
import NewsApp from "./apps/news";
import TodoList from "./apps/todo";
import EventsApp from "./apps/events";
import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { loginRequest } from "./auth-config";

const AppRoutes = () => (
  <MsalAuthenticationTemplate
    interactionType={InteractionType.Redirect}
    authenticationRequest={loginRequest}
  >
    <Router>
      <Routes>
        <Route path="/home" element={<Landing tasks={getServices()} />} />
        <Route path="/weather" element={<WeatherApp parent="page" />} />
        <Route path="/flights" element={<FlightsApp />} />
        <Route path="/news" element={<NewsApp parent="page" />} />
        <Route path="/taskpage" element={<TaskPage />} />
        <Route path="/todo" element={<TodoList parent="page" />} />
        <Route path="/events" element={<EventsApp parent="page" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  </MsalAuthenticationTemplate>
);

export default AppRoutes;
