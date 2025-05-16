import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import googleApisService from "./services/googleApis.js";

googleApisService().loadGoogleApis();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
