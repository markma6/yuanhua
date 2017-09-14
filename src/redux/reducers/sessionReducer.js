import { SessionActions } from '../../constants/Constants'

export function updateSession (state = { isLoggingIn: false, isAuthenticated: false }, action) {
  const data = Object.assign({}, state)
  switch (action.type) {
    case SessionActions.LOGIN:
      data.isLoggingIn = action.value
      break
    default:
      return state
  }
  return data
}
export function foo () {}
