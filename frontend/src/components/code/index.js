import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const options = {
  indentUnit: 2,
  lineNumbers: true,
  mode: 'jsx',
  scrollbarStyle: 'overlay',
  theme: 'monokai'
};

class Code extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      prevValue: props.value,
      value: props.value || ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value === prevState.prevValue) {
      return null;
    }

    return {
      ...prevState,
      prevValue: nextProps.value,
      value: nextProps.value
    };
  }

  onBeforeChange = (editor, data, value) => {
    if (!this.props.disabled) {
      this.setState({ value });
    }
  };

  onChange = (editor, data, value) => {
    if (!this.props.disabled) {
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <CodeMirror
        className="border border-light mb-4"
        options={options}
        value={this.state.value}
        onBeforeChange={this.onBeforeChange}
        onChange={this.onChange} />
    );
  }
}

export default Code;
