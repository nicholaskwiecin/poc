import logo from './logo.svg';
import './App.css';
import { Link, Outlet,Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      < Outlet />
    </div>
  );
}
export default App;
