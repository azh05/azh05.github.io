import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home'
import Blog from './pages/Blog'
import Quarter5 from './pages/blogs/Quarter5'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    /* errorElement: <NotFound />*/
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/quarter5',
    element: <Quarter5 />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);