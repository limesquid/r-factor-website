import componentNameCollisionPattern from './component-name-collision-pattern';
import componentSuperclass from './component-superclass';
import defaultComponentName from './default-component-name';
import defaultHocComponentName from './default-hoc-component-name';
import endOfLine from './end-of-line';
import functionalComponentType from './functional-component-type';
import indent from './indent';
import mapDispatchToPropsName from './map-dispatch-to-props-name';
import mapDispatchToPropsPreferObject from './map-dispatch-to-props-prefer-object';
import mapStateToPropsName from './map-state-to-props-name';
import mapStateToPropsPreferOneLine from './map-state-to-props-prefer-one-line';
import mergePropsName from './merge-props-name';
import modulesOrder from './modules-order';
import quotes from './quotes';
import semicolons from './semicolons';

export default [
  componentNameCollisionPattern,
  componentSuperclass,
  defaultComponentName,
  defaultHocComponentName,
  endOfLine,
  functionalComponentType,
  indent,
  mapDispatchToPropsName,
  mapDispatchToPropsPreferObject,
  mapStateToPropsName,
  mapStateToPropsPreferOneLine,
  mergePropsName,
  modulesOrder,
  quotes,
  semicolons
].sort((a, b) => a.name.localeCompare(b.name));
