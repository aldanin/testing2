import * as React from 'react'
// import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import { Link as MuiLink } from 'react-router'
import * as Theme from './Theme'
import { withTheme } from 'styled-components'

const getStyles = (theme) => {
  return {
    color: theme.textColor,
    border: `1px solid ${theme.textColor}`,
    margin: '0 2rem',
    borderRadius: '3px',
  }
}

interface LinkProps {
  icon?: JSX.Element,
  label?: string,
  url?: string,
  theme?: Theme.ThemeProps,
}

const Link: React.SFC<LinkProps> = ({icon, label, url, theme}) => {
  return (
    <FlatButton
      label={label}
      icon={icon}
      containerElement={<MuiLink to={url} />}
      style={getStyles(theme)}
    />
  )
}

Link.defaultProps = {
  icon: null,
  label: '',
  url: '/',
  theme: Theme.defaultTheme,
}

export default withTheme(Link)
