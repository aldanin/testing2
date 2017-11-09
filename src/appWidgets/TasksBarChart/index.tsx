import * as React from 'react'
import styled from 'styled-components'
import * as Recharts from 'recharts'
import ReactResizeDetector from 'react-resize-detector'
import * as Task from '../../types/Task'
import * as Theme from './Theme'

export interface TasksBarChartProps {
  tasks: Task.Task[]
  theme: Theme.TasksBarChartThemeProps
}

interface ReducedTaskProps {
  name: string,
  id: string,
  status: string,
  duration: number,
}

interface ChartWidgetState {
  chartSize: {
    width: number,
    height: number
  }
}

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

class TasksBarChart extends React.Component<TasksBarChartProps, ChartWidgetState> {
  static defaultProps: Partial<TasksBarChartProps> = {
    tasks: [],
    theme: Theme.DEFAULT_THEME
  };

  constructor(props: TasksBarChartProps) {

    super(props);

    this.state = {
      chartSize: {
        width: 0,
        height: 0
      }
    }
  }

  onContentResize = (width: number, height: number) => {
    this.setState({
      chartSize: {
        width: width,
        height: height + 3
      },
    })
  }

  getTasksCompleteStatus = (task: Task.Task): string => {
    let newStatus = null;

    switch (task.complete) {
      case 'Success':
        newStatus = 'success';
        break;
      case 'Failed':
        newStatus = 'failed';
        break;
      case 'Partial':
        newStatus = 'partial';
        break;
      default:
        break;
    }

    return newStatus;
  }

  getTasksChartDataUsingStatus = (): ReducedTaskProps[] => {
    return this.props.tasks.map(task => {

      let newStatus = null;
      switch (task.status) {
        case 'Aborted':
          newStatus = 'aborted';
          break;
        case 'Completed':
          newStatus = this.getTasksCompleteStatus(task)
          break;
        case 'Scheduled':
          newStatus = 'scheduled';
          break
        case 'Pending':
          newStatus = 'pending';
          break
        case 'Canceled':
          newStatus = 'canceled';
          break;
        default:
          break;
      }

      return {
        id: task.id,
        name: task.name,
        duration: newStatus !== 'scheduled' ? task.duration : 100,
        status: newStatus,
      }
    })
  }

  getFillColor = (task: ReducedTaskProps) => {
    return this.props.theme.barColors[task.status];
  }

  render() {
    const {BarChart, Bar, Tooltip, Cell} = Recharts;
    const data = this.getTasksChartDataUsingStatus();

    return (
      <Root>
        <ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onContentResize}/>
        <BarChart
          width={this.state.chartSize.width}
          height={this.state.chartSize.height}
          data={data}
        >
          <Tooltip/>
          <Bar dataKey="duration">
            {
              data.map((item, index) => (
                <Cell cursor="pointer" fill={this.getFillColor(item)} key={item.id}/>
              ))
            }
          </Bar>
        </BarChart>
      </Root>
    )
  }

}

export default TasksBarChart
