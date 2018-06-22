import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Controlled as CodeMirror } from 'react-codemirror2';
import Spinner from 'components/spinner';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './styles.css';

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
    isLoading: PropTypes.bool,
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
    const { isLoading } = this.props;

    return (
      <div className="position-relative">
        <CodeMirror
          className={classNames('border border-light mb-4', { blurred: isLoading })}
          options={options}
          value={this.state.value}
          onBeforeChange={this.onBeforeChange}
          onChange={this.onChange} />

        {isLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default Code;
