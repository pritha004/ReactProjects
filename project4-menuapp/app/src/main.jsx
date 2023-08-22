import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
  *{
     box-sizing: border-box;
     padding: 0;
     margin: 0;
  }

  body{
    background: #323334;
    color: white;
    min-height: 100vh;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);