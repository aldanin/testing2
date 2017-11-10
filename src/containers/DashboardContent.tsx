import * as React from 'react'
import { connect } from 'react-redux';
import AgentDashboardLayout from '../components/DashboardLayout'
import theme from '../theme/ScTheme'
import * as EmployeeSummary from '../types/EmployeeSummary'
import * as MockEmployeeSummary from '../mockData/EmployeeSummary'
import * as MockTasks from '../mockData/Tasks'

export interface AgentDashboardContentProps extends React.Props<AgentDashboardContent> {
  agentSummary?: EmployeeSummary.EmployeeSummary,
  onAbortTask: (taskId:string) => void;
}

class AgentDashboardContent extends React.Component<AgentDashboardContentProps, {}> {

  static defaultProps: Partial<AgentDashboardContentProps> = {}

  constructor(props: AgentDashboardContentProps) {

    super(props)

    this.state = {}
  }

  render() {
    return (
      <AgentDashboardLayout
        agentSummary={MockEmployeeSummary.getEmployeeSummary('3')}
        tasks={MockTasks.getTasksByAgentId('3').slice(0, 1000)}
        onAbortTask={(id) => console.log('abort', id)}
        theme={theme.dashboardPage}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AgentDashboardContent)
