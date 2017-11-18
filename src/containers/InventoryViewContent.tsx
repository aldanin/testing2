import * as React from 'react'
import { connect } from 'react-redux';
import InventoryView from '../components/InventoryView'
import theme from '../theme/ScTheme'
import * as EmployeeSummary from '../types/EmployeeSummary'
import * as MockEmployeeSummary from '../mockData/EmployeeSummary'
import * as MockTasks from '../mockData/Tasks'
import { InventoryMain } from '../types/InventoryData'
import InventoryStationaryDevices from '../types/InventoryStationaryDevices'
// import * as Mock from '../mockData/InventoryMain'
import * as RosemanTypes from '../types/RosemanTypes'
import * as Filters from '../types/Filters'
import * as actions from '../state/Inventory/actions'

export interface InventoryViewContentProps extends React.Props<InventoryViewContent> {
  inventoryMainData: InventoryMain,
  inventoryNozzleReadersData: InventoryStationaryDevices,
  inventoryRFUData: InventoryStationaryDevices,
  inventoryCVSData: InventoryStationaryDevices,
  inventoryMainFilters: Filters.FiltersData,
  isFetching: boolean,
  isError: boolean,
  getInventoryMainData: (filters?: Filters.FiltersData) => void,
  getInventoryDeviceData: (stationId: RosemanTypes.RosemanID,
                           deviceType: string,
                           filters?: Filters.FiltersData) => void,
  currentStationId: RosemanTypes.RosemanID,
  currentViewType: string,
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

  getInventoryDeviceData = (deviceType: RosemanTypes.DeviceTypes) => {
    this.props.getInventoryDeviceData(this.props.currentStationId, deviceType);
  }

  render() {
    return (
      <InventoryView
        inventoryMainData={this.props.inventoryMainData}
        inventoryNozzleReadersData={this.props.inventoryNozzleReadersData}
        inventoryRFUData={this.props.inventoryRFUData}
        inventoryCVSData={this.props.inventoryCVSData}
        onStationSelected={(stationId: RosemanTypes.RosemanID) =>
          this.props.getInventoryDeviceData(stationId, 'NozzleReader', null)}
        onDeviceTypeSelected=
          {(deviceType: RosemanTypes.DeviceTypes) => this.getInventoryDeviceData(deviceType)}
        currentViewType={this.props.currentViewType}
        employeeSummay={MockEmployeeSummary.getEmployeeSummary('3')}
        tasks={MockTasks.getTasksByAgentId('3').slice(0, 1000)}
        theme={theme.dashboardPage}
      />
    )
  }
}

const digStationData = (state) => {
  const currentStationId = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN].get('currentStationId');
  const currentStation = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN]
    .getIn(['inventoryMainData', 'stations'])
    .find(station => station.get('stationId') === currentStationId)

  return currentStation;
}


const mapStateToProps = (state, ownProps) => {
  const inventoryMainDataImm = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN].get('inventoryMainData');
  const currentStationId = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN].get('currentStationId');
  const currentStation = digStationData(state)

  const inventoryNozzleReadersDataImm = currentStation
    ? currentStation.getIn(['devices', 'NozzleReader'])
    : null;
  const inventoryRFUDataImm = currentStation
    ? currentStation.getIn(['devices', 'RFU'])
    : null;
  const inventoryCVSDataImm = currentStation
    ? currentStation.getIn(['devices', 'CVS'])
    : null;

  const currentViewType  = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN].get('currentViewType');
  const isFetching = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN].get('isFetching');
  const isError = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN].get('isError');
  const inventoryMainFilters = state[RosemanTypes.PRODUCT_TYPES.INVENTORY_MAIN].get('inventoryMainFilters');

  const inventoryMainData = inventoryMainDataImm.toJS();
  const inventoryNozzleReadersData = inventoryNozzleReadersDataImm ? inventoryNozzleReadersDataImm.toJS() : [];
  const inventoryRFUData = inventoryRFUDataImm ? inventoryRFUDataImm.toJS() : [];
  const inventoryCVSData = inventoryCVSDataImm ? inventoryCVSDataImm.toJS() : [];

  return {
    currentViewType,
    currentStationId,
    inventoryMainData,
    inventoryNozzleReadersData,
    inventoryRFUData,
    inventoryCVSData,
    isFetching,
    isError,
    inventoryMainFilters,
    hasNextInventoryMainPage: inventoryMainData.totalItems > inventoryMainData.stations.length,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInventoryMainData:
      (filters?: Filters.FiltersData) => {
        dispatch(actions.inventoryMainRequest(filters))
      },
    getInventoryDeviceData: (stationId: RosemanTypes.RosemanID,
                             deviceType: string,
                             filters?: Filters.FiltersData) => {
      dispatch(actions.inventoryDeviceRequest(stationId, deviceType, filters))
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InventoryViewContent)
