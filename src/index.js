import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavbarContext from "./context/NavbarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavbarContext>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  </NavbarContext>
);

reportWebVitals();
