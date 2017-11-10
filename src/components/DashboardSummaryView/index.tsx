import * as React from 'react'
import * as Theme from './Theme'
import styled, { ThemeProvider } from 'styled-components'
import GraphicTimeline from '../../appWidgets/GraphicTimeline'
import RoundedCard from '../../appWidgets/RoundedCard'
import * as Task from '../../types/Task'
import * as moment from 'moment'
import DashChart from '../../appWidgets/TasksBarChart'
import PinChart from '../../appWidgets/TasksPinsChart'
import ControlStrip from '../DashboardControlStrip'

export interface AgentDashboardSummaryProps extends React.Props<AgentDashboardSummary> {
  tasks: Task.Task[],
  theme: Theme.ThemeProps;
}

export interface AgentDashboardSummaryState {
  currentTimeSlotType: Task.TimeSlotType,
  currentDisplayDatesSpanFactorInHours: number,
}

const HEADER_INNER_TOTAL_MARGINS = 250;

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const MainPartWrap = styled.div`
  height: calc(100% - 50px);
  margin-top: 50px;
  width: 100%;
`;

const GraphicTimelineContainer = styled.div`
  height: 100%;
  padding: 0 20px;
  width: 100%;
`;

const CardWrap = styled.div`
  display: inline-block;
  margin: auto;
`;

const RoundedCardsContainer = styled.div`
  display: flex;
  width: calc(100% - ${HEADER_INNER_TOTAL_MARGINS}px);
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

class AgentDashboardSummary extends React.Component<AgentDashboardSummaryProps, AgentDashboardSummaryState> {
  static defaultProps: Partial<AgentDashboardSummaryProps> = {
    theme: Theme.DEFAULT_THEME,
  };

  private lastId: number;
  private pageSize: number;

  constructor(props: AgentDashboardSummaryProps) {

    super(props);

    this.state = {
      currentTimeSlotType: 'Month',
      currentDisplayDatesSpanFactorInHours: 24
    }

    this.lastId = undefined;
    this.pageSize = undefined;
  }

  getTaskStatusAggregation = (statusType: Task.TaskStatus | Task.CompleteStatus) => {
    let aggregation: number;

    const reduce = (statusType, completeStatus = null) =>
      this.props.tasks.reduce(
        (accumulator, task) => {
          if (completeStatus) {
            if (task.complete === completeStatus) {
              return accumulator + 1;
            } else {
              return accumulator;
            }
          } else if (task.status === statusType) {
            return accumulator + 1;
          } else {
            return accumulator
          }
        },
        0);

    switch (statusType) {
      case 'Aborted':
        aggregation = reduce('Aborted');
        break;
      case 'Failed':
        aggregation = reduce('Complete', 'Failed')
        break;
      case 'Partial':
        aggregation = reduce('Complete', 'Partial')
        break;
      case 'Success':
        aggregation = reduce('Complete', 'Success')
        break;
      case 'Scheduled':
        aggregation = reduce('Scheduled');
        break
      default:
        break;
    }
    return aggregation;
  }

  renderRoundedCard = (statusType: Task.TaskStatus | Task.CompleteStatus, value: number = null) => {
    return (
      <CardWrap>
        <RoundedCard
          key={statusType}
          value={this.getTaskStatusAggregation(statusType)}
          caption={statusType}
          iconName={'cloud'}

          radius={120}
          rimWidth={4}

          color={this.props.theme.taskStatusColors[(statusType as string).toLowerCase()].color}
          fontSizes={{
            value: '2.8rem',
            caption: '1.2rem',
            icon: '2.7rem',
          }}
          theme={this.props.theme.roundedCard}
        />
      </CardWrap>
    )
  }

  renderRoundedCardContainer = (taskStatusTypes: (Task.TaskStatus | Task.CompleteStatus)[]) => {

    const cards = taskStatusTypes.map(statusType => this.renderRoundedCard(statusType));

    return (
      <RoundedCardsContainer>
        {cards}
      </RoundedCardsContainer>
    )
  }

  getChartByTimeSpanTypeAndStatus = (timeSlotType: Task.TimeSlotType, isScheduled: boolean) => {
    let chart: JSX.Element;

    const filteredTasks = this.props.tasks.filter(task => {
      if (isScheduled) {
        return task.status === 'Scheduled';
      } else {
        return task.status === 'Aborted' || task.status === 'Completed';
      }
    });

    switch (timeSlotType) {
      case 'Day':
        chart = (
          <DashChart
            tasks={filteredTasks}
            theme={this.props.theme.taskBarChart}
          />
        )
        break;
      case 'Week':
        chart = (
          <DashChart
            tasks={filteredTasks}
            theme={this.props.theme.taskBarChart}
          />
        )
        break;
      case 'Month':
        chart = (
          <PinChart
            tasks={filteredTasks}
            theme={this.props.theme.taskBarChart}
          />
        )
        break;
      default:
        chart = null
        break
    }

    return chart;
  }

  render() {

    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <ControlStrip
            onDisplaySelected={(
              timeSlot: Task.TimeSlotType,
              currentDisplayDatesSpanFactorInHours: number) => this.setState({
                currentTimeSlotType: timeSlot,
                currentDisplayDatesSpanFactorInHours: currentDisplayDatesSpanFactorInHours
              })}
            onServiceSelected={(service: Task.ServiceTypeFilter) => {
            }}
            theme={this.props.theme.controlStrip}
          />
          <MainPartWrap>
            <GraphicTimelineContainer>
              <GraphicTimeline
                dates={[
                  moment().subtract(this.state.currentDisplayDatesSpanFactorInHours / 2, 'hours').valueOf(),
                  moment().valueOf(),
                  moment().add(this.state.currentDisplayDatesSpanFactorInHours / 2, 'hours').valueOf()
                ]}
                topLeftElement={this.renderRoundedCardContainer(['Aborted', 'Failed', 'Partial', 'Success'])}
                topRightElement={this.renderRoundedCardContainer(['Scheduled'])}
                bottomLeftElement={
                  this.getChartByTimeSpanTypeAndStatus(this.state.currentTimeSlotType, false)
                }
                bottomRightElement={
                  this.getChartByTimeSpanTypeAndStatus(this.state.currentTimeSlotType, true)
                }
                theme={this.props.theme.graphicTimeline}
              />
            </GraphicTimelineContainer>
          </MainPartWrap>
        </Root>
      </ThemeProvider>
    )
  }
}

export default AgentDashboardSummary;
