import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Juego from './components/voz/Juego.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
    
      {
        index: true,
        element: <Home />
      },
      {
        path: '/juego',
        element: <Juego />
      }
    ]
  }
])





function App() {
  return (
       
    <RouterProvider router={router} />
  );
}

export default App;