import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components';
import InventoryStationaryDevices from '../../types/InventoryStationaryDevices'
import InventoryRFUTable from './InventoryRFUTable'
import RFU from '../../types/RFU'

export interface InventoryRFUViewProps extends React.Props<InventoryRFUView> {
  inventoryRFUData: InventoryStationaryDevices,
  theme: Theme.ThemeProps;
}

export interface InventoryRFUViewState {

}

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const MainPartWrap = styled.div`
  height: calc(100% - 0rem - 0px);
  margin-top: 40px;
  width: calc(100% - 60px);
  margin: 30px auto 0 auto;
  // overflow: auto; 
`;

class InventoryRFUView extends React.Component<InventoryRFUViewProps, InventoryRFUViewState> {
  static defaultProps: Partial<InventoryRFUViewProps> = {
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: InventoryRFUViewProps) {

    super(props);

    this.state = {
    }

    this.lastId = undefined;
    this.pageSize = undefined;
  }

  render() {
    const data = this.props.inventoryRFUData.devices
      ?  this.props.inventoryRFUData.devices
        .map(summary => summary.device as RFU)
      : [];

    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <MainPartWrap>
            <InventoryRFUTable
              data={data}
            />
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default InventoryRFUView;
