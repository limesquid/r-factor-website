import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { reactFeatures, reduxFeatures } from 'data';

const DAYS_IN_MONTH = 21;
const DAYS_IN_YEAR = 250;

const calculateTime = (refactoringsDetails) => {
  const totalSeconds = refactoringsDetails.reduce(
    (result, { dailyCount, manualDuration }) => result + dailyCount * manualDuration,
    0
  );
  return {
    totalSeconds,
    minutes: Math.floor(totalSeconds / 60),
    seconds: totalSeconds - Math.floor(totalSeconds / 60) * 60
  };
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refactoringsDetails: [ ...reactFeatures, ...reduxFeatures ]
        .filter(({ calculator }) => Boolean(calculator))
        .map(({ calculator, name }) => ({
          name,
          ...calculator
        }))
    };
  }

  onRefactoringDetailsDailyCountChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      refactoringsDetails: this.state.refactoringsDetails.map((refactoringDetails) => {
        if (refactoringDetails.name !== name) {
          return refactoringDetails;
        }

        return {
          ...refactoringDetails,
          dailyCount: value
        };
      })
    });
  }

  render() {
    const { refactoringsDetails } = this.state;
    const timeConsumption = calculateTime(refactoringsDetails);
    const minutesConsumptionMonthly = Math.ceil((timeConsumption.totalSeconds * DAYS_IN_MONTH) / 60);
    const daysConsumptionYearly = Math.ceil((timeConsumption.totalSeconds * DAYS_IN_YEAR) / 3600 / 8);
    return (
      <div className="calculator">
        <h5 className="mb-4 text-muted">How many times a day do you perform specific transformation:</h5>

        {refactoringsDetails.map((refactoringDetails) => (
          <InputGroup className="input-group my-3" key={refactoringDetails.name}>
            <InputGroupAddon
              className="group-addon"
              addonType="prepend">
              <InputGroupText className="d-block text-left text-truncate" title={refactoringDetails.name}>
                {refactoringDetails.name}
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              className="border-dark"
              name={refactoringDetails.name}
              min={0}
              value={refactoringDetails.dailyCount}
              onChange={this.onRefactoringDetailsDailyCountChange} />
            <InputGroupAddon
              className="group-addon"
              addonType="append">
              <InputGroupText>
                {refactoringDetails.manualDuration} s
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        ))}

        <p className="text-muted mt-4" style={{ fontSize: '1.4rem' }}>
          <code style={{ fontSize: '2rem' }}>{timeConsumption.minutes}</code>
          {' '}minutes and{' '}
          <code style={{ fontSize: '2rem' }}>{timeConsumption.seconds}</code>
          {' '}seconds
        </p>
        <p className="text-muted mb-1">
          That's the approx. amount of time R-Factor will save you every day!
        </p>
        <p className="text-muted mb-1">
          It's{' '}
          <code style={{ fontSize: '1rem' }}>{minutesConsumptionMonthly}</code>
          {' '}minutes a month or{' '}
          <code style={{ fontSize: '1rem' }}>{daysConsumptionYearly}</code>
          {' '}man-days a year!
        </p>
        <p className="text-muted mb-1">
          Quite a lot, isn't it?
        </p>
      </div>
    );
  }
}

export default Calculator;
