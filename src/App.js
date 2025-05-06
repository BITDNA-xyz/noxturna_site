import React from "react";
import "./App.css";
import logo from "./assets/d5ab8991-1bb7-4ae2-bfa8-11de93a58f74.png";

function App() {
  return (
    <div className="text-center text-light d-flex flex-column align-items-center justify-content-center min-vh-100 pt-5 pb-5">
      <div className="cat-wrapper mb-3">
        <img
          src={logo}
          alt="Noxturna Logo"
          width="240"
          style={{ filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.5))" }}
        />
      </div>
      <h1>Noxturna</h1>
      <p>カミングスーン</p>
    </div>
  );
}

export default App;
