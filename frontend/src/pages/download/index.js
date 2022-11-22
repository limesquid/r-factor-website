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
    repository: 'r-factor-atom',
    filename: 'r-factor-atom-1.0.1.zip'
  },
  {
    name: 'Sublime',
    icon: ICONS.sublime,
    repository: 'r-factor-sublime',
    filename: 'r-factor-sublime-1.0.1.zip'
  },
  {
    name: 'VSCode',
    icon: ICONS.vscode,
    repository: 'r-factor-vscode',
    filename: 'r-factor-vscode-1.0.1.zip'
  }
];

const DownloadPage = () => (
  <div>
    <Helmet>
      <title>R-Factor - Download</title>
    </Helmet>

    <h1>Download R-Factor</h1>
    <div className="text-muted mb-4">
      <p>
        See <Link href="/documentation/installation" label="documentation" /> for installation
        instructions.
      </p>
    </div>

    <Row>
      {EDITORS.map(({ repository, filename, icon, name }) => (
        <Col key={name} xl={3} md={4} sm={5}>
          <div className="mb-4">
            <h2 className="d-flex align-items-center">
              <img className="mr-3" alt={name} src={icon} height={ICON_SIZE} title={name} />
              {name}
            </h2>

            <div className="text-muted">
              <a href={`https://github.com/limesquid/${repository}/archive/refs/tags/1.0.1.zip`}>
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
