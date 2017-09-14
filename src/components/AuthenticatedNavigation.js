import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Nav, NavItem } from 'reactstrap'

/* const handleLogout = () => {
  // ToDo: logout
  console.log('logout.')
}
const getUser = () => {
  // TODO: get user
  return {
    profile: {
      name: {
        first: 'Mark',
        last: 'Ma',
      },
    },
  }
}
const userName = () => {
  const user = getUser()
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
}
 */
const AuthenticatedNavigation = () => (
  <div>
    <nav>
      <NavLink to="/signup" activeClassName="active">Home</NavLink>
      <NavLink to="/signup" activeClassName="active">Blog</NavLink>
      <NavLink to="/signup" activeClassName="active">Pricing</NavLink>
    </nav>
    <ul>
      <li><NavLink to="/signup" activeClassName="active">Login</NavLink></li>
      <li><NavLink to="/signup" activeClassName="active">Sign up</NavLink></li>
    </ul>
  </div>
)

export default AuthenticatedNavigation;
