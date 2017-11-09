import * as React from 'react'
import { Toolbar } from 'material-ui/Toolbar'
import * as Theme from './Theme'
// import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

const getStyle = (theme) => {
  return {
    background: theme.backgroundImage,
    color: theme.textColor,
  }
}
interface HeaderProps {
  theme?: Theme.ThemeProps,
  [key: string]: object,
}
const Header: React.SFC<HeaderProps> = ({children, theme, rest}) => {
  return (
    <ThemeProvider theme={theme}>
      <Toolbar style={getStyle(theme)} {...rest}>
        {children}
      </Toolbar>
    </ThemeProvider>
  )
}

export default Header
