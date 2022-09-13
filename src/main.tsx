import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import "./utils/firebase";

defineCustomElements(window);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
