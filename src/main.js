import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './styles/global.scss';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
);