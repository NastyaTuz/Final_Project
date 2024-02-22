import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import ScrollToTop from "./ScrollToTop";
import { PersistGate } from "redux-persist/integration/react";

export const ROOT_URL = "http://localhost:3333";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
