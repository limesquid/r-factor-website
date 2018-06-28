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
        <h3>What is R-Factor?</h3>
        <div className="text-muted mb-4">
          <p>
            R-Factor is an automated refactoring tool for JavaScript designed
            to help developers who work with React & Redux.
          </p>
          <p>
            It features automated transformations for very common code manipulations
            that React developers perform manually dozens of times on a daily basis.
          </p>
          <p>
            If you value your time, you'll love it.
          </p>
          <p>
            We know it's awesome because we use it too.
          </p>
          <p>
            In fact, after we finished implementing proof of concept of the very first transformation,
            the only thing we could say was "why didn't we do this earlier?".
          </p>
          <p>
            While our initial goal was to provide React & Redux refactorings only, some cool
            side effects appeared along the way. That is why now you can also enjoy features like
            {' '}
            <LinkContainer to="/documentation/sort-imports">
              <a href="/documentation/sort-imports">Sort imports</a>
            </LinkContainer>
            {' or '}
            <LinkContainer to="/documentation/sort-object-attributes">
              <a href="/documentation/sort-object-attributes">Sort object attributes</a>
            </LinkContainer>
            {' .'}
          </p>
          <p>
            As I am writing this we have over 30 ideas for other features, which would take months
            to implement. And yes, some of them go beyond React & Redux. We want to see how much
            interest will this tool get first.
          </p>
        </div>
      </Col>

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
          <li>Prefer the fanciest, sweetest syntax possible (think ES6+)</li>
        </ul>

        <h3>User commandments</h3>
        <ul className="text-muted mb-4">
          <li>Thou shalt not refactor invalid JavaScript</li>
          <li>Thou shalt not refactor code formatted against provided configuration</li>
          <li>Thou shalt not declare multiple React components in a single file</li>
          <li>Thou shalt not refactor any other foolish constructions</li>
          <li>Use the most recent JavaScript features</li>
          <li>Commit before you refactor</li>
          <li>
            <LinkContainer to="/support">
              <a href="/support">Report your ideas & bugs</a>
            </LinkContainer>
          </li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
        <h3>Installation</h3>

        <h5>Prerequisites</h5>
        <div className="text-muted mb-4">
          You must have Node.js <code>6.0.0</code> or later installed.
        </div>

        <h5>Installation</h5>
        <div className="text-muted mb-4">
          TODO
        </div>
      </Col>
    </Row>

    <Row>
      <Col>
        <h3>Usage instructions</h3>
        <ul className="text-muted mb-4">
          <li>Refactoring will be performed on your selection or else on an entire file</li>
          <li>Selection must be a valid JavaScript Program (e.g. <code>{'{ a: 1, b: 2 }'}</code> will not do!)</li>
          <li>
            You can use <a href="https://astexplorer.net/">astexplorer.net</a> with <code>babylon7</code> parser
            to validate your code before
            you <LinkContainer to="/support"><a href="/support">submit an issue</a></LinkContainer>
          </li>
          <li>
            Code is refactored on your machine. If you use the plugin, no code will ever be
            transmitted over the network. The plugin works offline. You're safe.
          </li>
          <li>
            Our online <LinkContainer to="/try"><a href="/try">Try it</a></LinkContainer> tool
            however does send your code to our server. But we do not store it. But we could have.
            That's why you should use it for evaluation purposes with some dummy code only.
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
