import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { reactFeatures, reduxFeatures } from 'data';

const calculateTime = (refactoringsDetails) => {
  const seconds = refactoringsDetails.reduce(
    (result, refactoringDetails) => result + refactoringDetails.dailyCount * refactoringDetails.manualDuration,
    0
  );
  return {
    minutes: Math.floor(seconds / 60),
    seconds: seconds - Math.floor(seconds / 60) * 60
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

        <h6>
          R-Factor will save approximately <b>{timeConsumption.minutes}</b> minutes and <b>{timeConsumption.seconds}</b> seconds of your time every day, so you will be able to drink extra coffee ;)
        </h6>
      </div>
    );
  }
}

export default Calculator;
