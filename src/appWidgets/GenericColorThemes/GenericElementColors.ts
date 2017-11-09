export interface ThemeProps {
  disabled: {
    BG: string,
    text: string
  },
  defaultBG: string,
}

export const DEFAULT_THEME: ThemeProps = {
  disabled: {
    BG: 'light-gray',
    text: 'gray'
  },
  defaultBG: 'white',
}
