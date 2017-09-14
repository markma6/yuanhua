import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'
import { ErrCodes } from '../constants/Errors'
import { store } from '../main'
import { updateError } from '../redux/actions/commonActions'


function stringifyError(err) {
  const plainObject = {}
  Object.getOwnPropertyNames(err).forEach((key) => {
    plainObject[key] = err[key]
  })
  return JSON.stringify(plainObject)
}

function timeoutError() {
  const error = new Error('timeout')
  error.errCode = ErrCodes.HOST_TIMEOUT
  error.source = 'fetch'
  console.log(stringifyError(error))
  return error
}

function commError(details) {
  const error = new Error(details)
  error.errCode = ErrCodes.HOST_COMM_ERROR
  error.source = 'fetch'
  console.log(stringifyError(error))
  return error
}

function msgError(details) {
  const error = new Error(details)
  error.errCode = ErrCodes.HOST_MESSAGE_ERROR
  error.source = 'fetch'
  console.log(stringifyError(error))
  return error
}

/* function fetchTimeout(ms, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(timeoutError())
    }, ms)
    promise.then(resolve, reject)
  })
} */
function fetchStatusHandler(response) {
  if (response.status === 200) {
    console.log('>> (FetchWithTimeout.js) fetchStatusHandler() - response.status === 200')
    return response
  }
  console.log('>> (FetchWithTimeout.js) fetchStatusHandler() - response.status !== 200')
  throw commError(response.statusText)
}
export function fetchWithTimeout(uri, data, ms) {
  let timeoutId = 0
  const fullUrl = uri
  return new Promise((resolve, reject) => {
    console.log('>> (FetchWithTimeout.js) Promise(fn()) - ***** START *****')
    timeoutId = setTimeout(() => {
      reject(timeoutError())
    }, ms)
    console.log(`>> (FetchWithTimeout.js) fetch(${fullUrl})`)
    fetch(fullUrl, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      mode: 'cors',
      body: JSON.stringify(data),
      timeout: ms,
    })
      .then((response) => {
        clearTimeout(timeoutId)
        return response
      })
      .then(fetchStatusHandler)
      .then(response => response.json())
      .then(resolve, reject)
      .catch((err) => {
        console.log(`>> (FetchWithTimeout.js) Catch1:${JSON.stringify(err)}`)
        clearTimeout(timeoutId)
        timeoutId = 0
        throw (err)
      })
    console.log('>> (FetchWithTimeout.js) Promise(fn()) - ***** END *****')
  })
    .catch((err) => {
      console.log(`>> (FetchWithTimeout.js) Catch2:${JSON.stringify(err)}`)
      if (timeoutId > 0) {
        clearTimeout(timeoutId)
      }
      if (err.message.indexOf('Failed to fetch') >= 0) { throw (commError(err)) } else {
        throw (msgError(err))
      }
    })
}

export function handleFetchErrors(err, onPage, errorPage) {
  console.log(`${onPage} catch:${JSON.stringify(err)} err.message:${err.message}`)
  console.log(`${onPage} catch err.details:${err.detail} errCode: ${err.errCode}`)
  if (err.errCode !== undefined) {
    store.dispatch(updateError(err.errCode, err.message, err.source))
  } else {
    store.dispatch(updateError(err.detail, err.message, err.source))
  }
  store.dispatch(push(errorPage))
}
