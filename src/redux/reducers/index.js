import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { updateLocalData } from './localReducer'
import { updateSession } from './sessionReducer'

const rootReducer = combineReducers({
  sessionInfo: updateSession,
  localData: updateLocalData,
  router: routerReducer,
  form: formReducer,
})

export default rootReducer
