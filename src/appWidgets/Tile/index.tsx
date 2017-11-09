import * as React from 'react'
import * as Theme from './Theme';
import styled from 'styled-components';

interface FrameViewProps {
  edgeSize: string;
  bgColor: string;
  fontColor: string;
  shadow: string;
}

const FrameView = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(prop: FrameViewProps) => prop.edgeSize};
  height: ${(prop: FrameViewProps) => prop.edgeSize};
  background-color: ${(prop: FrameViewProps) => prop.bgColor};
  color: ${(prop: FrameViewProps) => prop.fontColor};
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  box-shadow: ${(prop: FrameViewProps) => prop.shadow};;
`;

const Icon = styled.i`
  font-size: 3rem;
  margin-bottom: 15%;
`;

export interface TileProps {
  title: string;
  icon: string;
  bgColor: string;
  size?: string;
  isActive?: boolean;
  theme?: Theme.ThemeProps
}

export interface TileState {
  isActive: boolean;
}

class Tile extends React.Component<TileProps, TileState> {
  static defaultProps: Partial<TileProps> = {
    theme: Theme.defaultTheme,
    size: '7rem',
    isActive: true,
  }

  constructor (props: TileProps) {
    super(props);

    this.state = {
      isActive: false,
    }
  }

  componentWillMount() {
    this.setState({
      isActive: this.props.isActive,
    })
  }

  render() {
    return (
      <FrameView
        onClick={() => this.setState({isActive: !this.state.isActive})}
        edgeSize={this.props.size}
        bgColor={this.state.isActive ? this.props.bgColor : this.props.theme.unActiveBgColor}
        fontColor={!this.state.isActive ? this.props.theme.unActiveTextColor : this.props.theme.activeTextColor}
        shadow={this.state.isActive ? '0px 0px 0px 3px ' + this.props.theme.shadow : 'none'}
      >
        <Icon className="material-icons">{this.props.icon}</Icon>
        {this.props.title}
      </FrameView>
    )}
}

export default Tile;
