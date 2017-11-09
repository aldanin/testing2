export interface TasksPinsChartThemeProps {
  barColors: {
    aborted: string,
    success: string,
    partial: string,
    failed: string,
    pending: string,
    scheduled: string,
    canceled: string,
  }
}

export const DEFAULT_THEME:  TasksPinsChartThemeProps = {
  barColors: {
    aborted: '#6b7080',
    success: '#76ae37',
    partial: '#d9a20e',
    failed: '#cb3b39',
    pending: '#6576ae',
    scheduled: '#6576ae',
    canceled: 'gray',
  }
}
