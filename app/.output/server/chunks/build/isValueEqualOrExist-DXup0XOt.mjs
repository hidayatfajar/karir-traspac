import { n } from './nullish-aV-w2MPu.mjs';
import { j as isEqual } from '../_/nitro.mjs';

function i(i2, o) {
  return !n(i2) && (Array.isArray(i2) ? i2.some((s2) => isEqual(s2, o)) : isEqual(i2, o));
}

export { i };
//# sourceMappingURL=isValueEqualOrExist-DXup0XOt.mjs.map
