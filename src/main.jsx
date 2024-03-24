import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router-dom";
import { router } from '../public/Routs/Routs';
import  { Toaster } from 'react-hot-toast';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
