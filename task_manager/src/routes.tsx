import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getServices } from './utils';
import Landing from './apps/landing';
import WeatherApp from './apps/weather';
import TaskPage from './apps/task-page';
import FlightsApp from './apps/flights';
import NewsApp from './apps/news';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Landing tasks={getServices()}/>} /> 
      <Route path="/weather" element={<WeatherApp />} /> 
      <Route path="/flights" element={<FlightsApp />} /> 
      <Route path="/news" element={<NewsApp />} /> 
      <Route path="/taskpage" element={<TaskPage/>}/>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

export default AppRoutes;