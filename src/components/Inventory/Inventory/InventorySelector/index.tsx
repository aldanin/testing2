import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components';
import { InventoryMain } from '../../../../types/InventoryData'
import InventoryStationaryDevices from '../../../../types/InventoryStationaryDevices'
import ControlStrip from '../../../DashboardControlStrip'
import InventoryStationsView from '../InventoryStationsView'
import InventoryNozzleReadersView from '../InventoryNozzleReadersView'
import InventoryRFUView from '../InventoryRFUView'
import InventoryCVSView from '../InventoryCVSView'
import * as RosemanTypes from '../../../../types/RosemanTypes'
import TabGeneric from '../../../../appWidgets/TabGeneric'
import { INVENTORY_DEVICES_DEFAULT } from '../../../../types/TypeDefaults'

export interface InventorySelectorProps extends React.Props<InventorySelector> {
  inventoryMainData: InventoryMain,
  inventoryNozzleReadersData?: InventoryStationaryDevices,
  inventoryRFUData?: InventoryStationaryDevices,
  inventoryCVSData?: InventoryStationaryDevices,
  onStationSelected: (stationId: RosemanTypes.RosemanID) => void,
  onDeviceTypeSelected?: (deviceType: RosemanTypes.DeviceTypes) => void,
  currentViewType?: string,
  theme: Theme.ThemeProps;
}

type viewName = 'Station' | 'NozzleReader' | 'RFU' | 'CVS';

export interface InventorySelectorState {
  currentView: viewName;
}

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const MainPartWrap = styled.div`
  height: calc(100% - 3.5rem - 30px);
  margin-top: 40px;
  width: calc(100% - 60px);
  margin: 30px auto 0 auto;
  // overflow: auto; 
`;

class InventorySelector extends React.Component<InventorySelectorProps, InventorySelectorState> {
  static defaultProps: Partial<InventorySelectorProps> = {
    inventoryNozzleReadersData: INVENTORY_DEVICES_DEFAULT,
    inventoryRFUData: INVENTORY_DEVICES_DEFAULT,
    inventoryCVSData: INVENTORY_DEVICES_DEFAULT,
    currentViewType: 'Station',
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: InventorySelectorProps) {

    super(props);

    this.state = {
      currentView: 'Station'
    }

    this.lastId = undefined;
    this.pageSize = undefined;
  }

  onStationSelected = (stationId: RosemanTypes.RosemanID) => {
    this.setState({
      currentView: 'NozzleReader'
    });

    this.props.onStationSelected(stationId);
  }

  getDisplaySelector = () => {
    const viewerModeTabs = [{
      title: 'Nozzle Readers',
      callback: () => this.props.onDeviceTypeSelected(RosemanTypes.DeviceTypes.NozzleReader)
    }, {
      title: 'RFU',
      callback: () => this.props.onDeviceTypeSelected(RosemanTypes.DeviceTypes.RFU)
    }, {
      title: 'CVS',
      callback: () => this.props.onDeviceTypeSelected(RosemanTypes.DeviceTypes.CVS)
    }];

    return (
      <TabGeneric
        tabs={viewerModeTabs}
        initialSelectedIndex={0}
        theme={this.props.theme.controlStrip.selectorTabs}
        isDisabled={false}
      />
    )
  }

  getDisplay = () => {
    console.log('this.props.currentViewType',this.props.currentViewType)
    let view;
    switch (this.props.currentViewType) {
      case 'Station':
        view = (
          <InventoryStationsView
            inventoryMainData={this.props.inventoryMainData}
            onStationSelected={(stationId: RosemanTypes.RosemanID, deviceType: string) => this.onStationSelected(stationId)}
            theme={this.props.theme}
          />
        )
        break;
      case 'NozzleReader':
        view = (
          <InventoryNozzleReadersView
            inventoryNozzleReadersData={this.props.inventoryNozzleReadersData}
            theme={this.props.theme}
          />
        );
        break;
      case 'RFU':
        view = (
          <InventoryRFUView
            inventoryRFUData={this.props.inventoryRFUData}
            theme={this.props.theme}
          />
        );
        break;
      case 'CVS':
        view = (
          <InventoryCVSView
            inventoryCVSData={this.props.inventoryCVSData}
            theme={this.props.theme}
          />
        );
        break;
    }

    return view;
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <ControlStrip
            isSelectorsHidden={this.props.currentViewType === 'Station'}
            displaySelector={this.getDisplaySelector()}
            withViewSelector={false}
            theme={this.props.theme.controlStrip}
          />
          <MainPartWrap>
            {/*<InventoryStationsView*/}
            {/*inventoryMainData={this.props.inventoryMainData}*/}
            {/*onStationSelected={this.onStationSelected}*/}
            {/*theme={this.props.theme}*/}
            {/*/>*/}
            {this.getDisplay()}
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default InventorySelector;
