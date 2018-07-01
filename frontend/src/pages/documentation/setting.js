import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Table from 'reactstrap/lib/Table';
import Link from 'components/link';
import { allFeatures } from 'data';

const getUsedIn = (id) => allFeatures
  .filter(({ configuration }) => configuration && configuration.includes(id));

const Setting = ({ id, setting }) => (
  <Fragment>
    <Row>
      <Col>
        <Table className="mb-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <code>{id}</code>
              </td>
              <td>
                {Array.isArray(setting.type) && (
                  <ul className="text-muted mb-4">
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
              </td>
              <td>
                <code style={{ whiteSpace: 'pre' }}>{setting.defaultValue}</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>

    <Row className="mb-4">
      <Col>
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
