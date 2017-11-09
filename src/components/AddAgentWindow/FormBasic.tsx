import * as React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as moment from 'moment';
import {
  DateInput, FrameView, Row, TitleContainer, RepeatContainer, RepeatInput, ButtonsContainer,
  RepeatButton, RepeatIcon, SubText, DateContainer, DateIcon, EndRadioContainer, EndOption, EndOptionText, AfterInput,
  EndDateInput
} from './Style';

export interface BasicFormProps {
  // Repeat Every field
  repeatEvery: number;
  onRepeatChange: (repeat: number) => void;
  everyText: string;
  // Extra field
  extraField?: JSX.Element;
  // Starts on field
  startingDate: number;
  onChangeDate: (newDate: number) => void;
  // Ends field
  endsOption: string;
  onOptionSelect: (option: string) => void;
  occurrences: string;
  onOccurrenceChange: (times: number) => void;
  endDate: number;
  onChangeEndDate: (newDate: number) => void;
}

export interface BasicFormState {
  isDatePickerOpen: boolean;
  isEndDatePickerOpen: boolean;
}

class BasicForm extends React.Component<BasicFormProps, BasicFormState> {

  static defaultProps: Partial<BasicFormProps> = {
    extraField: null,
  }

  constructor (props: BasicFormProps) {
    super(props);

    this.state = {
      isDatePickerOpen: false,
      isEndDatePickerOpen: false,
    }
  }

  handleDateChange = (date: moment.Moment) => {
    this.props.onChangeDate(date.unix());
    this.toggleDatePicker();
  }

  handleEndDateChange = (date: moment.Moment) => {
    this.props.onChangeEndDate(date.unix());
    this.toggleEndDatePicker();
  }

  toggleDatePicker = () => {
    this.setState({isDatePickerOpen: !this.state.isDatePickerOpen})
  }

  toggleEndDatePicker = () => {
    this.setState({isEndDatePickerOpen: !this.state.isEndDatePickerOpen})
  }

  renderDate() {
    if (this.state.isDatePickerOpen) {
      return (
        <DatePicker
          selected={moment(this.props.startingDate)}
          onSelect={this.handleDateChange}
          withPortal={true}
          inline={true}
        />
      )
    }
    return (
      <DateInput
        defaultValue={moment(this.props.startingDate).format('DD.MM.YYYY')}
        onClick={() => this.toggleDatePicker()}
      />)
  }

  renderEndDate() {
    if (this.state.isEndDatePickerOpen) {
      return (
        <DatePicker
          selected={moment(new Date())}
          onSelect={this.handleEndDateChange}
          withPortal={true}
          inline={true}
        />
      )
    }
    return (
      <EndDateInput
        value={!!this.props.endDate && this.props.endDate !== 0 ?
          moment(this.props.endDate).format('DD.MM.YYYY') : ''}
        onClick={() => this.toggleEndDatePicker()}
      />)
  }

  render() {

    return (
      <FrameView>
        <Row>
          <TitleContainer>Repeat every:</TitleContainer>
          <RepeatContainer>
            <RepeatInput
              value={this.props.repeatEvery}
              onChange={(e) => this.props.onRepeatChange(parseInt((e.target as HTMLInputElement).value, 10))}
            />
            <ButtonsContainer>
              <RepeatButton onClick={() => this.props.onRepeatChange(this.props.repeatEvery + 1)}>
                <RepeatIcon className="material-icons">arrow_drop_up</RepeatIcon>
              </RepeatButton>
              <RepeatButton onClick={() => this.props.onRepeatChange(this.props.repeatEvery - 1)}>
                <RepeatIcon className="material-icons">arrow_drop_down</RepeatIcon>
              </RepeatButton>
            </ButtonsContainer>
          </RepeatContainer>
          <SubText>{this.props.everyText}</SubText>
        </Row>
        {this.props.extraField}
        <Row>
          <TitleContainer>Starts on:</TitleContainer>
          <DateContainer>
            {this.renderDate()}
            <DateIcon className="material-icons">date_range</DateIcon>
          </DateContainer>
        </Row>
        <Row>
          <TitleContainer>Ends:</TitleContainer>
          <EndRadioContainer>
            <EndOption>
              <input
                type="radio"
                name="daily"
                checked={this.props.endsOption === 'Never'}
                onChange={() => this.props.onOptionSelect('Never')}
              />
              <EndOptionText>Never</EndOptionText>
            </EndOption>
            <EndOption>
              <input
                type="radio"
                name="daily"
                checked={this.props.endsOption === 'After'}
                onChange={() => this.props.onOptionSelect('After')}
              />
              <EndOptionText>After</EndOptionText>
              <AfterInput maxLength={3} value={this.props.occurrences}/>
              <EndOptionText>occurrences</EndOptionText>
            </EndOption>
            <EndOption>
              <input
                type="radio"
                name="daily"
                checked={this.props.endsOption === 'On'}
                onChange={() => this.props.onOptionSelect('On')}
              />
              <EndOptionText>On</EndOptionText>
              {this.renderEndDate()}
            </EndOption>
          </EndRadioContainer>
        </Row>
      </FrameView>
    )
  }
}

export default BasicForm;
