import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import TabGeneric from '../../appWidgets/TabGeneric';
import GoogleTilesGrid from '../GoogleTilesGrid';
import DailyForm from './dailyForm';
import WeeklyForm from './weeklyForm';
import MonthlyForm from './monthlyForm';

const FrameView = styled.div`
  position: absolute;
  top: 6%;
  left: calc(50% - 37.5rem);
  width: 75rem;
  height: auto;
  max-height: 90vh;
  border: 1px solid ${prop => prop.theme.windowBorder};
  background-color: ${prop => prop.theme.windowBgColor};
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${prop => prop.theme.overlay};
  z-index: 999;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: ${prop => prop.theme.primaryColor};
  padding: 1rem 1rem 1rem 2rem;
  color: ${prop => prop.theme.titleColor};
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const BodyContainer = styled.div`
  display: block;
  width: 100%;
  height: calc(100% - 9rem);
  padding: 3rem 2rem;
  padding-bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
`;

const RowContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const NameInput = styled.input`
  border: none;
  font-size: 1.4rem;
  line-height: 2.5rem;
  border-bottom: 1px solid ${prop => prop.theme.inputBorder};
  color: ${prop => prop.theme.valueColor};
  outline: 0 !important;
  position: relative;
  top: -4px;
  width: 20rem;
`;

const TimeContainer = styled.div`
  font-size: 1.5rem;
  margin-right: 3rem;
  color: ${prop => prop.theme.valueColor};
`;

const ChangeContainer = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  color: ${prop => prop.theme.actionText};
`;

const TitleContainer = styled.div`
  font-size: 1.6rem;
  width: 13rem;
  margin-right: 1rem;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: ${prop => prop.theme.footerBgColor};
  padding: 2rem;
  box-sizing: border-box;
`;

const RunOnContainer = styled.div`
  font-size: 1.3rem;
  width: 100%;
  line-height: 1rem;
`;

const SubServicesContainer = styled.div`
  width: 52rem;
`;

const CloseWindow = styled.div`
  position: absolute;
  align-self: flex-end;
  padding-right: 1rem;
  color: ${prop => prop.theme.close};
  font-size: 3rem;
  line-height: 3.7rem;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 20rem;
  height: 3rem;
  position: relative;
  top: -1rem;
`;

const ButtonDiscard = styled.button`
  width: 10rem;
  height: 3rem;
  border: none;
  background-color: ${prop => prop.theme.footerBgColor};
  color: ${prop => prop.theme.primaryColor};
  cursor: pointer;
  outline:0 !important;
`;

const ButtonSave = styled.button`
  width: 10rem;
  height: 3rem;
  border: none;
  background-color: ${prop => prop.theme.primaryColor};
  color: ${prop => prop.theme.titleColor};
  cursor: pointer;
  outline:0 !important;
`;

export interface AddAgentWindowProps {
  onClose: () => void;
  title: string;
  theme?: Theme.ThemeProps
}

export interface AddAgentWindowState {
  name: string;
  recurrenceIndex: string;
}

class AddAgentWindow extends React.Component<AddAgentWindowProps, AddAgentWindowState> {

  static defaultProps: Partial<AddAgentWindowProps> = {
    theme: Theme.defaultTheme,
  }

  constructor (props: AddAgentWindowProps) {
    super(props);

    this.state = {
      name: 'Agent Run 001',
      recurrenceIndex: 'None',
    }
  }

  renderRecurrenceForm() {
    return (
      <RowContainer>
        <TitleContainer/>
        {this.getForm()}
      </RowContainer>
    )
  }

  getForm() {
    switch (this.state.recurrenceIndex) {
      case 'Daily':
        return <DailyForm/>;
      case 'Weekly':
        return <WeeklyForm/>;
      case 'Monthly':
        return <MonthlyForm/>;
      default:
        return null;
    }
  }

  onNameChange(newName: string) {
    this.setState({
      name: newName,
    })
  }

  render() {

    const recurrenceTabs = [{
      title: 'None',
      callback: () => this.setState({recurrenceIndex: 'None'}),
    }, {
      title: 'Daily',
      callback: () => this.setState({recurrenceIndex: 'Daily'}),
    }, {
      title: 'Weekly',
      callback: () => this.setState({recurrenceIndex: 'Weekly'}),
    }, {
      title: 'Monthly',
      callback: () => this.setState({recurrenceIndex: 'Monthly'}),
    }, ];

    return (
      <ThemeProvider theme={this.props.theme}>
        <div>
          <FrameView>
            <HeaderContainer>{this.props.title}</HeaderContainer>
            <CloseWindow onClick={this.props.onClose}>&times;</CloseWindow>
            <BodyContainer>
              <RowContainer>
                <TitleContainer>Name</TitleContainer>
                <NameInput
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.onNameChange((e.target as HTMLInputElement).value)}
                />
              </RowContainer>
              <RowContainer>
                <TitleContainer>Recurrence</TitleContainer>
                <TabGeneric
                  tabs={recurrenceTabs}
                  initialSelectedIndex={0}
                  activeStyle={{
                    padding: '4px 2.5rem',
                    top: '1px'
                  }}
                />
              </RowContainer>
              {this.renderRecurrenceForm()}
              <RowContainer>
                <TitleContainer>Time</TitleContainer>
                <TimeContainer>Thursday 17.07.2017, 00:00-06:00</TimeContainer>
                <ChangeContainer>Change</ChangeContainer>
              </RowContainer>
              <RowContainer>
                <TitleContainer>Sub Services</TitleContainer>
                <SubServicesContainer><GoogleTilesGrid/></SubServicesContainer>
              </RowContainer>
            </BodyContainer>
            <FooterContainer>
              <RunOnContainer>Run on Thursday 17.07.2017, 00:00-06:00</RunOnContainer>
              <ButtonsContainer>
                <ButtonDiscard>Discard</ButtonDiscard>
                <ButtonSave>Add</ButtonSave>
              </ButtonsContainer>
            </FooterContainer>
          </FrameView>
          <Overlay/>
        </div>
      </ThemeProvider>
    )
  }
}

export default AddAgentWindow;
