import {
  TEXT_COLORS,
  BACKGROUND_COLORS,
} from './constants'
// import { addAlpha } from './helpers'
import Header from './Header'
import { dashboardPage } from './AgentDashboard'

const loginPage = {
  background: 'url(\'/images/login_background.png\') 0/cover',
  textColor: TEXT_COLORS.T01,
  hintTextColor: TEXT_COLORS.T15,
  errorTextColor: TEXT_COLORS.T12,
  buttonBg: BACKGROUND_COLORS.B21,
  buttonTextColor: TEXT_COLORS.T01,
  buttonDisabledBg: BACKGROUND_COLORS.B11,
  buttonDisabledTextColor: TEXT_COLORS.T15,
  underlineFocusColor: BACKGROUND_COLORS.B01,
}

// const pivotPointBase = {
//
// }

const scTheme = {
  loginPage,
  Header,
  dashboardPage,
}

export default scTheme
