import * as React from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { TabsThemeProps, DEFAULT_THEME } from './Theme';

const BORDER_WIDTH = '0.2rem';

export interface TabGenericProps extends React.Props<TabGeneric> {
  tabs: TabDetail[];
  initialSelectedIndex: number;
  selectedIndex?: number;
  isDisabled?: boolean;
  theme?: TabsThemeProps;
  activeStyle?: React.CSSProperties;
}

export interface TabGenericState {
  activeIndex: number;
}

export interface TabDetail {
  title: string;
  callback: Function;
}

interface ContainerStyle {
  BGColor?: string,
}

interface ButtonStyle {
  BGColor?: string,
  color?: string,
  padding?: string,
  cursor?: string,
  top: string,
}

const Wrapper = styled.div`
  padding: ${BORDER_WIDTH};
  display: inline-block;
`
const Container = styled.div`
  background: ${(prop: ContainerStyle) => prop.BGColor};

  display: inline-block;
  border-radius: 1.2rem;
  white-space: nowrap;
  font-size: 1.2rem;
`
const Button = styled.div`
  padding: 2px 2.5rem;
  display: inline-block;
  cursor: ${(prop: ButtonStyle) => prop.cursor};
  position: relative;
  color: ${(prop: ButtonStyle) => prop.color};
  border: ${BORDER_WIDTH} solid ${prop => prop.theme.disActiveBorderColor};
  border-radius: 1.2rem;

  &.selected {
    padding: ${(prop: ButtonStyle) => prop.padding};
    top: ${prop => prop.top};
    border-radius: 1.2rem;
    margin-top: -${BORDER_WIDTH};
    background-color: ${prop => prop.theme.activeBgColor};
    color: ${prop => prop.theme.activeTextColor};
    font-weight: bold;
    border-color: ${prop => prop.theme.activeBorderColor};
    z-index: 1;
    box-shadow: ${prop => prop.theme.shadow};
  }
`

class TabGeneric extends React.Component<TabGenericProps, TabGenericState> {
  static defaultProps: Partial<TabGenericProps> = {
    selectedIndex: 0,
    isDisabled: false,
    theme: DEFAULT_THEME,
    activeStyle: {
      padding: '2px 2.5rem',
      top: '0'
    }
  }

  constructor(props: TabGenericProps) {
    super(props)

    this.state = {
      activeIndex: this.props.initialSelectedIndex,
    }
  }

  componentWillReceiveProps(nextProps: TabGenericProps) {
    if (nextProps.selectedIndex && nextProps.selectedIndex !== this.state.activeIndex) {
      const newActiveTab = nextProps.selectedIndex
      if (newActiveTab !== this.state.activeIndex) {
        if (newActiveTab !== undefined && newActiveTab >= 0 && newActiveTab < this.props.tabs.length) {
          this.setState({activeIndex: nextProps.selectedIndex})
        }
      }
    }
  }

  onClick = (ev, idx) => {
    ev.preventDefault();
    this.setState({activeIndex: idx});
    this.props.tabs[idx].callback();
  }

  getTabs() {
    return this.props.tabs.map((tab, idx) => (
        <Button
          key={tab.title}
          onClick={(ev) => !this.props.isDisabled ? this.onClick(ev, idx) : null}
          className={!this.props.isDisabled && this.state.activeIndex === idx ? 'selected' : ''}
          padding={this.props.activeStyle.padding}
          top={this.props.activeStyle.top}
          color={this.props.isDisabled ? this.props.theme.genericElementColors.disabled.text : null}
          cursor={this.props.isDisabled ? 'default' : 'pointer'}
        >
          {tab.title}
        </Button>
      )
    )
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Wrapper>
          <Container
            BGColor={
              this.props.isDisabled
                ? this.props.theme.genericElementColors.disabled.BG
                : this.props.theme.disActiveBgColor
            }
          >
            {this.getTabs()}
          </Container>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default TabGeneric
