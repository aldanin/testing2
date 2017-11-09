import * as React from 'react'
import * as Theme from './Theme';
import styled from 'styled-components';

const FrameView = styled.div`

`;

export interface AgentRunProps {
  title: string;
  height?: number;
  theme?: Theme.ThemeProps
}

export interface AgentRunState {
}

class AgentRun extends React.Component<AgentRunProps, AgentRunState> {
  static defaultProps: Partial<AgentRunProps> = {
    theme: Theme.defaultTheme,
    height: 20,
  }

  constructor (props: AgentRunProps) {
    super(props);

    this.state = {
      isStatusCollapse: true,
    }
  }

  render() {
    return (
      <FrameView>Agent Run</FrameView>
    )}
}

export default AgentRun;
