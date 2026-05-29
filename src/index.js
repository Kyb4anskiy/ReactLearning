import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { WishlistProvider } from "./contexts/WishlistContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <WishlistProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </WishlistProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>,
);
