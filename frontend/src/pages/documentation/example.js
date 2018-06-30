import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'reactstrap/lib/Dropdown';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Code from 'components/code';

const views = [
  { id: 'side-by-side', name: 'Side by side' },
  { id: 'stacking', name: 'Stacking' },
  { id: 'input', name: 'Input' },
  { id: 'output', name: 'Output' }
];

const initialState = {
  isDropdownOpen: false,
  viewId: views[0].id
};

class Example extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    input: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    output: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeView = (viewId) => this.setState({ viewId });

  onDropdownToggle = () => this.setState((prevState) => ({
    isDropdownOpen: !prevState.isDropdownOpen
  }));

  render() {
    const { index, input, output, name } = this.props;
    const { isDropdownOpen, viewId } = this.state;
    const viewName = views.find(({ id }) => id === viewId).name;

    const header = (
      <Col xs={12}>
        <div className="d-flex justify-content-between align-items-end">
          <h4>{index + 1}. {name}</h4>

          <Dropdown
            className="mb-2"
            direction="left"
            isOpen={isDropdownOpen}
            size="sm"
            toggle={this.onDropdownToggle}>
            <DropdownToggle caret>
              {viewName}
            </DropdownToggle>
            <DropdownMenu>
              {views.map((view) => (
                <DropdownItem
                  key={view.id}
                  active={view.id === viewId}
                  onClick={() => this.onChangeView(view.id)}>
                  {view.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </Col>
    );

    if ([ 'input', 'output' ].includes(viewId)) {
      return (
        <Row className="mb-2">
          {header}

          <Col>
            <h5>{viewName}</h5>
            <Code disabled value={viewId === 'input' ? input : output} />
          </Col>
        </Row>
      );
    }

    const codeColumns = viewId === 'stacking' ? 12 : 6;

    return (
      <Row className="mb-2">
        {header}

        <Col sm={codeColumns}>
          <h5>Input</h5>
          <Code disabled value={input} />
        </Col>

        <Col sm={codeColumns}>
          <h5>Output</h5>
          <Code disabled value={output} />
        </Col>
      </Row>
    );
  }
}

export default Example;
