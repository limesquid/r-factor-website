import addClassname from './add-classname';
import convertSvgToComponent from './convert-svg-to-component';
import convertToArrowComponent from './convert-to-arrow-component';
import convertToFunctionComponent from './convert-to-function-component';
import convertToClassComponent from './convert-to-class-component';
import generatePropTypes from './generate-prop-types';
import moveDefaultPropsAndPropTypesOutOfClass from './move-default-props-and-prop-types-out-of-class';
import moveDefaultPropsAndPropTypesToClass from './move-default-props-and-prop-types-to-class';
import toggleComponentType from './toggle-component-type';
import toggleWithrouterHoc from './toggle-withrouter-hoc';

export default [
  addClassname,
  convertSvgToComponent,
  convertToArrowComponent,
  convertToFunctionComponent,
  convertToClassComponent,
  generatePropTypes,
  moveDefaultPropsAndPropTypesOutOfClass,
  moveDefaultPropsAndPropTypesToClass,
  toggleComponentType,
  toggleWithrouterHoc
];
