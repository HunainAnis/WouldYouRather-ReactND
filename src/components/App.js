import React from 'react';
import NavBar from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'
import QuestionDetail from './Question';
import Login from './Login';
import CreateQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  
  render() {
    return (
      <>   
        <LoadingBar />
        <div className="App">
            <Router>
              <NavBar />
              <Route path='/' exact component={Home} />
              <Route path='/Questions/:id' component={QuestionDetail} />
              <Route path='/Leaderboard' component={Leaderboard} />
              <Route path='/Login' component={Login} />
              <Route path='/NewQuestion' component={CreateQuestion} />
            </Router>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({questions:state.questions})

export default connect(mapStateToProps)(App);
