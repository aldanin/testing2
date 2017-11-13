import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components';
import {InventoryReport} from '../../types/InventoryReport'
import * as TaskBasics from '../../types/TaskBasics'
import ControlStrip from '../DashboardControlStrip'
import TestTable from './table_test'
import * as Task from '../../types/Task'

export interface InventoryStationsViewProps extends React.Props<InventoryStationsView> {
  inventoryReport: InventoryReport,
  onAbortTask: (taskId: string) => void;
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
  height: calc(100% - 3.5rem - 30px);
  margin-top: 40px;
  width: calc(100% - 60px);
  margin: 30px auto 0 auto;
  overflow: auto; 
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

  onTaskCheck = (taskId: string, isChecked: boolean) => {
    console.log(taskId, isChecked)
    if (isChecked !== undefined && isChecked !== null) {
      const index = this.state.selectedTasks.indexOf(taskId);

      if (isChecked) {
        if (index === -1) {
          this.state.selectedTasks.push(taskId);
        }
      } else {
        if (index !== -1) {
          this.state.selectedTasks.splice(index, 1);
        }
      }

      this.setState({selectedTasks: this.state.selectedTasks.slice(0)})
    }
  }

  onListHeaderClick = (fieldName: string) => {
    // TODO: implement
  }

  render() {
    //const tasks = this.props.tasks.slice(0, 50);

    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <ControlStrip
            onDisplaySelected=
              {(timeSlot: Task.TimeSlotType,
                currentDisplayDatesSpanFactorInHours: number) => this.setState({
                currentTimeSlotType: timeSlot,
                currentDisplayDatesSpanFactorInHours: currentDisplayDatesSpanFactorInHours
              })}
            onServiceSelected={(service: Task.ServiceTypeFilter) => {
            }}
            withViewSelector={false}
            theme={this.props.theme.controlStrip}
          />
          <MainPartWrap>
            <TestTable
              data={this.props.inventoryReport.stations}
            />
            {/*<TasksList*/}
              {/*data={tasks}*/}
              {/*theme={this.props.theme.tasksList}*/}
              {/*checkedRows={this.state.selectedTasks}*/}
              {/*onTaskCheck={this.onTaskCheck}*/}
              {/*onAbortTask={this.props.onAbortTask}*/}
              {/*headerStatus={{startTimestamp: 'desc'}}*/}
              {/*onHeaderClick={() => {*/}
                {/*// TODO: implement*/}
              {/*}}*/}
            {/*/>*/}
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default InventoryStationsView;