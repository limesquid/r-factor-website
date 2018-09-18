import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';
import { completePayment } from './api';

class CompletePayment extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        internalOrderId: PropTypes.string
      })
    })
  };

  state = {
    loading: true,
    license: null
  };

  componentDidMount() {
    const { internalOrderId } = this.props.match.params;
    this.completePayment(internalOrderId);
  }

  onClick = (event) => event.target.select();

  completePayment = async (internalOrderId) => {
    try {
      const license = await completePayment(internalOrderId);
      this.setState({
        license,
        loading: false
      });
    } catch (error) {
      this.setState({
        error,
        loading: false
      });
    }
  }

  render() {
    const { loading, license } = this.state;

    if (loading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <h3>
          You have successfully bought R-Factor!
        </h3>
        <textarea
          readOnly
          className="mt-2 w-100"
          defaultValue={license}
          onClick={this.onClick} />
        <Clipboard className="float-right btn btn-primary" data-clipboard-text={license}>
          Copy
        </Clipboard>
      </div>
    );
  }
}

export default CompletePayment;
