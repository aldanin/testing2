import * as React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import Header from '../components/Header'
import Link from '../components/Header/Link'
import NotificationsDrawer from '../components/Header/NotificationsDrawer'
import UserLinksConnector from '../containers/UserLinksConnector'
import AgentControlContent from '../containers/AgentControlContent'
import { ToolbarGroup } from 'material-ui/Toolbar'
import ActionHome from 'material-ui/svg-icons/action/home'
import { Header as HeaderTheme } from '../theme/'
import styled from 'styled-components'

const Label = styled.span`
  color: ${(props) => props.theme.highlightColor};
  margin: 1em;
`

interface AgentControlProps {
}

const renderHeader = () => {
  return (
    <Header theme={HeaderTheme}>
      <ToolbarGroup firstChild={true}>
        <Link
          label={''}
          icon={<ActionHome style={{color: 'inherit'}}/>}
          url="/"
        />
        <Label>Ben Jones Google</Label>
        <Label>BenJ@gmail.com</Label>
        <span>Last extraction 13 hrs ago</span>
      </ToolbarGroup>
      <ToolbarGroup lastChild={true}>
        <NotificationsDrawer
          unreadCount={5}
        />
        <UserLinksConnector/>
      </ToolbarGroup>
    </Header>
  )
}

const AgentControl: React.SFC<AgentControlProps> = () => {
  return (
    <DefaultLayout
      header={renderHeader()}
      main={<AgentControlContent/>}
    />
  )
}

export default AgentControl
