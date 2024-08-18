import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './apps/landing'; // Correctly import the 'Landing' component

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/landing" element={<Landing />} /> 
    </Routes>
  </Router>
);

export default AppRoutes;