import * as React from 'react'
import styled from 'styled-components'
import * as Theme from './Theme'

export const DEFAULT_RADIUS = 24;

export interface PivotPointProps {
  scale?: number,
  backgroundColor?: string,
  radius?: number,
  theme?: Theme.PivotPointThemeProps,
}

const Root = styled.div`
  position: relative;
  width: ${(props: PivotPointProps) => props.radius}px;
  height: ${(props: PivotPointProps) => props.radius}px;
  border-radius: ${(props: PivotPointProps) => props.radius}px;
  background-color: ${(props: PivotPointProps) => props.theme.frameColor};
  border: solid 1px #eaeaea;
  box-shadow: 1px 1px 2px 0px #dcdcdc;
`;
const Inner = styled.div`
  position: absolute;
  width: ${(props: PivotPointProps) => props.radius}px;
  height: ${(props: PivotPointProps) => props.radius}px;
  border-radius: ${(props: PivotPointProps) => props.radius}px;
  background-color: ${(props: PivotPointProps) => props.theme.BGColor};
  border: solid 1px #eaeaea;
  left: 50%;
  top: 50%;
  margin-top: ${(props: PivotPointProps) => -Math.ceil(props.radius / 2) - 1}px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: ${(props: PivotPointProps) => -Math.ceil(props.radius / 2) - 1}px;
  box-sizing: content-box;
`;

const PivotPoint: React.SFC<PivotPointProps> = (props: PivotPointProps) => {
  const radius = Math.max(Math.ceil(DEFAULT_RADIUS * props.scale), 15);
  const innerRadius = radius - Math.max(Math.ceil(8 * props.scale), 4);
  return (
    <Root radius={radius} theme={props.theme}>
      <Inner radius={innerRadius} theme={props.theme}/>
    </Root>
  )
}

export default PivotPoint

PivotPoint.defaultProps = {
  backgroundColor: '#9f9fb9',
  scale: 1,
  radius: 24,
  theme: Theme.EDGE_DEFAULT_THEME
}
