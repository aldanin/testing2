import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';

interface FrameViewProps {
  height: string;
}

const FrameView = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  height: ${(prop: FrameViewProps) => prop.height};
  background-color: ${prop => prop.theme.bgColor};
  border-top: 3px solid ${prop => prop.theme.borderTopColor};
  box-sizing: border-box;
  box-shadow: 0px 3px 18px 0px ${prop => prop.theme.boxShadow};
`;

const FrameTitle = styled.div`
  font-size: 1.7rem;
  height: 3rem;
  padding: 1rem 0 3rem 2rem;
`;

const ContentFrame = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  overflow: hidden;
  overflow-y: auto;
`;

const ContentView = styled.div`
  height: auto;
`;

export interface AgentControlFrameProps {
  title: string;
  component?: JSX.Element;
  height?: string;
  theme?: Theme.ThemeProps
}

export interface AgentControlFrameState {
}

class AgentControlFrame extends React.Component<AgentControlFrameProps, AgentControlFrameState> {
  static defaultProps: Partial<AgentControlFrameProps> = {
    theme: Theme.defaultTheme,
    height: '20rem',
    component: <div/>
  }

  constructor (props: AgentControlFrameProps) {
    super(props);

    this.state = {
      isStatusCollapse: true,
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <FrameView height={this.props.height}>
          <FrameTitle>{this.props.title}</FrameTitle>
          <ContentFrame>
            <ContentView>{this.props.component}</ContentView>
          </ContentFrame>
        </FrameView>
      </ThemeProvider>
    )}
}

export default AgentControlFrame;
