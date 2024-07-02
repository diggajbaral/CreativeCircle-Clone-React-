import React from 'react'
import App from './App.jsx'

import '../src/SCSS/style.scss'
import '../src/SCSS/error.scss'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './Pages/Error.jsx'
import Service from './Pages/Service.jsx';
import Jobs from './Pages/Jobs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "jobs",
    element: <Jobs />,
  },
  {
    path: "services",
    element: <Service />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
