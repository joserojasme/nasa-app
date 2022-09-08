import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NasaCuorisity from "./pages/nasaCuriosity";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NasaCuorisity />
  </React.StrictMode>
);
