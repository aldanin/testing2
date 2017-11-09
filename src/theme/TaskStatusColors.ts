import {
  TEXT_COLORS,
  BACKGROUND_COLORS
} from './constants'
import { genericElementColors } from './GenericElementColors'

export const taskStatusColors = {
  aborted: {
    color: TEXT_COLORS.T19, // '#6b7080',
    borderTopColor: BACKGROUND_COLORS.B31, // '#6b7080',
    backgroundColor: genericElementColors.defaultBG
  },
  completed: {
    color: BACKGROUND_COLORS.B25, // '#76ae37',
    borderTopColor: BACKGROUND_COLORS.B25, // '#86c043',
    backgroundColor: genericElementColors.defaultBG
  },
  running: {
    color: BACKGROUND_COLORS.B22, // '#27B8E2',
    borderTopColor: BACKGROUND_COLORS.B21, // '#2cbbdc',
    backgroundColor: genericElementColors.defaultBG
  },
  scheduled: {
    color: TEXT_COLORS.T17,
    borderTopColor: TEXT_COLORS.T17,
    backgroundColor: genericElementColors.defaultBG
  },
  pending: {
    color: TEXT_COLORS.T17,
    borderTopColor: BACKGROUND_COLORS.B09, // '#a1bcde',
    backgroundColor: genericElementColors.defaultBG
  },
  canceled: {
    color: TEXT_COLORS.T07,
    borderTopColor: TEXT_COLORS.T07,
    backgroundColor: genericElementColors.defaultBG
  },
  success: {
    color: BACKGROUND_COLORS.B25,
    borderTopColor: BACKGROUND_COLORS.B25,
    backgroundColor: genericElementColors.defaultBG
  },
  failed: {
    color: TEXT_COLORS.T18, // '#cb3b39',
    borderTopColor: TEXT_COLORS.T18, // '#cb3b39',
    backgroundColor: genericElementColors.defaultBG
  },
  partial: {
    color: '#d9a20e',
    borderTopColor: '#d9a20c',
    backgroundColor: genericElementColors.defaultBG
  },
  default: {
    color: TEXT_COLORS.T17, // '#c5cce2',
    borderTopColor: TEXT_COLORS.T17, // '#8ba7e9',
    backgroundColor: BACKGROUND_COLORS.B04
  },
}
