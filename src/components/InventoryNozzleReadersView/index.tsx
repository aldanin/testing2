import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components';
import InventoryStationaryDevices from '../../types/InventoryStationaryDevices'
import InventoryNozzleReadersTable from './InventoryNozzleReadersTable'
import * as RosemanTypes from '../../types/RosemanTypes'
import NozzleReader from '../../types/NozzleReader'

export interface InventoryNozzleReadersViewProps extends React.Props<InventoryNozzleReadersView> {
  inventoryNozzleReadersData: InventoryStationaryDevices,
  onInventoryStationsTableRowSelected: (stationId: RosemanTypes.RosemanID, deviceType: string) => void
  theme: Theme.ThemeProps;
}

export interface InventoryNozzleReadersViewState {

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

class InventoryNozzleReadersView extends React.Component<InventoryNozzleReadersViewProps, InventoryNozzleReadersViewState> {
  static defaultProps: Partial<InventoryNozzleReadersViewProps> = {
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: InventoryNozzleReadersViewProps) {

    super(props);

    this.state = {
      currentTimeSlotType: 'Day',
      currentDisplayDatesSpanFactorInHours: 24,
      selectedTasks: []
    }

    this.lastId = undefined;
    this.pageSize = undefined;
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <MainPartWrap>
            <InventoryNozzleReadersTable
              data={this.props.inventoryNozzleReadersData.devices as NozzleReader[]}
            />
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default InventoryNozzleReadersView;