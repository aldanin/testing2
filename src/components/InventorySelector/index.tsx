import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components';
import { InventoryMain } from '../../types/InventoryData'
import ControlStrip from '../DashboardControlStrip'
import InventoryStationsView from '../InventoryStationsView'
import * as RosemanTypes from '../../types/RosemanTypes'
import TabGeneric from '../../appWidgets/TabGeneric'

export interface InventorySelectorProps extends React.Props<InventorySelector> {
  inventoryMainData: InventoryMain,
  onStationsSelected: (stationId: RosemanTypes.RosemanID, deviceType: string) => void,
  onDeviceSelected?: (deviceType: RosemanTypes.DeviceTypes) => void,
  theme: Theme.ThemeProps;
}

type viewName = 'stations' | 'nozzleReaders' | 'RFU' | 'CVS';

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
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: InventorySelectorProps) {

    super(props);

    this.state = {
      currentView: 'stations'
    }

    this.lastId = undefined;
    this.pageSize = undefined;
  }

  onStationSelected = (stationId: RosemanTypes.RosemanID) => {
    console.log('stationId', stationId)
  }

  getDisplaySelector = () => {
    const viewerModeTabs = [{
      title: 'Nozzle Readers',
      callback: () => this.props.onDeviceSelected(RosemanTypes.DeviceTypes.NozzleReader)
    }, {
      title: 'RFU',
      callback: () => this.props.onDeviceSelected(RosemanTypes.DeviceTypes.RFU)
    }, {
      title: 'CVS',
      callback: () => this.props.onDeviceSelected(RosemanTypes.DeviceTypes.CVS)
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

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <ControlStrip
            isSelectorsHidden={true}
            displaySelector={this.getDisplaySelector()}
            withViewSelector={false}
            theme={this.props.theme.controlStrip}
          />
          <MainPartWrap>
            <InventoryStationsView
              inventoryMainData={this.props.inventoryMainData}
              onStationSelected={this.onStationSelected}
              theme={this.props.theme}
            />
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default InventorySelector;
