import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { TrackerContext, Provider } from "./useContext/TrackerContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { TrackerContext };

root.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
