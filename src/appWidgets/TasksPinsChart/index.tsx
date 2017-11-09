import * as React from 'react'
import styled from 'styled-components'
import * as Task from '../../types/Task'
import * as Theme from './Theme'

export interface TasksPinsChartProps {
  tasks: Task.Task[],
  theme: Theme.TasksPinsChartThemeProps,
}

interface ReducedTaskProps {
  name: string,
  id: string,
  status: string,
  duration: number,
}

interface PinProps {
  backgroundColor: string,
}

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const PinsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  transform: rotate(180deg);
  flex-direction: row-reverse;
  position: relative;
  left: 2px;
  overflow: auto;
`;

const Pin = styled.span`
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 5px;
  height: 5px;
  background-color: ${(props: PinProps) => props.backgroundColor};
  margin: 1px; 
`;

class TasksPinsChart extends React.Component<TasksPinsChartProps, {}> {
  static defaultProps: Partial<TasksPinsChartProps> = {
    tasks: [],
    theme: Theme.DEFAULT_THEME
  };

  constructor(props: TasksPinsChartProps) {

    super(props);
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

  getPins = (reducedTasks: ReducedTaskProps[]) => {
    let pins = [];

    for (let i = 0; i < reducedTasks.length; i++) {
      const color = this.getFillColor(reducedTasks[i]);
      pins.push((<Pin backgroundColor={color} key={reducedTasks[i].id}/>))
    }
    return pins;
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
          break;
        case 'Pending':
          newStatus = 'pending';
          break;
        case 'Canceled':
          newStatus = 'canceled';
          break;
        default:
          break;
      }

      return {
        id: task.id,
        name: task.name,
        duration: task.duration,
        status: newStatus,
      }
    })
  }

  getFillColor = (task: ReducedTaskProps) => {
    return this.props.theme.barColors[task.status];
  }

  render() {
    const data = this.getTasksChartDataUsingStatus();

    return (
      <Root>
        {/*<ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onContentResize}/>*/}
        <PinsContainer>
          {this.getPins(data)}
        </PinsContainer>
      </Root>
    )
  }

}

export default TasksPinsChart
