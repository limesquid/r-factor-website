import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Link from 'components/link';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - 404 - Not found</title>
    </Helmet>

    <Row>
      <Col>
        <h1>
          <span className="text-danger">404</span> - Not found
        </h1>
        <h4 className="mb-4">
          We don't know what you're looking for, but it's not here.
        </h4>
        <p>
          If you think this is an issue and <code>{window.location.href}</code>{' '}
          is a valid URL, please report it <Link href="/support" label="here" />.
        </p>
      </Col>
    </Row>
  </Fragment>
);

export default NotFound;
