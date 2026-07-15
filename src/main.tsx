import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { App } from "./App";
import { globalStyles } from "./theme/stitches.config";

globalStyles();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#181b23",
            color: "#e9edf5",
            border: "1px solid #262a35",
            fontFamily: "Inter, system-ui, sans-serif",
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);