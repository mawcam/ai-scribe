import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { PatientsProvider } from "./contexts/PatientsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PatientsProvider>
      <App />
    </PatientsProvider>
  </StrictMode>
);
