import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import PriceModelLibrary from './components/PriceModelLibrary';
import CostElementMaintenance from './components/CostElementMaintenance';
import PriceModelWorkbench from './components/PriceModelWorkbench';
import PriceModelLanding from './components/PriceModelLanding';
import ReferenceDataAdmin from './components/ReferenceDataAdmin';
import Login from './components/Login';
import NotImplemented from './components/NotImplemented';
import LinearPricingModel from './components/LinearPricingModel';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'landing/:userType',
        element: <PriceModelLanding />,
      },
      {
        path: 'price-model-library',
        element: <PriceModelLibrary />,
      },
      {
        path: 'price-model-workbench',
        element: <PriceModelWorkbench />,
      },
      {
        path: 'reference-data-admin',
        element: <ReferenceDataAdmin />,
      },
      {
        path: 'cost-element-maintenance',
        element: <CostElementMaintenance />,
      },
      {
        path: 'price-model-workbench/:id',
        element: <PriceModelWorkbench />,
      },
      {
        path: 'linear-pricing-model',
        element: <LinearPricingModel />
      },
      {
        path:'not-implemented',
        element: <NotImplemented />,
      }
    ]
  },
], {
  basename: process.env.REACT_APP_RELATIVE_PATH ? process.env.REACT_APP_RELATIVE_PATH : '/',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
console.log("env " + process.env.NODE_ENV);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
