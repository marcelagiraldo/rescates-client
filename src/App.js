import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRoutesProject from './config/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AllRoutesProject.map((route,index) => (
          <Route
          key = {index}
          path = {route.path}
          element={
            <route.layout>
              <route.component />
            </route.layout>
          }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

