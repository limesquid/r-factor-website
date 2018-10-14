import React from 'react';
import { Helmet } from 'react-helmet';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Link from 'components/link';
import { ICONS } from 'components/icons';

const ICON_SIZE = 36;
const EDITORS = [
  {
    name: 'Atom',
    icon: ICONS.atom,
    filename: 'r-factor-atom.zip'
  },
  {
    name: 'Sublime',
    icon: ICONS.sublime,
    filename: 'r-factor-sublime.zip'
  },
  {
    name: 'VSCode',
    icon: ICONS.vscode,
    filename: 'r-factor-vscode.zip'
  }
];

const DownloadPage = () => (
  <div>
    <Helmet>
      <title>R-Factor - Download</title>
    </Helmet>

    <h1>Download R-Factor</h1>
    <div className="text-muted mb-4">
      <p>See <Link href="/documentation/installation" label="documentation" /> for installation instructions.</p>
      <p>R-Factor will not work without a license key. Get one <Link href="/purchase" label="here" />.</p>
    </div>

    <Row>
      {EDITORS.map(({ filename, icon, name }) => (
        <Col key={name} xl={2} md={3} sm={4}>
          <div className="mb-4">
            <h2 className="d-flex align-items-center">
              <img className="mr-3" alt={name} src={icon} height={ICON_SIZE} title={name} />
              {name}
            </h2>

            <div className="text-muted">
              <a href={`https://r-factor.io/static/${filename}`}>
                {filename}
              </a>
            </div>
          </div>
        </Col>
      ))}
    </Row>

  </div>
);

export default DownloadPage;
