import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Propos from './pages/Propos';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><Error /></Layout>,
  },
  {
    path:"logement",
    element: <Layout><Logement /></Layout>
  },
  {
    path:"propos",
    element: <Layout><Propos /></Layout>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
