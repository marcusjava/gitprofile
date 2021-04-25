import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import App from "./App";
import { ToastContainer } from "react-toastify";

dayjs.extend(relativeTime);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
