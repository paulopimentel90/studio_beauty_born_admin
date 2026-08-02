import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { queryClient } from "./lib/query-client";

import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>

      <QueryClientProvider client={queryClient}>

        <App />

        <Toaster
          position="top-right"
        />

      </QueryClientProvider>

    </BrowserRouter>
  </React.StrictMode>,
);