import * as React from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon';
import * as Theme from './Theme'

export const DEFAULT_RADIUS = 24;

export interface StatusCardProps {
  value: number,
  caption: string,
  color?: string,
  borderTopColor?: string,
  theme: Theme.StatusCardThemeProps
}

interface StyleProps {
  backgroundColor?: string,
  color?: string,
  borderTopColor?: string,
  theme?: Theme.StatusCardThemeProps
}

const Root = styled.div`
  width: 250px;
  height: 120px;
  background-color: ${(props: StyleProps) => props.backgroundColor};
  border-top: solid 5px ${(props: StyleProps) => props.borderTopColor};
  box-shadow: 1px 1px 1px 0px ${(props: StyleProps) => props.theme.boxShadowColor};
  color: ${(props: StyleProps) => props.color};
  box-sizing: content-box;
`;

const Left = styled.div`
  float: left;
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: StyleProps) => props.backgroundColor};
  box-sizing: content-box;
`;

const Right = styled.div`
  float: left;
  width: 67%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: content-box;
`;

const RightSpan = styled.span`
  align-self: flex-start;
  padding-left: 30px;
  margin-top: -3px;
`;

const ValueSpan = styled(RightSpan)`
  font-size: 4.7rem;
`;
const CaptionSpan = styled(RightSpan)`
  font-size: 1.8rem;
`;

const StatusCard: React.SFC<StatusCardProps> = (props: StatusCardProps) => {
  return (
    <Root
      backgroundColor={props.theme.BGColorRight}
      color={props.color}
      borderTopColor={props.borderTopColor}
      theme={props.theme}
    >
      <Left
        backgroundColor={props.theme.BGColorLeft}
      >
        <FontIcon
          className={'material-icons'}
          style={{'text-align': 'center', 'font-size': '4.7rem', color: props.color}}
          title={'cloud'}
        >
          cloud
        </FontIcon>
      </Left>
      <Right>
        <ValueSpan>{props.value}</ValueSpan>
        <CaptionSpan>{props.caption}</CaptionSpan>
      </Right>
    </Root>
  )
}

export default StatusCard

StatusCard.defaultProps = {
  color: 'gray',
  borderTopColor: 'blue',
  theme: Theme.DEFAULT_THEME
}
