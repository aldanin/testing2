import * as GenericElementColors from './GenericElementColors'

export interface SingleStatusColorTheme {
  color: string,
  borderTopColor?: string,
  backgroundColor?: string,
}

export interface TaskStatusColorsTheme {
  aborted: SingleStatusColorTheme,
  completed: SingleStatusColorTheme,
  running: SingleStatusColorTheme,
  scheduled: SingleStatusColorTheme,
  pending: SingleStatusColorTheme,
  canceled: SingleStatusColorTheme,
  success: SingleStatusColorTheme,
  failed: SingleStatusColorTheme,
  partial: SingleStatusColorTheme,
  default: SingleStatusColorTheme,
}

export const TASK_STATUS_COLORS_DEFAULT_THEME: TaskStatusColorsTheme = {
  aborted: {
    color: '#757ab7',
    borderTopColor: '#757ab7',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  completed: {
    color: '76ae37',
    borderTopColor: '#86c043',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  running: {
    color: '#43a9d3',
    borderTopColor: '#3e99c8',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  scheduled: {
    color: '#3a4d95',
    borderTopColor: '#3a4d95',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  pending: {
    color: '#a1bcde',
    borderTopColor: '#a1bcde',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  canceled: {
    color: 'gray',
    borderTopColor: 'gray',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  success: {
    color: 'gray',
    borderTopColor: 'gray',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  failed: {
    color: '#cb3b39',
    borderTopColor: '#cb3b39',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  partial: {
    color: '#d9a20e',
    borderTopColor: '#d9a20c',
    backgroundColor: GenericElementColors.DEFAULT_THEME.defaultBG
  },
  default: {
    color: '#c5cce2',
    borderTopColor: '#8ba7e9',
    backgroundColor: '#dee2e5'
  },
}
