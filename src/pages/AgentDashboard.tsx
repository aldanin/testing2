import * as React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import Header from '../components/Header'
import Link from '../components/Header/Link'
import NotificationsDrawer from '../components/Header/NotificationsDrawer'
import UserLinksConnector from '../containers/UserLinksConnector'
import AgentDashboardContent from '../containers/AgentDashboardContent'
import { ToolbarGroup } from 'material-ui/Toolbar'
import ActionHome from 'material-ui/svg-icons/action/home'
import { Header as HeaderTheme } from '../theme/'
import styled from 'styled-components'

const Label = styled.span`
  color: ${(props) => props.theme.highlightColor};
`

interface AgentDashboardProps {
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
        <Label>Dashboard</Label>
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

const AgentDashboard: React.SFC<AgentDashboardProps> = () => {
  return (
    <DefaultLayout
      header={renderHeader()}
      main={<AgentDashboardContent/>}
    />
  )
}

export default AgentDashboard
