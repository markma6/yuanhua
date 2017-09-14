import React from 'react';
//import { Form, Row, Col, Alert, FormGroup, Label, Input, Button } from 'reactstrap';
// import handleResetPassword from '../../modules/reset-password';

export default class ResetPassword extends React.Component {
  componentDidMount() {
    this.handleResetPassword();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleResetPassword() {
    // TODO: handle handle Reset Password
    console.log('TODO: handle Reset Password')
  }

  render() {
    return (
      <div className="ResetPassword">
        To reset your password, enter a new one below. You will be logged in
              with your new password.
        </div>
    );
  }
}

/* ResetPassword.defaultProps = {
 match: {},
 };

 ResetPassword.propTypes = {
 match: React.PropTypes.object,
 }; */
