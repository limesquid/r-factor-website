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

const defaultOptions = {
  indentUnit: 2,
  lineNumbers: true,
  lineSeparator: '\n',
  mode: 'jsx',
  scrollbarStyle: 'overlay',
  theme: 'monokai'
};

export const sanitize = (code, lineSeparator = defaultOptions.lineSeparator) => code
  .replace(/\r\n/g, '\n')
  .replace(/\n/g, lineSeparator);

class Code extends Component {
  static propTypes = {
    autoHeight: PropTypes.bool,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    options: PropTypes.object,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    options: {},
    onChange: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      prevValue: props.value,
      value: sanitize(props.value || '', props.options.lineSeparator)
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value === prevState.prevValue) {
      return null;
    }

    return {
      ...prevState,
      prevValue: nextProps.value,
      value: sanitize(nextProps.value, nextProps.options.lineSeparator)
    };
  }

  onBeforeChange = (editor, data, value) => {
    const { disabled, options } = this.props;
    if (!disabled) {
      this.setState({ value: sanitize(value, options.lineSeparator) });
    }
  };

  onChange = (editor, data, value) => {
    const { disabled, options, onChange } = this.props;
    if (!disabled) {
      onChange(sanitize(value, options.lineSeparator));
    }
  };

  render() {
    const { autoHeight, disabled, isLoading, options } = this.props;
    const finalOptions = {
      ...defaultOptions,
      ...options,
      cursorHeight: disabled ? 0 : 1
    };

    if (autoHeight) {
      finalOptions.viewportMargin = Infinity;
    }

    return (
      <div className={classNames('position-relative', { 'codemirror-height-auto': autoHeight })}>
        <CodeMirror
          className={classNames('border border-light mb-4', { blurred: isLoading })}
          options={finalOptions}
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
