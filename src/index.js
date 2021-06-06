import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Habits from './components/habits'
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <Habits />
  </React.StrictMode>,
  document.getElementById('root')
);
