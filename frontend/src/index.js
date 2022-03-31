import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css'
// import Login from './components/Login';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App/>
    {/* <Login /> */}
  </Router>,
  document.getElementById('root')
);

