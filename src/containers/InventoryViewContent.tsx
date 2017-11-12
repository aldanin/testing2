import * as React from 'react'
import { connect } from 'react-redux';
import DashboardLayout from '../components/DashboardLayout'
import theme from '../theme/ScTheme'
import * as EmployeeSummary from '../types/EmployeeSummary'
import * as MockEmployeeSummary from '../mockData/EmployeeSummary'
import * as MockTasks from '../mockData/Tasks'

export interface DashboardContentProps extends React.Props<DashboardContent> {
  employeeSummay?: EmployeeSummary.EmployeeSummary,
  onAbortTask: (taskId:string) => void;
}

class DashboardContent extends React.Component<DashboardContentProps, {}> {

  static defaultProps: Partial<DashboardContentProps> = {}

  constructor(props: DashboardContentProps) {

    super(props)

    this.state = {}
  }

  render() {
    return (
      <DashboardLayout
        employeeSummay={MockEmployeeSummary.getEmployeeSummary('3')}
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
)(DashboardContent)
