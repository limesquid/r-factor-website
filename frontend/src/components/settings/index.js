import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Superclass from './superclass';

class Settings extends Component {
  static propTypes = {
    settings: PropTypes.object,
    onChange: PropTypes.func
  };

  onSuperclassChange = (superclass) => this.props.onChange({
    ...this.props.settings,
    ['component-superclass']: superclass
  });

  render() {
    const { settings, onChange } = this.props;

    return (
      <div>
        <Superclass value={settings['component-superclass']} onChange={this.onSuperclassChange} />
      </div>
    );
  }
}

export default Settings;
