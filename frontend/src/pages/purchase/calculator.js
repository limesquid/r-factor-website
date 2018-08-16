import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { reactFeatures, reduxFeatures } from 'data';

const DAYS_IN_MONTH = 21;
const DAYS_IN_YEAR = 365;

const calculateTime = (refactoringsDetails) => {
  const seconds = refactoringsDetails.reduce(
    (result, refactoringDetails) => result + refactoringDetails.dailyCount * refactoringDetails.manualDuration,
    0
  );
  return {
    minutes: Math.floor(seconds / 60),
    seconds: seconds - Math.floor(seconds / 60) * 60,
    totalSeconds: seconds
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
      <div className="calculator col-lg-6">
        <h5 className="mb-4">How many times a day do you perform specific transformation:</h5>

        {refactoringsDetails.map((refactoringDetails) => (
          <InputGroup className="input-group my-3" key={refactoringDetails.name}>
            <InputGroupAddon
              className="group-addon"
              addonType="prepend">
              {refactoringDetails.name}
            </InputGroupAddon>
            <Input
              type="number"
              name={refactoringDetails.name}
              min={0}
              value={refactoringDetails.dailyCount}
              onChange={this.onRefactoringDetailsDailyCountChange} />
          </InputGroup>
        ))}

        <h3>
          <code>{timeConsumption.minutes}</code> minutes and <code>{timeConsumption.seconds}</code> seconds
        </h3>
        <h6>
          That's the amount of time R-Factor will save you daily on average!
          <br />
          It is <code>{minutesConsumptionMonthly}</code> hours monthly or <code>{daysConsumptionYearly}</code> days yearly!
          <br />
          Pretty much, isn't it?
        </h6>
      </div>
    );
  }
}

export default Calculator;
