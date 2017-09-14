import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'
import CoreLayout from '../layouts/CoreLayout';
import DevTools from '../redux/DevTools';


const Root = props => (
  <Provider store={props.store} >
    <div>
      <CoreLayout locale={'en'} />
      <DevTools />
    </div>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root
