import endOfLine from './end-of-line';
import indent from './indent';
import modulesOrder from './modules-order';
import quotes from './quotes';
import semicolons from './semicolons';
import componentSuperclass from './component-superclass';
import functionalComponentType from './functional-component-type';

export default [
  endOfLine,
  indent,
  modulesOrder,
  quotes,
  semicolons,
  componentSuperclass,
  functionalComponentType
].sort((a, b) => a.name.localeCompare(b.name));
