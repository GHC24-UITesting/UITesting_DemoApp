import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './apps/weather';
import { Landing } from './apps/landing';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/landing" element={<Landing />} /> 
      <Route path="/weather" element={<WeatherApp />} /> 
    </Routes>
  </Router>
);

export default AppRoutes;