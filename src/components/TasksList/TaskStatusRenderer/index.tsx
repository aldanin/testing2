import * as React from 'react';
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import Tooltip from 'rc-tooltip';
import { isBoolean } from 'util';
import * as Task from '../../../types/Task'

export interface GmailStructure {
  inbox: boolean;
  sent: boolean;
  drafts: boolean;
  attachments: boolean;
  amountOfEmails: boolean;
  timeRange: boolean;
}

export interface WhatsappStructure {
  messages: boolean;
  media: boolean;
}

export interface SubServicesToolbarProps extends React.Props<SubServicesToolbar> {
  status: Task.TaskStatus;
  withGmail?: GmailStructure;
  withBookmarks?: boolean;
  withContacts?: boolean;
  withGooglePlus?: boolean;
  withGroups?: boolean;
  withProfile?: boolean;
  withSearches?: boolean;
  withLocations?: boolean;
  withDrive?: boolean;
  withHangouts?: boolean;
  withKeep?: boolean;
  withPhotos?: boolean;
  withPasswords?: boolean;
  withWhatsapp?: WhatsappStructure;
  withCalendars?: boolean;
  withBackup?: boolean;
  servicesToShow?: number;
  theme?: Theme.ThemeProps;
}

interface InnerStyle {
  color?: string,
}

export interface SubServicesToolbarState {

}

const RowView = styled.div`
  width: auto;
  height: auto;
  display: flex;
  cursor: pointer;
`;

const ToolTipFrame = styled.div`
  width: 270px;
`;

const ToolTipHeader = styled.div`
  color: ${prop => 'black'};
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1.5rem;
  box-sizing: border-box;
  background-color: white; //${prop => prop.theme.tooltipHeaderBg};
  margin-bottom: 1rem;
`;

const TooltipView = styled.div`
  width: auto;
  height: auto;
  padding: 0 1.2rem 0 5px;
  box-sizing: border-box;
`;

const TooltipRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding-bottom: 0.5rem;
  white-space: nowrap;
  
  & .material-icons {
    position: relative;
    top: -2px;
    padding-right: 0.5rem;
    line-height: 1;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0 0.5rem 0 0;
`;

const SubServiceIcon = styled.i`
  flex-basis: 1.8rem;
  flex-grow: 0;
  flex-shrink: 0;
  color: ${prop => prop.theme.iconColor};
  font-size: 1.8rem;
  line-height: 4rem;
`;

const SubText = styled.div`
  margin: 0 0 0 0.3rem;
  color: ${prop => prop.theme.subTextColor};
`;

const DetailsSpan = styled.span`
  display: inline-block;
  flex-basis: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 0;
  flex-shrink: 0;
`;

const StatusSpan = styled.div`
  flex-basis: 8rem;
  flex-grow: 0;
  flex-shrink: 0;
  color: ${(prop: InnerStyle) => prop.color};
`;

const TooltipRowCaption = styled.span`
  flex-basis: 8rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

const SubServiceContainer = styled.div`
  display: flex;
  width: 2.5rem;
  
  & .partial-service {
    position: relative;
    left: -2rem;
  }
  
  &.partial {
    width: 4rem;
  }
`;

class SubServicesToolbar extends React.Component<SubServicesToolbarProps, SubServicesToolbarState> {
  static defaultProps: Partial<SubServicesToolbarProps> = {
    theme: Theme.defaultTheme,
    servicesToShow: 5,
    withGmail: {
      inbox: false,
      sent: false,
      drafts: false,
      attachments: false,
      amountOfEmails: false,
      timeRange: false,
    },
    withBookmarks: true,
    withContacts: true,
    withGooglePlus: true,
    withGroups: true,
    withProfile: true,
    withSearches: true,
    withLocations: true,
    withDrive: true,
    withHangouts: true,
    withKeep: true,
    withPhotos: false,
    withPasswords: false,
    withWhatsapp: {
      messages: false,
      media: false,
    },
    withCalendars: false,
    withBackup: false,
  }

  servicesRendered: number;

  constructor(props: SubServicesToolbarProps) {
    super(props)

    this.servicesRendered = 0;

    this.state = {}
  }

  componentWillUpdate() {
    this.servicesRendered = 0;
  }

  renderGmail() {
    if (this.servicesRendered >= this.props.servicesToShow) {
      return null
    }
    this.servicesRendered++;
    return (
      <SubServiceContainer className={!this.hasGmailIsFullService() ? 'partial' : ''}>
        <SubServiceIcon className="material-icons">mail</SubServiceIcon>
        {!this.hasGmailIsFullService() ? (
          <span className="partial-service">{'(' + this.getNumberOfServiceFromGmail() + ')'}</span>
        ) : null}
      </SubServiceContainer>
    )
  }

  renderWhatsapp() {
    if (this.servicesRendered >= this.props.servicesToShow) {
      return null
    }
    this.servicesRendered++;
    return (
      <SubServiceContainer className={!this.hasWhatsappIsFullService() ? 'partial' : ''}>
        <SubServiceIcon className="material-icons">message</SubServiceIcon>
        {!this.hasWhatsappIsFullService() ? (
          <span className="partial-service">{'(' + (this.getNumberOfServiceFromWhatsapp()) + ')'}</span>
        ) : null}
      </SubServiceContainer>
    )
  }

  renderTooltip() {
    return (
      <ToolTipFrame>
        <ToolTipHeader>
          Detailed Status
        </ToolTipHeader>
        <TooltipView>
          {(this.renderGmailToolTip())}
          {this.hasWhatsapp() ? (this.renderWhatsappToolTip()) : null}
          {this.props.withBookmarks ? this.renderTooltipRow('Bookmarks', 'bookmark') : null}
          {this.props.withBookmarks ? this.renderTooltipRow('Bookmarks', 'bookmark') : null}
          {this.props.withBookmarks ? this.renderTooltipRow('Bookmarks', 'bookmark') : null}
          {this.props.withContacts ? this.renderTooltipRow('Contacts', 'contacts') : null}
          {this.props.withGooglePlus ? this.renderTooltipRow('Google+', 'security') : null}
          {this.props.withGroups ? this.renderTooltipRow('Groups', 'group') : null}
          {this.props.withProfile ? this.renderTooltipRow('Profile', 'person') : null}
          {this.props.withSearches ? this.renderTooltipRow('Searches', 'search') : null}
          {this.props.withLocations ? this.renderTooltipRow('Locations', 'place') : null}
          {this.props.withDrive ? this.renderTooltipRow('Drive', 'phone_android') : null}
          {this.props.withHangouts ? this.renderTooltipRow('Hangouts', 'bubble_chart') : null}
          {this.props.withKeep ? this.renderTooltipRow('Keep', 'vpn_lock') : null}
          {this.props.withPhotos ? this.renderTooltipRow('Photos', 'toys') : null}
          {this.props.withCalendars ? this.renderTooltipRow('Calendars', 'date_range') : null}
          {this.props.withBackup ? this.renderTooltipRow('Backup', 'cached') : null}
          {this.props.withPasswords ? this.renderTooltipRow('Passwords', 'vpn_key') : null}
        </TooltipView>
      </ToolTipFrame>
    )
  }

  renderTooltipRow = (caption: string,
                      iconClass: string,
                      status: Task.TaskStatus = 'Running') => {
    const statusColor = this.props.theme.taskStatusColors[status.toLowerCase()].color;

    return (
      <TooltipRow>
        <SubServiceIcon className="material-icons">{iconClass}</SubServiceIcon>
        <TooltipRowCaption>{caption}</TooltipRowCaption>
        <StatusSpan color={statusColor}>{status}</StatusSpan>
        <DetailsSpan>NOt workn sdfsdf sdf</DetailsSpan>
      </TooltipRow>
    )
  }

  renderMore() {
    return <div>{this.getNumberOfSubServices() - this.props.servicesToShow} more</div>
  }

  renderSubService(element: JSX.Element) {
    if (this.servicesRendered >= this.props.servicesToShow) {
      return null
    }
    this.servicesRendered++;
    return <SubServiceContainer>{element}</SubServiceContainer>;
  }

  hasGmail() {
    return Object.keys(this.props.withGmail).reduce((acc, item) => acc || this.props.withGmail[item], false);
  }

  hasGmailIsFullService() {
    return Object.keys(this.props.withGmail).reduce((acc, item) => acc && this.props.withGmail[item], true);
  }

  getNumberOfServiceFromGmail() {
    return Object.keys(this.props.withGmail).map(item =>
      (this.props.withGmail[item] ? 1 : 0)).reduce((acc, item) => (acc + item), 0)
  }

  renderGmailToolTip() {
    const lookup = {
      inbox: 'Inbox',
      sent: 'Sent',
      drafts: 'Drafts',
      attachments: 'Attachments',
      amountOfEmails: 'Amount of emails',
      timeRange: 'Time range',
    }
    return (
      <TooltipRow>
        <SubServiceIcon className="material-icons">mail</SubServiceIcon> Gmail
        <CategoriesContainer>
          <SubText>
            {Object.keys(lookup)
              .filter(item => this.props.withGmail[item])
              .map(key => lookup[key]).join(', ')}
          </SubText>
        </CategoriesContainer>
      </TooltipRow>
    )
  }

  renderWhatsappToolTip() {
    return (
      <TooltipRow>
        <SubServiceIcon className="material-icons">message</SubServiceIcon> Whatsapp
        <CategoriesContainer>
          {this.props.withWhatsapp.messages ? (<SubText>Messages</SubText>) : null}
          {this.props.withWhatsapp.media ? (<SubText>Media</SubText>) : null}
        </CategoriesContainer>
      </TooltipRow>
    )
  }

  hasWhatsapp() {
    return Object.keys(this.props.withWhatsapp).reduce((acc, item) => acc || this.props.withWhatsapp[item], false);
  }

  hasWhatsappIsFullService() {
    return Object.keys(this.props.withWhatsapp).reduce((acc, item) => acc && this.props.withWhatsapp[item], true);
  }

  getNumberOfServiceFromWhatsapp() {
    return Object.keys(this.props.withWhatsapp).map(item =>
      (this.props.withWhatsapp[item] ? 1 : 0)).reduce((acc, item) => (acc + item), 0)
  }

  getNumberOfSubServices() {
    let counter = Object.keys(this.props)
      .reduce((acc, item) => {
        if (isBoolean(this.props[item]) && this.props[item]) {
          return acc + 1;
        }
        return acc;
      }, 0);

    if (this.hasGmail()) {
      counter++
    }
    if (this.hasWhatsapp()) {
      counter++
    }
    return counter;
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Tooltip
          placement="right"
          overlay={(this.renderTooltip())}
          trigger="click"
          mouseEnterDelay={1}
          arrowContent={<div className="rc-tooltip-arrow-inner"/>}
        >
          <RowView>
            <span>{this.props.status}</span>
          </RowView>
        </Tooltip>
      </ThemeProvider>
    )
  }
}

export default SubServicesToolbar
