import React from 'react';
// import { render } from 'react-snapshot'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import WithTracker from './Components/helpers/WithTracker'
import './css/app.css';
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
  <Router>
    <Route component={WithTracker(App, { /* Additional Attributes */})} />
  </Router>,
  document.getElementById('root')
)
