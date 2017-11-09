import * as React from 'react'
import * as Theme from './Theme'
import FontIcon from 'material-ui/FontIcon';
import styled, { ThemeProvider } from 'styled-components';
import * as Task from '../../types/Task'
import * as TaskBasics from '../../types/TaskBasics'
import ControlStrip from '../AgentDashboardControlStrip'
import DateChooser from '../../appWidgets/DateChooser'
import * as moment from 'moment'

export interface AgentDashboardCalendarProps extends React.Props<AgentDashboardCalendar> {
  tasks: Task.Task[],
  theme: Theme.ThemeProps;
}

export interface AgentDashboardCalendarState {
  currentTimeSlotType: TaskBasics.TimeSlotType,
  currentDisplayDatesSpanFactorInHours: number,
  selectedTasks: string[];
}

interface GridProps {
  columnLength?: number,
  baseColor?: string,
  cellBGColor?: string,
  theme?: Theme.ThemeProps;
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

const DateChooserWrap = styled.div`
  height: 40px;
  text-align: center;
`;

const DateChooserWrapInner = styled.div`
  display: inline-block;
`;

const TableWrap = styled.div`
  height: calc(100% - 40px);
 
`;

const GridHeader = styled.div`
  height: 25px;
  width: 100%;
  display: grid;
  grid-template-columns: ${ (props: GridProps) => `repeat(${props.columnLength}, 1fr)`};
  grid-gap: 15px 30px;
  color: ${(props: GridProps) => props.baseColor}
`;

const GridHeaderCell = styled.div`
  text-align: center;
`;

const GridBody = styled.div`
  height: calc(100% - 25px);
  width: 100%;
  display: grid;
  grid-template-columns: ${ (props: GridProps) => `repeat(${props.columnLength}, 1fr)`};
  grid-gap: 15px 30px;
  color: ${(props: GridProps) => props.baseColor}
`;


const RowCell = styled.div`
  border: 1px solid rgb(239, 237, 235);
  background-color: ${(props: GridProps) => props.cellBGColor}
  padding: 1em;
  color: ${(props: GridProps) => props.baseColor || props.theme.grid.body.color};
`;

const RowTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(props: GridProps) => props.baseColor};
  text-align: right;
  font-size: 1.3rem;
`;

const BodyInnerCell = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  position: relative;
`;

const DatePart = styled.div`
  height: 1rem;
`;

const InfoPart = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% / 2 - 1.9rem / 2);
  font-size: 1.9rem;
`;

const CompletedPart = styled.div`
  
`;

const FuturePart = styled.div`
  color: ${(props: GridProps) => props.baseColor}; 
`;

const FuturePartValue = styled.span`
 
`;

class AgentDashboardCalendar extends React.Component<AgentDashboardCalendarProps, AgentDashboardCalendarState> {
  static defaultProps: Partial<AgentDashboardCalendarProps> = {
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: AgentDashboardCalendarProps) {

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

  getHeader = (isWeek: boolean) => {
    let JSX;
    if (isWeek) {
      JSX =
        (
          <GridHeader
            columnLength={8}
            baseColor={this.props.theme.grid.header.color}
          >
            <GridHeaderCell></GridHeaderCell>
            <GridHeaderCell>Sunday 09/07</GridHeaderCell>
            <GridHeaderCell>Monday 09/07</GridHeaderCell>
            <GridHeaderCell>Tuesday 09/07</GridHeaderCell>
            <GridHeaderCell>Wednesday 09/07</GridHeaderCell>
            <GridHeaderCell>Thursday 09/07</GridHeaderCell>
            <GridHeaderCell>Friday 09/07</GridHeaderCell>
            <GridHeaderCell>Saterday 09/07</GridHeaderCell>
          </GridHeader>
        )
    } else {
      JSX =
        (
          <GridHeader
            columnLength={2}
            baseColor={this.props.theme.grid.header.color}
          >
            <div>Wednesday 09/07</div>
          </GridHeader>
        )
    }

    return JSX;
  }

  getGridBodyInnerCell = (completed: string, future?: string, date?: string) => {
    const JSX = (
      <BodyInnerCell>
        <DatePart>{date}</DatePart>
        <InfoPart>
          <CompletedPart>{completed}</CompletedPart>
          <FuturePart baseColor={this.props.theme.grid.body.rowTitleColor}>
            <FontIcon
              className={'material-icons'}
              style={{'text-align': 'center', 'font-size': '1.9rem', color: 'inherit', top: '3px'}}
              title={'cloud'}
            >
              schedule
            </FontIcon>
            <FuturePartValue>{future}</FuturePartValue>
          </FuturePart>
        </InfoPart>
      </BodyInnerCell>

    )

    return JSX;
  }

  getBodyRowTitle = (timeSlotIndex: number) => {
    timeSlotIndex = timeSlotIndex * 6;

    const startTime =moment(0).subtract(moment().utcOffset(), 'minutes')
      .add(timeSlotIndex, 'hours').format('HH:mm');
    const endTime = moment(0).subtract(moment().utcOffset(), 'minutes')
      .add(timeSlotIndex + 6, 'hours').format('HH:mm');
    return `${startTime} - ${endTime}`;
  }

  getBody = () => {
    let JSX;
    const rows = Array.apply(null, Array(4)).map((ele, index) =>
      [
        <RowTitle baseColor={this.props.theme.grid.body.rowTitleColor}>
          <span>{this.getBodyRowTitle(index)}</span>
        </RowTitle>,
        <RowCell>{this.getGridBodyInnerCell('3/10', '10', '03.06')}</RowCell>,
        <RowCell>{this.getGridBodyInnerCell('3/10', '10', '03.06')}</RowCell>,
        <RowCell>{this.getGridBodyInnerCell('3/10', '10')}</RowCell>,
        <RowCell>{this.getGridBodyInnerCell('3/10', '10', '03.06')}</RowCell>,
        <RowCell>{this.getGridBodyInnerCell('3/10', '10', '03.06')}</RowCell>,
        <RowCell>{this.getGridBodyInnerCell('3/10', '10', '03.06')}</RowCell>,
        <RowCell>{this.getGridBodyInnerCell('3/10', '10', '03.06')}</RowCell>
      ]);
    JSX = (
      <GridBody
        columnLength={8}
        baseColor={this.props.theme.grid.body.color}
      >
        {rows}
      </GridBody>
    )
    return JSX;
  }

  render() {
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
            withViewSelector={true}
            theme={this.props.theme.controlStrip}
          />
          <MainPartWrap>
            <ThemeProvider theme={this.props.theme.dateChooser}>
              <DateChooserWrap>
                <DateChooserWrapInner>
                  <DateChooser
                    startDate={moment().valueOf()}
                    changeDate={() => {
                    }}
                    daySpan={7}
                    theme={this.props.theme.dateChooser}
                  />
                </DateChooserWrapInner>
              </DateChooserWrap>
            </ThemeProvider>
            <ThemeProvider theme={this.props.theme.grid}>
              <TableWrap>
                {this.getHeader(true)}
                {this.getBody()}
              </TableWrap>
            </ThemeProvider>
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default AgentDashboardCalendar;
