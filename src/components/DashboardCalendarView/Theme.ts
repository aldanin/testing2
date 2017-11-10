import * as RoundedCardTheme from '../../appWidgets/RoundedCard/Theme'
import * as GraphicTimeline from '../../appWidgets/GraphicTimeline/Theme'
import * as TaskBarChartTheme from '../../appWidgets/TasksBarChart/Theme'
import * as DateChooser from '../../appWidgets/DateChooser/Theme'
import * as AgentDashboardControlStripTheme from '../DashboardControlStrip/Theme'
import * as TaskStatusTheme from '../../appWidgets/GenericColorThemes/TaskStatusColors'
import * as GenericTextColors from '../../appWidgets/GenericColorThemes/GenericTextColors'

export interface ThemeProps {
  genericTextColors: {
    textColor: string,
    textColorLink: string,
    textColorPale: string,
    borderColor: string,
  },
  controlStrip: AgentDashboardControlStripTheme.ThemeProps,
  dateChooser: DateChooser.ThemeProps,
  roundedCard: RoundedCardTheme.RoundedCardThemeProps,
  graphicTimeline: GraphicTimeline.GraphicTimelineThemeProps,
  taskStatusColors: TaskStatusTheme.TaskStatusColorsTheme,
  taskBarChart: TaskBarChartTheme.TasksBarChartThemeProps,
  grid: {
    header: {
      color: string,
    },
    body: {
      color: string,
      rowTitleColor: string,
    }
  }
}

export const DEFAULT_THEME: ThemeProps = {
  genericTextColors: {
    textColorLink: 'black',
    textColorPale: '#9fa1a2',
    textColor: '#263238',
    borderColor: '#E9EDF6',
  },
  dateChooser: DateChooser.DEFAULT_THEME,
  controlStrip: AgentDashboardControlStripTheme.DEFAULT_THEME,
  graphicTimeline: GraphicTimeline.DEFAULT_THEME,
  roundedCard: RoundedCardTheme.DEFAULT_THEME,
  taskStatusColors: TaskStatusTheme.TASK_STATUS_COLORS_DEFAULT_THEME,
  taskBarChart: TaskBarChartTheme.DEFAULT_THEME,
  grid: {
    header: {
      color: GenericTextColors.THEME_DEFAULT.textColorPale,
    },
    body: {
      color: GenericTextColors.THEME_DEFAULT.textColor,
      rowTitleColor:  GenericTextColors.THEME_DEFAULT.textColorPale,
    }
  }
};
