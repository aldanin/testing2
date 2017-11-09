import * as React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import Header from '../components/Header'
import Link from '../components/Header/Link'
import NotificationsDrawer from '../components/Header/NotificationsDrawer'
import UserLinksConnector from '../containers/UserLinksConnector'
import HomepageContent from '../containers/HomepageContent'
import { ToolbarGroup } from 'material-ui/Toolbar'
import ActionHome from 'material-ui/svg-icons/action/home'
import { Header as HeaderTheme } from '../theme/'
import styled from 'styled-components'

const StaticText = styled.span`
  color: ${(props) => props.theme.highlightColor};
`

interface HomeProps {
}

const renderHeader = () => {
  return (
    <Header theme={HeaderTheme}>
      <ToolbarGroup>
        <ActionHome color={HeaderTheme.highlightColor} size={'1em'}/>
        <StaticText>Home</StaticText>
        <Link
          label={'View Dashboard'}
          url="/dashboard"
        />
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

const Home: React.SFC<HomeProps> = () => {
  return (
    <DefaultLayout
      header={renderHeader()}
      main={<HomepageContent/>}
    />
  )
}

export default Home
