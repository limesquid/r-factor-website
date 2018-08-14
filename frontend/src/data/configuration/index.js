import componentNameCollisionPattern from './component-name-collision-pattern';
import componentSuperclass from './component-superclass';
import defaultComponentName from './default-component-name';
import defaultHocComponentName from './default-hoc-component-name';
import endOfLine from './end-of-line';
import functionalComponentType from './functional-component-type';
import indent from './indent';
import mapDispatchToPropsName from './map-dispatch-to-props-name';
import mapStateToPropsName from './map-state-to-props-name';
import mergePropsName from './merge-props-name';
import modulesOrder from './modules-order';
import NODE_BIN from './NODE_BIN';
import quotes from './quotes';
import semicolons from './semicolons';
import svgComponentType from './svg-component-type';
import trailingCommas from './trailing-commas';
import useMapDispatchToPropsShorthand from './use-map-dispatch-to-props-shorthand';

export default [
  componentNameCollisionPattern,
  componentSuperclass,
  defaultComponentName,
  defaultHocComponentName,
  endOfLine,
  functionalComponentType,
  indent,
  mapDispatchToPropsName,
  mapStateToPropsName,
  mergePropsName,
  modulesOrder,
  NODE_BIN,
  quotes,
  semicolons,
  svgComponentType,
  trailingCommas,
  useMapDispatchToPropsShorthand
].sort((a, b) => a.name.localeCompare(b.name));
