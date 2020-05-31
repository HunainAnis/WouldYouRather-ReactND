import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Route path='/' exact component={Home} />
        </Router>
    </div>
  );
}

export default App;
