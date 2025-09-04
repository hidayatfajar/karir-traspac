import { v as Wt, P as xm } from './server.mjs';

const d = Wt.defineComponent({ __name: "VisuallyHidden", props: { feature: { default: "focusable" }, asChild: { type: Boolean }, as: { default: "span" } }, setup: (d2) => (d3, i) => (Wt.openBlock(), Wt.createBlock(Wt.unref(xm), { as: d3.as, "as-child": d3.asChild, "aria-hidden": "focusable" === d3.feature ? "true" : void 0, "data-hidden": "fully-hidden" === d3.feature ? "" : void 0, tabindex: "fully-hidden" === d3.feature ? "-1" : void 0, style: { position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", clipPath: "inset(50%)", whiteSpace: "nowrap", wordWrap: "normal" } }, { default: Wt.withCtx(() => [Wt.renderSlot(d3.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"])) });

export { d };
//# sourceMappingURL=VisuallyHidden-CudQpOEQ.mjs.map
