import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

const Setting = ({ id, setting }) => (
  <Fragment>
    <Row>
      <Col>
        <h3>Setting interface</h3>
      </Col>
    </Row>

    <Row className="mb-4">
      <Col className="mb-4" sm={6}>
        <h5>Name</h5>
        <div>
          <code>{id}</code>
        </div>
      </Col>

      <Col className="mb-4" sm={6}>
        <h5>Type</h5>
        <div>
          {Array.isArray(setting.type) && (
            <ul className="text-muted">
              {setting.type.map((type, index) => (
                <li key={index}>
                  <code>{type}</code>
                </li>
              ))}
            </ul>
          )}

          {!Array.isArray(setting.type) && (
            <code>{setting.type}</code>
          )}
        </div>
      </Col>

      <Col className="mb-4" sm={6}>
        <h5>Default value</h5>
        <div>
          <code style={{ whiteSpace: 'pre' }}>{setting.defaultValue}</code>
        </div>
      </Col>

      <Col className="mb-4" sm={6}>
        <h5>Possible values</h5>
        <div>
          <ul className="text-muted">
            {setting.possibleValues.map((value, index) => (
              <li key={index}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  </Fragment>
);

Setting.propTypes = {
  id: PropTypes.string.isRequired,
  setting: PropTypes.object.isRequired
};

export default Setting;
