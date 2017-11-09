import * as React from 'react'
import { withTheme } from 'styled-components';
import * as moment from 'moment';
import { Row, TitleContainer, RepeatContainer, RepeatInput, ButtonsContainer, RepeatButton, RepeatIcon } from './Style';
import BasicForm from './FormBasic';

export interface WeeklyFormProps {
}

export interface WeeklyFormState {
  repeatEvery: number;
  repeatTimes: number;
  startingDate: number;
  endsOption: string;
  occurrences: string;
  endDate: number;
}

class WeeklyForm extends React.Component<WeeklyFormProps, WeeklyFormState> {

  constructor (props: WeeklyFormProps) {
    super(props);

    this.state = {
      endsOption: 'Never',
      repeatEvery: 1,
      repeatTimes: 2,
      startingDate: moment(new Date()).unix() * 1000,
      occurrences: '',
      endDate: 0,
    }
  }

  onRepeatChange = (weeks: number) => {
    try {
      if (isNaN(weeks)) { throw new Error('NAN'); }

      weeks = weeks > 9 ? 9 : weeks < 1 ? 1 : weeks;
      this.setState({
        repeatEvery: weeks,
      })
    } catch (e) {
      this.setState({
        repeatEvery: 1,
      })
    }
  }

  onRepeatTimeChange = (times: number) => {
    try {
      if (isNaN(times)) { throw new Error('NAN'); }

      times = times > 7 ? 7 : times < 1 ? 1 : times;
      this.setState({
        repeatTimes: times,
      })
    } catch (e) {
      this.setState({
        repeatTimes: 1,
      })
    }
  }

  changeDate = (newDate: number) => {
    this.setState({startingDate: newDate * 1000})
  }

  handleDateChange = (date: moment.Moment) => {
    this.changeDate(date.unix());
    console.log('Changed');
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
        <TitleContainer>Times per week</TitleContainer>
        <RepeatContainer>
          <RepeatInput
            value={this.state.repeatTimes}
            onChange={(e) => this.onRepeatTimeChange(parseInt((e.target as HTMLInputElement).value, 10))}
          />
          <ButtonsContainer>
            <RepeatButton onClick={() => {this.onRepeatTimeChange(this.state.repeatTimes + 1)}}>
              <RepeatIcon className="material-icons">arrow_drop_up</RepeatIcon>
            </RepeatButton>
            <RepeatButton onClick={() => this.onRepeatTimeChange(this.state.repeatTimes - 1)}>
              <RepeatIcon className="material-icons">arrow_drop_down</RepeatIcon>
            </RepeatButton>
          </ButtonsContainer>
        </RepeatContainer>
      </Row>
    )

    return (
      <BasicForm
        repeatEvery={this.state.repeatEvery}
        onRepeatChange={this.onRepeatChange}
        everyText={'weeks'}
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

export default withTheme(WeeklyForm);
