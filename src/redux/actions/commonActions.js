import { CommonActions } from '../../constants/Constants'

export function updateError(errorCode, msg, source, ...params) {
  console.log('updateError: code = ' + errorCode + ' msg = ' + msg)
  if (!errorCode) {
    return {
      type: CommonActions.ERROR,
      details: {
        errCode: errorCode,
        msg: msg,
        source: source,
        params: params,
      }
    }
  }
  else {
    return {
      type: CommonActions.ERROR,
      details: {},
    }
  }
}
