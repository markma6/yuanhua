import React from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
// import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.handleSignup = this.handleSignup.bind(this)
    console.log('Signup constructed ...')
  }

  handleSignup() {
    // TODO: handle Signup
    console.log('TODO: handle Signup', this.signupForm)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup">
        signup
      </div>
    );
  }
}
