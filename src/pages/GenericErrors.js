/* react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const GenericErrors = props => (
  <div className='nk_page_container'>
    <div className='nk_page_content'>
      <div className='nk_center_container' id='errorInfo'>
        <div className='nk_ge_error_span' />
        <div className='nk_page_title_span'>
          Error: {props.error.description}
        </div>
      </div>
    </div>
  </div>
)

GenericErrors.defaultProps = {
  error: {
    description: 'default error',
  },
}
GenericErrors.propTypes = {
  error: PropTypes.object,
}
function mapStateToProps() {
  return { }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GenericErrors)
