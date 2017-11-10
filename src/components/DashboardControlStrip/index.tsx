import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import * as Theme from './Theme'
import * as moment from 'moment'
import TabGeneric from '../../appWidgets/TabGeneric'
import FiltersStrip from '../FiltersStripComponent'
import * as TaskBasics from '../../types/TaskBasics'
import * as Task from '../../types/Task'

export interface DashboardControlStripProps {
  onDisplaySelected: (timeSlot: TaskBasics.TimeSlotType, currentDisplayDatesSpanFactorInHours: number) => void,
  onServiceSelected: (service: Task.ServiceTypeFilter) => void,
  withViewSelector?: boolean,
  theme?: Theme.ThemeProps,
}

const ControlStrip = styled.div`
  height: 3.5rem;
  width: calc(100% - 60px);
  margin: auto;
  margin-top: 20px;
  display: flex;
`;

const ControlStripChild = styled.div`
  background-color: ${(props) => props.theme.BGColor};
  border-radius: 3px;
  margin-right: 3px;
`;

const FilterWrap = styled(ControlStripChild)`
  height: 100%;
  flex-grow: 1;
`;

const SelectorsContainer = styled.div`
  flex-shrink: 0;
`;

const SelectorWrap = styled(ControlStripChild)`
  display: inline-block;
  position: relative;
  font-size: 1.2rem;
  padding: 0px 15px;
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.BGColor};
`;

const SelectorWrapInner = styled(ControlStripChild)`
  padding: 5px 0;
  height: 100%;
`;

const ControlStripCaption = styled.span`
  color: ${(props) => props.theme.captionColor};
  padding-right: 1.2rem;
`;

const getDisplaySelector = (props: DashboardControlStripProps) => {
  const viewerModeTabs = [{
    title: 'Month',
    callback: () => props.onDisplaySelected('Month', moment().daysInMonth() * 24)
  }, {
    title: 'Week',
    callback: () => props.onDisplaySelected('Week', 7 * 24)
  }, {
    title: 'Day',
    callback: () => props.onDisplaySelected('Day', 24)
  }];

  return (
    <SelectorWrap theme={props.theme}>
      <SelectorWrapInner theme={props.theme}>
        <ControlStripCaption>Display:</ControlStripCaption>
        <TabGeneric
          tabs={viewerModeTabs}
          initialSelectedIndex={0}
          theme={props.theme.selectorTabs}
          isDisabled={!props.withViewSelector}
        />
      </SelectorWrapInner>
    </SelectorWrap>
  )
}

const getServiceSelector = (props: DashboardControlStripProps) => {
  const viewerModeTabs = [{
    title: 'All',
    callback: () => props.onServiceSelected('All'),
  }, {
    title: 'PazInc',
    callback: () => props.onServiceSelected('PazInc'),
  }, {
    title: 'DorAlon',
    callback: () => props.onServiceSelected('DorAlon'),
  }];

  return (
    <SelectorWrap theme={props.theme}>
      <SelectorWrapInner theme={props.theme}>
        <ControlStripCaption>Service:</ControlStripCaption>
        <TabGeneric
          tabs={viewerModeTabs}
          initialSelectedIndex={2}
          theme={props.theme.selectorTabs}
        />
      </SelectorWrapInner>
    </SelectorWrap>
  )
}

const DashboardControlStrip:
  React.SFC<DashboardControlStripProps> = (props: DashboardControlStripProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <ControlStrip>
        <SelectorsContainer>
          {getDisplaySelector(props)}
          {getServiceSelector(props)}
        </SelectorsContainer>
        <FilterWrap theme={props.theme}>
          <FiltersStrip selectType={(value) => null}/>
        </FilterWrap>
      </ControlStrip>
    </ThemeProvider>
  )
}

export default DashboardControlStrip

DashboardControlStrip.defaultProps = {
  withViewSelector: true,
  theme: Theme.DEFAULT_THEME
}
