import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/services/reducers/index.js";
const store = createStore(rootReducer);
// console.log("store", store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
