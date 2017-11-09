import * as React from 'react';
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import Tooltip from 'rc-tooltip';
import { isBoolean } from 'util';

const SubServiceIcon = styled.i`
  color: ${prop => prop.theme.iconColor};
  font-size: 1.8rem;
  line-height: 4rem;
`;

const RowView = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

const ToolTipFrame = styled.div`
  width: 100%;
`;

const ToolTipHeader = styled.div`
  color: white;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
  padding: 0 1.5rem;
  box-sizing: border-box;
  background-color: ${prop => prop.theme.tooltipHeaderBg};
  margin-bottom: 1rem;
`;

const TooltipView = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
  box-sizing: border-box;
`;

const TooltipRow = styled.div`
  display: flex;
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

const SubText = styled.div`
  margin: 0 0 0 0.3rem;
  color: ${prop => prop.theme.subTextColor};
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
  withGmail?: GmailStructure | boolean;
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
export interface SubServicesToolbarState {

}

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
    withBookmarks: false,
    withContacts: false,
    withGooglePlus: false,
    withGroups: false,
    withProfile: false,
    withSearches: false,
    withLocations: false,
    withDrive: false,
    withHangouts: false,
    withKeep: false,
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

  constructor (props: SubServicesToolbarProps) {
    super(props)

    this.servicesRendered = 0;

    this.state = {
    }
  }

  componentWillUpdate() {
    this.servicesRendered = 0;
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Tooltip
          placement="right"
          overlay={(this.renderTooltip())}
          trigger="hover"
          mouseEnterDelay={1}
          arrowContent={<div className="rc-tooltip-arrow-inner"/>}
        >
          <RowView>
            {this.hasGmail() ? this.renderGmail() : null}
            {this.hasWhatsapp() ? this.renderWhatsapp() : null}
            {this.props.withBookmarks ? (this.renderSubService(this.renderBookmarks())) : null}
            {this.props.withContacts ? (this.renderSubService(this.renderContacts())) : null}
            {this.props.withGooglePlus ? (this.renderSubService(this.renderGooglePlus())) : null}
            {this.props.withGroups ? (this.renderSubService(this.renderGroups())) : null}
            {this.props.withProfile ? (this.renderSubService(this.renderProfile())) : null}
            {this.props.withSearches ? (this.renderSubService(this.renderSearches())) : null}
            {this.props.withLocations ? (this.renderSubService(this.renderLocation())) : null}
            {this.props.withDrive ? (this.renderSubService(this.renderDrive())) : null}
            {this.props.withHangouts ? (this.renderSubService(this.renderHangouts())) : null}
            {this.props.withKeep ? (this.renderSubService(this.renderKeep())) : null}
            {this.props.withPhotos ? (this.renderSubService(this.renderPhotos())) : null}
            {this.props.withCalendars ? (this.renderSubService(this.renderCalendar())) : null}
            {this.props.withBackup ? (this.renderSubService(this.renderBackup())) : null}
            {this.props.withPasswords ? (this.renderSubService(this.renderPasswords())) : null}
            {this.getNumberOfSubServices() > this.props.servicesToShow ? this.renderMore() : null}
          </RowView>
        </Tooltip>
      </ThemeProvider>
    )
  }

  renderGmail() {
    if (this.servicesRendered >= this.props.servicesToShow) { return null }
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
    if (this.servicesRendered >= this.props.servicesToShow) { return null }
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
          {this.getNumberOfSubServices()} Sub services
        </ToolTipHeader>
        <TooltipView>
          {this.hasGmail() ? (this.renderGmailToolTip()) : null}
          {this.hasWhatsapp() ? (this.renderWhatsappToolTip()) : null}
          {this.props.withBookmarks ? (<TooltipRow>{this.renderBookmarks()} Bookmarks</TooltipRow>) : null}
          {this.props.withContacts ? (<TooltipRow>{this.renderContacts()} Contacts</TooltipRow>) : null}
          {this.props.withGooglePlus ? (<TooltipRow>{this.renderGooglePlus()} Google+</TooltipRow>) : null}
          {this.props.withGroups ? (<TooltipRow>{this.renderGroups()} Groups</TooltipRow>) : null}
          {this.props.withProfile ? (<TooltipRow>{this.renderProfile()} Profile</TooltipRow>) : null}
          {this.props.withSearches ? (<TooltipRow>{this.renderSearches()} Search</TooltipRow>) : null}
          {this.props.withLocations ? (<TooltipRow>{this.renderLocation()} Locations</TooltipRow>) : null}
          {this.props.withDrive ? (<TooltipRow>{this.renderDrive()} Drive</TooltipRow>) : null}
          {this.props.withHangouts ? (<TooltipRow>{this.renderHangouts()} Hangouts</TooltipRow>) : null}
          {this.props.withKeep ? (<TooltipRow>{this.renderKeep()} Keep</TooltipRow>) : null}
          {this.props.withPhotos ? (<TooltipRow>{this.renderPhotos()} Photos</TooltipRow>) : null}
          {this.props.withCalendars ? (<TooltipRow>{this.renderCalendar()} Calendar</TooltipRow>) : null}
          {this.props.withBackup ? (<TooltipRow>{this.renderBackup()} Backup</TooltipRow>) : null}
          {this.props.withPasswords ? (<TooltipRow>{this.renderPasswords()} Passwords</TooltipRow>) : null}
        </TooltipView>
      </ToolTipFrame>
    )
  }

  renderBookmarks() {
    return <SubServiceIcon className="material-icons">bookmark</SubServiceIcon>
  }

  renderContacts() {
    return <SubServiceIcon className="material-icons">contacts</SubServiceIcon>
  }

  renderGooglePlus() {
    return <SubServiceIcon className="material-icons">security</SubServiceIcon>
  }

  renderGroups() {
    return <SubServiceIcon className="material-icons">group</SubServiceIcon>
  }

  renderProfile() {
    return <SubServiceIcon className="material-icons">person</SubServiceIcon>
  }

  renderSearches() {
    return <SubServiceIcon className="material-icons">search</SubServiceIcon>
  }

  renderLocation() {
    return <SubServiceIcon className="material-icons">place</SubServiceIcon>
  }

  renderDrive() {
    return <SubServiceIcon className="material-icons">phone_android</SubServiceIcon>
  }

  renderHangouts() {
    return <SubServiceIcon className="material-icons">bubble_chart</SubServiceIcon>
  }

  renderKeep() {
    return <SubServiceIcon className="material-icons">vpn_lock</SubServiceIcon>
  }

  renderPhotos() {
    return <SubServiceIcon className="material-icons">toys</SubServiceIcon>
  }

  renderCalendar() {
    return <SubServiceIcon className="material-icons">date_range</SubServiceIcon>
  }

  renderBackup() {
    return <SubServiceIcon className="material-icons">cached</SubServiceIcon>
  }

  renderPasswords() {
    return <SubServiceIcon className="material-icons">vpn_key</SubServiceIcon>
  }

  renderMore() {
    return <div>{this.getNumberOfSubServices() - this.props.servicesToShow} more</div>
  }

  renderSubService(element: JSX.Element) {
    if (this.servicesRendered >= this.props.servicesToShow) { return null }
    this.servicesRendered++;
    return <SubServiceContainer>{element}</SubServiceContainer>;
  }

  hasGmail() {
    return Object.keys(this.props.withGmail).reduce((acc, item) =>  acc || this.props.withGmail[item], false);
  }

  hasGmailIsFullService() {
    return Object.keys(this.props.withGmail).reduce((acc, item) =>  acc && this.props.withGmail[item], true);
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
            {Object.keys(lookup).filter(item => this.props.withGmail[item]).map(key => lookup[key]).join(', ')}
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
    return Object.keys(this.props.withWhatsapp).reduce((acc, item) =>  acc || this.props.withWhatsapp[item], false);
  }

  hasWhatsappIsFullService() {
    return Object.keys(this.props.withWhatsapp).reduce((acc, item) =>  acc && this.props.withWhatsapp[item], true);
  }

  getNumberOfServiceFromWhatsapp() {
    return Object.keys(this.props.withWhatsapp).map(item =>
      (this.props.withWhatsapp[item] ? 1 : 0)).reduce((acc, item) => (acc + item), 0)
  }

  getNumberOfSubServices() {
    let counter = Object.keys(this.props)
    .reduce(
      (acc, item) => {
        if (isBoolean(this.props[item]) && this.props[item]) {
          return acc + 1;
        }
        return acc;
      },
      0);

    if (this.hasGmail()) {counter++}
    if (this.hasWhatsapp()) {counter++}
    return counter;
  }
}

export default SubServicesToolbar
