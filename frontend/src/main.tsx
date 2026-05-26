import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <BrowserRouter>

      <QueryClientProvider client={queryClient}>
<AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
</AuthProvider>
      </QueryClientProvider>

    </BrowserRouter>

  </React.StrictMode>
);