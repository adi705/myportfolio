import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './home';
import Portfolio from './portfolio';
import Contact from './contact';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
    {
      path: '/',
      element: <Home/>,
      
    },
    
    {
      path:'/portfolio',
      element: <Portfolio/>,
    },

    {
      path: '/contact',
      element: <Contact/>,
    }
  
  
  
  ]}
    
]);


function App() {
  
  return <RouterProvider router={router}/>;
 
}

export default App


