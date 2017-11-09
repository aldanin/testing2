import * as React from 'react'
import * as moment from 'moment';
import { Row, TitleContainer, RepeatByOption, RepeatByOptionText } from './Style';
import { withTheme } from 'styled-components';
import BasicForm from './FormBasic';

export interface MonthlyFormProps {
}

export interface MonthlyFormState {
  repeatEvery: number;
  repeatByDayOfMonth: boolean;
  startingDate: number;
  endsOption: string;
  occurrences: string;
  endDate: number;
}

class MonthlyForm extends React.Component<MonthlyFormProps, MonthlyFormState> {

  constructor (props: MonthlyFormProps) {
    super(props);

    this.state = {
      endsOption: 'Never',
      repeatEvery: 1,
      repeatByDayOfMonth: true,
      startingDate: moment(new Date()).unix() * 1000,
      occurrences: '',
      endDate: 0,
    }
  }

  onRepeatChange = (days: number) => {
    try {
      if (isNaN(days)) { throw new Error('NAN'); }

      days = days > 36 ? 36 : days < 1 ? 1 : days;
      this.setState({
        repeatEvery: days,
      })
    } catch (e) {
      this.setState({
        repeatEvery: 1,
      })
    }

  }

  changeDate = (newDate: number) => {
    this.setState({startingDate: newDate * 1000})
  }

  handleDateChange = (date: moment.Moment) => {
    this.changeDate(date.unix());
  }

  onOptionSelect = (option: string) => {
    this.setState({endsOption: option})
  }

  onOccurrenceChange = (times: number) => {
    try {
      if (isNaN(times)) { throw new Error('NAN'); }
      this.setState({
        repeatEvery: times,
      })
    } catch (e) {
      this.setState({
        repeatEvery: 3,
      })
    }
  }

  onChangeEndDate = (newDate: number) => {
    this.setState({endDate: newDate * 1000})
  }

  render() {

    const extraField = (
      <Row>
        <TitleContainer>Repeat by:</TitleContainer>
        <RepeatByOption>
          <input
            type="radio"
            className="monthly-repeat-by"
            name="repeatBy"
            checked={this.state.repeatByDayOfMonth}
            onChange={() => this.setState({repeatByDayOfMonth: true})}
          />
          <RepeatByOptionText>Day of the month</RepeatByOptionText>
        </RepeatByOption>
        <RepeatByOption>
          <input
            type="radio"
            className="monthly-repeat-by"
            name="repeatBy"
            checked={!this.state.repeatByDayOfMonth}
            onChange={() => this.setState({repeatByDayOfMonth: false})}
          />
          <RepeatByOptionText>Day of the week</RepeatByOptionText>
        </RepeatByOption>
      </Row>
    )

    return (
      <BasicForm
        repeatEvery={this.state.repeatEvery}
        onRepeatChange={this.onRepeatChange}
        everyText={'months'}
        extraField={extraField}
        startingDate={this.state.startingDate}
        onChangeDate={this.changeDate}
        endsOption={this.state.endsOption}
        onOptionSelect={this.onOptionSelect}
        occurrences={this.state.occurrences}
        endDate={this.state.endDate}
        onOccurrenceChange={this.onOccurrenceChange}
        onChangeEndDate={this.onChangeEndDate}
      />
    )
  }
}

export default withTheme(MonthlyForm);
