import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers';
import DevTools from './DevTools';

export default function configureStore(initialState = {}) {
  // Build the middleware for intercepting and dispatching navigation actions
  const history = createHistory()
  const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk, routerMiddleware(history)),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
  );
  const store = createStore(rootReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer)
    })
  }
  return store;
}
