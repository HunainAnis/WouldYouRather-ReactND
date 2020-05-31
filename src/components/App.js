import React from 'react';
import NavBar from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  
  render() {
    this.props.questions.length !== 0 && console.log(this.props)

  return (
    <>   
      <LoadingBar />
      <div className="App">
          <Router>
            <NavBar />
            <Route path='/' exact component={Home} />
          </Router>
      </div>
    </>
  );
}
}

const mapStateToProps = (state) => ({questions:state.questions})

export default connect(mapStateToProps)(App);
