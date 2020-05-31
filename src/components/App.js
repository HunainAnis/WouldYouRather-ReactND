import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
    console.log(this.props)
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

function mapStateToProps({ users }) {
  return users
}

export default connect(mapStateToProps)(App);
