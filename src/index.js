import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PriceModelLibrary from './components/PriceModelLibrary';
import PriceModelWorkbench from './components/PriceModelWorkbench';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PriceModelLanding from './components/PriceModelLanding';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Navigate to="/landing" replace={true} />,
  },
  {
    path: 'landing',
    element: <PriceModelLanding />,
  },
  {
    path: 'price-model-library',
    element: <PriceModelLibrary />,
  },
  {
    path: 'price-model-workbench',
    element: <PriceModelWorkbench />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
console.log("RELOAD")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
