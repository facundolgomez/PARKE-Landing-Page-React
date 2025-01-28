import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthenticationContextProvider } from "./components/services/AuthenticationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationContextProvider>
            <App />
        </AuthenticationContextProvider>
  </StrictMode>
);
