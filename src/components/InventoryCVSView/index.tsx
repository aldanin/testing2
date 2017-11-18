import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components';
import InventoryStationaryDevices from '../../types/InventoryStationaryDevices'
import InventoryCVSTable from './InventoryCVSTable'
import CVS from '../../types/CVS'

export interface InventoryCVSViewProps extends React.Props<InventoryCVSView> {
  inventoryCVSData: InventoryStationaryDevices,
  theme: Theme.ThemeProps;
}

export interface InventoryCVSViewState {

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

class InventoryCVSView extends React.Component<InventoryCVSViewProps, InventoryCVSViewState> {
  static defaultProps: Partial<InventoryCVSViewProps> = {
    theme: Theme.DEFAULT_THEME,
  };

  constructor(props: InventoryCVSViewProps) {

    super(props);

    this.state = {
      currentTimeSlotType: 'Day',
      currentDisplayDatesSpanFactorInHours: 24,
      selectedTasks: []
    }

  }

  render() {
    const data = this.props.inventoryCVSData.devices
      ?  this.props.inventoryCVSData.devices
        .map(summary => summary.device as CVS)
      : [];

    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <MainPartWrap>
            <InventoryCVSTable
              data={data}
            />
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default InventoryCVSView;
