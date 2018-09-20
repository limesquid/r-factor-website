import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';
import { Label } from 'reactstrap';
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
            <h4 className="mb-4 text-muted">{String(error)}</h4>
            <p className="text-muted">
              You can contact us with above information via our <Link href="/support" label="support page" />.
            </p>
          </Fragment>
        )}

        {!loading && !error && (
          <Fragment>
            <h1><span className="text-success">Congratulations!</span></h1>
            <h4 className="mb-4 text-muted">You have successfully bought your R-Factor license key!</h4>

            <div className="d-flex justify-content-between align-items-baseline">
              <Label className="d-flex justify-content-between">
                Your license key
              </Label>
              <Clipboard className="btn btn-link float-right mt-2" data-clipboard-text={license}>
                Copy
              </Clipboard>
            </div>

            <textarea
              readOnly
              rows={8}
              className="mt-2 w-100 border-0 p-2"
              defaultValue={license}
              style={{ wordBreak: 'break-all' }}
              onClick={this.onTextareaClick} />

            <p className="text-muted mt-2">
              Please follow <Link href="/documentation/installation" label="this link" /> to get further instructions.
            </p>
          </Fragment>
        )}
      </div>
    );
  }
}

export default CompletePayment;
