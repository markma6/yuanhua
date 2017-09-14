import { SessionActions } from '../../constants/Constants'

export default function updateSession(type, value) {
  console.log('updateSession')
  let action = null
  switch (type) {
    case SessionActions.LOGIN:
      action = {
        type: SessionActions.LOGIN,
        sessionInfo: value,
      }
      break
    case SessionActions.LOGOUT:
      action = {
        type: SessionActions.LOGOUT,
        sessionInfo: value,
      }
      break
    case SessionActions.START_SESSION:
      action = {
        type: SessionActions.START_SESSION,
        sessionInfo: value,
      }
      break
    case SessionActions.END_SESSION:
      action = {
        type: SessionActions.END_SESSION,
        sessionInfo: value,
      }
      break
    default:
      action = null
  }
  return action
}
