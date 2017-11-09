import { take, call, put, fork } from 'redux-saga/effects'
import { apiAuth, authorize, loginFlow, logoutFlow } from './saga'
import {
  LOGIN_REQUEST,
  loginSuccess,
  LOGIN_FAIL,
  loginFail,
  LOGOUT_REQUEST,
  logoutSuccess
} from './actions'
import * as AuthToken from '../../helpers/SessionToken'

// make sure the store is clean
beforeEach(() => {
  AuthToken.clearSessionData()
})

it('should do user authorization flow', () => {
  const generator = authorize('user', 'password');

  // Check that Saga asks to call the API
  expect(
    generator.next().value
  ).toEqual(
    call(apiAuth, 'user', 'password')
  )

  // Check dispatching of loginSuccess
  expect(
    generator.next({id_token: '123456'}).value
  ).toEqual(
    put(loginSuccess({id_token: '123456'}))
  )

  // Check setting of token
  let res = generator.next()
  expect (
    AuthToken.getSessionData()
  ).toEqual ('123456')

  // Check returning of payload
  res = generator.next()
  expect (res.value).toEqual({id_token: '123456'})
})

it('should put LOGIN_FAIL on authorization fail', () => {
  const generator = authorize('user', 'password');
  const error = new Error('blah')

  generator.next();

  expect(
    generator.throw(error).value
  ).toEqual(
    put(loginFail(error))
  )
})

it('should do user login flow and handle login fail', () => {
  const generator = loginFlow();

  // wait for login request
  expect(
    generator.next().value
  ).toEqual(
    take(LOGIN_REQUEST)
  )

  // fork to authorization
  const task = fork(authorize, 'Joseph', 'Heller')
  expect(
    generator.next({username: 'Joseph', password: 'Heller'}).value
  ).toEqual(
    task
  )

  AuthToken.setSessionData('hjgf_jghfj')

  // wait for logout or fail
  expect(
    generator.next(task).value
  ).toEqual(
    take([LOGOUT_REQUEST, LOGIN_FAIL])
  )

  // in case of login fail
  // back to waiting for login request
  expect(
    generator.next(LOGIN_FAIL).value
  ).toEqual(
    take(LOGIN_REQUEST)
  )

  // verify token cleared
  expect (
    AuthToken.getSessionData()
  ).toEqual (undefined)
})

it('should do user login flow and handle logout', () => {
  const generator = loginFlow();

  // wait for login request
  expect(
    generator.next().value
  ).toEqual(
    take(LOGIN_REQUEST)
  )

  // fork to authorization
  const task = fork(authorize, 'Joseph', 'Heller')
  expect(
    generator.next({username: 'Joseph', password: 'Heller'}).value
  ).toEqual(
    task
  )

  AuthToken.setSessionData('1234gjhgfjhgfj56')

  // wait for logout or fail
  expect(
    generator.next(task).value
  ).toEqual(
    take([LOGOUT_REQUEST, LOGIN_FAIL])
  )

  // in case of logout
  // back to waiting for login request
  expect(
    generator.next(LOGOUT_REQUEST).value
  ).toEqual(
    take(LOGIN_REQUEST)
  )

  // verify token cleared
  expect (
    AuthToken.getSessionData()
  ).toEqual (undefined)
})

it('should do user logout flow', () => {
  const generator = logoutFlow();
  AuthToken.setSessionData('1234567')

  expect(
    generator.next().value
  ).toEqual(
    take(LOGOUT_REQUEST)
  )

  generator.next()
  expect (
    AuthToken.getSessionData()
  ).toEqual (undefined)

  expect(
    generator.next().value
  ).toEqual(
    put(logoutSuccess())
  )

  generator.next()
  expect (
    AuthToken.getSessionData()
  ).toEqual (undefined)
})
