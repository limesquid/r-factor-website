import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';
import { Helmet } from 'react-helmet';
import Link from 'components/link';
import Spinner from 'components/spinner';
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
    error: null,
    loading: true,
    license: null
  };

  componentDidMount() {
    const { internalOrderId } = this.props.match.params;
    this.completePayment(internalOrderId);
  }

  onTextareaClick = (event) => event.target.select();

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
    const { error, loading, license } = this.state;

    return (
      <div>
        <Helmet>
          <title>R-Factor - Payment completed</title>
        </Helmet>

        {loading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}

        {!loading && error && (
          <Fragment>
            <h1><span className="text-danger">Something went wrong!</span></h1>
            <h4 className="mb-4">{String(error)}</h4>
            <p>
              Please contact us at <Link href="/support" label="support" /> page in case of any questions.
            </p>
          </Fragment>
        )}

        {!loading && !error && (
          <Fragment>
            <h1><span className="text-success">Congratulations!</span></h1>
            <h4 className="mb-4">You have successfully bought your R-Factor license key!</h4>

            <p>
              Please follow this <Link href="/documentation/installation" label="link" /> to get further instructions.
            </p>

            <textarea
              readOnly
              rows={6}
              className="mt-2 w-100"
              defaultValue={license}
              onClick={this.onTextareaClick} />

            <Clipboard className="btn btn-primary float-right" data-clipboard-text={license}>
              Copy
            </Clipboard>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CompletePayment;
