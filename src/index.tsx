import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import Error from './pages/error';
import Home from './pages/home';
import Logement from './pages/logement';
import Propos from './pages/propos';
import './styles/global.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>
  },
  {
    path: "logements/:logementId",
    element: <Layout><Logement /></Layout>
  },
  {
    path: "propos",
    element: <Layout><Propos /></Layout>
  },
  {
    path: "*",
    element: <Layout><Error /></Layout>
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
