import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.scss";
import WishlistProvider from "./context/WishlistContext.jsx";
import BasketProvider from "./context/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <WishlistProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </WishlistProvider>
    </HelmetProvider>
  </React.StrictMode>
);
