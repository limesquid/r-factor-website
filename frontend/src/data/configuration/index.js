import endOfLine from './end-of-line';
import indent from './indent';
import mapDispatchToPropsName from './map-dispatch-to-props-name';
import mapDispatchToPropsPreferObject from './map-dispatch-to-props-prefer-object';
import mapStateToPropsName from './map-state-to-props-name';
import mapStateToPropsPreferOneLine from './map-state-to-props-prefer-one-line';
import mergePropsName from './merge-props-name';
import modulesOrder from './modules-order';
import quotes from './quotes';
import semicolons from './semicolons';
import componentSuperclass from './component-superclass';
import functionalComponentType from './functional-component-type';

export default [
  endOfLine,
  indent,
  mapDispatchToPropsName,
  mapDispatchToPropsPreferObject,
  mapStateToPropsName,
  mapStateToPropsPreferOneLine,
  mergePropsName,
  modulesOrder,
  quotes,
  semicolons,
  componentSuperclass,
  functionalComponentType
].sort((a, b) => a.name.localeCompare(b.name));
