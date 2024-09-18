import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getTasks } from './utils';
import Landing from './apps/landing';
import WeatherApp from './apps/weather';
import TaskPage from './apps/task-page';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Landing tasks={getTasks()}/>} /> 
      <Route path="/weather" element={<WeatherApp />} /> 
      <Route path="/taskpage" element={<TaskPage/>}/>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

export default AppRoutes;