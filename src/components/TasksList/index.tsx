import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import * as Tasks from '../../types/Task';
import AgentControlRowLayout from '../AgentControlRowLayout/index';
import TaskComponent from './TaskListItem';
import { SortDirection } from '../../types/GeneralTypes'
import SmartScroller from '../../appWidgets/SmartScroller'

export interface TasksListProps {
  data: Tasks.Task[];
  checkedRows?: string[];
  onTaskCheck: (taskId: string, isChecked: boolean) => void;

  onAbortTask: (taskId: string) => void;
  onHeaderClick: (headerField: string) => void;
  headerStatus: {
    startTimestamp: SortDirection
  }
  loadMoreData?: () => void;
  theme?: Theme.ThemeProps
}

export interface TasksListState {
  headerStatus: object
}

interface TextContainerProps {
  width?: string;
  color?: string;
  marginRight?: string;
  cursor?: string;
  fontWeight?: string;
}

const Row = styled.div`
 background-color: ${prop => prop.theme.rowEvenBgColor};
 
  &:nth-child(even) {
    background-color: ${prop => prop.theme.rowOddBgColor};
  }
`;

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const TableHeader = styled.div`
  height: 20px;
  width: 100%;
  padding-left: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const HeaderCell = styled.div`
  height: 100%;
  display:inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-basis: ${(prop: TextContainerProps) => prop.width};
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: ${(prop: TextContainerProps) => prop.marginRight || '3rem'};
  color: ${(prop: TextContainerProps) => prop.color || 'silver'};
  cursor: ${(prop: TextContainerProps) => prop.cursor || 'inherit'};
  font-weight: ${(prop: TextContainerProps) => prop.fontWeight || 'normal'};
`;

const HeaderCellTimeInnerSpan = styled.span`
  padding-right: 0.5rem;
`;

const TableBody = styled.div`
  height: calc(100% - 20px);
  width: 100%;
`;

const HoveringOption = styled.span`
  cursor: pointer;
  color: ${prop => 'red'};
  width: 10rem;
`;

const HoveringOptionIconSpan = styled.span`
  padding-right: 1rem;
  font-size: 1.5rem;
  padding: 0 0.2rem;
  position: relative;
  top: 3px;
`;

class TasksList extends React.Component<TasksListProps, TasksListState> {
  static defaultProps: Partial<TasksListProps> = {
    checkedRows: [],
    loadMoreData: () => null,
    theme: Theme.DEFAULT_THEME,
  }

  constructor(props: TasksListProps) {
    super(props);

    this.state = {
      headerStatus: {}
    }
  }

  isCheckedRow = (task: Tasks.Task) => {
    const isChecked =
      !this.props.checkedRows || !!this.props.checkedRows.find(id => id === task.id)
    return isChecked;
  }

  getSortIconName = (fieldName: string) => {
    return !this.state.headerStatus[fieldName] || this.state.headerStatus[fieldName] === 'asc'
      ? 'arrow_downward'
      : 'arrow_upward';
  }

  onHeaderClick = (field: string) => {
    const stateHeaderStatus = this.state.headerStatus;

    if (!this.state.headerStatus[field]) {
      stateHeaderStatus[field] = 'desc';

      this.setState({
        headerStatus: Object.assign({}, stateHeaderStatus)
      })
    } else {
      stateHeaderStatus[field] = !stateHeaderStatus[field] || stateHeaderStatus[field] === 'desc' ? 'asc' : 'desc';
      this.setState({
        headerStatus: Object.assign({}, stateHeaderStatus)
      })
    }
  }

  renderHeader = () => {

  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <TableHeader>
            <HeaderCell width={'20px'} marginRight={'6px'}></HeaderCell>
            <HeaderCell width={'3rem'} marginRight={'1rem'}>#</HeaderCell>
            <HeaderCell width={'100px'}>Operation</HeaderCell>
            <HeaderCell width={'80px'}>Target</HeaderCell>
            <HeaderCell width={'140px'}>Agent</HeaderCell>
            <HeaderCell width={'120px'}>Task Name</HeaderCell>
            <HeaderCell width={'50px'}>Service</HeaderCell>
            <HeaderCell width={'200px'}>Sub services</HeaderCell>
            <HeaderCell
              onClick={() => this.onHeaderClick('startTimestamp')}
              width={'140px'}
              color={this.props.theme.row.textColors.textColor}
              cursor={'pointer'}
            >
              <HeaderCellTimeInnerSpan>Start time</HeaderCellTimeInnerSpan>
              <HoveringOptionIconSpan
                className="material-icons"
                onClick={(ev) => {
                  ev.stopPropagation()
                  alert('cal')
                }}
              >
                date_range
              </HoveringOptionIconSpan>
              <HoveringOptionIconSpan className="material-icons">
                {this.getSortIconName('startTimestamp')}
              </HoveringOptionIconSpan>
            </HeaderCell>
            <HeaderCell width={'90px'}>Duration</HeaderCell>
            <HeaderCell width={'60px'}>Status</HeaderCell>
            <HeaderCell width={'100px'}>Description</HeaderCell>
            <HeaderCell width={'80px'}>Proxy</HeaderCell>
          </TableHeader>
          <TableBody>
            <SmartScroller onBottomReach={() => this.props.loadMoreData()}>
              {this.props.data.map((task, idx) => {
                return (
                  <Row key={idx}>
                    <AgentControlRowLayout
                      component={(
                        <TaskComponent
                          data={task}
                          index={idx}
                          theme={this.props.theme.row}
                          isChecked={this.isCheckedRow(task)}
                          onTaskCheck={this.props.onTaskCheck}
                        />
                      )}
                      hasEditOption={true}
                      hoveringOption={
                        <HoveringOption onClick={() => this.props.onAbortTask(task.id)}>
                          <HoveringOptionIconSpan className="material-icons">cancel</HoveringOptionIconSpan>
                          <span>Abort task</span>
                        </HoveringOption>
                      }
                      isChecked={this.isCheckedRow(task)}
                    />
                  </Row>
                )
              })}
            </SmartScroller>
          </TableBody>
        </Root>
      </ThemeProvider>
    )
  }
}

export default TasksList;
