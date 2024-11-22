import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Import the default export from App.js
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* This will now render the AppLayout component */}
  </React.StrictMode>
);
