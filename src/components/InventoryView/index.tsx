import * as React from 'react'
import * as Theme from './Theme'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import * as EmployeeSummary from '../../types/EmployeeSummary'
import StatusCard from '../../appWidgets/StatusCard'
import DashboardSummaryView from '../DashboardSummaryView'
import InventorySelector from '../InventorySelector'
import { InventoryMain } from '../../types/InventoryData'
import DashboardCalendarView from '../DashboardCalendarView'
import * as Task from '../../types/Task'
import * as TaskBasics from '../../types/TaskBasics'
import * as moment from 'moment'
import TabstripComponent from '../../appWidgets/TabstripComponent'
import * as RosemanTypes from '../../types/RosemanTypes'


export interface InventoryViewProps extends React.Props<InventoryView> {
  inventoryMainData: InventoryMain,
  onInventoryStationsTableRowSelected: (stationId: RosemanTypes.RosemanID,
                                        deviceType: string) => void,
  employeeSummay: EmployeeSummary.EmployeeSummary
  tasks: Task.Task[],

  theme?: Theme.ThemeProps;
}

export interface InventoryViewState {
  selectedTabIndex: number,
  currentDisplayDatesSpanFactor: number,
}

const HEADER_HEIGHT = '0px';
const HEADER_INNER_TOTAL_MARGINS = '250px';
const TAB_HEIGHT = '50px';

const InventoryViewViewer = styled.div`
  overflow: hidden;
  display: flex;

  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const InventoryViewHeader = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT};
  justify-content: space-between;
  background: ${props => props.theme.headerBackground};
  border-bottom: solid 1px ${props => props.theme.commonBorderColor};
  display: none;
`;

const StatusCardContainer = styled.div`
  display: flex;
  width: calc(100% - ${HEADER_INNER_TOTAL_MARGINS});
  margin: auto;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const InventoryViewLayout = styled.div`
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT});
  background-color: ${props => props.theme.layoutBGColor};
  position: relative;
`;
const ViewWrap = styled.div`
  width: 100%;
  height: calc(100% - 30px);
`;

const InventoryViewInner = styled.div`
  position: absolute;
  left: 15px;
  right: 15px;
  top: 15px;
  bottom: 15px;
`;

const TimeSlotContainer = styled.div`
  width: calc(100% - ${HEADER_INNER_TOTAL_MARGINS});
  margin: auto;
  height: auto;
  font-size: 1.7rem;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const TimeSlotCaption = styled.span`
  color: #3bc8e0;
  padding-right: 10px;
`;

const TimeSlotValue = styled.span`
  color: white;
`;

class InventoryView extends React.Component<InventoryViewProps, InventoryViewState> {
  static defaultProps: Partial<InventoryViewProps> = {
    employeeSummay: EmployeeSummary.DEFAULT_AGENT_SUMMARY,
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: InventoryViewProps) {

    super(props);

    this.state = {
      selectedTabIndex: 1,
      currentDisplayDatesSpanFactor: 24
    }

    this.lastId = undefined;
    this.pageSize = undefined;
  }

  //
  // Get a formatted representation for a given time slot to be shown in this page's header:
  //
  formatTimeSlot = (timeSlot: TaskBasics.TimeSlotData) => {
    const rangeStart = moment(timeSlot.rangeStart).format('HH:mm');
    const rangeEnd = moment(timeSlot.rangeEnd).format('HH:mm');
    return `${rangeStart} - ${rangeEnd}`;
  }

  //
  // Get the tabs for this page's tabstrip:
  //
  getTabs = () => {
    const viewerModeTabs = [{
      title: 'Dashboard',
      callback: () => {
        this.setState({selectedTabIndex: 0})
      },
    }, {
      title: 'Inventory',
      callback: () => {
        this.setState({selectedTabIndex: 1})
      },
    }, {
      title: 'Reports',
      callback: () => {
        this.setState({selectedTabIndex: 2})
      },
    }];

    return viewerModeTabs;
  }

  //
  // Get the views to be passed to the tabstrip, which will toggle between them:
  //
  getViews = () => {
    return [
      (
        <ViewWrap key={1}>
          <DashboardSummaryView
            tasks={this.props.tasks}
            theme={this.props.theme.summaryView}
          />
        </ViewWrap>
      ),
      <ViewWrap key={2}>
        <InventorySelector
          inventoryMainData={this.props.inventoryMainData}
          onStationsSelected={this.props.onInventoryStationsTableRowSelected}
          theme={this.props.theme.tasksView}
        />
      </ViewWrap>,
      (
        <ViewWrap key={3}>
          <DashboardCalendarView
            tasks={this.props.tasks}
            theme={this.props.theme.calendarView}
          />

        </ViewWrap>
      ),
    ]
  }
  //
  // Render a single status card for this page's header:
  //
  renderStatusCard = (field: string, value: number, caption: string) => {
    const colorFieldName = value ? field : 'default';

    return (
      <StatusCard
        color={this.props.theme.taskStatusColors[colorFieldName].color}
        borderTopColor={this.props.theme.taskStatusColors[colorFieldName].borderTopColor}
        value={value}
        caption={caption}
        theme={this.props.theme.statusCard}
      />
    );
  }

  //
  // Render status cards in this page's top (header):
  //
  renderStatusCards = (employeeSummay: EmployeeSummary.EmployeeSummary) => {
    return (
      <StatusCardContainer>
        {this.renderStatusCard('aborted', employeeSummay.aborted, 'Aborted')}
        {this.renderStatusCard('failed', employeeSummay.failed, 'Failed')}
        {this.renderStatusCard('partial', employeeSummay.partial, 'Partial')}
        {this.renderStatusCard('completed', employeeSummay.completed, 'Completed')}
        {this.renderStatusCard('running', employeeSummay.running, 'Running')}
        {this.renderStatusCard('pending', employeeSummay.pending, 'Pending')}
      </StatusCardContainer>
    )
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <InventoryViewViewer>
          <InventoryViewHeader>
            <TimeSlotContainer>
              <TimeSlotCaption>Current time slot:</TimeSlotCaption>
              <TimeSlotValue>{this.formatTimeSlot(this.props.employeeSummay.timeSlot)}</TimeSlotValue>
            </TimeSlotContainer>
            {this.renderStatusCards(this.props.employeeSummay)}
          </InventoryViewHeader>
          <InventoryViewLayout>
            <InventoryViewInner>
              <TabstripComponent
                tabs={this.getTabs()}
                views={this.getViews()}
                selectedTabIndex={1}
                tabHeight={TAB_HEIGHT}
                theme={this.props.theme.mainTabstrip}
              />
            </InventoryViewInner>
          </InventoryViewLayout>
        </InventoryViewViewer>
      </ThemeProvider>
    )
  }
}

export default InventoryView;
