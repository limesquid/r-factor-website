import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LabeledIcon from 'components/labeled-icon';

const ICON_SIZE = 48;
const ICONS = {
  linux: require('./linux.svg'),
  macos: require('./macos.svg'),
  node: require('./node.svg'),
  python: require('./python.svg'),
  sublime: require('./sublime.svg'),
  windows: require('./windows.svg')
};

const Icons = ({ className, icons, ...props }) => (
  <div className={classNames('d-flex', 'flex-wrap', className)} {...props}>
    {icons.map(({ id, label, subLabel }, index) => (
      <LabeledIcon
        key={id}
        className={classNames({
          'ml-3': index > 0,
          'mr-3': index < icons.length - 1
        })}
        label={label}
        subLabel={subLabel}>
        <img alt={label} src={ICONS[id]} height={ICON_SIZE} />
      </LabeledIcon>
    ))}
  </div>
);

Icons.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    subLabel: PropTypes.string
  })).isRequired
};

export default Icons;
