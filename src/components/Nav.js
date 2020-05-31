import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
        return(
            <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/new' activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/new' activeClassName='active'>
                  Leader Board
                </NavLink>
              </li>
            </ul>
          </nav>
        )
    }

export default Nav