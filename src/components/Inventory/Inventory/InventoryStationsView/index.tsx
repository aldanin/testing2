import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components';
import {InventoryMain} from '../../../../types/InventoryData'
import  * as TaskBasics from '../../../../types/TaskBasics'
import InventoryStationsTable from './InventoryStationsTable'
import * as RosemanTypes from '../../../../types/RosemanTypes'

export interface InventoryStationsViewProps extends React.Props<InventoryStationsView> {
  inventoryMainData: InventoryMain,
  onStationSelected: (stationId: RosemanTypes.RosemanID, deviceType: string) => void
  theme: Theme.ThemeProps;
}

export interface InventoryStationsViewState {
  currentTimeSlotType: TaskBasics.TimeSlotType,
  currentDisplayDatesSpanFactorInHours: number,
  selectedTasks: string[];
}

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const MainPartWrap = styled.div`
  height: 100%;
  margin-top: 40px;
  width: calc(100% - 60px);
  margin: 30px auto 0 auto;
  // overflow: auto; 
`;

class InventoryStationsView extends React.Component<InventoryStationsViewProps, InventoryStationsViewState> {
  static defaultProps: Partial<InventoryStationsViewProps> = {
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: InventoryStationsViewProps) {

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
            <InventoryStationsTable
              data={this.props.inventoryMainData.stations}
              onRowSelected={this.props.onStationSelected}
            />
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default InventoryStationsView;
