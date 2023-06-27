import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="802148784345-1dqn0lkijcir14qooc3ssf301jvrc2un.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);

reportWebVitals();
