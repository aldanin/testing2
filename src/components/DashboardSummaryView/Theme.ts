import * as RoundedCardTheme from '../../appWidgets/RoundedCard/Theme'
import * as GraphicTimeline from '../../appWidgets/GraphicTimeline/Theme'
import * as TaskBarChartTheme from '../../appWidgets/TasksBarChart/Theme'
import * as TaskStatusTheme from '../../appWidgets/GenericColorThemes/TaskStatusColors'
import * as GenericTextColors from '../../appWidgets/GenericColorThemes/GenericTextColors'
import * as DashboardControlStripTheme from '../DashboardControlStrip/Theme'

export interface ThemeProps {
  genericTextColors: GenericTextColors.GenericTextColorsTheme,
  controlStrip: DashboardControlStripTheme.ThemeProps,
  roundedCard: RoundedCardTheme.RoundedCardThemeProps,
  graphicTimeline: GraphicTimeline.GraphicTimelineThemeProps,
  taskStatusColors: TaskStatusTheme.TaskStatusColorsTheme,
  taskBarChart: TaskBarChartTheme.TasksBarChartThemeProps
}

export const DEFAULT_THEME: ThemeProps = {
  genericTextColors: GenericTextColors.THEME_DEFAULT,
  controlStrip: DashboardControlStripTheme.DEFAULT_THEME,
  graphicTimeline: GraphicTimeline.DEFAULT_THEME,
  roundedCard: RoundedCardTheme.DEFAULT_THEME,
  taskStatusColors: TaskStatusTheme.TASK_STATUS_COLORS_DEFAULT_THEME,
  taskBarChart: TaskBarChartTheme.DEFAULT_THEME
};
