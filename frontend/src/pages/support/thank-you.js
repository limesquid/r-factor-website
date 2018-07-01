import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'reactstrap/lib/Button';

const ThankYou = () => (
  <div>
    <h1 className="text-success">
      Thank you!
    </h1>
    <p className="text-muted">
      Your enquiry has been submitted successfully and we will review it shortly.
    </p>
    <p className="text-muted mb-5">
      If you have provided your email we may get back to you.
    </p>

    <LinkContainer to="/support">
      <Button className="mr-4" color="primary">
        Report something else
      </Button>
    </LinkContainer>
  </div>
);

export default ThankYou;
