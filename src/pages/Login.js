import React from 'react';
import LoginForm from '../forms/LoginForm'

export default class Login extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <LoginForm onSubmit={this.submit} />
    )
  }
}
