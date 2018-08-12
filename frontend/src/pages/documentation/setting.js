import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Badge from 'reactstrap/lib/Badge';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Link from 'components/link';
import { allFeatures } from 'data';

const getUsedIn = (id) => allFeatures
  .filter(({ configuration }) => configuration && configuration.includes(id));

const Setting = ({ id, setting }) => {
  const usedIn = getUsedIn(id);

  return (
    <Fragment>
      <Row>
        <Col className="mb-4" lg={6} md={12}>
          <div className="mb-4">
            <h3>Interface</h3>
            <h6>
              <Badge color="primary">Name</Badge>
              &nbsp;&nbsp;&nbsp;
              <code>{id}</code>
            </h6>

            <h6>
              <Badge color="primary">Type</Badge>
              &nbsp;&nbsp;&nbsp;
              {Array.isArray(setting.type) && (
                <code>
                  {setting.type.join(', ')}
                </code>
              )}

              {!Array.isArray(setting.type) && (
                <code>{setting.type}</code>
              )}
            </h6>

            <h6>
              <Badge color="primary">Default value</Badge>
              &nbsp;&nbsp;&nbsp;
              <code style={{ whiteSpace: 'pre' }}>
                {JSON.stringify(setting.defaultValue, null, 2)}
              </code>
            </h6>
          </div>
        </Col>

        {usedIn.length > 0 && (
          <Col className="mb-4" lg={6} md={12}>
            <h3>Used in</h3>
            <ul className="text-muted">
              {usedIn.map((feature) => (
                <li key={feature.id}>
                  <Link href={`/documentation/${feature.id}`} label={feature.name} />
                </li>
              ))}
            </ul>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};

Setting.propTypes = {
  id: PropTypes.string.isRequired,
  setting: PropTypes.object.isRequired
};

export default Setting;
