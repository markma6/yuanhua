import { LocalActions } from '../../constants/Constants'

export const something = 'something'
export function updateLocalData (type, obj) {
  // console.log('updateLocalData ... ')
  switch (type) {
    case 'switchLocale':
      return {
        type: LocalActions.SWITCH_LOCALE,
        locale: obj,
      }
    default:
      return {}
  }
}
