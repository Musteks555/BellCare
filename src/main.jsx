import { StrictMode } from "react";
// import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

// import store from "./redux/store.js";

import App from "./components/App/App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            {/* <Provider store={store}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
            {/* </Provider> */}
        </HelmetProvider>
    </StrictMode>
);
