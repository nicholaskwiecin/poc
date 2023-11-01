import React from 'react';
import { Outlet } from "react-router-dom";
import './App.scss';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default App;
