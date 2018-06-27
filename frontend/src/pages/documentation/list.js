import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import {
  configurationFeatures,
  otherFeatures,
  reactFeatures,
  reduxFeatures
} from 'data';
import Links from './links';

const List = () => (
  <Container>
    <Row>
      <Col md={6}>
        <h3>R-Factor promises to</h3>
        <ul className="text-muted mb-4">
          <li>Try its best to not break your code</li>
          <li>Try its best to keep your formatting</li>
          <li>Refactor reasonably sized files in reasonable time</li>
          <li>
            Stick to
            {' '}
            <a href="https://en.wikipedia.org/wiki/Garbage_in,_garbage_out">garbage in, garbage out</a>
            {' '}
            rule
          </li>
          <li>Prefer the fanciest, sweetest syntax possible</li>
        </ul>
      </Col>

      <Col md={6}>
        <h3>User commandments</h3>
        <ul className="text-muted mb-4">
          <li>Thou shalt not refactor invalid JavaScript</li>
          <li>Thou shalt not refactor code formatted against provided configuration</li>
          <li>Use the most recent JavaScript features</li>
          <li><LinkContainer to="/support"><a href="/support">Report your ideas & bugs</a></LinkContainer></li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
        <h3>Installation</h3>
        <div className="text-muted mb-4">
          TODO
        </div>
      </Col>
    </Row>

    <Row>
      <Col>
        <h3>Usage</h3>
        <ul className="text-muted mb-4">
          <li>Refactoring will be performed on your selection or else on an entire file</li>
          <li>Selection must be a valid JavaScript Program (e.g. <code>{'{ a: 1, b: 2 }'}</code> will not do!)</li>
          <li>
            You can use <a href="https://astexplorer.net/">astexplorer.net</a> with <code>babylon7</code> parser
            to validate your code before
            you <LinkContainer to="/support"><a href="/support">submit an issue</a></LinkContainer>
          </li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <h3>React refactorings</h3>
        <Links className="mb-4" features={reactFeatures} />
      </Col>

      <Col md={6}>
        <h3>Redux refactorings</h3>
        <Links className="mb-4" features={reduxFeatures} />
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <h3>Other refactorings</h3>
        <Links className="mb-4" features={otherFeatures} />
      </Col>

      <Col md={6}>
        <h3>Configuration</h3>
        <Links className="mb-4" features={configurationFeatures} />
      </Col>
    </Row>
  </Container>
);

export default List;
