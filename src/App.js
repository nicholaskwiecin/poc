import React from 'react';
import { Outlet } from "react-router-dom";
import './App.scss';
import Header from "./components/Header.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
      </footer>
    </div>
  );
}
export default App;
