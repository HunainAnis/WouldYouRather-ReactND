import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
    console.log(this.props)
  }
  
  render() {
  return (
    <div className="App">
        <LoadingBar />
        <Router>
          <Nav />
          <Route path='/' exact component={Home} />
        </Router>
    </div>
  );
}
}

function mapStateToProps( { questions }) {
  return {
      questions
  }
}

export default connect(mapStateToProps)(App);
