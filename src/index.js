import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalDataProvider } from "./components/GlobalDataProvider";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalDataProvider>
        <App />
      </GlobalDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
