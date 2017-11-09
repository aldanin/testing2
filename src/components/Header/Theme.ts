export interface ThemeProps {
  textColor: string,
  highlightColor: string,
  backgroundImage: string,
  badgeBgColor: string,
  badgeTextColor: string,
}

export const defaultTheme = {
  textColor: '#fff',
  highlightColor: 'orange',
  backgroundImage: 'linear-gradient( 5deg, rgb(72, 168, 198), rgb(30, 120, 160) )',
  badgeTextColor: '#fff',
  badgeBgColor: '#f00',
}
