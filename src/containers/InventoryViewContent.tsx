import * as React from 'react'
import { connect } from 'react-redux';
import InventoryView from '../components/InventoryView'
import theme from '../theme/ScTheme'
import * as EmployeeSummary from '../types/EmployeeSummary'
import * as MockEmployeeSummary from '../mockData/EmployeeSummary'
import * as MockTasks from '../mockData/Tasks'
import { InventoryReport } from '../types/InventoryReport'
import * as Mock from '../mockData/InventoryReport'



export interface DashboardContentProps extends React.Props<DashboardContent> {
  inventoryReport: InventoryReport,
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
      <InventoryView
        inventoryReport = {Mock.inventoryReport}
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
