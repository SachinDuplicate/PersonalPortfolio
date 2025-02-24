import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.js';
import './styles/global.css';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
);