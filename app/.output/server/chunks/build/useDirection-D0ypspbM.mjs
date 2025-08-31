import { v as Wt } from './server.mjs';
import { o } from './ConfigProvider-BpvNyuo1.mjs';

function e(e2) {
  const i = o({ dir: Wt.ref("ltr") });
  return Wt.computed(() => {
    var r2;
    return (null == e2 ? void 0 : e2.value) || (null == (r2 = i.dir) ? void 0 : r2.value) || "ltr";
  });
}

export { e };
//# sourceMappingURL=useDirection-D0ypspbM.mjs.map
