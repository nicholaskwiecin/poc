import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import PriceModelLibrary from './components/PriceModelLibrary';
import PriceModelWorkbench from './components/PriceModelWorkbench';
import PriceModelLanding from './components/PriceModelLanding';
import Login from './components/Login';
import NotImplemented from './components/NotImplemented';

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
        path: 'price-model-workbench/:id',
        element: <PriceModelWorkbench />,
      },
      {
        path:'not-implemented',
        element: <NotImplemented />,
      }
    ]
  },
], {
  basename: process.env.REACT_APP_RELATIVE_PATH ? process.env.REACT_APP_RELATIVE_PATH : '/',
})

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
