import * as React from 'react'
import * as Redux from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap which is needed for material-ui
injectTapEventPlugin();

interface RootProps {
  store: Redux.Store<object>;
}

// Normalize some styles
// see https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
const muiTheme = getMuiTheme({
  palette: {
  },
  flatButton: {
    textTransform: 'none',
  },
  appBar: {
  },
});

const Root: React.SFC<RootProps> = ({ store, children }) => (
  <ThemeProvider theme={{}}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        {children}
      </Provider>
    </MuiThemeProvider>
  </ThemeProvider>
)

export default Root
