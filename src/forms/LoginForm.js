/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

const loginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  const required = value => (value ? undefined : 'Required')
  const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)
  return (
    <section>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="form-log-in-with-email">
          <div className="form-white-background">
            <div className="form-title-row">
              <h1>Log in</h1>
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder=""
                  validate={email}
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <div>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder=""
                  validate={required}
                />
              </div>
            </div>
            <div className="form-row">
              <button type="submit" disabled={pristine || submitting}>
                Login
              </button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </button>
            </div>
          </div>
          <Link className="form-forgotten-password">Forgotten password &middot;</Link>
          <Link className="form-create-an-account">Create an account &rarr;</Link>
        </div>
      </form>

    </section>
  )
}

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
})(loginForm)
