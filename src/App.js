import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import './App.scss';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const App = () => {
  // hide header and footer for login page
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/') {
      document.getElementById('global-header').style.display = "none";
      document.getElementById('global-footer').style.display = "none";
    } else {
      document.getElementById('global-header').style.display = "flex";
      document.getElementById('global-footer').style.display = "flex";
    }
  }, [location]);

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default App;
