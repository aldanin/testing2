import * as React from 'react'
import * as Theme from './Theme';
import styled, { ThemeProvider } from 'styled-components';

const RowView = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  background-color: ${(prop: InnerStyle) => prop.rowBackgroundColor};
  // text-indent: 2rem;
  
  &:hover {
    background-color: ${prop => prop.theme.rowHoverColor};
  }
`;

const EditSpan = styled.span`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  color: ${prop => prop.theme.iconColor};
  line-height: 4rem;
  font-size: 2rem;
`;

export interface AgentControlRowLayoutProps {
  component?: JSX.Element;
  onEdit?: () => void;
  hoveringOption?: JSX.Element
  hasEditOption?: boolean;
  isChecked?: boolean;
  theme?: Theme.ThemeProps
}

interface InnerStyle {
  rowBackgroundColor: string,
}

export interface AgentControlRowLayoutState {
  isStatusCollapse: boolean;
  isHover: boolean;
}

class AgentControlRowLayout extends React.Component<AgentControlRowLayoutProps, AgentControlRowLayoutState> {
  static defaultProps: Partial<AgentControlRowLayoutProps> = {
    theme: Theme.defaultTheme,
    component: <div>Row</div>,
    hasEditOption: false,
    onEdit: () => null,
    isChecked: false,
    hoveringOption: <EditSpan className="material-icons">edit</EditSpan>,
  }

  constructor(props: AgentControlRowLayoutProps) {
    super(props);

    this.state = {
      isStatusCollapse: true,
      isHover: false,
    }
  }

  renderEditOption() {
    return (
      this.props.hoveringOption
    )
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <RowView
          onMouseEnter={() => this.setState({isHover: true})}
          onMouseLeave={() => this.setState({isHover: false})}
          rowBackgroundColor={this.props.isChecked ? this.props.theme.rowHoverColor : 'inherit'}
        >{this.props.component}
          {this.props.hasEditOption && this.state.isHover ? this.renderEditOption() : null}
        </RowView>
      </ThemeProvider>
    )
  }
}

export default AgentControlRowLayout;
