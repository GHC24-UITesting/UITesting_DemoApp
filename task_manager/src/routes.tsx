import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './apps/landing';
import WeatherApp from './apps/weather';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/landing" element={<Landing />} /> 
      <Route path="/weather" element={<WeatherApp />} /> 
    </Routes>
  </Router>
);

export default AppRoutes;