import * as React from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { TabsThemeProps, DEFAULT_THEME } from './Theme';

const TAB_PADDING_TOP = 7;
const TAB_PADDING_BOTTOM = 15;

const Root = styled.div`
  height: 100%;
`;

const TabStripContainer = styled.div`
  background: transparent;
  color: ${(props: StyleProps) => props.theme.tabColor};
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: bold;
`
const Tab = styled.div`
  padding: ${TAB_PADDING_TOP}px 30px ${TAB_PADDING_BOTTOM}px 30px;
  display: inline-block;
  cursor: pointer;
  position: relative;
  background-color: ${(props: StyleProps) => props.theme.tabBGColor};
  top: 1px; 
  font-size: 1.6rem;
  font-weight: lighter;
  border: solid 1px transparent;
  border-top: 4px solid transparent;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: -4px;
    left: 0;
  }

  &.selected {
    background-color: ${(props: StyleProps) => props.theme.selectedTabBGColor};
    color: ${(props: StyleProps) => props.theme.selectedTabColor};
    z-index: 3;
    box-shadow: 0px -2px 2px 0px gainsboro;
    border-left: solid 1px gainsboro;
  }
  
  &.selected::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #3bd3ff, #1389ab);
    top: -4px;
    left: 0;
  }
`;
///////////
const ViewContent = styled.div`
  width: 100%;
  height: calc(100% - ${TAB_PADDING_TOP}px - ${TAB_PADDING_BOTTOM}px - 1.6rem);
  position: relative;
  box-shadow: 5px 4px 6px 0px #b5b5b5;
  background-color: ${props => 'white'};
  border: solid 1px #eaeaea;
  border-right: none;
  border-bottom: none;
  border-left-color: #d8d8d8;
`;

const TabInnerSpan = styled.span`
  vertical-align: middle; 
`;

export interface TabDetails {
  title: string;
  callback: Function;
}

export interface TabstripComponentProps extends React.Props<TabstripComponent> {
  tabs: TabDetails[];
  views: JSX.Element[];
  tabHeight?: string;
  selectedTabIndex: number;
  theme?: TabsThemeProps;
}

interface StyleProps {
  height?: number,
  theme: TabsThemeProps
}

export interface TabstripComponentState {
  activeIndex: number;
}

class TabstripComponent extends React.Component<TabstripComponentProps, TabstripComponentState> {
  static defaultProps: Partial<TabstripComponentProps> = {
    tabHeight: '30px',
    theme: DEFAULT_THEME,
  }

  constructor(props: TabstripComponentProps) {
    super(props)

    this.state = {
      activeIndex: this.props.selectedTabIndex,
    }
  }

  // componentWillReceiveProps(nextProps: TabstripComponentProps) {
  //   if (nextProps.selectedIndex && nextProps.selectedIndex !== this.state.activeIndex) {
  //     const newActiveTab = nextProps.selectedIndex
  //     if (newActiveTab !== this.state.activeIndex) {
  //       if (newActiveTab !== undefined && newActiveTab >= 0 && newActiveTab < this.props.tabs.length) {
  //         this.setState({activeIndex: nextProps.selectedIndex})
  //       }
  //     }
  //   }
  // }

  onClick = (ev, idx) => {
    ev.preventDefault();
    this.setState({activeIndex: idx});
    this.props.tabs[idx].callback();
  }

  getTabs() {
    return this.props.tabs.map((tab, idx) => (
        <Tab
          key={tab.title}
          onClick={(ev) => this.onClick(ev, idx)}
          className={this.state.activeIndex === idx ? 'selected' : ''}
          theme={this.props.theme}
        >
          <TabInnerSpan>{tab.title}</TabInnerSpan>
        </Tab>
      )
    )
  }

  renderView = () => {
    return <ViewContent>{this.props.views[this.state.activeIndex]}</ViewContent>;
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Root theme={this.props.theme}>
          <TabStripContainer theme={this.props.theme}>
            {this.getTabs()}
          </TabStripContainer>
          {this.renderView()}
        </Root>
      </ThemeProvider>
    )
  }
}

export default TabstripComponent
