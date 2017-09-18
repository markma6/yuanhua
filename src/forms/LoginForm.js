/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>

const loginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <section className="main-content" >
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title-row">
          <h1>Log in</h1>
        </div>
        <Field name="username" type="text" component={renderField} label="Username"/>
        <Field name="email" type="email" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="Password"/>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
        <div>
        <Link className="form-forgotten-password" to="recover-password" >Forgotten password </Link>
        <Link className="form-create-an-account" to="reset-password/:token" >Create an account </Link>
        </div>
      </form>
    </section>
  )
}

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
  validate,
  warn
})(loginForm)
