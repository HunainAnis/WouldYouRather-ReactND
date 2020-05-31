import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';
import { _getUsers } from '../utils/_DATA';

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
    _getUsers()
    .then(users=>console.log(users))
  }
  
  render() {
  return (
    <div className="App">
        <Router>
          <Nav />
          <Route path='/' exact component={Home} />
        </Router>
    </div>
  );
}
}

export default connect()(App);
