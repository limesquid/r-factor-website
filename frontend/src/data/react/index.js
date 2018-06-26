import addClassname from './add-classname';
import convertToArrowComponent from './convert-to-arrow-component';
import convertToFunctionComponent from './convert-to-function-component';
import convertToClassComponent from './convert-to-class-component';
import generatePropTypes from './generate-prop-types';
import moveDefaultPropsOutOfClass from './move-default-props-out-of-class';
import moveDefaultPropsToClass from './move-default-props-to-class';
import movePropTypesOutOfClass from './move-prop-types-out-of-class';
import movePropTypesToClass from './move-prop-types-to-class';
import toggleComponentType from './toggle-component-type';

export default [
  addClassname,
  convertToArrowComponent,
  convertToFunctionComponent,
  convertToClassComponent,
  generatePropTypes,
  moveDefaultPropsOutOfClass,
  moveDefaultPropsToClass,
  movePropTypesOutOfClass,
  movePropTypesToClass,
  toggleComponentType
];
