import * as React from 'react'
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Moment } from 'moment';
// import moment = require('moment');
import * as moment from 'moment';
import * as Theme from './Theme'

export interface DateChooserProps extends React.Props<DateChooser> {
  manualMode?: boolean; // State is handled outside the component
  startDate: number,
  daySpan?: number,
  changeDate: (date: number) => void,
  theme: Theme.ThemeProps
}

export interface DateChooserState {
  isDatePickerOpen: boolean,
  startDate: number,
}

const WeeklyDateNavigation = styled.div`
  display: flex;
`;

const DatePickerContainer = styled.div`
  cursor: pointer;
`;

const PreviousDaySpan = styled.div`
  margin-right: 10px;
  font-size: 2.2rem;
  line-height: 1.2rem;
  cursor: pointer;
`;

const NextDaySpan = styled.div`
  margin-left: 10px;
  font-size: 2.2rem;
  line-height: 1.2rem;
  cursor: pointer;
`;

const DateChooserRoot = styled.div`
  white-space: nowrap;
  font-size: 1.5rem;
  white-space: nowrap;
  line-height: 1.2rem;
  color: ${prop => prop.theme.textColor};
`;
const TodayContainer = styled.div`
  position: relative;
  // top: 2px;
  // margin-right: 0.5%;
  font-size: 1.2rem;
  color: ${prop => prop.theme.textColor};
  cursor: pointer;
`;

class DateChooser extends React.Component<DateChooserProps, DateChooserState> {
  static defaultProps: Partial<DateChooserProps> = {
    daySpan: 7,
    manualMode: false,
  }

  constructor(props: DateChooserProps) {
    super(props)

    this.state = {
      isDatePickerOpen: false,
      startDate: 1,
    }
  }

  changeDate(daysToMove: number) {
    let momentTime;
    if (daysToMove !== 0) {
      let time = this.state.startDate;
      momentTime = moment(time).add(daysToMove, 'days');
    } else {
      momentTime = moment();
    }

    if (!this.props.manualMode) {
      //
      // In automatic mode, state is handled locally, done here:
      //
      this.setState({

        startDate: momentTime.valueOf()

      })
    }
    //
    // In any mode we finally inform the calling component of the change:
    //

    this.props.changeDate(momentTime.valueOf());


  }

  toggleDatePicker() {
    this.setState({isDatePickerOpen: !this.state.isDatePickerOpen})
  }

  handleChange = (date: Moment) => {
    if (this.props.manualMode) {
      this.props.changeDate(date.valueOf());
    } else {
      this.setState({
        startDate: date.valueOf()
      })
    }

    this.toggleDatePicker();
  }

  getDaySpanCaption() {
    const daySpan = Math.max(this.props.daySpan - 1, 0);
    const startOfSpan = moment(this.state.startDate).startOf('day');
    const endOfDaySpan = moment(this.state.startDate)
      .add(daySpan - 1, 'days')
      .endOf('day')
      .add(1, 'second');

    const result =
      `${startOfSpan.format('DD.MM.YYYY HH:mm')} - ${endOfDaySpan.format('DD.MM.YYYY kk:mm')}`
    // else {
    //   if (startOfSpan.format('MMMM') === endOfDaySpan.format('MMMM')) {
    //     result += startOfSpan.format('MMMM DD-') + endOfDaySpan.format('DD, YYYY');
    //   } else if (startOfSpan.format('YYYY') === endOfDaySpan.format('YYYY')) {
    //     result += startOfSpan.format('MMMM DD - ') + endOfDaySpan.format('DD.MM.YYYY HH:mm');
    //   } else {
    //     result += startOfSpan.format('MMMM DD, YYYY - ') + endOfDaySpan.format('MMMM DD, YYYY');
    //   }
    // }

    return result;
  }

  componentWillReceiveProps(nextProps: DateChooserProps, nextState: DateChooserState) {
    if (nextProps.startDate !== this.props.startDate) {
      this.setState({
        startDate: nextProps.startDate
      })
    }
  }

  render() {
    return (
      <DateChooserRoot>
        <WeeklyDateNavigation>
          <TodayContainer onClick={() => {
            this.changeDate(0)
          }}>Today</TodayContainer>
          <PreviousDaySpan
            onClick={() => {
              this.changeDate(-1)
            }}
            className="material-icons"

          >
            keyboard_arrow_left
          </PreviousDaySpan>
          <DatePickerContainer onClick={() => {
            this.toggleDatePicker()
          }}>
            {this.getDaySpanCaption()}
          </DatePickerContainer>
          <NextDaySpan
            onClick={() => {
              this.changeDate(1)
            }}
            className="material-icons"
          >
            keyboard_arrow_right
          </NextDaySpan>
        </WeeklyDateNavigation>
        {this.state.isDatePickerOpen ? (
          <DatePicker
            selected={moment(this.props.startDate)}
            onSelect={this.handleChange}
            withPortal={true}
            inline={true}
          />
        ) : null}
      </DateChooserRoot>
    )
  }
}

export default DateChooser
