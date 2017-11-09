import * as RoundCardTheme from '../RoundedCard/Theme'
import * as PivotPointTheme from '../PivotPoint/Theme'

export interface GraphicTimelineThemeProps {
  roundedCard: RoundCardTheme.RoundedCardThemeProps
  pivots: {
    left: PivotPointTheme.PivotPointThemeProps,
    center: PivotPointTheme.PivotPointThemeProps,
    right: PivotPointTheme.PivotPointThemeProps,
  },
  pipeBG: string,
  boxShadowColor: string,
}

export const DEFAULT_THEME: GraphicTimelineThemeProps = {
  roundedCard: {
    frameBGColor: '#e9edf6',
    topBGColor: '#3bc8e0',
    bottomBGColor: '#e9edf6',
    boxShadowColor: 'rgba(0,0,0,0.3)'
  },
  pivots: {
    left: PivotPointTheme.EDGE_DEFAULT_THEME,
    center: PivotPointTheme.MIDDLE_DEFAULT_THEME,
    right: PivotPointTheme.EDGE_DEFAULT_THEME,
  },
  pipeBG: 'white',
  boxShadowColor: 'rgba(0,0,0,0.3)'
}
