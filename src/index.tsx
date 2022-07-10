import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18next";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.Fragment>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Fragment>
);
reportWebVitals();
