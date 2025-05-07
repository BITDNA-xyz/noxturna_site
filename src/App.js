import React from "react";
import "./App.css";
import logo from "./assets/d5ab8991-1bb7-4ae2-bfa8-11de93a58f74.png";

function App() {
  return (
    <div className="App">
      <div className="cat-wrapper">
        <img src={logo} alt="Noxturna Logo" />
      </div>
      <h1>Noxturna</h1>
      <p>カミングスーン</p>
    </div>
  );
}

export default App;
