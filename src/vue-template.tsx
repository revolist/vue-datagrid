import { RevoGrid } from "@revolist/revogrid/dist/types/interfaces";
import { VNode } from "@revolist/revogrid/dist/types/stencil-public-runtime";
import { VueConstructor } from "vue/types/umd";

interface VueElement extends HTMLElement {
    __vue__?: Vue;
}
export const vueTemplateConstructor =
    (vueConstructor: VueConstructor, e: HTMLElement, p: Record<string, any>) => {
        let el: VueElement|undefined;
        if (e?.childNodes.length) {
            el = e.childNodes[0] as VueElement;
        }
        
        if (!el) {
            // create dom element wrapper for vue instance
            el = document.createElement('span');
            e.appendChild(el);
        }

        // check, probably vue instance already inited
        let vueInstance = el.__vue__;
        // if exists, return
        if (vueInstance) {
            // if vue inited just update it's properties
            for (const k in p) {
                vueInstance.$props[k] = p[k];
            }
        } else {
            // create vue instance
            vueInstance = new vueConstructor({
                el,
                propsData: p,
            });
        }
        return vueInstance;
    };

const vueTemplate = (vueConstructor: VueConstructor) => {
    return (h: RevoGrid.HyperFunc<VNode>, p: RevoGrid.ColumnDataSchemaModel) =>
        <span ref={(el: HTMLElement) => vueTemplateConstructor(vueConstructor, el, p)}></span>;
};

export default vueTemplate;
