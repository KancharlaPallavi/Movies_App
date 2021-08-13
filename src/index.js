import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Home from './screens/home/Home.js';

ReactDOM.render(
    <Router>
      <Home/>
    </Router>,
  document.getElementById('root')
);

