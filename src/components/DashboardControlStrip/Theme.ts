import * as TabGenericTheme from '../../appWidgets/TabGeneric/Theme'

export interface ThemeProps {
  BGColor: string,
  selectorTabs: TabGenericTheme.TabsThemeProps,
  captionColor: string,
}

export const DEFAULT_THEME = {
  BGColor: 'silver',
  selectorTabs: TabGenericTheme.DEFAULT_THEME,
  captionColor: '#263238'
}
