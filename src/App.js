import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Navigate } from "react-router-dom";
import React from 'react';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        < Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
