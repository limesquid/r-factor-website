import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/link';

const Links = ({ className, features }) => (
  <ul className={className}>
    {features.map(({ id, name }) => (
      <li key={id}>
        <Link href={`/documentation/${id}`} label={name} />
      </li>
    ))}
  </ul>
);

Links.propTypes = {
  className: PropTypes.string,
  features: PropTypes.array.isRequired
};

export default Links;
