import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Footer } from "./template/Footer";

function AppWithUI() {
  return (
    <StrictMode>
      <BrowserRouter>
        <App />
        <Footer title="Framer Motion x React Router 6" />
      </BrowserRouter>
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
