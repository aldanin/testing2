import * as React from 'react'
import { withTheme } from 'styled-components';
import * as moment from 'moment';
import BasicForm from './FormBasic';

export interface DailyFormProps {
}

export interface DailyFormState {
  repeatEvery: number;
  startingDate: number;
  endsOption: string;
  occurrences: string;
  endDate: number;
}

class DailyForm extends React.Component<DailyFormProps, DailyFormState> {

  constructor (props: DailyFormProps) {
    super(props);

    this.state = {
      endsOption: 'Never',
      repeatEvery: 1,
      startingDate: moment(new Date()).unix() * 1000,
      occurrences: '',
      endDate: 0,
    }
  }

  onRepeatChange = (days: number) => {
    try {
      if (isNaN(days)) { throw new Error('NAN'); }

      days = days > 7 ? 7 : days < 1 ? 1 : days;
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

    return (
      <BasicForm
        repeatEvery={this.state.repeatEvery}
        onRepeatChange={this.onRepeatChange}
        everyText={'days'}
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

export default withTheme(DailyForm);
