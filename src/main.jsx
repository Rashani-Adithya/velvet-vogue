import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

// Cart Context
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <AuthProvider>
                     <App />
                </AuthProvider>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);