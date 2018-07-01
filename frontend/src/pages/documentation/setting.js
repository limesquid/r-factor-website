import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Badge from 'reactstrap/lib/Badge';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Link from 'components/link';
import { allFeatures } from 'data';

const getUsedIn = (id) => allFeatures
  .filter(({ configuration }) => configuration && configuration.includes(id));

const Setting = ({ id, setting }) => (
  <Fragment>
    <Row>
      <Col className="mb-4" lg={6} md={12}>
        <div className="mb-4">
          <h3>Interface</h3>
          <div>
            <Badge color="primary">Name</Badge>
            {' '}
            <code>{id}</code>
          </div>

          <div>
            <Badge color="primary">Type</Badge>
            {' '}
            {Array.isArray(setting.type) && (
              <code>
                {setting.type.join(', ')}
              </code>
            )}

            {!Array.isArray(setting.type) && (
              <code>{setting.type}</code>
            )}
          </div>

          <div>
            <Badge color="primary">Default value</Badge>
            {' '}
            <code style={{ whiteSpace: 'pre' }}>{setting.defaultValue}</code>
          </div>
        </div>
      </Col>

      <Col className="mb-4" lg={6} md={12}>
        <h3>Used in</h3>
        <ul className="text-muted">
          {getUsedIn(id).map((feature) => (
            <li key={feature.id}>
              <Link href={`/documentation/${feature.id}`} label={feature.name} />
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  </Fragment>
);

Setting.propTypes = {
  id: PropTypes.string.isRequired,
  setting: PropTypes.object.isRequired
};

export default Setting;
