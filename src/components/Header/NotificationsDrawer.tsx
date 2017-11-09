import * as React from 'react'

import { withTheme } from 'styled-components'

import * as Theme from './Theme'

import IconButton from 'material-ui/IconButton'
import Badge from 'material-ui/Badge'
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover'
import IconNotificationsNone from 'material-ui/svg-icons/social/notifications-none';

// import NotificationsList from '../../../containers/NotificationsList'

const NotificationsList = () => (
  <div>
    Notifications List
  </div>
)

export interface NotificationsDrawerProps {
  unreadCount: number,
  theme?: Theme.ThemeProps,
}

export interface NotificationsDrawerState {
  isDrawerOpen: boolean,
  anchorEl: HTMLElement,
}

class NotificationsDrawer extends React.Component<NotificationsDrawerProps, NotificationsDrawerState> {

  constructor(props: NotificationsDrawerProps) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      anchorEl: null,
    };
  }

  openDrawer = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      isDrawerOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      isDrawerOpen: false,
    });
  };

  render() {
    const { unreadCount, theme } = this.props

    const badgeStyles = {
      top: 6,
      right: 6,
      width: 18,
      height: 18,
      fontSize: 9,
      backgroundColor: theme.badgeBgColor,
      color: theme.badgeTextColor,
      display: 'initial',
    }
    if (unreadCount <= 0) {
      badgeStyles.display = 'none'
    }
    const badgeWrapStyle = {padding: 12}

    return (
      <span>
        <IconButton
          style={{
            padding: 0,
            color: theme.textColor,
          }}
          onTouchTap={this.openDrawer}
          iconStyle={badgeWrapStyle}
        >
          <Badge
            badgeStyle={badgeStyles}
            badgeContent={unreadCount}
          >
            <IconNotificationsNone
              color={theme.textColor}
              style={{padding: 0}}
            />
          </Badge>
        </IconButton>
        <Popover
          open={this.state.isDrawerOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <NotificationsList />
        </Popover>
      </span>
    )
  }
}

export default withTheme(NotificationsDrawer)
