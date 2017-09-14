import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configStore from './redux/configStore';
import Root from './config/Root';

const store = configStore({})

const rootEl = document.getElementById('root')
const render = (Component) => {
  // const Root = require('./config/Root')
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootEl,
  );
};
render(Root)

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp)
  });
}
