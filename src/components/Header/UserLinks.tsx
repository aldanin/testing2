import * as React from 'react'

import { withTheme } from 'styled-components'
import * as Theme from './Theme'

import FlatButton from 'material-ui/FlatButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import IconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import IconAccountCircle from 'material-ui/svg-icons/action/account-circle'

export interface UserLinksProps extends React.Props<UserLinks> {
  isLoggedIn: boolean,
  userName: string,
  doLogout: (ev: MouseEvent | TouchEvent) => void,
  theme?: Theme.ThemeProps,
}
export interface UserLinksState {
  isUserMenuOpen: boolean,
  anchorEl: HTMLElement | null,
}

class UserLinks extends React.Component<UserLinksProps, UserLinksState> {

  constructor (props: UserLinksProps) {
    super(props)

    this.state = {
      isUserMenuOpen: false,
      anchorEl: null,
    }
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      isUserMenuOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      isUserMenuOpen: false,
    });
  };

  renderAvatar = (userName: string) => {
    return (
      <span>
        <IconAccountCircle
          style={{
            verticalAlign: 'middle',
            marginRight: '6px',
            color: 'inherit',
          }}
        />
        {userName}
      </span>
    )
  }

  render() {
    const { isUserMenuOpen, anchorEl} = this.state
    const { theme } = this.props

    if (this.props.isLoggedIn) {
      const {doLogout, userName} = this.props
      return (
        <span >
          <FlatButton
            style={{color: theme.textColor}}
            onTouchTap={this.handleTouchTap}
            label={this.renderAvatar(userName)}
            icon={<IconArrowDropDown/>}
            labelPosition="before"
          />
          <Popover
            open={isUserMenuOpen}
            anchorEl={anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem
                primaryText="Sign Out"
                onTouchTap={doLogout}
              />
            </Menu>
          </Popover>
        </span>
      )
    } else {
      return (
        <FlatButton
          href="/login"
          label="Login"
        />
      )
    }
  }
}

export default withTheme(UserLinks)
