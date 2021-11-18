import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="container mx-auto px-32 py-4"> */}
    <App />
    {/* </div> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
