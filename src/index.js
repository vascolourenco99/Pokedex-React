import React from "react";
import Reactdom from "react-dom/client";
import App from './App'

const root =  Reactdom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);