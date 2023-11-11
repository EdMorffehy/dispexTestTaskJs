import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import ReactDOM from "react-dom/client";

import instanceApi from "./config/instanse";
import App from "./root";

import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={instanceApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
