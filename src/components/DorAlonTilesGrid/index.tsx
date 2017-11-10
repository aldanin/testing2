import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import Tile from '../../appWidgets/Tile/index';

const FrameView = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  
  & > div {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActionText = styled.div`
  color: ${prop => prop.theme.actionColor};
  padding-right: 2rem;
  cursor: pointer;
`;

export interface DorAlonTilesGridProps {
  theme?: Theme.ThemeProps
}

export interface DorAlonTilesGridState {
}

class DorAlonTilesGrid extends React.Component<DorAlonTilesGridProps, DorAlonTilesGridState> {
  static defaultProps: Partial<DorAlonTilesGridProps> = {
    theme: Theme.defaultTheme,
  }

  constructor (props: DorAlonTilesGridProps) {
    super(props);

    this.state = {
      isStatusCollapse: true,
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <FrameView>
          <Grid>
            <Tile title={'Gmail'} icon={'mail'} bgColor={this.props.theme.subService.pazomat}/>
            <Tile title={'Bookmarks'} icon={'bookmark'} bgColor={this.props.theme.subService.bookmarks}/>
            <Tile title={'Contacts'} icon={'person_add'} bgColor={this.props.theme.subService.contacts}/>
            <Tile title={'DorAlon+'} icon={'security'} bgColor={this.props.theme.subService.dorAlon}/>
            <Tile title={'Profile'} icon={'contact_mail'} bgColor={this.props.theme.subService.profile}/>
            <Tile title={'Search'} icon={'search'} bgColor={this.props.theme.subService.search}/>
            <Tile title={'Drive'} icon={'save'} bgColor={this.props.theme.subService.drive}/>
            <Tile title={'Locations'} icon={'place'} bgColor={this.props.theme.subService.location}/>
            <Tile title={'Hangouts'} icon={'sms'} bgColor={this.props.theme.subService.hangout}/>
            <Tile title={'Keep'} icon={'save'} bgColor={this.props.theme.subService.keep}/>
            <Tile title={'Photos'} icon={'toys'} bgColor={this.props.theme.subService.photos}/>
            <Tile title={'Passwords'} icon={'vpn_key'} bgColor={this.props.theme.subService.passwords}/>
          </Grid>
          <ActionContainer>
            <ActionText>Clear</ActionText>
            <ActionText>Select all</ActionText>
          </ActionContainer>
        </FrameView>
      </ThemeProvider>
    )}
}

export default DorAlonTilesGrid;
