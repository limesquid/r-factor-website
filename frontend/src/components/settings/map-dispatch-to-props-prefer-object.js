import React from 'react';
import RadioSetting from 'components/radio-setting';

const options = [
  { label: 'No', value: false },
  { label: 'Yes', value: true }
];

const MapDispatchToPropsPreferObject = (props) => (
  <RadioSetting
    id="map-dispatch-to-props-prefer-object-select"
    label="Prefer object mapDispatchToProps"
    options={options}
    {...props} />
);

export default MapDispatchToPropsPreferObject;
