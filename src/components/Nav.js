import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class NavBar extends React.Component {

  logout() {
    return(
      this.props.dispatch(setAuthedUser(null))
    )
  }

  render() {
    const { authedUser, users } = this.props
    console.log(authedUser !== null && users && users.authedUser)
        return(
          <Navbar>
            <Nav>
              <NavItem>
                <NavLink className='nav-link' to='/' exact activeClassName='active'>
                   Home
                </NavLink>                
              </NavItem>
              <NavItem color='light'>
                <NavLink className='nav-link' to='/NewQuestion' exact activeClassName='active'>
                   New Question
                </NavLink>                
              </NavItem>
              <NavItem className='mr-auto' color='light'>
                <NavLink className='nav-link' to='/Leaderboard' exact activeClassName='active'>
                   Leader Board
                </NavLink>                
              </NavItem>
              <NavItem className='mr-auto' color='light'>              
                {authedUser !== null && 
                <span>Hello, <img width='5%' src={users&&users[authedUser].avatarURL} alt={authedUser + "'s Avatar"} /> {authedUser}
                <Button onClick={()=>this.logout()}>Logout</Button>
                </span>
                }
              </NavItem>
            </Nav>
          </Navbar>
        )
    }
  }

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(NavBar)