import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import { AgentRunData } from '../../types/AgentRun';
import { CloudSubServiceSwitches, GoogleSubServiceSwitches } from '../../types/AgentRun';
import * as TaskBasics from '../../types/TaskBasics'
import * as moment from 'moment';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import SubServicesToolbar from '../SubServicesToolbar/index';

const TaskView = styled.div`
  width: calc(100% - 4rem);
  height: 100%;
  display: flex;
`;

interface TextContainerProps {
  width: string;
  color: string;
  marginRight: string;
}

const TextContainer = styled.span`
  width: ${(prop: TextContainerProps) => prop.width};
  height: 100%;
  display:inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: ${(prop: TextContainerProps) => prop.marginRight};
  color: ${(prop: TextContainerProps) => prop.color};
`;

const RepeatIcon = styled.span`
  position: relative;
  top: 0.8rem;
`;

const ProxyString = styled.span`
  margin-left: 1rem;
  color: ${prop => prop.theme.textColor};
`;

const ToolTipDatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const ToolTipDateRow = styled.div`
  display: block;
  padding-bottom: 1rem;
  
  &:last-child {
      padding-bottom: 0;
  }
`;

export interface AgentRunTaskProps {
  data: AgentRunData;
  theme?: Theme.ThemeProps;
}

export interface AgentRunTaskState {
}

class AgentRunTask extends React.Component<AgentRunTaskProps, AgentRunTaskState> {
  static defaultProps: Partial<AgentRunTaskProps> = {
    theme: Theme.defaultTheme,
  }

  constructor (props: AgentRunTaskProps) {
    super(props);

    this.state = {
    }
  }

  renderRecurrence() {
    if (this.props.data.recurrence.pattern === 'Once') {
      return <div title="Once"><RepeatIcon className="material-icons once-time">get_app</RepeatIcon> Once</div>
    }
    return (
      <div title={this.renderRepeatString()}>
        <RepeatIcon className="material-icons repeater">repeat</RepeatIcon>
        {this.renderRepeatString()}
      </div>
    )
  }

  renderRepeatString() {
    switch (this.props.data.recurrence.pattern) {
      case 'Daily':
        return ' Every ' + this.props.data.recurrence.repeatEvery + ' days';
      case 'Weekly':
        return ' Every ' + this.props.data.recurrence.repeatEvery + ' weeks';
      case 'Monthly':
        return ' Every ' + this.props.data.recurrence.repeatEvery + ' months';
      default:
        return null
    }
  }

  getTimeSlotText(timeSlot: TaskBasics.TimeSlotData, isOnce: boolean) {
    const format = isOnce ? 'dddd,  DD.MM.YYYY,  HH:00-' : 'dddd,  HH:00-';
    return moment(timeSlot.rangeStart).format(format) + moment(timeSlot.rangeEnd).format('HH:00');
  }

  renderTimeSlotString(isTooltip: boolean) {
    const isOnce = this.props.data.recurrence.pattern === 'Once';
    const separator = isTooltip ? '***' : ', ';
    return this.props.data.recurrence.timeSlots.map(timeSlot => this.getTimeSlotText(timeSlot, isOnce))
      .join(separator);
  }

  renderTooltipDates() {
    return (
      <ToolTipDatesContainer>
        {this.props.data.recurrence.timeSlots.map((timeSlot, idx) => {
          return (
            <ToolTipDateRow
              key={idx}
            >
              {this.getTimeSlotText(timeSlot, false)}
            </ToolTipDateRow>)
        })}
      </ToolTipDatesContainer>
    )
  }

  renderGoogleSubServices (): JSX.Element {
    const data = this.props.data.subServices as GoogleSubServiceSwitches;
    return (
      <SubServicesToolbar
        withGmail={data.gmail}
        withBookmarks={data.bookmarks}
        withContacts={data.contacts}
        withGooglePlus={data.googlePlus}
        withProfile={data.profile}
        withSearches={data.search}
        withLocations={data.locations}
        withDrive={data.drive}
        withKeep={data.keep}
        withPhotos={data.photos}
        withPasswords={data.passwords}
        withHangouts={data.hangouts}
        withGroups={data.group}
      />
    )
  }

  renderCloudSubServices (): JSX.Element {
    const data = this.props.data.subServices as CloudSubServiceSwitches;
    return (
      <SubServicesToolbar
        withWhatsapp={{
          messages: data.whatsApp.messages,
          media: data.whatsApp.media,
        }}
        withContacts={data.contacts}
        withCalendars={data.calendars}
        withBackup={data.completeDeviceBackup}
      />
    )
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <TaskView>
          <TextContainer
            title={this.props.data.name}
            color={this.props.theme.textColor}
            width={'15%'}
            marginRight={'5rem'}
          >{this.props.data.name}
          </TextContainer>
          <TextContainer
            color={this.props.theme.textColor}
            width={'20%'}
            marginRight={'5%'}
          >
            {this.props.data.service === 'Google' ? this.renderGoogleSubServices() : this.renderCloudSubServices()}
          </TextContainer>
          <TextContainer
            color={this.props.theme.subTitleColor}
            width={'12%'}
            marginRight={'5%'}
          >
            {this.renderRecurrence()}
          </TextContainer>
          <Tooltip
            placement="right"
            overlay={this.renderTooltipDates()}
            trigger="hover"
            mouseEnterDelay={1}
            arrowContent={<div className="rc-tooltip-arrow-inner"/>}
          >
            <TextContainer
              color={this.props.theme.subTitleColor}
              width={'25%'}
              marginRight={'5%'}
            >
              {this.renderTimeSlotString(false)}
            </TextContainer>
          </Tooltip>
          <TextContainer
            title={this.props.data.proxy}
            color={this.props.theme.subTitleColor}
            width={'10%'}
            marginRight={'5%'}
          >Proxy:
            <ProxyString>{this.props.data.proxy}</ProxyString>
          </TextContainer>
        </TaskView>
      </ThemeProvider>
    )
  }
}

export default AgentRunTask;
