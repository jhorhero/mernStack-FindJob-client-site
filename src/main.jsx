import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
