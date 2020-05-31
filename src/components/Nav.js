import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

function NavBar() {
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
              <NavItem color='light'>
                <NavLink className='nav-link' to='/Leaderboard' exact activeClassName='active'>
                   Leader Board
                </NavLink>                
              </NavItem>
            </Nav>
          </Navbar>
        )
    }

export default NavBar