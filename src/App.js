import React from "react";
import "./App.css";
import logo from "./assets/d5ab8991-1bb7-4ae2-bfa8-11de93a58f74.png";

function App() {
  return (
    <div className="page-center App">
      <div className="cat-wrapper mb-1">
        <img src={logo} alt="Noxturna Logo" width="240" />
      </div>
      <h1>Noxturna</h1>
      <p>カミングスーン</p>
    </div>
  );
}

export default App;
