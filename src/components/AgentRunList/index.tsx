import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import { AgentRunData } from '../../types/AgentRun';
import AgentControlRowLayout from '../AgentControlRowLayout/index';
import AgentRunTask from '../AgentRunTask/index';

const Row = styled.div`
 background-color: ${prop => prop.theme.rowEvenBgColor};
 
  &:nth-child(even) {
    background-color: ${prop => prop.theme.rowOddBgColor};
  }
`;

const AddAgentContainer = styled.div`
  color: ${prop => prop.theme.addAgentColor};
  position: relative;
  top: 0.1rem;
  left: -1rem;
  cursor: pointer;
`;

const AddAgentIcon = styled.i`
  font-size: 1.8rem;
  line-height: 4rem;
`;

const AddAgentRow = styled.div`
  display: flex;
  color: ${prop => prop.theme.addAgentColor};
  font-weight: bold;
`;

export interface AgentRunListProps {
  data: AgentRunData[];
  onTaskWindowOpen: () => void;
  theme?: Theme.ThemeProps
}

export interface AgentRunListState {
}

class AgentRunList extends React.Component<AgentRunListProps, AgentRunListState> {
  static defaultProps: Partial<AgentRunListProps> = {
    theme: Theme.defaultTheme,
  }

  constructor (props: AgentRunListProps) {
    super(props);

    this.state = {
    }
  }

  renderAddAgent() {
    return (
      <AddAgentRow onClick={this.props.onTaskWindowOpen}>
        <AddAgentIcon className="material-icons">add_circle_outline</AddAgentIcon>
        <AddAgentContainer>Add agent run</AddAgentContainer>
      </AddAgentRow>
    )
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div>
          {this.props.data.map((task, idx) => {
            return (
              <Row key={idx}>
                <AgentControlRowLayout
                  component={<AgentRunTask data={task} />}
                  hasEditOption={true}
                />
              </Row>
            )})}
          <Row>
            <AgentControlRowLayout
              component={this.renderAddAgent()}
            />
          </Row>
        </div>
      </ThemeProvider>
    )
  }
}

export default AgentRunList;
