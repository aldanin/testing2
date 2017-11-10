import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import * as Tasks from '../../../types/Task';
import { CloudSubServiceData, GoogleSubServiceData } from '../../../types/Task';
import * as TaskBasics from '../../../types/TaskBasics'
import * as moment from 'moment';
// import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import SubServicesToolbar from '../../SubServicesToolbar/index';
import Checkbox from '../../../appWidgets/Checkbox'
import TaskStatusRenderer from '../TaskStatusRenderer'

export interface TaskListItemProps {
  data: Tasks.Task;
  index: number;
  onTaskCheck?: (taskId: string, isChecked: boolean) => void;
  isChecked?: boolean;
  isCurrent?: boolean;
  theme?: Theme.ThemeProps;
}

export interface TaskListItemState {
  isCurrent: boolean;
  isMouseOn: boolean;
  menuIsHide: boolean;
}

interface TextContainerProps {
  width?: string;
  color?: string;
  marginRight?: string;
  cursor?: string;
}

const TextContainer = styled.div`
  height: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-basis: ${(prop: TextContainerProps) => prop.width};
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: ${(prop: TextContainerProps) => prop.marginRight || '3rem'};
  color: ${(prop: TextContainerProps) => prop.color};
  cursor: ${(props: TextContainerProps) => props.cursor || 'inherit'};
`;

const Root = styled.div`
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(11, 1fr);
	grid-auto-flow: row dense;
  display: flex;
  padding-left: 15px;
  align-items: center;
`;

class TaskListItem extends React.Component<TaskListItemProps, TaskListItemState> {
  static defaultProps: Partial<TaskListItemProps> = {
    theme: Theme.DEFAULT_THEME,
    onTaskCheck: () => null,
    isChecked: false,
  }

  constructor(props: TaskListItemProps) {
    super(props);

    this.state = {
      isCurrent: !!props.isCurrent,
      isMouseOn: false,
      menuIsHide: true,
    }
  }

  changeIsMouseOnState(isOn: boolean) {
    this.setState({
      isMouseOn: isOn,
      menuIsHide: !isOn,
    })
  }

  componentWillReceiveProps(nextProps: TaskListItemProps) {
    if (!nextProps.isChecked) {
      this.setState({
        isMouseOn: false,
      })
    }
  }

  getTimeSlotText(timeSlot: TaskBasics.TimeSlotData, isOnce: boolean) {
    const format = isOnce ? 'dddd,  DD.MM.YYYY,  HH:00-' : 'dddd,  HH:00-';
    return moment(timeSlot.rangeStart).format(format) + moment(timeSlot.rangeEnd).format('HH:00');
  }

  renderGoogleSubServices(): JSX.Element {
    const data = this.props.data.subServices as GoogleSubServiceData;
    return (
      <SubServicesToolbar
        withGmail={!!data.gmail}
        withBookmarks={!!data.bookmarks}
        withContacts={!!data.contacts}
        withGooglePlus={!!data.googlePlus}
        withProfile={!!data.profile}
        withSearches={!!data.search}
        withLocations={!!data.locations}
        withDrive={!!data.drive}
        withKeep={!!data.keep}
        withPhotos={!!data.photos}
        withPasswords={!!data.passwords}
        withHangouts={!!data.hangouts}
        withGroups={!!data.group}
      />
    )
  }

  renderCloudSubServices(): JSX.Element {
    const data = this.props.data.subServices as CloudSubServiceData;
    return (
      <SubServicesToolbar
        withWhatsapp={{
          messages: !!data.whatsApp.messages,
          media: !!data.whatsApp.media,
        }}
        withContacts={!!data.contacts}
        withCalendars={!!data.calendars}
        withBackup={!!data.completeDeviceBackup}
      />
    )
  }

  getStatusColor(task: Tasks.Task) {
    let color = this.props.theme.textColors.textColor;

    if (task.status === 'Running') {
      color = this.props.theme.runningTextColor;
    }

    return color;
  }

  onRowCheck = () => {
    this.props.onTaskCheck(this.props.data.id, !this.props.isChecked)
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
          <TextContainer
            title={this.props.data.operation}
            color={this.props.theme.textColors.textColor}
            marginRight={'6px'}
            width={'20px'}
          >
            <Checkbox
              onCheck={() => this.onRowCheck()}
              setChecked={this.props.isChecked}
            />
          </TextContainer>
          <TextContainer
            title={this.props.data.operation}
            color={this.props.theme.textColors.textColor}
            width={'3rem'}
            marginRight={'1rem'}
          >
            {this.props.index}
          </TextContainer>
          <TextContainer
            title={this.props.data.operation}
            color={this.props.theme.textColors.textColor}
            width={'100px'}
          >{this.props.data.operation}
          </TextContainer>
          <TextContainer
            title={this.props.data.employee.targetName}
            color={this.props.theme.textColors.textColor}
            width={'80px'}
          >{this.props.data.employee.targetName}
          </TextContainer>
          <TextContainer
            title={this.props.data.employee.name}
            color={this.props.theme.textColors.textColor}
            width={'140px'}
          >{this.props.data.employee.name}
          </TextContainer>
          <TextContainer
            title={this.props.data.name}
            color={this.props.theme.textColors.textColor}
            width={'120px'}
          >{this.props.data.name}
          </TextContainer>
          <TextContainer
            title={this.props.data.service}
            color={this.props.theme.textColors.textColor}
            width={'50px'}
          >{this.props.data.service}
          </TextContainer>
          <TextContainer
            color={this.props.theme.textColors.textColor}
            width={'200px'}
            cursor={'pointer'}
          >
            {this.props.data.service === 'Google'
              ? this.renderGoogleSubServices()
              : this.renderCloudSubServices()}
          </TextContainer>
          <TextContainer
            title={moment(this.props.data.startTimestamp).format('DD.MM.YYYY  HH:mm')}
            color={this.props.theme.textColors.textColor}
            width={'140px'}
          >{moment(this.props.data.startTimestamp).format('DD.MM.YYYY  HH:mm')}
          </TextContainer>
          <TextContainer
            title={moment(this.props.data.duration).format('HH:mm:ss')}
            color={this.props.theme.textColors.textColor}
            width={'90px'}
          >{moment(this.props.data.duration).format('HH:mm:ss')}
          </TextContainer>
          <TextContainer
            title={this.props.data.status}
            color={this.getStatusColor(this.props.data)}
            width={'60px'}
          >
            <TaskStatusRenderer status={this.props.data.status} theme={this.props.theme.taskStatusTooltip}/>
          </TextContainer>
          <TextContainer
            title={this.props.data.description}
            color={this.props.theme.textColors.textColor}
            width={'100px'}
          >{this.props.data.description}
          </TextContainer>
          <TextContainer
            title={this.props.data.proxy}
            color={this.props.theme.textColors.textColor}
            width={'80px'}
          >{this.props.data.proxy}
          </TextContainer>
        </Root>
      </ThemeProvider>
    )
  }
}

export default TaskListItem;
