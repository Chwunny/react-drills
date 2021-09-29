import React from 'react';
import { Link } from "react-router-dom"
import './App.css';
import Router from './Router';


// prettier-ignore
function App() {
  return (
      <div className="App">
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/details">Details</Link>
          </ul>
        </nav>

        { Router }
      </div>
  );
}

export default App;
