import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

ReactDOM.render(
 <App/>,
  document.getElementById('root')
);