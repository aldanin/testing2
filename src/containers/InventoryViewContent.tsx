import * as React from 'react'
import { connect } from 'react-redux';
import InventoryView from '../components/InventoryView'
import theme from '../theme/ScTheme'
import * as EmployeeSummary from '../types/EmployeeSummary'
import * as MockEmployeeSummary from '../mockData/EmployeeSummary'
import * as MockTasks from '../mockData/Tasks'
import { InventoryMain } from '../types/InventoryData'
// import * as Mock from '../mockData/InventoryMain'
import * as RosemanTypes from '../types/RosemanTypes'
import * as Filters from '../types/Filters'
import * as actions from '../state/Inventory/actions'

export interface InventoryViewContentProps extends React.Props<InventoryViewContent> {
  inventoryMainData: InventoryMain,
  inventoryMainFilters: Filters.FiltersData,
  isFetching: boolean,
  isError: boolean,
  getInventoryMainData: (filters?: Filters.FiltersData) => void,
  getInventoryDeviceData: (stationId: RosemanTypes.RosemanID,
                           deviceName: string,
                           filters?: Filters.FiltersData) => void,
  employeeSummay?: EmployeeSummary.EmployeeSummary,
}

class InventoryViewContent extends React.Component<InventoryViewContentProps, {}> {

  static defaultProps: Partial<InventoryViewContentProps> = {}

  constructor(props: InventoryViewContentProps) {

    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.getInventoryMainData()
  }

  render() {
    return (
      <InventoryView
        inventoryMainData={this.props.inventoryMainData}
        onInventoryStationsTableRowSelected={(stationId: RosemanTypes.RosemanID,
                                              deviceName: string) =>
          this.props.getInventoryDeviceData(stationId, deviceName, null)}
        employeeSummay={MockEmployeeSummary.getEmployeeSummary('3')}
        tasks={MockTasks.getTasksByAgentId('3').slice(0, 1000)}
        theme={theme.dashboardPage}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const inventoryMainData = state[RosemanTypes.PRODUCT_TYPES.INVENTORY].get('inventoryMainData');

  const isFetching = state[RosemanTypes.PRODUCT_TYPES.INVENTORY].get('isFetching');
  const isError = state[RosemanTypes.PRODUCT_TYPES.INVENTORY].get('isError');
  const inventoryMainFilters = state[RosemanTypes.PRODUCT_TYPES.INVENTORY].get('inventoryMainFilters');

  const inventoryMainDataJS = inventoryMainData.toJS();

  return {
    inventoryMainData: inventoryMainDataJS,
    isFetching,
    isError,
    inventoryMainFilters,
    hasNextInventoryMainPage: inventoryMainDataJS.totalItems > inventoryMainDataJS.stations.length,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInventoryMainData:
      (filters?: Filters.FiltersData) => {
        dispatch(actions.inventoryMainRequest(filters))
      },
    getInventoryDeviceData: (stationId: RosemanTypes.RosemanID,
                             deviceName: string,
                             filters?: Filters.FiltersData) => {
      dispatch(actions.inventoryDeviceRequest(stationId, deviceName, filters))
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InventoryViewContent)
