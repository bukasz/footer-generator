import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeGoogleApis } from './services/googleApis';

initializeGoogleApis().catch(console.error);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
