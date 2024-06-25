import { App } from "./App";
import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
