import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import LoginPageContent from '../components/LoginPageContent/'
import { loginRequest } from '../state/Session/actions'

import styled from 'styled-components'
import theme from '../theme/ScTheme'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

interface LoginPageProps extends React.Props<LoginPage> {
  handleLogin: (username: string, password: string) => void,
  currentlySending: boolean,
  errorMsg: string,
};

class LoginPage extends Component<LoginPageProps, {}> {
  static propTypes = {
  }

  render() {
    return (
      <Wrapper>
        <LoginPageContent {...this.props} theme={theme.loginPage}/>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentlySending: state.session.isFetching,
    errorMsg: state.session.error ? state.session.error.message : '',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (username, password) => {dispatch(loginRequest(username, password))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
