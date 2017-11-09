import * as React from 'react'
import PivotPoint, { DEFAULT_RADIUS as DEFAULT_PIVOT_RADIUS } from '../PivotPoint'
import styled from 'styled-components'
import RoundedCard from '../RoundedCard'
import * as Theme from './Theme'
import * as moment from 'moment'

const ADDITIONAL_CONTENT_HEIGHT = 40;

export interface GraphicTimelineProps {
  dates: number[], // 3 dates around now
  scale?: number, // 0.1 - 1;
  topLeftElement?: JSX.Element,
  topRightElement?: JSX.Element,
  bottomLeftElement?: JSX.Element,
  bottomRightElement?: JSX.Element,
  theme?: Theme.GraphicTimelineThemeProps,
}

interface StyleProps {
  height?: number,
  pipeWidth?: number,
  heightReduction?: number,
  yPipeLeft?: string,
  xPipeTop?: number,
  xPosition?: number // left/right of content container
  theme?: Theme.GraphicTimelineThemeProps
}

export interface InfoLineProps {
  side?: 'right' | 'left',
  left?: string,
  fontSize?: string,
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative; 
`;

const XAxis = styled.div`
  position: relative;
  width: 100%;
  z-index: 2; 
  overflow: hidden;
  top: -2px;
`;

const Pipe = styled.div`
  background-color: ${(props: StyleProps) => props.theme.pipeBG};
  box-shadow: 1px 0px 6px 0px ${(props: StyleProps) => props.theme.boxShadowColor};
  position: relative;
`;

const XPipe = styled(Pipe)`
  width: calc(100% - 10px);
  height: ${(props: StyleProps) => props.pipeWidth}px;
  top: ${(props: StyleProps) => props.xPipeTop}px;
  margin: auto;
  box-shadow: 1px 4px 5px 1px ${(props: StyleProps) => props.theme.boxShadowColor};
  border-top: solid 1px #e4e2e2;
`;

const YPipe = styled(Pipe)`
  width: ${(props: StyleProps) => props.pipeWidth}px;
  height: calc(100% - ${(props: StyleProps) => props.heightReduction}px - 1.8rem - 1.5rem - 40px);
  left: ${(props: StyleProps) => props.yPipeLeft};
  box-shadow: 1px 5px 6px 0px ${(props: StyleProps) => props.theme.boxShadowColor};
  top: -1px;
`;

const TopContentContainer = styled.div`
  position: absolute;
  height: ${(props: StyleProps) => props.height}px;
  left:  ${(props: StyleProps) => props.xPosition}px;
  right: ${(props: StyleProps) => props.xPosition}px;
  top: 0;
`;

const BottomContentContainer = styled.div`
  position: absolute;
  height: calc(100% - ${(props: StyleProps) => props.heightReduction}px - 1.8rem - 1.5rem - 40px);
  left:  ${(props: StyleProps) => props.xPosition}px;
  right: ${(props: StyleProps) => props.xPosition}px;
`;

const LeftContent = styled.div`
  float: left;
  width: calc(100% / 2 - 5px);
  height: 100%;
`;

const RightContent = styled.div`
  float: right;
  width: calc(100% / 2 - 5px);
  height: 100%;
`;

const PivotContainer = styled.div`
  width: auto;
  position: relative;
  //height: calc(1.8rem + 1.5rem - 15px);
`;

const DatesInfoLine = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const DateInfoWrap = styled.div`
  width: 10rem;
  text-align: ${(props: InfoLineProps) => props.side};
  float: ${(props: InfoLineProps) => props.side}
`;

const DateInfoWrapCenter = styled(DateInfoWrap)`
  width: 10rem;
  position: absolute;
  left: ${(props: InfoLineProps) => props.left};
  top: 0;
  float: none;
  text-align: center;
`;

const DateCaption = styled.div`
  font-size: ${(props: InfoLineProps) => props.fontSize};
`;

const HourCaption = styled.div`
  margin-top: 5px;
  font-size: ${(props: InfoLineProps) => props.fontSize};
  color: gray;
`;

const GraphicTimeline: React.SFC<GraphicTimelineProps> = (props) => {
  const roundCardRadius = Math.max(170 * props.scale, 95);
  const pipeWidth = Math.max(9 * props.scale, 8);
  const roundCardRimWidth = Math.max(9 * props.scale, 6);
  const roundCardLeft = `calc(50% - ${Math.round(roundCardRadius / 2)}px)`;
  const pivotPointRadius = Math.max(DEFAULT_PIVOT_RADIUS * props.scale, 10);
  const middleDateInfoREMSize = Math.max(10 * props.scale, 5);

  const middlePivotPointLeft = `calc(50% - ${Math.round(pivotPointRadius / 2) + 1}px)`;
  const middleDateInfoLeft = `calc(50% - ${middleDateInfoREMSize / 2}rem)`;
  const yPipeHeightReduction = 228;
  const yPipeLeft = `calc(50% - ${Math.round(pipeWidth / 2 + 1)}px)`;
  const xPipeTop = -Math.max(Math.ceil(DEFAULT_PIVOT_RADIUS * props.scale / 2 + pipeWidth / 2 + 2), 13);
  const topContentHeight = roundCardRadius + ADDITIONAL_CONTENT_HEIGHT;
  const bottomContentHeightReduction =
    yPipeHeightReduction - Math.ceil(pivotPointRadius / 2) + Math.ceil(pipeWidth / 2);
  const xPosition = pivotPointRadius - 8;
  //
  // font size scaling:
  //
  const mainRoundCardValueFontSize = `${Math.max(4.5 * props.scale, 3)}rem`;
  const mainRoundCardCaptionFontSize = `${Math.max(2 * props.scale, 1.1)}rem`;
  const mainRoundCardIconFontSize = `${Math.max(4 * props.scale, 2.8)}rem`;
  const dateCaptionFontSize = `${Math.max(1.8 * props.scale, 1)}rem`;
  const hourCaptionFontSize = `${Math.max(1.5 * props.scale, 0.9)}rem`;

  return (
    <Root>
      <RoundedCard
        value={20}
        caption={'Running'}
        iconName={'cloud'}

        color={'white'}
        fontSizes={{
          value: mainRoundCardValueFontSize,
          caption: mainRoundCardCaptionFontSize,
          icon: mainRoundCardIconFontSize,
        }}
        style={{
          position: 'relative',
          left: roundCardLeft,
          zIndex: 0,
        }}
        radius={roundCardRadius}
        rimWidth={roundCardRimWidth}
        isShadowed={true}
        theme={props.theme.roundedCard}
      />
      <TopContentContainer
        height={topContentHeight}
        xPosition={xPosition}
      >
        <LeftContent>{props.topLeftElement}</LeftContent>
        <RightContent>{props.topRightElement}</RightContent>
      </TopContentContainer>
      <BottomContentContainer
        heightReduction={bottomContentHeightReduction}
        xPosition={xPosition}
      >
        <LeftContent>{props.bottomLeftElement}</LeftContent>
        <RightContent>{props.bottomRightElement}</RightContent>
      </BottomContentContainer>
      <YPipe
        pipeWidth={pipeWidth}
        heightReduction={yPipeHeightReduction}
        yPipeLeft={yPipeLeft}
        theme={props.theme}
      />
      <XAxis>
        <PivotContainer style={{float: 'left'}}>
          <PivotPoint

            radius={pivotPointRadius}
            scale={props.scale}
            theme={props.theme.pivots.left}
          />
        </PivotContainer>
        <PivotContainer
          style={{
            position: 'absolute',
            left: middlePivotPointLeft,
            top: '0'
          }}
        >
          <PivotPoint
            radius={pivotPointRadius}
            scale={props.scale}
            theme={props.theme.pivots.center}
          />
          <div>alon</div>
        </PivotContainer>
        <PivotContainer style={{float: 'right'}}>
          <PivotPoint

            radius={pivotPointRadius}
            scale={props.scale}
            theme={props.theme.pivots.right}
          />
        </PivotContainer>
      </XAxis>
      <XPipe
        pipeWidth={pipeWidth}
        xPipeTop={xPipeTop}
        theme={props.theme}
      />
      <DatesInfoLine>
        <DateInfoWrap side={'left'}>
          <DateCaption fontSize={dateCaptionFontSize}>
            {moment(props.dates[0]).format('DD.MM.YYYY')}
          </DateCaption>
          <HourCaption fontSize={hourCaptionFontSize}>
            {moment(props.dates[0]).format('HH:mm')}
            </HourCaption>
        </DateInfoWrap>
        <DateInfoWrapCenter left={middleDateInfoLeft}>
          <DateCaption fontSize={dateCaptionFontSize}>
            {moment(props.dates[1]).format('DD.MM.YYYY')}
            </DateCaption>
          <HourCaption fontSize={hourCaptionFontSize}>
            {moment(props.dates[1]).format('HH:mm')}
            </HourCaption>
        </DateInfoWrapCenter>
        <DateInfoWrap side={'right'}>
          <DateCaption fontSize={dateCaptionFontSize}>
            {moment(props.dates[2]).format('DD.MM.YYYY')}
            </DateCaption>
          <HourCaption fontSize={hourCaptionFontSize}>
            {moment(props.dates[2]).format('HH:mm')}
            </HourCaption>
        </DateInfoWrap>
      </DatesInfoLine>

    </Root>
  )
}

export default GraphicTimeline

GraphicTimeline.defaultProps = {
  scale: 1,
  dates: [moment().valueOf(), moment().valueOf(), moment().valueOf()],
  topLeftElement: null,
  topRightElement: null,
  bottomLeftElement: null,
  bottomRightElement: null,
  theme: Theme.DEFAULT_THEME
}
