import React from 'react';
//import { Form, Row, Col, Alert, FormGroup, Input, Button } from 'reactstrap';
// import handleRecoverPassword from '../../modules/recover-password';

export default class RecoverPassword extends React.Component {
  componentDidMount() {
    this.handleRecoverPassword();
  }

  handleRecoverPassword() {
    // TODO: handle recover password
    console.log('TODO: handle recover password')
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="RecoverPassword">
        Enter your email address below to receive a link to reset your password.
      </div>
    );
  }
}
