import * as React from 'react'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon';
import * as Theme from './Theme'

export const DEFAULT_RADIUS = 170;

export interface RoundedCardProps {
  value: number,
  caption: string,
  iconName: string,
  color?: string,
  fontSizes?: {
    value: string,
    caption: string,
    icon: string,
  },
  radius?: number,
  rimWidth?: number,
  style?: React.CSSProperties,
  isShadowed?: boolean,
  theme: Theme.RoundedCardThemeProps,
}

interface CircleStyleProps {
  backgroundColor?: string,
  radius?: number,
  rimWidth?: number,
  color?: string,
  fontSize?: string,
  style?: React.CSSProperties,
  isShadowed?: boolean,
  theme: Theme.RoundedCardThemeProps,
}

interface TextStyle {
  fontSize: string
}

const Root = styled.div`
  position: relative;
  width: ${(props: CircleStyleProps) => props.radius}px;
  height: ${(props: CircleStyleProps) => props.radius}px;
  min-width: ${(props: CircleStyleProps) => props.radius}px;
  min-height: ${(props: CircleStyleProps) => props.radius}px;
  border-radius: ${(props: CircleStyleProps) => props.radius}px;
  background-color: ${(props: CircleStyleProps) => props.theme.frameBGColor};
  border: solid 1px #eaeaea;
  box-shadow: ${(props: CircleStyleProps) => props.isShadowed 
    ? `1px 4px 12px 0px ${props.theme.boxShadowColor}` 
    : 'none'};
  box-sizing: border-box;
  padding: ${(props: CircleStyleProps) => props.rimWidth}px;
`;
const Inner = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  border: none;
  overflow: hidden;
`;

const UpperData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60%;
  width: 100%;
  background: ${(props: CircleStyleProps) => props.theme.topBGColor};
  text-align: center;
  color: ${(props: CircleStyleProps) => props.color};
`;

const LowerData = styled.div`
  height: 40%;
  width: 100%;
  background: ${(props: CircleStyleProps) => props.theme.bottomBGColor};
  text-align: center;
  color: ${(props: CircleStyleProps) => props.color};
`;

const ValueSpan = styled.span`
  font-size: ${(props: TextStyle) => props.fontSize};
  // padding-top: 10px;
  display: block;
`;
const CaptionSpan = styled.span`
  font-size: ${(props: TextStyle) => props.fontSize};
  display: block;
`;

const RoundedCard: React.SFC<RoundedCardProps> = (props: RoundedCardProps) => {

  return (
    <Root
      style={props.style}
      radius={props.radius}
      isShadowed={props.isShadowed}
      rimWidth={props.rimWidth}
      theme={props.theme}
    >
      <Inner>
        <UpperData
          color={props.color}
          theme={props.theme}
        >
          <ValueSpan fontSize={props.fontSizes.value}>{props.value}</ValueSpan>
          <CaptionSpan fontSize={props.fontSizes.caption}>{props.caption}</CaptionSpan>
        </UpperData>
        <LowerData
          theme={props.theme}
          color={props.color}
        >
          <FontIcon
            className={'material-icons'}
            style={{'text-align': 'center', 'font-size': props.fontSizes.icon, color: props.color}}
            title={'cloud'}
          >
            cloud
          </FontIcon>
        </LowerData>
      </Inner>
    </Root>
  )
}

export default RoundedCard

RoundedCard.defaultProps = {
  radius: DEFAULT_RADIUS,
  rimWidth: 10,
  color: 'black',
  fontSizes: {
    value: '2.8rem',
    caption: '1.2rem',
    icon: '2.7rem',
  },
  style: null,
  isShadowed: false,
  theme: Theme.DEFAULT_THEME,
}
