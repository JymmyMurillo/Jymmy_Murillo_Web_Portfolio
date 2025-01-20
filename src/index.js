import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Crear un "root" para la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar la aplicación
root.render(<App />);