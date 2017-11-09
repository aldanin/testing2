import { connect } from 'react-redux'
import UserLinks from '../components/Header/UserLinks'
import { logoutRequest } from '../state/Session/actions'

const mapStateToProps = (state, ownProps) => {
  const { isAuthenticated } = state.session
  return {
    isLoggedIn: isAuthenticated as boolean,
    // userName: (state.user.data ? state.user.data.name : '') as string,
    userName: 'Change Me'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: (ev) => { dispatch(logoutRequest()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLinks)
