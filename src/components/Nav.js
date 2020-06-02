import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button, NavbarText } from 'reactstrap'
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
        return(
          <Navbar>
            <Nav>
              <NavItem>
                <NavLink className='nav-link' to='/' exact activeClassName='active'>
                   Home
                </NavLink>                
              </NavItem>
              <NavItem color='light'>
                <NavLink className='nav-link' to='/add' exact activeClassName='active'>
                   New Question
                </NavLink>                
              </NavItem>
              <NavItem className='mr-auto' color='light'>
                <NavLink className='nav-link' to='/leaderboard' exact activeClassName='active'>
                   Leader Board
                </NavLink>                
              </NavItem>
              <NavItem className='mr-auto' color='light'>              
              </NavItem>

            </Nav>
            <NavbarText>
                {authedUser !== null &&
                  <span>Hello, <img width='5%' src={users&&users[authedUser].avatarURL} alt={authedUser + "'s Avatar"} /><strong>{users[authedUser].name}</strong>
                  <Button size='sm' color='danger' onClick={()=>this.logout()}>Logout</Button>
                  </span>
                }              
            </NavbarText>
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