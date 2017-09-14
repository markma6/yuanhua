import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Nav, NavItem } from 'reactstrap';

const PublicNavigation = () => (
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

export default PublicNavigation;
