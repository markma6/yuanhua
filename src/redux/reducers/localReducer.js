import { LocalActions } from '../../constants/Constants'

export function updateLocalData (state = { locale: 'en' }, action) {
  const data = Object.assign({}, state)
  switch (action.type) {
    case LocalActions.SWITCH_LOCALE:
      data.locale = action.locale
      break
    default:
      return state
  }
  return data
}
export function foo () {}
