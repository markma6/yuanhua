import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { updateLocalData } from '../redux/actions/localActions'
// import '../assets/scss/main.scss'
import AppNavigation from '../components/AppNavigation';
import Index from '../pages/Index'
//import Login from '../pages/Login';
import LoginForm from '../forms/LoginForm'
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
// import Signup from '../pages/Signup';
import Public from '../pages/Public';
import SignUp from '../pages/Signup'

class CoreLayout extends React.Component {
  constructor(props) {
    super(props)
    this.currentLanguage = props.locale
    this.switchLanguage = this.switchLanguage.bind(this)
    console.log('CoreLayout constructed ...')
  }

  switchLanguage() {

  }

  render() {
    return (
      <Router>
        <div>
          <AppNavigation authenticated={false} />
          <Switch>
            <Route exact name="index" path="/" component={Index} />
            <Public path="/signup" component={SignUp} />
            <Public path="/login" component={LoginForm} />
            <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
            <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
          </Switch>
        </div>
      </Router>
    )
  }
}

CoreLayout.propTypes = {
  locale: PropTypes.string.isRequired,
}


/* function mapStateToProps(state) {
  return {
    locale: state.localData.locale,
    errorDetails: state.errorDetails,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLocalData }, dispatch)
} */

export default CoreLayout // connect(mapStateToProps, mapDispatchToProps)(CoreLayout)

