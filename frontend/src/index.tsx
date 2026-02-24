import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './defaults.css';
import App from './App'; // Berubah dari Shop ke App
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App /> 
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
