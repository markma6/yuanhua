import React from 'react';
import PropTypes from 'prop-types'
// import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import PublicNavigation from './PublicNavigation';
// import AuthenticatedNavigation from './AuthenticatedNavigation';
import { NavLink } from 'react-router-dom'

class AppNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.userName = this.userName.bind(this)
    this.state = {
      isOpen: false,
    };
  }

  getUser() {
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

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  userName() {
    const user = this.getUser()
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name.first} ${name.last}` : '';
  }
  render() {
    const renderNavigation = []
    if (this.props.authenticated) {
      renderNavigation.push(<NavLink activeClassName="selected" key="1" to="/about">Menu1</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="2" to="/about">Menu1</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="3" to="/about">Menu1</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="4" to="/about">Menu1</NavLink>)
    } else {
      renderNavigation.push(<NavLink activeClassName="selected" key="1" to="/about">Menu1</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="2" to="/about">Menu1</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="3" to="/about">Menu1</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="4" to="/about">Menu1</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="5" to="/login">Login</NavLink>)
      renderNavigation.push(<NavLink activeClassName="selected" key="6" to="/signup">SignUp</NavLink>)
    }
    // const isOpen = this.state.isOpen
    return (
      <header className="header-basic">
        <div className="header-limiter">
          <h1><NavLink to="/">Company<span>logo</span></NavLink></h1>
          <nav>
            {renderNavigation}
          </nav>
        </div>

      </header>
    );
  }
}

AppNavigation.defaultProps = {
  authenticated: false,
}
AppNavigation.propTypes = {
  authenticated: PropTypes.bool,
};

export default AppNavigation;
