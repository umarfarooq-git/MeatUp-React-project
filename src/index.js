import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Favouritecontextprovider } from "./store/favourite-context";

ReactDOM.render(
  <Favouritecontextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Favouritecontextprovider>,
  document.getElementById("root")
);
