import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import AgentControlFrame from '../components/AgentControlFrame/index';
import AgentControlRowLayout from '../components/AgentControlRowLayout/index';
import { AgentControlTheme } from '../theme/AgentControl';
import AgentRunList from '../components/AgentRunList/index';
import { getAgentRunsByAgentId } from '../mockData/AgentRuns';
import AddAgentWindow from '../components/AddAgentWindow/index';

const TOGGLE_VIEW_TRANSITION_TIME = 0.5;

const ViewFrame = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
`;

const StatusScreen = styled.div`
  width: 40rem;
  height: 100%;
  background-color: ${prop => prop.theme.agentStatusBgColor};
  padding: 1rem;
  box-sizing: border-box;
  text-align: right;
  transition: width ${TOGGLE_VIEW_TRANSITION_TIME}s;
  
   &.close {
    width: 5rem;
  }
`;

const MainScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${prop => prop.theme.bgColor};
  overflow: hidden;
  overflow-y: auto;
`;

const ControlPanelView = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${prop => prop.theme.bgColor};
`;

const CollapseIcon = styled.span`
  font-size: 1.7rem;
  cursor: pointer;
  color: ${prop => prop.theme.collapseIconColor};
`;

const Row = styled.div`
 background-color: ${prop => prop.theme.rowEvenBgColor};
 
 &.odd {
   background-color: ${prop => prop.theme.rowOddBgColor};
 }
`;

const DEMO_AGENT_RUN = getAgentRunsByAgentId('3');
const DEMO_AVAILABLE_SUB_SERVICES = ['', '', '', '', '', '', ''];
const DEMO_TASKS = ['', '', '', '', ''];

export interface AgentControlContentProps {

}

export interface AgentControlContentState {
  isStatusCollapse: boolean;
  isNewTaskWindowOpen: boolean;
  isEditTaskWindowOpen: boolean;
}

class AgentControlContent extends React.Component<AgentControlContentProps, AgentControlContentState> {
  static defaultProps: Partial<AgentControlContentProps> = {

  }

  constructor (props: AgentControlContentProps) {
    super(props);

    this.state = {
      isStatusCollapse: true,
      isNewTaskWindowOpen: true,
      isEditTaskWindowOpen: false,
    }
  }

  toggleView = (isCollapse: boolean) => {
    this.setState({isStatusCollapse: isCollapse});
    if (isCollapse) {
      window.setTimeout(() => {this.setState({isStatusCollapse: isCollapse})}, TOGGLE_VIEW_TRANSITION_TIME * 500)
    } else {
      window.setTimeout(() => {this.setState({isStatusCollapse: isCollapse})}, TOGGLE_VIEW_TRANSITION_TIME * 250)
    }
  }

  onNewTaskWindowOpen = () => {
    this.setState({
      isNewTaskWindowOpen: true,
    })
  }

  onNewTaskWindowClose = () => {
    this.setState({
      isNewTaskWindowOpen: false,
    })
  }

  renderAgentRun() {
    return (
      <AgentRunList
        data={DEMO_AGENT_RUN}
        onTaskWindowOpen={this.onNewTaskWindowOpen}
      />

    )
  }

  renderAvailableSubServices() {
    return (
      <div>
        {DEMO_AVAILABLE_SUB_SERVICES.map((run, idx) => {
          return <Row key={idx} className={idx % 2 === 1 ? 'odd' : ''}><AgentControlRowLayout/></Row>
        })}
      </div>
    )
  }

  renderTasks() {
    return (
      <div>
        {DEMO_TASKS.map((run, idx) => {
          return <Row key={idx} className={idx % 2 === 1 ? 'odd' : ''}><AgentControlRowLayout/></Row>
        })}
      </div>
    )
  }

  render() {
    const statusScreenIcon = !this.state.isStatusCollapse ? 'chevron_right' : 'chevron_left';
    return (
      <ThemeProvider theme={AgentControlTheme}>
        <ViewFrame>
          {this.state.isNewTaskWindowOpen ? (
            <AddAgentWindow
              onClose={this.onNewTaskWindowClose}
              title="New Agent Run"
            />) : null}
          <StatusScreen className={this.state.isStatusCollapse ? 'close' : ''}>
            <CollapseIcon
              className="material-icons"
              onClick={() => this.toggleView(!this.state.isStatusCollapse)}
            >{statusScreenIcon}
            </CollapseIcon>
          </StatusScreen>
          <MainScreen>
            <ControlPanelView>
              <AgentControlFrame
                title={'Agent Run'}
                component={this.renderAgentRun()}
              />
              <AgentControlFrame
                height={'30rem'}
                title={'Available Sub Services'}
                component={this.renderAvailableSubServices()}
              />
              <AgentControlFrame
                title={'Tasks'}
                component={this.renderTasks()}
              />
            </ControlPanelView>
          </MainScreen>
        </ViewFrame>
      </ThemeProvider>
    )
  }
}

export default AgentControlContent;
