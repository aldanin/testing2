import * as React from 'react'
import { connect } from 'react-redux'
import { setRedirectUrl } from '../state/Session/actions'
import { Router } from 'react-router'

export interface RequireAuthWrapperProps extends React.Props<RequireAuthWrapper> {
  currentURL: string,
  isLoggedIn: boolean,
  setRedirectUrl: (url: string) => void,
  router: Router
};

export class RequireAuthWrapper extends React.Component<RequireAuthWrapperProps, {}> {
  componentDidMount() {
    this.checkLogin()
  }

  componentDidUpdate(prevProps: RequireAuthWrapperProps) {
    this.checkLogin()
  }

  checkLogin = () => {
    const { currentURL, isLoggedIn } = this.props

    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      this.props.setRedirectUrl(currentURL)
      // then redirect (we use a React Router method)
      this.props.router.replace('/login')
    }
  }

  render() {
    return (
      this.props.isLoggedIn ? (
        React.Children.only(this.props.children)
      ) : null
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.session.isAuthenticated,
    currentURL: ownProps.location.pathname,
    router: ownProps.router,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRedirectUrl: (url) => {dispatch(setRedirectUrl(url))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuthWrapper)
