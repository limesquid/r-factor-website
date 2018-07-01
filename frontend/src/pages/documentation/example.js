import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Modal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import Code from 'components/code';

const initialState = {
  isOpen: false
};

class Example extends Component {
  static propTypes = {
    config: PropTypes.string,
    input: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    output: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onToggle = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { config, input, output, name } = this.props;
    const { isOpen } = this.state;

    return (
      <Fragment>
        <li>
          <Button
            className="p-0 border-0 align-baseline"
            color="link"
            onClick={this.onToggle}>
            {name}
          </Button>
        </li>

        <Modal isOpen={isOpen} size="lg" toggle={this.onToggle}>
          <ModalHeader toggle={this.onToggle}>
            {name}
          </ModalHeader>

          <ModalBody>
            {config && (
              <Row>
                <Col>
                  <h5>Custom config</h5>
                  <Code autoHeight disabled value={config} />
                </Col>
              </Row>
            )}

            <Row>
              <Col md={12} className="hide-lg">
                <h5>Input</h5>
                <Code autoHeight disabled value={input} />
              </Col>

              <Col md={12} className="hide-lg">
                <h5>Output</h5>
                <Code autoHeight disabled value={output} />
              </Col>

              <Col lg={6} className="hide-md">
                <h5>Input</h5>
                <Code disabled value={input} />
              </Col>

              <Col lg={6} className="hide-md">
                <h5>Output</h5>
                <Code disabled value={output} />
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default Example;
