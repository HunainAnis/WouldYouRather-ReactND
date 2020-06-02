import React from 'react';
import NavBar from './Nav';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'
import QuestionDetail from './Question';
import Login from './Login';
import CreateQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NoMatchPage from './404page';



class App extends React.Component {
  
  componentDidMount() {
    const { dispatch } = this.props
    
    dispatch(handleInitialData())
  }
  
  ProtectedRoute = ({ component:Component, ...rest }) => (
      <Route { ...rest } render={(props)=>(
        this.props.authedUser !== null ?
        <Component {...props} />:
        <Redirect to={{
          pathname:'/login',
          state: { from: props.location }
        }} />
      )} />
  )
  render() {
    const { ProtectedRoute } = this
    return (
      <>   
        <LoadingBar />
        <div className="App">
            <Router>
              <NavBar />
              <Switch>
                {/* <Route path='/' exact component={Home} /> */}
                {/* <Route path='/question/:id' component={QuestionDetail} /> */}
                {/* <Route path='/leaderboard' component={Leaderboard} /> */}
                <Route path='/login' component={Login} />
                {/* <Route path='/add' component={CreateQuestion} /> */}
                <ProtectedRoute path='/' exact component={Home} />
                <ProtectedRoute path='/question/:id' component={QuestionDetail} />
                <ProtectedRoute path='/leaderboard' component={Leaderboard} />
                <ProtectedRoute path='/add' component={CreateQuestion} />
                <ProtectedRoute component={NoMatchPage} />
              </Switch>
            </Router>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
