import { RevoGrid } from "@revolist/revogrid/dist/types/interfaces";
import { VNode } from "@revolist/revogrid/dist/types/stencil-public-runtime";
import { VueConstructor } from "vue/types/umd";
interface VueElement extends HTMLElement {
    __vue__?: Vue;
}
const vueTemplateConstructor =
    (vueConstructor: VueConstructor, e: HTMLElement, p: RevoGrid.ColumnDataSchemaModel) => {
        for (const k in e?.childNodes) {
            // check, probably vue instance already inited
            const el = (e.childNodes[k] as VueElement).__vue__;

            // if exists, return
            if (el) {
                // if vue inited just update it's properties
                for (const key in p) {
                    const propKey = key as keyof RevoGrid.ColumnDataSchemaModel;
                    el.$set(el, propKey, p[propKey]);
                }
                return;
            }
        }

        if (e) {
            // create dom element wrapper for vue instance
            const el: VueElement = document.createElement('span');
            e.appendChild(el);

            // create vue instance
            new vueConstructor({
                el,
                propsData: p,
            });
        }
    };

const vueTemplate = (vueConstructor: VueConstructor) => {
    return (h: RevoGrid.HyperFunc<VNode>, p: RevoGrid.ColumnDataSchemaModel) => {
        return <span ref={(el: HTMLElement) => vueTemplateConstructor(vueConstructor, el, p)}></span>;
    };
};

export default vueTemplate;
