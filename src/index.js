/*
 * This file wraps the app with Router and Site Context providers.
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// CUSTOM IMPORTS
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteContextProvider from './contexts/SiteData'

ReactDOM.render (
  <React.StrictMode>
    <SiteContextProvider>
      <Router>

        <App />

      </Router>
    </SiteContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
